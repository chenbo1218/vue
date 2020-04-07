<!--我的页面-->
<template>
    <div>
        <!--头部-->
        <div class="comm-title-jianbian">
            <div class="clear">
                <img class="amy-mine-topbar__ava" :src="userInfo.headPortrait" alt=""/>
                <div class="amy-mine-topbar__account">
                    <p>{{userInfo.nickName}}</p>
                </div>
            </div>
        </div>
        <!-- 菜单列表 -->
        <div class="comm-container comm-bottomnav-content">
            <nut-cell
                    v-for="(item,idx) in cellList"
                    :key="idx"
                    :is-link="true"
                    :show-icon="true"
                    :title="item.title"
                    class="amy-mine-menu"
                    @click-cell="jump(item)"
            >
                <div slot="avatar">
                    <img class="icon" :src="item.bgImage" />
                </div>
            </nut-cell>
        </div>

    </div>
</template>

<script>
    export default {
        name: "mine",
        data() {
            return {
                userInfo: {},
                cellList: [
                    {
                        fromWhere: 'mine-child',
                        title: '我的孩子',
                        bgIcon: '',
                        bgImage: 'http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png'
                    },
                    {
                        fromWhere: 'mine-favorite',
                        title: '我的收藏',
                        bgIcon: '',
                        bgImage: 'http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png'
                    },
                    {
                        fromWhere: 'mine-activity',
                        title: '已参加过的活动',
                        bgIcon: '',
                        bgImage: 'http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png'
                    },
                    {
                        fromWhere: 'mine-video',
                        title: '已购买视频',
                        bgIcon: '',
                        bgImage: 'http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png'
                    }
                ]
            }
        },
        created() {
            this.userInfo = JSON.parse(localStorage.getItem("user"));
            console.log("this", this.userInfo);
        },
        methods: {
            jump(item) {
                let where = item.fromWhere;
                let url;
                switch (where) {
                    case "mine-child":
                        url = 'mine-child';
                        break
                    case "mine-favorite":
                        url = 'mine-favorite';
                        break;
                    case "mine-activity":
                        url = 'mine-activity';
                        break;
                    case "mine-video":
                        url = 'mine-video';
                        break;
                }
                this.$router.push(url);
            }
        }
    }
</script>

<style>
    /*头部*/
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

    /*菜单*/
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
