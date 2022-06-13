<template>
  <div class="swiper-container-product ">
    <img v-if="activeIndex" class="top" :src="require('../../assets/icon_top.png')" @click="moveTop"/>
    <div class="swiper-wrapper">
      <template v-for="(item,index) in products">
        <div class="swiper-slide" :key="index">
          <!-- 第一屏 -->
          <template v-if="index === 0">
            <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_1"  v-show="activeIndex === 0">
                <div class="name">{{constant.product_service_slide_1_name}}</div>
                <div class="title">{{constant.product_service_slide_1_title}}</div>
                <!-- <div class="subtitle">{{constant.product_service_slide_1_subtitle}}</div> -->
                <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
            </div>
            </transition>
            <Nav position="absolute"></Nav>
          </template>
          <!-- 第二屏 -->
          <!-- <template v-if="index === 1">
            <div class="content_2">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_2_title_1}}</div>
                    <div class="desc_1">{{constant.product_service_slide_2_desc_1}}</div>
                    <div class="title_2">{{constant.product_service_slide_2_title_2}}</div>
                    <div class="desc_2">{{constant.product_service_slide_2_desc_2}}</div>
                    <div class="title_3">{{constant.product_service_slide_2_title_3}}</div>
                    <div class="desc_3">{{constant.product_service_slide_2_desc_3}}</div>
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>

                </div>
                <img :src="require('../../assets/pro_content_2_img.png')" />
            </div>
          </template> -->
          <!-- 第三屏 -->
          <template v-if="index === 1">
            <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_3" v-show="activeIndex === 1">
              <div class="content">
                <div class="title_1">{{constant.product_service_slide_3_title}}</div>
                <div class="desc_1">{{constant.product_service_slide_3_desc}}</div>
                <img class="pad" :src="require('../../assets/pro_content_3_img.png')" />
                <div class="desc_word">
                  <div class="half" style="margin-right: 4%">
                    <div class="desc"><img :src="require('../../assets/icon_platform_1.png')" />{{constant.product_service_slide_3_info_1}}</div>
                    <div class="desc desc_3"><img :src="require('../../assets/icon_platform_3.png')" />{{constant.product_service_slide_3_info_3}}</div>
                  </div>
                  <div class="half">
                    <div class="desc"><img :src="require('../../assets/icon_platform_2.png')" />{{constant.product_service_slide_3_info_2}}</div>
                    <div class="desc desc_4"><img :src="require('../../assets/icon_platform_4.png')" />{{constant.product_service_slide_3_info_4}}</div>
                  </div>
                </div>
                <div class="button">
                  <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                </div>
              </div>
            </div>
                </transition>
          </template>
          <!-- 第四屏 -->
          <template v-if="index === 2">
                        <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_4" v-show="activeIndex === 2">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_4_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_4_desc}}</div>
                    <img v-if="winWidth <= 768" :src="require('../../assets/pro_content_4_img.png')" />
                    <div class="desc" v-html="constant.product_service_slide_4_info_1"></div>
                    <div class="desc" v-html="constant.product_service_slide_4_info_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_4_info_3"></div>
                    <!-- <div class="desc">{{constant.product_service_slide_4_info_4}}</div> -->
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>
                <img v-if="winWidth > 768" :src="require('../../assets/pro_content_4_img.png')" />
            </div>
            </transition>
          </template>
          <!-- 第五屏 -->
          <template v-if="index === 3">
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_5" v-show="activeIndex === 3">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_5_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_5_desc}}</div>
                    <img v-if="winWidth <= 768" :src="require('../../assets/pro_content_5_img.png')" />
                    <div class="desc" v-html="constant.product_service_slide_5_info_1"></div>
                    <div class="desc" v-html="constant.product_service_slide_5_info_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_5_info_3"></div>
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>
                <img v-if="winWidth > 768" :src="require('../../assets/pro_content_5_img.png')" />
            </div>
            </transition>
          </template>
          <!-- 第六屏 -->
          <template v-if="index === 4">
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_6" v-show="activeIndex === 4">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_6_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_6_desc}}</div>
                    <img :src="require('../../assets/pro_content_6_img.png')" />
                    <div class="desc desc_2" v-html="constant.product_service_slide_6_info_1"></div>
                    <div class="desc" v-html="constant.product_service_slide_6_info_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_6_info_3"></div>
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>

            </div>
            </transition>
          </template>
          <!-- 第七屏 -->
          <template v-if="index === 5">
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_7" v-show="activeIndex === 5">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_7_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_7_desc}}</div>
                    <img v-if="winWidth <= 768" :src="require('../../assets/pro_content_7_img.png')" />
                    <div class="desc" v-html="constant.product_service_slide_7_info_1"></div>
                    <div class="desc" v-html="constant.product_service_slide_7_info_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_7_info_3"></div>
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>
                <img v-if="winWidth > 768" :src="require('../../assets/pro_content_7_img.png')" />
            </div>
            </transition>
          </template>
          <!-- 第八屏 -->
          <template v-if="index === 6">
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_8" v-show="activeIndex === 6">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_8_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_8_desc}}</div>
                    <img  v-if="winWidth <= 768" :src="require('../../assets/pro_content_8_img.png')" />
                    <div class="desc" v-html="constant.product_service_slide_8_info_1"></div>
                    <div class="desc" v-html="constant.product_service_slide_8_info_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_8_info_3"></div>
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>
                <img  v-if="winWidth > 768" :src="require('../../assets/pro_content_8_img.png')" />
            </div>
            </transition>
          </template>
           <!-- 第九屏 -->
          <template v-if="index === 7">
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_9" v-show="activeIndex === 7">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_9_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_9_desc}}</div>
                    <img v-if="winWidth <= 768" :src="require('../../assets/pro_content_9_img.png')" />
                    <div class="desc" v-html="constant.product_service_slide_9_info_1"></div>
                    <div class="desc" v-html="constant.product_service_slide_9_info_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_9_info_3"></div>
                    <!-- <div class="desc">{{constant.product_service_slide_9_info_4}}</div> -->
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>
                <img v-if="winWidth > 768" :src="require('../../assets/pro_content_9_img.png')" />
            </div>
            </transition>
          </template>
          <!-- 第十屏 -->
          <template v-if="index === 8">
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
            <div class="content_10" v-show="activeIndex === 8">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_10_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_10_desc}}</div>
                    <img :src="require('../../assets/pro_content_10_img.png')" />
                    <div class="desc_word">
                      <div class="half" style="margin-right: 4%">
                        <div class="desc"><img :src="require('../../assets/icon_report_1.png')" />{{constant.product_service_slide_10_info_1}}</div>
                        <div class="desc desc_3"><img :src="require('../../assets/icon_report_3.png')" />{{constant.product_service_slide_10_info_3}}</div>
                      </div>
                      <div class="half">
                        <div class="desc"><img :src="require('../../assets/icon_report_2.png')" />{{constant.product_service_slide_10_info_2}}</div>
                        <div class="desc desc_4"><img :src="require('../../assets/icon_report_4.png')" />{{constant.product_service_slide_10_info_4}}</div>
                      </div>
                    </div>

                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>

            </div>
            </transition>
          </template>
          <!-- 第十一屏 -->
          <template v-if="index === 9">
            <!-- <div class="content_11">
              <img class="img_bottom" :src="require('../../assets/bg_pro_service_11-bottom.png')" />
              <div class="content">
                <div class="top">
                  <div class="title_1">{{constant.product_service_slide_1_name}}</div>
                  <div class="title_2">{{constant.product_service_slide_11_title}}</div>
                  <div class="desc_1">{{constant.product_service_slide_11_desc_1}}</div>
                  <div class="desc_2">{{constant.product_service_slide_11_desc_2}}</div>
                  <div class="desc_3">{{constant.product_service_slide_11_desc_3}}</div>
                </div>
                <div class="bottom">
                  <div class="info">
                    <div class="address">
                      <img :src="require(`../../assets/icon_address.png`)" />
                      {{constant.address}}</div>
                    <div class="tel">
                      <img :src="require(`../../assets/icon_tel.png`)" />{{constant.tel}}</div>
                    <div class="email">
                      <img :src="require(`../../assets/icon_email.png`)" />{{constant.email}}</div>
                  </div>
                  <a class="footer_right" href="https://beian.miit.gov.cn" style="text-decoration:none;" target="_blank">{{constant.right}}</a>
                </div>

              </div>
            </div> -->
                                    <transition
              enter-active-class="animated_fadeIn fade_in_page"
              leave-active-class="animated_fadeOut fade_out_page"
            >
              <div class="content_11" v-show="activeIndex === 9">
                <div class="content">
                    <div class="title_1">{{constant.product_service_slide_11_title}}</div>
                    <div class="desc_1">{{constant.product_service_slide_11_desc_1}}</div>
                    <img v-if="winWidth<=768" :src="require('../../assets/pro_content_1n_img.png')" />
                    <div class="desc" v-html="constant.product_service_slide_11_desc_2"></div>
                    <div class="desc" v-html="constant.product_service_slide_11_desc_3"></div>
                    <div class="desc" v-html="constant.product_service_slide_11_desc_4"></div>
                    <div class="button">
                      <div class="btn" @click="showSubmitPop">{{constant.homeExpBtn}}</div>
                    </div>
                </div>
                <img v-if="winWidth>768" :src="require('../../assets/pro_content_1n_img.png')" />

            </div>
            </transition>
          </template>
          <img class="bg" v-if="item.logo" :key="index" :src="require(`../../assets/${item.logo}`)" />
        </div>
      </template>
    </div>
    <div class="swiper-pagination-product"></div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "Product_Service",
    data(){
      return{
        activeIndex:0,
        winWidth: window.innerWidth,
        products: [
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "1夏新杰，安徽泰科检测333",
            logo: "bg_pro_service_1.jpg"
          },
        //  {
        //     content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
        //     author: "2夏新杰，安徽泰科检测",
        //     logo: "bg_pro_service_2.png"
        //   },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "3夏新杰，安徽泰科检测",
            logo: ""
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "4夏新杰，安徽泰科检测",
            logo: "bg_pro_service_4.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "5夏新杰，安徽泰科检测",
            logo: "bg_pro_service_5.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "6夏新杰，安徽泰科检测",
            logo: "bg_pro_service_6.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "6夏新杰，安徽泰科检测",
            logo: "bg_pro_service_7.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "6夏新杰，安徽泰科检测",
            logo: "bg_pro_service_8.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "6夏新杰，安徽泰科检测",
            logo: "bg_pro_service_9.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "6夏新杰，安徽泰科检测",
            logo: "bg_pro_service_10.png"
          },
          {
            content:"雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长～",
            author: "6夏新杰，安徽泰科检测",
            logo: "bg_pro_service_7.png"
          },
        ],
      }
    },
    components: {
      Nav,
    },
    mounted(){
      const that = this;
      window.onresize = () =>{
        that.winWidth = window.innerWidth;
      }
      this.mySwiper_saying = new Swiper('.swiper-container-product',{
        mousewheel: true,
        loop: false,
        speed:800,
        direction: 'vertical',
        // effect : 'fade',
        pagination: {
            el: '.swiper-pagination-product',
            clickable: true,
        },
        on:{
          slideChange: function(){
            that.activeIndex = this.activeIndex;
            // alert(this.activeIndex);
          },
        }
      });

    },
    computed:{
      constant() {
        return constant;
      }
    },
    methods: {
      showSubmitPop(){
        this.$root.$emit('showPopSubmit');
      },
      moveTop(){
        this.mySwiper_saying.slideTo(0);
      }
    }
  }
</script>

<style scoped lang="scss">
    .swiper-container-product{
      position: relative;
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
      .top{
        width: 40px;
          position: fixed;
          right: 38px;
          bottom: 5%;
          max-width: 10%;
          display: block;
          z-index: 10;
      }
      .swiper-slide{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .bg{
          // max-width: 100%;
          display: block;
          width: 100%;
          height: 100%;
        }

        .content_1{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #fff;
          text-align: center;
          // animation: blurFadeIn 3s ease-in backwards;
          .name{
            width: 100%;
            font-size: 80px;
          }
          .title{
            width: 100%;
            font-size: 40px;
            margin-top: 30px;
          }
          // .subtitle{
          //   width: 100%;
          //   font-size: 35px;
          //   margin-top: 25px;
          // }
          .btn{
            width: 120px;
            border: 1px solid #fff;
            border-radius: 5px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.327rem;
            margin-top: 80px;
          }
          .btn:hover {
            cursor: pointer; //鼠标变手
            color: #FFF;
          }
        }
        .content_2{
          position: absolute;
          background: #fafafa;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          // justify-content: center;
          .content{
            height: 100%;
            width: 50%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
            padding-right: 100px;
            .title_1,.title_2,.title_3{
              margin-top: 30px;
              font-size: 24px;
              font-weight: bold;
              width: 55%;
            }
            .desc_1,.desc_2,.desc_3{
              font-size: 18px;
               width: 55%;
              margin-top: 30px;
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #2FBB20;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 0.327rem;
                margin-top: 60px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
                color: #FFF;
              }
            }

          }
          img{
            max-width: 100%;
            display: block;
          }

        }


        .content_3{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .content{
            height: 100%;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            // padding-right: 100px;
            .title_1{
              margin-top: 10px;
              font-size: 20px;
              font-weight: bold;
              width: 100%;
              text-align: center;
            }

            .desc_1{
              text-align: center;
              font-size: 18px;
              width: 100%;
              margin-top: 10px;
            }
            .pad{
              max-width: 90%;
              display: block;
              margin-top: 20px;
            }
            .desc_word{
              font-size: 14px;
              width: 100%;
              height: 90px;
              margin-top: 0.3rem;
              // border: 1px solid red;
              .half{
                width: 48%;
                float: left;
                margin-right: 0;
                .desc{
                  // text-align: center;
                  display: flex;
                  align-items:center;
                  justify-content: center;
                  img{
                    max-width: 20px;
                    margin-right: 10px;
                  }
                  // margin-top: 30px;
                }
                .desc_3,.desc_4{
                  // text-align: center;
                  margin-top: 24px;
                }
              }
            }
            .button{
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              .btn{
                width: 120px;
                border: 1px solid #2FBB20;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                // margin-top: 15px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }


        }
        .content_4{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          background: #fafafa;
          // justify-content: center;
          .content{
            height: 100%;
            width: 43%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-left: 5%;
            .title_1{
              margin-top: -40px;
              font-size: 20px;
              font-weight: bold;
              width: 55%;
            }

            .desc_1,.desc{
              font-size: 14px;
              width: 55%;
              margin-top: 10px;
            }
            .desc_1{
              margin-top: 10px;
              margin-bottom: 20px;
              padding-bottom: 10px;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(0,0,0,0.7);
              font-size: 18px;
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #2FBB20;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 40px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }
          img{
            max-width: 45%;
            display: block;
          }

        }
        .content_5{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          // justify-content: center;
          .content{
            height: 100%;
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-left: 1.3rem;
            color: #fff;
            .title_1{
              margin-top: -80px;
              font-size: 20px;
              font-weight: bold;
              width: 55%;
            }

            .desc_1,.desc{
              font-size: 14px;
              width: 55%;
              margin-top: 10px;
            }
            .desc_1{
              margin-top: 20px;
              margin-bottom: 20px;
              padding-bottom: 10px;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(255,255,255,0.7);
              font-size: 18px;
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #fff;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 60px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }
          img{
            max-width: 45%;
            display: block;
          }

        }
        .content_6{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .content{
            height: 100%;
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 0 auto;
            // padding-right: 100px;
            .title_1{
              margin-top: 0px;
              font-size: 20px;
              font-weight: bold;
              width: 350px;
              text-align: center;
            }

            .desc_1,.desc{
              text-align: left;
              font-size: 14px;
              width: 330px;
              margin-top: 3px;
            }
            img{
              max-width: 100%;
              display: block;
            }
            .desc_1{
              text-align: left;
              margin-top: 10px;
              margin-bottom: 20px;
              font-size: 18px;;
              width: 330px;
            }
            .desc_2{
              margin-top: 20px;
            }
            .button{
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              .btn{
                width: 120px;
                border: 1px solid #2FBB20;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 20px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }


        }
        .content_7{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          // justify-content: center;
          .content{
            height: 100%;
            width: 42%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-left: 1.3rem;
            color: #fff;
            .title_1{
              margin-top: -80px;
              font-size: 20px;
              font-weight: bold;
              width: 55%;
            }

            .desc_1,.desc{
              font-size: 14px;
              width: 55%;
              margin-top: 10px;
            }
            .desc_1{
              margin-top: 20px;
              // margin-bottom: 20px;
              padding-bottom: 10px;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(255,255,255,0.7);
              font-size: 18px;
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #fff;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 60px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }
          img{
            max-width: 45%;
            display: block;
          }

        }
        .content_8{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          background: #fafafa;
          // justify-content: center;
          .content{
            height: 100%;
            width: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-left: 5%;

            .title_1{
              margin-top: -80px;
              font-size: 20px;
              font-weight: bold;
              width: 55%;
            }

            .desc_1,.desc{
              font-size: 14px;
              width: 55%;
              margin-top: 10px;
            }
            .desc_1{
              margin-top: 20px;
              padding-bottom: 10px;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(0,0,0,0.7);
              font-size: 18px;
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #2FBB20;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 60px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }
          img{
            max-width: 45%;
            display: block;
          }

        }
        .content_9{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          // justify-content: center;
          .content{
            height: 100%;
            width: 43%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding-left: 1.3rem;
            color: #fff;
            .title_1{
              margin-top: -80px;
              font-size: 20px;
              font-weight: bold;
              width: 55%;
            }
            .desc_1,.desc{
              font-size: 14px;
              width: 55%;
              margin-top: 10px;
            }
            .desc_1{
              margin-top: 18px;
              // margin-bottom: 20px;
              padding-bottom: 10px;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(255,255,255,0.7);
              font-size: 18px;
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #fff;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 60px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }
          img{
            max-width: 43%;
            display: block;
          }

        }
        .content_10{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .content{
            padding-top: 45px;
            height: 100%;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            // padding-right: 100px;
            .title_1{
              margin-top: -20px;
              font-size: 20px;
              font-weight: bold;
              width: 100%;
              text-align: center;
            }

            .desc_1{
              text-align: center;
              font-size: 18px;
              width: 100%;
              margin-top: 10px;
            }
            img{
              max-width: 100%;
              display: block;
            }
            .desc_word{
              font-size: 14px;
              width: 100%;
              height: 80px;
              margin-left: 30%;
              // border: 1px solid red;
              .half{
                width: 47%;
                float: left;
                margin-right: 0%;
                .desc{
                  // text-align: center;
                  display: flex;
                  align-items:flex-start;
                  justify-content: left;
                  img{
                    max-width: 16px;
                    margin-right: 10px;
                  }
                  // margin-top: 30px;
                }
                .desc_3,.desc_4{
                  // text-align: center;
                  margin-top: 30px;
                }
              }
            }
            .button{
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              .btn{
                width: 120px;
                border: 1px solid #2FBB20;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 30px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }


        }
        // .content_11{
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   // display: flex;
        //   // align-items: center;
        //   // justify-content: center;
        //   .img_bottom{
        //     position: absolute;
        //     left: 0;
        //     bottom: 0;
        //     max-width: 100%;
        //     display: block;
        //   }
        //   .content{
        //     margin: 0 auto;
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translate(-50%, -50%);
        //     -ms-transform: translate(-50%, -50%);
        //     height: 100%;
        //     width: 63%;
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        //     flex-direction: column;
        //     // padding-right: 100px;
        //     .top{
        //       width: 100%;
        //       flex: 1;
        //       display: flex;
        //       align-items: center;
        //       flex-direction: column;
        //       text-align: center;
        //       .title_1{
        //         font-size: 50px;
        //         color: #FFC804;
        //         margin-top: 100px;
        //       }
        //       .title_2{
        //         font-size: 60px;
        //         color: #323232;
        //         margin-top: 10px;
        //         font-weight: bold;
        //         opacity: 0.8;
        //       }
        //       .desc_1{
        //         font-size: 24px;
        //         margin-top: 30px;
        //         line-height: 45px;
        //         opacity: 0.6;
        //       }
        //       .desc_2{
        //         font-size: 24px;
        //         margin-top: 30px;
        //         line-height: 45px;
        //         opacity: 0.6;
        //       }
        //       .desc_3{
        //         font-size: 30px;
        //         color: #54BEBE;
        //         margin-top: 10px;
        //       }
        //     }
        //     .bottom {
        //       width: 100%;
        //       height: 26.5%;
        //       display: flex;
        //       flex-direction: column;

        //       .info{
        //         flex: 1;
        //         width: 100%;
        //         display: flex;
        //         align-items: center;
        //         justify-content: space-between;
        //         padding-top: 10px;
        //         div{
        //           border: 1px solid #fff;
        //           font-size: 20px;
        //           color: #fff;
        //           height: 80px;
        //           display: flex;
        //           align-items: center;
        //           justify-content: center;
        //           border-radius: 39px;
        //           padding-left: 30px;
        //           padding-right: 30px;
        //           max-width: 30%;
        //           img{
        //             margin-right: 15px;
        //             max-width: 100%;
        //             display: block;
        //           }
        //         }
        //         .address{
        //           max-width: 30%;
        //         }
        //         .tel{}
        //         .email{

        //         }
        //       }
        //       .right{
        //         width: 100%;
        //         height: 25%;
        //         display: flex;
        //         align-items:flex-start;
        //         justify-content: center;
        //         color: #fff;
        //         font-size: 20px;
        //       }
        //     }
        //     .footer_right{
        //       position: absolute;
        //       left: 0;
        //       bottom: 0;
        //       width: 100%;
        //       height: 45px;
        //       display: flex;
        //       align-items: center;
        //       justify-content: center;
        //       color: #fff;
        //       opacity: 0.7;
        //       font-size: 0.218rem;
        //     }
        //   }


        // }
        .content_11{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          // justify-content: center;
          .content{
            height: 100%;
            width: 40%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;
            padding-right: 100px;
            color: #fff;
            .title_1{
              margin-top: -80px;
              font-size: 20px;
              font-weight: bold;
              width: 55%;
            }

            .desc_1,.desc{
              font-size: 14px;
              width: 55%;
              margin-top: 10px;
            }
            .desc_1{
              font-size: 18px;;
              margin-top: 18px;
              padding-bottom: 10px;
              margin-bottom: 20px;
              border-bottom: 1px solid rgba(255,255,255,0.7);
            }
            .button{
              width: 55%;
              .btn{
                width: 120px;
                border: 1px solid #fff;
                border-radius: 5px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: flex-start;
                font-size: 20px;
                margin-top: 60px;
              }
              .btn:hover {
                cursor: pointer; //鼠标变手
              }
            }

          }
          img{
            max-width: 45%;
            display: block;
          }

        }
      }
    }
    .swiper-pagination-product{
      position: absolute;
      z-index: 1;
      right: 50px;
      >>>.swiper-pagination-bullet{
        width: 15px!important;
        height: 15px!important;
        border-radius: 50%!important;
        background: #252525!important;
      }
      >>>.swiper-pagination-bullet-active{
        background: #1351c6 !important;
        width: 15px!important;
        height: 15px!important;
        border-radius: 50%!important;
      }

    }

@media (max-width: 768px){
  .swiper-slide .bg{
      max-width: 100%;
      display: block;
      height: 100%;
    }
  .swiper-pagination-product{
    right: 20px!important;
  }
  .content_1{
    .name{
      font-size: 32px!important;
    }
    .title{
      font-size: 24px!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
    }
  }
  .content_3{
    .content{
      width: 80%!important;
    }
    .button{
      margin-top: 40px!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
    }
  }
  .content_4{
    flex-direction: column!important;
    .content{
      padding-top: 80px!important;
      width: 100%!important;
      padding-left: 0!important;
      .title_1{
        width: 80%!important;
      }
      .desc_1{
        width: 80%!important;
      }
      .desc{
        width: 80%!important;
      }
    }
    img{
      max-width: 100%!important;
      width: 60%;
      margin-bottom: 5%;
    }
    .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;
    }
  }
  .content_5{
    flex-direction: column!important;
    .content{
      padding-top: 100px!important;
      width: 100%!important;
      padding-left: 0!important;
      .title_1{
        width: 80%!important;
      }
      .desc_1{
        width: 80%!important;
      }
      .desc{
        width: 80%!important;
      }
    }
    img{
      max-width: 100%!important;
      width: 60%;
      margin-bottom: 0%;
    }
    .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;
    }
  }
   .content_6{
     .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;
    }
   }
  .content_7{
    flex-direction: column!important;
    .content{
      padding-top: 140px!important;
      width: 100%!important;
      padding-left: 0!important;
      img{
        margin-top: -120px!important;
        margin-bottom: -93px!important;
      }
      .title_1{
        width: 80%!important;
      }
      .desc_1{
        width: 80%!important;
      }
      .desc{
        width: 80%!important;
      }
    }
    img{
      max-width: 100%!important;
      width: 75%;
      margin-bottom: 10%;
    }
    .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;
    }
  }
  .content_8{
    flex-direction: column!important;
    .content{
      padding-top: 140px!important;
      width: 100%!important;
      padding-left: 0!important;
      img{
        margin-top: -34px!important;
        width: 60%!important;
        margin-bottom: -31px!important;
      }
      .title_1{
        width: 80%!important;
      }
      .desc_1{
        width: 80%!important;
      }
      .desc{
        width: 80%!important;
      }
    }
    // img{
    //   max-width: 100%!important;
    //   width: 60%;
    //   margin-top: 10px!important;
    //   margin-bottom: 10%!important;
    // }
    .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;
    }
  }
  .content_9{
    flex-direction: column!important;
    .content{
      padding-top: 140px!important;
      width: 100%!important;
      padding-left: 0!important;
      .title_1{
        width: 80%!important;
      }
      .desc_1{
        width: 80%!important;
      }
      .desc{
        width: 80%!important;
      }
    }
    img{
      max-width: 100%!important;
      width: 60%;
      margin-bottom: 5%;
    }
    .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;
    }
  }
  .content_10{
    .content{
      width: 80%!important;
      .desc_word{
        display: flex!important;
        flex-direction: column!important;
        .half{
          margin-right: 0!important;
          margin-bottom: 20px!important;
          margin-left: 20%!important;
          width: 60%!important;
          .desc{
            justify-content: flex-start!important;
          }
        }
      }
    }
    .button{
      width: auto!important;
      margin-top: 50px!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;

    }
  }
  .content_11{
    flex-direction: column!important;
    .content{
      padding-top: 140px!important;
      width: 100%!important;
      padding-left: 0!important;
      padding-right: 0!important;
      align-items: center!important;
      .title_1{
        width: 80%!important;
      }
      .desc_1{
        width: 80%!important;
      }
      .desc{
        width: 80%!important;
      }
    }
    img{
      max-width: 100%!important;
      width: 55%;
      margin-bottom: 0%;
    }
    .button{
      width: auto!important;
    }
    .btn{
      font-size: 14px!important;
      width: 100px!important;
      height: 30px!important;
      margin-top: 30px!important;

    }
  }
}
.animated_fadeIn{
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    .animated_fadeOut{
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
@-webkit-keyframes fade_in_page {
    0% {
       opacity: 0.3;
    }
50% {
       opacity: 0.5;
    }
    to {
        /* visibility: hidden; */
        opacity: 1;
    }
}

@keyframes fade_in_page {
    0% {
         opacity: 0.3;
    }
50% {
       opacity: 0.5;
    }
    to {
        /* visibility: hidden; */
        opacity: 1;
    }
}

.fade_in_page {
    -webkit-animation-name: fade_in_page;
    animation-name: fade_in_page
}

@-webkit-keyframes fade_out_page {
    0% {
       opacity: 1;
    }

    to {
        opacity: 0.3;
    }
}

@keyframes fade_out_page {
    0% {
         opacity: 1;
    }

    to {
        opacity: 0.3;
    }
}

.fade_out_page {
    -webkit-animation-name: fade_out_page;
    animation-name: fade_out_page
}
</style>
