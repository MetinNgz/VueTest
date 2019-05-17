import Vue from 'vue'
import Router from 'vue-router'
import TodoContainer from './components/TodoContainer'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todos',
      name: 'Todos',
      component: TodoContainer
    }, {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
})
