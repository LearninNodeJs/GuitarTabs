<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert :text="error.toString()"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title>
            <h4 class="primary--text">Login</h4>
          </v-card-title>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onClickRegister">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                      outline></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                      outline></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn outline class="primary--text" type="submit">
                      Sign In
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data(){
      return{
        email:'',
        password:'',
        error:null
      }
    },
    methods:{
      async onClickRegister(){
        try {
         const response =  await AuthenticationService.login({
            email: this.email,
            password: this.password
          });
         this.$store.dispatch('setToken',response.data.token);
         this.$store.dispatch('setUser',response.data.user);
        }catch (error) {
          this.error = error.response.data.error;
        }
      }
    }

  }
</script>
<style scoped>
  .error{
    color:red;
  }
</style>
