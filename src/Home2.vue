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
          <v-col>
            <v-list rounded color="#F9FBFD">
              <v-list-item-group v-model="selectedItem" color="primary" mandatory>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-content><v-list-item-title v-text="item.text" ></v-list-item-title></v-list-item-content>
                </v-list-item>
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
                      <v-btn color="primary" @click="snackbar = true"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                        <v-snackbar v-model="snackbar" dark color="#333">저장되었습니다.
                          <template v-slot:action="{ attrs }"><v-btn color="#47B8F5" text v-bind="attrs" @click="snackbar = false" >닫기</v-btn></template>
                        </v-snackbar>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item v-for="item in basicCryptoItem" :key="item.title">
                  <v-list-item-content>
                    <v-row align="center" justify="space-around" >
                      <v-col cols="6">
                        <v-list-item-title style="font-size:1rem" >
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">{{item.title}}<v-icon  color="#47B8F5" v-bind="attrs" v-on="on" right>mdi-alert-circle-outline</v-icon></template>
                            <span v-html="item.tooltip"></span>
                          </v-tooltip>
                        </v-list-item-title>
                      </v-col>
                      <v-col cols="6">
                        <v-select :items="item.selectList" dense hide-details style="padding:0px 10px; "></v-select>
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
                              <span v-bind="attrs" v-on="on" align="center" style="margin:0 auto"><v-icon color="#47B8F5" algin="center" right>mdi-alert-circle-outline</v-icon></span>
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
                                <span v-bind="attrs" v-on="on" align="center" style="margin:0 auto"><v-icon color="#47B8F5" algin="center" right>mdi-alert-circle-outline</v-icon></span>
                              </template>
                              <span>암호 문서 생성시 기본적으로 적용될 권한을 설정합니다.</span>
                            </v-tooltip>
                          </v-list-item-title>
                        </v-col>
                        <v-col cols="6" style="padding-left: 10px">
                          <v-row align="center">
                            <v-col cols="6" v-for="item in authList" :key="item.text"> 
                              <v-switch v-model="item.switch" inset  hide-details style="padding:0px 10px; margin-top: 8px;">
                                <template v-slot:label v-if="item.switch === true"><span style="color: #1976d2">{{item.text}}</span><span style="color: #000"> 사용</span></template>
                                <template v-slot:label v-else><span style="color: #1976d2; ">{{item.text}}</span><span> 미사용</span></template>
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
                            <v-col cols="8">암호화 가능 범주</v-col>
                            <v-col cols="4" align="right" justify="space-around">  
                              <v-dialog v-model="dialog"  max-width="800" >
                                <template v-slot:activator="{ on, attrs }"><v-btn color="primary" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>Edit</v-btn></template>
                                <v-card style="overflow-x: hidden;min-height: 500px">
                                  <v-list-item>
                                    <v-list-item-content style="font-size:1.4rem; ">
                                        <v-row align="center" justify="space-around" >
                                          <v-col cols="8" >
                                            <v-tooltip bottom>
                                              <template v-slot:activator="{ on, attrs }">범주 선택<v-icon right color="#47B8F5" v-bind="attrs" v-on="on" >mdi-alert-circle-outline</v-icon></template>
                                              <span> 보안문서 생성 시 선택 가능한 범주를 설정하십시오.<br> 아무 것도 설정하지 않으면 암호화 시 모든 범주를 선택할 수 있습니다.</span>
                                            </v-tooltip>
                                          </v-col>
                                          <v-col cols="4" align="right" justify="space-around">
                                            <v-btn color="primary" @click="snackbar = true;dialog=false;rangeSelectedItem=false;"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
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
                                        <v-col cols="6">범주ID</v-col>
                                        <v-col cols="6">범주명</v-col>
                                      </v-row>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  <v-list-item-group v-model="rangeSelectedItem">
                                  <div v-for="item in rangeList" :key="item.no">
                                    <v-list-item>
                                        <v-row align="center">                                          
                                          <v-col cols="6">{{item.no}}</v-col>
                                          <v-col cols="6">{{item.range}}</v-col>
                                        </v-row>
                                    </v-list-item>
                                    <v-divider></v-divider> 
                                  </div>
                                  </v-list-item-group>
                                  <!--<v-list-item style="background-color:#F9FBFD">
                                      <v-row align="center" justify="space-around">
                                        <v-col cols="4" ><v-checkbox v-model="checkbox" value="primary" hide-details ></v-checkbox></v-col>
                                        <v-col cols="4">범주ID</v-col>
                                        <v-col cols="4">범주명</v-col>
                                      </v-row>
                                  </v-list-item>
                                  <v-divider></v-divider>
                                  <div v-for="item in rangeList" :key="item.no">
                                    <v-list-item>
                                        <v-row align="center">
                                          <v-col cols="4" ><v-checkbox v-model="checkbox" :value="item.no" hide-details ></v-checkbox></v-col>
                                          <v-col cols="4">{{item.no}}</v-col>
                                          <v-col cols="4">{{item.range}}</v-col>
                                        </v-row>
                                    </v-list-item>
                                    <v-divider></v-divider> -->

                                    


                                    
                                  <!-- <v-card-actions><v-spacer></v-spacer><v-btn text @click="closePossible(dialog);" >닫기</v-btn></v-card-actions>   -->
                                  <v-card-actions></v-card-actions>  
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
                <v-col style="padding-top:30px;">
                  <v-card>
                    <v-list-item>
                      <v-list-item-content style="font-size:1.4rem; font-weight:bold">
                          <v-row align="center" justify="space-around" >
                            <v-col cols="8">접근대상 지정 그룹</v-col>
                            <v-col cols="4" align="right" justify="space-around">
                              <v-dialog v-model="dialog2" persistent max-width="800">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn color="primary" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>Edit</v-btn>
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
        items: [
          { text: '기본정보', icon: 'mdi-clock' },
          { text: '강제권한', icon: 'mdi-account' },
          { text: '암호화정책', icon: 'mdi-flag' },
          { text: '프로파일', icon: 'mdi-flag' },
          { text: 'APP제어', icon: 'mdi-flag' },
          { text: '하위관리자', icon: 'mdi-flag' },
          { text: 'PC보안', icon: 'mdi-flag' },
          { text: '라이센스정책', icon: 'mdi-flag' },
          { text: '애드인정책', icon: 'mdi-flag' },
          { text: 'Custom정책', icon: 'mdi-flag' },
        ],
        reveal: false,
        basicCryptoItem: [
          {title: '암호화 시점', tooltip: '문서가 암호화되는 시점을 설정합니다.<br>문서 편집기의 종료시점을 지원하며 MS 오피스의 경우 저장 시점도 지원합니다.', selectList: ['문서편집기 저장시(MS 오피스만 지원)', '문서편집기 종료시']},
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
        possibleList: [
          {no:'0000001', range:'임직원', dialog:false },
        ],  
        accessList: [
          {range:'SECURITY DAMAIN', dialog:false },
          {range:'SOFT CAMP', dialog:false }
        ],  
        rangeList: [
          {checkbox: false, no:'0000001', range:'임직원'},
          {checkbox: false, no:'0000002', range:'외주'},
          {checkbox: false, no:'0000003', range:'임원'},
        ],
        dialog: false,
        dialog2: false,
        snackbar: false,
        checkbox: [],
        singleSelect: false,
        rangeSelectedItem:false
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
      }
    }
  }
</script>

<style>
</style>
