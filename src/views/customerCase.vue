<template>
  <!--登录页-->
  <div class="aboutus">
    <div class="aboutus_bg">
      <img @load="setWinHeight" ref="aboutus_bg" :src="require('../assets/bg_servicecase.jpg')">
      <div class="aboutus_bg_content"></div>
    </div>
    <div class="customer_case_main_content" v-if="aboutus_bg_height">
      <div class="aboutus_main_container">
        <!-- 导航 -->
        <Nav></Nav>
        <AnimateNav scrollEleClass="customer_case_main_content" :bannerHeight="aboutus_bg_height"></AnimateNav>
        <!-- banner 窗户 -->
        <div class="aboutus_banner_win" :style="winHeight">{{$route.meta.title}}</div>
        <!-- 简介 -->
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
              <img class="corp_photo" :src="constant.imgPath+item.imgUrl" />
              <img class="corp_logo" :src="constant.imgPath+item.logo" />
              <div class="corp_show"></div>
              <div class="corp_name" v-show="item.showMaster">
                <transition
                  enter-active-class="animated_slide_down_btn slideInDown_btn"
                  leave-active-class="animated_slide_up_btn slideOutUp_btn"
                >
                  <div class="btns" v-show="item.showMaster">
                    <img class="search" :src="require('../assets/icon_search.png')" :data-index="index"  @click="showCompanyDetail"/>
                    <img class="jump" :src="require('../assets/icon_href.png')" @click="hrefToOther(item.routerUrl)"/>
                  </div>
                </transition>
                <transition
                  enter-active-class="animated_slide_up slideInUp"
                  leave-active-class="animated_slide_down slideOutDown"
                >
                  <div class="name" v-show="item.showMaster">{{item.enterName}}</div>
                </transition>

              </div>
            </div>
          </template>
        </div>
        <Footer></Footer>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Nav from '@/components/Nav.vue';
  import CustomerCase from '@/components/swiper/CustomerCase.vue';
  import AnimateNav from '@/components/Animate_Nav.vue';
  import Footer from '@/components/Footer.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "index",
    data() {
      return {
        aboutus_bg_height: 0,
        catagory: [
          {name:"所有",type:"1",color: "#00a0dc"},
          {name:"环境检测",type:"2",color: "#000"},
          {name:"区块链",type:"3",color:"#000"}
        ],
        companys_origin:[],
        companys_all:[],
      }

    },
    components: {
      Nav,
      AnimateNav,
      Footer,
      CustomerCase
    },
    mounted(){
      const that = this;
      window.onresize = function() {
        setTimeout(() => {
          that.aboutus_bg_height = that.$refs.aboutus_bg.offsetHeight - 70;
        },0);
      };
      this.xhr_case();
    },
    computed:{
      ...mapState([
        'case',
      ]),
      // companys_all(){
      //   const copy = JSON.parse(JSON.stringify(this.case));
      //   const newCopy = copy.map(()=>{
      //     item.showMaster = false;
      //     return item
      //   })
      //   return newCopy;
      // },
      constant(){
        return constant;
      },
      winHeight(){
        return {
          height: this.aboutus_bg_height + "px"
        }
      }
    },
    methods: {
      xhr_case(){
        this.$axios.get('/api/wServerCustomer/findList', this.form).then(res => {
          if (res.data.code = 200) {
            this.$store.commit('case', res.data.result);
            const copy = JSON.parse(JSON.stringify(this.case));
            const newCopy = copy.map((item)=>{
              item.showMaster = false;
              return item;
            });
            // 原始数据
            this.companys_origin = newCopy;
            // 展示数据，默认展示全部
            this.companys_all = newCopy;
          }
        });
      },
      setWinHeight(){
         this.aboutus_bg_height = this.$refs.aboutus_bg.offsetHeight - 70;
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
        // 数据展示
        if(!index || index == 0) {
          this.companys_all = this.companys_origin;
          return;
        }
        const curTypeData = this.companys_origin.filter((item) => {
          // 环境0，区块链1
          return item.serverType == index-1;
        })
        this.companys_all = curTypeData;
      },

      showCompanyDetail(event) {
        const index = event.currentTarget.getAttribute("data-index");
        this.$root.$emit('showCompanyDetail', this.companys_all[index]);
      },
      hrefToOther(url) {
        window.open(url)
      }
    },
  }
</script>

<style scoped lang="scss">
  .aboutus{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .aboutus_bg {
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    img{
      width: 100%;
    }
    .aboutus_bg_content{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:#000;
      opacity: 0.6;
    }
  }
  .customer_case_main_content{
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: auto;
      top: 0;
      left: 0;
      // opacity: 0.3;
      .aboutus_main_container{
        width: 100%;
        .aboutus_banner_win{
          width: 100%;
          // height: 650px;
          // height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 72px;
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
            font-size: 31px;
            color: rgba(90,90,90,1);
          }
          .aboutus_info_desc{
            // text-indent: 2em;
            font-size: 16px;
            margin-top: 30px;
            margin-left: 3.8rem;
            margin-right: 3.8rem;
            line-height: 30px;
            color: rgba(150,150,150,1);
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
              z-index: 4;
            }
            .corp_show{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              background:rgba(0,0,0,0.4);
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
              z-index: 10;
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
                // text-indent: 2em;
                font-size: 0.272rem;
                align-items: center;
                justify-content: center;
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
    @media (max-width: 1150px){
      .aboutus_banner_win{font-size: 70px!important;}
    }
    @media (max-width: 1050px){
      .aboutus_banner_win{font-size: 60px!important;}
    }
    @media (max-width: 950pxpx){
      .aboutus_banner_win{font-size: 50px!important;}
    }
    @media (max-width: 850px){
      .aboutus_banner_win{font-size: 40px!important;}
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

@media (max-width: 768px){
  .aboutus_info_name{
    font-size: 16px!important;
  }
  .aboutus_info_desc{
    font-size: 12px!important;
    margin-left: 30px!important;
    margin-right: 30px!important;
  }
  .aboutus_slogan{
    overflow: hidden;
    img{
      width: auto!important;;
    }
  }
  .corp_cp{
    margin-top: 10px;
    width: 100%!important;
  }
  // .swiper-slide{
  //   width: 77%!important;
  // }
}
</style>
