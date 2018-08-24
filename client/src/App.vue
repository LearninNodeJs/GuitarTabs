<template>
<v-app>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon> </v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Guitar Tabs</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
  <main>
    <router-view></router-view>
  </main>
</v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
