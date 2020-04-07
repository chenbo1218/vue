<!--活动选择列表项组件-->
<template>
    <div>
        <div @click="clickEvent" class="amy-recommend-desc-item">
            <nut-row>
                <nut-col span="10">
                    <img :src="item.head_page" />
                </nut-col>
                <nut-col span="14" class="amy-recommend-desc-item_part2">
                    <p class="bold title dadian">{{item.title}}</p>
                    <div class="amy-recommend-desc-item_part2_list">
                        <ul>
                            <li>勤劳</li>
                            <li>以德服人</li>
                            <li>知识渊博</li>
                            <li>传统美德</li>
                            <li>传统美德</li>
                        </ul>
                    </div>
                </nut-col>
            </nut-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "choose-item3",
    props: {
        item: Object
    },
    data() {
        return {};
    },
    methods: {
        clickEvent() {
            console.log("click recommend-desc-item");
            this.$emit("fromInner", 7);
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
.amy-recommend-desc-item_part2_list{
    width: 100%;
    height: 90px;
    overflow: hidden;
}
.amy-recommend-desc-item_part2_list ul{
    /*line-height: 30px;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
}
.amy-recommend-desc-item_part2_list li{
    display: block;
    height: 26px;
    line-height: 26px;
    padding: 0 3px;
    margin: 2px 1px;
    background-color: #777777;
    color: white;
    border-radius: 5px;
    text-align: center;
}
</style>
