import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/index/router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let routes = [].concat(
  Main
)

export default new Router({
  mode: 'history',
  routes
})
