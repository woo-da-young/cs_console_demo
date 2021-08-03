<template>    
  <v-navigation-drawer
    permanent
    expand-on-hover
    app
  > 
    <v-row>
      <v-col>
        <v-list rounded nav>
          <v-list-item-group color="primary" v-model="selectedItem" mandatory >
            <div v-for="(item, i) in items" :key="i">
              <v-list-group v-if="item.items && item.items.length > 0"
                no-action
                mandatory
                :prepend-icon="item.action"
              >
                <template v-slot:activator >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" ></v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="child in item.items"
                  :key="child.title"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="child.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>

              <v-list-item v-else >
                <v-list-item-icon>
                  <v-icon v-text="item.action"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
      <!-- <v-navigation-drawer
        permanent
        expand-on-hover
        app
        style="padding-top:20px;"
        dark
        color="#1976d2"
      >  -->

        <!-- <v-list nav>
          <v-list-item-group mandatory>
            <v-list-item link v-for="item in menuList" :key="item.icon" >
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title >{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->

        
        
      </v-navigation-drawer>
      

</template>

<script>
  export default {
    data () {
      return {
        menuList: [
          {icon: 'mdi-home', title: '홈'},
          {icon: 'mdi-folder', title: '정책관리'},
          {icon: 'mdi-shield-check', title: '보안감사'},
          {icon: 'mdi-hammer-wrench', title: '관리도구'},
          {icon: 'mdi-clipboard-account', title: '관리자정책'},
          {icon: 'mdi-cog-outline', title: '환경설정'}
        ],
        items: [
          {
            action: 'mdi-account-group',
            title: '조직관리',
            items: [
              { title: '모든 사용자' },
              { title: '모든 그룹' },
            ],
          },
          {
            action: 'mdi-book-open-page-variant',
            title: '정책 관리',
            items: [
              { title: '로그 정책' },
              { title: '보안 정책' },
            ],
          },
           {
            action: 'mdi-tools',
            title: '관리 도구',
            items: [
              { title: '추적 및 해독' },
              { title: '로그 관리' },
              { title: '마킹이미지 관리' },
              { title: '직위 관리' },
              { title: '연동시스템 관리' },
              { title: '라이센스 관리' },
              { title: '애드인 관리' },
              { title: '커스텀정책 관리' },
            ],
          },
          {
            action: 'mdi-cog',
            title: '환경설정',
            items: [
              { title: '서버 프로파일' },
            ]
          },
        ],
      }
    },
  }
</script>
