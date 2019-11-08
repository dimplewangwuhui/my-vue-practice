<template>
    <div style="padding: 20px; background-color: #fff">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">router-link绑定click事件：</div>
        <router-link v-for="(item,i) in content" :key="i" :to="{ path: item.path }" tag='li' @click.native="showIndicator(i)">
            {{item.title}}
        </router-link>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">路由传递参数的方式 ：</div>
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
            <el-button type="primary" @click="changeObjKey">点击改变</el-button>
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
        <el-button type="primary" @click="updateArry">点击修改</el-button>
        <div>原数组的值:<span>{{testSet}}</span></div>
        <div>修改后的数组值:<span>{{testSet2}}</span></div>
        <el-button type="primary" @click="updateObj">点击修改</el-button>
        <div>原对象的值:<span>{{obj.a}}</span></div>
        <div>修改后的对象值:<span>{{obj2.a}}</span></div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">v-for循环的key属性：</div>
        <div>key属性需要唯一，理想的 key 值是每项都有唯一 id，全局不需唯一，但在一个循环中需要唯一。</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">定时器销毁问题：</div>
        <div>1、通过beforeDestroy()在页面注销时清理定时器</div>
        <div>2、使用$once指令监听beforeDestroy这个钩子函数清理定时器</div>
        <el-button type="primary" @click="FnTimer">1s后跳转</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">delete和Vue.delete的区别：</div>
        <div>delete只是将被删除的元素变成了 empty/undefined， 其他的元素的值还是不变。</div>
        <div>Vue.delete直接删除了元素， 改变了数组的值。</div>
        <div>数组:<span>{{array1}}</span></div>
        <el-button type="primary" @click="FnDelete">delete</el-button>
        <el-button type="primary" @click="FnVueDelete">VueDelete</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">img加载图片失败时，使用默认图片：</div>
        <div>1、img标签自带onError属性，当图片加载失败时，触发error事件：</div>
        <!--<img src="../assets/img/logo.png" onerror="this.src='http://ww.jpg'">-->
        <div>2、jQuery的error事件</div>
        <!--$('img').error(function(){-->
            <!--$(this).attr('src',"httP://ww.jpg")-->
        <!--})-->
        <div>3、jQuery的one绑定（使用前两种，如果默认图片也加载失败，会形成死循环，最好使用one绑定，只执行一次）</div>
        <!--$('img').one('error', function(){-->
            <!--$(this).attr('src',"httP://ww.jpg")-->
        <!--})-->

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">v-cloak属性：</div>
        <div>vue的模板建议都加上v-cloak属性，网页加载的时候，先加载html，再加载js，网络不太好的情况下，页面会看到没有渲染的模板，不太美观。</div>
        <div>在模板元素上加`v-cloak`属性，同时加一个样式， [v-cloak]{ display:none; }</div>
        <div>没有渲染的模板直接不显示给用户，当模板渲染后，vue会把v-cloak属性删除</div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">时间对象：</div>
        <div style="font-size: 20px; margin: 10px 0">{{timeDifference}}</div>
        <div>getTime——获取当前时间(从1970.1.1开始的毫秒数)<span style="margin-left: 20px; color: #FC796B">{{getTime}}</span></div>
        <div>getDate——获取当前日(1-31)<span style="margin-left: 20px; color: #FC796B">{{getDate}}</span></div>
        <div>getFullYear——获取完整的年份<span style="margin-left: 20px; color: #FC796B">{{getFullYear}}</span></div>
        <div>getDay——获取当前星期X(0-6,0代表星期天)<span style="margin-left: 20px; color: #FC796B">{{getDay}}</span></div>
        <div>getMonth——获取当前月份(0-11,0代表1月)<span style="margin-left: 20px; color: #FC796B">{{getMonth}}</span></div>
        <div>getHours——获取当前小时数(0-23)<span style="margin-left: 20px; color: #FC796B">{{getHours}}</span></div>
        <div>getMinutes——获取当前分钟数(0-59)<span style="margin-left: 20px; color: #FC796B">{{getMinutes}}</span></div>
        <div>getSeconds——获取当前秒数(0-59)<span style="margin-left: 20px; color: #FC796B">{{getSeconds}}</span></div>
        <div>toLocaleDateString()——获取当前日期<span style="margin-left: 20px; color: #FC796B">{{toLocaleDateString}}</span></div>
        <div>toLocaleTimeString()——获取当前时间<span style="margin-left: 20px; color: #FC796B">{{toLocaleTimeString}}</span></div>
        <div>toLocaleString()——获取当前日期与时间<span style="margin-left: 20px; color: #FC796B">{{toLocaleString}}</span></div>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">setTimeout 0 有什么作用：</div>
        <div>由于js是单线程执行的，无法同时执行多段代码，当某段代码在执行时，所有后续任务必须等待从而排成了一个队列，但上段代码执行完后，在从队列中取出下一个任务；
            所以一次鼠标点击，或是计时器到达时间点，或是 Ajax 请求完成触发了回调函数，这些事件处理程序或回调函数都不会立即运行，而是立即排队，一旦线程有空闲就执行。
            当使用setTimeout时，表示将该段程序会在适当的时间查到任务队列中，如果setTimeout 为0则表示立即插入，但它不会立即执行，而是等待其它代码执行完后再执行；</div>
        <el-button type="primary" @click="setTime0">点击查看控制台</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Excel导出功能：</div>
        <el-button type="primary" @click="FnToExcel" style="float: right; margin-bottom: 10px">导出excel</el-button>
        <el-table id="el-table" :data="tableData" border>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="年龄" prop="age"></el-table-column>
            <el-table-column label="性别" prop="sex"></el-table-column>
        </el-table>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">Set数据结构：</div>
        <div>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</div>
        <el-table :data="setTableData" border>
            <el-table-column label="Set 实例的属性和方法">
                <el-table-column label="方法" prop="method1"></el-table-column>
                <el-table-column label="说明" prop="note1"></el-table-column>
            </el-table-column>
            <el-table-column label="Set 遍历操作">
                <el-table-column label="操作" prop="method2"></el-table-column>
                <el-table-column label="说明" prop="note2"></el-table-column>
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="FnMap">点击查看控制台</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">main.js中Vue.use()和Vue.prototype.$xx = xx的区别：</div>
        <div>1、不是为了vue写的插件(插件内要处理)不支持Vue.use()加载方式</div>
        <div>2、非vue官方库不支持new Vue()方式</div>
        <div>3、每一个vue组件都是Vue的实例，所以组件内this可以拿到Vue.prototype上添加的属性和方法</div>
        <div>4、Vue的插件是一个对象, 就像Element;插件对象必须有install字段;install字段是一个函数;初始化插件对象需要通过Vue.use()</div>

    </div>
</template>

<script>
    import FileSaver from 'file-saver';
    import XLSX from 'xlsx';
    export default {
        name: "others",
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
                array1:[1,2,3,4,5,6,7,8,9],
                toggle:'',
                a:'a',
                b:'b',
                timeDifference:'',
                getTime:'',
                getDate:'',
                getFullYear:'',
                getDay:'',
                getMonth:'',
                getHours:'',
                getMinutes:'',
                getSeconds:'',
                toLocaleDateString:'',
                toLocaleTimeString:'',
                toLocaleString:'',

                tableData: [
                    {name:'王武辉', age:'10', sex:'男'},
                    {name:'王美丽', age:'20', sex:'女'},
                    {name:'王翠花', age:'30', sex:'女'}
                ],
                setTableData: [
                    {method1:'Set.prototype.size',note1:'返回Set实例的成员总数',method2:'Set.prototype.keys()',note2:'返回键名的遍历器'},
                    {method1:'Set.prototype.add(value)',note1:'添加某个值，返回 Set 结构本身',method2:'Set.prototype.values()',note2:'返回键值的遍历器'},
                    {method1:'Set.prototype.delete(value)',note1:'删除某个值，返回一个布尔值，表示删除是否成功',method2:'Set.prototype.entries()',note2:'返回键值对的遍历器'},
                    {method1:'Set.prototype.has(value)',note1:'返回一个布尔值，表示该值是否为Set的成员',method2:'Set.prototype.forEach()',note2:'使用回调函数遍历每个成员'},
                    {method1:'Set.prototype.clear()',note1:'清除所有成员，没有返回值',method2:'',note2:''},
                ],
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
                this.$once('hook:beforeDestroy', () => {
                    clearInterval(this.timer);
                })
            },
            FnDelete() {
                delete this.array1[0];
                console.log('array1:', this.array1)
            },
            FnVueDelete() {
                this.$delete(this.array1,0);
                console.log('array1:', this.array1)
            },

            getIntervalDate(starDateString, endDataString) {
                const allDifference = Date.parse(endDataString) - Date.parse(starDateString);
                const dayConvert = 1000 * 60 * 60 * 24;
                const hoursConvert = 1000 * 60 * 60;
                const minutersConvert = 1000 * 60;
                const secondsConvert = 1000;
                const dayDifference = parseInt(allDifference / dayConvert);
                const hoursDifference = parseInt((allDifference % dayConvert) / hoursConvert);
                const minutesDifference = parseInt(allDifference % dayConvert % hoursConvert / minutersConvert);
                const secondsDifference = parseInt(allDifference % dayConvert % hoursConvert % minutersConvert / secondsConvert);
                const str = `从 ${starDateString} 距离 ${endDataString} 还有 ${dayDifference} 天${hoursDifference}小时${minutesDifference}分钟${secondsDifference}秒`;
                this.timeDifference = str;
                return str;
            },

            setTime0() {
                console.log('1');
                console.log('2');
                setTimeout(function () {
                    console.log('3')
                },0);
                console.log('4');
                console.log('5');
                var a = 100;
                // setInterval(function () {
                //     console.log(a++)
                // }, 1000)

                // for(var i=0;i<5;i++){
                //     setTimeout(function(){
                //         console.log('delayer:' + i );
                //     }, 0);
                //     console.log(i);
                // },
            },

            checkDate() {
                var date = new Date();
                var newMonth = Number(date.getMonth())+1;
                if(Number(newMonth)<10){
                    newMonth = '0'+newMonth
                }
                var newDate = date.getFullYear()+'-'+newMonth+'-'+date.getDate();
                var resultTime;
                if(date.toLocaleTimeString()[0] === '下'){
                    let newTime = date.toLocaleTimeString().replace('下午','');
                    let newListTime = newTime.split(':');
                    newListTime[0] = Number(newListTime[0])+12;
                    resultTime = newListTime.join(':');
                }else {
                    resultTime = date.toLocaleTimeString().replace('上午','');
                }
                let result = newDate +' '+resultTime;
                this.getIntervalDate(result, '2019-10-01 00:00:00');
            },
            // 导出excel
            FnToExcel() {
                let time = new Date();
                let wb = XLSX.utils.table_to_book(document.querySelector('#el-table'));
                let wbout = XLSX.write(wb, {
                    bookType: 'xlsx',
                    bookSST: true,
                    type: 'array'
                });
                try {
                    FileSaver.saveAs(
                        new Blob([wbout], { type: 'application/octet-stream' }),
                        `名字${time.getTime()}.xlsx` // 文件名
                    );
                } catch (e) {
                    if (typeof console !== 'undefined') {
                        this.$message.error('导出失败');
                        console.log(e, wbout);
                    }
                }
                return wbout;
            },
            FnMap() {
                const s = new Set([1,1,2,2,2,2,3,4,4,5]);
                console.log('set1:', s);     // {1, 2, 3, 4, 5}
                console.log(typeof s);      // object
                const set = [...s];
                console.log('set2:', set);   // [1,2,3,4,5]

                s.add(6).add(6).add(7);
                console.log('set3:', s);
                console.log('set4:', s.size);
                console.log('set5:', s.has(5));
                s.delete(7);
                console.log('set6:', s);

                for(let i of s.keys()){
                    console.log('key:', i)
                }
                for(let i of s.values()){
                    console.log('value:', i)
                }
                for(let i of s.entries()){
                    console.log('entries:', i)
                }
            },
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
        },

        mounted() {
            var now = new Date();
            this.getTime = now.getTime();
            this.getDate = now.getDate();
            this.getFullYear = now.getFullYear();
            this.getDay = now.getDay();
            this.getMonth = now.getMonth();
            this.getHours = now.getHours();
            this.getMinutes = now.getMinutes();
            this.getSeconds = now.getSeconds();
            this.toLocaleDateString = now.toLocaleDateString();
            this.toLocaleTimeString = now.toLocaleTimeString();
            this.toLocaleString = now.toLocaleString();
            console.log(Date());
            console.log(Date.now());
            console.log(Date.parse('2019-07-12 15:49:23'));
            console.log(Date.UTC(2019,7,12,15,49,23));

            setInterval(this.checkDate, 1000);
        }
    }
</script>

<style scoped>
    a {text-decoration-line: none; margin: 0 20px 20px 0}
    a:hover {text-decoration-line: underline}
</style>
