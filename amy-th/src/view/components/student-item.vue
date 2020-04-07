<!--学员列表项-->
<template>
    <div>
        <div class="amy-student-item">
            <nut-row class="amy-student-item-part">
                <nut-col :span="6">
                    <img v-if="portrait" :src="portrait" />
                    <img v-if="!portrait && sex == 0" src="../../asset/img/sex0.png" />
                    <img v-if="!portrait && sex == 1" src="../../asset/img/sex1.png" />
                </nut-col>
                <nut-col :span="12" class="left">
                    <span>{{ name }}</span>
                </nut-col>
                <nut-col :span="6" class="right">
                    <a class="yellow" @click="clickEvent">查看详情</a>
                </nut-col>
            </nut-row>
            <nut-row class="amy-student-item-part">
                <nut-col :span="8" class="amy-student-item-part-menu">
                    <p class="bold">加分</p>
                    <p>{{ scorePlus }}</p>
                </nut-col>
                <nut-col :span="8" class="amy-student-item-part-menu">
                    <p class="bold">扣分</p>
                    <p>{{ scoreMinus }}</p>
                </nut-col>
                <nut-col :span="8" class="amy-student-item-part-menu">
                    <p class="bold">总分</p>
                    <p>{{ scoreTotal }}</p>
                </nut-col>
            </nut-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "student-item",
    props: {
        name: String,
        portrait: String,
        sex: Number,
        scorePlus: Number,
        scoreMinus: Number,
        scoreTotal: Number
    },
    data() {
        return {};
    },
    methods: {
        clickEvent(val) {
            console.log("check student score detail");
            this.$emit("fromInner", 3);
        }
    }
};
</script>

<style>
.amy-student-item {
    width: 100%;
    height: 120px;
    padding: 10px 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    /*box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.1);*/
    margin-bottom: 15px;
    overflow: hidden;
}
.amy-student-item .amy-student-item-part {
    height: 50px;
    line-height: 50px;
    align-self: center;
    text-align: center;
    justify-content: center;
    font-size: 14px;
}
.amy-student-item-part img {
    display: block;
    margin: 5px auto;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.amy-student-item-part .amy-student-item-part-menu {
    line-height: 25px;
}
</style>
