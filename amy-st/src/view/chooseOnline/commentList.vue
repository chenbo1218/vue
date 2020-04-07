<template>
    <div>
        <!--顶部导航-->
        <back :titleTxt="titleTxt"></back>

        <!--内容模块-->
        <div class="comm-container comm-topnav-content fs14">
            <div class="amy-comment-item">
                <div>
                    <img src="../../../src/asset/img/ava.jpg" />
                    <span>04月02日 13:06</span>
                </div>
                <p>本课程让我们深刻的认识到三国时期的历史变化。</p>
            </div>
            <div class="amy-comment-item">
                <div>
                    <img src="../../../src/asset/img/ava.jpg" />
                    <span>04月02日 13:06</span>
                </div>
                <p>本课程让我们深刻的认识到三国时期的历史变化。</p>
            </div>
        </div>

    </div>
</template>

<script>
    import Back from "../component/back";
    export default {
        name: "detail",
        components: {Back},
        data() {
            return {
                titleTxt: '评论列表',
                sources: [
                    {
                        src:
                            'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                        type: 'video/mp4'
                    }
                ],
                options: {
                    controls: true,
                    autoplay: true,
                    playsinline:true
                },
            }
        },
        methods: {
            back() {
                this.$router.back();
            },
            title() {

            },
            play(elm) {
                console.log('play', elm)
            },
            pause(e) {
                console.log('pause')
            },
            playend(e) {
                alert('播放结束')
            },
            tabSwitch: function (index, event) {
                console.log(index + '--' + event.target);
            }
        }

    }
</script>

<style>
    .amy-comment-item{

    }
    .amy-comment-item img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    .amy-comment-item p{
        font-size: 12px;
        line-height: 30px;
        overflow: hidden;
        color: #666666;
    }
</style>
