<template>
    <div id="mar">
        <div id="table">
            <div id="scroll-box">
                <div class="box" v-for="(i, index) in Arr" :key="index">
                    <span>{{i.text}}</span> <span>{{i.ssss}}</span> <span>{{i.right}}</span>
                </div>
                <div class="copy">
                    <div class=" box" v-for="(i, index) in copyArr" :key="index">
                        <span>{{i.text}}</span> <span>{{i.ssss}}</span> <span>{{i.right}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo2">
            <ul class="list2 clearfix" id="demo2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import seamless from 'seamscroll'
    export default {
        name: 'Marquee',
        data () {
            return {
                text: '', // 内容
                textWidth: 0, // 字符长度
                isScroll: false, // 是否滚动
                copyArr: [],
                Arr: [...new Array(10).fill({text: '测无', ssss: '动无', right: '用于获'}).map((i, index) => {return { text: '测无' + index, ssss: '动无', right: '用于获'}})]
            }
        },
        methods: {
            init () { // 初始化函数
                // this.text = response.body.data[0].messageContent
                // 滚动内容赋值
                this.text = '滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试滚动无缝链接测试'
            },
            // 横向滚动
            move () {
                // 首先获取整个内容的宽度,(展示内容会超出隐藏,无法通过获取盒子宽度取到实际的内容宽度)
                // 所以专门造了一个 div 块来放内容,隐藏起来 (无法用根据字体内容来计算宽度的方法,存在误差,当内容较多
                // 的时候误差会相对较大)
                let width = document.getElementById('hide').getBoundingClientRect().width
                // 获取展示块盒模型宽度
                let BoxWidth = document.getElementById('PackagingShell').offsetWidth
                // 获取内容展示宽
                let viewBox = document.getElementById('viewBox')
                // 判断内容是否超长
                if ((BoxWidth - width) < 0) {
                    // 内容超长,则获取抄本元素
                    let transcript = document.getElementById('transcript')
                    // 抄本元素内容填充
                    transcript.innerText = this.text
                    // 设定抄本和主题之间的间距
                    transcript.style.marginLeft = '200px'
                } else {
                    // 没有超长则return,不做任何操作
                    return
                }
                // 设置初始位移距离
                let distance = 0
                // 移动函数,通过定时器实现
                setInterval(function () {
                    // 位移内用记录是是递减,此处的 1 控制移动变量 s
                    distance = distance - 1
                    // 判断是否整个内容移动完
                    if (-distance >= width) {
                        // 若移动完,则重新设定位移值,此处赋值200是正好把 上面设置的块间距  200px 也加入移动范围,实现移动完无缝跳转
                        distance = 200
                    }
                    // 实时设置位移距离
                    viewBox.style.transform = 'translateX(' + distance + 'px)'
                }, 27) // 移动时间间隔t   s和t 共同决定移动速度
            },
            // 竖向滚动
            initTable() {
                const table = document.getElementById('table')
                const scrollBox = document.getElementById('scroll-box')
                const scrollHeight = scrollBox.offsetHeight
                const height = document.getElementById('scroll-box').scrollHeight
                const copy = document.getElementsByClassName('copy')[0]
                if (scrollHeight < table.offsetHeight) {
                    return
                } else {
                    this.copyArr = this.Arr
                    copy.style.marginTop = '200px'
                }
                let distance = 0
                setInterval(function () {
                    // 位移内用记录是是递减,此处的 1 控制移动变量 s
                    distance -= 1
                    // 判断是否整个内容移动完
                    if (-distance >= scrollBox.offsetHeight) {
                        // 若移动完,则重新设定位移值,此处赋值table.offsetHeight是正好把 上面设置的块间距  table.offsetHeight 也加入移动范围,实现移动完无缝跳转
                        distance = table.offsetHeight
                    }
                    // 实时设置位移距离
                    // scrollBox.scrollTop = distance
                    scrollBox.style.transform = 'translateY(' + distance + 'px)'
                }, 16) // 移动
            }
        },
        mounted () {
            // 初始化
            this.init()
            this.initTable()
            seamless.init({
                dom: document.getElementById('demo1')
            })
        },
        // 更新的时候运动
        updated: function () {
            this.move()
        }
    }
</script>

<style scoped >
    #mar {
        height:40px;
        line-height: 40px;
    }
    /*系统公告字体颜色*/
    .announcement{
        color:#ff4786;
    }

    /*公告滚动盒子样式*/
    .PackagingShell {
        width: 89%;        /*滚动部分宽度*/
        overflow: hidden;  /*超出部分隐藏*/
        font-size: 12px;
        color: #111;
    }
    /*主题内容块设置*/
    #viewBox {
        /*设置内容框不可换行,确保两个div块始终在同一行*/
        white-space: nowrap;
    }
    /*内容块设置*/
    #marquee {
        /*设置内容块不可换行*/
        white-space: nowrap;
    }
    /*获取宽度的块，用z-index隐藏*/
    #hide {
        position: absolute;
        z-index: -999;
        top: -9999px;
        white-space: nowrap;
    }
    /*浮动设置和图片设置*/
    .header {
        float: left;
        font-size:12px;
    }

    #table {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
    #table .box {
        height: 35px;
        display: flex;
        justify-content: space-around;
    }
    #table #scroll-box {
        /* width: 100%; */
        /* height: 300px; */
        /* overflow-y: auto; */
    }


    .demo2 {
        width: 600px;
        height: 100px;
        position: relative;
        overflow: hidden;
        margin-top: 100px;
    }
    .list2 li {
        float: left;
        width: 100px;
        height: 100px;
        margin-right: 20px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        line-height:100px;
        background-color: #ccc;
    }
</style>
