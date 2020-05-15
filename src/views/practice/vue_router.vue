<template>
    <div style="padding: 20px;">
        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">router-link：</div>
        <router-link :to="{path: '/'}">数据绑定1</router-link>
        <router-link :to="{name: '数据绑定' }">数据绑定2</router-link>
        <!-- 命名的路由 -->
        <router-link :to="{ name: '数据绑定', params: { id: 123 }}">数据绑定3</router-link>
        <!-- 带查询参数，下面的结果为 /register?plan=private -->
        <router-link :to="{ path: '/', query: { plan: 'private' }}">数据绑定4</router-link>
        <!--设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。-->
        <router-link :to="{path: '/'}" replace>数据绑定5</router-link>
        <!--设置 append 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b-->
        <router-link :to="{path: '/mutation_method'}" append>数组方法1</router-link>
        <!--想要链接使用 "exact 匹配模式"，则使用 exact 属性，，这个链接只会在地址为 /mutation_method 的时候被激活-->
        <router-link to="/mutation_method" exact>数组方法2</router-link>
        <!--有时候想要 <router-link> 渲染成某种标签，例如 <li>。 于是我们使用 tag 类指定何种标签，同样它还是会监听点击，触发导航-->
        <router-link to="/" tag="li">数据绑定6</router-link>
        <router-link to="/mutation_method" tag="li">数组方法3</router-link>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">router.push()：</div>
        <el-button @click="Fnjump1">点击跳转1</el-button>
        <el-button @click="Fnjump2">点击跳转2</el-button>
        <el-button @click="Fnjump3">点击跳转3</el-button>
        <el-button @click="Fnjump4">点击跳转4</el-button>
        <el-button @click="Fnjump5">点击跳转5</el-button>
        <el-button @click="Fnjump6">点击跳转6</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">router.replace()：</div>
        <el-button @click="Fnjump7">点击跳转7</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">router.go()：</div>
        <el-button @click="go1">go1</el-button>
        <el-button @click="go_1">go-1</el-button>
        <el-button @click="go3">go3</el-button>
        <el-button @click="go100">go100</el-button>
        <el-button @click="go_3">go-3</el-button>

        <div style="color: #FC796B; font-size: 20px; margin: 10px 0">路由对象route：</div>
        <el-button @click="routeObject">点击查看路由对象</el-button>
    </div>
</template>

<script>
    export default {
        name: "vue_router",
        data() {
            return {

            }
        },
        methods: {
            Fnjump1() {
                this.$router.push('/')
            },
            Fnjump2() {
                this.$router.push({ name: '树形控件', params: { id: '123' }})
            },
            Fnjump3() {
                this.$router.push({ path: '/nextTick', query: { plan: 'private' }})
            },
            // 注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。
            // 取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path。
            Fnjump4() {
                const id = '123';
                this.$router.push({ name: '树形控件', params: { id }});
            },
            Fnjump5() {
                const id = '123';
                this.$router.push({path: `/nextTick/${id}`});  // -> /nextTick/123
            },
            Fnjump6() {
                const id = '123';
                this.$router.push({ path: '/nextTick', params: { id }});  // 这里的params不生效 -> /nextTick
            },
            //以上同样的规则也适用于 router-link 组件的 to 属性。

            //跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
            Fnjump7() {
                this.$router.replace('/')
            },

            go1() { this.$router.go(1) },        // 在浏览器记录中前进一步，等同于 history.forward()
            go_1() { this.$router.go(-1) },      // 后退一步记录，等同于 history.back()
            go3() { this.$router.go(3) },        // 前进 3 步记录
            go100() { this.$router.go(100) },    // 如果 history 记录不够用，那就默默地失败呗
            go_3() { window.history.length > 3 ? this.$router.go(-3) : this.$router.push('/') },

            // Vue Router 的导航方法 (push、 replace、 go) 在各类路由模式 (history、 hash 和 abstract) 下表现一致。

            routeObject() {
                let data = this.$route;
                console.log('route对象：', data);
                console.log(this.$router)
            }
        }
    }
</script>

<style scoped>
    a {text-decoration-line: none; margin: 20px}
    a:hover {text-decoration-line: underline}
</style>
