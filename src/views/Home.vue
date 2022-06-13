<template>
  <!--登录页-->
  <div class="aboutus">
    <div class="home_bg">
      <!-- <img @load="setWinHeight" ref="home_bg"   :src="require('../assets/bg_home.png')"> -->
      <div class="home_bg_content"></div>
      <div>
        <video ref="home_bg" autoplay loop muted @loadstart="setWinHeight">
          <source class="video" src="../assets/video/bg_home.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="home_main_content" v-show="showContent">
      <div class="home_main_container">
        <!-- 导航 -->
        <Nav></Nav>
        <!-- 下拉导航 -->
        <AnimateNav scrollEleClass="home_main_content" :bannerHeight="home_bg_height"></AnimateNav>
        <!-- banner 窗户 -->
        <div class="home_banner_win" :style="winHeight">
          <div class="home_head_title">
            <div class="container">
              <transition
                enter-active-class="animated_slide_up slideInUp"
              >
                <div v-show="showHomeTitle" class="homeTitle">{{constant.homeTitle}}</div>
              </transition>
              <transition
                enter-active-class="animated_slide_up slideInUp"
              >
                <div v-show="showHomeSubTitle" class="homeSubTitle">{{constant.homeSubTitle}}</div>
              </transition>
              <transition
                enter-active-class="animated_slide_up slideInUp"
              >
                <div v-show="showHomeMore" class="more" @click="turntoproduct">{{constant.more}}</div>
              </transition>
              <!-- <div class="pullPage" @click="pullPage"></div> -->
            </div>
          </div>
        </div>
        <div class="home_tech">
          <!-- <div class="title">{{constant.techTitle}}</div>
          <div class="subtitle">{{constant.techSubTitle}}</div> -->
          <div class="desc">{{constant.techDesc}}</div>
          <div class="techs">
            <template v-for="(item,index) in constant.techs">
              <div class="tech_container_fa" :key="index">

                <div :class="index > 2 ? 'tech_container linetwo':'tech_container lineone'">
                  <img :src="require(`../assets/${item.icon}`)" />
                  <div class="teah_name">{{item.name}}</div>
                  <div class="teah_desc">{{item.desc}}</div>
                </div>

              </div>
            </template>
          </div>
        </div>
        <div class="home_offer">
          <CustomerOffer></CustomerOffer>
        </div>
        <div class="home_well_known_saying" v-show="showContent">
          <div class="sayings">
            <img class="img" :src="require('../assets/bg_home_wellsaying.jpg')" />
            <div class="say">
              <SwiperCustomerSay></SwiperCustomerSay>
            </div>
          </div>
          <!-- <div class="profiles">
            <SwiperCustomerSayLogo></SwiperCustomerSayLogo>
          </div> -->
        </div>
        <div class="showCase">
          <img class="img" :src="require('../assets/bg_home_case.jpg')" />
          <div class="content">
            <div class="title">{{constant.showCase}}</div>
              <div class="line">
                <div class="other"></div>
                <div class="dotline"></div>
                <div class="other"></div>
              </div>
              <SwiperCustomerCase></SwiperCustomerCase>
              <!-- <div class="home_corparation_logos">
                  <SwiperCustomerCaseLogo></SwiperCustomerCaseLogo>
              </div> -->
                        <div class="profiles">
            <SwiperCustomerSayLogo></SwiperCustomerSayLogo>
          </div>
            </div>

        </div>
        <!-- 公司平台 -->
        <div class="home_slogan" v-if="ad.imgUrl">
          <div class="text">
            <div class="title">{{constant.homeExpTitle}}</div>
            <div class="subtitle">{{constant.homeExpSubTitle}}</div>
            <div class="button" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
          </div>
          <!-- <img class="img" :src="require('../assets/bg_home_exp.jpeg')" /> -->
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

  import CustomerOffer from '@/components/swiper/CustomerOffer_Home.vue';
  import SwiperCustomerCaseLogo from '@/components/swiper/CustomerCase_Logo_Home.vue';
  import SwiperCustomerCase from '@/components/swiper/CustomerCase_Home.vue';
  import SwiperCustomerSay from '@/components/swiper/CustomerSay_Home.vue';
  import SwiperCustomerSayLogo from '@/components/swiper/CustomerSay_Logo_Home.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "home",
    data() {
      return {
        showContent: false,
        showFixedNav:false,
        home_bg_height: 0,
        showHomeTitle:false,
        showHomeSubTitle:false,
        showHomeMore:false,
      }

    },
    components: {
      Nav,
      AnimateNav,
      Footer,
      SwiperCustomerCaseLogo,
      SwiperCustomerCase,
      SwiperCustomerSay,
      SwiperCustomerSayLogo,
      CustomerOffer
    },
    computed:{
      ...mapState([
          'ad',
          'customerCase'
      ]),
      adUrl() {
        return this.constant.imgPath + this.ad.imgUrl;
      },
      constant(){
        return constant;
      },
      winHeight(){
        return {
          height: this.home_bg_height + "px"
        }
      }
    },
    mounted(){
      setTimeout(()=>{this.showHomeTitle = true;},300);
      setTimeout(()=>{this.showHomeSubTitle = true;},800);
      setTimeout(()=>{this.showHomeMore = true;},1200);
      const that = this;
      window.onresize = function() {
        setTimeout(() => {
          that.home_bg_height = that.$refs.home_bg.offsetHeight - 70;
          console.log(that.home_bg_height)
        },0);
      };
      this.xhr_offer();
      this.xhr_word();
      this.xhr_case();
      this.xhr_getAd();
      setTimeout(() => {
        if(!this.showContent){
          this.showContent = true;
        }
      },1500);
    },

    methods: {
      // 广告接口
      xhr_getAd(){
        this.$axios.get('/api/wAdver/findShowIndex').then(res => {
          if (res.data.code = 200) {
            this.$store.commit('save_ad', res.data.result);
          }
        });
      },
      // 客户案例接口
      xhr_case(){
        this.$axios.get('/api/wCustomer/findList').then(res => {
          if (res.data.code = 200) {
            this.$store.commit('customer_case', res.data.result);
          }
        });
      },

      // 文字切换列表
      xhr_word(){
        this.$axios.get('/api/wQuoteBottom/findList').then(res => {
          if (res.data.code = 200) {
            this.$store.commit('home_word', res.data.result);
          }
        });

      },

      // 报价切换列表
      xhr_offer(){
        this.$axios.get('/api/wQuoteMiddle/findList').then(res => {
          if (res.data.code = 200) {
            this.$store.commit('home_offer', res.data.result);
          }
        });

      },
      setWinHeight(){
        this.home_bg_height = this.$refs.home_bg.offsetHeight - 70;
        this.showContent = true;
      },
      turntoproduct() {
        this.$router.push('/productService');
      },

      showSubmitPop(){
        this.$root.$emit('showPopSubmit');
      }
    },
  }
</script>

<style scoped lang="scss">
video{
    // position: fixed;//视频定位方式设为固定
    right: 0;
    bottom: 0;//视频位置
    min-width: 100%;
    min-height: 100%; //不会因视频尺寸造成页面需要滚动
    width: auto;
    height: auto; //尺寸保持原视频大小
    z-index: -100; //z轴定位，小于0即可
    -webkit-filter: grayscale(20%);//添加灰度蒙版，如果设定为100%则视频显示为黑白
}
  .aboutus{
     position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // height: 5000px;
  }
  .home_bg {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    // background:url("../assets/bg_aboutus.jpg") center no-repeat;
    // background-size: 100%;
    // padding-top: 37.5%;
    // background-attachment:fixed;
    img{
      max-width: 100%;
      width: 100%;
    }
    video {
      max-width: 100%;
      width: 100%;
    }
    .home_bg_content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:#000;
      opacity: 0.6;
    }
  }
  .home_main_content{
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 0;
      left: 0;
      // opacity: 0.3;
      .home_main_container{
        .fade_nav{
          width: 100%;
          height: 100%;
          background: green;
          height: 70px;
          position: fixed;
          top: 0;
          left: 0;
        }
        width: 100%;
        .home_banner_win{
          width: 100%;
          height: 650px;
          background-color: #000;
          opacity: 0.6;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 72px;
          color: #fff;
          position: relative;
          .home_head_title{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            .container{
              width: 100%;
              height: 50%;
              // border: 1px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              position: relative;
              div{
                width: 100%;
                text-align: center;
              }
              .homeTitle{
                font-size: 80px;
                position: absolute;
                top: 0;
              }
              .homeSubTitle{
                font-size: 35px;
                margin-top: 20px;
                position: absolute;
                top: 28%;
              }
              .more{
                padding: 5px;
                width: 125px;
                height: 35px;
                border: 1px solid #fff;
                border-radius: 3px;
                font-size: 20px;
                margin-top: 60px;
                position: absolute;
                top: 53%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .more:hover {
                cursor: pointer; //鼠标变手
                background: #00a0dc;
                color: #FFF;
                border: 0;
              }
              .pullPage{
                position: absolute;
                left: 50%;
                bottom: 50px;
                width: 50px;
                height: 50px;
                background:url("../assets/icon_pull.png") center no-repeat;
                background-size: 100%;
                transform: translate(-50%, 0);
              }
            }

          }
        }
        .home_tech{
          width: 100%;
          // min-height: 980px;
          background: #F9FDFC;
          padding-top: 0.59rem;
          display: flex;
          flex-direction: column;
          // div{
          //   width: 100%;
          //   text-align: center;
          // }
          .title{
            width: 100%;
            text-align: center;
            font-size: 0.39rem;
            height: auto;
          }
          .subtitle{
            width: 100%;
            text-align: center;
            font-size: 0.39rem;
            margin-top: 0.1rem;
          }
          .desc{
            line-height: 0.4rem;
            font-size: 0.205rem;
            text-align: center;
            width: 41%;
            margin: 0 auto;
            margin-top: 0.19rem;
            // opacity: 0.8;
            color: rgb(90, 90, 90);
          }
          .techs{
            width: 80%;
            max-width: 1170px;
            margin: 0 auto;
            // margin-top: 20px;
            // border: 1px solid red;
            flex: 1;
            // display: flex;
            // justify-content: space-around;
            padding-bottom: 0.52rem;
            .tech_container_fa{
              float: left;
              width: 30%;
              height: 4.5rem;
              margin-left: 0.43rem;
              margin-top: 0.43rem;
              padding-bottom: 0.2rem;
              .tech_container{
              border-radius: 10px;
              // float: left;
              // width: 30%;
              // height: 6rem;
              // margin-left: 0.53rem;
              // margin-top: 0.53rem;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              // justify-content: center;
              align-items: center;
              background: #fff;
              border-left: 1px solid #f8f2f2;
              border-right: 1px solid #f8f2f2;
              border-bottom: 1px solid #f8f2f2;

              transition: all 0.3s ease-in-out;
              img{
                // max-width: 1.3rem;
                display: block;
                margin-top: 0.78rem;
                height: 50px;
              }
              .teah_name{
                margin-top: 0.305rem;
                font-size: 0.272rem;
                padding-left: 0.52rem;
                padding-right: 0.52rem;
                color: #5a5a5a;
              }
              .teah_title {
                font-size: 16px;
                line-height: 0.63rem;
              }
              .teah_desc{
                margin-top: 0.295rem;
                font-size: 0.175rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                line-height: 0.43rem;
                overflow: hidden;
                color: rgb(150, 150, 150);
              }
            }
            .tech_container:hover{
              box-shadow: 0px 16px 22px 0px rgba(90, 91, 95, 0.3);
              margin-top: -0.23rem;
            }
            .lineone{
              border-top: 2px solid #00a0dc;
            }
            .linetwo{
              border-top: 2px solid #00a0dc;
            }
            }

          }
        }

        .home_offer{
          width: 100%;
          // min-height: 980px;
          background: #E4E4E4;
          // padding-top: 30px;
          // padding-bottom: 30px;
          display: flex;
          flex-direction: column;
        }

        .home_well_known_saying{
          width: 100%;
          height: auto;
          .sayings{
            position: relative;
            width: 100%;
            height: 620px;
            // border: 1px solid red;
            img{
              width: 100%;
              // display: block;
              height: 100%;
            }
            .say{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background: rgba(0,0,0,0.4);
              overflow: hidden;
            }
          }
          // .profiles{
          //   width: 100%;
          //   padding-top: 0.7rem;
          //   padding-bottom: 0.7rem;
          //   background: rgb(30, 30, 30);
          //   display: flex;
          //   align-items: center;
          // }
        }
        .showCase{
          position: relative;
          // height: 870px;
          background:#191C1E;
          width: 100%;
          overflow: hidden;
          height: 772px;
          // background:url("../assets/bg_home_case.jpg") center no-repeat;
          // background-size: 100%;
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
          .content{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 0%;
            display: flex;
            // justify-content: center;
            flex-direction: column;
            align-items: center;
            .home_corparation_logos{
              margin: 0 auto;
              margin-top: 35px;
              width: 84.35%;
              height: 170px;
              border-radius: 2px;
              background: #fff;
              display: flex;
              align-items: center;
              justify-content: space-around;
              overflow: hidden;
              img{
                max-width: 130px;
                // margin-right: 30px;
              }
            }
            .title{
              width: 100%;
              text-align: center;
              font-size: 24px;
              color: #fff;
              padding-top: 50px;
            }
            .line{
              width: 98%;
              height: 12px;
              margin: 0 auto;
              display: flex;
              .other{
                height: 100%;
                flex: 1;
                border-bottom: 2px solid #E8EBEE;
              }
              .dotline{
                width: 42px;
                height: 100%;
                border-bottom: 2px solid #00a0dc;
                margin: 0 auto;
              }
            }
          }
          .profiles{
            width: 100%;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            background: rgb(30, 30, 30);
            display: flex;
            align-items: center;
            margin-top: 30px;
            position: absolute;
            left: 0;
            bottom: 0;

          }

        }
          .home_slogan{
            position: relative;
            width: 100%;
           .text{
              position: absolute;
              top: 50%;
              left: 11.5%;
              transform: translate(0%, -50%);
              -ms-transform: translate(0%, -50%);
              display: flex;
              flex-direction: column;
              justify-content: center;
              // align-items: center;
              // font-size: 72px;
              color: rgba(255,255,255,0.9);
              .title{
                font-size: 0.57rem;
              }
              .subtitle{
                margin-top: 0.2rem;
                font-size: 0.38rem;
              }
              .button{
                margin-top: 0.8rem;
                height: 0.8rem;
                width: 175px;
                border: 1px solid #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.32rem;
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
      .homeTitle{font-size: 70px!important;}
      .homeSubTitle{font-size: 29px!important;}
    }
    @media (max-width: 1050px){
      .homeTitle{font-size: 60px!important;}
      .homeSubTitle{font-size: 25px!important;}
    }
    @media (max-width: 950pxpx){
      .homeTitle{font-size: 50px!important;}
      .homeSubTitle{font-size: 23px!important;}
    }
    @media (max-width: 850px){
      .homeTitle{font-size: 40px!important;}
      .homeSubTitle{font-size: 20px!important;}
    }
    @media (max-width: 768px){
      .home_well_known_saying{
      .sayings{
        height: 420px!important;
      }
  }
      .home_slogan{
        height: 170px!important;
        overflow: hidden!important;
        .img{
          width: auto!important;
        }
        .button{
            width: 100px!important;
            height: 30px!important;
            border-radius: 5px;
            font-size: 13px!important;
        }
      }
      .home_head_title{
        top: -70px!important;
      }
      .homeTitle{
        font-size: 18px!important;
        top: 50px!important;
      }
      .homeSubTitle{
        font-size: 14px!important;
        // top: 147%!important;
        margin-top: 66px!important;
      }
      .more{
        font-size: 12px!important;
        // top: 50%!important;
        width: 50px!important;
        height: 10px!important;
        margin-top: 90px!important;
      }
      .more:hover {
        cursor: pointer; //鼠标变手
        background: #00a0dc;
        color: #FFF;
        border: 0;
      }
      .home_tech{
        .desc{
          width: 90%!important;
          line-height: 0.6rem!important;
          font-size: 14px!important;
          line-height: 18px!important;

        }
        .techs{
          .teah_name{
            font-size: 18px!important;
          }
          .teah_desc{
            font-size: 14px!important;
            line-height: 18px!important;
          }
        }
        .tech_container_fa{
          width: 98%!important;
          margin-left: 1%!important;
          margin-right: 1%!important;
          padding-bottom: 20px!important;
          // margin-bottom: 20px!important;
          height: auto!important;
        }
        .tech_container{
          padding-bottom: 20px!important;
          .teah_desc{
            line-height: 20px!important;
          }
        }
      }
      .showCase{
        height: 548px!important;
        img{
          height: 100%!important;
          width: auto!important;
        }
        .content{
          .title{
            padding-top: 10px!important;
            font-size: 14px!important;
          }
        }
      }
        .home_corparation_logos{
          display: none!important;
        }
    }
    .animated_slide_up{
      -webkit-animation-duration: .4s;
      animation-duration: .4s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
</style>
