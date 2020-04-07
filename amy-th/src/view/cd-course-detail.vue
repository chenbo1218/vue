<!-- 课时详情点评页面 -->
<template>
    <div>
        <!--顶部导航条-->
        <back :titleTxt="title" />

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <!--            <div style="height: 80%; overflow-y: scroll">-->
            <p v-show="!data.length" class="comm-none-label">你还没有任何学员</p>
            <div v-show="data.length" class="amy-stu-list" style="height:440px;overflow-y: scroll">
                <nut-row :gutter="10">
                    <nut-col
                        v-for="(item, index) in data"
                        :key="index"
                        style="margin: 5px 0"
                        :span="6"
                    >
                        <a
                            :class="
                                chooseList.indexOf(index) != -1
                                    ? 'amy-stu-item-active'
                                    : 'amy-stu-item'
                            "
                            @click="chooseItem(index, chooseList)"
                        >
                            <img v-if="item.headPotrait" class="ava" :src="item.headPotrait" />
                            <img
                                v-if="!item.headPotrait && item.sex == 0"
                                class="ava"
                                src="../asset/img/sex0.png"
                            />
                            <img
                                v-if="!item.headPotrait && item.sex == 1"
                                class="ava"
                                src="../asset/img/sex1.png"
                            />
                            <p class="fs14 dadian">{{ item.name }}</p>
                            <p class="fs12 yellow">{{ item.tag }}</p>
                        </a>
                    </nut-col>
                </nut-row>
            </div>
            <!--            </div>-->

            <!--点评按钮-->
            <a
                class="comm-btn-big comm-btn-big-yellow"
                style="position: fixed; bottom: 10px; left: 0; width:95%; margin-left: 2.5%"
                @click="showModal"
            >
                点评学生({{ this.chooseList.length }})
            </a>
        </div>

        <!--弹框-->
        <nut-popup
            v-model="show"
            class="amy-modal"
            closeable
            close-icon="cross"
            close-on-click-overlay
        >
            <div class="amy-modal-title">点评学生({{ this.chooseList.length }})</div>
            <div class="amy-modal-content">
                <nut-tab class="amy-evaluate-tab" @tab-switch="tabSwitch">
                    <!--点评菜单-->
                    <!--表扬-->
                    <nut-tab-panel tab-title="表扬">
                        <nut-row v-show="menu1.length" :gutter="10" class="amy-evaluate-menus">
                            <nut-col
                                v-for="(item, index) in menu1"
                                :key="index"
                                style="margin: 5px 0"
                                :span="6"
                            >
                                <a
                                    :class="
                                        chooseMenu1.indexOf(index) != -1
                                            ? 'amy-evaluate-menu-active'
                                            : 'amy-evaluate-menu'
                                    "
                                    @click="chooseItem(index, chooseMenu1)"
                                >
                                    <img class="ava" src="../asset/img/comment2.png" />
                                    <p class="fs14">{{ item }}</p>
                                </a>
                            </nut-col>
                        </nut-row>
                    </nut-tab-panel>

                    <!--改进-->
                    <nut-tab-panel tab-title="改进">
                        <nut-row v-show="menu2.length" :gutter="10" class="amy-evaluate-menus">
                            <nut-col
                                v-for="(item, index) in menu2"
                                :key="index"
                                style="margin: 5px 0"
                                :span="6"
                            >
                                <a
                                    :class="
                                        chooseMenu2.indexOf(index) != -1
                                            ? 'amy-evaluate-menu-active'
                                            : 'amy-evaluate-menu'
                                    "
                                    @click="chooseItem(index, chooseMenu2)"
                                >
                                    <img class="ava" src="../asset/img/comment2.png" />
                                    <p class="fs14">{{ item }}</p>
                                </a>
                            </nut-col>
                        </nut-row>
                    </nut-tab-panel>

                    <!--考勤-->
                    <nut-tab-panel tab-title="考勤">
                        <nut-row v-show="menu3.length" :gutter="10" class="amy-evaluate-menus">
                            <nut-col
                                v-for="(item, index) in menu3"
                                :key="index"
                                style="margin: 5px 0"
                                :span="6"
                            >
                                <a
                                    :class="
                                        chooseMenu3.indexOf(index) != -1
                                            ? 'amy-evaluate-menu-active'
                                            : 'amy-evaluate-menu'
                                    "
                                    @click="chooseItem(index, chooseMenu3)"
                                >
                                    <img class="ava" src="../asset/img/comment2.png" />
                                    <p class="fs14">{{ item }}</p>
                                </a>
                            </nut-col>
                        </nut-row>
                    </nut-tab-panel>

                    <!--自由点评-->
                    <nut-tab-panel tab-title="点评">
                        <div class="amy-evaluate-free">
                            <a
                                v-for="(item, index) in freeModals"
                                :key="index"
                                class="amy-evaluate-free-modal"
                                @click="chooseFreeModal(index)"
                            >
                                <p>{{ item }}</p>
                            </a>
                        </div>
                        <nut-textinput
                            placeholder="自写评语"
                            type="text"
                            :clearBtn="true"
                            :value="choosedModal"
                        />
                    </nut-tab-panel>
                </nut-tab>
                <!--点评按钮-->
                <a class="comm-btn-big comm-btn-big-yellow" @click="">确定</a>
            </div>
        </nut-popup>
    </div>
</template>

<script>
import Back from "./components/back";
import { getInsStudentWithOpinion, findDict, editOpinionBatch } from "../api/teacher";

export default {
    name: "cd-course-detail",
    components: { Back },
    data() {
        return {
            title: "",
            data: [
                { name: "张二虎", sex: 0, headPotrait: "", tag: "正常出勤" },
                { name: "李小苗", sex: 1, headPotrait: "", tag: "正常出勤" },
                { name: "王大锤", sex: 1, headPotrait: "", tag: "正常出勤" }
            ],
            chooseList: [],
            show: false,
            menu1: ["听话", "活跃", "积极", "乖巧"],
            menu2: ["不听话", "有点闹", "消极"],
            menu3: ["迟到", "早退", "事假", "病假", "打架", "闹事"],
            chooseMenu1: [],
            chooseMenu2: [],
            chooseMenu3: [],
            freeModals: [
                "孩子很乖",
                "孩子很调皮，有待改进",
                "孩子很聪明，以后可能会是科学家或企业家",
                "孩子功夫很好，有武星潜力",
                "快领回去吧，我还想多活几年",
                "孩子很乖",
                "孩子很调皮，有待改进",
                "孩子很聪明，以后可能会是科学家或企业家",
                "孩子功夫很好，有武星潜力",
                "快领回去吧，我还想多活几年"
            ],
            choosedModal: "",
            insClsId: "",
            insClsTimeId: "",
            teacherId: "",
            courseid: ""
        };
    },
    created() {
        let param = this.$route.query;
        console.log(">>", param);
        if (param && param.classname) {
            this.title = param.classname;
        }
    },
    methods: {
        /* 选中/取消模块 */
        chooseItem(index, arr) {
            if (arr == undefined) return;
            var idx = arr.indexOf(index);
            if (idx != -1) {
                arr.splice(idx, 1);
            } else {
                arr.push(index);
            }
            console.log(arr);
        },

        /* 展示弹窗 */
        showModal() {
            if (this.chooseList.length <= 0) {
                this.$toast.text("请至少选择一名学员");
                return;
            }
            console.log("show modal");
            this.show = true;
        },

        /* 切换标签 */
        tabSwitch: function() {
            console.log("switch tab");
        }
    }
};
</script>

<style>
.amy-stu-list {
    margin-top: 15px;
}

.amy-stu-item {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 5px;
    box-shadow: none;
}

.amy-stu-item-active {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 5px;
    box-shadow: 0px 0px 1px 2px rgba(255, 180, 69, 0.5);
}

.amy-stu-item .ava,
.amy-stu-item-active .ava {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
}

.amy-stu-item p,
.amy-stu-item-active p {
    height: 20px;
    line-height: 20px;
}

.comm-btn-big {
    bottom: 5px;
    left: 2.5%;
}

/*模态框部分*/
/*tab标签*/
.amy-evaluate-tab {
    margin-top: -10px;
}

.amy-evaluate-tab .nut-tab-title {
    width: 60% !important;
    height: 40px !important;
}

.amy-evaluate-tab .nut-tab-item {
    border: none !important;
}

/*点选评语块*/
.amy-evaluate-menu {
    display: block;
    width: 100%;
    height: 60px;
    text-align: center;
    padding: 5px;
    box-shadow: none;
}

.amy-evaluate-menu-active {
    display: block;
    width: 100%;
    height: 60px;
    text-align: center;
    padding: 5px;
    box-shadow: 0px 0px 1px 2px rgba(255, 180, 69, 0.5);
}

.amy-evaluate-menu .ava,
.amy-evaluate-menu-active .ava {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

.amy-evaluate-menu p,
.amy-evaluate-menu-active p {
    height: 20px;
    line-height: 20px;
}

/*自选评语*/
.amy-evaluate-free {
    height: 184px;
    overflow-y: scroll;
    margin: 5px 0;
}

.amy-evaluate-free a {
    display: block;
    line-height: 20px;
    background-color: #eeeeee;
    margin-bottom: 5px;
}

.amy-evaluate-tab .nut-tab-item {
    height: 240px !important;
    overflow-y: scroll;
}
</style>
