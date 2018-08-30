<template>
  <v-layout row style="margin-top: 14px;">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text" style="cursor: pointer;">{{ title }}</h4>
        </v-card-title>
        <v-card-text>
          <v-container>
            <div v-for="song in songs" :key="song.title">
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
  export default {
    data(){
      return{
        title:'Songs',
        songs:[
          {
            title:'Walking in Memphis',
            artist:'Marc Cohn',
            album:'Walking in The Rain'
          },
          {
            title:'Coward Of The County',
            artist:'Kenny Rodgers',
            album:'Coward Of The County'
          }
        ]
      }
    }
  }
</script>
