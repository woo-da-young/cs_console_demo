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
     
     <a href="https://zero-dev.security365.com/login" target="_blank">
        <v-btn class="white--text " text >
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            src="https://zero-dev.security365.com/img/logo_SHIELD@Home_Zero.72182f75.svg"
            contain
            style="padding:0"
            width="150px"
          />
        </v-btn> 
      </a>
      
      <a href="https://10.11.10.30:9000" target="_blank">
        <v-btn class="white--text " text >
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            src="https://static.wixstatic.com/media/ea85dc_a75f9463180d4ae5b64a3b5bf6c13d03~mv2.png/v1/fill/w_270,h_48,al_c,lg_1,q_85/x_logo.webp"
            width="130px"
          />
        </v-btn> 
      </a>

    <v-menu
      transition="slide-y-transition"
      bottom
      left
      offset-y
      align="center"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="white--text "
          v-bind="attrs"
          v-on="on"
          text
        >
        <v-icon large>mdi-account</v-icon>
      </v-btn> 
      </template>

      <v-card class="mx-auto" max-width="344" outlined > 
          <v-list-item><div class="text-overline">SOFTCAMP</div></v-list-item>
          <v-list-item two-line>
            <v-list-item-avatar size="90" color="primary"> <span class="white--text text-h5">관리자</span></v-list-item-avatar>
            <v-list-item-content>
              <div class="text-overline">관리자</div>
              <v-list-item-title class="mb-1">Admin@softcamp.co.kr</v-list-item-title>
              <v-list-item-subtitle><a href="#">계정정보보기</a></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
           <v-list-item><div style="width: 100%"><v-btn style="background-color:#eee;" text width="100%">로그아웃</v-btn></div> </v-list-item>
        </v-card>
        
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
