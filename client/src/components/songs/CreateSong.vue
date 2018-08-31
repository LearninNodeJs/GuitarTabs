<template>
  <v-container grid-list-md >
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
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="album"
                    label="Enter Album Name"
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
                    v-model="albumImageUrl"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <img :src="albumImageUrl" alt="" height="200"/>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="youtubeId"
                    label="Enter Youtube Id"
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
                  required
                  multi-line>
                </v-text-field>
              </v-flex>
            </v-layout>
            <div class="text-xs-center mt-3">
              <v-btn class="black--text" outline>Submit Song</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
 export default {
   data(){
     return {
       albumImageUrl:''
     }
   }
 }
</script>
<style scoped>

</style>
