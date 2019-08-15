<template>
    <div style="padding: 20px; background-color: #fff">
        <div class="chapter_title">let与const命令：</div>
        <ul>
            <li>ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: let 和 const。</li>
            <li>let 声明的变量只在 let 命令所在的代码块内有效。</li>
            <li>const 声明一个只读的常量，一旦声明，常量的值就不能改变。</li>
            <li>let 只能声明一次 var 可以声明多次。</li>
        </ul>
        <el-button @click="compire">查看控制台比较var和let</el-button>
        <ul>
            <li>变量 i 是用 var 声明的，在全局范围内有效，所以全局中只有一个变量 i, 每次循环时，setTimeout 定时器里面的 i 指的是全局变量 i ，而循环里的十个 setTimeout 是在循环结束后才执行，所以此时的 i 都是 10。</li>
            <li>变量 j 是用 let 声明的，当前的 i 只在本轮循环中有效，每次循环的 j 其实都是一个新的变量，所以 setTimeout 定时器里面的 j 其实是不同的变量，即最后输出12345。（若每次循环的变量 j 都是重新声明的，如何知道前一个循环的值？这是因为 JavaScript 引擎内部会记住前一个循环的值）。</li>
            <li style="color: blue">去掉定时器之后,输出的结果是一致的</li>
        </ul>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先这样的结果需要从JS的执行机制说起。JS是单线程环境，也就是说代码的执行是从上到下，依次执行。这样的执行称为同步执行。因为种种不要浪费和节约的原因。JS中引进了异步的机制。在这段代码中，哪个是同步哪个是异步呢？for循环是同步代码，而setTimeout中的是异步代码。那么JS碰到这个有同步和异步的情况下会先从上到下执行同步代码，碰到异步的代码会将其插入到任务队列当中等待。而setTimeout是延时，也就是说碰到setTimeout这个异步的代码块会根据它里面的第二个参数：延时时间来将代码插入到任务队列当中，比如上面这段代码中，第二个参数延时时间是0，也就是说执行到它的时候会在0ms之后将它插入到任务队列当中。同步代码都执行完成之后，那么JS引擎就空闲了，这个时候就轮到任务队列中的异步代码依次加载了。<br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是上面这段代码的答案的一半。另一半就来自于作用域，作用域是变量等资源的作用范围。在这段代码中准确的说是作用域链的问题，当同步代码执行完毕开始执行异步的setTimeout代码时，setTimeout中需要一个变量 ---i---,而执行的时候在当前的作用域中开始找，找不到变量i的定义，这个时候就把创建这个函数的作用域作为当前作用域，再次寻找，创建这个函数的作用域就是全局作用域，也就是找到了for循环中i，找到了之后就结束寻找变量i的行程。由于这个时候的i是全局的，而且人家已经变为了最终形态：10，setTimeout找到的就是这个i=10；所以就输出了10，下面的9次setTimeout 的执行都是类似，所以结果都是10；<br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以我对这个答案的理解归结起来就是  异步加载+作用域链。
        </div>
        <el-button @click="improve">变量提升</el-button>
        <ul>
            <li>let不存在变量提升，var会变量提升</li>
            <li>变量 a 用 let 声明不存在变量提升，在声明变量 a 之前，a 不存在，所以会报错。</li>
            <li>变量 b 用 var 声明存在变量提升，所以当脚本开始运行的时候，b 已经存在了，但是还没有赋值，所以会输出 undefined。</li>
        </ul>
        <div style="color: blue;">看控制台发现，a的输出结果也为undefined ???</div>
        <el-button @click="diff_let">点击查看控制台</el-button>
        <ul>
            <li>另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。</li>
            <li>上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。</li>
        </ul>
        <!--<hr style="height:1px;border:none;border-top:1px dashed #FC796B;">-->

        <div class="chapter_title">解构赋值：</div>
        <ul>
            <li>解构赋值是对赋值运算符的扩展。</li>
            <li>他是一种针对数组或者对象进行模式匹配，然后对其中的变量进行赋值。</li>
        </ul>
        <el-button @click="dec_array">数组解构赋值</el-button>
        <ul>
            <li>字符串：在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现 Iterator 接口的数据。</li>
            <li>解构默认值：当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。</li>
        </ul>
        <el-button @click="dec_object">对象解构赋值</el-button>
        <!--<hr style="height:1px;border:none;border-top:1px dashed #FC796B;">-->

        <div class="chapter_title">Symbol：</div>
        <ul>
            <li>ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。</li>
            <li>ES6 数据类型除了 Number 、 String 、 Boolean 、 Object、 null 和 undefined ，还新增了 Symbol 。</li>
        </ul>
        <el-button @click="define">基本用法</el-button>
        <div>使用场景</div>
        <ul>
            <li>由于每一个 Symbol 的值都是不相等的，所以 Symbol 作为对象的属性名，可以保证属性不重名。</li>
            <li>Symbol 作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性。</li>
            <li>Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。</li>
        </ul>
        <el-button @click="use1">使用场景1</el-button>
        <div>
            Symbol.for() 类似单例模式，首先会在全局搜索被登记的 Symbol 中是否有该字符串参数作为名称的 Symbol 值，如果有即返回该 Symbol 值，若没有则新建并返回一个以该字符串参数为名称的 Symbol 值，并登记在全局环境中供搜索。
        </div>
        <el-button @click="symbol_for">Symbol.for()</el-button>
        <div>
            Symbol.keyFor() 返回一个已登记的 Symbol 类型值的 key ，用来检测该字符串参数作为名称的 Symbol 值是否已被登记。
        </div>
        <el-button @click="symbol_keyFor">Symbol.keyFor()</el-button>
    </div>
</template>

<script>
    export default {
        name: "declare",
        data() {
            return {

            }
        },
        methods: {
            compire() {
                for (var i = 0; i < 10; i++) {
                    setTimeout(function(){
                        console.log('var:', i);  // 10个10
                    },0)
                }
                for (let j = 0; j < 10; j++) {
                    setTimeout(function(){
                        console.log('let:', j);  // 0~9
                    },0)
                }
                for (var m = 0; m < 10; m++) {
                    (function (n) {
                        setTimeout(function(){
                            console.log('var:', n);  // 0~9
                        },0)
                    })(m)
                }
            },
            improve() {
                console.log('a:', a);
                let a = 'wang';
                console.log('b:', b);
                var b = 'wuhui';
            },
            diff_let() {
                for (let i = 0; i < 3; i++) {
                    let i = 'abc';
                    console.log(i);
                }
            },

            dec_array() {
                //基本
                var [a,b,c] = [1,2,3];
                console.log(a,b,c);
                //嵌套
                var [a,[[b],c]] = [1,[[2],3]];
                console.log(a,b,c);
                //可忽略
                var [a,,c] = [1,2,3];
                console.log(a,b,c);
                //不完全解构
                var [a=1,b] = [];
                console.log(a,b);
                //剩余运算符
                var [a=1,...b] = [1,2,3];
                console.log(a,b);
                //字符串等
                var [a,b,c,d,e,f] = 'hello';
                console.log(a,b,c,d,e,f);
                //解构默认值
                var [a=1] = [undefined];
                console.log(a);
                var [a=1, b=a] = [];
                console.log(a,b);
                var [a=1, b=a] = [6];
                console.log(a,b);
                var [a=1, b=a] = [4, 8];
                console.log(a,b);
            },
            dec_object() {
                //基本
                var { foo, bar } = { foo: 'aaa', bar: 'bbb' };
                console.log(foo, bar);
                var { baz : foo } = { baz : 'ddd' };
                console.log(foo);
                //可嵌套可忽略
                var obj = {p: ['hello', {y: 'world'}] };
                var {p: [x, { y }] } = obj;
                console.log(x,y);
                var obj = {p: ['hello', {y: 'world'}] };
                var {p: [x, {  }] } = obj;
                console.log(x);
                //不完全解构
                var obj = {p: [{y: 'world'}] };
                var {p: [{ y }, x ] } = obj;
                console.log(x,y);
                //剩余运算符
                var {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
                console.log(a,b,rest);
                //解构默认值
                var {a = 10, b = 5} = {a: 3};
                console.log(a,b);
                var {a: aa = 10, b: bb = 5} = {a: 3};
                console.log(a,b);
            },

            define() {
                let a = Symbol('kk');
                console.log('a:', a);
                let b = Symbol('kk');
                console.log('b:', b);
                console.log(typeof a, typeof b);
                console.log(a===b);  //false  相同参数 Symbol() 返回的值不相等
            },
            use1() {
                let sy = Symbol("key1");
                let syObject = {};
                syObject[sy] = "kk";
                console.log(syObject);
                console.log(syObject[sy]);
                console.log(syObject.sy);  // undefined（Symbol 作为对象属性名时不能用.运算符，要用方括号）

                for(let i in syObject){
                    console.log('...', i)  // 无输出
                }
                console.log('...', Object.keys(syObject));  // []
                console.log('...', Object.values(syObject));  // []
                console.log('...', Object.getOwnPropertyNames(syObject));  // []
                console.log('***', Object.getOwnPropertySymbols(syObject));  // [Symbol(key1)]
            },

            symbol_for() {
                let yellow = Symbol("Yellow");
                let yellow1 = Symbol.for("Yellow");
                console.log(yellow === yellow1);      // false

                let yellow2 = Symbol.for("Yellow");
                console.log(yellow1 === yellow2);     // true
            },
            symbol_keyFor() {
                let yellow1 = Symbol.for("Yellow");
                console.log(Symbol.keyFor(yellow1));    // "Yellow"
            }
        }
    }
</script>

<style scoped>
    .el-button{margin: 10px 0}
    ul{margin-left: 20px}
</style>
