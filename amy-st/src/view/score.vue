<template>
    <div>
        <nut-navbar :right-show="false" @on-click-back="back"
                    style="z-index: 9999; position: fixed; top: 0; width: 100%; color: #070707; height:40px; font-size: 20px; line-height: 40px;">
            {{titleTxt}}
            <a slot="back-icon">返回</a>
        </nut-navbar>
        <div style="margin-top: 40px;">
            <div style="margin: 10px; border: 1px solid #ececec; border-radius: 7px;">
                <div style="font-size: 16px; padding: 10px; font-weight: bold;">唱歌(第一课时)</div>
                <div style="font-size: 14px; padding: 0px 20px 10px 20px; border-bottom: 1px solid #ececec;">
                    <span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">声音</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">节奏控制</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">表演水准</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">音色音准</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">声音</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">声音</i>
                        <i>5</i>
                    </span>
                </div>
                <div style="padding: 10px;">
                    <div style="font-size: 16px; font-weight: bold;">老师评语：</div>
                    <p style="font-size: 14px; line-height: 25px;">该学生本堂课能够认真听讲，学习进度能够跟上老师的节奏，进步很快！</p>
                </div>
            </div>

            <div style="margin: 10px; border: 1px solid #ececec; border-radius: 7px;">
                <div style="font-size: 16px; padding: 10px; font-weight: bold;">唱歌(第一课时)</div>
                <div style="font-size: 14px; padding: 0px 20px 10px 20px; border-bottom: 1px solid #ececec;">
                    <span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">声音</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">节奏控制</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">表演水准</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">音色音准</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">声音</i>
                        <i>5</i>
                    </span><span style="margin-right: 20px; display: inline-block; text-align: center;">
                        <i style="display: block;">声音</i>
                        <i>5</i>
                    </span>
                </div>
                <div style="padding: 10px;">
                    <div style="font-size: 16px; font-weight: bold;">老师评语：</div>
                    <p style="font-size: 14px; line-height: 25px;">该学生本堂课能够认真听讲，学习进度能够跟上老师的节奏，进步很快！</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                titleTxt: '学员得分列表',
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            title() {

            },
        }

    }
</script>

<style>

</style>