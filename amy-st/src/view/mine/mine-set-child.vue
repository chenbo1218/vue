<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content">
            <div class="nut-row-div">
                <nut-row><p><span class="red"> * </span> 姓名:</p></nut-row>
                <nut-row>
                    <nut-textinput v-model="childInfo.name" placeholder="真实姓名"></nut-textinput>
                </nut-row>
            </div>
            <div class="nut-row-div">
                <nut-row><p><span class="red"> * </span> 头像:</p></nut-row>
                <nut-row>
                    <nut-uploader
                            :attach="formData"
                            :name="name"
                            :url="formData.host"
                            @fileInfo="fileInfo"
                            @success="success"
                            @fail="failure"
                            @showMsg="showMsg"
                    >
                        <img class="img_head" :src="childInfo.head_portrait"/>
                    </nut-uploader>
                </nut-row>
            </div>

            <div class="nut-row-div">
                <nut-row><p><span class="red"> * </span> 年龄:</p></nut-row>
                <nut-row>
                    <nut-textinput @blur="blur" type="number" v-model="childInfo.age"></nut-textinput>
                </nut-row>
            </div>
            <div class="nut-row-div">
                <nut-row>
                    <p><span class="red"> * </span> 性别:</p>
                </nut-row>
                <nut-row>
                    <nut-radio
                            v-model="childInfo.sex"
                            :label="0"
                    >男
                    </nut-radio>

                    <nut-radio
                            v-model="childInfo.sex"
                            :label="1"
                    >女
                    </nut-radio>
                </nut-row>
            </div>
            <div class="nut-row-div">
                <nut-row class="padding-top">
                    <!--<nut-button block
                                type="yellow"
                                @click="save"
                                :disabled="btnTable"
                    >
                        确定
                    </nut-button>-->
                    <a class="comm-btn-big comm-btn-big-yellow">确定</a>
                </nut-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Back from "../component/back";

    export default {
        name: "childInfoSetting",
        components: {Back},
        data() {
            return {
                btnTable: false,
                childInfo: {},
                titleTxt: "孩子1设置",
                uploadInfo: {},
                formData: {
                    key: 'uploads/20200402/12322.png',
                    OSSAccessKeyId: '',
                    policy: '',
                    Signature: '',
                    success_action_status: '200',
                    host: 'http://www.baidu.com'
                },
                name: "file",
            }
        },
        created() {
            this.getData();
            this.getUpload();
        },
        methods: {
            save() {
                let self = this;
                self.btnTable = true;
                if (this.childInfo && this.childInfo.id) {
                    request.post("mini/editStudent", this.childInfo).then(res => {
                        if (res.data === 1) {
                            self.$router.back();
                        }
                    })
                }
            },
            blur() {
                console.log("age is ", this.childInfo.age)
                if (this.childInfo && this.childInfo.age) {
                    console.log("in")
                    if (this.childInfo.age >= 100 || this.childInfo.age < 0) {
                        this.$toast.fail("年龄不能超过100岁小于0岁")
                    }
                }
            },
            fileInfo(file) {
                console.log("fileInfo  ", file)
                switch (file.type) {
                    case  "image/jpeg":
                        this.formData.key = this.formData.key + ".jpg";
                        break;
                    case "image/png":
                        this.formData.key = this.formData.key + ".png";
                        break;
                }
            },
            success(file, response) {
                console.log(file, response)
                this.childInfo.head_portrait = this.formData.host + "/" + this.formData.key;
            },
            failure(file, response) {
                console.log("fail", response)
            },
            showMsg(msg) {
                console.error("msg", msg)
            },
            afterChang(msg, tar, event) {
                console.error("afterChange", msg, tar)
            },
            async getData() {
                let self = this;
                self.childInfo = self.$route.params.childInfo ? self.$route.params.childInfo : {}
                console.log("info", self.childInfo);
            },
            getUpload(fileName, fileType) {
                let self = this;
                fileName = Date.now();
                request.post('mini/getUpload').then((res) => {
                    self.formData.key = res.data.dir + fileName;
                    self.formData.OSSAccessKeyId = res.data.accessid;
                    self.formData.policy = res.data.encodedPolicy;
                    self.formData.Signature = res.data.postSignature;
                    self.formData.host = res.data.host;

                })
            }
        }
    }
</script>

<style>
    .img_head {
        height: 160px;
        width: 160px;
    }

    .padding-top {
        padding-top: 30px;
    }

    .nut-row-div {
        padding-top: 20px;
        font-size: 14px;
    }

    .nut-radio input:checked{
        border-color: #ffaa31 !important;
        background-color: #ffaa31 !important;
    }

</style>
