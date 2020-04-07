<!-- 消息页面 -->
<template>
    <div>
        <nut-tabbar
            :tabbarList="tabList3"
            :bottom="true"
            class="my-tabbar"
            @tab-switch="tabSwitch3"
        >
        </nut-tabbar>

        <div class="comm-container comm-bottomnav-content">
            <!--<nut-scroller
                :is-un-more="isUnMore"
                :is-loading="isLoading"
                :type="'vertical'"
                @loadMore="loadMore"
                @pulldown="pullDown"
            >-->
            <nut-tab @tab-switch="tabSwitch">
                <nut-tab-panel tabTitle="作业">
                    <!--无作业提示-->
                    <p v-show="!data1.length" class="comm-none-label">暂无作业布置</p>
                    <!--作业列表-->
                    <div v-show="data1.length" class="amy-message-list">
                        <MessageItem
                            v-for="(item, index) in data1"
                            :key="index"
                            :title="item.title"
                            :desc="item.desc"
                            :time="item.time"
                            @fromInner="showModal(item)"
                        >
                        </MessageItem>
                    </div>
                </nut-tab-panel>
                <nut-tab-panel tabTitle="通知">
                    <!--无通知提示-->
                    <p v-show="!data2.length" class="comm-none-label">暂无通知信息</p>
                    <!--通知列表-->
                    <div v-show="data2.length" class="amy-message-list">
                        <MessageItem
                            v-for="(item, index) in data2"
                            :key="index"
                            :title="item.title"
                            :desc="item.desc"
                            :time="item.time"
                            @fromInner="showModal(item)"
                        >
                        </MessageItem>
                    </div>
                </nut-tab-panel>
            </nut-tab>
            <!--            </nut-scroller>-->
        </div>

        <!--弹框-->
        <nut-popup
            v-model="showMessage"
            class="amy-modal"
            closeable
            close-icon="cross"
            close-on-click-overlay
        >
            <div class="amy-modal-title">
                消息详情
            </div>
            <div class="amy-modal-content">
                <p class="bold dadian" style="height: 30px;line-height: 30px;">{{title}}</p>
                <div class="amy-modal-content__cont">
                    <!--文本域-->
                    <p>{{ desc }}</p>
                </div>
            </div>
        </nut-popup>
    </div>
</template>

<script>
import MessageItem from "./components/message-item";
import { findClientNoticePage } from "../api/notice";
export default {
    components: { MessageItem },
    data() {
        return {
            teacherId: "",
            currentTxt: "",
            tabList3: [
                {
                    tabTitle: "首页",
                    curr: false,
                    icon:
                        "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
                    activeIcon:
                        "http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg",
                    href: "/"
                },
                {
                    tabTitle: "消息",
                    curr: true,
                    icon:
                        "http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg",
                    activeIcon:
                        "http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg",
                    href: "/message"
                },
                {
                    tabTitle: "我的",
                    curr: false,
                    icon:
                        "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
                    activeIcon:
                        "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
                    href: "/mine"
                }
            ],
            data1: [
                {
                    title: "数学练习册第23页",
                    desc:
                        "只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。",
                    time: "2020-04-02 11:53",
                    author: "君君老师"
                },
                {
                    title: "唐诗一首",
                    desc: "深情朗读",
                    time: "2020-04-02 11:53",
                    author: "小明老师"
                },
                {
                    title: "数学练习册第23页",
                    desc: "只做应用题",
                    time: "2020-04-02 11:53",
                    author: "小明老师"
                }
            ],
            data2: [
                {
                    title: "家长会展开主题征集",
                    desc: "家长知会",
                    time: "2020-04-02 11:53",
                    author: "君君老师"
                },
                {
                    title: "家长会展开主题征集",
                    desc: "家长知会",
                    time: "2020-04-02 11:53",
                    author: "君君老师"
                }
            ],
            showMessage: false,
            title: "",
            desc: "",

            isUnMore: false,
            isLoading: false,
            total: 0,
            pageSize: 5,
            page: 1
        };
    },

    methods: {
        tabSwitch3: function(value, index) {
            console.log(index);
        },
        tabSwitch: function(index) {
            let self = this;
            if (index === 1) {
                findClientNoticePage({ noticeType: 2, teacherId: this.teacherId }).then(res => {
                    self.noticeList = res.data.data;
                    console.debug(" self.noticeList", self.noticeList);
                });
            }
            console.log("switch tab");
        },
        showModal: function(item) {
            console.log("show modal");
            console.log(item);
            this.title = item.title;
            this.desc = item.desc;
            this.showMessage = true;
        },

        loadMore() {
            let isEnd = Math.floor(this.total / this.pageSize);
            if (isEnd >= this.page) {
                this.page = ++this.page;
                this.getData(2);
                this.isUnMore = false;
            } else {
                this.isUnMore = true;
                console.log("no flush");
            }
        },
        pullDown() {
            this.page = 1;
            this.getData(1);
        }
    }
};
</script>

<style>
/*tab标签栏*/
.nut-tab {
    padding: 0 !important;
    border: none !important;
    background: #fff !important;
}
.nut-tab-title {
    width: 50% !important;
    margin: 0 auto;
}
.nut-title-nav a {
    font-size: 14px;
}
.nut-title-nav.nut-tab-active a {
    color: #ffaf45 !important;
}
.nav-bar {
    background: #ffaf45 !important;
}
.nut-tab-link {
    font-weight: normal;
    font-size: 14px;
}
.nut-tab-active .nut-tab-link {
    font-weight: normal !important;
}
.nut-tab-item {
    padding: 0 0 !important;
    height: auto !important;
}

/*列表*/
.amy-message-list {
    margin-top: 15px;
}
</style>
