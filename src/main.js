import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import bus from './utils/bus';
import VueI18n from 'vue-i18n';
import i18n from './i18n/index';
import './assets/js/iconfont.js'
import namelimit from './utils/nameLimit'

import {
  Button, Pagination, Select, Option, Row, Col, Input, Radio, RadioGroup, Table, TableColumn, Tooltip, Checkbox, CheckboxGroup,
  Form, FormItem, Dropdown, DropdownMenu, DropdownItem, Dialog, Tree, Breadcrumb, BreadcrumbItem, Card, Backtop, Drawer,
  Tabs, TabPane, Menu, MenuItem, MenuItemGroup, Icon, InputNumber} from 'element-ui'
import SubMenu from "element-ui/src/utils/menu/aria-submenu";

Vue.prototype.$bus = bus;

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.use(namelimit);

Vue.component(Button.name, Button);    // 或者写为Vue.use(Button)
Vue.component(Pagination.name, Pagination);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Dialog.name, Dialog);
Vue.component(Tree.name, Tree);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Card.name, Card);
Vue.component(Backtop.name, Backtop);
Vue.component(Drawer.name, Drawer);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(SubMenu.name, SubMenu);
Vue.component(Icon.name, Icon);
Vue.component(InputNumber.name, InputNumber);


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
