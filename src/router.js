import Vue from  'vue';
import Router from 'vue-router';
import Layout from '@/layouts/layout';
import redirect from '@/layouts/redirect';
import store from '@/store';

// 路由懒加载
// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
const mvvm = () => import('@/views/mvvm');
const HelloWorld = () => import('@/views/HelloWorld');
const mutation_method = () => import('@/views/mutation_method');
const tree = () => import('@/views/tree');
const nextTick = () => import('@/views/nextTick');
const vue_router = () => import('@/views/vue_router');
const if_show = () => import('@/views/if_show');
const decorate = () => import('@/views/decorate');
const css = () => import('@/views/css');
const position = () => import('@/views/position');
const regexp = () => import('@/views/regexp');
const others = () => import('@/views/others');
const self_component = () => import('@/views/self_component');
const child1 = () => import('@/views/child1');
const child2 = () => import('@/views/child2');


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
                    children: [
                        { path: '/', name: '数据绑定', component: mvvm,  meta: {path: '/'}},
                        { path: '/vue_router', name: 'vue路由', component: vue_router,  meta: {path: '/vue_router'}},
                        { path: '/if_show', name: '条件渲染', component: if_show,  meta: {path: '/if_show'}},
                        { path: '/decorate', name: '修饰符', component: decorate,  meta: {path: '/decorate'}},
                        { path: '/mutation_method', name: '数组方法', component: mutation_method,  meta: {path: '/mutation_method'}},
                        { path: '/HelloWorld', name: '钩子函数', component: HelloWorld,  meta: {path: '/HelloWorld'}},
                        { path: '/tree', name: '树形控件', component: tree,  meta: {path: '/tree'}},
                        { path: '/nextTick', name: 'nextTick', component: nextTick,  meta: {path: '/nextTick'}},
                        { path: '/regexp', name: '正则表达', component: regexp,  meta: {path: '/regexp'}},
                        { path: '/others', name: '其他', component: others,  meta: {path: '/others'}},
                    ]
                },
                {
                    path: '/',
                    name: '组件',
                    component: redirect,
                    children: [
                        { path: '/self_component', name: '自定义组件', component: self_component,  meta: {path: '/self_component'}},
                        { path: '/child1', name: '兄弟组件1', component: child1,  meta: {path: '/child1'}},
                        { path: '/child2', name: '兄弟组件2', component: child2,  meta: {path: '/child2'}},
                    ]
                },
                {
                    path: '/',
                    name: '样式',
                    component: redirect,
                    children: [
                        { path: '/css', name: '过渡动画', component: css,  meta: {path: '/css'}},
                        { path: '/position', name: '浮动定位', component: position,  meta: {path: '/position'}},
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
