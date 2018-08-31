<template>
  <v-layout row style="margin-top: 14px;">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text" style="cursor: pointer;">Songs</h4>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div v-for="song in songs" :key="song.id">
              {{song.title}}
              {{song.artist}}
              {{song.album}}
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import SongsService from '@/services/SongService'
  export default {
    data(){
      return{
        songs:null
      }
    },
    async  mounted () {
        //Request rest api for the songs.
      this.songs  = (await SongsService.index()).data;
      console.log('songs',this.songs)
    }
  }
</script>
