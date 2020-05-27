<template>
    <div style="color: #fff">
        <div>
            1、相对定位实际上被看作普通流定位模型的一部分，因为元素的位置相对于它在普通流中的位置。<br>
            2、在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。<br>
            3、绝对定位使元素的位置与文档流无关，因此不占据空间，普通流中其它元素的布局就像绝对定位的元素不存在一样。<br>
            4、绝对定位的元素的位置相对于最近的已定位祖先元素，如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块。<br>
            5、根据用户代理的不同，最初的包含块可能是画布或 HTML 元素。<br>
            6、因为绝对定位的框与文档流无关，所以它们可以覆盖页面上的其它元素。可以通过设置 z-index 属性来控制这些框的堆放次序。<br>
        </div>
        <div class="normal-div">我是正常的块级元素div</div>
        <div class="fixed-div">我是固定定位的块级元素div</div>
        <!--<div class="normal-div">我是正常的块级元素div</div>-->
        <div class="absolute-div">
            我是绝对定位的块级元素div（绝对定位的元素的位置相对于最近的已定位祖先元素，如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块，最初的包含块可能是画布或 HTML 元素。）
            <div class="child-absolute-div0">我是绝对的宝宝--绝对</div>
            <div class="child-relative-div0">我是绝对的宝宝--相对</div>
        </div>
        <div class="relative-div">我是相对定位的块级元素div（相对定位实际上被看作普通流定位模型的一部分，因为元素的位置相对于它在普通流中的位置。）<br>哈哈哈
            <div class="child-relative-div">我是相对的宝宝--相对</div>
            <div class="child-absolute-div">我是相对的宝宝--绝对</div>
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
    }
    .fixed-div{
        height: 40px;
        background-color: green;
        position: fixed;
        top: 200px;
        left: 200px;
    }
    .absolute-div{
        width: 200px;
        height: 200px;
        background-color: blue;
        position: absolute;
        top: 200px;
        right: 300px;
    }
    .relative-div{
        height: 100px;
        width: 500px;
        background-color: orange;
        position: relative;
        top: 100px;
        left: 100px;
    }
    .child-relative-div0{
        height: 100px;
        width: 100px;
        background-color: greenyellow;
        position: relative;
        right: 50px;
    }
    .child-relative-div{
        height: 100px;
        background-color: purple;
        position: relative;
        top: 30px;
        right: 30px;
    }
    .child-absolute-div0{
        height: 100px;
        background-color: lightskyblue;
        position: absolute;
        top: 150px;
        right: 30px;
    }
    .child-absolute-div{
        height: 100px;
        background-color: lightskyblue;
        position: absolute;
        top: 30px;
        right: 30px;
    }
</style>
