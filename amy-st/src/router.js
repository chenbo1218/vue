import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./view/index.vue";
import Message from "./view/message.vue";
import Mine from "./view/mine.vue";

import ChooseCourse from "./view/chooseCourse/index";
import ChooseActivity from "./view/chooseActivity/index";
import ChooseTeacher from "./view/chooseTeacher/index";
import ChooseOnline from "./view/chooseOnline/index";
import CourseDetail from "./view/chooseCourse/detail";
import ActivityDetail from "./view/chooseActivity/detail";
import TeacherDetail from "./view/chooseTeacher/detail";
import OnlineDetail from "./view/chooseOnline/detail";
import CommentList from "./view/chooseOnline/commentList";

import StudentCourse from "./view/student/student-course";
import StudentScore from "./view/student/student-score";
import StudentMessage from "./view/student/student-message";

import MineChild from "./view/mine/mine-child";
import MineFavorite from "./view/mine/mine-favorite";
import MineActivity from "./view/mine/mine-activity";
import MineVideo from "./view/mine/mine-video";
import MineSetChild from "./view/mine/mine-set-child";

import Score from "./view/score";

const carefree = process.env.NODE_ENV === "carefree";

Vue.use(VueRouter);

const routes = [
    {path: "/", component: Index},
    {path: "/message", component: Message},
    {path: "/mine", component: Mine},

    {path: "/choose-course", component: ChooseCourse},
    {path: "/choose-activity", component: ChooseActivity},
    {path: "/choose-teacher", component: ChooseTeacher},
    {path: "/choose-online", component: ChooseOnline},
    {path: "/course-detail", component: CourseDetail},
    {path: "/activity-detail", component: ActivityDetail},
    {path: "/teacher-detail", component: TeacherDetail},
    {path: "/online-detail", component: OnlineDetail},
    {path: "/commentList", component: CommentList},

    {path: "/student-course", component: StudentCourse},
    {path: "/student-score", component: StudentScore},
    {path: "/student-message", component: StudentMessage},

    {path: "/mine-child", component: MineChild},
    {path: "/mine-favorite", component: MineFavorite},
    {path: "/mine-activity", component: MineActivity},
    {path: "/mine-video", component: MineVideo},
    {path: "/mine-set-child", component: MineSetChild, name: "mine-set-child"},

    {path: "/score", component: Score}

];

const router = new VueRouter({
    mode: carefree ? "hash" : "history",
    routes
});

export default router;
