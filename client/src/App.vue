<template>
<v-app>
  <v-toolbar dark class="black darken-2">
    <v-toolbar-side-icon> </v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <router-link to="/" tag="span" style="cursor:pointer">Tab Tracker</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn @click="onNavigateToBrowseeLocation" flat dark><v-icon dark left>open_in_browser</v-icon> Browse</v-btn>

    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items >
      <v-btn flat
             v-if="!userIsAuthenticated"
      v-for="item in menuItems"
      :key="item.title"
      router
      :to="item.link">
       <v-icon dark left>{{item.icon}}</v-icon>
        {{item.title}}
      </v-btn>
      <v-btn flat
             v-if="userIsAuthenticated"
      router
      @click="onLogout"><v-icon dark left>exit_to_app</v-icon>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <main>
    <router-view></router-view>
  </main>
</v-app>
</template>

<script>
export default {
  name: 'App',
  computed:{
    menuItems(){
      let menuItems = [
        {icon:'face',title:'Sign Up',link:'/signup'},
        {icon:'lock_open',title:'Sign In',link:'/login'}
      ];

      return menuItems;
    },
    userIsAuthenticated(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods:{
    onLogout(){
      this.$store.dispatch('onLogout');
      this.$router.push('/login');
    },
    onNavigateToBrowseeLocation(){
      if(!this.userIsAuthenticated){
         this.$router.push('/login');
      }else{
        this.$router.push('/songs');
      }
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
