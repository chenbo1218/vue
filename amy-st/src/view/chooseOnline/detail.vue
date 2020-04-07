<template>
    <div style="background-color: #ededed;">
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-topnav-content fs14">
            <!--视频-->
            <div>
                <nut-video :sources="sources" :options="options" ></nut-video>
            </div>

            <!--简介-->
            <div class="amy-detail-header bwhite">
                <span style="display: block; font-weight: bold;">关于新冠肺炎问题</span>
                <div style="font-size: 14px; line-height: 30px;"><span>类型: 艺体类</span><span style="float: right;">8课时</span>
                </div>
                <div style="font-size: 16px; line-height: 30px; color: red;">免费</div>
            </div>

            <!--课程详情-->
            <div class="amy-detail-header bwhite">
                <nut-tab @tab-switch="tabSwitch">
                    <nut-tab-panel tab-title="课程详情">
                        <p style="font-size: 14px;">公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》 [1]
                            ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》
                            [1]
                            ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。</p>
                    </nut-tab-panel>
                    <nut-tab-panel tab-title="课1时集">
                        <div style="min-height: 270px;">
                            <p style="font-size: 14px; line-height: 30px;">第一课时 黄巾起义 群雄逐鹿<span style="margin-top: -5px; float: right;"><img src="../../../src/asset/img/open.png" width="20" /></span></p>
                            <p style="font-size: 14px; line-height: 30px;">第二课时 曹操得势 官渡之战<span style="margin-top: -5px; float: right;"><img src="../../../src/asset/img/guan.png" width="20" /></span></p>
                            <p style="font-size: 14px; line-height: 30px;">第三课时 荆襄风云 赤壁之战<span style="margin-top: -5px; float: right;"><img src="../../../src/asset/img/guan.png" width="20" /></span></p>
                        </div>
                    </nut-tab-panel>
                    <nut-tab-panel tab-title="评论">
                        <div style="min-height: 270px;">
                            <div class="amy-comment-item">
                                <div>
                                    <img src="../../../src/asset/img/ava.jpg" />
                                    <span>04月02日 13:06</span>
                                </div>
                                <p>本课程让我们深刻的认识到三国时期的历史变化。</p>
                            </div>
                            <div class="amy-comment-item">
                                <div>
                                    <img src="../../../src/asset/img/ava.jpg" />
                                    <span>04月02日 13:06</span>
                                </div>
                                <p>本课程让我们深刻的认识到三国时期的历史变化。</p>
                            </div>

                            <div style="line-height: 50px; border-top: 1px solid #ececec; text-align: center;"><a href="commentList">查看更多</a></div>
                            <div>
                                <input type="text" name="pl" placeholder="说点啥呢" style="text-indent: 5px; width: 75%; height: 35px; border: 1px solid #ececec;" />
                                <a style="display:block;width:20%;height:35px;line-height:35px;text-align:center;background-color: #ffaa31; color: white; border-radius: 5px; float: right;">评论</a>
                            </div>
                        </div>
                    </nut-tab-panel>
                </nut-tab>
            </div>

            <!--服务机构-->
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
        name: "detail",
        components: {Back},
        data() {
            return {
                titleTxt: '课程详情',
                sources: [
                    {
                        src:
                            'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                        type: 'video/mp4'
                    }
                ],
                options: {
                    controls: true,
                    autoplay: true,
                    playsinline:true
                },
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            title() {

            },
            play(elm) {
                console.log('play', elm)
            },
            pause(e) {
                console.log('pause')
            },
            playend(e) {
                alert('播放结束')
            },
            tabSwitch: function (index, event) {
                console.log(index + '--' + event.target);
            }
        }

    }
</script>

<style>
    .nut-tab {
        padding: 0 !important;
    }

    .nut-tab-item {
        height: auto !important;
    }
</style>
