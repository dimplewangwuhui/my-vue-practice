<template>
    <div style="padding: 20px; background-color: #fff">
        <el-row :gutter="10">
            <el-col :span="12">
                <div style="color: #FC796B; font-size: 20px; margin: 10px 0">transition：</div>
                <div>Vue 提供了<span style="color: #FC796B">transition</span>的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡。</div>
                <div>1、条件渲染(使用 v-if);</div>
                <div>2、条件展示(使用 v-show);</div>
                <div>3、动态组件;</div>
                <div>4、组件根节点。</div>
                <div style="margin-top: 20px">在进入/离开的过渡中，会有 6 个 class 切换。</div>

                <el-button @click="show = !show" style="margin-top: 20px">Toggle render</el-button>
                <transition name="fade">
                    <p v-if="show">hello, welcome to transition</p>
                </transition>

                <el-button @click="show2 = !show2">Toggle render</el-button>
                <transition name="bounce">
                    <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
                </transition>

                <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
                <el-button @click="show3 = !show3">Toggle render</el-button>
                <transition
                        name="custom-classes-transition"
                        enter-active-class="animated tada"
                        leave-active-class="animated bounceOutRight">
                    <p v-if="show3">hello</p>
                </transition>

            </el-col>
            <el-col :span="12">
                <img :src="transitionUrl" width="80%" style="border: 1px solid #FC796B">
            </el-col>
        </el-row>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">内联样式style三元表达式：</div>
        <span :style="{'color':showColor ? 'blue':'red', 'fontSize':showColor ? '20px':'10px'}">字体颜色和大小</span>
        <el-button @click="showColor = !showColor" style="margin-left: 20px">点击按钮</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">class与style绑定：</div>
        <div>
            <div style="width: 100px;height: 100px;float: left; margin: 0 20px 0 0" :class="{'bg': bgStyle, 'text': textStyle}">哈哈哈</div>
            <div :style="{'background-image': 'url(' +item+ ')'}" class="bgimg"></div>
            <div :style="{'background-image': 'url(' + require('../../assets/img/logo.png') + ') '}" class="bgimg"></div>
        </div>

        <div style="color: #FC796B; font-size: 20px; margin: 130px 0 10px 0">CSS预处理器：</div>
        <span>Sass支持条件语句，可以使用if{}else{},for{}循环等等。而Less不支持;</span>
        <div class="yclq_scss"><span>scss变量名以$开始</span></div>
        <div class="yclq_less"><span>less变量名以@开始</span></div>
        <div class="yclq_stylus"><span>stylus变量名以任意字符开始，不要使用@</span></div>
    </div>
</template>

<script>
    export default {
        name: "css",
        data() {
            return {
                show: true,
                show2: true,
                show3: true,
                transitionUrl: require('../../assets/img/transition.png'),
                showColor: true,
                bgStyle: true,
                textStyle: true,
                item: require('../../assets/img/logo.png'),
            }
        }
    }
</script>

<style>
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .fade-enter-active {
        transition: all 10.8s ease;
    }
    .fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .bg{background-color: red;text-align: center;line-height: 100px}
    .text{color: green; font-size: 20px}
    .bgimg{width: 100px;height: 100px; background-position: center center; background-repeat: no-repeat;background-size:100% 100%;float: left;margin: 0 20px}
</style>

<style lang="scss">
    $width: 100px;
    $height: 100px;
    $background-color: yellow;
    $color: blue;
    .yclq_scss{width: $width;height: $height;background-color: $background-color;color: $color;}
</style>

<style lang="less">
    @width: 100px;
    @height: 100px;
    @background-color: green;
    @color: #fff;
    .yclq_less{width: @width;height: @height;background-color: @background-color;color: @color;}
</style>

<style lang="stylus">
    width 100px
    height 100px
    background-color #0982c1
    color #fff
    .yclq_stylus{width: width;height: height;background-color: background-color;color: color;}
</style>
