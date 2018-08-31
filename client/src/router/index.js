import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Songs from '@/components/songs/songs'
import CreateSong from '@/components/songs/CreateSong'
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
    },
    {
      path:'/songs',
      name: 'Songs',
      component:Songs
    },{
      path:'/createSong',
      name:'CreateSong',
      component:CreateSong
    }
  ],mode:'history'
})
