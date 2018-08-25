<template>
<v-app>
  <v-toolbar dark class="primary darken-2">
    <v-toolbar-side-icon> </v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      <router-link to="/" tag="span" style="cursor:pointer">Tab Tracker</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat
      v-for="item in menuItems"
      :key="item.title"
      router
      :to="item.link">
       <v-icon dark left>{{item.icon}}</v-icon>
        {{item.title}}
      </v-btn>
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
        {icon:'face',title:'Sign Up',link:'/register'},
        {icon:'lock_open',title:'Sign In',link:'/signin'}
      ];
      return menuItems;
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
