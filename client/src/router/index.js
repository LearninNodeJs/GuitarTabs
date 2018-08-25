import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/signup',
      name:'Register',
      component:Register
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ],mode:'history'
})
