<template>
    <div style="padding: 20px;">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">比较：</div>
        <el-button @click="setTimeout1_1" style="width: 120px">传统异步1</el-button><span>setTimeout被调用的时候，主线程不会等待1秒，而是先执行别的任务</span><br>
        <el-button @click="setTimeout1_2" style="width: 120px; margin-top: 10px">传统异步2</el-button><br>
        <el-button @click="setTimeout2" style="width: 120px; margin-top: 10px">promise异步</el-button><br>
        <el-button @click="setTimeout3_1" style="width: 120px; margin-top: 10px">async异步1</el-button><br>
        <el-button @click="setTimeout3_2" style="width: 120px; margin-top: 10px">async异步2</el-button><br>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">async的原型：</div>
        <div>async函数到底是什么？其实他就是Genarator函数（生成器函数）的语法糖而已！</div>
        <ul><li>内置执行器</li></ul>
        <div>Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样。完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。</div>
        <ul><li>更好的语义</li></ul>
        <div>async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。</div>
        <ul><li>更广的适用性</li></ul>
        <div>co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。</div>
        <ul><li>返回值是Promise</li></ul>
        <div>async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">用Generator函数封装异步请求：</div>
        <el-button @click="FnGenerator">generator</el-button><br>
    </div>
</template>

<script>
    export default {
        name: "async_await",
        data() {
            return {

            }
        },
        methods: {
            callback(){
                console.log("一秒之后，我来了");
            },
            setTimeout1_1() {
                setTimeout(this.callback, 1000);
                console.log('我先开始了')
            },
            setTimeout1_2() {
                setTimeout(function(){
                    console.log("第一个异步回调了！");
                    setTimeout(function(){
                        console.log("第二个异步回调了！");
                        setTimeout(function(){
                            console.log("第三个异步回调了！");
                            setTimeout(function(){
                                console.log("第四个异步回调了！");
                                setTimeout(function(){
                                    console.log("第五个异步回调了！")
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },

            timeout(ms) {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms, "finish");
                });
            },
            setTimeout2(ms) {
                this.timeout(2000)
                    .then(value => {
                        console.log("第一层" + value);
                        return this.timeout(2000);
                    })
                    .then(value => {
                        console.log("第二层" + value);
                        return this.timeout(2000);
                    })
                    .then(value => {
                        console.log("第三层" + value);
                        return this.timeout(2000);
                    })
                    .then(value => {
                        console.log("第四层" + value);
                        return this.timeout(2000);
                    })
                    .then(value => {
                        console.log("第五层" + value);
                        return this.timeout(2000);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },

            async setTimeout3_1(){
                await this.timeout(1000);
                console.log("第一层异步结束！")
                await this.timeout(1000);
                console.log("第二层异步结束！")
                await this.timeout(1000);
                console.log("第三层异步结束！")
                await this.timeout(1000);
                console.log("第四层异步结束！")
                await this.timeout(1000);
                console.log("第五层异步结束！")
                return "all finish";
            },
            setTimeout3_2() {
                this.setTimeout3_1().then((value => {
                    console.log(value)
                }))
            },

            *times() {
                let result = yield this.timeout(1000);
                return 'second next'
            },
            FnGenerator() {
                let gen = this.times();
                let firstYield = gen.next();
                console.log(firstYield);
                firstYield.value.then(() => {
                    console.log('timeout finish');
                    console.log(gen.next())
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
