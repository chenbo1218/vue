<!-- 我的页面 -->
<template>
    <div>
        <nut-tabbar :tabbarList="tabList3" :bottom="true" @tab-switch="tabSwitch3"> </nut-tabbar>

        <div class="comm-bottomnav-content">
            <!--头部-->
            <div class="comm-title-jianbian">
                <div class="clear">
                    <img class="amy-mine-topbar__ava" src="../asset/img/ava.jpg" alt="" />
                    <div class="amy-mine-topbar__account">
                        <p>{{ teacherName }}</p>
                    </div>
                    <a class="amy-mine-become" @click="becomeTeacher">成为任课老师</a>
                </div>
            </div>

            <!-- 菜单列表 -->
            <div class="comm-container">
                <div class="amy-mine-menu-list">
                    <nut-cell
                        :is-link="true"
                        :show-icon="true"
                        title="我评价过的学员"
                        class="amy-mine-menu"
                        @click-cell="toEvaluate"
                    >
                        <div slot="avatar">
                            <img class="icon" src="../asset/img/mine/menu1-th.png" />
                        </div>
                    </nut-cell>

                    <nut-cell
                        :is-link="true"
                        :show-icon="true"
                        title="我的学员名单"
                        class="amy-mine-menu"
                        @click-cell="toStudents"
                    >
                        <div slot="avatar">
                            <img class="icon" src="../asset/img/mine/menu2-th.png" />
                        </div>
                    </nut-cell>
                    <nut-cell
                        :is-link="true"
                        :show-icon="true"
                        title="已上过的课程"
                        class="amy-mine-menu"
                        @click-cell="toClasses"
                    >
                        <div slot="avatar">
                            <img class="icon" src="../asset/img/mine/menu3-th.png" />
                        </div>
                    </nut-cell>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {},
            tabList3: [
                {
                    tabTitle: "首页",
                    curr: false,
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
                    curr: true,
                    icon:
                        "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
                    activeIcon:
                        "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
                    href: "/mine"
                }
            ],
            teacherName: "君君老师",
            headImg: ""
        };
    },

    methods: {
        tabSwitch3: function(value, index) {
            console.log(index);
        },
        /* 申请任课老师 */
        becomeTeacher() {
            console.log("to become");
            this.$router.push("mine-become");
        },
        /* 评价过的学员 */
        toEvaluate() {
            console.log("to evaluate");
            this.$router.push("mine-evaluate");
        },
        /* 所有学员 */
        toStudents() {
            console.log("to students");
            this.$router.push("mine-students");
        },
        /* 已上课程记录 */
        toClasses() {
            console.log("to classes");
            this.$router.push("mine-classes");
        }
    }
};
</script>

<style>
/*头部*/
.comm-title-jianbian {
    /*padding: 80px 10px;*/
}
.amy-mine-topbar__ava {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-top: 5px;
    float: left;
}
.amy-mine-topbar__account {
    margin-left: 10px;
    float: left;
    font-weight: bold;
    font-size: 18px;
}
.amy-mine-become {
    float: right;
}

.amy-mine-menu-list {
    margin-top: 15px;
}
.amy-mine-menu {
    /*width: 100%;*/
    height: 50px;
    line-height: 30px;
    padding: 10px 0 !important;
    background-image: none !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
/*.amy-mine-menu:last-of-type {
    border-bottom: none;
}*/
.amy-mine-menu .nut-cell-box {
    min-height: 30px !important;
    height: 30px !important;
    overflow: hidden;
    background-image: none !important;
}
.amy-mine-menu .nut-cell-title {
    line-height: 30px !important;
}
.amy-mine-menu .nut-cell-sub-title {
    line-height: 30px !important;
    margin-top: 0 !important;
}
.amy-mine-menu .icon {
    display: block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
</style>
