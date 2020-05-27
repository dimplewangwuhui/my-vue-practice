<template>
    <div>
        <div><span class="red-title m-right20">1、粒子背景</span><a href="https://vue-particles.netlify.app/" target="_blank">示例地址</a></div>
        <vue-particles class="particles-js" color="#dedede"></vue-particles>

        <div class="m-top20"><span class="red-title m-right20">2、进度条</span><a href="http://hilongjw.github.io/vue-progressbar/index.html" target="_blank">示例地址</a></div>
        <div style="width: 100%; border: 1px solid #f0f0f0; padding: 10px; box-sizing: border-box">
            <el-button @click="FnStart">start</el-button>
            <el-button @click="FnTest">test</el-button>
            <span>（在App.vue中引入）</span>
        </div>

        <div class="m-top20"><span class="red-title m-right20">3、拖拽排序</span><a href="http://sagalbot.github.io/vue-sortable/" target="_blank">示例地址</a></div>
        <div class="drag">
            <ul class="list-group" v-sortable="{ onUpdate: onUpdate }">
                <li class="list-group-item" v-for="item in dragList"> {{ item }} <i class="el-icon-rank"></i></li>
            </ul>
        </div>

        <div class="m-top20"><span class="red-title m-right20">4、星星点赞</span><a href="https://github.com/OYsun/VueStar/blob/master/README-ZH.MD" target="_blank">示例地址</a></div>
        <vue-star animate="animated rubberBand" color="#FC796B" style="position: relative">
            <i slot="icon" class="el-icon-star-on" @click="handleStarClick"></i>
        </vue-star>

        <div class="m-top20"><span class="red-title m-right20">5、天气预报</span><a href="https://www.npmjs.com/package/vue-weather-widget" target="_blank">示例地址</a></div>
        <div style="position: relative">
            <vue-weather
                    api-key=""
                    title="北京市--天气预报"
                    latitude="39.88465766090095"
                    longitude="116.38253678295897"
                    language="zh"
                    units="auto"
                    text-color="#f0f0f0"
                    bar-color="#f0f0f0">
            </vue-weather>
        </div>
    </div>
</template>

<script>
    import {FnProgress} from '../../service/component/library'
    export default {
        name: "library",
        data() {
            return {
                dragList: ['======1', '======2', '======3', '======4'],
                starActive: false
            }
        },
        methods: {
            // 进度条
            FnStart() {
                this.$Progress.start()
            },
            FnTest() {
                this.$Progress.start()
                FnProgress()
                    .then((response) => {
                        this.$Progress.finish()
                    }, (response) => {
                        this.$Progress.fail()
                    })
            },
            //
            onUpdate(event) {
                this.dragList.splice(event.newIndex, 0, this.dragList.splice(event.oldIndex, 1)[0])
            },
            //
            handleStarClick() {
                this.starActive = !this.starActive;
                console.log('你点了个赞：', this.starActive)
            }
        }
    }
</script>

<style scoped>
    .particles-js {
        background-image: url('../../assets/img/sky871d198.jpg');
        background-size: cover;
        width: 800px;
        height: 100%;
    }
    .drag {width: 300px}
</style>
