<template>
    <div style="padding: 20px; background-color: #fff">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">事件循环、宏任务、微任务</div>
        <div>宏任务——setTimeout、setInterval、I/O、script</div>
        <div>微任务——promise、process.nextTick</div>
        <div>执行和运行有很大的区别，javascript在不同的环境下，比如node，浏览器，Ringo等等，执行方式是不同的。而运行大多指javascript解析引擎，是统一的。</div>
        <div>javascript是一门单线程语言。</div>
        <div>Event Loop是javascript的执行机制。</div>
        <el-row>
            <el-col :span="12">
                <img :src="taskImg0" width="500px"><br>
            </el-col>
            <el-col :span="12">
                <img :src="taskImg1" width="500px"><br>
            </el-col>
        </el-row>
        <span style="color: #FC796B">图一要表达的内容用文字来表述的话：</span>
        <ul style="margin-left: 20px">
            <li>同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。</li>
            <li>当指定的事情完成时，Event Table会将这个函数移入Event Queue。</li>
            <li>主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。</li>
            <li>上述过程会不断重复，也就是常说的Event Loop(事件循环)。</li>
        </ul>

        <el-button type="primary" @click="task">点击查看控制台执行顺序-1</el-button><br>
        <el-button type="primary" @click="task2">点击查看控制台执行顺序-2</el-button>
        <div>首先执行script下的宏任务,遇到setTimeout,将其放到宏任务的【队列】里<br>
            遇到 new Promise直接执行,打印"马上执行for循环啦"<br>
            遇到then方法,是微任务,将其放到微任务的【队列里】<br>
            打印 "代码执行结束"<br>
            本轮宏任务执行完毕,查看本轮的微任务,发现有一个then方法里的函数, 打印"执行then函数啦"<br>
            到此,本轮的event loop 全部完成。<br>
            下一轮的循环里,先执行一个宏任务,发现宏任务的【队列】里有一个 setTimeout里的函数,执行打印"定时器开始啦"
        </div>
        <el-button type="primary" @click="task3">点击查看控制台执行顺序-3</el-button><br>
        <img :src="task2Img" width="700px"><br>

        <el-button type="primary" @click="task4">点击查看控制台执行顺序-4</el-button><br>
        <div>一旦遇到await 就立刻让出线程,阻塞后面的代码<br>
            等候之后,对于await来说分两种情况: ①、不是promise 对象 ；②、是promise对象<br>
            如果不是promise,await会阻塞后面的代码,先执行async外面的同步代码,同步代码执行完毕后,在回到async内部,把promise的东西,作为await表达式的结果<br>
            如果它等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果<br>
            如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。
        </div>

        <el-button type="primary" @click="task5">点击查看控制台执行顺序-5</el-button><br>

        <el-button type="primary" @click="task6">点击查看控制台执行顺序-6</el-button><br>
        <div>先执行同步代码 promise1, promise2,此时微任务有两个任务 log(1)和log(4)<br>
            执行完log(1)和log(4)此时任务中有log(2)和log(5)两个微任务<br>
            执行log(2)和log(5)此时任务中有log(3)和log(6)两个微任务<br>
            连续的几个then()回调，并不是连续的创建了一系列的微任务并推入微任务队列，因为then()的返回值必然是一个Promise，而后续的then()是上一步then()返回的Promise的回调
        </div>

        <el-button type="primary" @click="task7">点击查看控制台执行顺序-7</el-button><br>
        <div>执行栈既是函数在执行时存储调用过程的栈,同样的,采取调用形式进行队列,先进后出的方式</div>

        <el-button type="primary" @click="task8">点击查看控制台执行顺序-8</el-button><br>

        <el-button type="primary" @click="task9">点击查看控制台执行顺序-9</el-button><br>

        <el-button type="primary" @click="task10">点击查看控制台执行顺序-10</el-button><br>
        <div>整段代码，共进行了三次事件循环，完整的输出为1，7，6，8，2，4，3，5，9，11，10，12</div>
        <div>请注意，node环境下的事件监听依赖libuv与前端环境不完全相同，输出顺序可能会有误差</div>

        <el-button type="primary" @click="task11">点击查看控制台执行顺序-11</el-button><br>
    </div>
</template>

<script>
    export default {
        name: "task",
        data() {
            return{
                taskImg0:require("../assets/img/task0.png"),
                taskImg1:require("../assets/img/task.png"),
                task2Img:require("../assets/img/task2.png"),
            }
        },
        methods:{
            async async1(){
                console.log('async1 start');
                await this.async2();
                console.log('async1 end')
            },
            async async2(){
                console.log('async2')
            },
            task() {
                console.log('script start');
                setTimeout(function(){
                    console.log('setTimeout')
                },0);
                this.async1();
                new Promise(function(resolve){
                    console.log('promise1');
                    resolve();
                }).then(function(){
                    console.log('promise2')
                });
                console.log('script end');
            },

            task2() {
                setTimeout(function(){
                    console.log('定时器开始啦')
                });
                new Promise(function(resolve){
                    console.log('马上执行for循环啦');
                    for(var i = 0; i < 10000; i++){
                        i === 99 && resolve();
                    }
                }).then(function(){
                    console.log('执行then函数啦')
                });
                console.log('代码执行结束');
            },

            task3() {
                setTimeout(() => console.log('setTimeout1'), 0);  //1宏任务
                setTimeout(() => {                              //2宏任务
                    console.log('setTimeout2');
                    Promise.resolve().then(() => {
                        console.log('promise2');
                        Promise.resolve().then(() => {
                            console.log('promise3');
                        });
                        console.log(5)
                    });
                    setTimeout(() => console.log('setTimeout4'), 0);  //4宏任务
                }, 0);
                setTimeout(() => console.log('setTimeout3'), 0);  //3宏任务
                Promise.resolve().then(() => {//1微任务
                    console.log('promise1');
                });
                // new Promise(function (resolve) {
                //     console.log('...');
                //     resolve()
                // }).then(console.log('***'));
                // console.log('开始了')
            },

            task4() {
                this.async1();
                console.log( 'script start' )
            },

            task5() {
                console.log( 'script start' );
                setTimeout( function () {
                    console.log( 'setTimeout' )
                }, 0);
                this.async1();
                new Promise( function ( resolve ) {
                    console.log( 'promise1' );
                    resolve();
                }).then( function () {
                    console.log( 'promise2' )
                });
                console.log( 'script end' )
            },

            task6() {
                new Promise( ( resolve, reject ) => {
                    console.log( "promise1" );
                    resolve()
                }).then(() => {
                    console.log( 1 )
                }).then(() => {
                    console.log( 2 )
                }).then(() => {
                    console.log( 3 )
                });
                new Promise( ( resolve, reject ) => {
                    console.log( "promise2" );
                    resolve()
                }).then(() => {
                    console.log( 4 )
                }).then(() => {
                    console.log( 5 )
                }).then(() => {
                    console.log( 6 )
                })
            },

            foo(i) {
                if (i < 0) return;
                console.log('begin:' + i);
                this.foo(i - 1);
                console.log('end:' + i);
            },
            task7() {
                this.foo(2);
            },

            async t1 () {
                console.log(1);
                console.log(2);
                await Promise.resolve().then(() => console.log('t1p'));
                console.log(3);
                console.log(4)
            },
            async t2() {
                console.log(5);
                console.log(6);
                await Promise.resolve().then(() => console.log('t2p'));
                console.log(7);
                console.log(8)
            },
            task8() {
                this.t1();
                this.t2();
                console.log('end');
            },

            async t3 () {
                console.log(1);
                console.log(2);
                await new Promise(resolve => {
                    setTimeout(() => {
                        console.log('t1p');
                        resolve()
                    }, 1000)
                });
                await console.log(3);
                console.log(4)
            },
            async t4() {
                console.log(5);
                console.log(6);
                await Promise.resolve().then(() => console.log('t2p'));
                console.log(7);
                console.log(8);
            },
            task9() {
                this.t3();
                this.t4();
                console.log('end');
            },

            task10() {
                //主线程直接执行
                console.log('1');
                //丢到宏事件队列中
                setTimeout(function() {
                    console.log('2');
                    process.nextTick(function() {
                        console.log('3');
                    });
                    new Promise(function(resolve) {
                        console.log('4');
                        resolve();
                    }).then(function() {
                        console.log('5')
                    })
                });
                //微事件1
                process.nextTick(function() {
                    console.log('6');
                });
                //主线程直接执行
                new Promise(function(resolve) {
                    console.log('7');
                    resolve();
                }).then(function() {
                    //微事件2
                    console.log('8')
                });
                //丢到宏事件队列中
                setTimeout(function() {
                    console.log('9');
                    process.nextTick(function() {
                        console.log('10');
                    });
                    new Promise(function(resolve) {
                        console.log('11');
                        resolve();
                    }).then(function() {
                        console.log('12')
                    })
                })
            },

            task11() {
                setTimeout(() => {
                    console.log('lalala')
                }, 3000);
                console.log('ddddd')
            }
        }
    }
</script>

<style scoped>
    .el-button{
        margin: 10px 0;
    }
</style>
