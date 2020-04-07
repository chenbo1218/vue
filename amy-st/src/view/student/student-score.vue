<!--孩子的得分-->
<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"/>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <p v-show="!data.length" class="comm-none-label">暂时还没有得分详情</p>

            <ScoreDetailItem v-for="(item, index) of data" :key="index" :item="item" @fromInner="itemClick(item)">
            </ScoreDetailItem>
        </div>
    </div>
</template>

<script>
    import Back from "../component/back";
    import ScoreDetailItem from "../component/score-detail-item";
    export default {
        name: "student-score",
        components: {Back,ScoreDetailItem},
        data() {
            return {
                titleTxt: "",
                isUnMore: false,
                isLoading: false,
                data: [
                    {
                        courseName: "剪纸",
                        courseTime: 1,
                        list: [{type:"有点闹", score:-3},{type:"很聪明",score:3}],
                        remark: "孩子很优秀，英文造诣很高，尤其可以不用字幕看美剧，以后是栋梁之材。还有一点，孩子喜欢丝袜，是个丝袜控，家长要注意孩子的怪癖倾向。不过，世界上的天才貌似都是怪人。"
                    },
                    {
                        courseName: "陶艺",
                        courseTime: 2,
                        list: [{type:"有点闹", score:-3},{type:"很聪明",score:3}],
                        remark: "孩子很优秀，英文造诣很高，尤其可以不用字幕看美剧，以后是栋梁之材。还有一点，孩子喜欢丝袜，是个丝袜控，家长要注意孩子的怪癖倾向。不过，世界上的天才貌似都是怪人。"
                    }
                ]
            }
        },
        created(){
            let self = this;
            let param = this.$route.query;
            if (param && param.studentname) {
                this.titleTxt = param.studentname+"的得分列表";
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
