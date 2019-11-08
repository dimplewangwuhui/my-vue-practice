<template>
    <div style="padding: 20px; background-color: #fff">
        <div id="datatype" style="color: #FC796B; font-size: 20px; margin: 10px 0">js数据类型：</div>
        <div>JavaScript 5 种数据类型：string、number、boolean、object、function</div>
        <div>JavaScript 2 种不包含任何值的数据类型：null、undefined</div>
        <div>JavaScript 3 种对象类型：Object、Date、Array</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">typeof 操作符：</div>
        <el-table :data="typeTableData" border>
            <el-table-column label="数据" prop="data"></el-table-column>
            <el-table-column label="返回" prop="result"></el-table-column>
        </el-table>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">一元运算符+：</div>
        <div>一元运算符+可用于将变量转换为数字</div>
        <el-button type="primary" @click="add">点击查看控制台数据类型</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">javascript:void(0)：</div>
        <div>这是一个死链接</div>
        <a href="javascript:void(0)">点击什么也不发生</a><br>
        <a href="#datatype">这是一个锚点,点击跳到js数据类型处</a>
        <div>void()仅仅是代表不返回任何值，但是括号内的表达式还是要运行</div>
        <a href="javascript:void(alert('哈哈哈哈'))">点击试试看</a><br>

        <el-button @click="splice">kkk</el-button>
    </div>
</template>

<script>
    export default {
        name: "js_others",
        data() {
            return {
                typeTableData:[
                    {data:'typeof "John"', result:'string'},
                    {data:'typeof 3.14', result:'number'},
                    {data:'typeof NaN', result:'number'},
                    {data:'typeof false', result:'boolean'},
                    {data:'typeof [1,2,3,4] ', result:'object'},
                    {data:'typeof {name:\'John\', age:34}', result:'object'},
                    {data:'typeof new Date()', result:'object'},
                    {data:'typeof function () {}', result:'function'},
                    {data:'typeof myCar', result:'undefined (如果 myCar 没有声明)'},
                    {data:'typeof null', result:'object'},
                    {data:'typeof undefined', result:'undefined'},
                ],
                end_task_ids:[{id:1,name:'a'},{id:2,name:'b'},{id:3,name:'c'}]
            }
        },
        methods: {
            add() {
                var a = '5';
                var b = + a;
                console.log('a的数据类型:', typeof a);
                console.log('b的数据类型:', typeof b);
                var c = 'wang wu hui';
                var d = + a;
                console.log('c的数据类型:', typeof c);
                console.log('d的数据类型:', typeof d);
                console.log(d)  // 5
            },
            splice() {
                for(var i=0; i<this.end_task_ids.length; i++){
                    for(var j=i+1; j<this.end_task_ids.length; j++){
                        if(this.end_task_ids[i].id === this.end_task_ids[j].id){
                            this.end_task_ids.splice(i,1);
                            i--;
                        }
                    }
                }
                console.log('...', this.end_task_ids)
            }
        },
        mounted() {
            console.log(typeof NaN)  // number
            console.log(typeof null)  // object
            console.log(typeof undefined)  // undefined
        }
    }
</script>

<style scoped>

</style>
