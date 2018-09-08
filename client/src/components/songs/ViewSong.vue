<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Song Metadata</h3>
          <v-spacer></v-spacer>
          <v-chip class="blue darken-2" @click.native="onClickToUnBookmark" v-if="userIsAuthenticated && !songIsBookMarked">UnBookmark
            <v-icon>bookmark</v-icon></v-chip>
            <v-chip class="blue darken-2" @click.native="onClickToBookmark" v-if="userIsAuthenticated && songIsBookMarked">Bookmark
            <v-icon>bookmark</v-icon></v-chip>

          <v-btn fab small class="blue darken-2" @click.native="onClickToEdit" v-if="userIsAuthenticated">
            <v-icon >edit</v-icon>
          </v-btn>
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
        <v-card-title class="black darken-2" height="290">
          <h3 class="primary--text">Youtube Video</h3>
        </v-card-title>
        <v-card-media height="320">
          <v-flex xs12>
            <youtube :video-id="songs.youtubeId"  player-height="320"></youtube>
          </v-flex>
        </v-card-media>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Tabs</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field multi-line  readonly v-model="songs.tab">
          </v-text-field>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h3 class="primary--text">Lyrics</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field multi-line  readonly v-model="songs.lyrics">
          </v-text-field>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import SongService from '@/services/SongService'
  import BookmarkService from '@/services/BookmarkService'
  import SongHistoryService from '@/services/SongHistoryService'

  export default {
    data(){
      return {
        songs:{},
        bookmarks:{}
      }
    },

    async mounted (){
      try {
         const songId = this.$store.state.route.params.id;
         const song = await SongService.getSongById(songId);
         const userId = this.$store.getters.user.id;
         const bookMark = await BookmarkService.index(songId,userId);
         this.songs = song.data;
         this.bookmarks = bookMark.data;
         console.log(bookMark.data);

         if(this.userIsAuthenticated){
           SongHistoryService.post({
             SongId:songId,
             UserId:userId
           })
         }

      }catch (e) {
        console.log({error:e.message});
      }
    },
    methods:{
      onClickToEdit () {
        const songId = this.$store.state.route.params.id;
        this.$router.push(`/editSong/${songId}`);
      },
      async onClickToBookmark () {
        try{
          await BookmarkService.post({
            SongId:this.$store.state.route.params.id,
            UserId:this.$store.getters.user.id
          });
          this.$store.dispatch('onSetBookMark',this.bookmarks);
        }catch (e) {
          console.log(e.message);
        }
      },
      async onClickToUnBookmark (){
        try{
          console.log(this.bookmarks.id);
          const bookmarkId = this.bookmarks.id;
          await BookmarkService.delete(bookmarkId);
          this.$store.dispatch('unsetBookmark');
        }catch(e){
          console.log(e.message);
        }
      }
    },
    computed:{
      userIsAuthenticated(){
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      songIsBookMarked(){
        return this.bookmarks.bookmarkOnStore === null
      }
    }
  }

</script>

<style scoped>

</style>
