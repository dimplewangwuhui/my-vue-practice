<template>
  <div style="padding: 20px;">
    <div class="box">
      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">数组方法：</div>
      <span v-text="'数组:'+ list"></span><br>
      <el-input v-model="push_input" style="width: 200px; margin: 15px 0"></el-input><br>
      <el-button  @click="fn_push">fn_push</el-button>
      <el-button  @click="fn_pop">fn_pop</el-button>
      <el-button  @click="fn_shift">fn_shift</el-button>
      <el-button  @click="fn_unshift">fn_unshift</el-button>
      <el-button  @click="fn_splice_add">fn_splice_add</el-button>
      <el-button  @click="fn_splice_sub">fn_splice_sub</el-button><p>
      <el-button  @click="fn_sort">fn_sort</el-button>
      <el-button  @click="fn_reverse">fn_reverse</el-button>
      <el-button  @click="fn_filter">fn_filter</el-button>
      <el-button  @click="fn_concat">fn_concat</el-button>
      <el-button  @click="fn_slice">fn_slice</el-button>


      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">forEach：</div>
      <table border="1">
        <tr>
          <th>返回值的情况:</th>
          <td>无返回值(undefined)</td>
        </tr>
        <tr>
          <th>原数组是否改变:</th>
          <td>如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组会发生变化；</td>
        </tr>
        <tr>
          <th>遍历中断条件:</th>
          <td>无法中断, 除非 throw Error，但是这样做没有意义，因为会导致整个程序全部终止；</td>
        </tr>
      </table>
      <div style="margin-top: 10px">
        <span>arr2的值：{{arr2}}</span><span><button @click="forEach2" style="margin-left: 20px">值类型修改</button></span><span style="margin-left: 20px">返回值：{{res_arr2}}</span>
      </div>
      <div style="margin-top: 10px">
        <span>arr1的值：{{arr1}}</span><span><button @click="forEach1" style="margin-left: 20px">引用类型修改</button></span><span style="margin-left: 20px">返回值：{{res_arr1}}</span>
      </div>
      <div style="margin-top: 10px">
        <span>arr2的值：{{arr2}}</span><span><button @click="forEach3" style="margin-left: 20px">通过下标修改</button></span><span style="margin-left: 20px">返回值：{{res_arr2}}</span>
      </div>

      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">map：</div>
      <table border="1">
        <tr>
          <th>返回值的情况:</th>
          <td>如果不return 则无返回值（undefined），否则有返回值</td>
        </tr>
        <tr>
          <th>原数组是否改变:</th>
          <td>如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组会发生变化；</td>
        </tr>
        <tr>
          <th>遍历中断条件:</th>
          <td>无法中断, 除非 throw Error，但是这样做没有意义，因为会导致整个程序全部终止；</td>
        </tr>
      </table>
      <div style="margin-top: 10px">
        <span>arr2的值：{{arr2}}</span><span><button @click="map2" style="margin-left: 20px">值类型修改</button></span><span style="margin-left: 20px">返回值：{{res_arr2}}</span>
      </div>
      <div style="margin-top: 10px">
        <span>arr1的值：{{arr1}}</span><span><button @click="map1" style="margin-left: 20px">引用类型修改</button></span><span style="margin-left: 20px">返回值：{{res_arr1}}</span>
      </div>
      <div style="margin-top: 10px">
        <span>arr2的值：{{arr2}}</span><span><button @click="map3" style="margin-left: 20px">通过下标修改</button></span><span style="margin-left: 20px">返回值：{{res_arr2}}</span>
      </div>

      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">every：</div>
      <table border="1">
        <tr>
          <th>返回值的情况:</th>
          <td>只要回调函数返回的值当中有一个是false，则返回值是false，否则返回值为true;</td>
        </tr>
        <tr>
          <th>原数组是否改变:</th>
          <td>如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组可能会发生变化；注意返回值的情况，如果返回值为false，则会中断整个循环，导致后续的数组项不会继续执行；</td>
        </tr>
        <tr>
          <th>遍历中断条件:</th>
          <td>只要回调函数返回的值为false，则会立即中断；</td>
        </tr>
      </table>
      <div style="margin-top: 10px">
        <span>arr1的值：{{arr1}}</span><span><button @click="every1" style="margin-left: 20px">引用类型修改</button></span><span style="margin-left: 20px">返回值：{{res_arr1}}</span>
        <span v-if="res_arr1 === false" style="color: #FC796B">（这里没有return，即没有返回值，因此为false，所以遍历第一个后就终止遍历了，所以只改变了第一个。）</span>
      </div>
      <div style="margin-top: 10px">
        <span>arr2的值：{{arr2}}</span><span><button @click="every2" style="margin-left: 20px">通过下标修改</button></span><span style="margin-left: 20px">返回值：{{res_arr2}}</span>
      </div>

      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">some：</div>
      <table border="1">
        <tr>
          <th>返回值的情况:</th>
          <td>只要回调函数返回的值当中有一个是true，则返回值是true，否则返回值为false；</td>
        </tr>
        <tr>
          <th>原数组是否改变:</th>
          <td>如果是通过值类型的方式修改，则不会改变，如果通过下标的方式或者通过引用类型的方式修改，则原数组可能会发生变化；注意返回值的情况，如果返回值为true，则会中断整个循环，导致后续的数组项不会继续执行；</td>
        </tr>
        <tr>
          <th>遍历中断条件:</th>
          <td>只要回调函数返回的值为true，则会立即中断；</td>
        </tr>
      </table>
      <div style="margin-top: 10px">
        <span>arr1的值：{{arr1}}</span><span><button @click="some1" style="margin-left: 20px">引用类型修改</button></span><span style="margin-left: 20px">返回值：{{res_arr1}}</span>
        <span v-if="res_arr1 === false" style="color: #FC796B">（这里没有return，即没有返回值，因此为false，所以都改变了。）</span>
    </div>
      <div style="margin-top: 10px">
        <span>arr2的值：{{arr2}}</span><span><button @click="some2" style="margin-left: 20px">通过下标修改</button></span><span style="margin-left: 20px">返回值：{{res_arr2}}</span>
      </div>

      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">filter：</div>
      <div>原数组：{{numbers}}</div>
      <button @click="FnFilter">点击过滤%2=0</button>
      <li v-for="n in filterNumbers" :key="n">{{ n }}</li>
      <div>原数组不变：{{numbers}}</div>

      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">reduce：</div>
      <div>原数组：{{numbers}}</div>
      <button @click="FnReduce">点击reduce</button>
      <div>reduce结果：{{res_map}}</div>
      <div>reduce 返回的是累计器累计完后的单个值，原数组不变：{{numbers}}</div>

      <div style="color: #FC796B; font-size: 20px; margin: 10px 0">find：</div>
      <div>find只返回第一个符合条件的项</div>
      <button @click="FnFind">点击查找</button>
      <div>find结果：{{res_find}}</div>


      <el-checkbox v-model="checked" v-if="show">备选项</el-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mutation_method",
    data() {
      return {
        checked:false,
        show:false,
        push_input:'',
        list: [0,1,2,3,4,5,6,7,8,9],
        list2: ['a','b','c'],
        list3: ['D','E','F'],
        numbers: [ 1, 2, 3, 4, 5 ],
        filterNumbers:[],
        arr1: [
          {name:'鸣人',age:16},
          {name:'佐助',age:17}
        ],
        res_arr1:'',
        arr2: [1,2,3],
        res_arr2:'',
        res_map:'',
        res_find:''
      }
    },
    methods: {
      fn_push() {
        this.list.push(this.push_input)  // 向后追加
      },
      fn_pop() {
        this.list.pop();  // 把数组的最后一个元素从其中删除，并返回最后个元素的值
      },
      fn_shift() {
        this.list.shift();  // 把数组的第一个元素从其中删除，并返回第一个元素的值
      },
      fn_unshift() {
        this.list.unshift(this.push_input)  //在最前面追加一个或多个元素
      },
      fn_splice_add() {
        // this.list.splice(2,0,'a','b','c');  // 在数组第二个元素位置后添加新元素
        this.list.splice(2,2,'a','b','c');  // 在数组第二个元素后移除2个元素，并添加新元素
      },
      fn_splice_sub() {
        this.list.splice(2,2)  // 用于删除数组中的元素。
      },
      fn_sort() {
        this.list.sort()  // 升序
      },
      fn_reverse() {
        this.list.reverse()  // 倒序
      },

      check_list(val) {
        return val >=5
      },
      fn_filter() {
        this.list = this.list.filter(this.check_list)  // 过滤 array.filter(function)
      },

      fn_concat() {
        this.list = this.list.concat(this.list2, this.list3)  // 用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
      },
      fn_slice() {
        this.list = this.list.slice(2,5)  // 返回一个新的数组，包含从 start 到 end （不包括该元素，且可省）的 元素。
      },

      forEach1() {
        this.res_arr1 = this.arr1.forEach(item => {
          item.age = item.age + 1
        });
        console.log(this.res_arr1)
      },
      forEach2() {
        this.res_arr2 = this.arr2.forEach(item => {
          item = item + 1
        });
        console.log(this.res_arr2)
      },
      forEach3() {
        this.res_arr2 = this.arr2.forEach((item,index) => {
          // this.arr2[index] = item + 1;  不要通过这种形式进行修改，要通过set方法修改下标对数组进行修改。
          this.$set(this.arr2,index,item+1);
        });
      },

      map1() {
        this.res_arr1 = this.arr1.map(item => {
          item.age = item.age + 1;
        });
        console.log(this.res_arr1)
      },
      map2() {
        this.res_arr2 = this.arr2.map(item => {
          item = item + 1
        });
        console.log(this.res_arr2)
      },
      map3() {
        this.res_arr2 = this.arr2.map((item,index) => {
          // this.arr2[index] = item + 1;
          this.$set(this.arr2, index, item+1);
          return item
        });
        console.log(this.res_arr2)
      },

      every1() {
        this.res_arr1 = this.arr1.every(item => {
          item.age = item.age + 1;
          // return item
        });
        console.log(this.res_arr1)
      },
      every2() {
        this.res_arr2 = this.arr2.every((item,index) => {
          // this.arr2[index] = item + 1;
          this.$set(this.arr2, index, item+1);
          // return item
        });
        console.log('===', this.arr2);
        console.log(this.res_arr2)
      },

      some1() {
        this.res_arr1 = this.arr1.some(item => {
          item.age = item.age + 1;
          // return item
        });
        console.log(this.res_arr1)
      },
      some2() {
        this.res_arr2 = this.arr2.some((item,index) => {
          // this.arr2[index] = item + 1;
          this.$set(this.arr2, index, item+1);
        });
      },

      FnFilter() {
        this.filterNumbers = this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      FnReduce() {
        this.res_map = this.numbers.reduce(function (item1, item2) {
          return item1 + item2
        }, 100)
      },
      FnFind() {
        this.res_find = this.numbers.find(function (number) {
          return number % 2 === 0
        })
      }
    },

    computed: {
      // evenNumbers() {
      //   return this.numbers.filter(function (number) {
      //     return number % 2 === 0
      //   })
      // }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
