<template>    
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
        style="padding-top:20px;"
      >

        <v-list nav>
          <v-list-item-group mandatory>
            <v-list-item link v-for="item in menuList" :key="item.icon" >
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title >{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        
      </v-navigation-drawer>
      

</template>

<script>
  export default {
    data () {
      return {
        menuList: [
          {icon: 'mdi-folder', title: '정책관리'},
          {icon: 'mdi-shield-check', title: '보안감사'},
          {icon: 'mdi-hammer-wrench', title: '관리도구'},
          {icon: 'mdi-clipboard-account', title: '관리자정책'},
          {icon: 'mdi-cog-outline', title: '환경설정'}
        ]
      }
    },
  }
</script>
