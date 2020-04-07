<template>
    <div>
        <h3 class="amy-title">课程表</h3>
        <div v-show="!data.length" class="amy-none-class">小孩暂时没有课程~</div>
        <div v-if="data.length" class="fs14">
            <nut-row v-for="(cls,index ) in data" :key="index" :class="[index%2!=0?'amy-classtimes-item1':'amy-classtimes-item2']">
                <nut-col :span="12" class="left">
                    {{cls.courseName}}-第{{cls.courseCount}}课时
                </nut-col>
                <nut-col :span="12" class="right">
                    {{cls.startTime|momontFilter('unixEx')}}
                </nut-col>
            </nut-row>
        </div>
    </div>

</template>

<script>
    export default {
        name: "classesTimes",
        props: {
            data: Array
        },
        data() {
            return {
                line: 1
            }
        }
    }
</script>

<style scoped>
    .amy-classtimes-item1 {
        font-size: 14px;
        background-color: #f386e2;
        border-radius: 50px;
        text-align: center;
        line-height: 50px;
        height: 50px;
        margin-bottom: 10px;
        color: #fff;
        padding: 0 10px;
    }
    .amy-classtimes-item2 {
        font-size: 14px;
        background-color: #869ef3;
        border-radius: 50px;
        text-align: center;
        line-height: 50px;
        height: 50px;
        margin-bottom: 10px;
        color: #fff;
        padding: 0 10px;
    }


</style>
