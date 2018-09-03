<template>
  <v-layout>
  <v-container grid-list-md fluid class="hidden-xs-only">
    <v-layout row wrap>
      <v-flex xs4 sm4>
        <v-card >
          <v-card-title class="black darken-2">
            <h4 class="primary--text">Enter Song Information</h4>
          </v-card-title>
          <v-card-text>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="title"
                    label="Enter Song Title"
                    id="title"
                    v-model="song.title"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="artist"
                    label="Enter Artist"
                    id="artist"
                    v-model="song.artist"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="genre"
                    label="Enter Genre"
                    id="genre"
                    v-model="song.genre"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="album"
                    label="Enter Album Name"
                    v-model="song.album"
                    id="album"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="albumImageUrl"
                    label="Enter Image Url"
                    id="albumImageUrl"
                    v-model="song.albumImageUrl"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <img :src="song.albumImageUrl" alt="" height="150"/>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="youtubeId"
                    label="Enter Youtube Id"
                    v-model="song.youtubeId"
                    id="youtubeId"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs8 sm8>
        <v-card>
        <v-card-title class="black darken-2">
          <h4 class="primary--text">Enter Song MetaData</h4>
        </v-card-title>
          <v-card-text>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="lyrics"
                    label="Paste Song Lyrics"
                    v-model="song.lyrics"
                    id="lyrics"
                    required
                    multi-line>
                  </v-text-field>
                </v-flex>
              </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  name="tabs"
                  label="Paste Song Tabs"
                  id="tabs"
                  v-model="song.tab"
                  required
                  multi-line>
                </v-text-field>
              </v-flex>
            </v-layout>
            <div class="text-xs-center mt-3">
              <v-btn class="black--text" :disabled="!isFormValid" @click="onCreateNewSong" type="submit"outline>Submit Song</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

    <v-container class="hidden-sm-and-up">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h2 class="secondary--text">Create Song</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form action="/">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="title"
                  label="Enter Title"
                  v-model="song.title"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="artist"
                  v-model="song.artist"
                  label="Enter Artist"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="genre"
                  v-model="song.genre"
                  label="Enter Genre"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="album"
                  v-model="song.album"
                  label="Enter Album Name"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="albumImageUrl"
                  label="Enter Image Url"
                  v-model="song.albumImageUrl"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <img :src="song.albumImageUrl" alt="" height="200"/>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="youtubeId"
                  v-model="song.youtubeId"
                  label="Enter Youtube Id"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="lyrics"
                  label="Paste Song Lyrics"
                  v-model="song.lyrics"
                  required
                  multi-line>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="tabs"
                  label="Paste Song Tabs"
                  v-model="song.tab"
                  required
                  multi-line>
                </v-text-field>
              </v-flex>
            </v-layout>

            <div class="text-xs-center mt-3">
              <v-btn class="black--text" :disabled="!isFormValid" @click="onCreateNewSong" type="submit"outline>Submit Song</v-btn>
            </div>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
  import songService from '@/services/SongService'
 export default {

   data(){
     return {
       song: {
         title: '',
         artist: '',
         genre: '',
         album: '',
         albumImageUrl: '',
         youtubeId: '',
         lyrics: '',
         tab: ''
       }
     }
   },
   computed:{
     isFormValid (){
       return this.song.title !=='' && this.song.artist !=='' && this.song.genre !== '' && this.song.album !== ''
                && this.song.albumImageUrl !== '' && this.song.youtubeId !== '' && this.song.lyrics !==''
                && this.song.tabs !== ''
     }
   },
   methods:{
      async onCreateNewSong () {
        try{
            await songService.post(this.song);
            this.$router.push('/songs');
        }catch (e) {
          console.log('Error Occured',e.message)
        }
     }
   }
 }
</script>
<style scoped>

</style>
