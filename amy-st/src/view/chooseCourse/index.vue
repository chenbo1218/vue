<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <!--筛选栏-->
            <div class="amy-tabtitle">
                <div class="amy-titleList list1">
                    <div style="width: 33%;">
                        <span slot="title" @click="switchMenu('isVisible1',1)" ref="title1">全部分类</span>
                    </div>
                    <div style="width: 33%;">
                        <span slot="title" @click="switchMenu('isVisible2',1)" ref="title2">全部时间</span>
                    </div>
                    <div style="width: 33%;">
                        <span slot="title" @click="switchMenu('isVisible3',1)" ref="title3">全部课时</span>
                    </div>
                </div>
                <nut-menu
                        :isVisible="visible.isVisible1"
                        :list="list1"
                        type="simple"
                        @close="switchMenu('isVisible1',1)"
                        @choose="chooseMenu">
                </nut-menu>
                <nut-menu
                        :isVisible="visible.isVisible2"
                        :list="list2"
                        type="simple"
                        @close="switchMenu('isVisible2',2)"
                        @choose="chooseMenu">
                </nut-menu>
                <nut-menu
                        :isVisible="visible.isVisible3"
                        :list="list3"
                        type="simple"
                        @close="switchMenu('isVisible3',3)"
                        @choose="chooseMenu">
                </nut-menu>
            </div>

            <!--滚动列表-->
            <div style="height: 680px;">
                <nut-scroller
                        :is-un-more="isUnMore"
                        :is-loading="isLoading"
                        :type="'vertical'"
                        @loadMore="loadMoreVert"
                        @pulldown="pulldown"
                >
                    <div slot="list" class="nut-vert-list-panel">
                        <ChooseItem1 v-for="(item, index) of courseList" :key="index" :item="item" @fromInner="itemClick(item)">
                        </ChooseItem1>
                    </div>
                </nut-scroller>
            </div>
        </div>

    </div>
</template>

<script>
    import Back from "../component/back";
    import ChooseItem1 from "../component/choose-item1";
    export default {
        name: "chooseCourse",
        components: {Back,ChooseItem1},
        data() {
            return {
                isUnMore: false,
                isLoading: false,
                courseList: [],
                courseListTemp: [],
                total: 0,
                pageSize: 5,
                page: 1,
                titleTxt: '课程列表',
                num: 1,
                titlenum: 1,
                max: 6,
                visible:
                    {
                        isVisible1: false,
                        isVisible2: false,
                        isVisible3: false
                    }
                ,
                list1: [
                    {
                        id: 1,
                        text: "全部分类",
                        selected: true
                    }
                ],
                list2:
                    [
                        {
                            id: 1,
                            text: "全部时间",
                            selected: true
                        },
                        {
                            id: 2,
                            text: "全部课时",
                            selected: false
                        }
                    ],
                list3:
                    [
                        {
                            id: 1,
                            text: "全部课时",
                            selected: true
                        },
                        {
                            id: 2,
                            text: "2级",
                            selected: false
                        }
                    ]
            }
        },
        methods: {
            itemClick(item) {
                let url = "course-detail?id=" + item.id
                this.$router.push(url);
            },
            loadMoreVert() {
                let isEnd = Math.floor(this.total / this.pageSize);
                if (isEnd >= this.page) {
                    this.page = ++this.page;
                    this.getData(2);
                    this.isUnMore = false;
                } else {
                    this.isUnMore = true;
                    console.log("no flush")
                }

            },
            pulldown() {
                this.page = 1;
                this.getData(1);
            },
            switchMenu(param, num) {
                this.num = num;
                this.titlenum = param.split("isVisible")[1];
                for (let key in this.visible) {
                    if (key !== param) {
                        this.visible[key] = false;
                    }
                }
                Array.from(document.querySelectorAll(".list")).forEach(item => {
                    item.style.zIndex = 0;
                });
                if (!this.visible[`${param}`]) {
                    document.querySelector(".list" + this.num).style.zIndex = 9999;
                }
                this.visible[`${param}`] = !this.visible[`${param}`];
            },
            chooseMenu(item, index, list) {
                this.switchMenu("isVisible" + this.titlenum, 1);
                this['list' + this.titlenum].map((value, key) => (value.selected = false));
                this.$set(this['list' + this.titlenum][index], "selected", true);
                this.$refs[`title${this.titlenum}`].innerText = item.text;
                console.log("choose", item)
            },
            ok(list) {
                let arr = [];
                list.forEach((item, index) => {
                    if (item.selected) {
                        arr.push(item.text);
                    }
                });

                if (!!arr.length) {
                    this.$refs[`title${this.titlenum}`].innerText = arr.join();
                }
            },
            getData(fromSrc) {
                this.isLoading = true;
                let param = {
                    page: this.page,
                    pageSize: this.pageSize
                }
                request.post("mini/findCourseList", param).then(res => {
                    if (fromSrc && fromSrc == 1) {
                        this.courseList = res.data.data;
                    } else {
                        this.courseList = this.courseList.concat(res.data.data);
                    }
                    this.total = res.data.total;
                    this.isLoading = false;
                }).catch(err => {
                    this.isLoading = false;
                })
            }
        },
        created() {
            let self = this;
            let param = this.$route.query
            if (param && param.fromSrc) {
                console.log("code", param.fromSrc)
                switch (Number(param.fromSrc)) {
                    case 1:
                        self.titleTxt = "课程列表";
                        break;
                    case 2:
                        self.titleTxt = "我的课程";
                }
            }
            this.getData(1);
        }

    }
</script>

<style>
    .nut-menu .nut-menu-panel .menu-simple ul li.selected{
        color: #ffaa31 !important;
    }
    .nut-menu .nut-menu-panel .menu-simple ul li.selected .nut-icon{
        color: #ffaa31 !important;
    }
    .amy-titleList {
        font-size: 14px;
        display: flex;
        position: relative;
        z-index: 1010;
        min-height: 48px;
        align-items: center;
        text-align: center;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }

</style>
