<!--消息列表项-->
<template>
    <div>
        <a class="amy-message-item" @click="clickEvent()">
            <nut-row>
                <nut-col :span="24">
                    <p class="fs14 bold dadian">{{ title }}</p>
                </nut-col>
            </nut-row>
            <nut-row>
                <nut-col :span="24">
                    <p class="fs12 gray dadianX">{{ desc }}</p>
                </nut-col>
            </nut-row>
            <nut-row>
                <nut-col :span="24">
                    <p class="fs12 right gray dadian">发布于：{{ time }}</p>
                </nut-col>
            </nut-row>
        </a>
    </div>
</template>

<script>
export default {
    name: "message-item",
    props: {
        title: String,
        desc: String,
        time: String
    },
    data() {
        return {};
    },
    methods: {
        clickEvent(val) {
            console.log("check message detail");
            this.$emit("fromInner", 4);
        }
    }
};
</script>

<style>
.amy-message-item {
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px 10px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    overflow: hidden;
}
.amy-message-item p {
    height: 20px;
    line-height: 20px;
}
/*换行打点*/
.dadianX {
    height: 40px !important;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>
