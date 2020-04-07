<!-- 我的学员列表页面 -->
<template>
    <div>
        <!-- 顶部导航条 -->
        <back :titleTxt="title" />

        <div class="comm-container comm-topnav-content">
            <p v-show="!data.length" class="comm-none-label">你还没有任何学员</p>
            <div v-show="data.length" class="amy-stu-list">
                <nut-row :gutter="10">
                    <nut-col
                        v-for="(item, index) in data"
                        :key="index"
                        style="margin: 5px 0"
                        :span="6"
                    >
                        <a class="amy-stu-item">
                            <img v-if="item.portrait" class="ava" :src="portrait" />
                            <img
                                v-if="!item.portrait && item.sex == 0"
                                class="ava"
                                src="../asset/img/sex0.png"
                            />
                            <img
                                v-if="!item.portrait && item.sex == 1"
                                class="ava"
                                src="../asset/img/sex1.png"
                            />
                            <p class="fs14">{{ item.name }}</p>
                        </a>
                    </nut-col>
                </nut-row>
            </div>
        </div>
    </div>
</template>

<script>
import Back from "./components/back";
export default {
    name: "mine-students",
    components: { Back },
    data() {
        return {
            title: "学员名单",
            data: [
                { name: "张三", sex: 0, portrait: "" },
                { name: "李四", sex: 1, portrait: "" },
                { name: "王五", sex: 1, portrait: "" },
                { name: "赵六", sex: 0, portrait: "" },
                { name: "孙七", sex: 1, portrait: "" },
                { name: "刘八", sex: 0, portrait: "" }
            ]
        };
    },
    methods: {}
};
</script>

<style scoped>
.amy-stu-list {
    margin-top: 15px;
}
.amy-stu-item {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    /*margin-bottom: 15px;*/
    padding: 10px;
    box-shadow: none;
}
.amy-stu-item .ava {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
}
.amy-stu-item p {
    height: 20px;
    line-height: 20px;
}
</style>
