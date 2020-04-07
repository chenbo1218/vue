<!--学员成绩详情列表-->
<template>
    <div>
        <div class="amy-student-score-item fs14">
            <div class="amy-student-score-item__p1">
                <p class="bold">{{ title }}</p>
            </div>
            <div class="amy-student-score-item__p2">
                <ul>
                    <li v-for="(item, index) in list" :key="index">
                        <div class="amy-student-score-item__tag">
                            <p>{{ item.label }}</p>
                            <p>{{ item.value >= 0 ? "+" + item.value : item.value }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="amy-student-score-item__p3">
                <p class="right">总得分：{{ scoreTotal }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "score-detail-item",
    props: {
        title: String,
        list: Array,
        scoreTotal: Number
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style>
.amy-student-score-item {
    width: 100%;
    height: 195px;
    padding: 10px 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    overflow: hidden;
}
.amy-student-score-item__p1 {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.amy-student-score-item__p3 {
    height: 30px;
    line-height: 30px;
}
.amy-student-score-item__p2 {
    height: 115px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 5px 0;
}
.amy-student-score-item__p2 ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
}
.amy-student-score-item__p2 ul li {
    border: 1px solid;
    width: auto;
    height: 50px;
    padding: 5px 5px;
    border-radius: 5px;
    background-color: #ffaf45; /*#687a86;*/
    color: #fff;
    text-align: center;
    margin-top: 1px;
}
</style>
