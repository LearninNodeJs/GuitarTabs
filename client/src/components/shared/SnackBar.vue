<template>
  <v-layout row wrap>
  <v-btn flat color="blue darken-2"@click="snackbar = true">Share</v-btn>
  <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="timeout"
    :top="y === 'top'"
    :vertical="mode === 'vertical'"
  >
    {{ text }}
    <v-btn
      color="pink"
      flat
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
  </v-layout>
</template>

<script>
  export default{
    props:['text'],
    data(){
      return{
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,

      }
    }
  }
</script>
