<template>
    <div style="background-color: #ededed;">
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

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
                <span style="display: block; font-weight: bold;">{{active.title}}</span>
                <div v-if="active.endTime" style="font-size: 14px; line-height: 30px;">倒计时:
                    <nut-countdown style="font-size: 14px;"
                                   showDays
                                   showPlainText
                                   :endTime="active.startTime* 1000"
                    >
                    </nut-countdown>

                </div>
            </div>

            <div class="amy-detail-header bwhite" style="margin-top: 10px;">
                <div style="line-height: 25px;">
                    <span>参团数：{{active.memberCount}}/{{active.activeLimited}}</span>
                    <span style="float: right;">出行天数：{{active.days}}天{{active.night}}夜</span>
                </div>
                <div style="line-height: 25px;">
                    <span>成人价：{{active.priceAdult|moneyFilter(0)}}</span>
                    <span style="float: right;">学生价：<span
                            style="color: red; font-size: 16px;">{{active.priceChild}}</span></span>
                </div>
            </div>

            <div class="amy-detail-header bwhite" style="line-height: 28px;">
                <h3 class="amy-title">活动详情</h3>
                <p v-html="active.introduction"></p>
            </div>

            <div class="amy-detail-header bwhite">
                <h3 class="amy-title">服务机构</h3>
                <nut-row gutter="4">
                    <nut-col span="10">
                        <img style="width: 100%;" src="../../../src/asset/img/sw5.jpg"/>
                    </nut-col>
                    <nut-col span="14" style="font-size: 14px;">
                        <p>湖南艾盟芽教育科技有限公司</p>
                        <a :href="'tel:13107411566'">
                            <img src="../../asset/img/hitphone.png"
                                 style="width: 14px;height: 14px; position: relative; top: -8px;"/>
                            <span style="color: orange;">拨打电话</span>
                        </a>
                        <!--<p>{{course.organization?course.organization.name:''}}</p>
                        <a :href="'tel:'+(course.organization!=null?course.organization.operator_mobile:'0')" class="clear" style="display:block; height:30px;vertical-align:center;">
                            <img src="../../asset/img/hitphone.png" class="fl" style="display:block; width:14px; height:14px;margin-top: 8px;"/>
                            <p class="fl">拨打电话</p>
                        </a>-->
                    </nut-col>
                </nut-row>
            </div>
        </div>

        <div style="width: 90%; margin-left: 5%; font-size: 14px; position: fixed; bottom: 10px; line-height: 25px;">
            <span style="border: 1px solid #aaaaaa; background-color: white; padding: 3px 13px; border-radius: 20px;">首页</span>
            <span style="border: 1px solid #aaaaaa; background-color: white; padding: 3px 13px; border-radius: 20px;">收藏</span>
            <span style="float: right; padding: 3px 13px; border-radius: 20px;background-color: orange; color: white;">立即报名</span>
        </div>
    </div>
</template>

<script>
    import Back from "../component/back";
    export default {
        name: "ActivityDetail",
        components: {Back},
        data() {
            return {
                titleTxt: '活动详情',
                active: {},
                banner: []
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            title() {

            },
            getData() {
                let data = {id: Number(this.id)}
                request.post("mini/findActiveDetail", data).then(res => {
                        console.log("data", res.data)
                        this.active = res.data
                        this.banner = JSON.parse(res.data.banner)
                        console.log("banner", this.banner)
                    }
                )
            },
        },
        created() {
            let self = this;
            let param = this.$route.query
            if (param && param.id) {
                self.id = param.id
                self.getData();
            }
        },


    }
</script>

<style>
    /*i {
        background-color: #555555;
        color: white;
        padding: 0 2px;
        margin: 0 3px;
    }*/
</style>
