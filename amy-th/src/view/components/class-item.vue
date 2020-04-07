<!--班级列表组件-->
<template>
    <nut-cell
        class="amy-class-item"
        :is-link="true"
        :show-icon="true"
        bg-color="#ffaf45"
        @click-cell="clickEvent"
    >
        <span slot="title">{{ name }}</span>
        <span slot="sub-title">{{ members }}人</span>
        <span slot="desc">{{ desc }}</span>
    </nut-cell>
</template>

<script>
export default {
    name: "class-item",
    props: {
        name: String,
        members: Number,
        id: Number,
        desc: String
    },
    data() {
        return {};
    },
    methods: {
        clickEvent() {
            console.log("click class-item");
            this.$emit("fromInner", 1);
        }
    }
};
</script>

<style>
.amy-class-item {
    height: 70px;
    line-height: 20px;
    padding: 15px 10px !important;
    margin-bottom: 10px;
    border-radius: 3px;
    background-image: none !important;
}
.amy-class-item .nut-cell-box {
    min-height: 40px !important;
    height: 40px !important;
    overflow: hidden;
    background-image: none !important;
}
.amy-class-item .nut-cell-title {
    color: #fff !important;
    line-height: 20px !important;
}
.amy-class-item .nut-cell-sub-title {
    color: #f4f4f4 !important;
    margin-top: 0 !important;
    line-height: 20px !important;
}
.amy-class-item .nut-cell-icon i.nut-icon {
    color: #fff !important;
}
</style>
