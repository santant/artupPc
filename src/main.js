import Vue from 'vue'
//引入路由和ajax库
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
//引入ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routerConfig from './router.config.js'

//使用use 引入插件
Vue.use(ElementUI)
Vue.use(VueRouter);
Vue.use(vueResource);

//生成路由实例:
const router = new VueRouter(routerConfig)

new Vue({
  router, //放入路由
  el: '#app',
  render: h => h(App)
})







