<template>
    <div style="padding: 20px; background-color: #fff">
        <div class="chapter_title">函数</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">默认参数：</div>
        <div>只有在未传递参数，或者参数为 undefined 时，才会使用默认参数，null 值被认为是有效的值传递。</div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">不定参数：</div>
        <div>不定参数用来表示不确定参数个数，形如，...变量名，由...加上一个具名参数标识符组成。具名参数只能放在参数组的最后，并且有且只有一个不定参数。</div>
        <el-button @click="fn_bd_param">不定参数</el-button>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">箭头函数：</div>
        <div>当箭头函数函数体有多行语句，用 {} 包裹起来，表示代码块，当只有一行语句，并且需要返回结果时，可以省略 {} , 结果会自动返回。</div>
        <div>当箭头函数要返回对象的时候，为了区分于代码块，要用 () 将对象包裹起来</div>

        <div class="chapter_title">迭代器</div>
        <div>可迭代的数据结构：Array、String、Map、Set、Dom元素(正在进行中)</div>

        <div class="chapter_title">class类</div>
        <div>在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。</div>
        <div>class 的本质是 function。</div>

        <div class="chapter_title">模块</div>
        <div>ES6 的模块化分为导出（export） @与导入（import）两个模块。</div>
        <div>模块中可以导入和导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类等。<br>
            每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域。<br>
            每一个模块只加载一次（是单例的）， 若再去加载同目录下同文件，直接从内存中读取。
        </div>
        <ul>
            <li>导出的函数声明与类声明必须要有名称（export default 命令另外考虑）。 </li>
            <li>不仅能导出声明还能导出引用（例如函数）。</li>
            <li>export 命令可以出现在模块的任何位置，但必需处于模块顶层。</li>
            <li>import 命令会提升到整个模块的头部，首先执行。</li>
        </ul>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">import 命令的特点</div>
        <ul>
            <li>只读属性：不允许在加载模块的脚本里面，改写接口的引用指向，即可以改写 import 变量类型为对象的属性值，不能改写 import 变量类型为基本类型的值。</li>
            <li>单例模式：多次重复执行同一句 import 语句，那么只会执行一次，而不会执行多次。import 同一模块，声明不同接口引用，会声明对应变量，但只执行一次 import 。</li>
            <li>静态执行特性：import 是静态执行，所以不能使用表达式和变量。</li>
        </ul>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">export default 命令</div>
        <ul>
            <li>在一个文件或模块中，export、import 可以有多个，export default 仅有一个。</li>
            <li>export default 中的 default 是对应的导出接口变量。</li>
            <li>通过 export 方式导出，在导入时要加{ }，export default 则不需要。</li>
            <li>export default 向外暴露的成员，可以使用任意变量来接收。</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "operator",
        data() {
            return {

            }
        },
        methods: {
            fun(...values) {
                console.log(values);
            },
            fn_bd_param() {
                this.fun(1,2,3,4,5)   // [1,2,3,4,5]
            },
        }
    }
</script>

<style scoped>
    .el-button{margin: 10px 10px 10px 0}
</style>
