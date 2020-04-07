<!--孩子的课程-->
<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"/>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <p v-if="" class="comm-none-label">暂时还没有课程</p>
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
        name: "student-course",
        components: {Back,ChooseItem1},
        data() {
            return {
                titleTxt: "",
                isUnMore: false,
                isLoading: false,
                courseList: []
            }
        },
        created(){
            let self = this;
            let param = this.$route.query;
            if (param && param.studentname) {
                this.titleTxt = param.studentname+"的课程";
            }
        },
        methods:{
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
        }
    }
</script>

<style scoped>

</style>
