<!--我购买的视频-->
<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <p v-if="" class="comm-none-label">您还没有购买过任何视频</p>
            <!--内容写在这里-->
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
        name: "act",
        components: {Back,ChooseItem4},
        data() {
            return {
                titleTxt: "我的视频",
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
