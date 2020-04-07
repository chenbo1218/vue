<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--我的孩子列表-->
        <div class="comm-container comm-topnav-content">
            <p v-if="!childList" class="comm-none-label">抱歉，未匹配到孩子信息</p>
            <div class="amy-mychild-list">
                <div v-for="(item, index) in childList"
                     :key="index"
                     style=""
                     class="amy-mychild-item">
                    <nut-row class="row_one fs14">
                        <nut-col :span="4">
                            <img v-if="item.head_portrait" :src="item.head_portrait" class="head_img"/>
                            <img v-if="!item.head_portrait" src="../../asset/img/sex1.png" class="head_img"/>
                        </nut-col>
                        <nut-col :span="8">
                            <p :ref="`name${index}`" @click="clickName(index)">{{item.name}}</p>
                        </nut-col>
                        <nut-col :span="6">
                            <a @click="settingChild(item)" class="yellow">信息设置</a>
                        </nut-col>
                        <nut-col :span="6">
                            <a class="yellow">上过课程记录</a>
                        </nut-col>
                    </nut-row>
                    <nut-row class="row_two fs14">
                        <nut-col :span="16">
                            <p>{{item.schoolName}}-{{item.class_level}}</p>
                        </nut-col>
                        <nut-col :span="8">
                            <p class="right">{{item.className}}</p>
                        </nut-col>
                    </nut-row>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Back from "../component/back";

    export default {
        name: "child",
        components: {Back},
        data() {
            return {
                titleTxt: "我的孩子",
                childList: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                let para = {parent_mobile: "13975862110"};
                request.post('mini/findStudentList', para).then(res => {
                    this.childList = res.data
                    console.log(this.childList)
                })
            },
            clickName(idx) {
                console.log("name", this.$refs[`name${idx}`])
                if (idx == 0) {
                    this.$refs[`name${idx}`][0].className = 'col1';
                } else {
                    this.$refs[`name${idx}`][0].className = 'col2';
                }

            },
            settingChild(item) {
                this.$router.push({name: 'mine-set-child', params: {childInfo: item}})
            }
        }
    }
</script>

<style scoped>
    .amy-mychild-list{
        margin-top: 15px;
    }
    .amy-mychild-item {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 10px 10px;
    }
    .head_img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 20px auto;
    }
    .row_one {
        border-bottom: 1px solid #ececec;
        height: 80px;
        line-height: 80px;
    }
    .row_two {
        height: 50px;
        line-height: 50px;
    }
    .row_two .nut-col p {
        width: 100%;
    }

    .col1 {
        color: red;
    }

    .col2 {
        color: blue;
    }


</style>
