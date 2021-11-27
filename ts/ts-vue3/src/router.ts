/*
 * @Description: 
 * @Author: Harry
 * @Date: 2021-11-27 17:59:16
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-27 18:32:17
 * @LastEditors: Harry
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue';
import UserVue from './components/User.vue';
import News from './components/News.vue';
import Usercontent from './components/Usercontent.vue';
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/user', component: UserVue },
  { path: '/news', component: News },
  { path: '/newscontent/', component: Usercontent },
  // { path: '/newscontent/:id', component: Usercontent },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router