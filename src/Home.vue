<template>

  <v-app class="app-main softcamp-font-regulars">
    
    <!-- 상단바 -->
    <v-app-bar
      app
      dense
      
      fixed
      color="#0575F3"
      height="40px"
    >
      <v-icon @click.stop="drawer = !drawer" color="#fff">mdi-format-list-bulleted</v-icon>
      <div class="logo-sheildd-flex align-center" >
        <span style="padding-left:10px;color:#fff">SHIELD DRM 웹콘솔</span>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        style="padding-top:15px;"            
        dense
        background-color="#B3D6F2"
      ></v-text-field>
      <v-btn
        text
        color="#ccc"
      >
        <v-icon size="35">mdi-account</v-icon>
      </v-btn> 
    </v-app-bar>

    <!-- 네비게이션 서랍바 -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in navs" :key="item.text">
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>



    <v-main>
      <!-- 사이트맵?? -->
      <v-container fluid >
        <div style="color:#0575F3;font-size:14px;padding-bottom:10px;">홈 <span class="nav-divider">></span> user1 <span class="nav-divider">></span>  암호화 정책</div>

        <div class="softcamp-blade-title-content">
          <span class="softcamp-blade-header-icon"><v-icon x-large>mdi-account</v-icon></span>                
          <div class="softcamp-blade-title">
            <div class="softcamp-blade-title-toprow">
              <h2 class="softcamp-blade-title-titleText">USER1 <span class="softcamp-font-regular"> | 기본암호화 정책</span></h2>
            </div>
          </div>
        </div>

        <!-- <span><v-icon x-large>mdi-account</v-icon></span><span style="font-size:1.6rem;font-weight:bold;"> USER1</span> -->
        <v-divider></v-divider>

        <!-- 메뉴 리스트 -->
        <v-card
          width="300px"
          style="float:left; background-color:#F9FBFD"
          flat
          height="100vh"
          background-color="#F9FBFD"
        >
          <v-list height="100vh;" color="#F9FBFD">
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
              style="background-color:#F9FBFD;"
            >
              <template v-slot:activator >
                <v-list-item-content >
                  <v-list-item-title v-text="item.title" ></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                style="background-color:#F9FBFD;"
                v-for="child in item.items"
                :key="child.title"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
        
        <!-- 메인 화면 -->
        <div style="width:(100% - 300px);">
          
          <v-row>
            <v-col cols="12" style="margin-top:10px; ">
              <!-- <v-divider style="height:5px"></v-divider> -->
              <v-row style="border-bottom: 1px solid #ccc;">
                <v-col cols="2" style="padding: 0">
                  <v-icon>mdi-content-save-all</v-icon>
                  <v-btn text style="padding: 0">적용</v-btn>
                </v-col>
                <v-col cols="2" style="padding: 0">
                  <v-icon>mdi-close</v-icon>
                  <v-btn text >취소</v-btn>
                </v-col>
              </v-row>
            </v-col>
            
          </v-row>
          <!-- 1번째 줄 -->
          <v-row class="contents_layout">
            <v-col cols="6" >
              <div class="contents_title">암호화 시점</div>
              <div class="contents_comment">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-select
                :items="selectList"
                dense
                hide-details
                class="v-select-style"
              ></v-select>
            </v-col>
            <v-col  cols="6" >
              <div class="contents_title">단순 암호화 사용</div>
              <div class="contents_comment">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-switch
                v-model="switch1"
                inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch1 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>         
            </v-col>
            <!-- 2 -->
            <v-col cols="6" >
              <div class="contents_title">폴더내 파일 암호화</div>
              <div class="contents_comment">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-switch
                v-model="switch2"
                inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch2 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>  
            </v-col>
            <v-col  cols="6" >
              <div class="contents_title">작업 종료시 창 표시안함 체크박스</div>
              <div class="contents_comment">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-select
                :items="selectList2"
                dense
                hide-details
                class="v-select-style"
              ></v-select>       
            </v-col>
            <!-- 3 -->
            <v-col cols="6" >
              <div class="contents_title">MAC 문서 오픈시 생성자 권한 무시</div>
              <div class="contents_comment">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-switch
                v-model="switch3"
                inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch3 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>  
            </v-col>
            <v-col  cols="6" >
              <div class="contents_title">DAC 문서 오픈시 생성자 권한 적용 </div>
              <div class="contents_comment">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-switch
                v-model="switch4"
                inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch4 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>     
            </v-col>

          </v-row>


          <v-divider ></v-divider>

          <!-- 1번째 줄 -->
          <!--v-row style="padding-top:20px;">
            <v-col v-for="n in 2" :key="n" cols="6" >
              <div style="font-size: 1.2rem; font-weight: bold;padding-bottom:5px;">암호화 시점</div>
              <div style="font-size: 0.8rem; padding-bottom:5px;">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-select
                :items="selectList"
                dense
                hide-details
                outlined
                style="width:50%; padding-bottom: 20px;"
              ></v-select>
            </v-col>
          </v-row>
          <v-divider ></v-divider-->

          <!-- 3번째 줄 -->
          <!--v-row style="padding-top:20px;">
            <v-col v-for="n in 2" :key="n" cols="6" >
              <div style="font-size: 1.2rem; font-weight: bold;padding-bottom:5px;">암호화 시점</div>
              <div style="font-size: 0.8rem; padding-bottom:5px;">암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.</div>
              <v-select
                :items="selectList"
                dense
                hide-details
                filled
                rounded
                style="width:50%; padding-bottom: 20px; background-color:white;"
              ></v-select>
            </v-col>
          </v-row>
          <v-divider ></v-divider-->

          
          

        </div>

          
      </v-container>    
    </v-main>  

  </v-app>
</template>

<script>




  export default {
    data () {
      return {
        drawer: false,
        mini: true,
        selectedItem: 1,
        navs: [
          { text: '정책관리', icon: 'mdi-folder' },
          { text: '보안감사', icon: 'mdi-shield-check' },
          { text: '관리도구', icon: 'mdi-hammer-wrench' },
          { text: '관리자정책', icon: 'mdi-clipboard-account' },
          { text: '환경설정', icon: 'mdi-cog-outline' },
        ],
        items: [
        {
          action: 'mdi-ticket',
          title: '기본정보',
        },
        {
          action: 'mdi-silverware-fork-knife',          
          items: [
            { title: '등급권한' },
            { title: 'DAC 권한' },
            { title: 'MAC 권한' },
          ],
          title: '강제권한',
        },
        {
          action: 'mdi-school',
          items: [
            { title: '기본암호화 정책' },
            { title: '강제암호화 정책' },
          ],
          title: '암호화 정책',
        },
        {
          action: 'mdi-run',
          items: [
            { title: '로그인' },
            { title: '패스워드' },
            { title: '업그레이드' },
            { title: 'APP제어' },
            { title: '프린트마킹' },
            { title: '외부전송' },
            { title: '기타' },
          ],
          title: '프로파일',
        },
        {
          action: 'mdi-content-cut',
          title: '하위관리자',
        },
        {
          action: 'mdi-tag',
          title: 'PC 보안',
        },
        {
          action: 'mdi-tag',
          title: '라이선스 정책',
        },
        {
          action: 'mdi-tag',
          title: '애드인 정책',
        },
        {
          action: 'mdi-tag',
          title: 'Custom 정책',
        },
      ],
      group:'',
      selectList: ['문서편집기 저장시(MS 오피스만 지원)', '문서편집기 종료시'],
      selectList2: ['활성화', '비활성화', '감춤', '비활성화(체크)', '비활성화(언체크)', '감춤(체크)', '감춤(언체크)'],
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false
      }
    },
  }
</script>
<style>
.softcamp-font-regular {
    font-family: az_ea_font,'Segoe UI',az_font,system-ui,-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-weight: 400;
}
.app-main {
  background-color: #F9FBFD;
}
.nav-divider{
  color:gray;
}

/* .fxs-blade-title-content */
.softcamp-blade-title-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 8px 20px;  
}

.softcamp-blade-header-icon {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 10px;
    position: relative;
}

.softcamp-blade-title {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
}

.softcamp-blade-title-toprow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.softcamp-blade-title-titleText {
    margin: 0;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
}

.softcamp-blade-title-titleText {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    margin-right: 16px;
}

.contents_title {
  font-size: 1.2rem; font-weight: bold;padding-bottom:5px;
}
.contents_comment {
  font-size: 0.8rem; padding-bottom:5px;
}
.contents_layout {
  padding-top:20px; padding-left:20px;
  padding-bottom:10px;
}
.v-select-style {
  width:50%; padding-bottom: 20px;
  margin-top: 5px !important;
}
.v-switch-style {
  padding:10px 10px;
  margin-top: 5px !important;
}
.v-main__wrap{
  background-color: #F9FBFD;
}

</style>