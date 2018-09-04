<template>
  <v-layout row style="margin-top: 14px;" >
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text" style="cursor: pointer;">Songs</h4>
          <v-spacer></v-spacer>
          <v-btn absolute dark small fab  right class="blue darken-2" v-if="userIsAuthenticated" @click="onClickToCreate"><v-icon>add</v-icon></v-btn>
        </v-card-title>
      </v-card>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout wrap>
            <v-flex xs12  v-for="song in songs" :key="song.title">
              <v-card color="purple darken-2" class="white--text" >
                <v-layout>
                  <v-flex xs12>
                    <img
                      style="padding-left: 5px"
                      :src="song.albumImageUrl"
                      height="125px"
                      width="200px"
                      contain
                    >
                  </v-flex>
                  <v-flex xs12 >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{song.title}}</div>
                        <div>{{song.album}}</div>
                        <div>{{song.artist}}</div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider class="white darken-2"></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-flex xs12>
                    <v-btn flat :to="'/viewSong/'+song.id">
                      <v-icon right>arrow forward</v-icon>
                      View
                    </v-btn>
                  </v-flex>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  import SongsService from '@/services/SongService'

  export default {
    data(){
      return{
        songs:null,
        ratingNumber:3
      }
    },
    async  mounted () {
        //Request rest api for the songs.
      this.songs  = (await SongsService.index()).data;
      console.log('songs',this.songs)
    },
    computed:{
      userIsAuthenticated(){
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods:{
      onClickToCreate () {
        this.$router.push('/createSong');
      }
    }

  }
</script>
