<template>
    <div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">数组 Array</div>
        <div>
            <p>01、_.chunk(array, [size=1])：将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。</p>
            <p>02、_.compact(array)：创建一个新数组，包含原数组中所有的非假值元素。</p>
            <p>03、_.concat(array, [values])：创建一个新数组，将array与任何数组 或 值连接在一起。</p>
            <p>04、_.difference(array, [values])：创建一个具有唯一array值的数组，每个值不包含在其给定的数组中。</p>
            <p>05、_.differenceBy(array, [values], [iteratee=_.identity])</p>
            <p>06、_.differenceWith(array, [values], [comparator])</p>
            <p>07、_.drop(array, [n=1])：创建一个切片数组，去除array前面的n个元素。（n默认值为1。）</p>
            <p>08、_.dropRight(array, [n=1])：创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）</p>
            <p>09、_.dropWhile(array, [predicate=_.identity])：创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。</p>
            <p>10、_.dropRightWhile(array, [predicate=_.identity])：创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。</p>

            <p><a href="https://www.lodashjs.com/" target="_blank">更多</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lodash",
        data() {
            var obj = {
                name: 'wangwuhui',
                func1: function () {
                    console.log('111', this.name, this)  // wangwuhui  obj-object
                },
                func2: () => {
                    console.log('222', this.name, this)  // undefined  Vue实例
                }
            };
            var f = () => {
                console.log('333', this)
            };
            var x = () => {}
            return {
                age: 8,
                obj: obj,
                f: f,
                x: x
            }
        },
        methods: {
            Person() {
                setTimeout(function () {
                    console.log('====', this)  // Window
                }, 1000)
                setTimeout(() => {
                    console.log('----', this)  // Vue实例
                }, 1000)
            }
        },
        mounted() {
            // 数组
            // console.log('111', this._.chunk(['a', 'b', 'c', 'd'], 2));
            // console.log('222', this._.compact([1, false, null, 2, 0, '', undefined, 3, NaN, 4]));
            // console.log('333', this._.concat([1, 2, 3], 4, 5, [6, 7, 8], [[9]]));
            // console.log('444', this._.difference([1, 2, 3, 4, 5], [2, 4, 6]));
            // console.log('777', this._.drop([1, 2, 3, 4, 5, 6, 7], 3));

            this.Person();
            this.obj.func1();
            this.obj.func2();
            this.f()
            console.log('xxx', this.x)
        }
    }
</script>

<style scoped>

</style>
