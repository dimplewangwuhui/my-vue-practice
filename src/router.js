import Vue from  'vue';
import Router from 'vue-router';
import Layout from '@/layouts/layout';
import redirect from '@/layouts/redirect';
import store from '@/store';

// 路由懒加载
// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
const mvvm = () => import('@/views/practice/mvvm');
const HelloWorld = () => import('@/views/practice/HelloWorld');
const mutation_method = () => import('@/views/practice/mutation_method');
const tree = () => import('@/views/practice/tree');
const nextTick = () => import('@/views/practice/nextTick');
const vue_router = () => import('@/views/practice/vue_router');
const if_show = () => import('@/views/practice/if_show');
const decorate = () => import('@/views/practice/decorate');
const regexp = () => import('@/views/practice/regexp');
const task = () => import('@/views/practice/task');
const async_await = () => import('@/views/practice/async_await');
const others = () => import('@/views/practice/others');

// 组件
const self_component = () => import('@/views/component/self_component');
const parent = () => import('@/views/component/parent');
const child1 = () => import('@/views/component/child1');
const child2 = () => import('@/views/component/child2');
const child3 = () => import('@/views/component/child3');
const child4 = () => import('@/views/component/child4');

// 样式
const css = () => import('@/views/style/css');
const position = () => import('@/views/style/position');

// ES6
const first = () => import('@/views/ES6/first');
const declare = () => import('@/views/ES6/declare');
const innerObject = () => import('@/views/ES6/innerObject');
const operator = () => import('@/views/ES6/operator');
const async = () => import('@/views/ES6/async');

// JavaScript
const js_others = () => import('@/views/javaScript/js_others');
const json2excel = () => import('@/views/javaScript/json2excel');

//其他
const luckywheel = () => import('@/views/others/luckywheel');
const tableEdit = () => import('@/views/others/tableEdit');
const tableEdit2 = () => import('@/views/others/tableEdit2');
const django = () => import('@/views/others/django');
const webssh = () => import('@/views/others/webssh');
const email = () => import('@/views/others/email');

Vue.use(Router);  //如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能

const router = new Router({
    mode: 'history',
    // hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
    // history: 依赖 HTML5 History API 和服务器配置.
    // abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。
    routes: [
        {
            path: '',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: '练习',
                    component: redirect,
                    iconClass: 'el-icon-edit-outline',
                    children: [
                        { path: '/', name: '数据绑定', component: mvvm,  meta: {path: '/'}},
                        { path: '/vue_router', name: 'vue路由', component: vue_router,  meta: {path: '/vue_router'}},
                        { path: '/if_show', name: '条件渲染', component: if_show,  meta: {path: '/if_show'}},
                        { path: '/decorate', name: '修饰符', component: decorate,  meta: {path: '/decorate'}},
                        { path: '/HelloWorld', name: '生命周期', component: HelloWorld,  meta: {path: '/HelloWorld'}},
                        { path: '/tree', name: '树形控件', component: tree,  meta: {path: '/tree'}},
                        { path: '/nextTick', name: 'nextTick', component: nextTick,  meta: {path: '/nextTick'}},
                        { path: '/regexp', name: '正则表达', component: regexp,  meta: {path: '/regexp'}},
                        { path: '/async_await', name: '同步异步', component: async_await,  meta: {path: '/async_await'}},
                        { path: '/others', name: '其他', component: others,  meta: {path: '/others'}},
                    ]
                },
                {
                    path: '/',
                    name: '组件',
                    component: redirect,
                    iconClass: 'el-icon-s-open',
                    children: [
                        { path: '/self_component', name: '自定义组件', component: self_component,  meta: {path: '/self_component'}},
                        { path: '/parent', name: '父组件', component: parent,  meta: {path: '/parent'}},
                        { path: '/child1', name: '兄弟组件1', component: child1, hidden: true, meta: {path: '/child1'}},
                        { path: '/child2', name: '兄弟组件2', component: child2, hidden: true, meta: {path: '/child2'}},
                        { path: '/child3', name: 'A组件', component: child3, meta: {path: '/child3'}},
                        { path: '/child4', name: 'B 组件', component: child4, meta: {path: '/child4'}},
                    ]
                },
                {
                    path: '/',
                    name: '样式',
                    component: redirect,
                    iconClass: 'el-icon-magic-stick',
                    children: [
                        { path: '/css', name: '过渡动画', component: css, meta: {path: '/css'}},
                        { path: '/position', name: '浮动定位', component: position,  meta: {path: '/position'}},
                    ]
                },
                {
                    path: '/',
                    name: 'ES6',
                    component: redirect,
                    iconClass: 'el-icon-bangzhu',
                    children: [
                        { path: '/first', name: '思维导图', component: first, meta: {path: '/first'}},
                        { path:'/declare', name: '声明与表达式', component: declare, meta: {path: '/declare'}},
                        { path:'/innerObject', name: '内置对象', component: innerObject, meta: {path: '/innerObject'}},
                        { path:'/operator', name: '运算符与语句', component: operator, meta: {path: '/operator'}},
                        { path:'/async', name: '异步编程', component: async, meta: {path: '/async'}},
                    ]
                },
                {
                    path: '/',
                    name: 'JavaScript',
                    component: redirect,
                    iconClass: 'el-icon-discount',
                    children: [
                        { path: '/mutation_method', name: '数组方法', component: mutation_method,  meta: {path: '/mutation_method'}},
                        { path: '/task', name: '宏微任务', component: task,  meta: {path: '/task'}},
                        { path: '/json2excel', name: 'json2excel', component: json2excel, meta: {path: '/json2excel'}},
                        { path: '/js_others', name: '其它', component: js_others, meta: {path: '/js_others'}},
                    ]
                },
                {
                    path: '/',
                    name: '其他',
                    component: redirect,
                    iconClass: 'el-icon-discount',
                    children: [
                        { path: '/luckywheel', name: '幸运转盘', component: luckywheel,  meta: {path: '/luckywheel'}},
                        { path: '/tableEdit', name: '表格编辑', component: tableEdit,  meta: {path: '/tableEdit'}},
                        { path: '/tableEdit2', name: '树结构表格编辑', component: tableEdit2,  meta: {path: '/tableEdit2'}},
                        { path: '/django', name: 'django前后端分离', component: django,  meta: {path: '/django'}},
                        { path: '/webssh', name: 'webssh', component: webssh,  meta: {path: '/webssh'}},
                        { path: '/email', name: 'email', component: email,  meta: {path: '/email'}},
                    ]
                },
            ]
        }

    ],
    // base: '/'
    // base为应用的基路径，默认为'/'。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。

    // linkActiveClass: 'router-link-active'
    // 全局配置 <router-link> 的默认“激活 class 类名”，默认为：router-link-active。

    // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。
    // 这个功能只在 HTML5 history 模式下可用
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
    // 异步滚动
    // scrollBehavior (to, from, savedPosition) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({ x: 0, y: 0 })
    //         }, 500)
    //     })
    // }
});


function GetToken () {
    var strUrl = window.location.href;
    var token = null;
    var index = strUrl.indexOf('token=');
    if (index > 0) {
        token = strUrl.substr(index + 6).split('&')[0];
    }

    if (token && token.indexOf('#/') > 0) {
        token = token.substr(0, token.indexOf('#/'));
    }
    return token;
}
router.beforeEach((to, from, next) => {
    let token = GetToken();
    if (token) {
        token = decodeURIComponent(decodeURI(token));
        store.commit('SET_TOKEN', token);
        next();
    } else {
        next();
    }

});
export default router;
