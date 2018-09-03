<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Song Metadata</h3>
        </v-card-title>
        <v-card-media
        :src="songs.albumImageUrl"
        height="200"></v-card-media>
       <v-card-text>
         <div>
           <span>{{songs.title}}---{{songs.artist}}</span>
           <br>
           <span><b>{{songs.genre}}</b></span>
         </div>
       </v-card-text>
        <v-card-actions>
        </v-card-actions>
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
          <h3 class="primary--text">Tabs</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field multi-line  readonly v-model="songs.tab">
            vuyhjvbj
          </v-text-field>
        </v-card-text>
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
        songs:{}
      }
    },
    async mounted (){
      try {
        const songId = this.$store.state.route.params.id;
        console.log(songId);
         const song = await SongService.getSongById(songId);
         this.songs = song.data;
         console.log(song.data);

      }catch (e) {
        console.log({error:e.message});
      }
    }
  }

</script>

<style scoped>
textarea{
  width:80%
}
</style>
