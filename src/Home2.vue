<template>
  <v-app >
    <top-nav/>
    <left-nav/>
    <v-main>
      <div style="padding: 10px">
        <v-row><v-col style="color:#9AADD1;font-size:0.8rem;padding-bottom:10px;">홈 > user1 > 암호화 정책</v-col></v-row>
        <v-row><v-col><span><v-icon x-large>mdi-account</v-icon></span><span style="font-size:1.6rem;font-weight:bold;"> USER1</span></v-col></v-row>
        <v-divider></v-divider>
          
        <v-row style="padding-top: 10px;">
          <v-col  cols="2">
             <v-list color="#F9FBFD" rounded nav>
              <v-list-item-group color="primary" v-model="selectedItem" mandatory >
                <div v-for="(item, i) in items" :key="i">
                  <v-list-group v-if="item.items && item.items.length > 0"
                    no-action
                    mandatory
                    :prepend-icon="item.action"
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
          <v-divider vertical></v-divider>

          <v-col cols="10" style="padding:30px;">
            <v-card class="mx-auto">
              <v-list-item>
                <v-list-item-content style="font-size:1.4rem; font-weight:bold">                                          
                  <v-row align="center" justify="space-around">
                    <v-col>기본 암호화 정책</v-col>
                    <v-col align="right" justify="space-around">  
                      <v-btn color="primary" @click="snackbar = true;disabledBtn = false" v-if="disabledBtn"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                      <v-btn color="primary" @click="snackbar = true;disabledBtn = false" disabled v-if="!disabledBtn"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                        <v-snackbar v-model="snackbar" dark color="#333">저장되었습니다.
                          <template v-slot:action="{ attrs }"><v-btn color="#47B8F5" text v-bind="attrs" @click="snackbar = false" >닫기</v-btn></template>
                        </v-snackbar>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item v-for="(item,index) in basicCryptoItem" :key="item.title">
                  <v-list-item-content>
                    <v-row align="center" justify="space-around" >
                      <v-col cols="6">
                        <v-list-item-title style="font-size:1rem" >
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">{{item.title}}<v-icon  color="#47B8F5" v-bind="attrs" v-on="on" right style="padding-bottom:3px;">mdi-alert-circle-outline</v-icon></template>
                            <span v-html="item.tooltip"></span>
                          </v-tooltip>
                        </v-list-item-title>
                      </v-col>
                      <v-col cols="6">
                        <v-select v-if="index === 0" :items="item.selectList" item-text="text" item-value="value" v-model="select" dense hide-details style="padding:0px 10px; "></v-select>
                        <v-select v-else :items="item.selectList" item-text="text" item-value="value" dense hide-details style="padding:0px 10px; "></v-select>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item v-for="item in policyList" :key="item.title">
                  <v-list-item-content>
                    <v-row align="center"  justify="space-around">
                      <v-col cols="6">
                        <v-list-item-title style="font-size:1rem"><span>{{item.title}}</span>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" align="center" style="margin:0 auto"><v-icon color="#47B8F5" algin="center" right style="padding-bottom:3px;">mdi-alert-circle-outline</v-icon></span>
                            </template>
                            <span v-html="item.tooltip"></span>
                          </v-tooltip>
                        </v-list-item-title>
                      </v-col>
                      <v-col cols="6" >
                        <v-switch v-model="item.switch" inset  hide-details style="padding:0px 10px; margin-top: 8px;">
                          <template v-slot:label v-if="item.switch === true"><span style="color: #000">사용</span></template>
                          <template v-slot:label v-else><span>미사용</span></template>
                        </v-switch>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                      <v-row >
                        <v-col cols="6">
                            <v-list-item-title style="font-size:1rem" ><span>생성자 권한</span>
                              <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <span v-bind="attrs" v-on="on" align="center" style="margin:0 auto"><v-icon color="#47B8F5" algin="center" right style="padding-bottom:2px;">mdi-alert-circle-outline</v-icon></span>
                              </template>
                              <span>문서 생성자의 보안문서 사용 권한을 설정합니다. 읽기, 편집, 해제, 반출, 출력, 마킹, 권한변경 등의 권한을 설정할 수 있습니다.<br>참고: 일반 문서의 경우, 반출 권한과 상관없이 외부 전송용 보안 파일을 생성할 수 있습니다.</span>
                            </v-tooltip>
                          </v-list-item-title>
                        </v-col>
                        <v-col cols="6" style="padding-left: 10px">
                          <v-row align="center">
                            <v-col cols="6" v-for="item in authList" :key="item.text"> 
                              <v-switch v-model="item.switch" inset  hide-details style="padding:0px 10px; margin-top: 8px;">
                                <template v-slot:label v-if="item.switch === true">
                                    <span style="color: #1976d2;padding-right: 5px;">{{item.text}}</span><span style="color: #000"> 사용</span>
                                    <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }"><v-icon right color="#47B8F5" v-bind="attrs" v-on="on" style="padding-bottom:3px;" small>mdi-alert-circle-outline</v-icon></template>
                                    <span> {{item.tooltip}}</span>
                                  </v-tooltip>
                                </template>
                                <template v-slot:label v-else><span style="color: #1976d2;padding-right: 5px;">{{item.text}}</span><span> 미사용</span>
                                  <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }"><v-icon right color="#47B8F5" v-bind="attrs" v-on="on" style="padding-bottom:3px;" small>mdi-alert-circle-outline</v-icon></template>
                                    <span> {{item.tooltip}}</span>
                                  </v-tooltip>
                                </template>
                              </v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>

              <v-row>
                <v-col style="padding-top:30px;" >
                    <v-card>
                      <v-list-item>
                        <v-list-item-content style="font-size:1.4rem; font-weight:bold ">
                          <v-row align="center" justify="space-around">
                            <v-col cols="8">
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">암호화 가능 범주<v-icon  color="#47B8F5" v-bind="attrs" v-on="on" right style="padding-bottom:8px;">mdi-alert-circle-outline</v-icon></template>
                                <span>범주 보안 문서 생성 시 사용 가능한 범주 정책</span>
                              </v-tooltip>
                          </v-col>
                            <v-col cols="4" align="right" justify="space-around">  
                              <v-dialog v-model="dialog"  max-width="800" >
                                <template v-slot:activator="{ on, attrs }"><v-btn color="success" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>edit</v-btn></template>
                                <v-card style="overflow-x: hidden;min-height: 500px">
                                  <v-list-item>
                                    <v-list-item-content style="font-size:1.4rem; ">
                                        <v-row align="center" justify="space-around" >
                                          <v-col cols="8" >
                                            <v-tooltip bottom>
                                              <template v-slot:activator="{ on, attrs }">범주 선택<v-icon right color="#47B8F5" v-bind="attrs" v-on="on" style="padding-bottom:4px;">mdi-alert-circle-outline</v-icon></template>
                                              <span> 보안문서 생성 시 선택 가능한 범주를 설정하십시오.<br> 아무 것도 설정하지 않으면 암호화 시 모든 범주를 선택할 수 있습니다.</span>
                                            </v-tooltip>
                                          </v-col>
                                          <v-col cols="4" align="right" justify="space-around">
                                            <v-btn color="primary" @click="saveRange()" v-if="rangeSelectedItem || rangeSelectedItem === 0"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                                            <v-btn color="primary" disabled v-else><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                                            <v-snackbar v-model="snackbar" dark color="#333">
                                              저장되었습니다.
                                              <template v-slot:action="{ attrs }">
                                              <v-btn color="blue" text v-bind="attrs" @click="snackbar=false;dialog=false;">닫기</v-btn>
                                            </template>
                                          </v-snackbar>
                                          </v-col>
                                        </v-row>
                                    </v-list-item-content>
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
                                  <div v-for="item in rangeList" :key="item.no">
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
                            <v-col cols="8">
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">접근대상 지정 그룹<v-icon  color="#47B8F5" v-bind="attrs" v-on="on" right style="padding-bottom:8px;">mdi-alert-circle-outline</v-icon></template>
                                <span>접근 대상자를 지정하여 문서 암호화 시 선택 가능한 그룹</span>
                              </v-tooltip>
                            </v-col>
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
                                <template v-slot:activator="{ on, attrs }"><v-btn color="success" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>edit</v-btn></template>
                                <v-card style="overflow-x: hidden;min-height: 500px">
                                  <v-list-item>
                                    <v-list-item-content style="font-size:1.4rem; ">
                                        <v-row align="center" justify="space-around" >
                                          <v-col cols="8" >
                                            <v-tooltip bottom>
                                              <template v-slot:activator="{ on, attrs }">그룹 선택<v-icon right color="#47B8F5" v-bind="attrs" v-on="on" style="padding-bottom:4px;">mdi-alert-circle-outline</v-icon></template>
                                              <span> 해당 사용자 및 그룹이 보안문서 생성 시 접근 권한을 지정할 수 있는 그룹을 조직도에서 선택하십시오.</span>
                                            </v-tooltip>
                                          </v-col>
                                          <v-col cols="4" align="right" justify="space-around">
                                            <v-btn color="primary" @click="saveGroup()" v-if="groupSelectedItem || groupSelectedItem === 0"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                                            <v-btn color="primary" disabled v-else><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                                            <v-snackbar v-model="snackbar" dark color="#333">
                                              저장되었습니다.
                                              <template v-slot:action="{ attrs }">
                                              <v-btn color="blue" text v-bind="attrs" @click="snackbar=false;dialog=false;">닫기</v-btn>
                                            </template>
                                          </v-snackbar>
                                          </v-col>
                                        </v-row>
                                    </v-list-item-content>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  
                                  <v-list-item>
                                    <v-row align="center">
                                      <v-col cols="6" offset="2">
                                        <v-text-field prepend-inner-icon="mdi-magnify" dense style="padding-top : 10px" v-model="searchTxt"></v-text-field>
                                      </v-col>
                                      <v-col cols="3">
                                        <v-btn color="success" ><v-icon left>mdi-magnify</v-icon>search</v-btn>
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
            </v-col>
          </v-row>
</div>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from '../src/components/TopNav.vue'
import LeftNav from '../src/components/LeftNav.vue'

  export default {
    components: { TopNav, LeftNav },
    data () {
      return {
        selectedItem: 2,
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
            subListOn: 1,
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
        reveal: false,
        basicCryptoItem: [
          {
            title: '암호화 시점', 
            tooltip: '보안문서 생성시 암호화 시점을 설정 할 수 있습니다.<br>문서편집기 저장 시 암호화는 MS Office 계열의 어플리케이션 (예: MS Word, MS PowerPoint, MS Excel)만 지원합니다.<br>여타 어플리케이션은 문서 저장 시에 암호화 여부를 묻는 지 않고, 문서편집기 종료 시에만 암호화 여부를 묻습니다.', 
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
          {title: '작업 종료시 창 표시안함 체크박스', tooltip: '작업 종료시 암호화를 진행할 지를 묻는 창의 하단의 \'다음부터 이 창을 표시하지 않음\' 문구 체크 및 활성화 여부를 선택합니다.', selectList: ['활성화', '비활성화', '감춤', '비활성화(체크)', '비활성화(언체크)', '감춤(체크)', '감춤(언체크)']},
        ],
        authList: [
          { text: '읽기', switch: false, tooltip:'문서를 수정할 수 없고 읽을 수만 있는 권한입니다.' },
          { text: '편집', switch: false, tooltip:'문서를 수정할 수 있는 권한 입니다.' },
          { text: '해제', switch: false, tooltip:'암호화된 문서를 평문으로 복호화 할 수 있는 권한 입니다.' },
          { text: '반출', switch: false, tooltip:'문서를 반출 할수 있는 권한 입니다.' },
          { text: '출력', switch: false, tooltip:'문서의 출력 가능 여부를 제어하는 권한 입니다. 미사용시 출력이 제한됩니다.' },
          { text: '마킹', switch: false, tooltip:'문서 출력시 프린트 마킹기능의 사용 유무를 결정합니다.' },
          { text: '권한변경', switch: false, tooltip:'지정된 생성자 권한을 변경할 수 있는 권한 입니다.' },
        ],
        policyList: [
          {title: '단순 암호화 사용', tooltip: '문서보안에서 지원하지 않는 확장자를 암호화 합니다.<br>DSD 확장자로 암호화 되며, 접근대상자에 포함된 사용자가 해당 파일 열람 시 복호화 됩니다.', switch: false},
          {title: '폴더내 파일 암호화', tooltip: '폴더 내의 파일을 일괄적으로 암호화하는 기능의 사용 여부를 설정합니다.', switch: false},
          {title: '범주 문서 열람시 생성자 권한 무시', tooltip: '사용하면 범주 문서(범주 보안문서) 열람시 생성자 권한을 무시하고, 범주 정책의 권한을 따릅니다.', switch: false},
          {title: '개인/그룹 문서 열람시 생성자 권한 적용', tooltip: '사용하면 개인/그룹 문서 오픈 시 생성자 권한을 적용합니다<br />보안문서 생성 시 생성자 권한과 현재 생성자 권한 중 로그인 생성자 권한으로 생성자 권한 적용 여부<br />예: 작년에 생성자 권한에 해제 권한이 없고 현재는 해재 권한이 있을 경우 현재의 권한으로 해제 하려면 체크', switch: false}
        ],
        possibleList: [
          {no:'0000001', range:'임직원', dialog:false },
        ],  
        rangeList: [
          {no:'0000002', range:'외주', dialog:false },
          {no:'0000003', range:'임원', dialog:false },
        ],
        accessList: [
          {range:'SECURITY DAMAIN', dialog:false },
          {range:'SOFT CAMP', dialog:false }
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
        this.snackbar = true;
        this.dialog=false;
        this.possibleList.push(this.rangeList[this.rangeSelectedItem]);
        this.rangeList.splice(this.rangeSelectedItem, 1);
        this.rangeSelectedItem=false;
      },
      saveGroup(){
        this.snackbar = true;
        this.dialog2=false;
        this.accessList.push(this.searchList[this.groupSelectedItem]);
        this.searchList.splice(this.groupSelectedItem, 1);
        this.groupSelectedItem=false;
      }
    }
  }
</script>

<style>
</style>
