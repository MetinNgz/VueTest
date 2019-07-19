import Vue from 'vue'
import Router from 'vue-router'
import TodoContainer from './components/TodoContainer'
import Home from './components/Home'
import Table from './components/Table'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/todos',
            name: 'Todos',
            component: TodoContainer
        },
        {
            path: '/table',
            name: 'table',
            component:Table
        }
    ]
})
