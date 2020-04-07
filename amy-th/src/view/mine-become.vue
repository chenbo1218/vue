<!-- 申请成为任课老师页面 -->
<template>
    <div>
        <!-- 顶部导航条 -->
        <back :titleTxt="title" />

        <div class="comm-container comm-topnav-content">
            <div class="amy-ipt-item">
                <p class="fs14">姓名：</p>
                <span slot="title">
                    <nut-textinput placeholder="真实姓名" type="text" :clearBtn="true" />
                </span>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">个人生活照：</p>
                <div class="amy-upload-box">
                    <transition name="fade">
                        <div class="img-outbox">
                            <img v-if="previewImg" class="img-box" :src="previewImg" alt />
                        </div>
                    </transition>
                    <nut-uploader
                        :name="name"
                        :url="url"
                        :xhrState="stateNum"
                        :isPreview="true"
                        @success="demoSuccess"
                        @fail="demoFail"
                        @preview="preview"
                        @showMsg="showMsg"
                    >
                        个人生活照或正装照片
                    </nut-uploader>
                </div>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">
                    个人擅长课程：<span class="fs12 gray">（语文课，数学课）中文逗号隔开</span>
                </p>
                <span slot="title">
                    <nut-textinput
                        placeholder="课程请使用中文逗号隔开：语文课，数学课"
                        type="text"
                        :clearBtn="true"
                    />
                </span>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">身份证号：</p>
                <span slot="title">
                    <nut-textinput placeholder="真实身份证号码" type="number" :clearBtn="true" />
                </span>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">身份证正面：</p>
                <div class="amy-upload-box">
                    <transition name="fade">
                        <div class="img-outbox">
                            <img v-if="previewImg2" class="img-box" :src="previewImg2" alt />
                        </div>
                    </transition>
                    <nut-uploader
                        :name="name"
                        :url="url"
                        :xhrState="stateNum"
                        :isPreview="true"
                        @success="demoSuccess"
                        @fail="demoFail"
                        @preview="preview2"
                        @showMsg="showMsg"
                    >
                        身份证正面
                    </nut-uploader>
                </div>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">身份证反面：</p>
                <div class="amy-upload-box">
                    <transition name="fade">
                        <div class="img-outbox">
                            <img v-if="previewImg3" class="img-box" :src="previewImg3" alt />
                        </div>
                    </transition>
                    <nut-uploader
                        :name="name"
                        :url="url"
                        :xhrState="stateNum"
                        :isPreview="true"
                        @success="demoSuccess"
                        @fail="demoFail"
                        @preview="preview3"
                        @showMsg="showMsg"
                    >
                        身份证反面
                    </nut-uploader>
                </div>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">证书编号：</p>
                <span slot="title">
                    <nut-textinput placeholder="教师证书编号" type="text" :clearBtn="true" />
                </span>
            </div>

            <div class="amy-ipt-item">
                <p class="fs14">证书两面照：</p>
                <div class="amy-upload-box">
                    <transition name="fade">
                        <div class="img-outbox">
                            <img v-if="previewImg4" class="img-box" :src="previewImg4" alt />
                        </div>
                    </transition>
                    <nut-uploader
                        :name="name"
                        :url="url"
                        :xhrState="stateNum"
                        :isPreview="true"
                        @success="demoSuccess"
                        @fail="demoFail"
                        @preview="preview4"
                        @showMsg="showMsg"
                    >
                        证书左右面照
                    </nut-uploader>
                </div>
            </div>

            <div class="amy-ipt-item">
                <a @click="commit" class="comm-btn-big comm-btn-big-yellow">确定</a>
            </div>
        </div>
    </div>
</template>

<script>
import Back from "./components/back";
export default {
    name: "mine-become",
    components: { Back },
    data() {
        return {
            title: "老师资料完善",
            previewImg: null,
            previewImg2: null,
            previewImg3: null,
            previewImg4: null,
            name: "test1",
            url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
            stateNum: 201
        };
    },
    methods: {
        preview(file) {
            this.previewImg = file;
        },
        preview2(file) {
            this.previewImg2 = file;
        },
        preview3(file) {
            this.previewImg3 = file;
        },
        preview4(file) {
            this.previewImg4 = file;
        },
        showMsg(msg) {
            this.$toast.text(msg);
        },
        demoSuccess(file, res) {
            this.$toast.success("上传成功");
        },
        demoFail() {
            this.$toast.fail("上传失败");
        },
        commit() {
            console.log("commit...");
        }
    }
};
</script>

<style>
.amy-ipt-item {
    margin: 10px 0;
}
.amy-ipt-item .amy-upload-box {
    width: 100%;
    height: 180px;
    position: relative;
}
.amy-ipt-item .nut-uploader {
    width: 100%;
    height: 100%;
    line-height: 180px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    text-align: center;
    color: #a9a9a9;
    font-size: 14px;
}
.amy-upload-box .img-outbox {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    border: 1px solid #f2f2f2;
    left: 0;
    top: 0;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-box {
    max-width: 100%;
    max-height: 100%;
    /*border-radius: 4px;*/
}
</style>
