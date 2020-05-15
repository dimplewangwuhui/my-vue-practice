<template>
    <div style="padding: 20px;">
        <div class="chapter_title">Promise对象</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Promise状态</div>
        <div>状态的特点：</div>
        <div>Promise 异步操作有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。除了异步操作的结果，任何其他操作都无法改变这个状态。<br>
            Promise 对象只有：从 pending 变为 fulfilled 和从 pending 变为 rejected 的状态改变。只要处于 fulfilled 和 rejected ，状态就不会再变了即 resolved（已定型）。
        </div>
        <el-button @click="fn_promise">promise(查看控制台执行顺序)</el-button>
        <div>状态的缺点：<br>
            无法取消 Promise ，一旦新建它就会立即执行，无法中途取消。<br>
            如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。<br>
            当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
        </div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">then方法</div>
        <div>then 方法接收两个函数作为参数，第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调，两个函数只会有一个被调用。</div>
        <div>d但是，一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。</div>
        <ul>
            <li>在 JavaScript 事件队列的当前运行完成之前，回调函数永远不会被调用。</li>
            <li>通过 .then 形式添加的回调函数，不论什么时候，都会被调用。</li>
            <li>then 方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。</li>
            <li>通过多次调用 .then ，可以添加多个回调函数，它们会按照插入顺序并且独立运行。</li>
        </ul>
        <el-button @click="fn_more_then">.then(多次调用)</el-button>
        <div>Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。</div>
        <el-button @click="fn_fff">用Promise对象实现 Ajax 操作</el-button>
        <el-button @click="fn_param_promise">Promise实例作为resolve函数的参数</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">catch方法</div>
        <el-button @click="fn_catch">.catch方法</el-button>
        <el-button @click="fn_resolve_err">如果 Promise 状态已经变成resolved，再抛出错误是无效的</el-button>
        <div>如果没有使用catch方法置顶错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应，不会影响外层代码的执行。</div>
        <div>在服务器执行，退出码是0（即表示执行成功），不过，Node有一个unhandledRejection事件，专门监听未捕获的reject错误</div>
        <div>unhandleRejection事件监听函数有两个参数，第一个是错误对象，第二个是报错的Promise实例</div>
        <div>不过，Node有计划在未来废除unhandledRejection事件。如果Promise内部有未捕获的错误，会直接终止进程，并且进城的退出码部位0。</div>
        <el-button @click="fn_no_catch">没有catch方法</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">finally方法</div>
        <div>finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Promise.all()</div>
        <div>Promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例。</div>
        <div>只有所有的promise实例状态都变成fulfilled，promise.all的状态才会变成fulfilled。</div>
        <div>只要promise实例有一个被rejected，promise.all的状态就变成rejected。此时第一个被reject的实例的返回值，会传递给promise.all的回调函数</div>
        <el-button @click="fn_promise_all">Promise.all()</el-button>
        <div style="color: blue">上面代码中，p1会resolved，p2首先会rejected，但是p2有自己的catch方法，该方法返回的是一个新的 Promise 实例，p2指向的实际上是这个实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。</div>
        <div style="color: blue">如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Promise.race()</div>
        <div>promise.race方法同样是将多个Promise实例包装成一个新的Promise实例。</div>
        <div>但是，只要有一个实例率先改变状态，all的状态就跟着改变，那个率先改变的实例的返回值，就传递给all的回调函数。</div>


        <div class="chapter_title">Generator函数</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Generator函数组成</div>
        <div>Generator 有两个区分于普通函数的部分：</div>
        <ul>
            <li>一是在 function 后面，函数名之前有个 * （function* 函数名(){}   或   函数名: function* ()）；</li>
            <li>函数内部有 yield 表达式。</li>
        </ul>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">执行机制</div>
        <div>调用 Generator 函数和调用普通函数一样，在函数名后面加上()即可，但是 Generator 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针，所以要调用遍历器对象Iterator 的 next 方法，指针就会从函数头部或者上一次停下来的地方开始执行。</div>
        <el-button @click="fn_generator">generator执行</el-button>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">next方法</div>
        <div>一般情况下，next 方法不传入参数的时候，yield 表达式的返回值是 undefined 。当 next 传入参数的时候，该参数会作为上一步yield的返回值。</div>
        <el-button @click="fn_next">next()无参</el-button>
        <el-button @click="fn_next_param">next(x)有参</el-button>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">yield* 表达式</div>
        <div>yield* 表达式表示 yield 返回一个遍历器对象，用于在 Generator 函数内部，调用另一个 Generator 函数。</div>
        <el-button @click="fn_yield">yield*</el-button>


        <div class="chapter_title">async函数</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">async——返回值</div>
        <div>async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。</div>
        <el-button @click="fn_async">async</el-button>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">await</div>
        <div>async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。<br>
            await 关键字仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误。</div>
        <el-button @click="fn_await">await</el-button>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">await——返回值</div>
        <div>返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。<br>
            如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。<br>
            正常情况下，await 命令后面是一个 Promise 对象，它也可以跟其他值，如字符串，布尔值，数值以及普通函数。
        </div>
        <div>await针对所跟不同表达式的处理方式：</div>
        <ul>
            <li>Promise 对象：await 会暂停执行，等待 Promise 对象 resolve，然后恢复 async 函数的执行并返回解析值。</li>
            <li>非 Promise 对象：直接返回对应的值。</li>
        </ul>
        <el-button @click="fn_await_return">await</el-button>
        <el-button @click="fn_await_no_promise">await后不是Promise对象</el-button>
    </div>
</template>

<script>
    export default {
        name: "async",
        data() {
            return {

            }
        },
        methods: {
            fn_promise() {
                var p1 = new Promise(function (resolve, reject) {
                    resolve('success');
                    resolve('success2');
                    reject('reject');
                });
                p1.then(function (value) {
                    console.log(value)
                });
                console.log('==========')
            },
            fn_more_then() {
                const p = new Promise(function (resolve, reject) {
                    resolve('2')
                }).then(function (value) {
                    console.log(value);  // 2
                    return value * 2
                }).then(function (value) {   // 上一个回调函数完成以后，会将返回结果作为参数，传入下一个回调函数。
                    console.log(value)  // 4
                }).then(function (value) {
                    console.log(value);  // undefined
                    return Promise.resolve('resolve')
                }).then(function (value) {
                    console.log(value);  // resolve
                    return Promise.reject('reject')
                }).then(function (value) {
                    console.log('resolve:', value);
                }, function (err) {
                    console.log('reject1:', err);  // reject: reject
                })
                //     .catch(err => {            // 或者通过.catch()
                //     console.log('reject2:',err);
                // })
            },
            getJSON(url) {
                const promise = new Promise(function(resolve, reject){
                    const handler = function() {
                        if (this.readyState !== 4) {
                            return;
                        }
                        if (this.status === 200) {
                            resolve(this.response);
                        } else {
                            reject(new Error(this.statusText));
                        }
                    };
                    const client = new XMLHttpRequest();
                    client.open("GET", url);
                    client.onreadystatechange = handler;
                    client.responseType = "json";
                    client.setRequestHeader("Accept", "application/json");
                    client.send();
                });
                return promise;
            },
            fn_fff() {
                this.getJSON("/posts.json").then(function(json) {
                    console.log('Contents: ' + json);
                }, function(error) {
                    console.error('出错了', error);
                })
            },
            fn_param_promise() {
                const p1 = new Promise(function (resolve, reject) {
                    setTimeout(() => reject(new Error('fail')), 1000)
                });
                const p2 = new Promise(function (resolve, reject) {
                    setTimeout(() => resolve(p1), 1000)
                });
                p2.then(result => console.log('*****',result)).catch(error => console.log('=====',error))
            },
            fn_catch() {
                // 以下三种写法等价
                const promise = new Promise(function(resolve, reject) {
                    throw new Error('抛出异常');
                }).catch(function(error) {
                    console.log(error);
                });

                const promise2 = new Promise(function (resolve, reject) {
                    reject(new Error('抛出异常'))   // reject方法的作用，等同于抛出错误 throw new Error()
                }).catch(err => console.log(err));

                const promise3 = new Promise(function (resolve, reject) {
                    try {
                        throw new Error('抛出异常')
                    } catch (e) {
                        reject(e)
                    }
                }).catch(err => console.log(err))
            },
            fn_resolve_err() {
                const promise = new Promise((resolve, reject) => {
                    resolve('ok');
                    // throw new Error('false');
                    reject('false');
                }).then(value => console.log(value))
                    .catch(err => console.log(err))
            },
            fn_no_catch() {
                const fun = function () {
                    return new Promise(function (resolve, reject) {
                        resolve( x + 2 )  // 这里会报错， 因为x没有声明。但是不会退出进程、不会终止脚本执行
                    })
                };
                fun().then(function () {
                    console.log('hello')
                })
                    // .catch(err => console.log('**',err));
                console.log('promise对象内部有语法错误，但是不会影响到promise外部的代码');
            },
            fn_promise_all() {
                const p1 = new Promise(function (resolve, reject) {
                    resolve('hello');
                }).then(result => result)
                    .catch(err => err);
                const p2 = new Promise(function (resolve, reject) {
                    throw new Error('报错')
                }).then(result => result)
                    .catch(err => err);  // 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法
                Promise.all([p1, p2])
                    .then(result => console.log('==',result))
                    .catch(err => console.log('**',err))
            },
            func: function* () {
                console.log("one");
                yield '1';
                console.log("two");
                yield '2';
                console.log("three");
                return '3';
            },
            fn_generator() {
                var f = this.func();
                f.next();  // 第一次调用 next 方法时，从 Generator 函数的头部开始执行，先是打印了 one ,执行到 yield 就停下来，并将yield 后边表达式的值 '1'，作为返回对象的 value 属性值，此时函数还没有执行完， 返回对象的 done 属性值是 false。
                f.next();
                f.next();
                f.next();  // 第四次调用 next 方法时， 此时函数已经执行完了，所以返回 value 属性值是 undefined ，done 属性值是 true 。
            },

            sendParameter: function* () {
                console.log("start");
                var x = yield '2';
                console.log("one:" + x);
                var y = yield '3';
                console.log("two:" + y);
                console.log("total:" + (x + y));
            },
            fn_next() {
                var sendp1 = this.sendParameter();
                sendp1.next();
                // start
                // {value: "2", done: false}
                sendp1.next();
                // one:undefined
                // {value: "3", done: false}
                sendp1.next();
                // two:undefined
                // total:NaN
                // {value: undefined, done: true}
            },
            fn_next_param() {
                var sendp2 = this.sendParameter();
                sendp2.next(10);
                // strat
                // {value: "2", done: false}
                sendp2.next(20);  // 当 next 传入参数的时候，该参数会作为上一步yield的返回值。
                // one:20
                // {value: "3", done: false}
                sendp2.next(30);
                // two:30
                // total:50
                // {value: undefined, done: true}
            },
            callee: function*() {
                console.log('collee:', + (yield))
            },
            caller: function*() {
                while(true){
                    yield* this.callee()
                }
            },
            fn_yield() {
                const callerObj = this.caller();
                callerObj.next();
                // {value: undefined, done: false}
                callerObj.next('1');   // callerObj.next('a') 输出 callee: NaN
                // callee: 1
                // {value: undefined, done: false}
                callerObj.next('2');
                // callee: 2
                // {value: undefined, done: false}
            },

            async helloAsync(){
                return 'hello async';
            },
            fn_async() {
                console.log(this.helloAsync());   // 返回一个promise对象
                this.helloAsync().then(value => {
                    console.log(value)
                })
            },

            testAwait(){
                return new Promise((resolve) => {
                    setTimeout(function(){
                        console.log("testAwait");
                        resolve();
                    }, 1000);
                });
            },
            async helloAsync2(){
                await this.testAwait();
                console.log("helloAsync");
            },
            fn_await(){
                this.helloAsync2();
            },

            testAwait3 (x) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(x);
                    }, 2000);
                });
            },
            async helloAsync3() {
                var x = await this.testAwait3 ("hello world");
                console.log(x);
            },
            fn_await_return() {
                this.helloAsync3()  // 2秒后输出hello world
            },

            testAwait4(){
                console.log("testAwait");
            },
            async helloAsync4(){
                await this.testAwait4();
                console.log("helloAsync");
            },
            fn_await_no_promise() {
                this.helloAsync4()
            }
        }
    }
</script>

<style scoped>
    .el-button{margin: 10px 10px 10px 0}
</style>
