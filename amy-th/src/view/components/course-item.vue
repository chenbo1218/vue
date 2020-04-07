<!--课程列表组件-->
<template>
    <div>
        <nut-cell
            class="amy-course-item"
            :is-link="true"
            :show-icon="true"
            @click-cell="clickEvent"
        >
            <span slot="title">
                {{ title }}：<span style="background-color: #ffaf45; color: #fff">{{ tag }}</span>
            </span>
            <span slot="sub-title">{{ time }}</span>
        </nut-cell>
    </div>
</template>

<script>
export default {
    name: "course-item",
    props: {
        title: String,
        time: String,
        tag: String
    },
    data() {
        return {};
    },
    methods: {
        clickEvent() {
            console.log("click course-item");
            this.$emit("fromInner", 2);
        }
    }
};
</script>

<style>
.amy-course-item {
    height: 70px;
    line-height: 20px;
    padding: 15px 10px !important;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    border-radius: 3px;
}
.amy-course-item .nut-cell-box {
    min-height: 40px !important;
    height: 40px !important;
    overflow: hidden;
    background-image: none !important;
}
.amy-course-item .nut-cell-title {
    line-height: 20px !important;
}
.amy-course-item .nut-cell-sub-title {
    line-height: 20px !important;
    margin-top: 0 !important;
}
.amy-course-item .nut-cell-icon i.nut-icon {
    /*color: #fff !important;*/
}
</style>
