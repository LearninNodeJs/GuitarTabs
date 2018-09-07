<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6>

    </v-flex>
    <v-flex xs12 sm6>
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
            <v-flex xs12>
              <v-text-field outline name="search" label="Search Song by Artist, Genre, Title" v-model="searchKey"></v-text-field>
            </v-flex>
            <v-flex xs12  v-for="song in songs" :key="song.title" style="margin-bottom: 12px">

              <v-card>
                <v-layout row wrap>
                  <v-flex xs12>
                  <v-card-title>
                    <h4>{{song.title}}</h4>
                  </v-card-title>
                    <v-card-media
                    :src="song.albumImageUrl"
                    height="200px"></v-card-media>
                    <v-card-text>
                      <div>
                        <h4 class="info--text">Album Name: {{song.album}}</h4>
                        <br>
                        <h4 class="info--text">Artist: {{song.artist}}</h4>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <snack :text="song.title "></snack>
                      <v-btn flat color="blue darken-2" :to="'/viewSong/'+song.id">Explore</v-btn>
                    </v-card-actions>
                  </v-flex>
                </v-layout>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>


<script>
  import SongsService from '@/services/SongService'
  import _ from 'lodash'

  export default {
    data(){
      return{
        songs:null,
        ratingNumber:3,
        searchKey:''
      }
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
    },
    watch:{
      searchKey:_.debounce(async function(value){
        const route = {
          name:'Songs'
        };
        if(this.searchKey !==''){
          route.query = {
            searchKey:this.searchKey
          }
        }
        this.$router.push(route);
      },700),

      '$route.query.searchKey':{
          immediate:true,
          async handler(value){
            this.searchKey = value;
            const response = await SongsService.searchSong(value);
            this.songs = response.data;
          }
      }
    }

  }
</script>
