<template>
    <div class="comm-container comm-bottomnav-content">
        <!--底部导航-->
        <nut-tabbar :tabbarList="tabList3" :bottom="true" @tab-switch="tabSwitch3"></nut-tabbar>

        <!--搜索栏-->
        <div class="amy-part">
            <nut-searchbar placeText="请输入搜索信息" class="fs14 amy-searchbar"></nut-searchbar>
        </div>

        <!--绑定手机提示-->
        <div class="amy-part">
            <div v-if="!userInfo.mobile" class="fs14 gray" style="text-indent: 3px;">
                尊敬的家长，您还未绑定手机，<a class="yellow" @click="showDialog">点击绑定</a>
            </div>
        </div>

        <!--绑定手机弹窗-->
        <nut-dialog title="绑定手机"
                    :visible="dialogShow"
                    :closeOnClickModal="false"
                    @ok-btn-click="bindMobile"
                    @cancel-btn-click="dialogShow=false"
                    @close="dialogShow=false">
            <!--验证码-->
            <div class="amy-dialog-content">
                <nut-row class="amy-dialog-row">
                    <nut-col span="16" class="amy-dialog-col">
                        <nut-textinput v-model="validateCode.mobile" placeholder="输入手机号码"></nut-textinput>
                    </nut-col>
                    <nut-col span="8">
                        <p @click="getVCode">
                        {{getCodeBtn}}
                        </p>
                    </nut-col>
                </nut-row>
                <nut-row class="amy-dialog-row">
                    <nut-col span="16" class="amy-dialog-col">
                        <nut-textinput v-model="validateCode.code" placeholder="输入验证码"></nut-textinput>
                    </nut-col>
                </nut-row>
            </div>
        </nut-dialog>

        <!--孩子（学员）列表-->
        <div class="amy-part">
            <student :students="studentList" @cldChange="cldChange"></student>
        </div>

        <!--课程列表-->
        <div class="amy-part">
            <classes-times :data="classesTimes"/>
        </div>

        <!--中间菜单-->
        <div class="amy-part">
            <nut-row>
                <nut-col span="6">
                    <div class="amy-middle-menu-item" @click="middleJump(1)">
                        <nut-row><img src="../asset/img/kecheng.png"></nut-row>
                        <nut-row class="gray">课程选择</nut-row>
                    </div>
                </nut-col>
                <nut-col span="6">
                    <div class="amy-middle-menu-item" @click="middleJump(2)">
                        <nut-row><img src="../asset/img/huodong.png"></nut-row>
                        <nut-row class="gray">活动选择</nut-row>
                    </div>
                </nut-col>
                <nut-col span="6">
                    <div class="amy-middle-menu-item" @click="middleJump(3)">
                        <nut-row><img src="../asset/img/laoshi.png"></nut-row>
                        <nut-row class="gray">名师选择</nut-row>
                    </div>
                </nut-col>
                <nut-col span="6">
                    <div class="amy-middle-menu-item" @click="middleJump(4)">
                        <nut-row><img src="../asset/img/mpvicon.png"></nut-row>
                        <nut-row class="gray">在线课程</nut-row>
                    </div>
                </nut-col>
            </nut-row>
        </div>

        <!--精彩课程推荐列表-->
        <div class="amy-part">
            <h3 class="amy-title">精彩课程推荐</h3>
            <nut-scroller>
                <div slot="list" class="amy-recommend-item" v-for="(item, index) of recommendCourseList" :key="index">
                    <div>
                        <img :src="item.head_page">
                    </div>
                    <div class="amy-recommend-item_p2">
                        <p>{{item.title}}</p>
                        <p class="gray fs12 amy-recommend-item_p2_desc">
                            {{item.introduction}}
                        </p>
                        <a @click="jump('course',item)" class="amy-recommend-item_p2_check yellow">查看详情</a>
                    </div>
                </div>
            </nut-scroller>
        </div>

        <!--精彩活动推荐-->
        <div class="amy-part">
            <h3 class="amy-title">精彩活动推荐</h3>
            <nut-swiper
                direction="horizontal"
                :canDragging="false"
                :paginationVisible="true"
                :loop="true"
                :auto-play="3000"
                :swiper-data="recommendActiveList"
                style="height: 280px;"
            >
                <div class="nut-swiper-slide" v-for="(item,idx) in recommendActiveList" :key="idx">
                    <div class="nut-swiper-slide">
                        <div>
                            <div>
                                <img :src="item.headPage" style="width:100%; height:150px; border-radius:3px;">
                            </div>
                            <div style="margin-top:10px; z-index:999; font-size:14px;">
                                <span style="height:25px; line-height:25px; border-radius:3px; background-color: #42dc92; color: #fff; padding: 0 5px">{{item.title}}</span>
                                <p style="height:25px; line-height:25px; color: #666;" class="bold dadian">已报名 <span style="font-weight: normal"> {{item.memberCount}}/{{item.activeLimited}}</span>
                                    <span>倒计时</span>
                                    <nut-countdown showDays
                                                   showPlainText
                                                   :endTime="item.startTime* 1000"
                                                   style="font-weight: normal"
                                    >
                                    </nut-countdown>
                                </p>
                                <a @click="jump('active',item)" style="display:block; width:80px; height:30px; line-height:30px; margin:10px auto; color:#ffaa31; border:1px solid #ffaa31; text-align:center; border-radius: 5px;">立即参加</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nut-swiper>
        </div>

        <!--名师推荐-->
        <div class="amy-part">
            <h3 class="amy-title">名师推荐</h3>
            <nut-scroller>
                <div slot="list" class="amy-recommend-item" v-for="(item, index) of recommendTeacherList" :key="index">
                    <div>
                        <img :src="item.teacher_photo">
                    </div>
                    <div class="amy-recommend-item_p2">
                        <p>{{item.teacher_name}}</p>
                        <p class="gray fs12 amy-recommend-item_p2_desc">
                            {{item.teacher_info}}
                        </p>
                        <a @click="jump('teacher',item)" class="amy-recommend-item_p2_check yellow">查看详情</a>
                    </div>
                </div>
            </nut-scroller>
        </div>

    </div>
</template>

<script>
    import Student from "./component/students";
    import ClassesTimes from "./component/classesTimes";
    import {getMychild} from "../api/student";

    export default {
        components: {ClassesTimes, Student},
        data() {
            return {
                ableClick: true,
                timer: null,
                getCodeBtn: "获取验证码",
                validateCode: {},
                dialogShow: false,
                wxCode: "",
                tabList1: [],
                tabList3: [
                    {
                        tabTitle: "主页",
                        curr: true,
                        'icon': 'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
                        'activeIcon': 'http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg',
                        href: "/"
                    },
                    {
                        tabTitle: "消息",
                        curr: false,
                        icon:
                            "http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg",
                        activeIcon:
                            "http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg",
                        href: "/message"
                    },
                    {
                        tabTitle: "我的",
                        curr: false,
                        icon:
                            "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
                        activeIcon:
                            "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
                        href: "/mine"
                    }
                ],
                studentList: [],
                classesTimes: [],
                currentStudent: {},
                fuck: "names",
                recommendCourseList: [],
                recommendActiveList: [],
                recommendTeacherList: [],
                userInfo: {}
            };
        },
        async created() {
            let param = this.$route.query
            let self = this;
            if (param && param.code) {
                this.wxCode = param.code;
                console.log("code", param.code)
            }
            let token = localStorage.getItem("token");
            if (token === null || token === "") {
                await this.login();
            } else {
                this.userInfo = JSON.parse(localStorage.getItem("user"));
                //获取孩子信息
                getMychild({parent_mobile: this.userInfo.mobile}).then(res => {
                    self.studentList = res.data;
                })
            }
            this.getRecommendCourseList();
            this.getRecommendActiveList();
            this.getRecommendTeacherList();
        },
        methods: {
            middleJump(to) {
                console.log("fromClick", to)
                let url;
                switch (Number(to)) {
                    case 1:
                        url = "/choose-course?fromSrc=1";
                        break;
                    case 2:
                        url = "/choose-activity?fromSrc=1";
                        break;
                    case 3:
                        url = "/choose-teacher?fromSrc=1";
                        break;
                    case 4:
                        url = "/choose-online?fromSrc=1";
                        break;
                }
                if (!url) return;
                this.$router.push(url);
            },
            showDialog() {
                console.log("展示验证码");
                this.dialogShow = true;
            },
            getVCode() {
                let self = this;
                if (this.ableClick) {
                    this.ableClick = false;
                    if (self.timer) clearInterval(self.timer);
                    let times = 30;
                    request.post("mini/sendSms", {mobile: self.validateCode.mobile});
                    this.timer = setInterval(function () {
                        self.getCodeBtn = "已发送" + (--times);
                        if (times === 0) {
                            if (self.timer) clearInterval(self.timer);
                            self.getCodeBtn = "获取验证码";
                            self.ableClick = true;
                        }
                    }, 1000);
                }

            },
            tabSwitch1(value, index) {
                console.log(index);
            },
            jump(fromSrc, item) {
                console.log(fromSrc, item);
                console.log("尼玛》》》");
                let url;
                switch (fromSrc) {
                    case 'course':
                        url = "course-detail?id=" + item.id
                        this.$router.push(url);
                        break;
                    case 'active':
                        url = "activity-detail?id=" + item.id
                        this.$router.push(url);
                        break;
                    case 'teacher':
                        url = "teacher-detail?id=" + item.id
                        this.$router.push(url);
                        break;
                }
            },
            login() {
                request.post('web/login', {code: this.wxCode, fromSrc: 2}).then((res) => {
                    let self = this;
                    localStorage.setItem("token", res.data.token);
                    console.log(" push Storage user", res.data.userInfo)
                    localStorage.setItem("user", JSON.stringify(res.data.userInfo));
                    console.log(" push Storage user finish", localStorage.getItem("user"))
                    self.studentList = res.data.studentList;
                    self.userInfo = res.data.userInfo;
                    if (self.studentList && self.studentList.length > 0) {
                        self.currentStudent = self.studentList[0];
                        self.findStudentClassesTimes();
                    }
                }).catch((err) => {
                    self.studentList = null
                    console.info("error", err);
                })
            },
            bindMobile() {
                let param = {
                    id: this.userInfo.id,
                    mobile: this.validateCode.mobile,
                    vCode: this.validateCode.code
                };
                request.post("mini/editClientUser", param).then(res => {
                    console.log(res);
                    this.dialogShow = false;
                })
            },
            findStudentClassesTimes() {
                let self = this;
                console.log("st", this.currentStudent);
                request.post('mini/findStudentClassesTimes', {studentId: self.currentStudent.id}).then((res) => {
                    console.log(res);
                    self.classesTimes = res.data;
                }).catch((err) => {
                    console.error(err);
                })
            },

            tabSwitch3: function (value, index) {

            },
            cldChange(msg) {
                if (msg && msg > 0) {
                    this.currentStudent = this.studentList[msg - 1];
                    this.findStudentClassesTimes();
                }
                console.log("msg", msg);
                console.log(this.studentList[msg - 1]);
            },
            getRecommendCourseList() {
                request.post("mini/findCourseList", {pageSize: 100, recommend: 1}).then((res) => {
                    this.recommendCourseList = res.data.data
                })
            },
            getRecommendActiveList() {
                request.post("mini/findActiveList", {pageSize: 100, recommend: 1}).then((res) => {
                    this.recommendActiveList = res.data.data;
                })
            },
            getRecommendTeacherList() {
                request.post("mini/findTeacherList", {pageSize: 100, recommend: 1}).then((res) => {
                    this.recommendTeacherList = res.data.data;
                })
            }

        }
    };
</script>
<style>
    @import "../asset/css/common.css";
</style>
<style lang="scss">
    /*改造swiper*/
    .nut-swiper .nut-swiper-pagination{
        height: 50px;
        top: 215px;
        pointer-events: none;
    }
    .nut-swiper .nut-swiper-pagination .swiper-pagination-bullet.active{
        background-color: #ffaa31 !important;
    }

    /* 单元模块 */
    .amy-part {
        margin: 20px 0;
    }
    .amy-title {
        font-size: 16px;
        font-weight: bold;
        margin: 5px 0;
    }

    /*搜索栏*/
    .amy-searchbar{
        height: 40px;
        line-height:40px;
    }
    .amy-searchbar .search-input.nut-search-ani{
        border-radius: 5px;
    }
    .amy-searchbar .search-input input{
        height: 40px;
        background-color: transparent;
    }

    /*无信息*/
    .amy-none-class{
        width: 100%;
        height: 180px;
        line-height: 180px;
        background-color: #f2f2f2;
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        color: #a9a9a9;
    }

    /*中间菜单项*/
    .amy-middle-menu-item{
        margin: 5px 5px;
        background-color: #f9f9f9;
        font-size: 14px;
        height: 80px;
        /*padding-top: 20px;*/
        line-height: 40px;
        text-align: center;
    }
    .amy-middle-menu-item img {
        height: 35px;
        width: auto;
        margin-top: 5px;
    }

    /*精彩推荐列表项*/
    .amy-recommend-item {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        width: 150px;
        height: 220px;
        margin: 0 10px 10px 1px;
        font-size: 14px;
    }
    .amy-recommend-item img {
        display: block;
        width: 100%;
        height: 100px;
        /*border-radius: 3px;*/
    }
    .amy-recommend-item_p2{
        padding: 5px 5px;
        height: 120px;
        line-height: 25px;
    }
    .amy-recommend-item_p2 .amy-recommend-item_p2_desc {
        width: 100%;
        height: 60px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3
    }
    .amy-recommend-item_p2 .amy-recommend-item_p2_check {
        display: block;
        height: 25px;
        line-height: 25px;
    }

    /*弹框*/
    .amy-dialog-content{

    }
    .amy-dialog-content .amy-dialog-row{
        height: 30px;
        line-height: 30px;
        margin: 5px 0;
    }
    .amy-dialog-content .amy-dialog-col input{
        height: 30px;
        line-height: 30px;
        padding: 0 5px !important;
    }
    .nut-dialog-ok{
        background: none !important;
        background-color: #ffaa31 !important;
    }


</style>
