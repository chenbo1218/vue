<!-- 班级详情页面 -->
<template>
    <div>
        <!--顶部导航条-->
        <back :titleTxt="title" />

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <nut-tab @tab-switch="tabSwitch">
                <!--课程介绍-->
                <nut-tab-panel tab-title="课程介绍">
                    <!--课程简介-->
                    <p class="amy-class-describe">
                        {{ insClsInfo ? insClsInfo.introduction : "暂无课程介绍" }}
                    </p>

                    <!--课时列表-->
                    <h3 class="amy-title">课时列表</h3>
                    <p v-show="!clsTimes.length" class="comm-none-label">暂无课时安排</p>
                    <div v-show="clsTimes.length" class="amy-course-list">
                        <CourseItem
                            v-for="(item, index) in clsTimes"
                            :key="index"
                            :title="`第${item.courseCount}课时`"
                            :time="`${item.startTime} - ${item.endTime}`"
                            :tag="item.tag"
                            @fromInner="
                                clickCourse(
                                    item.courseId,
                                    item.interestClassesId,
                                    item.id,
                                    item.teacherId
                                )
                            "
                        ></CourseItem>
                    </div>
                </nut-tab-panel>

                <!--成绩报告-->
                <nut-tab-panel tab-title="成绩报告">
                    <p v-show="!scoreList.length" class="comm-none-label">暂无成绩信息</p>
                    <div v-show="scoreList.length" class="amy-student-list">
                        <StudentItem
                            v-for="(item, index) in scoreList"
                            :key="index"
                            :name="item.studentName"
                            :sex="item.sex"
                            :portrait="item.headPortait"
                            :score-plus="item.addScore"
                            :score-minus="item.subScore"
                            :score-total="item.score"
                            @fromInner="clickStudent(item.studentName, insClsId, item.studentId)"
                        ></StudentItem>
                    </div>
                </nut-tab-panel>

                <!--光荣榜-->
                <nut-tab-panel tab-title="光荣榜">
                    <p v-show="!data3.length" class="comm-none-label">暂无榜单信息</p>
                    <div v-show="data3.length" class="amy-rank-list">
                        <RankItem
                            v-for="(item, index) in data3"
                            :key="index"
                            :index="index + 1"
                            :name="item.name"
                            :sex="item.sex"
                            :portrait="item.portrait"
                            :score="item.score"
                        ></RankItem>
                    </div>
                </nut-tab-panel>
            </nut-tab>
        </div>
    </div>
</template>

<script>
import Back from "./components/back";
import CourseItem from "./components/course-item";
import StudentItem from "./components/student-item";
import RankItem from "./components/rank-item";
import { findCourse, findStudentScorePage } from "../api/teacher";
import Utils from "../utils/date";

export default {
    name: "class-detail",
    components: { Back, CourseItem, StudentItem, RankItem },
    data() {
        return {
            title: "",
            insClsId: "",
            courseId: "",
            insClsInfo: {},
            clsTimes: [
                {
                    courseCount: 3,
                    startTime: "2020-04-06 08:00",
                    endTime: "2020-04-04 09:00",
                    tag: "未开始"
                },
                {
                    courseCount: 2,
                    startTime: "2020-04-04 08:00",
                    endTime: "2020-04-04 09:00",
                    tag: "进行中"
                },
                {
                    courseCount: 1,
                    startTime: "2020-04-02 08:00",
                    endTime: "2020-04-04 09:00",
                    tag: "已结束"
                }
            ],
            scoreList: [
                {
                    studentName: "张二虎",
                    sex: 0,
                    headPortait: "",
                    addScore: 90,
                    subScore: 10,
                    score: 399
                },
                {
                    studentName: "李小苗",
                    sex: 1,
                    headPortait: "",
                    addScore: 95,
                    subScore: 5,
                    score: 385
                },
                {
                    studentName: "王大锤",
                    sex: 0,
                    headPortait: "",
                    addScore: 25,
                    subScore: 184,
                    score: 225
                }
            ],
            data3: [
                { name: "张二虎", sex: 0, portrait: "", score: 399 },
                { name: "李小苗", sex: 1, portrait: "", score: 385 },
                { name: "王大锤", sex: 0, portrait: "", score: 225 }
            ],
            isUnMore: false,
            isLoading: false,
            total: 0,
            pageSize: 5,
            page: 1
        };
    },
    computed: {
        clsTime: {
            get() {
                return function(start, end) {
                    if (start && end) {
                        return Utils.timestampToDate(start) + "-" + Utils.timestampToDate(end);
                    } else {
                        return "时间错误";
                    }
                };
            }
        },
        finishStatus: {
            get() {
                return function(end) {
                    if (end > 0) {
                        if (Date.now() > end) {
                            return "已完成";
                        } else {
                            return "未完成";
                        }
                    } else {
                        return "状态错误";
                    }
                };
            }
        }
    },
    created() {
        let param = this.$route.query;
        let self = this;
        console.log("param", param);
        // console.log(">>", param);
        if (param && param.classname) {
            // 标题
            this.title = param.classname;
        }
        if (param && param.courseId) {
            // 课程ID
            this.courseId = param.courseId;
        }
        if (param && param.insClsId) {
            // 兴趣班ID
            this.insClsId = param.insClsId;
        }
        console.log("courseId", this.courseId, "insClsId", this.insClsId);
        if (this.courseId != "" && this.insClsId != "") {
            findCourse({ insClsId: this.insClsId, courseId: this.courseId }).then(res => {
                console.log(res);
                self.insClsInfo = res.data.clsInfo;
                self.clsTimes = res.data.clsTimes;
            });
        }
    },
    methods: {
        tabSwitch(item) {
            let self = this;
            switch (item) {
            case 0:
                // 切换到第二个页面
                console.log("1 page");
                break;
            case 1:
                if (this.insClsId != "") {
                    findStudentScorePage({ insClsId: this.insClsId }).then(res => {
                        if (res.data.total) {
                            self.scoreList = res.data.data;
                        } else {
                            self.scoreList = [];
                        }

                            console.log("self.scoreList", self.scoreList);
                    });
                }

                console.log("2 page");
                break;
            case 2:
                // 切换到第二个页面
                console.log("3 page");
                break;
            }
        },

        /* 点击课时列表--链接到子页面 */
        clickCourse(courseId, insClsId, insClsTimesId, teacherId) {
            console.log("show course detail", courseId, insClsId, insClsTimesId);
            let url =
                "cd-course-detail?classname=" +
                this.title +
                "&courseid=" +
                courseId +
                "&insClsId=" +
                insClsId +
                "&insClsTimeId=" +
                insClsTimesId +
                "&teacherId=" +
                teacherId;
            this.$router.push(url);
        },

        /* 点击学员成绩列表--链接到子页面 */
        clickStudent(val, insClsId, stdId) {
            console.log("show student score detail", val, insClsId, stdId);
            let url =
                "cd-score-detail?studentname=" +
                val +
                "&interestClassesId=" +
                insClsId +
                "&studentId=" +
                stdId;
            this.$router.push(url);
        },

        /* 滚动加载 */
        loadMore() {
            let isEnd = Math.floor(this.total / this.pageSize);
            if (isEnd >= this.page) {
                this.page = ++this.page;
                this.getData(2);
                this.isUnMore = false;
            } else {
                this.isUnMore = true;
                console.log("no flush");
            }
        },
        /* 下拉刷新 */
        pullDown() {
            this.page = 1;
            this.getData(1);
        }
    }
};
</script>

<style>
/*tab标签*/
.nut-tab {
    padding: 0 !important;
    border: none !important;
    background: #fff !important;
}

.nut-tab-title {
    width: 60% !important;
    /*padding: 0 20%;*/
    margin: 0 auto;
}

.nut-title-nav a {
    font-size: 14px;
}

.nut-title-nav.nut-tab-active a {
    color: #ffaf45 !important;
}

.nav-bar {
    background: #ffaf45 !important;
}

.nut-tab-link {
    font-weight: normal;
    font-size: 14px;
}

.nut-tab-active .nut-tab-link {
    font-weight: normal !important;
}

.nut-tab-item {
    padding: 0 0 !important;
    height: auto !important;
}

.amy-course-list,
.amy-student-list,
.amy-rank-list {
    margin-top: 15px;
}

/*课程介绍*/
.amy-class-describe {
    font-size: 14px;
    color: #a9a9a9;
    padding: 10px;
    line-height: 24px;
}
</style>
