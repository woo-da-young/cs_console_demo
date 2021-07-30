<template>
  <v-app style="background-color: #F9FBFD;">
    
    <top-nav/>
    <left-nav/>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container  style="padding: 30px;padding-left:15%;padding-right:15%;">
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
        <v-container fluid>
          <div style="color:#9AADD1;font-size:0.8rem;padding-bottom:10px;">홈 > user1 > 암호화 정책</div>
                        <span><v-icon x-large>mdi-account</v-icon></span><span style="font-size:1.6rem;font-weight:bold;"> USER1</span>
          <v-divider></v-divider>
          <v-row style="padding-top: 10px;">
            <v-col cols="2">
              <v-list rounded style="background-color: #F9FBFD;">
                <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
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
                              <v-col
                              align="right"
                              justify="space-around"
                              >  
                                <v-btn
                                  color="primary"
                                >
                                  <v-icon left>mdi-pencil</v-icon>
                                  Save
                                </v-btn>
                              </v-col>
                            </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider></v-divider>

                   <!-- <v-list-item style="background-color: #F9FBFD;font-size:0.8rem">
                    <v-row>
                      <v-col cols="6" ></v-col>
                      <v-col cols="6" ></v-col>
                    </v-row>
                  </v-list-item>
                  <v-divider ></v-divider>  -->

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center" justify="space-around">
                          <v-col cols="8">
                              <v-list-item-title style="font-size:1.1rem" >
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">암호화 시점</span>
                                  </template>
                                  <span>문서가 암호화되는 시점을 설정합니다.<br>문서 편집기의 종료시점을 지원하며 MS 오피스의 경우 저장 시점도 지원합니다.</span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="4" align="right" float="right" >
                            <v-select
                              :items="selectList"
                              dense
                              hide-details
                              style="padding:0px 10px; "
                            ></v-select>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center"  justify="space-around">
                          <v-col cols="6">
                              <v-list-item-title style="font-size:1.1rem" >
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">단순 암호화 사용</span>
                                  </template>
                                  <span>해당 기능을 사용할 경우 암호화 문서는 단순 암호화 됩니다.</span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col style="float:right;" cols="6"  align="right">
                             
                            <v-switch
                              v-model="switch1"
                              inset 
                              hide-details
                              style="padding:0px 10px; margin-top: 8px;float:right;"
                              :label="switch1 === false ? `미사용` : `사용`"
                            ></v-switch>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center">
                          <v-col cols="6">
                              <v-list-item-title style="font-size:1.1rem" >
                                 <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">폴더내 파일 암호화</span>
                                  </template>
                                  <span>폴더가 암호화되는 시점을 설정합니다.<br />문서 편집기의 종료시점을 지원하며 MS 오피스의 경우 저장 시점도 지원합니다.</span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="6"  align="right" >
                             
                            <v-switch
                              v-model="switch2"
                              inset 
                              hide-details
                              style="padding:0px 10px; margin-top: 8px;float:right;"
                              :label="switch2 === false ? `미사용` : `사용`"
                            ></v-switch>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center">
                          <v-col cols="8">
                              <v-list-item-title style="font-size:1.1rem" >
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">작업 종료시 창 표시안함 체크박스</span>
                                  </template>
                                  <span>해당 기능을 사용 할 겨우 암호화 문서는 단순 암호화됩니다.</span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="4"  align="right" float="right">
                             <v-select
                                    :items="checkboxList"
                                    dense
                                    hide-details
                                    style="padding:0px 10px;"
                                  ></v-select>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center">
                          <v-col cols="6">
                              <v-list-item-title style="font-size:1.1rem" >
                                 <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">MAC 문서 오픈시 생성자 권한 무시</span>
                                  </template>
                                  <span>이 기능을 사용할 경우 MAC문서일 경우 생성자 권한은 무시됩니다.<br />MAC 문서의 권한이 적용됩니다.</span>
                                </v-tooltip>
                              </v-list-item-title>
                          </v-col>
                          <v-col cols="6"  align="right">
                            <v-switch
                              v-model="switch3"
                              inset 
                              hide-details
                              style="padding:0px 10px; margin-top: 8px;float:right;"
                              :label="switch3 === false ? `미사용` : `사용`"
                            ></v-switch>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center">
                          <v-col cols="6">
                            <v-list-item-title style="font-size:1.1rem" >
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">DAC 문서 오픈시 생성자 권한 적용</span>
                                </template>
                                <span>이 기능을 사용할 경우 DAC문서일 경우 생성자 권한은 무시됩니다.<br />DAC 문서의 권한이 적용됩니다.</span>
                              </v-tooltip>
                            </v-list-item-title>
                          </v-col>
                          <v-col cols="6"  align="right">
                            <v-switch
                              v-model="switch4"
                              inset 
                              hide-details
                              style="padding:0px 10px; margin-top: 8px;float:right;"
                              :label="switch4 === false ? `미사용` : `사용`"
                            ></v-switch>
                          </v-col>
                        </v-row>
                    </v-list-item-content>
                  </v-list-item>
                

                  <v-list-item>
                    <v-list-item-content>
                        <v-row align="center">
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
                          <v-col cols="6"  align="right">
                            
                            <v-checkbox
                              label="읽기"
                              color="primary"
                              style="padding:0px 10px; float:right;margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              label="편집"
                              color="primary"
                              style="padding:0px 10px; float:right;margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              label="해제"
                              color="primary"
                              style="padding:0px 10px; float:right;margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              label="반출"
                              color="primary"
                              style="padding:0px 10px; float:right;margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              label="출력"
                              color="primary"
                              style="padding:0px 10px; float:right; margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              label="마킹"
                              color="primary"
                              style="padding:0px 10px; float:right; margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                            <v-checkbox
                              label="권한변경"
                              color="primary"
                              style="padding:0px 10px; float:right; margin-top: 5px;"
                              hide-details
                            ></v-checkbox>
                             
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
                              <v-col >암호화 가능 범주</v-col>
                              <v-col
                              align="right"
                              justify="space-around"
                              >  
                                <v-btn
                                  color="success"
                                >
                                  <v-icon left>mdi-pencil</v-icon>
                                  Edit
                                </v-btn>
                              </v-col>
                            </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>


                      
                      <!-- <v-list-item style="background-color: #F9FBFD;font-size:0.8rem">
                        <v-list-item-content>
                          <v-row>
                            <v-col cols="4">범주ID</v-col>
                            <v-col cols="4">범주명</v-col>
                            <v-col cols="4" align="right">삭제</v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider> -->


                      <v-list-item>
                        <v-list-item-content>
                          <v-row>
                            <v-col cols="4">0000001</v-col>
                            <v-col cols="4">임직원</v-col>
                            <v-col cols="4" align="right"><v-icon color="red">mdi-delete</v-icon></v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>

                      <v-list-item>
                        <v-list-item-content>
                          <v-row>
                            <v-col cols="4">0000002</v-col>
                            <v-col cols="4">외주</v-col>
                            <v-col cols="4" align="right">
                              <div>
                                <v-dialog
                                  v-model="dialog"
                                  width="500"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="red"  v-bind="attrs" v-on="on" >mdi-delete</v-icon>
                                  </template>

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
                                </v-dialog>
                              </div>  

                            </v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>

                    </v-card>
                  </v-container>
                </v-col>
                <v-col>
                   <v-container>
                    
                      <v-card>
                        <v-list-item>
                        <v-list-item-content style="font-size:1.4rem; ">
                            <v-row
                              align="center"
                              justify="space-around"
                            >
                              <v-col>접근대상 지정 그룹</v-col>
                              <v-col
                              align="right"
                              justify="space-around"
                              >  
                                <v-btn
                                  color="success"
                                >
                                  <v-icon left>mdi-pencil</v-icon>
                                  Edit
                                </v-btn>
                              </v-col>
                            </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>


                      
                      <!-- <v-list-item style="background-color: #F9FBFD;font-size:0.8rem">
                        <v-list-item-content>
                          <v-row>
                            <v-col cols="8">그룹명</v-col>
                            <v-col cols="4" align="right">삭제</v-col>
                          </v-row>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider> -->


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

  </v-app>
</template>

<script>
import TopNav from '../src/components/TopNav.vue'
import LeftNav from '../src/components/LeftNav.vue'

  export default {
    components: { TopNav, LeftNav },
    data () {
      return {
        selectedItem: 3,
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
         selectList: ['문서편집기 저장시(MS 오피스만 지원)', '문서편집기 종료시'],
         checkboxList: ['활성화', '비활성화', '감춤', '비활성화(체크)', '비활성화(언체크)', '감춤(체크)', '감춤(언체크)'],
         switch1: false,
         switch2: false,
         switch3: false,
         switch4: false,
         dialog: false,
         basicCryptoItem: [
           
         ]
      }
    },
  }
</script>