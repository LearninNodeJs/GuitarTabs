<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" style="margin-bottom: 6px"/>
    <br>
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <br>
    <button style="margin-top: 6px" @click="onClickRegister">Register</button>

   </div>

</template>
<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
     async onClickRegister(){
        console.log('The Register Button was clicked',this.email,this.password);
       const response = await AuthenticationService.register({
          email:this.email,
          password:this.password
        });
       console.log('This is the response',response.data);
      }
    }

  }
</script>
