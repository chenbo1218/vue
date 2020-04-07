<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <!--搜索栏-->
            <div style="margin: 8px 0;">
                <nut-searchbar placeText="请输入搜索信息" class="fs14 amy-searchbar"></nut-searchbar>
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
                        <ChooseItem3 v-for="(item, index) of courseList" :key="index" :item="item" @fromInner="itemClick(item)">
                        </ChooseItem3>
                    </div>
                </nut-scroller>
            </div>


        </div>
    </div>
</template>

<script>
    import Back from "../component/back";
    import ChooseItem3 from "../component/choose-item3";
    export default {
        name: "chooseTeacher",
        components: {Back,ChooseItem3},
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
            }
        },
        methods: {
            itemClick(item) {
                let url = "teacher-detail?id=" + item.id
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
                        self.titleTxt = "名师列表";
                        break;
                    case 2:
                        self.titleTxt = "我的老师";
                }
            }
            this.getData(1);
        }

    }
</script>

<style scoped>

</style>
