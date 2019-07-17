<template>
  <div style="padding: 20px; background-color: #fff">
    <span>
      Vue生命周期总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。<br>

      创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。<br>

      载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。<br>

      更新前/后：当data变化时，会触发beforeUpdate和updated方法。<br>

      销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在
    </span>
    <div id="div1" @click="changemsg">
      <p>{{ message }}</p>
    </div>

    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: '今天是周五啊！！！',
      num: 1,
    }
  },
  // beforeCreate() {
  //   console.group('beforeCreate 创建前状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
  //   console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
  //   console.log("%c%s", "color:red", "message: " + this.message)
  // },
  // created() {
  //   console.group('created 创建完毕状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
  //   console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  //   console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  // },
  // beforeMount() {
  //   console.group('beforeMount 挂载前状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  //   console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  // },
  // mounted() {
  //   console.group('mounted 挂载结束状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  //   console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
  // },
  // beforeUpdate() {
  //   console.group('beforeUpdate 更新前状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data);
  //   console.log("%c%s", "color:red", "message: " + this.message);
  // },
  // updated() {
  //   console.group('updated 更新完成状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data);
  //   console.log("%c%s", "color:red", "message: " + this.message);
  // },
  // beforeDestroy() {
  //   console.group('beforeDestroy 销毁前状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data);
  //   console.log("%c%s", "color:red", "message: " + this.message);
  // },
  // destroyed() {
  //   console.group('destroyed 销毁完成状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data);
  //   console.log("%c%s", "color:red", "message: " + this.message);
  // },
  beforeCreate() {   // 在实例创建之后，在数据初始化之前被调用
    console.log('beforeCreated-1')
  },
  created() { // 在数据初始化之后被调用，如果你的页面进来的时候就调用接口,那么created是第一选择
    console.log('created-2')
  },
  beforeMount() { // 在数据渲染之前被调用
    console.log('beforeMount-3')
  },
  mounted() { // 实例创建完成、数据初始化、渲染页面数据后，才被调用
    console.log('mounted-4')
  },
  beforeUpdate() { // 在数据改变时被调用
    console.log('beforeUpdate-5')
  },
  updated() { // 数据被更新之后
    console.log('updated-6')
  },

  //keep-alive生命周期有两个 (activated , deactivated)
  activated() { // keep-alive 组件激活时调用，也就是说在路由切换时被调用，注意要配合keep-alive使用才会被调用, <keep-alive>
    // 可以看下别人写的 https://www.cnblogs.com/sysuhanyf/p/7454530.html
  },
  deactivated(){// keep-alive 组件停用时调用，也可以理解成在路由切换的会自动停用组件，
    // 可以看下别人写的 https://www.cnblogs.com/sysuhanyf/p/7454530.html
  },
  beforeDestroy() { // 实例销毁前被调用
    console.log('beroreDestroy-9')
  },
  destroyed() { //实例销毁后被调用
    console.log('destroyed-10')
  },
  methods: {
    changemsg() {
      this.message = "明天是周六吗？";
      console.group('d点击事件时执行的方法===========》');
      console.log("%c%s", "color:red", "el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : " + this.$data);
      console.log("%c%s", "color:red", "message: " + this.message);
    },
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
