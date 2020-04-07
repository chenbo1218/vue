import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./view/index.vue";
import Message from "./view/message.vue";
import Mine from "./view/mine.vue";
import MineBecome from "./view/mine-become.vue";
import MineEvaluate from "./view/mine-evaluate.vue";
import MineStudents from "./view/mine-students.vue";
import MineClasses from "./view/mine-classes.vue";
import ClassDetail from "./view/class-detail.vue";
import CdCourseDetail from "./view/cd-course-detail";
import CdScoreDetail from "./view/cd-score-detail";
// import Nutui from "./view/nutui-demo.vue";

const carefree = process.env.NODE_ENV === "carefree";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Index },
    { path: "/message", component: Message },
    { path: "/mine", component: Mine },
    { path: "/mine-become", component: MineBecome },
    { path: "/mine-evaluate", component: MineEvaluate },
    { path: "/mine-students", component: MineStudents },
    { path: "/mine-classes", component: MineClasses },
    { path: "/class-detail", component: ClassDetail },
    { path: "/cd-course-detail", component: CdCourseDetail },
    { path: "/cd-score-detail", component: CdScoreDetail }
];

const router = new VueRouter({
    mode: carefree ? "hash" : "history",
    routes
});

export default router;
