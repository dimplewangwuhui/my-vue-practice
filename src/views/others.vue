<template>
    <div style="padding: 20px; background-color: #fff">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">router-link绑定click事件：</div>
        <router-link v-for="(item,i) in content" :key="i" :to="{ path: item.path }" tag='li' @click.native="showIndicator(i)">
            {{item.title}}
        </router-link>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">路由传递参数的方式：</div>
        <div>query要用path来引入，params要用name来引入。</div>
        <!-- 带查询参数，下面的结果为 /?plan=private -->
        <router-link :to="{ path: '/', query: { plan: 'private' }}">点击跳转</router-link>
        <router-link :to="{ name: '数据绑定', params: { id: 123 }}">点击跳转</router-link>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">watch数据监控：</div>
        <el-input v-model="inputContent" placeholder="guess my name" style="width: 400px"></el-input>
        <span>{{ correct }}</span>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">vue数组与对象的赋值问题：</div>
        <div>通过data中的数组变量的下标去修改数组的值,数据已经被修改了,但是不触发updated函数,视图不更新。</div>
        <div style="color: blue">Vue 不能检测以下变动的数组：</div>
        <div style="color: blue">当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue</div>
        <div style="color: blue">当你修改数组的长度时，例如：vm.items.length = newLength</div>
        <div style="color: blue">当第一种情况需求时，可以使用this.$set(this.arr,index,newVal)</div>
        <p @click="changeTestSet1">{{testSet[0]}}</p>
        <p @click="changeTestSet2">{{testSet[1]}}</p>
        <p>{{testSet[2]}}</p>

        <div>
            <el-button @click="changeObjKey">点击改变</el-button>
            <div style="color: blue">Vue 不能检测对象属性的添加或删除：</div>
            <div style="color: blue">可以使用this.$set(this.person,'age',12)</div>
            <div style="color: blue">当需要添加多个对象时，Object.assign({},this.person,{age:12,name:'wee'})</div>
            <div>
                <div> obj.a----- {{obj.a}}</div>
                <div> obj.b----- {{obj.b}}</div>
                <div> obj.c----- {{obj.c}}</div>
            </div>
        </div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">vue数组与对象的深浅拷贝问题：</div>
        <div style="color: blue">对象或数组的简单赋值，修改新值也会改变原值。这时我们需要获取原值的深拷贝对象。</div>
        <div style="color: blue">对于对象，可以通过newObj = JSON.parse(JSON.stringfy(obj))实现。</div>
        <div style="color: blue">对于数组，可以通过 newArr = […arr]或者newArr = arr.slice(0)来实现。</div>
        <el-button @click="updateArry">点击修改</el-button>
        <div>原数组的值:<span>{{testSet}}</span></div>
        <div>修改后的数组值:<span>{{testSet2}}</span></div>
        <el-button @click="updateObj">点击修改</el-button>
        <div>原对象的值:<span>{{obj.a}}</span></div>
        <div>修改后的对象值:<span>{{obj2.a}}</span></div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">v-for循环的key属性：</div>
        <div>key属性需要唯一，理想的 key 值是每项都有唯一 id，全局不需唯一，但在一个循环中需要唯一。</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">定时器销毁问题：</div>
        <div style="color: blue">1、通过beforeDestroy()在页面注销时清理定时器</div>
        <div style="color: blue">2、使用$once指令监听beforeDestroy这个钩子函数清理定时器</div>
        <el-button @click="FnTimer">1s后跳转</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">delete和Vue.delete的区别：</div>
        <div style="color: blue">delete只是将被删除的元素变成了 empty/undefined， 其他的元素的值还是不变。</div>
        <div style="color: blue">Vue.delete直接删除了元素， 改变了数组的值。</div>
        <div>数组:<span>{{array1}}</span></div>
        <el-button @click="FnDelete">delete</el-button>
        <el-button @click="FnVueDelete">VueDelete</el-button>
    </div>
</template>

<script>
    export default {
        name: "easyFalse",
        data() {
            return {
                content:[
                    {path:'/', title:'数据绑定'},
                    {path:'/tree', title:'树形控件'},
                    {path:'/css', title:'过渡动画'}
                ],
                inputContent:'',
                correct:'',
                testSet: [0, 1, 2],
                testSet2:[],
                obj: {
                    a: '我是obj里的a的值',
                },
                obj2:{
                    a: ''
                },
                timer:null,
                array1:[1,2,3,4,5,6,7,8,9]
            }
        },
        methods: {
            showIndicator(i) {
                this.$alert('index: '+ i);
            },
            changeTestSet1() {
                this.testSet[0] = 'aa';
                console.log('第一项变:', this.testSet)
            },
            changeTestSet2() {
                this.$set(this.testSet, 1, 'bb');
                console.log('第二项变', this.testSet)
            },
            changeObjKey() {
                // 如果要给obj增加一个新属性，如果该属性未在data中声明，页面也不会刷新。
                // 也就是vue文档中声明的“Vue 不能检测到对象属性的添加或删除”，同样需要使用vue.set方法进行赋值才好使
                this.obj.b = '我是obj里的b的值';
                // 只要以下其中的一个语句启用, obj.b就会在DOM中显示出来
                // ---------发现obj.a更新了 不会立即更新视图层 而是检查其他属性是否有更新 有更新的话 最终一起更新至视图层（改变DOM）
                // this.obj.a = '新的a值';
                // ---------发现obj.c更新了 不会立即更新视图层 而是检查其他属性是否有更新 有更新的话 最终一起更新至视图层（改变DOM）
                // this.$set(this.obj, 'c', '我是obj里的c的值');
            },
            updateArry() {
                // this.testSet2 = this.testSet;
                this.testSet2 = [...this.testSet];   // this.testSet2 = this.testSet.slice(0);
                this.testSet2.push('w');
            },
            updateObj() {
                // this.obj2 = this.obj;
                this.obj2 = JSON.parse(JSON.stringify(this.obj));
                this.obj2.a = '我变了'
            },
            FnTimer() {
                this.timer = setInterval(() => {
                    this.$router.push('/')
                },1000);
                // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
                // this.$once('hook:beforeDestroy', () => {
                //     clearInterval(this.timer);
                // })
            },
            FnDelete() {
                delete this.array1[0];
                console.log('array1:', this.array1)
            },
            FnVueDelete() {
                this.$delete(this.array1,0);
                console.log('array1:', this.array1)
            }
        },
        watch: {
            inputContent: function (newValue, oldValue) {
                console.log('newValue:', newValue);
                console.log('oldValue:', oldValue);
                if(newValue === oldValue){
                    return
                } else if(newValue === 'wangwuhui'){
                    this.correct = 'yes, u win!!!'
                } else this.correct = ''
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null;
            console.log('定时器:', this.timer)
        },
    }
</script>

<style scoped>
    a {text-decoration-line: none; margin: 0 20px 20px 0}
    a:hover {text-decoration-line: underline}
</style>
