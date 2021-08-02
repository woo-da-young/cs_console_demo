<template>

  <v-app class="app-main softcamp-font-regulars">
    
    <!-- 상단바 -->
    <v-app-bar
      app
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
      <!-- <v-btn
        text
        color="#ccc"
      >
        <v-icon size="35">mdi-account</v-icon>
      </v-btn>  -->
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
          <v-icon size="35">mdi-account</v-icon>
        </v-btn> 
        </template>

        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        > 

          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
            <v-list-item-content>
              <div class="text-overline mb-4">
                OVERLINE
              </div>
              <v-list-item-title class="text-h5 mb-1">
                Headline 5
              </v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      <!-- <v-list dense color="#fff">
        <v-list-item v-for="(item, i) in myItems" :key="i" style="width: 200px; back;background-color: #fff" color="#fff">
          <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-menu>
    </v-app-bar>

    <!-- 네비게이션 서랍바 -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list nav >
        <v-list-item-group mandatory color="primary">
          <v-list-item link v-for="item in navs" :key="item.icon" >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title >{{item.title}}</v-list-item-title>
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
        
        <div style="display: table">
          <v-card
            width="300px"
            style="background-color:#F9FBFD;display: table-cell"
            flat
            background-color="#F9FBFD"
          >
            <v-list color="#F9FBFD">
              <v-list-item-group color="primary" v-model="listOn" mandatory>
                <div v-for="(item, i) in items" :key="i">
                  <v-list-group v-if="item.items && item.items.length > 0"
                    :prepend-icon="item.action"
                    no-action
                    style="background-color:#F9FBFD;"
                  >
                    <template v-slot:activator >
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title" ></v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <v-list-item
                      style="background-color:#F9FBFD;"
                      v-for="child in item.items"
                      :key="child.title"
                      v-model="child.active"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="child.title"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>

                  <v-list-item  v-else >
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
          </v-card>
        



        <!-- 메인 화면 -->
        <div style="width:(100% - 300px);">
          <v-row>
            <v-col cols="12" style="margin-top:10px;">
              <!-- <v-divider style="height:5px"></v-divider> -->
              <v-row style="border-bottom: 1px solid #ccc;">
                <v-col cols="1" style="padding: 0;">
                  <v-btn text width="100%" style="display:block" ><v-icon left>mdi-pencil</v-icon>수정</v-btn>
                </v-col>
                <v-col cols="1" style="padding: 0">
                  <v-btn text width="100%" style="display:block" ><v-icon left>mdi-close</v-icon>취소</v-btn>
                </v-col>
              </v-row>
            </v-col>
            
          </v-row>
          <!-- 1번째 줄 -->
          <v-row class="contents_layout">
            <v-col cols="6" >
              <!-- <div class="contents_title">암호화 시점</div>
              <div class="contents_comment">보안문서 생성시 암호화 시점을 설정 할 수 있습니다.</div> -->
              <v-tooltip bottom :open-on-hover="false">
                <!-- <template v-slot:activator="{ on, attrs }">암호화 시점<v-icon  color="#47B8F5" v-bind="attrs" v-on="on" right>mdi-alert-circle-outline</v-icon></template> -->
                <template #activator="{ on }">암호화 시점<v-icon  color="#47B8F5" @click="on.click" right>mdi-alert-circle-outline</v-icon></template>
                <span >보안문서 생성시 암호화 시점을 설정 할 수 있습니다.</span>
              </v-tooltip>
              <v-select
                :items="selectList"
                dense
                hide-details
                class="v-select-style"
              ></v-select>
            </v-col>
            <v-col  cols="6" >
              <div class="contents_title">단순 암호화 사용</div>
              <div class="contents_comment">단순 암호화 기능의 사용 여부를 설정 할 수 있습니다.</div>
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
          </v-row>

          <v-row class="contents_layout">
            <!-- 2 -->
            <v-col cols="6" >
              <div class="contents_title">폴더내 파일 암호화</div>
              <div class="contents_comment">폴더 내의 파일을 일괄적으로 암호화하는 기능의 사용 여부를 설정합니다. </div>
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
              <div class="contents_comment">작업 종료시 암호화를 진행할 지를 묻는 창의 하단의 '다음부터 이 창을 표시하지 않음' 문구 체크 및 활성화 여부를 선택합니다.</div>
              <v-select
                :items="selectList2"
                dense
                hide-details
                class="v-select-style"
              ></v-select>       
            </v-col>
          </v-row>

          <v-row class="contents_layout">
            <!-- 3 -->
            <v-col cols="6" >
              <div class="contents_title">MAC 문서 오픈시 생성자 권한 무시</div>
              <div class="contents_comment">
                <ul class="contents_comment-ul">
                  <li>사용하면 MAC 문서(범주 보안문서) 오픈 시 생성자 권한을 무시하고, 범주 정책의 권한을 따릅니다.</li>
                </ul>
              </div>
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
              <div class="contents_comment">
                <ul class="contents_comment-ul">
                  <li>사용하면 DAC 문서 오픈 시 생성자 권한을 적용합니다</li>
                </ul>
                암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.
                암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.
                암호화 시점을 지정합니다.<br>문서 편집기의 종료시점을 지원하여 MS 오피스의 경우 저장 시점도 지원합니다.
              </div>
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
          <v-divider></v-divider>
          <!-- 생성자 권한 시작 -->
          <v-row class="contents_layout">
            <v-col cols="12" >
              <div class="contents_title">생성자 권한</div>
              <div class="contents_comment">
                <ul class="contents_comment-ul">
                  <li>문서 생성자의 보안문서 사용 권한을 설정합니다. 읽기, 편집, 해제, 반출, 출력, 마킹, 권한변경 등의 권한을 설정할 수 있습니다. </li>
                  <li>참고: 일반 문서의 경우, 반출 권한과 상관없이 외부 전송용 보안 파일을 생성할 수 있습니다. </li>
                </ul>
              </div>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px" class="contents_sub-title-border">
              <div class="contents_sub-title">읽기</div>
              <v-switch
                v-model="switch5"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch5 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px" class="contents_sub-title-border">
              <div class="contents_sub-title">편집</div>
              <v-switch
                v-model="switch6"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch6 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px"  class="contents_sub-title-border">
              <div class="contents_sub-title">해제</div>
              <v-switch
                v-model="switch7"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch7 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px"  class="contents_sub-title-border">
              <div class="contents_sub-title">반출</div>
              <v-switch
                v-model="switch8"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch8 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px">
              <div class="contents_sub-title">마킹</div>
              <v-switch
                v-model="switch9"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch9 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px">
              <div class="contents_sub-title">권한변경</div>
              <v-switch
                v-model="switch10"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch10 === true"><span style="color: #000">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
          </v-row>
          <!-- 생성자 권한 끝 -->

          <v-divider></v-divider>
          <v-row class="contents_layout">
            <v-col cols="6" >
            <!-- <v-container> -->
                    <v-card style="background-color:#F9FBFD" >
                      <v-list-item>
                        <v-list-item-content style="font-size:1.4rem; ">
                            <v-row
                              align="center"
                              justify="space-around"
                            >
                              <v-col cols="8">
                                <div class="contents_title">암호화 가능 범주</div>
                                <div class="contents_comment">
                                  <ul class="contents_comment-ul">
                                    <li>사용자의 범주 보안문서 생성 시 선택 가능한 범주 목록을 지정 할 수 있습니다. </li>
                                  </ul>
                                </div>
                              </v-col>
                              <v-col cols="4" align="right" justify="space-around">  
                                <v-dialog v-model="dialog" persistent max-width="800">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>Edit</v-btn>
                                  </template>
                                  <v-card >
                                    <v-card-title class="text-h5">범주 선택</v-card-title>
                                      <v-card-text>
                                        보안문서 생성 시 선택 가능한 범주를 설정하십시오.<br>
                                        아무 것도 설정하지 않으면 암호화 시 모든 범주를 선택할 수 있습니다. 
                                        <v-card style="margin-top: 20px;" flat>
                                          <v-simple-table dense>
                                            <template v-slot:default>
                                              <thead> 
                                                <tr>
                                                  <th class="text-left"><v-checkbox color="primary" value="red" hide-details dense></v-checkbox></th>
                                                  <th class="text-left">범주ID</th>
                                                  <th class="text-left">범주명</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr v-for="item in rangeList" :key="item.no">
                                                  <td><v-checkbox color="primary" :value="item.no" hide-details dense></v-checkbox></td>
                                                  <td>{{ item.no }}</td>
                                                  <td>{{ item.range }}</td>
                                                </tr>
                                              </tbody>
                                            </template>
                                          </v-simple-table>
                                        </v-card>  
                                      </v-card-text>
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn color=" darken-1" text @click="dialog = false">취소</v-btn>
                                      <v-btn color="blue darken-1" text @click="deletePossible(dialog)">추가</v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-dialog>
                              </v-col>
                            </v-row>
                        </v-list-item-content>
                      </v-list-item>

                      <v-divider></v-divider>

                      <template v-if="possibleList.length > 0">
                        <div v-for="(item,index) in possibleList" :key="item.no">
                        <v-list-item>
                          <v-list-item-content>
                            <v-row>
                              <v-col cols="4">{{item.no}}</v-col>
                              <v-col cols="4">{{item.range}}</v-col>
                              <v-col cols="4" align="right">
                                <v-dialog v-model="item.dialog" persistent max-width="500">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red" v-bind="attrs" v-on="on">mdi-delete</v-icon>
                                  </template>
                                  <v-card>
                                    <v-card-title class="text-h5">삭제하시겠습니까?</v-card-title>
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn color=" darken-1" text @click="item.dialog = false">아니요</v-btn>
                                      <v-btn color="blue darken-1" text @click="deletePossible(index)">네</v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-dialog>
                              </v-col>
                            </v-row>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                      </div>
                      </template>

                      <v-list-item v-if="possibleList.length === 0">
                          <v-list-item-content>
                            <v-row>
                              <v-col cols="12" align="center">내용이 없습니다</v-col>
                            </v-row>
                          </v-list-item-content>
                      </v-list-item>
                  
                    </v-card> 

            </v-col>
            <v-col cols="6" >
              <v-card style="background-color:#F9FBFD">
                <v-list-item>
                  <v-list-item-content style="font-size:1.4rem; ">
                      <v-row align="center" justify="space-around" >
                        <v-col cols="8">
                            <div class="contents_title">접근대상 지정 그룹</div>
                            <div class="contents_comment">
                              <ul class="contents_comment-ul">
                                <li>사용자가 보안문서 생성시 접근권한을 지정할 수 있도록 조직의 범위를 설정할 수 있습니다.</li>
                              </ul>
                            </div>
                          </v-col>
                        <v-col cols="4" align="right" justify="space-around">
                          <v-dialog v-model="dialog2" persistent max-width="800">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn color="primary" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>Edit</v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="text-h5">범주 추가</v-card-title>
                                <v-card-text>
                                  해당 사용자 및 그룹이 보안문서 생성 시 접근 권한을 지정합니다.
                                </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color=" darken-1" text @click="dialog2 = false">아니요</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteAccess(dialog2)">네</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>  
                        </v-col>
                      </v-row>
                  </v-list-item-content>
                </v-list-item>
              <v-divider></v-divider>                    
                  <div v-for="(item,index) in accessList" :key="item.range">
                  <v-list-item>
                    <v-list-item-content>
                      <v-row>
                        <v-col cols="8">{{item.range}}</v-col>
                        <v-col cols="4" align="right">
                          <v-dialog v-model="item.dialog" persistent max-width="500">
                            <template v-slot:activator="{ on, attrs }">
                              <v-icon color="red" v-bind="attrs" v-on="on">mdi-delete</v-icon>
                            </template>
                            <v-card>
                              <v-card-title class="text-h5">삭제하시겠습니까?</v-card-title>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color=" darken-1" text @click="item.dialog = false">아니요</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteAccess(index)">네</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
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
          {icon: 'mdi-home', title: '홈'},
          {icon: 'mdi-folder', title: '정책관리'},
          {icon: 'mdi-shield-check', title: '보안감사'},
          {icon: 'mdi-hammer-wrench', title: '관리도구'},
          {icon: 'mdi-clipboard-account', title: '관리자정책'},
          {icon: 'mdi-cog-outline', title: '환경설정'}
        ],
        items: [
        {
          action: 'mdi-ticket',
          title: '기본정보',
        },
        {
          action: 'mdi-silverware-fork-knife',          
          items: [
            { title: '등급권한'},
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
        switch4:false,
        switch5:false,
        switch6:false,
        switch7:false,
        switch8:false,
        switch9:false,
        switch10:false,
        possibleList: [
          {no:'0000001', range:'임직원', dialog:false },
        ],  
        accessList: [
          {range:'SECURITY DAMAIN', dialog:false },
          {range:'SOFT CAMP', dialog:false }
        ],  
        rangeList: [
          {no:'0000001', range:'임직원'},
          {no:'0000002', range:'외주'},
          {no:'0000003', range:'임원'},
        ],
        myItems: [
        { title: '내 정보', icon: 'mdi-briefcase-outline' },
        { title: '로그아웃', icon: 'mdi-account-arrow-right-outline' },
      ],
      dialog: false,
      dialog2 : false,
      listOn: 1,
      subListOn: 1,
      tooltip1: false
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
  color:#95aac9!important;
}
.contents_layout {
  padding-top:20px; padding-left:20px;
  padding-bottom:20px;
}
.v-select-style {
  width:50%; padding-bottom: 20px;
  margin-top: 5px !important;
}
.v-switch-style {
  padding:10px 10px;
  margin-top: 10px !important;
}
.v-main__wrap{
  background-color: #F9FBFD;
}
.contents_comment-ul{
  list-style: none;
  padding-left: 0px !important;
}
.contents_sub-title{
 padding-left: 10px;
 font-weight:bold;
}
.contents_sub-title-border{
  border-bottom:1px solid #95aac9;
}
.margin-padding-zero{
  margin: 0;
  padding: 0;
}

</style>