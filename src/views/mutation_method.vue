<template>
  <div class="box">
    <span v-text="'数组:'+ list"></span><br>
    <el-input v-model="push_input" style="width: 200px; margin-top: 50px; margin-bottom: 50px"></el-input><br>
    <el-button type="primary" @click="fn_push">fn_push</el-button>
    <el-button type="success" @click="fn_pop">fn_pop</el-button>
    <el-button type="warning" @click="fn_shift">fn_shift</el-button>
    <el-button type="danger" @click="fn_unshift">fn_unshift</el-button>
    <el-button type="info" @click="fn_splice_add">fn_splice_add</el-button>
    <el-button type="info" @click="fn_splice_sub">fn_splice_sub</el-button>
    <el-button type="primary" @click="fn_sort">fn_sort</el-button>
    <el-button type="success" @click="fn_reverse">fn_reverse</el-button>
    <el-button type="warning" @click="fn_filter">fn_filter</el-button>
    <el-button type="danger" @click="fn_concat">fn_concat</el-button>
    <el-button type="info" @click="fn_slice">fn_slice</el-button>
    <hr>

    <li v-for="n in evenNumbers">{{ n }}</li>

    {{ value }}
    <el-button></el-button>
  </div>
</template>

<script>
  export default {
    name: "mutation_method",
    data() {
      return {
        push_input:'',
        list: [0,1,2,3,4,5,6,7,8,9],
        list2: ['a','b','c'],
        list3: ['D','E','F'],
        numbers: [ 1, 2, 3, 4, 5 ]
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
      }
    },

    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    }
  }
</script>

<style scoped>

</style>
