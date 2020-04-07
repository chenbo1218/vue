<!--孩子的消息-->
<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"/>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <nut-tab @tab-switch="tabSwitch">
                <nut-tab-panel   tabTitle="作业">
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
                <p class="bold dadian" style="height: 30px;line-height: 30px;">{{ title }}发送</p>
                <div class="amy-modal-content__cont">
                    <!--文本域-->
                    <p>{{ desc }}</p>
                </div>
            </div>
        </nut-popup>
    </div>
</template>

<script>
    import Back from "../component/back";
    import MessageItem from "../component/message-item";
    export default {
        name: "student-message",
        components: {Back,MessageItem},
        data() {
            return {
                titleTxt: "",
                isUnMore: false,
                isLoading: false,
                data1: [
                    {
                        title: "君君老师",
                        desc:
                            "数学练习册第23页，只做应用题，搞不清楚的可以回去问家长什么叫做应用题，要是还找不到就让父母打电话给老师。要是还是找不到老师电话，那就不用来了。",
                        time: "2020-04-02 11:53"
                    },
                    { title: "小明老师", desc: "唐诗一首深情朗读", time: "2020-04-02 11:53" },
                    { title: "堂吉诃德", desc: "数学练习册第23页，只做应用题", time: "2020-04-02 11:53" },
                    { title: "沫沫老师", desc: "唐诗一首，深情朗读", time: "2020-04-02 11:53" },
                    { title: "晓玲老师", desc: "数学练习册第23页，只做应用题", time: "2020-04-02 11:53" }
                ],
                data2: [
                    { title: "君君老师", desc: "关于延迟开学的通知,家长知会", time: "2020-04-02 11:53" },
                    { title: "君君老师", desc: "家长会展开主题征集，家长知会", time: "2020-04-02 11:53" }
                ],
                showMessage: false,
                title: "",
                desc: ""
            }
        },
        created(){
            let self = this;
            let param = this.$route.query;
            if (param && param.studentname) {
                this.titleTxt = param.studentname+"的消息通知";
            }
        },
        methods:{
            tabSwitch: function (value, index) {

            },
            showModal: function(item) {
                console.log("show modal");
                console.log(item);
                this.title = item.title;
                this.desc = item.desc;
                this.showMessage = true;
            }


        }
    }
</script>

<style scoped>
aaa{

}
</style>
