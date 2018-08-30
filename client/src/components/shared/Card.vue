<template>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text">{{ title }}</h4>
        </v-card-title>
        <v-card-text>
          <v-container>
          </v-container>
        </v-card-text>
      </v-card>
</template>
<script>
  export default {
    props:['title']
  }

</script>
