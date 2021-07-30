<template>
  
    
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
        style="padding-top:20px;"
      >

        <v-list
          nav
        >

          <!--<v-list-item >
             <v-list-item-icon></v-list-item-icon>
            <v-list-item-title ></v-list-item-title>
          </v-list-item>-->
            <v-list-item-group>
           <v-list-item link>
            <v-list-item-icon>
              <v-icon >mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title >정책관리</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-shield-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>보안감사</v-list-item-title>
          </v-list-item>
         <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-hammer-wrench</v-icon>
            </v-list-item-icon>
            <v-list-item-title>관리도구</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-clipboard-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>관리자정책</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>환경설정</v-list-item-title>
          </v-list-item>
             </v-list-item-group>
        </v-list>

        
      </v-navigation-drawer>
      

</template>

