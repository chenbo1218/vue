<template>
    <div>
        <nut-tabbar @tab-switch="tabSwitch3" :tabbarList="tabList3" :bottom="true"></nut-tabbar>

        <mine></mine>

    </div>

</template>

<script>

    import Mine from "./mine/index";

    export default {
        components: {Mine},
        data() {
            return {
                tabList3: [
                    {
                        'tabTitle': '主页',
                        'curr': false,
                        'icon': 'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
                        'activeIcon': 'http://img20.360buyimg.com/uba/jfs/t28675/125/569589124/2710/fe1b0e7c/5bf79218Nbc49fc24.jpg',
                        'href': '/'
                    },
                    {
                        'tabTitle': '消息',
                        'curr': false,
                        'icon': 'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
                        'activeIcon': 'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
                        'href': '/message'
                    },
                    {
                        'tabTitle': '我的',
                        'curr': true,
                        'icon': 'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
                        'activeIcon': 'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
                        'href': '/mine'
                    }
                ]
            };
        },
        methods: {
            tabSwitch1: function (value, index) {
                /*let arr = [...this.tabList1];
                arr.map((item,idx)=>{
                  if(idx==index){
                      item.curr = true;
                  }else{
                      item.curr = false;
                  }
                })
                this.tabList1 = [...arr];*/
                console.log(index);
            },
            tabSwitch2: function (value, index) {
                /*let arr = [...this.tabList2];
                arr.map((item,idx)=>{
                  if(idx==index){
                      item.curr = true;
                  }else{
                      item.curr = false;
                  }
                })
                this.tabList2 = [...arr];*/
            },
            tabSwitch3: function (value, index) {
                /*let arr = [...this.tabList3];
                arr.map((item,idx)=>{
                  if(idx==index){
                      item.curr = true;
                  }else{
                      item.curr = false;
                  }
                })
                this.tabList3 = [...arr];*/
            }
        }
    };
</script>
<style lang="scss">

</style>
