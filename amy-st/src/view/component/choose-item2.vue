<!--活动选择列表项组件-->
<template>
    <div>
        <div @click="clickEvent" class="amy-recommend-desc-item">
            <nut-row>
                <nut-col span="10">
                    <img :src="item.headPage" />
                </nut-col>
                <nut-col span="14" class="amy-recommend-desc-item_part2">
                    <p class="bold title dadian">{{item.title}}</p>
                    <p>已报名
                        <span style="border:1px solid #aaa; color:#aaa; border-radius:8px; margin-left:5px; padding:0 3px;">{{item.memberCount}}/{{item.activeLimited}}</span>
                    </p>
                    <nut-countdown
                        showDays
                        showPlainText
                        class="gray"
                        :endTime="newData(item.startTime)">
                    </nut-countdown>
                </nut-col>
            </nut-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "choose-item2",
    props: {
        item: Object
    },
    data() {
        return {};
    },
    methods: {
        clickEvent() {
            console.log("click recommend-desc-item");
            this.$emit("fromInner", 6);
        }
    },
    computed: {
        newData() {
            return function (val) {
                let d = moment.unix(val).format('YYYY-MM-DD HH:mm:ss');
                return d;
            }
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
.amy-recommend-desc-item_part2 .title{
    height: 30px;
    line-height: 30px;
}
.amy-recommend-desc-item_part2 .dadianX{
    width: 100%;
    height: 90px !important;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
</style>
