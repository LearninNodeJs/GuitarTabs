<template>
  <v-layout row style="margin-top: 14px;">
    <v-flex xs12 sm6 offset-sm3>
    <card-component :title="title"></card-component>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data(){
      return{
        title:'Songs'
      }
    }
  }
</script>
