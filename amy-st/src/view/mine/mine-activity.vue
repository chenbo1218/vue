<!--我参加过的活动-->
<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"/>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <p v-if="" class="comm-none-label">您还没有参加过任何活动</p>
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
                        <ChooseItem2 v-for="(item, index) of courseList" :key="index" :item="item" @fromInner="itemClick(item)">
                        </ChooseItem2>
                    </div>
                </nut-scroller>
            </div>
        </div>
    </div>
</template>

<script>
    import Back from "../component/back";
    import ChooseItem2 from "../component/choose-item2";
    export default {
        name: "act",
        components: {Back,ChooseItem2},
        data() {
            return {
                titleTxt: "我的活动",
                isUnMore: false,
                isLoading: false,
                courseList: []
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
