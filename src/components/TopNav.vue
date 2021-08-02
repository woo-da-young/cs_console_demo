<template>
  
    <v-app-bar
      app
      color="#47B8F5"
      dark
    >
      <div class="logo-sheildd-flex align-center" >
       

         <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          src="https://static.wixstatic.com/media/ea85dc_6b186c0cb88e4122bb373cf64e3b8ff6~mv2.png/v1/fill/w_215,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo_shieldrm_w.webp"
          width="150"
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
      transition="slide-y-transition"
      bottom
      left
      offset-y
      align="center"
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

      <v-list dense color="#fff">
        <v-list-item v-for="(item, i) in items" :key="i" style="width: 200px; back;background-color: #fff" color="#fff">
          <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
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
        { title: '내 정보', icon: 'mdi-briefcase-outline' },
        { title: '로그아웃', icon: 'mdi-account-arrow-right-outline' },
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
