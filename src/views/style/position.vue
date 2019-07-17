<template>
    <div style="color: #fff">
        <div class="normal-div">我是正常的块级元素div</div>
        <div class="fixed-div">我是固定定位的块级元素div</div>
        <div class="normal-div">我是正常的块级元素div</div>
        <div class="absolute-div">我是绝对定位的块级元素div</div>
        <div class="relative-div">我是相对的块级元素div
            <div class="child-absolute-div">我是宝宝</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "position"
    }
</script>

<style scoped>
    .normal-div{
        height: 200px;
        background-color: #FC796B;
        margin-bottom: 20px;
    }
    .fixed-div{
        height: 40px;
        background-color: green;
        position: fixed;
        top: 200px;
        left: 200px;
    }
    .absolute-div{
        height: 200px;
        background-color: blue;
        position: absolute;
        top: 200px;
        right: 300px;
    }
    .relative-div{
        height: 100px;
        background-color: orange;
        position: absolute;
        top: 100px;
        right: 100px;
    }
    .child-absolute-div{
        height: 50px;
        background-color: lightskyblue;
        position: absolute;
        top: 20px;
        right: 30px;
    }
</style>
