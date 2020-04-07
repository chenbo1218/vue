<!-- 评价过的学员列表页面 -->
<template>
    <div>
        <!-- 顶部导航条 -->
        <back :titleTxt="title" />

        <div class="comm-container comm-topnav-content">
            <p v-show="!data.length" class="comm-none-label">你还没有评价过学生</p>
            <div v-show="data.length" class="amy-evaluate-list">
                <nut-cell
                    v-for="(item, index) in data"
                    :key="index"
                    class="amy-evaluate-item"
                    :is-link="true"
                    :show-icon="true"
                    @click-cell="clickEvent(item.name)"
                >
                    <span slot="title">
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
                        {{ item.name }}
                    </span>
                </nut-cell>
            </div>
        </div>
    </div>
</template>

<script>
import Back from "./components/back";
export default {
    name: "mine-evaluate",
    components: { Back },
    data() {
        return {
            title: "评价过的学员",
            data: [
                { name: "张二虎", sex: 0, portrait: "" },
                { name: "李小苗", sex: 1, portrait: "" },
                { name: "王大锤", sex: 0, portrait: "" }
            ]
        };
    },
    methods: {
        clickEvent(val) {
            console.log("show student score detail", val);
            let url = "cd-score-detail?studentname=" + val;
            this.$router.push(url);
        }
    }
};
</script>

<style>
.amy-evaluate-list {
    margin-top: 15px;
}
.amy-evaluate-item {
    height: 60px;
    line-height: 40px;
    padding: 10px !important;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    border-radius: 3px;
}
.amy-evaluate-item .nut-cell-box {
    min-height: 40px !important;
    height: 40px !important;
    overflow: hidden;
    background-image: none !important;
}
.amy-evaluate-item .nut-cell-title {
    line-height: 40px !important;
}
.amy-evaluate-item .nut-cell-sub-title {
    line-height: 40px !important;
    margin-top: 0 !important;
}
.amy-evaluate-item .ava {
    width: 40px;
    height: 40px;
}
</style>
