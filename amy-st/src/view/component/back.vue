<!-- 顶部导航条组件 -->
<template>
    <div class="fix-top">
        <nut-navbar
            :right-show="false"
            style=" color: #070707; height:50px; font-size: 16px; line-height: 50px;"
            @on-click-back="back"
        >
            {{ titleTxt }}
            <a slot="back-icon">返回</a>
        </nut-navbar>
    </div>
</template>

<script>
export default {
    name: "back",
    props: {
        titleTxt: String
    },
    methods: {
        back() {
            console.log("back");
            this.$router.back();
        }
    }
};
</script>

<style scoped></style>
