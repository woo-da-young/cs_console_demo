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
     
          <v-menu
      transition="slide-x-transition"
      bottom
      right
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
         <v-btn
          class="white--text ma-5"
            v-bind="attrs"
          v-on="on"
        text
      >
        <v-icon large>mdi-account</v-icon>
      </v-btn> 
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>



    </v-app-bar>


</template>


<script>
   export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
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
