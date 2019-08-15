<template>
    <div style="padding: 20px; background-color: #fff">
        <div id="app">
            <h1 style="font-size: 16px; text-align: center;">{{$t('hello')}}</h1>
        </div>
        <div class="chapter_title">map 与 set：</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Maps和Objects 的区别：</div>
        <ul>
            <li>一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。</li>
            <li>Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。</li>
            <li>Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。</li>
            <li>Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。</li>
        </ul>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Map中的key：</div>
        <el-button @click="map_str">key是字符串</el-button>
        <el-button @click="map_obj">key是对象</el-button>
        <el-button @click="map_fun">key是函数</el-button>
        <el-button @click="map_nan">key是NAN</el-button>
        <el-button @click="map_number">key是数字</el-button>
        <el-button @click="map_undef">key是undefined</el-button>
        <el-button type="primary" @click="equal">一些恒等问题</el-button>
        <div style="color: blue">虽然 NaN 和任何值甚至和自己都不相等(NaN !== NaN 返回true)，NaN作为Map的键来说是没有区别的。</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Map的迭代：</div>
        <el-button @click="for_of">for...of</el-button>
        <el-button @click="forEach">forEach</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Map对象的操作：</div>
        <el-button @click="mapToArray">Map 与 Array的转换</el-button>
        <el-button @click="mapClone">Map 的克隆</el-button>
        <el-button @click="mapCombine">Map 的合并</el-button>
        <div style="color: blue;">map对象与数组之间的转换，数组是一个二维数组</div>
        <div style="color: blue;">map对象的克隆，两者之间不相等</div>
        <div style="color: blue;">合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的</div>
        <hr style="height:1px;border:none;border-top:1px dashed #FC796B;">

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Set对象：</div>
        <div>Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Set中的特殊值：</div>
        <div>Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：</div>
        <ul>
            <li>+0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；</li>
            <li>undefined 与 undefined 是恒等的，所以不重复；</li>
            <li>NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。</li>
        </ul>
        <el-button @click="set_add">set_add</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">类型转换：</div>
        <div>1、Array转Set；2、Set转Array；3、String 转 Set</div>
        <div style="color: blue">注：Set 中 toString 方法是不能将 Set 转换成 String</div>
        <el-button @click="transfer">类型转换</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Set对象作用：</div>
        <el-button @click="remove">数组去重</el-button>
        <el-button @click="add">并集</el-button>
        <el-button @click="or">交集</el-button>
        <el-button @click="sub">差集</el-button>


        <div class="chapter_title">Reflect 与 Proxy：</div>
        <div>enenen</div>


        <div class="chapter_title">字符串：</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">子串的识别</div>
        <div>ES6 之前判断字符串是否包含子串，用 indexOf 方法，ES6 新增了子串的识别方法。</div>
        <ul>
            <li>includes()：返回布尔值，判断是否找到参数字符串。所查找的子串必须连续，否则返回false</li>
            <li>startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。</li>
            <li>endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部。</li>
        </ul>
        <div style="color: blue;">
            这三个方法只返回布尔值，如果需要知道子串的位置，还是得用 indexOf 和 lastIndexOf 。<br>
            这三个方法如果传入了正则表达式而不是字符串，会抛出错误。而 indexOf 和 lastIndexOf 这两个方法，它们会将正则表达式转换为字符串并搜索它。
        </div>
        <el-button @click="fun_str">识别子串</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">字符串重复</div>
        <div>repeat()：返回新的字符串，表示将字符串重复指定次数返回</div>
        <ul>
            <li>如果参数是小数，向下取整</li>
            <li>如果参数是 0 至 -1 之间的小数，会进行取整运算，0 至 -1 之间的小数取整得到 -0 ，等同于 repeat 零次</li>
            <li>如果参数是 NaN，等同于 repeat 零次</li>
            <li>如果参数是负数或者 Infinity ，会报错</li>
            <li>如果传入的参数是字符串，则会先将字符串转化为数字</li>
        </ul>
        <div style="color: blue">'hello' === 'hello'.repeat(1) 返回true</div>
        <el-button @click="repeat">字符串重复</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">字符串补全</div>
        <div>padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。<br>
            padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。<br>
            以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
        </div>
        <ul>
            <li>如果指定的长度小于或者等于原字符串的长度，则返回原字符串</li>
            <li>如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串</li>
            <li>常用于补全位数</li>
        </ul>
        <el-button @click="pad">字符串补全</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">模板字符串</div>
        <div>模板字符串相当于加强版的字符串，用反引号 `,除了作为普通字符串，还可以用来定义多行字符串，还可以在字符串中加入变量和表达式</div>
        <ul>
            <li>字符串插入变量和表达式。 变量名写在 ${} 中，${} 中可以放入 JavaScript 表达式。</li>
        </ul>
        <div style="color: blue">注意：模板字符串中的换行和空格都是会被保留的</div>
        <el-button @click="template">模板字符串（查看控制台比较与普通引号字符串的区别）</el-button>


        <div class="chapter_title">数值：</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">数值的表示</div>
        <div>二进制表示法新写法: 前缀 0b 或 0B 。</div>
        <div>八进制表示法新写法: 前缀 0o 或 0O 。</div>
        <el-button @click="expression">数值表示</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">常量</div>
        <div>Number.EPSILON 属性表示 1 与大于 1 的最小浮点数之间的差。<br>
            它的值接近于 2.2204460492503130808472633361816E-16，或者 2-52。</div>
        <div style="color: blue">Number.EPSILON 常用来测试数值是否在误差范围内</div>
        <el-button @click="fn_const">常量</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">最大/最小安全整数</div>
        <div>安全整数表示在 JavaScript 中能够精确表示的整数，安全整数的范围在 2 的 53 次方的负数 到 2 的 53 次方之间<span style="color: blue">（不包括两个端点）</span>，超过这个范围的整数无法精确表示。</div>
        <el-button @click="fn_max_safe_integer">最大安全整数</el-button>
        <el-button @click="fn_min_safe_integer">最小安全整数</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Number对象新方法</div>
        <ul>
            <li>Number.isFinite()——用于检查一个数值是否为有限的</li>
            <li>Number.isNaN()——用于检查一个值是否为NaN</li>
            <li>Number.parseInt()——用于将给定字符串转化为指定进制的整数</li>
            <li>Number.parseFloat()——用于把一个字符串解析成浮点数</li>
            <li>Number.isInteger()——用于判断给定的参数是否为整数</li>
            <li>Number.isSafeInteger()——用于判断数值是否在安全范围内</li>
        </ul>
        <div style="color: blue;">Number.isFinate() 没有隐式的 Number() 类型转换，所有非数值都返回 false</div>
        <div style="color: blue;">Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false</div>
        <div style="color: blue;">从全局移植到 Number 对象的方法：parseInt()、parseFloat()、isInteger()、isSafeInteger()</div>
        <div style="color: blue">Number.MIN_VALUE 属性是 JavaScript 中可表示的最小的数（接近 0 ，但不是负数）。它的近似值为 5 x 10-324。</div>
        <div style="color: blue;">一个数值的绝对值小于 Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0，也会产生误判</div>
        <el-button @click="fn_isFinite">isFinite</el-button>
        <el-button @click="fn_isNaN">isNaN</el-button>
        <el-button @click="fn_parseInt">parseInt</el-button>
        <el-button @click="fn_parseFloat">parseFloat</el-button>
        <el-button @click="fn_isInteger">isInteger</el-button>
        <el-button @click="fn_isSafeInteger">isSafeInteger</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Math 对象的扩展</div>
        <ul>
            <li>Math.cbrt()——用于计算一个数的立方根<span style="color: blue">(会对非数值进行转换，非数值无法转换时返回NaN)</span></li>
            <li>Math.imul()——两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数</li>
            <li>Math.hypot()——用于计算所有参数的平方和的平方根<span style="color: blue">(非数值会先被转换为数值后进行计算；空值会被转换成0；参数为 Infinity 或 -Infinity 返回 Infinity； 参数中存在无法转换为数值的参数时返回 NaN)</span></li>
            <li>Math.clz32()——用于返回数字的32 位无符号整数形式的前导0的个数<span style="color: blue">(当参数为小数时，只考虑整数部分；对于空值或非数值，会转化为数值再进行计算)</span></li>
            <li>Math.trunc()——用于返回数字的整数部分<span style="color: blue">(整数部分为 0 时也会判断符号；Math.trunc 会将非数值转为数值再进行处理；空值或无法转化为数值时时返回 NaN)</span></li>
            <li>Math.fround()——用于获取数字的32位单精度浮点数形式<span style="color: blue">(当小数的精度超过 24 个二进制位，会丢失精度；参数为 NaN 或 Infinity 时返回本身；参数为其他非数值类型时会将参数进行转换 )</span></li>
            <li>Math.sign()——判断数字的符号（正、负、0）<span style="color: blue">(参数为 0 时，不同符号的返回不同；判断前会对非数值进行转换；参数为非数值（无法转换为数值）时返回 NaN)</span></li>
            <li>Math.expm1()——用于计算 e 的 x 次方减 1 的结果，即 Math.exp(x) - 1 </li>
            <li>Math.log1p(x)——用于计算1 + x 的自然对数，即 Math.log(1 + x) </li>
            <li>Math.log10(x)——用于计算以 10 为底的 x 的对数</li>
            <li>Math.log2()——用于计算 2 为底的 x 的对数</li>
            <li>Math.sinh(x)——用于计算双曲正弦</li>
            <li>Math.cosh(x)——用于计算双曲余弦</li>
            <li>Math.tanh(x)——用于计算双曲正切</li>
            <li>Math.asinh(x)——用于计算反双曲正弦</li>
            <li>Math.acosh(x)——用于计算反双曲余弦</li>
            <li>Math.atanh(x)——用于计算反双曲正切</li>
        </ul>
        <!--<el-button @click="fn_math_cbrt">Math.cbrt()</el-button>-->

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">指数运算符:</div>
        <div>**</div>
        <div>指数运算的优先级是从右到左</div>
        <el-button @click="fn_zs">指数运算符</el-button>


        <div class="chapter_title">对象：</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">对象的拓展运算符:</div>
        <div>拓展运算符（...）用于取出参数对象所有可遍历属性然后拷贝到当前对象。</div>
        <ul>
            <li>扩展运算符还可用于对象之间的合并，如果对象之间存在相同的属性名，合并时后面的对象将覆盖前面对象的同名属性。</li>
            <li>拓展运算符后面是空对象{ }或者null或者undefined，没有任何效果也不会报错。</li>
        </ul>
        <el-button @click="fn_expand">拓展运算符</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Object.assign(target, source_1, ···)</div>
        <div>Object.assign(target, source_1, ···) 用于将源对象的所有可枚举属性复制到目标对象中。</div>
        <ul>
            <li>如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。</li>
            <li>如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。</li>
            <li>因为 null 和 undefined 不能转化为对象，所以会报错</li>
            <li>当参数不止一个时，null 和 undefined 不放第一个，即不为目标对象时，会跳过 null 和 undefined ，不报错。但其他对象也不显示</li>
            <li>assign的属性拷贝是浅拷贝</li>
            <li>对于数组，会将数组处理成对象，例如所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制</li>
        </ul>
        <el-button @click="fn_object_assign">Object.assign()</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Object.is(value1, value2)</div>
        <div>Object.is(value1, value2) 用来比较两个值是否严格相等，与（===）基本类似</div>
        <div>Object.is()与===的区别：</div>
        <ul>
            <li>Object.is()的 +0不等于-0</li>
            <li>Object.is()的 NaN等于本身</li>
        </ul>
        <el-button @click="fn_object_is">Object.is()</el-button>

        <div class="chapter_title">数组：</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Array.of():</div>
        <div>将参数中所有值作为元素形成数组。参数值可为不同类型。参数为空时返回空数组。</div>
        <el-button @click="fn_array_of">Array.of()</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Array.from():</div>
        <div>将类数组对象或可迭代对象转化为数组。参数为数组,返回与原数组一样的数组。参数含空位返回undefined</div>
        <ul>
            <li>一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。</li>
            <li>没有 length 属性,则返回空数组</li>
            <li>元素属性名不为数值且无法转换为数值，返回长度为 length 元素值为 undefined 的数组</li>
        </ul>
        <el-button @click="fn_array_from">Array.from()</el-button>
        <el-button @click="fn_lei_array_from">类数组对象</el-button>
        <div>转换可迭代对象</div>
        <ul>
            <li>Map转Array——Array.from(map)</li>
            <li>Set转Array——Array.from(set)</li>
            <li>String转Array——Array.from(string)</li>
        </ul>
        <el-button @click="fn_map_array">Map转Array</el-button>
        <el-button @click="fn_set_array">Set转Array</el-button>
        <el-button @click="fn_str_array">String转Array</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">扩展的方法:</div>
        <ul>
            <li>find()——查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。</li>
            <li>findIndex()——查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。</li>
            <li>fill(value, start, end)——将一定范围索引的数组元素内容填充为单个指定的值（包括start，不包括end），end不指定默认为数组末尾。</li>
            <li>copyWithin(indexStart1, indexStart2, indexEnd2)——将一定范围索引的数组元素修改为此数组另一指定范围索引的元素（包括start，不包括end），end不指定默认为数组末尾。</li>
            <li>entries()——遍历键值对</li>
            <li>keys()——遍历健名</li>
            <li>values()——遍历健值</li>
            <li>includes(value, index)——数组是否包含指定值（index可选）。</li>
            <li>flat()——嵌套数组转一维数组</li>
            <li>flatMap()——先对数组中每个元素进行了的处理，再对数组执行 flat() 方法。</li>
        </ul>
        <el-button @click="fn_find">find()</el-button>
        <el-button @click="fn_findIndex">findIndex()</el-button>
        <el-button @click="fn_fill">fill()</el-button>
        <el-button @click="fn_copyWithin">copyWithin()</el-button>
        <el-button @click="fn_bl">遍历</el-button>
        <el-button @click="fn_includes">includes()</el-button>
        <el-button @click="fn_flat">flat()</el-button>
        <el-button @click="fn_flatMap">flatMap()</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">复制数组</div>
        <el-button @click="fn_copy_array">copy()</el-button>
    </div>
</template>

<script>
    export default {
        name: "innerObject",
        data() {
            return{

            }
        },
        methods: {
            map_str() {
                var myMap = new Map();
                var keyString = "a string";

                myMap.set(keyString, "和键'a string'关联的值");

                console.log(myMap.get(keyString));    // "和键'a string'关联的值"
                console.log(myMap.get("a string"));   // "和键'a string'关联的值"  因为 keyString === 'a string'

                // myMap.name = 'wangwuhui';
                // myMap['age'] = 20;
                // console.log('...', myMap);
                // console.log(myMap.get(name));
                // console.log(myMap.age);
                // console.log(myMap['age']);
                // console.log(myMap.size);

                var obj = new Object();
                obj.name = 'wangwuhui';
                obj['age'] = '20';
                console.log(obj);
                console.log(obj.length)
            },
            map_obj: function () {
                var myMap = new Map();
                var keyObj = {};

                myMap.set(keyObj, "和键 keyObj 关联的值");

                console.log(myMap.get(keyObj));   // "和键 keyObj 关联的值"
                console.log(myMap.get({}));   // undefined,  因为 keyObj !== {}
            },
            map_fun() {
                var myMap = new Map();
                var keyFunc = function () {}; // 函数

                myMap.set(keyFunc, "和键 keyFunc 关联的值");

                console.log(myMap.get(keyFunc));   // "和键 keyFunc 关联的值"
                console.log(myMap.get(function() {}))   // undefined, 因为 keyFunc !== function () {}
            },
            map_nan() {
                var myMap = new Map();
                myMap.set(NaN, "not a number");

                console.log(myMap.get(NaN));  // "not a number"

                var otherNaN = Number("foo");  // NAN
                console.log(myMap.get(otherNaN));  // "not a number"
            },
            map_number() {
                var myMap = new Map();
                var keyObj = 1;
                myMap.set(keyObj, "i am a number");
                console.log(myMap.get(keyObj));   // "i am a number"
                console.log(myMap.get(1));   // "i am a number"     因为1===1
            },
            map_undef() {
                var myMap = new Map();
                var keyObj = undefined;
                myMap.set(keyObj, "我是undefined");
                console.log(myMap.get(keyObj));   // "我是undefined"
                console.log(myMap.get(undefined));   // "我是undefined"  因为 undefined === undefined
            },
            equal() {
                console.log('a' === 'a');  // true
                console.log(1 === 1);  // true
                console.log(+0 === -0);  // true
                console.log(undefined === undefined);  // true
                console.log('' === '');  // true
                console.log('' === ' ');  // false
                console.log(NaN === NaN);  // false
                console.log([1] === [1]);  // false
                console.log({a:1} === {a:1});  // false
                console.log(function fun () {} === function fun() {})  // false
            },

            for_of() {
                var myMap = new Map();
                myMap.set(0, "zero");
                myMap.set(1, "one");

                for (let [key, value] of myMap) {
                    console.log(key + " = " + value);
                }
                for (let [key, value] of myMap.entries()) {
                    console.log(key + " = " + value);
                }
                for (let key of myMap.keys()) {
                    console.log(key);
                }
                for (let value of myMap.values()) {
                    console.log(value);
                }
            },
            forEach() {
                var myMap = new Map();
                myMap.set(0, "zero");
                myMap.set(1, "one");
                console.log('...', myMap);
                console.log('...', myMap.size);

                myMap.forEach(function(value, key) {
                    console.log(key + " = " + value);
                });

                myMap.forEach(item => {
                    console.log(item)
                })
            },

            mapToArray() {
                var array1 = [['key1', 'value1'], ['key2', 'value2']];
                var myMap = new Map(array1);  // Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
                console.log('Array转Map:', myMap);
                var myArray = Array.from(myMap);  // 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
                console.log('Map转Array:', myArray)
            },
            mapClone() {
                var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
                var myMap2 = new Map(myMap1);

                console.log(myMap1);
                console.log(myMap2);
                console.log(...myMap1);  // ["key1", "value1"]  ["key2", "value2"]
                console.log(myMap1 === myMap2);  // false   Map 对象构造函数生成实例，迭代出新的对象
            },
            mapCombine() {
                var first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
                var second = new Map([[1, 'uno'], [2, 'dos']]);
                console.log(first);
                console.log(second);
                console.log(...first);  // [1, 'one']  [2, 'two']  [3, 'three']
                console.log(...second);  // [1, 'uno']  [2, 'dos']
                console.log([...first, ...second]);

                // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
                var merged = new Map([...first, ...second]);
                console.log(merged)
            },

            set_add() {
                let mySet = new Set();

                mySet.add(1);   // Set(1) {1}
                mySet.add(5);   // Set(2) {1, 5}
                mySet.add(5);   // Set(2) {1, 5} 这里体现了值的唯一性
                mySet.add("some text");   // Set(3) {1, 5, "some text"}  这里体现了类型的多样性
                var o = {a: 1, b: 2};
                mySet.add(o);
                mySet.add({a: 1, b: 2});   // Set(5) {1, 5, "some text", {…}, {…}}  这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储
                console.log(mySet)
            },

            transfer() {
                // Array 转 Set
                var mySet = new Set(["value1", "value2", "value3"]);
                console.log(mySet);
                console.log(mySet.size);
                // 用...操作符，将 Set 转 Array
                var myArray = [...mySet];
                console.log(myArray);
                // String 转 Set
                var mySet = new Set('hello');  // Set(4) {"h", "e", "l", "o"}
                console.log(mySet);
                // 注：Set 中 toString 方法是不能将 Set 转换成 String
            },
            remove() {
                var mySet = new Set([4, 1, 2, 3, 4, 4]);
                console.log('去重:', [...mySet])
            },
            add() {
                var a = new Set([1, 2, 3]);
                var b = new Set([4, 3, 2]);
                console.log(a);  // {1, 2, 3}
                console.log(b);  //{4, 3, 2}
                console.log([...a, ...b]);  // [1, 2, 3, 4, 3, 2]
                var union = new Set([...a, ...b]); // {1, 2, 3, 4}
                console.log('并集:', [...union])  // [1, 2, 3, 4]
            },
            or() {
                var a = new Set([1, 2, 3]);
                var b = new Set([4, 3, 2]);
                var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}
                console.log('交集:', [...intersect])
            },
            sub() {
                var a = new Set([1, 2, 3]);
                var b = new Set([4, 3, 2]);
                var difference = new Set([...a].filter(x => !b.has(x))); // {1}
                console.log('差集:', [...difference]);
            },

            fun_str() {
                let string = "apple,banana,orange";
                console.log(string.includes('apple'));   //true
                console.log(string.includes('app'));   //true
                console.log(string.includes('le'));   //true
                console.log(string.includes('aple'));  // false
                console.log(string.startsWith('apple'));  //true
                console.log(string.startsWith('banana', 6));  //true
                console.log(string.endsWith('orange'));   //true
                console.log(string.endsWith('banana'));   //false
                console.log(string.indexOf('banana'));    // 6
            },
            repeat() {
                console.log("Hello,".repeat(1));
                console.log("Hello,".repeat(2));     // "Hello,Hello,"
                console.log('Hello,'.repeat(3.2));   // "Hello,Hello,Hello,"
                console.log("Hello,".repeat(-0.5));  // ""
                console.log("Hello,".repeat(NaN));   // ""
                console.log("Hello,".repeat("2"));   // "Hello,Hello,"
                console.log("Hello,".repeat("ff"));  // ""
                // console.log("Hello,".repeat(-2));    // 报错
                console.log('hello' === 'hello'.repeat(1))
            },
            pad() {
                console.log("h".padStart(5,"o"));           // "ooooh"
                console.log("h".padEnd(5,"o"));             // "hoooo"
                console.log("h".padStart(5));               // "    h"
                console.log("hello".padStart(5,"A"));       // "hello"
                console.log("hello".padEnd(10,",world!"));  // "hello,worl"
                console.log("123".padStart(10,"0"));        // "0000000123"
            },
            template() {
                let string = `Hello\nworld`;
                console.log(string);
                let string22 = 'hello\nworld';
                console.log(string22);

                let string1 =  `Hey,
                    can you stop angry now?`;
                console.log(string1);
                let string11 =  'Hey,' +
                    'can you stop angry now?';
                console.log(string11);

                let name = "Mike";
                let age = 27;
                let info = `My Name is ${name},I am ${age+1} years old next year.`;
                console.log(info);
                let info2 = 'My Name is ${name},I am ${age+1} years old next year.';
                console.log(info2);
                let info3 = 'My Name is '+ name +',I am ' + (age+1) + ' years old next year.';
                console.log(info3);

                function f(){
                    return "have fun!";
                }
                let string2= `Game start,${f()}`;
                console.log(string2);
            },

            expression() {
                console.log(0b11 === 3); // true
                console.log(0B11 === 3); // true
                console.log(0o11 === 9); // true
                console.log(0O11 === 9); // true
            },
            fn_const() {
                console.log('Number.EPSILON :',Number.EPSILON);
                console.log(Number.EPSILON.toFixed(20));
                console.log(0.1 + 0.2);  // 0.30000000000000004
                console.log(1 + 2 === 3);  // true
                console.log(0.1 + 0.2 === 0.3);  // false
                console.log(Math.abs(0.3 - (0.1 + 0.2)).toFixed(20));
                let equal = (Math.abs(0.3 - (0.1 + 0.2)) < Number.EPSILON);  // true
                console.log(equal);
            },
            fn_max_safe_integer() {
                console.log('最大安全整数:',Number.MAX_SAFE_INTEGER);
                console.log(Math.pow(2,53)-1);
                console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);  // true
                console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER + 1);      // false
                console.log(Number.MAX_SAFE_INTEGER - 1 === Number.MAX_SAFE_INTEGER - 2);  // false
            },
            fn_min_safe_integer() {
                console.log('最小安全整数:', Number.MIN_SAFE_INTEGER);
                console.log(-1*Math.pow(2,53)+1);
                console.log(Number.MIN_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2);  // false
                console.log(Number.MIN_SAFE_INTEGER === Number.MIN_SAFE_INTEGER - 1);      // false
                console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2);  // true
                console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 3);  // false
                console.log(Number.MIN_SAFE_INTEGER - 2 === Number.MIN_SAFE_INTEGER - 3);  // false
            },
            fn_isFinite() {
                console.log(Number.isFinite(1));    // true
                console.log(Number.isFinite(0.1));  // true
                console.log(Number.isFinite(NaN));  // false
                console.log( Number.isFinite(Infinity));  // false
                console.log( Number.isFinite(-Infinity)); // false
                // Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
                console.log( Number.isFinite('foo')); // false
                console.log( Number.isFinite('15'));  // false
                console.log( Number.isFinite(true));  // false
            },
            fn_isNaN() {
                console.log(Number.isNaN(0));  // false
                console.log(Number.isNaN(1));  // false
                console.log(Number.isNaN(NaN));        // true

                // 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
                // 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
                console.log(Number.isNaN("NaN"));      // false
                console.log(Number.isNaN(undefined));  // false
                console.log(Number.isNaN({}));         // false
                console.log(Number.isNaN("true"));     // false
            },
            fn_parseInt() {
                console.log(Number.parseInt(1.001));       // 默认十进制   1
                console.log(parseInt(1.001));              //  1
                console.log(Number.parseInt('1.001'));     //  1
                console.log(Number.parseInt('0011', 2));   // 二进制   3
                console.log(Number.parseInt('abc'));  // NaN
                console.log(Number.parseInt === parseInt)  // false   //Number.parseInt() 与全局的 parseInt() 函数是同一个函数????? true
            },
            fn_parseFloat() {
                console.log(Number.parseFloat('123.45'));     // 123.45
                console.log(Number.parseFloat('123.45abc')); // 123.45
                // 无法被解析成浮点数，则返回 NaN
                console.log(Number.parseFloat('abc')); // NaN
                // 与全局的 parseFloat() 方法是同一个方法
                console.log(Number.parseFloat === parseFloat); // false
            },
            fn_isInteger() {
                console.log(Number.isInteger(0));       // true
                // JavaScript 内部，整数和浮点数采用的是同样的储存方法,因此 1 与 1.0 被视为相同的值
                console.log(Number.isInteger(1));       // true
                console.log(Number.isInteger(1.0));     // true
                console.log(Number.isInteger(Math.PI)); // false
                // NaN 和正负 Infinity 不是整数
                console.log(Number.isInteger(NaN));       // false
                console.log(Number.isInteger(Infinity));  // false
                console.log(Number.isInteger(-Infinity)); // false
                console.log(Number.isInteger("10"));  // false
                console.log(Number.isInteger(true));  // false
                console.log(Number.isInteger(false)); // false
                console.log(Number.isInteger([1]));   // false
                // 数值的精度超过 53 个二进制位时，由于第 54 位及后面的位被丢弃，会产生误判
                // 32位浮点型数有7位小数精度（十进制）
                // 64位浮点型数有15位小数精度（十进制）
                console.log(Number.isInteger(1.0000000000000001)); // true
                console.log(Number.isInteger(0.0000000000000001)); // false
                // 一个数值的绝对值小于 Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0，也会产生误判
                console.log(Number.isInteger(5E-324)); // false
                console.log(Number.isInteger(5E-325)); // true
                console.log(Number.MIN_VALUE);
            },
            fn_isSafeInteger() {
                console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));  // false
                console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));  // false
                console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1));  // true
            },

            fn_zs() {
                console.log( 2 ** 2 );
                console.log( 2 ** 2 ** 3 )
            },

            fn_expand() {
                let map = new Map();
                map.set('name', 'wangwuhui');
                map.set('age', '20');
                console.log(map);
                console.log(...map);

                let obj = {name:'wangwuhui', age:80};
                // console.log(...obj);   //会报错
                console.log({...obj});
                //扩展运算符还可用于对象之间的合并，如果对象之间存在相同的属性名，合并时后面的对象将覆盖前面对象的同名属性。
                let obj2 = {sex:'male', age:'20'};
                console.log({...obj, ...obj2});
                console.log({...obj2, ...obj});

                // 拓展运算符后面是空对象，没有任何效果也不会报错
                let a = {...{}, a: 1, b: 2};
                console.log(a);  // {a: 1, b: 2}
                // 拓展运算符后面是null或者undefined，没有效果也不会报错。
                let b = {...null, ...undefined, a: 1, b: 2};
                console.log(b);  // {a: 1, b: 2}
            },
            fn_object_assign() {
                let obj = {};
                Object.assign(obj, {name:'wangwuhui', age:'80'});
                console.log(obj);
                Object.assign(obj, {name:'wangmeili', sex:'male'});
                console.log(obj);
                console.log(Object.assign(3));  // {3}
                console.log(Object.assign({name:'wwh'}));

                // console.log(Object.assign(null));  //报错
                // console.log(Object.assign(undefined));  // 报错

                // 当参数不止一个时，null 和 undefined 不放第一个，即不为目标对象时，会跳过 null 和 undefined ，不报错
                Object.assign(1,undefined);  // Number {1}
                Object.assign({a: 1},null);  // {a: 1}

                // Object.assign(undefined,{a: 1});  // TypeError: Cannot convert undefined or null to object

                // assign 的属性拷贝是浅拷贝:
                let sourceObj = { a: { b: 1}};
                let targetObj = {c: 3};
                Object.assign(targetObj, sourceObj);
                console.log(targetObj);
                targetObj.a.b = 2;
                console.log(sourceObj.a.b);  // 2

                //数组的处理
                //会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0。
                console.log(Object.assign([2,3], [5]));  // [5,3]
            },
            fn_object_is() {
                console.log(Object.is("q","q"));      // true
                console.log(Object.is(1,1));          // true
                console.log(Object.is([1],[1]));      // false
                console.log(Object.is({q:1},{q:1}));  // false
                console.log(Object.is(+0, -0));       // false
                console.log(Object.is(NaN, NaN));     // true
                console.log('================');
                console.log('q' === 'q');       // true
                console.log(1 === 1);           // true
                console.log([1] === [1]);       // false
                console.log({q:1} === {q:1});   // false
                console.log(+0 === -0);         // true
                console.log(NaN === NaN);       // false
            },

            fn_array_of() {
                console.log(Array.of(1,2,3,4,5));
                console.log(Array.of(1,2,3,true,4));
                console.log(Array.of());
            },
            fn_array_from() {
                console.log(Array.from([1,2,3]));
                console.log(Array.from([1, ,3]));
                console.log(Array.from([1, 2, 3], (n) => n * 2));
            },
            fn_lei_array_from() {
                console.log(Array.from({0:'wang',1:'wu',2:'hui',length:3}));
                console.log(Array.from({0:'wang',1:'wu',2:'hui'}));  // []
                console.log(Array.from({w:'wang',w:'wu',h:'hui',length:3}));  // [undefined, undefined, undefined]
            },
            fn_map_array() {
                let map = new Map();
                map.set('name', 'wang');
                map.set('age', '20');
                console.log(map);
                console.log(...map);
                console.log([...map]);  // 面这两种都可以
                console.log(Array.from(map))
            },
            fn_set_array() {
                let set = new Set([1,2,3]);
                console.log(Array.from(set));  // 下面这两种都可以
                console.log([...set])
            },
            fn_str_array() {
                let str = 'wang';
                console.log(...str);
                console.log([...str]);  // 下面这两种都可以
                console.log(Array.from(str));
            },
            fn_find(){
                let arr1 = Array.of(1,2,3,4);
                console.log(arr1.find(item => item > 2));
                console.log([, 1].find(n => true)); // undefined
            },
            fn_findIndex() {
                let arr = Array.of(1,2,3,4,2);
                console.log(arr.findIndex(item => item === 2));
                console.log([, 1].findIndex(n => true));  // 0
            },
            fn_fill() {
                let arr = Array.of(1,2,3,4);
                console.log(arr.fill(6, 2));
                console.log(arr.fill(8, 2, 4))
            },
            fn_copyWithin() {
                let arr = Array.of(1,2,3,4);
                console.log(arr.copyWithin(0, 2, 4));  // [3,4,3,4]
                console.log([1, 2, 3, 4].copyWithin(-2, 0));  // [1, 2, 1, 2]
                console.log([1, 2, ,4].copyWithin(0, 2, 4));  // [, 4, , 4]
            },
            fn_bl() {
                let arr = Array.of(1,2,3,4);
                for(let [key, value] of arr.entries()){
                    console.log(key,value)
                }
                for(let key of arr.keys()){
                    console.log(key)
                }
                for(let value of arr.values()){
                    console.log(value)
                }
                //不使用for循环
                let entries = ['a', ,'c'].entries();
                console.log(entries.next().value); // [0, "a"]
                console.log(entries.next().value); // [1, undefined]
                console.log(entries.next().value); // [2, "c"]

                console.log('===', ...['a', 'b']);
                console.log('===', [...['a', 'b']]);
                console.log([...[,'a'].entries()]); // [[0, undefined], [1, "a"]]
            },
            fn_includes() {
                let arr = Array.of(1,2,3,4);
                console.log(arr.includes(2));           // true
                console.log(arr.includes(2,1));         // true
                console.log([1,2,NaN,3].includes(NaN)); // true
            },
            fn_flat() {
                let arr = [1, 2, [3, ,4], [5, 6, [7, 8]]];  // 自动跳过空位
                console.log(arr.flat());   // 默认转换1层
                console.log(arr.flat(2));  //指定转换的嵌套层数
                console.log(arr.flat(Infinity));  // 不管嵌套多少层
            },
            fn_flatMap() {
                console.log([1, 2, 3].flatMap(n => [n * 2]));       // [2, 4, 6]
                console.log(Array.from([1, 2, 3], n => n * 2));     // [2, 4, 6]
            },
            fn_copy_array() {
                let arr = [1,2,3];
                let arr1 = [...arr];
                console.log(arr1);  // [1,2,3]
                console.log(arr === arr1);   // false
                let arr2 = [1, ,2];
                let arr3 = [...arr2];
                console.log(arr3);
                console.log([...[1,2,3], ...[3,4,5,6]]);   //  [1, 2, 3, 3, 4, 5, 6]
                console.log([...new Set([1,2,3,3,3])]);    //  [1,2,3]

                let obj = {name:'wang'};
                let obj2 = {...obj};
                console.log(obj2);   // {name:'wang'}
                console.log(obj === obj2)   // false
            }
        }
    }
</script>

<style scoped>
    .el-button{margin: 10px 10px 10px 0}
</style>
