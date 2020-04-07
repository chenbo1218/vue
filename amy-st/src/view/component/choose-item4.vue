<!--活动选择列表项组件-->
<template>
    <div>
        <div @click="clickEvent" class="amy-recommend-desc-item">
            <nut-row>
                <nut-col span="10">
                    <img :src="item.head_page" />
                </nut-col>
                <nut-col span="14" class="amy-recommend-desc-item_part2">
                    <p class="bold dadian" style="line-height: 40px;">{{item.title}}</p>
                    <p style="font-size: 13px; line-height: 40px;">已报名 <span style="font-size: 14px; float: right; color: #ffaa31;">免费</span></p>
                    <p style="line-height: 40px;"><span style="background-color: #78b0d7; color: white; padding: 2px 5px; border-radius: 3px;">立即报名</span></p>
                </nut-col>
            </nut-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "choose-item4",
    props: {
        item: Object
    },
    data() {
        return {};
    },
    methods: {
        clickEvent() {
            console.log("click recommend-desc-item");
            this.$emit("fromInner", 8);
        }
    }

};
</script>

<style>
.amy-recommend-desc-item {
    height: 120px;
    margin-bottom: 10px;
}
.amy-recommend-desc-item img {
    width: 100%;
    height: 120px;
    display: block;
    border-radius: 3px;
}
.amy-recommend-desc-item_part2{
    width: 100%;
    height: 120px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
}


</style>
