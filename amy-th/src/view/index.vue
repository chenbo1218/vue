<!-- 首页 -->
<template>
    <div>
        <!--底部导航-->
        <nut-tabbar :tabbarList="tabList3" :bottom="true" @tab-switch="tabSwitch3"> </nut-tabbar>

        <!--内容模块-->
        <div class="comm-container comm-bottomnav-content">
            <!--当前时间-->
            <div class="amy-part">
                <h3 class="amy-title">
                    {{ moment }}，{{
                        userInfo && userInfo.teacher ? userInfo.teacher.teacher_name : ""
                    }}老师
                </h3>
                <p id="now-time" class="dark fs14">{{ nowTime }}</p>
            </div>

            <div>
                <div v-if="!userInfo.mobile" class="fs14" @click="showDialog">
                    您还未匹配信息，点击匹配 {{ userInfo.mobile }}
                </div>
                <!-- 绑定手机-->
                <nut-dialog
                    title="绑定手机"
                    :visible="dialogShow"
                    :closeOnClickModal="false"
                    @ok-btn-click="bindMobile"
                    @cancel-btn-click="dialogShow = false"
                    @close="dialogShow = false"
                >
                    <!-- 验证码-->
                    <nut-row>
                        <nut-col span="16">
                            <nut-textinput
                                v-model="validateCode.mobile"
                                placeholder="输入手机号码"
                            ></nut-textinput>
                        </nut-col>
                        <nut-col span="8">
                            <span @click="getVCode">
                                {{ getCodeBtn }}
                            </span>
                        </nut-col>
                    </nut-row>
                    <nut-textinput
                        v-model="validateCode.code"
                        placeholder="输入验证码"
                    ></nut-textinput>
                </nut-dialog>
            </div>
            <!--操作菜单-->
            <div class="amy-part">
                <nut-row class="amy-opt-list">
                    <nut-col :span="12">
                        <a
                            id="btn-homework"
                            class="flex-content dark clear amy-opt-item"
                            @click="showModalType1"
                        >
                            <img class="fl" src="../asset/img/icon-course.png" />
                            <p class="fl">布置作业</p>
                        </a>
                    </nut-col>
                    <nut-col :span="12">
                        <a
                            id="btn-message"
                            class="flex-content dark clear amy-opt-item"
                            @click="showModalType2"
                        >
                            <img class="fl" src="../asset/img/icon-message.png" />
                            <p class="fl">发送通知</p>
                        </a>
                    </nut-col>
                </nut-row>
            </div>

            <!--班级列表-->
            <div class="amy-part">
                <h3 class="amy-title">我的班级</h3>
                <div v-show="!classList.length" class="amy-none-class">暂时还没有任课班级</div>
                <div v-show="classList.length" class="amy-class-list" style="overflow-y: scroll">
                    <ClassItem
                        v-for="(item, index) in classList"
                        :key="index"
                        :name="item.interest_name"
                        :members="item.current_number"
                        @fromInner="clickClass(item.interest_name, item.id, item.course_id)"
                    ></ClassItem>
                </div>
            </div>
        </div>

        <!--弹框1-->
        <nut-popup
            v-model="show1"
            class="amy-modal"
            closeable
            close-icon="cross"
            close-on-click-overlay
        >
            <div class="amy-modal-title">
                {{ modalTitle }}
            </div>
            <div class="amy-modal-content">
                <!--文本域-->
                <nut-textbox
                    v-model="txtContext"
                    :txtAreaH="260"
                    :maxNum="300"
                    placeText="内容写在这里"
                ></nut-textbox>
                <nut-button block @click="showModal2">
                    下一步
                </nut-button>
            </div>
        </nut-popup>

        <!--弹框2-->
        <nut-popup
            v-model="show2"
            class="amy-modal"
            closeable
            close-icon="cross"
            close-on-click-overlay
        >
            <div class="amy-modal-title">
                {{ modalTitle }}
            </div>
            <div class="amy-modal-content">
                <!--复选按钮组-->
                <div class="amy-modal-content__cont">
                    <nut-row>
                        <nut-col :span="24">
                            <div
                                v-for="(item, index) in classList"
                                :key="index"
                                class="flex-content"
                            >
                                <nut-checkbox v-model="item.checked" size="base" value="0">
                                    {{ item.interest_name }}
                                </nut-checkbox>
                            </div>
                        </nut-col>
                    </nut-row>
                </div>
                <nut-button block @click="commit">
                    提交
                </nut-button>
            </div>
        </nut-popup>
    </div>
</template>

<script>
import ClassItem from "./components/class-item";
import Utils from "../utils/date";
import { login, sendSms, editClientUser, findInsClass, editNoticeBatch } from "../api/teacher";

export default {
    components: { ClassItem },
    data() {
        return {
            ableClick: true,
            timer: null,
            noticeType: 1,
            getCodeBtn: "获取验证码",
            validateCode: {},
            txtContext: "",
            dialogShow: false,
            userInfo: {
                mobile: null
            },
            tabList3: [
                {
                    tabTitle: "首页",
                    curr: true,
                    icon:
                        "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
                    activeIcon:
                        "http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg",
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
            nowTime: "今天是" + Utils.getDay() + "，" + Utils.getWhatDay(),
            moment: new Date().getHours() < 12 ? "上午好" : "下午好",
            classList: [
                { interest_name: "泥巴兴趣班", interest_number: 50 },
                { interest_name: "王者荣耀班", interest_number: 50 }
            ],
            /* 是否弹模态框 */
            show1: false,
            show2: false,
            /* 模态框标题 */
            modalTitle: ""
        };
    },
    async created() {

    },
    methods: {
        tabSwitch3: function(value, index) {
            console.log(index);
        },
        /* 打开模态框类型1或2 */
        showModalType1() {
            this.noticeType = 1 ;
            this.modalTitle = "布置作业";
            this.showModal1();
        },
        showModalType2() {
            this.noticeType = 2 ;
            this.modalTitle = "发送通知";
            this.showModal1();
        },
        /* 显示步骤1或2 */
        showModal1() {
            this.show1 = true;
            this.show2 = false;
        },
        showModal2() {
            if (!this.txtContext) {
                this.$toast.fail("请填写内容");
                return;
            }
            this.show1 = false;
            this.show2 = true;
            this.modalTitle = "发送通知";
        },
        /* 提交作业/通知 */
        commit() {
            let self = this;
            let temp = [];
            this.classList.forEach(e => {
                if (e.checked) {
                    temp.push({
                        insClassesId: e.id,
                        teacherId: e.teacher_id,
                        noticeType: self.noticeType,
                        content: self.txtContext
                    });
                }
            });
            console.log("提交了作业/通知", temp);
            if (temp && temp.length) {
                editNoticeBatch({ data: temp }).then(res => {
                    if (res.data === 1) {
                        self.show2 = false;
                        self.$toast.success("发送成功");
                    }
                });
            } else {
                self.$toast.fail("至少选择一个班级");
            }
        },
        clickClass(val, insClsId, coursId) {
            console.log("show class detail", val);
            let url =
                "class-detail?classname=" + val + "&courseId=" + coursId + "&insClsId=" + insClsId;
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
                sendSms({ mobile: self.validateCode.mobile });
                this.timer = setInterval(function() {
                    self.getCodeBtn = "已发送" + --times;
                    if (times === 0) {
                        if (self.timer) clearInterval(self.timer);
                        self.getCodeBtn = "获取验证码";
                        self.ableClick = true;
                    }
                }, 1000);
            }
        },
        bindMobile() {
            let param = {
                id: this.userInfo.id,
                mobile: this.validateCode.mobile,
                vCode: this.validateCode.code
            };
            editClientUser(param).then(res => {
                console.log(res);
                this.dialogShow = false;
            });
        }
    }
};
</script>

<style>
@import "../asset/css/common.css";

.nut-tabbar {
    border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
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

/* 菜单栏 */
.amy-opt-list {
    height: 60px;
    padding: 15px 15px;
}

.amy-opt-list .nut-col {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.amy-opt-list .nut-col:last-child {
    border: none;
}

.amy-opt-item {
    display: block;
    width: 100px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}

.amy-opt-item img {
    width: 30px;
    height: 30px;
}

.amy-opt-item p {
    line-height: 30px;
}

/* 无班级 */
.amy-none-class {
    width: 100%;
    height: 180px;
    line-height: 180px;
    background-color: #f2f2f2;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    color: #a9a9a9;
}

/*模态框*/
.amy-modal {
    width: 90%;
    height: 400px;
    border-radius: 5px;
}

.amy-modal-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #eeeeee;
    position: relative;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

.amy-modal-content {
    width: 100%;
    height: 350px;
    padding: 10px 10px;
    box-sizing: border-box;
    font-size: 14px;
    overflow-x: hidden;
}

.amy-modal-content .nut-textbox .txt-area {
    border: 1px solid #ececee;
    padding: 5px 5px;
    position: relative;
    height: 270px;
}

.amy-modal-content .amy-modal-content__cont {
    width: 100%;
    height: 270px;
    overflow-y: scroll;
}

.amy-modal-content .nut-button {
    height: 50px;
    line-height: 50px;
    margin-top: 10px;
    background: #ffaf45 !important;
}

.amy-modal-content .nut-button.block {
    border-radius: 5px;
}
.amy-modal-content .flex-content {
    height: 40px;
    line-height: 40px;
    margin-bottom: 5px;
}

.nut-checkbox input:checked {
    background-color: #ffaf45 !important;
    border-color: #ffaf45 !important;
}
</style>
