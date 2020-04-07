<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <div class="comm-container comm-topnav-content">
            <!--搜索栏-->
            <div style="margin: 8px 0;">
                <nut-searchbar placeText="请输入搜索信息" class="fs14 amy-searchbar"></nut-searchbar>
            </div>

            <!--筛选栏-->
            <div class="amy-tabtitle">
                <div class="amy-titleList list1">
                    <div style="width: 25%;">
                        <span slot="title" @click="switchMenu('isVisible1',1)" ref="title1">全部分类</span>
                    </div>
                    <div style="width: 25%;">
                        <span slot="title" @click="switchMenu('isVisible2',1)" ref="title2">全部时间</span>
                    </div>
                    <div style="width: 25%;">
                        <span slot="title" @click="switchMenu('isVisible3',1)" ref="title3">全部费用</span>
                    </div>
                    <div style="width: 25%;">
                        <span slot="title" @click="switchMenu('isVisible4',1)" ref="title4">综合筛选</span>
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
                <nut-menu
                        :isVisible="visible.isVisible4"
                        :list="list4"
                        type="simple"
                        @close="switchMenu('isVisible4',4)"
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
                    <!--<div slot="list" class="nut-vert-list-panel">
                        <div @click="itemClick(item)" class="nut-vert-list-item" v-for="(item, index) of courseList"
                             :key="index">
                            <dl class="nut-scroller-item-info">
                                <nut-row style="padding: 10px 10px; height: 115px">
                                    <nut-col span="10">
                                        <img style="display: block; width: 100%; height: 100px; border-radius: 5px;"
                                             :src="item.head_page">
                                    </nut-col>
                                    <nut-col span="14" style="padding: 0 10px;">
                                        <p style="height: 30px; line-height: 20px; font-size: 16px;">{{item.title}}</p>
                                        <p style="font-size: 13px; line-height: 40px;">已报名 <span style="font-size: 14px; float: right; color: red;">免费</span></p>
                                        <p style="font-size: 13px; line-height: 40px;"><span style="background-color: #5daae6; color: white; padding: 2px 5px; border-radius: 6px;">立即报名</span></p>
                                    </nut-col>
                                </nut-row>
                            </dl>
                        </div>
                    </div>-->
                    <div slot="list" class="nut-vert-list-panel">
                        <ChooseItem4 v-for="(item, index) of courseList" :key="index" :item="item" @fromInner="itemClick(item)">
                        </ChooseItem4>
                    </div>
                </nut-scroller>
            </div>


        </div>
    </div>
</template>

<script>
    import Back from "../component/back";
    import ChooseItem4 from "../component/choose-item4";
    export default {
        name: "chooseOnline",
        components: {Back,ChooseItem4},
        data() {
            return {
                isUnMore: false,
                isLoading: false,
                courseList: [],
                courseListTemp: [],
                total: 0,
                pageSize: 7,
                page: 1,
                titleTxt: '',
                num: 1,
                titlenum: 1,
                max: 6,
                visible:
                    {
                        isVisible1: false,
                        isVisible2: false,
                        isVisible3: false,
                        isVisible4: false
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
                            text: "昨天",
                            selected: false
                        }
                    ],
                list3:
                    [
                        {
                            id: 1,
                            text: "全部费用",
                            selected: true
                        },
                        {
                            id: 2,
                            text: "500元",
                            selected: false
                        }
                    ],
                list4:
                    [
                        {
                            id: 1,
                            text: "综合筛选",
                            selected: true
                        },
                        {
                            id: 2,
                            text: "哎呦",
                            selected: false
                        }
                    ]
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            title() {

            },
            itemClick(item) {
                let url = "online-detail?id=" + item.id
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
                        self.titleTxt = "在线课程";
                        break;
                    case 2:
                        self.titleTxt = "我的课程";
                }
            }
            this.getData(1);
        }

    }
</script>

<style scoped>
    .search{
        width: 85%;
        font-size: 16px;
        border: 1px solid #efefef;
        margin-left: 10px;
        border-radius: 10px;
        text-indent: 10px;
        height: 30px;
        background-color: #efefef;
    }
    .demo {
        padding-left: 0;
        padding-right: 0;
    }
    .my-time{
        padding: 0 2px;
        background-color: #555555;
        color: white;
        margin: 0 3px;
    }
    .list {
        font-size: 16px;
        display: flex;
        position: relative;
        z-index: 1010;
        padding: 0 10px;
        min-height: 48px;
        align-items: center;
        text-align: center;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        background-image: linear-gradient(
                rgba(218, 218, 218, 0.5),
                rgba(218, 218, 218, 0.5)
        );
        background-size: 100% 1px;
        background-repeat: no-repeat;

    span {
        flex: 1;
        display: inline-block;
        width: 120px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    }

    .custom-wrap {
        height: 260px;
        line-height: 260px;
        text-align: center;
    }
</style>
