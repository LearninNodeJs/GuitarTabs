import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Songs from '@/components/songs/songs'
import CreateSong from '@/components/songs/CreateSong'
import ViewSong from '@/components/songs/ViewSong'

Vue.use(Router);

export default new Router({
  routes: [
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
    },
    {
      path:'/viewSong/:id',
      name:'ViewSong',
      component:ViewSong,
      props:true
    }
  ],mode:'history'
})
