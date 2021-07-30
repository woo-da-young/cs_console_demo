<template>
  
    <v-app-bar
      app
      color="#009688"
      dark
    >
      <div class="logo-sheildd-flex align-center" >
       

         <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          src="http://iamwooda.com/logo.png"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
         
     <v-text-field
            label="search"
            prepend-inner-icon="mdi-magnify"
            dense
            style="padding-top:25px;"
          ></v-text-field>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon large>mdi-account</v-icon>
      </v-btn> 
    </v-app-bar>


</template>


<script>
  
  export default {
    data () {
      return {
        
      }
    },
  }
</script>

<style>
.logo-sheild {
  background-image: url('/logo.png');
  width: 48px;
  height: 38px;
  background-size: contain;
}
</style>
