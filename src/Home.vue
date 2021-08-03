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
          <v-list-item link v-for="item in navs" :key="item.title" >
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
        <div style="color:#0575F3;font-size:14px;padding-bottom:10px;">홈 <span class="nav-divider">></span> 모든 사용자 <span class="nav-divider">></span> myeongseok.seo <span class="nav-divider">></span>  암호화 정책</div>

        <div class="softcamp-blade-title-content">
          <span class="softcamp-blade-header-icon"><v-icon x-large>mdi-account</v-icon></span>                
          <div class="softcamp-blade-title">
            <div class="softcamp-blade-title-toprow">
              <h2 class="softcamp-blade-title-titleText">myeongseok.seo <span class="softcamp-font-regular"> | 기본암호화 정책</span></h2>
            </div>
          </div>
        </div>

        <!-- <span><v-icon x-large>mdi-account</v-icon></span><span style="font-size:1.6rem;font-weight:bold;"> USER1</span> -->
        <v-divider></v-divider>

        <!-- 메뉴 리스트 -->
        
        <div style="display: table; ">
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
        <div style="width: calc(100vw - 300px); display: table-cell">
          <v-row style="border-bottom: 1px solid #ccc;">
             <v-col cols="1" style="padding: 0;">
                  <v-btn text width="100%" style="display:block" v-if="disabledBtn" @click="snackbar = true;disabledBtn = false" ><v-icon left>mdi-pencil</v-icon>수정</v-btn>
                  <v-btn text width="100%" style="display:block" v-else disabled ><v-icon left>mdi-pencil</v-icon>수정</v-btn>
                  <v-snackbar v-model="snackbar" dark color="#333">저장되었습니다.
                    <template v-slot:action="{ attrs }"><v-btn color="#47B8F5" text v-bind="attrs" @click="snackbar = false" >닫기</v-btn></template>
                  </v-snackbar>
                </v-col>
                <v-col cols="1" style="padding: 0">
                  <v-btn text width="100%" style="display:block" v-if="disabledBtn" @click="disabledBtn = false;select=false;"><v-icon left>mdi-close</v-icon>취소</v-btn>
                  <v-btn text width="100%" style="display:block" v-else disabled><v-icon left>mdi-close</v-icon>취소</v-btn>
                </v-col>
            
          </v-row>
          <!-- 1번째 줄 -->
          <v-row class="contents_layout">
            <v-col cols="6" >
              <div class="contents_title">암호화 시점</div>
              <div class="contents_comment">
                <v-tooltip bottom :open-on-hover="false">
                <!-- <template v-slot:activator="{ on, attrs }">암호화 시점<v-icon  color="#47B8F5" v-bind="attrs" v-on="on" right>mdi-alert-circle-outline</v-icon></template> -->
                <template #activator="{ on }">보안문서 생성시 암호화 시점을 설정 할 수 있습니다.<v-icon  color="gray" @click="on.click" style="" right>mdi-alert-circle-outline</v-icon></template>
                  <ul class="contents_comment-ul">
                    <li>문서편집기 저장 시 암호화는 MS Office 계열의 어플리케이션 (예: MS Word, MS PowerPoint, MS Excel)만 지원합니다.</li>
                    <li>여타 어플리케이션은 문서 저장 시에 암호화 여부를 묻는 지 않고, 문서편집기 종료 시에만 암호화 여부를 묻습니다.</li>
                  </ul>
              </v-tooltip>
                
                </div>
              
              <v-select
                :items="selectList"
                v-model="select" 
                item-text="text"
                item-value="value"
                dense
                hide-details
                class="v-select-style"
                
              ></v-select>
            </v-col>
            <v-col  cols="6" >
              <div class="contents_title">단순 암호화 사용</div>
              <div class="contents_comment">
                <ul class="contents_comment-ul">
                  <li>문서보안에서 지원하지 않는 확장자를 암호화 합니다.</li>
                  <li>DSD 확장자로 암호화 되며, 접근대상자에 포함된 사용자가 해당 파일 열람 시 복호화 됩니다.</li>
                 </ul>
              </div>
              <v-switch
                v-model="switch1" 
                inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch1 === true"><span class="enable-font">사용</span></template>
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
                <template v-slot:label v-if="switch2 === true"><span class="enable-font">사용</span></template>
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
              <div class="contents_title">범주 문서 열람시 생성자 권한 무시</div>
              <div class="contents_comment">
                <ul class="contents_comment-ul">
                  <li>사용하면 범주 문서(범주 보안문서) 열람시 생성자 권한을 무시하고, 범주 정책의 권한을 따릅니다.</li>
                </ul>
              </div>
              <v-switch
                v-model="switch3"
                inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch3 === true"><span class="enable-font">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>  
            </v-col>
            <v-col  cols="6" >
              <div class="contents_title">개인/그룹 문서 열람시 생성자 권한 적용 </div>
              <div class="contents_comment">
                <ul class="contents_comment-ul">
                  <li>사용하면 개인/그룹 문서 오픈 시 생성자 권한을 적용합니다</li>
                  <li>보안문서 생성 시 생성자 권한과 현재 생성자 권한 중 로그인 생성자 권한으로 생성자 권한 적용 여부</li>
                  <li>예: 작년에 생성자 권한에 해제 권한이 없고 현재는 해재 권한이 있을 경우 현재의 권한으로 해제 하려면 체크</li>
                </ul>
              </div>
              <v-switch
                v-model="switch4"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch4 === true"><span class="enable-font">사용</span></template>
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
            <v-col cols="6" style="margin:0; padding:2px">
              <div class="contents_sub-title">읽기</div>
              <!-- <div class="contents_comment">test</div> -->
              <v-switch
                v-model="switch5"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch5 === true"><span class="enable-font">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px">
              <div class="contents_sub-title">편집</div>
              <v-switch
                v-model="switch6"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch6 === true"><span class="enable-font">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px" >
              <div class="contents_sub-title">해제</div>
              <v-switch
                v-model="switch7"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch7 === true"><span class="enable-font">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
            <v-col cols="6" style="margin:0; padding:2px" >
              <div class="contents_sub-title">반출</div>
              <v-switch
                v-model="switch8"
                 inset 
                hide-details                
                class="v-switch-style"
              >
                <template v-slot:label v-if="switch8 === true"><span class="enable-font">사용</span></template>
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
                <template v-slot:label v-if="switch10 === true"><span class="enable-font">사용</span></template>
                <template v-slot:label v-else><span>미사용</span></template>
              </v-switch>
            </v-col>
          </v-row>
          <!-- 생성자 권한 끝 -->

          <v-divider></v-divider>
          
          <v-row>
                <v-col style="padding-top:30px;" >
                    <v-card>
                      <v-list-item>
                        <v-list-item-content style="font-size:1.4rem; font-weight:bold ">
                          <v-row align="center" justify="space-around">
                            <v-col cols="8" class="contents_title">암호화 가능 범주</v-col>
                            <v-col cols="4" align="right" justify="space-around">  
                              <v-dialog v-model="dialog"  max-width="800" >
                                <template v-slot:activator="{ on, attrs }"><v-btn text v-bind="attrs" v-on="on" ><v-icon left>mdi-pencil</v-icon>추가</v-btn></template>
                                <v-card style="overflow-x: hidden;min-height: 500px">
                                  <v-list-item>
                                    <v-list-item-content style="font-size:1.4rem; ">
                                        <v-row align="center" justify="space-around" >
                                          <v-col cols="12" class="contents_title">
                                            <div class="contents_title" style="padding:5px">범주 선택 </div>
                                              <div class="contents_comment" style="padding:5px">
                                                <ul class="contents_comment-ul">
                                                  <li>보안문서 생성 시 선택 가능한 범주를 설정하십시오.<br> 아무 것도 설정하지 않으면 암호화 시 모든 범주를 선택할 수 있습니다.</li>
                                                </ul>
                                              </div>
                                          </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  <v-list-item>
                                    <v-row >
                                      <v-col cols="3" style="padding: 0;">
                                        <v-btn text  @click="saveRange()" style="margin-right: 10px" v-if="rangeSelectedItem || rangeSelectedItem === 0"><v-icon left>mdi-pencil</v-icon>확인</v-btn>
                                          <v-btn text  disabled style="margin-right: 10px" v-else><v-icon left>mdi-pencil</v-icon>확인</v-btn>
                                           <v-btn text  @click="cancleRange()" v-if="rangeSelectedItem || rangeSelectedItem === 0"><v-icon left>mdi-close</v-icon>취소</v-btn>
                                          <v-btn text  disabled v-else><v-icon left>mdi-close</v-icon>취소</v-btn>
                                      </v-col>
                                    </v-row>
                                  </v-list-item>
                                   <v-divider></v-divider>
                                  <v-list-item style="background-color:#F9FBFD">
                                      <v-row align="center" justify="space-around">
                                        <v-col cols="6">범주명</v-col>
                                        <v-col cols="6">범주ID</v-col>
                                      </v-row>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  <v-list-item-group v-model="rangeSelectedItem">
                                  <div v-for="item in rangeList" :key="item.range">
                                    <v-list-item>
                                        <v-row align="center">               
                                          <v-col cols="6">{{item.range}}</v-col>                           
                                          <v-col cols="6">{{item.no}}</v-col>
                                        </v-row>
                                    </v-list-item>
                                    <v-divider></v-divider> 
                                  </div>
                                  </v-list-item-group>
                                  <v-card-actions></v-card-actions>  
                                </v-card>
                              </v-dialog>
                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>

                      <v-list-item style="background-color:#F9FBFD">
                          <v-row align="center" justify="space-around">
                            <v-col cols="4">범주명</v-col>
                            <v-col cols="4">범주ID</v-col>
                            <v-col cols="4" align="right">삭제</v-col>
                          </v-row>
                      </v-list-item>
                      <v-divider></v-divider>

                      <template v-if="possibleList.length > 0">
                        <div v-for="(item,index) in possibleList" :key="item.no">
                        <v-list-item>
                          <v-list-item-content>
                            <v-row>
                              <v-col cols="4">{{item.range}}</v-col>
                              <v-col cols="4">{{item.no}}</v-col>
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
                <v-col style="padding-top:30px;">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content style="font-size:1.4rem; font-weight:bold">
                          <v-row align="center" justify="space-around" >
                            <v-col cols="8" class="contents_title">접근대상 지정 그룹</v-col>
                            <v-col cols="4" align="right" justify="space-around">
                              <!-- <v-dialog v-model="dialog2" persistent max-width="800">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn color="success" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>edit</v-btn>
                                </template>
                                <v-card>
                                  <v-card-title class="text-h5">범주 추가</v-card-title>
                                    <v-card-text>해당 사용자 및 그룹이 보안문서 생성 시 접근 권한을 지정합니다.</v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color=" darken-1" text @click="dialog2 = false">아니요</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteAccess(dialog2)">네</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>   -->
                              <v-dialog v-model="dialog2"  max-width="800" >
                                <template v-slot:activator="{ on, attrs }"><v-btn text  v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>추가</v-btn></template>
                                <v-card style="overflow-x: hidden;min-height: 500px">
                                  <v-list-item>
                                    <v-list-item-content style="font-size:1.4rem; ">
                                        <v-row align="center" justify="space-around" >
                                           <v-col cols="12" class="contents_title">
                                            <div class="contents_title" style="padding:5px">그룹 선택 </div>
                                              <div class="contents_comment" style="padding:5px">
                                                <ul class="contents_comment-ul">
                                                  <li>해당 사용자 및 그룹이 보안문서 생성 시 접근 권한을 지정할 수 있는 그룹을 조직도에서 선택하십시오.</li>
                                                </ul>
                                              </div>
                                          </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-divider></v-divider>

                                  <v-list-item>
                                    <v-row>
                                      <v-col cols="3" style="padding: 0;" justify="space-around">
                                        <v-btn text  @click="saveGroup()" style="margin-right: 10px"  v-if="groupSelectedItem || groupSelectedItem === 0"><v-icon left>mdi-pencil</v-icon>확인</v-btn>
                                        <v-btn text  style="margin-right: 10px"  disabled v-else><v-icon left>mdi-pencil</v-icon>확인</v-btn>
                                        <v-btn text  @click="cancleGroup()" v-if="groupSelectedItem || groupSelectedItem === 0"><v-icon left>mdi-close</v-icon>취소</v-btn>
                                        <v-btn text  disabled v-else><v-icon left>mdi-close</v-icon>취소</v-btn>
                                      </v-col>
                                    </v-row>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  
                                  <v-list-item>
                                    <v-row align="center">
                                      <v-col cols="6" offset="2">
                                        <v-text-field prepend-inner-icon="mdi-magnify" dense style="padding-top : 10px" v-model="searchTxt"></v-text-field>
                                      </v-col>
                                      <v-col cols="3">
                                        <v-btn text ><v-icon left>mdi-magnify</v-icon>검색</v-btn>
                                      </v-col>
                                    </v-row>
                                        
                                  </v-list-item>
                                   <v-divider></v-divider>

                                  <v-list-item style="background-color:#F9FBFD">
                                      <v-row align="center" justify="space-around">
                                        <v-col cols="12">그룹명</v-col>
                                      </v-row>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  <v-list-item-group v-model="groupSelectedItem">
                                  <div v-for="item in searchList" :key="item.range">
                                    <v-list-item>
                                        <v-row align="center">                                          
                                          <v-col cols="12">{{item.range}}</v-col>
                                        </v-row>
                                    </v-list-item>
                                    <v-divider></v-divider> 
                                  </div>
                                  </v-list-item-group>
                                  <v-card-actions></v-card-actions>  
                                </v-card>
                              </v-dialog>
                            </v-col>
                          </v-row>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>

                     <v-list-item style="background-color:#F9FBFD">
                          <v-row align="center" justify="space-around">
                            <v-col cols="8">그룹명</v-col>
                            <v-col cols="4" align="right">삭제</v-col>
                          </v-row>
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
          {icon: 'mdi-hammer-wrench', title: '조직 관리'},
          {icon: 'mdi-folder', title: '정책 관리'},
          // {icon: 'mdi-shield-check', title: '보안감사'},
          {icon: 'mdi-hammer-wrench', title: '관리 도구'},
          // {icon: 'mdi-clipboard-account', title: '관리자정책'},
          {icon: 'mdi-cog-outline', title: '환경 설정'}
        ],
        items: [
          {
            action: 'mdi-account',
            title: '기본 정보',
          },
          {
            action: 'mdi-application',
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
            action: 'mdi-book',
            items: [
              { title: '기본암호화 정책' },
              { title: '강제암호화 정책' },
            ],
            title: '암호화 정책',
          },
          {
            action: 'mdi-tag',
            title: '애드인 정책',
          },
          {
            action: 'mdi-shield-account',
            title: 'Custom 정책',
          },
          {
            action: 'mdi-account-star',          
            items: [
              { title: '등급권한'},
              { title: '개인/그룹 권한' },
              { title: '범주 권한' },
            ],
            title: '강제권한',
          },
          {
            action: 'mdi-source-branch',
            title: '하위관리자',
          },
          {
            action: 'mdi-monitor-lock',
            title: 'PC 보안',
          },
          {
            action: 'mdi-card-bulleted-outline',
            title: 'CSLinker 라이선스',
          },
        ],
        group:'',
        selectList: [
          {
            text: '문서편집기 저장시(MS 오피스만 지원)',
            value: '1'
          }, 
          {
            text: '문서편집기 종료시',
            value: '2'
          }
        ],
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
          {no:'0000002', range:'외주'},
          {no:'0000003', range:'임원'},
        ],
        myItems: [
        { title: '내 정보', icon: 'mdi-briefcase-outline' },
        { title: '로그아웃', icon: 'mdi-account-arrow-right-outline' },
      ],
      tooltip1: false,
      basicCryptoItem: [
          {
            title: '암호화 시점', 
            tooltip: '문서가 암호화되는 시점을 설정합니다.<br>문서 편집기의 종료시점을 지원하며 MS 오피스의 경우 저장 시점도 지원합니다.', 
            selectList: [
            {
              text: '문서편집기 저장시(MS 오피스만 지원)',
              value: '1'
            }, 
            {
              text: '문서편집기 종료시',
              value: '2'
            }
          ],
        },
          {title: '작업 종료시 창 표시안함 체크박스', tooltip: '해당 기능을 사용 할 겨우 암호화 문서는 단순 암호화됩니다.', selectList: ['활성화', '비활성화', '감춤', '비활성화(체크)', '비활성화(언체크)', '감춤(체크)', '감춤(언체크)']},
        ],
        authList: [
          { text: '반출', switch: false },
          { text: '해제', switch: false },
          { text: '편집', switch: false },
          { text: '읽기', switch: false },
          { text: '마킹', switch: false },
          { text: '출력', switch: false },
          { text: '권한변경', switch: false },
        ],
        policyList: [
          {title: '단순 암호화 사용', tooltip: '해당 기능을 사용할 경우 암호화 문서는 단순 암호화 됩니다.', switch: false},
          {title: '폴더내 파일 암호화', tooltip: '폴더가 암호화되는 시점을 설정합니다.<br />문서 편집기의 종료시점을 지원하며 MS 오피스의 경우 저장 시점도 지원합니다.', switch: false},
          {title: 'MAC 문서 오픈시 생성자 권한 무시', tooltip: '이 기능을 사용할 경우 MAC문서일 경우 생성자 권한은 무시됩니다.<br />MAC 문서의 권한이 적용됩니다.', switch: false},
          {title: 'DAC 문서 오픈시 생성자 권한 적용', tooltip: '이 기능을 사용할 경우 DAC문서일 경우 생성자 권한은 무시됩니다.<br />DAC 문서의 권한이 적용됩니다.', switch: false}
        ],
        searchList: [
          {range:'보안팀', dialog:false },
          {range:'사업부', dialog:false },
          {range:'연구소', dialog:false },
          {range:'퇴사자부서', dialog:false },
          {range:'MX 사업본부', dialog:false }
        ],  
        dialog: false,
        dialog2: false,
        snackbar: false,
        checkbox: [],
        singleSelect: false,
        rangeSelectedItem:false,
        subListOn: 1,
        listOn: 3,
        disabledBtn: null,
        select: null,
        groupSelectedItem:false,
        searchTxt:null
      }
    },
    watch: {
      select: function () {
        this.disabledBtn = this.select
      },
      searchTxt: function() {
        this.searchList.splice(1, 4);
      }
    },
    methods: {
      deletePossible (index){
        this.possibleList[index].dialog = false
        this.possibleList.splice(index, 1);
      },
      deleteAccess (index){
        this.accessList[index].dialog = false
        this.accessList.splice(index, 1);
      },
      closePossible() {
        this.dialog = false;
      },
      saveRange() {
        // this.snackbar = true;
        this.dialog=false;
        this.possibleList.push(this.rangeList[this.rangeSelectedItem]);
        this.rangeList.splice(this.rangeSelectedItem, 1);
        this.rangeSelectedItem=false;
      },
      cancleRange (){
        this.dialog=false;
        this.rangeSelectedItem=false;
      },
      saveGroup(){
        //this.snackbar = true;
        this.dialog2=false;
        this.accessList.push(this.searchList[this.groupSelectedItem]);
        this.searchList.splice(this.groupSelectedItem, 1);
        this.groupSelectedItem=false;
      },
      cancleGroup (){
        this.dialog2=false;
        this.groupSelectedItem=false;
      },
    }
  }
</script>
<style>
.softcamp-font-regular {
    font-family: az_ea_font,'Segoe UI',az_font,system-ui,-apple-system,Blink범주SystemFont,Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
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
.enable-font {
  color: #000;
  font-weight: bold;
}

</style>