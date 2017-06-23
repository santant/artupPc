import Vue from 'vue'
//2017年04月10日15:02:01 作者:827879040@qq.com vue全局过滤器测试
//定义全局过滤器
Vue.filter("sum", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return value + 40;
});
Vue.filter("json", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
   console.log(value)
   return JSON.stringify(value);
});