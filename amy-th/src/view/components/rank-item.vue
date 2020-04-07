<!--光荣榜列表组件-->
<template>
    <div>
        <div class="amy-rank-item">
            <nut-row>
                <nut-col :span="4">
                    <p class="tag bold">{{ index }}</p>
                </nut-col>
                <nut-col :span="4">
                    <img v-if="portrait" :src="portrait" />
                    <img v-if="!portrait && sex == 0" src="../../asset/img/sex0.png" />
                    <img v-if="!portrait && sex == 1" src="../../asset/img/sex1.png" />
                </nut-col>
                <nut-col :span="10">
                    <p class="left">{{ name }}</p>
                </nut-col>
                <nut-col :span="6">
                    <p class="right">得分：{{ score }}</p>
                </nut-col>
            </nut-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "rank-item",
    props: {
        index: Number,
        portrait: String,
        sex: Number,
        name: String,
        score: Number
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style>
.amy-rank-item {
    height: 70px;
    line-height: 40px;
    padding: 15px 10px !important;
    /*border-bottom: 1px solid rgba(0, 0, 0, 0.1);*/
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 14px;
}
.amy-rank-item .nut-row {
    height: 40px;
}
.amy-rank-item .nut-col {
    height: 40px;
    text-align: center;
}
.amy-rank-item .tag {
    height: 20px;
    width: 20px;
    line-height: 20px;
    border-radius: 10px;
    background-color: #ffaf45;
    color: #fff;
    margin-top: 10px;
}
.amy-rank-item img {
    display: block;
    width: 40px;
    height: 40px;
}
</style>
