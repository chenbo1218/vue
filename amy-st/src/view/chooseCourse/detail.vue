<template>
    <div style="background-color: #ededed;">
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-topnav-content fs14">
            <nut-swiper
                    direction="horizontal"
                    :loop="true"
                    :swiper-data="banner"
                    :canDragging="false"
                    :auto-play="3000"
                    :paginationVisible="true"
            >
                <div v-for="(item,idx) in banner" :key="idx"
                     class="nut-swiper-slide gray">
                    <img style="width: 100%;height: 100%" :src="item">
                </div>
            </nut-swiper>

            <div class="amy-detail-header bwhite">
                <p>{{course.title}}</p>
                <div class="clear">
                    <p class="fl tag">12个课时</p>
                    <p @click="doPay" class="fr yellow">{{course.fee|moneyFilter()}}</p>
                </div>
            </div>

            <div class="amy-detail-header bwhite">
                <h3 class="amy-title">课程详情</h3>
                <div v-html="course.service" class="clear"/>
            </div>

            <div class="amy-detail-header bwhite">
                <h3 class="amy-title">服务机构</h3>
                <nut-row gutter="4">
                    <nut-col span="10">
                        <img style="width: 100%" :src="course.organization?course.organization.logo:''"/>
                    </nut-col>
                    <nut-col span="14">
                        <p>{{course.organization?course.organization.name:''}}</p>
                        <a :href="'tel:'+(course.organization!=null?course.organization.operator_mobile:'0')" class="clear" style="display:block; height:30px;vertical-align:center;">
                            <img src="../../asset/img/hitphone.png" class="fl" style="display:block; width:14px; height:14px;margin-top: 8px;"/>
                            <p class="fl">拨打电话</p>
                        </a>
                    </nut-col>
                </nut-row>
            </div>

        </div>
    </div>
</template>

<script>
    import Back from "../component/back";

    export default {
        name: "CourseDetail",
        components: {Back},
        data() {
            return {
                titleTxt: '课程详情',
                id: 0,
                course: {},
                banner: []
            }
        },
        created() {
            let self = this;
            let param = this.$route.query
            if (param && param.id) {
                self.id = param.id
                self.getData();
            }
        },
        methods: {
            getData() {
                let data = {courseId: Number(this.id)}
                request.post("mini/getCourse", data).then(res => {
                        this.course = res.data
                        this.banner = JSON.parse(res.data.banner)
                        console.log("banner", this.banner)
                    }
                )
            },
            doPay() {
                let that = this;
                request.post("web/wxPay").then(res => {
                        console.log(res)
                        WeixinJSBridge.invoke(
                            "getBrandWCPayRequest",
                            {
                                appId: res.data.appId, //公众号名称，由商户传入
                                timeStamp: res.data.timeStamp, //时间戳，自1970年以来的秒数
                                nonceStr: res.data.nonceStr, //随机串
                                package: res.data.package,
                                signType: res.data.signType, //微信签名方式：
                                paySign: res.data.sign //微信签名
                            },
                            function (res) {
                                if (res.err_msg == "get_brand_wcpay_request:ok") {
                                    // 使用以上方式判断前端返回,微信团队郑重提示：
                                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。

                                } else {
                                    //  that.$router.push({path: "/myOrder"});
                                }
                            }
                        );
                    }
                )
            },
            wxpay() {

            }
        }
    }
</script>

<style>
    .amy-detail-header {
        padding: 10px 10px;
        width: 100%;
        line-height: 30px;
        margin-bottom: 10px;
        font-size: 14px;
    }

</style>
