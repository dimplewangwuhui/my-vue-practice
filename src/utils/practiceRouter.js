import redirect from '@/layouts/redirect';

const mvvm = () => import('@/views/practice/mvvm');
const HelloWorld = () => import('@/views/practice/HelloWorld');
const tree = () => import('@/views/practice/tree');
const nextTick = () => import('@/views/practice/nextTick');
const vue_router = () => import('@/views/practice/vue_router');
const if_show = () => import('@/views/practice/if_show');
const decorate = () => import('@/views/practice/decorate');
const regexp = () => import('@/views/practice/regexp');
const async_await = () => import('@/views/practice/async_await');
const menu_group = () => import('@/views/practice/menu_group');
const others = () => import('@/views/practice/others');

const practiceRouter = {
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
        { path: '/menu_group', name: '导航栏组', component: menu_group, meta: {path: '/menu_group'} },
        { path: '/others', name: '其他', component: others,  meta: {path: '/others'}},
    ]
};

export default practiceRouter
