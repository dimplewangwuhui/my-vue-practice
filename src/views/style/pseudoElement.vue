<template>
    <div style="background-color: #dde2ef">
        <el-row :gutter="5">
            <el-col :span="4">
                <div class="test">
                    <div class="hello">hello world</div>
                </div>
            </el-col>
            <el-col :span="4">
                <div style="color: black">使用border绘制三角形</div>
                <div class="border1"></div>
                <div class="border2"></div>
            </el-col>
            <el-col :span="4">
                <div class="hover">
                    <div style="color: black">hover 效果</div>
                    <a href="#"><span>前</span></a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "PseudoElement"
    }
</script>

<style scoped>
    .hello {
        color: black;
        padding: 10px;
    }
    .hello::before {
        content: '==';
    }
    .hello::after {
        content: '--';
    }
    .test {
        position: relative;
        width: 150px;
        height: 36px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgba(245,245,245,1);
    }
    .test::before, .test::after {
        content: '';
        display: block;
        position: absolute;
        top: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
    }
    .test::before {
        left: -11px;
        border-right-color: rgba(245,245,245,1);
        z-index: 1;
    }
    .test::after {
        left: -12px;
        border-right-color: rgba(0,0,0,1);
        z-index: 0;
    }

    .border1 {
        width: 0;
        height: 0;
        border: 50px solid;
        border-color: red orange green blue;
    }
    .border2 {
        width: 0;
        height: 0;
        border: 50px solid;
        border-color: transparent orange transparent transparent;
    }

    .hover a {
        width: 80px;
        height: 80px;
        background-color: #fff;
        text-align: center;
        line-height: 80px;
        font-size: 35px;
        margin: 0 10px;
        display: block;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        border: 3px solid #fff;
        z-index: 1;
        text-decoration-line: none;
    }

    .hover a span {
        position: relative;
        color: #041834;
        transition: .5s;
        z-index: 3;
    }

    .hover a:hover span {
        color: #fff;
        transform: rotateY(360deg);
    }

    .hover a:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: #f00;
        transition: .5s;
        z-index: 2;
    }

    .hover a:hover:before {
        top: 0;
    }

    .hover:nth-child(1) a:before{
        background: #041834;
    }
</style>
