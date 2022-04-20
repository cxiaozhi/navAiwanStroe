import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'layout',
  component: () => import('@/views/LayOut')
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  document.title = '大前端技术栈导航'
  next()
})

export default router
