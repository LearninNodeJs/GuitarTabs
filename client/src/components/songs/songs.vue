<template>
  <v-container grid-list-md fluid>
  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text" style="cursor: pointer;">Songs</h4>
          <v-spacer></v-spacer>
          <v-btn absolute dark small fab  right class="blue darken-2" v-if="userIsAuthenticated" @click="onClickToCreate"><v-icon>add</v-icon></v-btn>
        </v-card-title>
      </v-card>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field outline name="search" append-icon="search" label="Search Song by Artist, Genre, Title" v-model="searchKey"></v-text-field>
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
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text">Bookmarks</h4>
        </v-card-title>
      </v-card>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex xs6>
              <v-text-field append-icon="search" name="search" label="Search Bookmark" v-model="search"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-data-table
              :headers="headers"
              :items="bookmarks"
              :search="search">
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.id }}</td>
                  <td class="text-xs-right">{{ props.item.title }}</td>
                  <td class="text-xs-right">{{ props.item.artist }}</td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                  Your search for "{{ search }}" found no results.
                </v-alert>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6></v-flex>
    <v-spacer></v-spacer>
    <v-flex xs12 sm6>
      <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text" style="cursor: pointer;">Recently Viewed</h4>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-data-table
          :headers="historyHeaders"
          :items="songHistory"
          :search="searchHistory">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.title }}</td>
            <td class="text-xs-right">{{ props.item.artist }}</td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ searchHistory }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import SongsService from '@/services/SongService'
  import _ from 'lodash'
  import BookmarkService from "../../services/BookmarkService";
  import SongHistoryService from "../../services/SongHistoryService";
  export default {
    data(){
      return{
        songs:null,
        ratingNumber:3,
        searchKey:'',
        search:'',
        searchHistory:'',
        headers: [
          {
            text: 'Bookmarks',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          { text: 'Title', value: 'title' },
          { text: 'Artist', value: 'artist' },
        ],
        bookmarks: [
          {
            value: false,
            id: '',
            title: '',
            artist: '',

          }
          ],
        historyHeaders:[
          {
            text:'Recently Viewed',
            align:'left',
            sortable:false,
            value:'id'
          },
          {text:'Title',value:'title'},
          {text:'Artist',value:'artist'}
        ],
        songHistory: [
          {
            value: false,
            id: '',
            title: '',
            artist: '',

          }
        ],

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
    },
    async mounted (){
      if(this.userIsAuthenticated){
        const songId = this.$store.state.route.params.id;
        const userId = this.$store.getters.user.id;
          this.bookmarks = (await BookmarkService.indexByUser(userId)).data;
          this.songHistory = (await SongHistoryService.index(userId)).data;
          console.log(this.bookmarks);

      }
    }

  }
</script>
