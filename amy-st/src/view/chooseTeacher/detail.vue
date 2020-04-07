<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <div class="comm-topnav-content fs14">
            <div style="width: 100%; text-align: center;">
                <img src="../../../src/asset/img/ava.jpg" width="100px" style="border-radius: 50%;" />
            </div>
            <div style="font-size: 16px; text-align: center; width: 80%; margin-left: 10%; border-bottom: 1px solid #ececec; padding-bottom: 10px;">公孙瓒</div>
            <div style="width: 80%; margin-left: 10%; font-size: 14px; margin-top: 10px; text-align: center;">擅长课程</div>
            <div style="width: 90%; margin-left: 5%; font-size: 14px; margin-top: 10px; text-align: center;">
                <span style="background: #e4e4e4; padding: 2px 5px; border-radius: 10px;">马克思主义</span>
                <span style="background: #e4e4e4; padding: 2px 5px; border-radius: 10px;">毛泽东思想</span>
            </div>
            <div style="font-size: 14px; width: 90%; margin-left: 5%; margin-top: 10px;">
                <p>公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》 [1]  ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》 [1]  ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》 [1]  ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》 [1]  ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。公孙瓒（？—199年），字伯圭（出自《刘宽碑阴》 [1]  ，《三国志》等文史多作伯珪，公孙瓒为刘宽门生，参与了刘宽的葬礼，碑阴为当时人甚至本人签名，故当从碑）其名与字的对应当是取自“圭瓒”一词，辽西令支（今河北迁安）人，东汉末年武将、军阀，汉末群雄之一。</p>
            </div>
        </div>

    </div>
</template>

<script>
    import Back from "../component/back";
    export default {
        name: "TeacherDetail",
        components: {Back},
        data() {
            return {
                titleTxt: '老师详情',
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

<style scoped>
    i{
        background-color: #555555;
        color: white;
        padding: 0 2px;
        margin: 0 3px;
    }
</style>
