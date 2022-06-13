<template>
  <!--登录页-->
  <div class="customerservice">
    <div class="customerservice_bg">
      <img @load="setWinHeight" ref="home_bg" :src="require('../assets/bg_customerservice.jpg')">
      <div class="customerservice_bg_content"></div>
    </div>
    <div class="customerservice_main_content" v-if="customer_service_bg_height">
      <div class="customerservice_main_container">
        <!-- 导航 -->
        <Nav></Nav>
        <AnimateNav scrollEleClass="customerservice_main_content" :bannerHeight="customer_service_bg_height"></AnimateNav>
        <!-- banner 窗户 -->
        <div class="customerservice_banner_win" :style="winHeight">{{$route.meta.title}}</div>
        <!-- 服务热线 QQ -->
        <div class="customerservice_tel_qq">
          <div class="customerservice_tel_qq_container">
            <div class="customerservice_tel_qq_content">
              <div class="customerservice_tel">{{constant.customerServiceHotline}}<span style="color:#2680EB">{{constant.customerServiceTel}}</span></div>
              <!-- <div class="customerservice_qq">{{constant.customerServiceQq}}</div> -->
            </div>

          </div>
        </div>
        <!-- 团队 培训 -->
        <div class="customerservice_group">
          <div class="customerservice_group_container">
            <div class="customerservice_group_content">
              <div class="customerservice_group_title">{{constant.groupTitle}}</div>
              <div class="customerservice_group_list">
                <div v-for="(item,index) in constant.groupMenus" :key="index" class="list">
                  <img :src="require(`../assets/${item.src}`)" />
                  <div>{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 团队 保障 -->
        <div class="customerservice_guard">
          <div class="customerservice_guard_container">
            <div class="customerservice_guard_content">
              <div class="customerservice_guard_title">{{constant.groupGardTitle}}</div>
              <div class="customerservice_guard_desc" style="margin-top:20px">{{constant.groupGardDesc1}}</div>
              <div class="customerservice_guard_desc">{{constant.groupGardDesc2}}</div>
              <!-- <div class="customerservice_guard_desc">{{constant.groupGardDesc3}}</div> -->
              <div class="customerservice_guard_desc">{{constant.groupGardDesc4}}</div>
              <div class="title">{{constant.tabelTitle}}</div>
              <div class="customerservice_guard_list">
                <el-table border :data="constant.tableData"  style="font-size: 0.272rem;opacity:0.8;" :span-method="arraySpanMethod">
                  <el-table-column prop="grade" label="问题等级"></el-table-column>
                  <el-table-column prop="desc" label="问题描述" width="400" ></el-table-column>
                  <el-table-column prop="resptime" label="响应时间"></el-table-column>
                  <el-table-column prop="finishtime" label="解决时间" ></el-table-column>
                </el-table>
              </div>
            </div>

          </div>
        </div>
        <!-- 公司平台 -->
        <div class="customerservice_slogan" v-if="ad.imgUrl">
          <div class="text">
            <div class="title">{{constant.smartPlatform}}</div>
            <div class="button" @click="showSubmitPop">{{constant.experienceNow}}</div>
          </div>
          <!-- <img class="img" :src="require('../assets/bg_customerservice2.png')"> -->
          <img class="img" :src="adUrl" />
        </div>
        <Footer></Footer>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Nav from '@/components/Nav.vue';
  import AnimateNav from '@/components/Animate_Nav.vue';
  import Footer from '@/components/Footer.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "index",
    data() {
      return {
        customer_service_bg_height: 0,
      }

    },
    components: {
      Nav,
      Footer,
      AnimateNav
    },
    computed:{
      ...mapState([
          'ad',
      ]),
      adUrl() {
        return this.constant.imgPath + this.ad.imgUrl;
      },
      constant(){
        return constant;
      },
      winHeight(){
        return {
          height: this.customer_service_bg_height + "px"
        }
      }
    },
    mounted(){
      const that = this;
      window.onresize = function() {
        setTimeout(() => {
          that.customer_service_bg_height = that.$refs.home_bg.offsetHeight - 70;
          console.log(that.customer_service_bg_height)
        },0);
      }
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex  === 4) {
          if (columnIndex === 0) {
            return [1, 4];
          }
          else {
            return [0, 0];
          }
        }
      },
    setWinHeight(){
        this.customer_service_bg_height = this.$refs.home_bg.offsetHeight - 70;
    },
    showSubmitPop(){
      this.$root.$emit('showPopSubmit');
    }
    },
  }
</script>

<style scoped lang="scss">
  .customerservice{
         position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // height: 5000px;
  }
  .customerservice_bg {
    max-height: 100%;
    width: 100%;
    position: absolute;
    // background:url("../assets/bg_customerservice.jpg") center no-repeat;
    // background-size: 100%;
    // padding-top: 37.5%;
    // background-attachment:fixed;
    overflow: hidden;
    img{
      width: 100%;
    }
    .customerservice_bg_content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:#000;
      opacity: 0.6;
    }
  }
  .customerservice_main_content{
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 0;
      left: 0;
      // opacity: 0.3;
      .customerservice_main_container{
        width: 100%;
        .customerservice_banner_win{
          width: 100%;
          height: 650px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 72px;
          color: #fff;
        }
        .customerservice_tel_qq{
          width: 100%;
          height: 170px;
          background: #fff;
          .customerservice_tel_qq_container {
            height: 168px;
            margin: 0 auto;
            width: 98%;
            border-bottom: 2px solid rgba(177, 175, 175, 0.5);
            display: flex;
            align-items:center;
            justify-content: center;
            .customerservice_tel_qq_content{
              display: flex;
              align-items:center;
              justify-content: space-between;
              height: 68px;
              width: 65%;
              .customerservice_tel{
                height: 68px;
                font-size: 0.572rem;
                color: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .customerservice_qq{
                color: #fff;
                border-radius: 5px;
                background: #2680EB;
                height: 0.927rem;
                width: 3.45rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.409rem;
              }
            }

          }
        }
        .customerservice_group{
          width: 100%;
          height: 340px;
          background: #fff;
          .customerservice_group_container {
            height: 338px;
            margin: 0 auto;
            width: 98%;
            border-bottom: 2px solid rgba(177, 175, 175, 0.5);
            display: flex;
            // align-items:center;
            justify-content: center;
            .customerservice_group_content{
              height: 68px;
              width: 70%;
              padding-top: 30px;
              .customerservice_group_title{
                width: 100%;
                text-align: center;
                height: 68px;
                font-size: 0.572rem;
                color: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .customerservice_group_list{
                color: #fff;
                border-radius: 5px;
                height: 171px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 30px;
                .list{
                  height: 100%;
                  margin-top: 50px;
                }
              }
            }

          }


        }
        .customerservice_guard{
          width: 100%;
          height: 800px;
          background: #fff;
          .customerservice_guard_container {
            height: 800px;
            margin: 0 auto;
            width: 98%;
            border-bottom: 2px solid rgba(177, 175, 175, 0.5);
            display: flex;
            // align-items:center;
            justify-content: center;
            .customerservice_guard_content{
              height: 68px;
              width: 70%;
              padding-top: 40px;
              .customerservice_guard_title{
                width: 100%;
                text-align: center;
                height: 68px;
                font-size: 0.572rem;
                color: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .customerservice_guard_desc{
                width: 92%;
                margin:0 auto;
                text-align: left;
                font-size: 0.272rem;
                color: rgba(0,0,0,0.5);
                margin-bottom: 10px;
              }
              .title{
                  width: 100%;
                  text-align: center;
                  font-size: 0.409rem;
                  margin-top: 20px;
                  margin-bottom: 20px;
                  opacity: 0.6;
                }
              .customerservice_guard_list{
                margin: 0 auto;
                margin-top: 15px;
                // color: #fff;
                border-radius: 5px;
                // height: 171px;
                width: 92%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.409rem;
                .header{
                  background: #333333;
                }

                .list{
                  height: 100%;
                  margin-top: 50px;
                }
              }
            }

          }


        }
        .customerservice_slogan{
            position: relative;
            width: 100%;
           .text{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              // font-size: 72px;
              color: rgba(255,255,255,0.9);
              .title{
                font-size: 0.572rem;;
              }
              .button{
                margin-top: 30px;
                height: 40px;
                width: 175px;
                border: 1px solid #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.327rem;
              }
              .button:hover{
                cursor: pointer; //鼠标变手
                background: #00a0dc;
                color: #FFF;
                border: 1px solid #00a0dc;
              }
            }
           .img{
              display:block;
              width: 100%;
              max-height: 100%;
           }
          }
      }
    }
    @media (max-width: 1150px){
      .customerservice_banner_win{font-size: 70px!important;}
    }
    @media (max-width: 1050px){
      .customerservice_banner_win{font-size: 60px!important;}
    }
    @media (max-width: 950pxpx){
      .customerservice_banner_win{font-size: 50px!important;}
    }
    @media (max-width: 850px){
      .customerservice_banner_win{font-size: 40px!important;}
    }

    @media (max-width: 768px){
      .customerservice_group{
        height: auto!important;
      }
      .customerservice_group_container{
        height: auto!important;
      }
      .customerservice_tel_qq_content{
        justify-content: center!important;
      }
      .customerservice_group_content{
        height: auto!important;
      }
      .customerservice_group_list{
        flex-direction: column!important;
        height: auto!important;
      }
      .customerservice_guard_content{
        width: 90%!important;
      }
      .customerservice_tel_qq{
        height: auto!important;
      }
      .customerservice_tel_qq_container{
        height: auto!important;
      }
      .customerservice_slogan{
        height: 170px!important;
        overflow: hidden;
        img{
          width: auto!important;;
        }
        .text{
          width: 100%!important;
          .button{
            width: 100px!important;
            height: 30px!important;
            border-radius: 5px;
            font-size: 13px!important;
          }
        }
      }
  }
</style>
