<template>
  <v-app style="background-color: #F9FBFD;">
    
    <top-nav/>
    <left-nav/>
    <v-main>

      <v-container>

        <v-container>
          <v-row>
            <v-col style="color:#9AADD1;font-size:0.8rem;padding-bottom:10px;">홈 > user1 > 암호화 정책</v-col>
          </v-row>
          <v-row>
            <v-col><span><v-icon x-large>mdi-account</v-icon></span><span style="font-size:1.6rem;font-weight:bold;"> USER1</span></v-col>
          </v-row>
          <v-divider></v-divider>
          
          <v-row style="padding-top: 10px;">
            <v-col>
              <v-list rounded style="background-color: #F9FBFD;">
                <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
                  mandatory
                >
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-divider vertical></v-divider>

            <v-col cols="10">
              <v-container>
                <v-card class="mx-auto">
                  <v-list-item>
                    <v-list-item-content style="font-size:1.4rem; ">                                          
                       <v-row
                          align="center"
                          justify="space-around"
                        >
                          <v-col>기본 암호화 정책</v-col>
                          <v-col align="right" justify="space-around">  
                            <v-btn color="primary" @click="snackbar = true"><v-icon left>mdi-pencil</v-icon>Save</v-btn>
                              <v-snackbar v-model="snackbar" dark >
                                저장되었습니다.
                                <template v-slot:action="{ attrs }">
                                <v-btn color="red" text v-bind="attrs" @click="snackbar = false">닫기</v-btn>
                              </template>
                            </v-snackbar>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                  <v-divider></v-divider>


                  <v-list-item v-for="item in basicCryptoItem" :key="item.title">
                    <v-list-item-content>
                        <v-row align="center" justify="space-around">
                          <v-col cols="6">
                              <v-list-item-title style="font-size:1.1rem" >
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">{{item.title}}</span>
                                  </template>
                                  <span v-html="item.tooltip"></span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="6">
                            <v-select
                              :items="item.selectList"
                              dense
                              hide-details
                              style="padding:0px 10px; "
                            ></v-select>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item v-for="item in policyList" :key="item.title">
                    <v-list-item-content>
                        <v-row align="center"  justify="space-around">
                          <v-col cols="6">
                              <v-list-item-title style="font-size:1.1rem" >
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">{{item.title}}</span>
                                  </template>
                                  <span v-html="item.tooltip"></span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="6" >
                            <v-switch
                              v-model="item.switch"
                              inset 
                              hide-details
                              style="padding:0px 10px; margin-top: 8px;"
                              :label="item.switch === false ? `미사용` : `사용`"
                            ></v-switch>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>
                        <v-row >
                          <v-col cols="6">
                              <v-list-item-title style="font-size:1.1rem" >
                                <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">생성자 권한</span>
                                </template>
                                <span>암호 문서 생성시 기본적으로 적용될 권한을 설정합니다.</span>
                              </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="6" style="padding-left: 10px">
                            <v-row align="center">
                              <v-col cols="6" v-for="item in authList" :key="item.text"> 
                                <v-switch
                                  v-model="item.active"
                                  inset 
                                  hide-details
                                  style="padding:0px 10px; margin-top: 8px;"
                                  :label="item.active === false ? item.text + ` 미사용` : item.text + ` 사용`"
                                ></v-switch>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                

                </v-card>
              </v-container>

              <v-row>
                <v-col>
                  <v-container>
                    <v-card>
                      <v-list-item>
                        <v-list-item-content style="font-size:1.4rem; ">
                            <v-row
                              align="center"
                              justify="space-around"
                            >
                              <v-col cols="8">암호화 가능 범주</v-col>
                              <v-col cols="4" align="right" justify="space-around">  
                                
                                <v-dialog v-model="dialog" persistent max-width="800">
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="success" v-bind="attrs" v-on="on"><v-icon left>mdi-pencil</v-icon>Edit</v-btn>
                                  </template>
                                  <v-card>
                                    <v-card-title class="text-h5">범주 추가</v-card-title>
                                      <v-card-text>
                                        보안문서 생성 시 선택 가능한 범주를 설정하십시오.<br>
                                        아무 것도 설정하지 않으면 암호화 시 모든 범주를 선택할 수 있습니다. 
                                        
                                      </v-card-text>
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn color=" darken-1" text @click="dialog = false">아니요</v-btn>
                                      <v-btn color="blue darken-1" text @click="deletePossible(dialog)">네</v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-dialog>
                              </v-col>
                            </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>

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
                    </v-card>
                  </v-container>
                </v-col>
                <v-col>
                   <v-container>  
                      <v-card>
                        <v-list-item>
                        <v-list-item-content style="font-size:1.4rem; ">
                            <v-row align="center" justify="space-around" >
                              <v-col cols="8">접근대상 지정 그룹</v-col>
                              <v-col cols="4" align="right" justify="space-around">  
                                <v-btn color="success"><v-icon left>mdi-pencil</v-icon>Edit</v-btn>
                              </v-col>
                            </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>

                      <v-list-item>
                        <v-list-item-content>
                          <v-row>
                            <v-col cols="8">SECURITY DAMAIN</v-col>
                            <v-col cols="4" align="right"><v-icon color="red">mdi-delete</v-icon></v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>

                      <v-list-item>
                        <v-list-item-content>
                          <v-row>
                            <v-col cols="8">SOFT CAMP</v-col>
                            <v-col cols="4" align="right"><v-icon color="red">mdi-delete</v-icon></v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      </v-card>
                   
                  </v-container>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
    <v-overlay :value="overlay">
      <v-card>
        <v-card-title class="lighten-2" >
          범주 삭제
        </v-card-title>
          <v-divider></v-divider>
          <v-container>
            <v-container>
              해당 범주를 삭제하시겠습니까?
            </v-container>
          </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            예
          </v-btn>

          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            아니요
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
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
          { text: '반출', active: 'false' },
          { text: '해제', active: 'false' },
          { text: '편집', active: 'false' },
          { text: '읽기', active: 'false' },
          { text: '마킹', active: 'false' },
          { text: '출력', active: 'false' },
          { text: '권한변경', active: 'false' },
        ],
        policyList: [
          {title: '단순 암호화 사용', tooltip: '해당 기능을 사용할 경우 암호화 문서는 단순 암호화 됩니다.', switch: false},
          {title: '폴더내 파일 암호화', tooltip: '폴더가 암호화되는 시점을 설정합니다.<br />문서 편집기의 종료시점을 지원하며 MS 오피스의 경우 저장 시점도 지원합니다.', switch: false},
          {title: 'MAC 문서 오픈시 생성자 권한 무시', tooltip: '이 기능을 사용할 경우 MAC문서일 경우 생성자 권한은 무시됩니다.<br />MAC 문서의 권한이 적용됩니다.', switch: false},
          {title: 'DAC 문서 오픈시 생성자 권한 적용', tooltip: '이 기능을 사용할 경우 DAC문서일 경우 생성자 권한은 무시됩니다.<br />DAC 문서의 권한이 적용됩니다.', switch: false}
        ],
        possibleList: [
          {no:'0000001', range:'임직원', dialog:false },
          {no:'0000002', range:'외주', dialog:false }
        ],  
        dialog: false,
        overlay:false,
        snackbar: false
      }
    },
    methods: {
      deletePossible (index){
        console.log(index)
        this.possibleList[index].dialog = false
        this.possibleList.splice(index, 1);
      }
    }
  }
</script>