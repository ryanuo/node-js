// 导入 vue这个包 得到Vue构造函数
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
import Mycount from '@/components/Count.vue'
Vue.config.productionTip = false
Vue.component('my-count', Mycount)
new Vue({
  // 把render函数指定的组件,渲染到HTML页面中
  render: h => h(App)
}).$mount('#app')

// 有两种方法指定渲染区域 el或者使用$mount('#aoo')
