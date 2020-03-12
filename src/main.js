import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

import VueRouter from 'vue-router'

import Home from "./components/Home.vue";
import Info from "./components/Info.vue";

Vue.use(VueRouter);


 Vue.use(VueResource);

 //定义组件
 const routes = [
  { path: '/home', component: Home },
  { path: '/info', component: Info },
 // { path: '*', redirect: '/App' }   /*默认跳转路由*/
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
 
new Vue({
  el: '#app',
  router,//挂载路由
  render: h => h(App)
})
