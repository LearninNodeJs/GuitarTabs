import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login'
import Songs from '@/components/songs/songs'
import HelloWorld from '@/components/HelloWorld'
import CreateSong from '@/components/songs/CreateSong'
import ViewSong from '@/components/songs/ViewSong'
import EditSong from '@/components/songs/EditSong'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld
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
    },
    {
      path:'/viewSong/:id',
      name:'ViewSong',
      component:ViewSong,
      props:true
    },
    {
      path:'/editSong/:id',
      name:'EditSong',
      component:EditSong,
      props:true
    }
  ],mode:'history'
})
