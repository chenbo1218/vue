<template>
    <div>
        <div v-show="!students.length" class="amy-none-class">暂时未匹配到小孩信息</div>
        <nut-swiper v-if="students.length"
                    direction="horizontal"
                    :swiperData="students"
                    :paginationVisible="false"
                    @slideChangeEnd="childChange"
                    class="amy-swiper"
        >
            <div v-for="(item, index) in students"
                 :key="index"
                 class="nut-swiper-slide amy-swiper-item">
                <nut-row class="amy-swiper-item-part1">
                    <nut-col :span="5">
                        <img v-if="item.head_portrait" :src="item.head_portrait"/>
                        <img v-if="!item.head_portrait" src="../../asset/img/sex1.png"/>
                    </nut-col>
                    <nut-col :span="19">
                        <p>{{item.name}}</p>
                    </nut-col>
                </nut-row>
                <nut-row class="amy-swiper-item-part2">
                    <nut-col :span="8">
                        <a @click="clickCourse(item)">
                            <img src="../../asset/img/icon-course.png" /><br/>
                            <p>课程</p>
                        </a>
                    </nut-col>
                    <nut-col :span="8">
                        <a @click="clickScore(item)">
                            <img src="../../asset/img/icon-score.png" /><br/>
                            <p>得分</p>
                        </a>
                    </nut-col>
                    <nut-col :span="8">
                        <a @click="clickMessage(item)">
                            <img src="../../asset/img/icon-message.png" /><br/>
                            <p>消息</p>
                        </a>
                    </nut-col>
                </nut-row>
            </div>
        </nut-swiper>
    </div>
</template>

<script>
    export default {
        name: "students",
        props: {
            students: Array
        },
        data() {
            return {
                dataImgItem: ["1", "2", "3"],
            };
        },
        methods: {
            showIs() {

            },
            childChange(pageSize, el) {
                this.$emit("cldChange", pageSize)
                console.log("pageSize", pageSize, "el", el)
            },

            /*孩子的课程*/
            clickCourse(item){
                let url = "/student-course?studentname="+item.name;
                this.$router.push(url);
            },
            /*孩子的得分*/
            clickScore(item){
                let url = "/student-score?studentname="+item.name;
                this.$router.push(url);
            },
            /*孩子的消息*/
            clickMessage(item){
                let url = "/student-message?studentname="+item.name;
                this.$router.push(url);
            }
        }
    };
</script>

<style>
    .amy-swiper{
        width: 100%;
        height: 210px !important;
        padding: 5px 5px;
    }
    .amy-swiper-item {
        height: 200px !important;
        padding: 10px 10px;
        margin-right: 10px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        font-size: 14px;
    }
    .amy-swiper-item-part1{
        height: 90px;
        line-height: 90px;
        border-bottom: 1px solid #ececec;
        font-size: 14px;
        vertical-align: center;
    }
    .amy-swiper-item-part1 img {
        display: block;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-top: 22px;
        margin-left: 15px;
    }
    .amy-swiper-item-part2{
        height: 90px;
        line-height: 25px;
        font-size: 14px;
        vertical-align: center;
        text-align: center;
    }
    .amy-swiper-item-part2 a{
        display: block;
        width: 50px;
        height: 50px;
        margin: 20px auto;
    }
    .amy-swiper-item-part2 img{
        width: 25px;
        height: 25px;
    }
</style>
