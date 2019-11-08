<template>
    <div>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">使用eventBus进行兄弟组件之间的通信：</div>
        <div>注：evevtBus进行组件之间的通信，两个组件需要再同一个页面中，即在同一个页面中引入两个组件。</div>
        <child1 class="child child1"></child1>
        <child2 class="child child2"></child2>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">使用Vuex进行组件之间的通信：</div>
        <div>Vuex进行组件之间的通信，两个组件不需要再同一个页面中</div>
        <child3 class="child child3"></child3>
        <child4 class="child child4"></child4>
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">.native修饰符：</div>
        <div>.native修饰符的作用就是把一个vue组件转化为一个普通的HTML标签，并且该修饰符对普通HTML标签是没有任何作用的。（即：给vue组件绑定事件时候，必须加上native ，不然不会生效）</div>
        <my-component @click.native="clickFun"></my-component>
    </div>
</template>

<script>
    import child1 from './child1.vue'
    import child2 from './child2.vue'
    import child3 from './child3.vue'
    import child4 from './child4.vue'
    import myComponent from './myComponent.vue'
    export default {
        name: "parent",
        components: { child1, child2, child3, child4, myComponent },  // 注册组件
        methods: {
            clickFun() {
                console.log('啦啦啦')
            }
        }
    }
</script>

<style scoped>
    .child{
        background-color: #fff;
        width: 100%;
        padding: 20px;
    }
</style>
