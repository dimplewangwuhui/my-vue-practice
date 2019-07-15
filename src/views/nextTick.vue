<template>
  <div style="padding: 20px; background-color: #fff">
    <table border="1">
      <tr>
        <th>nextTick的理解</th>
        <td>与DOM相关操作写在该函数回调中，确保DOM已渲染</td>
      </tr>
      <tr>
        <th>nextTick的由来</th>
        <td>由于VUE的数据驱动视图更新，是异步的，即修改数据的当下，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。</td>
      </tr>
      <tr>
        <th>nextTick的触发时机</th>
        <td>在同一事件循环中的数据变化后，DOM完成更新，立即执行nextTick(callback)内的回调</td>
      </tr>
      <tr>
        <th>nextTick的应用场景</th>
        <td>需要在视图更新之后，基于新的视图进行操作。 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中。原因是什么呢，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。</td>
      </tr>
    </table>
    <div class="app">
      <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">无 $nextTick:{{msg1}}</div>
      <div v-if="msg2">有 $nextTick: {{msg2}}</div>
      <div v-if="msg3">无 $nextTick:{{msg3}}</div>
      <button @click="changeMsg">
        Change the Message
      </button>
    </div>
    <div>
      <ul>
        <li class="item" v-for="item in testItems">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "nextTick",
    data() {
      return {
        msg: 'Hello Vue.js',
        msg1: '',
        msg2: '',
        msg3: '',
        testItems: ['a', 'b', 'c']
      }
    },
    methods: {
      changeMsg() {
        this.msg = "Hello world";
        //vue考虑到性能虽然数据层更新了，DOM不会立即更新
        this.msg1 = this.$refs.msgDiv.innerText;
        //$nextTick中的函数会在DOM更新完后立即执行
        this.$nextTick(() => {
          this.msg2 = this.$refs.msgDiv.innerText
        });
        this.msg3 = this.$refs.msgDiv.innerText
      },
    },
    mounted() {
      this.testItems.push('我是新增的d');
      console.log('this.testItems.length', this.testItems.length);
      console.log(this.$el.querySelectorAll('.item'));
      console.log('mounted里的 this.$el.querySelectorAll(\'.item\').length', this.$el.querySelectorAll('.item').length);  // 3
      this.$nextTick(() => {
        console.log('mounted里的$nextTick的 this.$el.querySelectorAll(\'.item\').length', this.$el.querySelectorAll('.item').length);  // 4
      })
    },
    updated() {
      console.log('updated 里的this.$el.querySelectorAll(\'.item\').length', this.$el.querySelectorAll('.item').length)  // 4
    },
  }
</script>

<style scoped>
  .app{margin-top: 30px}
</style>
