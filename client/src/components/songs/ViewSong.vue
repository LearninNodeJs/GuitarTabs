<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Song Metadata</h3>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Youtube Video</h3>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Tab</h3>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Lyrics</h3>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import SongService from '@/services/SongService'

  export default {
    data(){
      return {
        songs:null
      }
    }
  }

</script>

<style scoped>

</style>
