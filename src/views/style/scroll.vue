<template>
    <section>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">better-scroll 鼠标滚轮和上拉加载</div>
        <div class="mouse-wheel-pullup">
            <div v-if="showBackTop" class="backTop" @click="backTop"><i class="el-icon-upload2"></i></div>
            <div ref="scroll" class="pullup-wrapper">
                <div class="pullup-content">
                    <ul class="pullup-list">
                        <li v-for="i of data" :key="i" class="pullup-list-item">
                            {{ i % 5 === 0 ? 'use your mousewheel please 👆🏻' : `I am item ${i} `}}
                        </li>
                    </ul>
                    <div class="pullup-tips">
                        <div v-if="!isPullUpLoad" class="before-trigger">
                            <span class="pullup-txt">mousewheel trigger pullingup and load more</span>
                        </div>
                        <div v-else class="after-trigger">
                            <span class="pullup-txt">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import Pullup from '@better-scroll/pull-up'
    import MouseWheel from '@better-scroll/mouse-wheel'
    BScroll.use(Pullup)
    BScroll.use(MouseWheel)
    export default {
        name: 'Marquee',
        data () {
            return {
                scroll: null,
                isPullUpLoad: false,
                data: 30,
                showBackTop: false
            }
        },
        methods: {
            initBscroll() {
                this.scroll = new BScroll(this.$refs.scroll, {
                    probeType: 3,
                    pullUpLoad: true,
                    mouseWheel: true
                })
                this.scroll.on('scroll', (position) => {
                    this.showBackTop = (-position.y) > 300
                })
                this.scroll.on('pullingUp', this.pullingUpHandler)
            },
            async pullingUpHandler() {
                this.isPullUpLoad = true

                await this.requestData()

                this.scroll.finishPullUp()  // 在数据请求后调用该方法关闭此次上拉
                this.scroll.refresh()  // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                this.isPullUpLoad = false
            },
            async requestData() {
                try {
                    const newData = await this.ajaxGet(/* url */)
                    this.data += newData
                } catch (err) {
                    console.log(err)
                }
            },
            ajaxGet(/* url */) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(20)
                    }, 1000)
                })
            },
            backTop() {
                this.scroll.scrollTo(0, 0, 500)  // x坐标,y坐标,毫秒
            }
        },
        mounted () {
            this.initBscroll()
        },
    }
</script>

<style lang="stylus" scoped>
    .mouse-wheel-pullup
        height: 300px
        border: 2px solid #455cc6
        margin-bottom: 30px
        position relative
        .pullup-wrapper
            height: 100%
            padding: 0 10px
            border: 1px solid #ccc
            overflow: hidden
        .pullup-list
            padding: 0
        .pullup-list-item
            padding: 10px 0
            list-style: none
            border-bottom: 1px solid #ccc
        .pullup-tips
            padding: 20px
            text-align: center
            color: #999
    .backTop {
        width: 30px
        height: 30px
        border-radius: 50%
        border 1px solid #455cc6
        background-color #fff
        line-height 30px
        text-align center
        position absolute
        bottom: 10px
        right 10px
        cursor pointer
        z-index: 9
    }
</style>
