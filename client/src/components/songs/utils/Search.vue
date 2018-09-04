<template>
  <v-text-field outline name="search" label="Search Song" :value="searchKey"></v-text-field>
</template>
<script>
  export default {
    props:['searchKey'],
    data(){
      return {

      }
    }
  }
</script>
