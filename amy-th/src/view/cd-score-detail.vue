<!-- 学员成绩详情页面 -->
<template>
    <div>
        <!--顶部导航条-->
        <back :titleTxt="title" />

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <!--成绩点评列表-->
            <p v-show="!data.length" class="comm-none-label">暂无成绩信息</p>
            <div v-show="data.length" class="amy-score-detail-list">
                <ScoreDetailItem
                    v-for="(item, index) in data"
                    :key="index"
                    :title="`${item.courseName}:第${item.courseIndex}课时 `"
                    :list="item.list"
                    :score-total="item.score"
                ></ScoreDetailItem>
            </div>
        </div>
    </div>
</template>

<script>
import Back from "./components/back";
import ScoreDetailItem from "./components/score-detail-item";
export default {
    name: "cd-score-detail",
    components: { Back, ScoreDetailItem },
    data() {
        return {
            title: "",
            data: [
                {
                    courseName: "泥巴兴趣班",
                    courseIndex: 2,
                    list: [{ label: "有点乖", value: 3 }, { label: "有点闹", value: -2 }],
                    score: 299
                },
                {
                    courseName: "泥巴兴趣班",
                    courseIndex: 2,
                    list: [{ label: "有点乖", value: 3 }, { label: "有点闹", value: -2 }],
                    score: 299
                }
            ]
        };
    },
    created() {
        let param = this.$route.query;
        console.log(">>", param);
        if (param && param.studentname) {
            this.title = param.studentname + "成绩详情";
        }
    },
    methods: {
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
.amy-score-detail-list {
    margin-top: 15px;
}
</style>
