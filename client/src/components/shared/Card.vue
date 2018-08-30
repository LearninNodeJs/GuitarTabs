<template>
  <v-card>
    <v-card-title class="black darken-2">
      <h4 class="primary--text" style="cursor: pointer;">{{ title }}</h4>
    </v-card-title>
    <v-card-text>
      <v-container>
        <slot>
          No Content Has Been Defined
        </slot>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:['title']
  }

</script>
