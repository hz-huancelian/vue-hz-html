<template>
  <!--登录页-->
  <div class="customerservice">
    <div class="customerservice_bg">
      <img @load="setWinHeight" ref="customer_service_bg" :src="require('../assets/bg_servicecase.jpg')">
      <div class="customerservice_bg_content"></div>
    </div>
    <div class="customerservice_main_content">
      <div class="customerservice_main_container">
        <!-- 导航 -->
        <Nav></Nav>
        <AnimateNav scrollEleClass="customerservice_main_content" :bannerHeight="customercase_bg_height"></AnimateNav>
        <!-- banner 窗户 -->
        <div class="customerservice_banner_win" :style="winHeight">{{$route.meta.title}}</div>
        <div class="aboutus_info">
          <div class="aboutus_info_name">{{constant.company_case_info.name}}</div>
          <template v-for="(item, index) in constant.company_case_info.infos">
            <div :key="index" class="aboutus_info_desc">{{item}}</div>
          </template>
        </div>
        <!-- 客户案例轮播 -->
        <div class="showCase">
          <div class="title">{{constant.showCase}}</div>
          <CustomerCase></CustomerCase>
        </div>
        <div class="corp_companys">
          <div class="catagory" @click="queryCase">
            <template v-for="(item, index) in catagory">
              <div :data-index="index" :key="index" class="cata_name" :style="{'color':item.color}">{{item.name}}</div>
            </template>
          </div>
          <template v-for="(item,index) in companys_all">
            <div class="corp_cp" :key="index" :data-index="index" @mouseover="show_master" @mouseleave="hide_master">
              <img class="corp_photo" :src="require(`../assets/${item.photo}`)" />
              <img class="corp_logo" :src="require(`../assets/${item.logo}`)" />
              <transition
                  enter-active-class="animated_fadeIn fadeIn"
                  leave-active-class="animated_fadeOut fadeOut"
                >
              <div class="corp_name" v-show="item.showMaster">
                <transition
                  enter-active-class="animated_slide_down_btn slideInDown_btn"
                  leave-active-class="animated_slide_up_btn slideOutUp_btn"
                >
                  <div class="btns" v-show="item.showMaster">
                    <img class="search" :src="require('../assets/icon_search.png')" />
                    <img class="jump" :src="require('../assets/icon_href.png')" />
                  </div>
                </transition>
                <transition
                  enter-active-class="animated_slide_up slideInUp"
                  leave-active-class="animated_slide_down slideOutDown"
                >
                  <div class="name" v-show="item.showMaster">{{item.companyName}}</div>
                </transition>

              </div>
              </transition>
            </div>
          </template>
        </div>
        <!-- 公司平台 -->
        <div class="customerservice_slogan">
          <div class="text">
            <div class="title">{{constant.smartPlatform2}}</div>
            <div class="button">{{constant.experienceNow}}</div>
          </div>
          <img class="img" :src="require('../assets/bg_customerservice2.png')" />
        </div>
        <Footer></Footer>
      </div>

    </div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import CustomerCase from '@/components/swiper/CustomerCase.vue';
  import AnimateNav from '@/components/Animate_Nav.vue';
  import Footer from '@/components/Footer.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "index",
    data() {
      return {
        customercase_bg_height: 0,
        catagory: [
          {name:"所有",type:"1",color: "#00a0dc"},
          {name:"环境检测",type:"2",color: "#000"},
          {name:"区块链",type:"3",color:"#000"}
        ],
        companys_all: [
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司1",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司2",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司3",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司4",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司5",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司6",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司7",
            showMaster:false,
          },
          {
            photo:"test_case_campanys.png",
            logo:"logo_white.png",
            companyName:"安徽泰科检测有限公司8",
            showMaster:false,
          },
        ],
      }

    },
    components: {
      Nav,Footer,AnimateNav,CustomerCase
    },
    computed:{
      constant(){
        return constant;
      },
      winHeight(){
        return {
          height: this.customercase_bg_height + "px"
        }
      }
    },
    mounted(){
      const that = this;
      window.onresize = function() {
        setTimeout(() => {
          that.customercase_bg_height = that.$refs.customer_service_bg.offsetHeight - 380 - 70;
          console.log(that.customercase_bg_height)
        },0);
      }

    },
    methods: {
      setWinHeight(){
        // 背景图太大，按照样例显示，需要减去400
        this.customercase_bg_height = this.$refs.customer_service_bg.offsetHeight - 380 - 70;
      },

      show_master(event) {
        const index = event.currentTarget.getAttribute("data-index");
        const copy = JSON.parse(JSON.stringify(this.companys_all));
        copy[index].showMaster = true;
        this.companys_all = copy;
      },

      hide_master(event) {
        const index = event.currentTarget.getAttribute("data-index");
        const copy = JSON.parse(JSON.stringify(this.companys_all));
        copy[index].showMaster = false;
        this.companys_all = copy;
      },

      queryCase(event) {
        const index = event.srcElement.dataset.index;
        if(index === undefined) {
          return;
        }

        const catagory_new = JSON.parse(JSON.stringify(this.catagory)).map((item,idx) => {
          if(index == idx) {
            item.color="#00a0dc";
          }
          else {
            item.color="#000";
          }
          return item;
        })
        this.catagory = catagory_new;
      },

      // 案例接口
      xhr_queryCase() {

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
  }
  .customerservice_bg {
    max-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    // background:url("../assets/bg_servicecase.jpg") center no-repeat;
    // background-size: 100%;
    // padding-top: 56.19791666666667%;
    img{
      max-width: 100%;
    }
    // background-attachment:fixed;
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
          // height: 650px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.98rem;
          color: #fff;
        }
        .aboutus_info{
          width: 100%;
          // height: 356px;
          background: #fff;
          padding: 60px 0 50px 0;
          .aboutus_info_name{
            // margin-left: 80px;
            text-align: center;
            font-size: 0.572rem;
            color: rgba(0,0,0,0.5);
          }
          .aboutus_info_desc{
            text-indent: 2em;
            font-size: 0.272rem;
            margin-top: 30px;
            margin-left: 3.8rem;
            margin-right: 3.8rem;
            color: rgba(0,0,0,0.5);
          }

        }
        .showCase{
          // height: 870px;
          background:#191C1E;
          // padding-bottom: 0.6rem;
          width: 100%;
          .title{
            width: 100%;
            text-align: center;
            font-size: 0.572rem;
            color: #fff;
            padding-top: 0.682rem;
          }
          // .company_photo{
          //   max-width: 100%;
          // }
          // .company_content{
          //   // width: 100%;
          //   font-size: initial;
          //   flex: 1;
          //   padding: 20px 0.682rem 20px 0.682rem;
          //   .logo{
          //     height: 47px;
          //     max-height: 47px;
          //   }
          //   .name{
          //     font-size: 0.327rem;
          //     opacity: 0.8;
          //     margin-top: 15px;
          //   }
          //   .desc{
          //     margin-top: 0.272rem;
          //     font-size: 0.272rem;
          //     opacity: 0.6;
          //   }
          // }
        }
        .corp_companys{
          // padding-top: 50px;
          padding-bottom: 30px;
          width: 100%;
          // height: 900px;
          // display: flex;
          // justify-content: flex-start;
          // align-items: center;
          // flex-wrap: wrap;
          background: #fff;
          overflow: hidden;
          .catagory{
            width: 100%;
            height: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            div{
              font-size: 0.25rem;
              margin-right: 0.2rem;
              color: #000;
              opacity: 0.8;
            }
          }
          .corp_cp{
            float: left;
            width: 25%;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            position: relative;
            overflow: hidden;
            .corp_photo{
              // position: absolute;
              max-width: 100%;
              display: block;
            }
            .corp_logo{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              max-width: 100%;
              display: block;
            }
            .corp_name{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background:rgba(0,0,0,0.8);
              display: flex;
              flex-direction: column;
              .btns{
                width: 100%;
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                .search,.jump{
                 max-width: 100%;
                 display: block;
                 margin-right: 10px;
                }

              }
              .name{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 0.85rem;
                background: #fff;
                color: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                text-indent: 2em;
                font-size: 0.272rem;
                opacity: 0.9;
                ;
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
                font-size: 0.572rem;
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
            }
           .img{
              display:block;
              max-width: 100%;
              max-height: 100%;
           }
          }
      }
    }
    // .swiper-container{
    //   margin-top: 35px;
    //   // height: 710px;
    //   position: relative;
    //   padding-bottom: 1.2rem;
    //   overflow: hidden;
    // }
    // .swiper-slide{
    //   width: 15.68rem!important;
    //   // height: 660px;
    //   background: #fff;
    //   border-radius: 15px;
    //   border: 1px solid #fff;
    //   display: flex;
    //   flex-direction: column;
    //   overflow: hidden;
    // }


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

    swiper-pagination-bullets
    >>>.swiper-pagination-bullets{
      bottom: 0!important;
    }

    .animated_slide_up{
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    .animated_slide_down{
      -webkit-animation-duration: .2s;
      animation-duration: .2s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }

    .animated_slide_up_btn{
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    .animated_slide_down_btn{
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }

    .animated_fadeIn{
      -webkit-animation-duration: .3s;
      animation-duration: .3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    .animated_fadeOut{
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }

    @-webkit-keyframes slideInDown_btn {
    0% {
        -webkit-transform: translate3d(0,-10%,0);
        transform: translate3d(0,-10%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes slideInDown_btn {
    0% {
        -webkit-transform: translate3d(0,-10%,0);
        transform: translate3d(0,-10%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.slideInDown_btn {
    -webkit-animation-name: slideInDown_btn;
    animation-name: slideInDown_btn
}

@-webkit-keyframes slideOutUp_btn {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        visibility: hidden;
        -webkit-transform: translate3d(0,-10%,0);
        transform: translate3d(0,-10%,0)
    }
}

@keyframes slideOutUp_btn {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }

    to {
        visibility: hidden;
        -webkit-transform: translate3d(0,-10%,0);
        transform: translate3d(0,-10%,0)
    }
}

.slideOutUp_btn {
    -webkit-animation-name: slideOutUp_btn;
    animation-name: slideOutUp_btn
}

</style>
