<!-- 已上过课程列表页面 -->
<template>
    <div>
        <!-- 顶部导航条 -->
        <back :titleTxt="title" />

        <div class="comm-container comm-topnav-content">
            <p v-show="!data.length" class="comm-none-label">你还没有任何课程记录</p>
            <div v-show="data.length" class="amy-class-complete-list" style="padding: 5px 0;">
                <div v-for="(item, index) in data" :key="index" class="amy-class-complete-item">
                    <p style="">{{ item.title }}</p>
                    <p class="gray">{{ item.subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Back from "./components/back";
export default {
    name: "mine-classes",
    components: { Back },
    data() {
        return {
            title: "已上过课程",
            data: [
                { title: "艾萌芽测试学校", subtitle: "泥巴兴趣班-陶艺" },
                { title: "龙塘小学", subtitle: "君君的班-剪纸" }
            ]
        };
    },
    methods: {}
};
</script>

<style scoped>
.amy-class-complete-list {
    font-size: 14px;
}

.amy-class-complete-item {
    width: 100%;
    height: 80px;
    line-height: 20px;
    padding: 20px 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    margin-bottom: 15px;
}
</style>
