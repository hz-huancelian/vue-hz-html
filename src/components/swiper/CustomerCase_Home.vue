<template>
  <div class="swiper-container" v-if="customerCase.length">
    <div class="swiper-wrapper">
      <template v-for="(item,index) in customerCase">
        <div class="swiper-slide" :key="index">
          <img class="company_photo" :src="constant.imgPath+item.imgUrl" />
          <div class="company_content">
            <img class="logo" :src="constant.imgPath+item.logo" />
            <div class="name" v-html="item.title"></div>
            <div class="desc" v-html="item.content"></div>
          </div>

        </div>
      </template>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
    <div class="swiper-button-prev swiper-button-prev1"></div>
    <div class="swiper-button-next swiper-button-next1"></div>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import constant from '@/constant/constant.js';
  export default {
    name: "CustomerCase_Home",
    data(){
      return{
        //
      }
    },
    watch:{
      customerCase() {
        this.$nextTick(() => {
          if(this.customerCase.length) {
            var mySwiper = new Swiper('.swiper-container',{
              loop: false,
              slidesPerView: window.innerWidth > 768? "4": "1",
              // centeredSlides:true,
              spaceBetween: '1.6%',
              // pagination: {
              //     el: '.swiper-pagination',
              //   },
              navigation: {
                nextEl: '.swiper-button-next1',
                prevEl: '.swiper-button-prev1',
              },
            });
          }
        })

      },
    },
    mounted(){
      // var mySwiper = new Swiper('.swiper-container',{
      //   loop: false,
      //   slidesPerView: window.innerWidth > 768? "4": "1",
      //   // centeredSlides:true,
      //   spaceBetween: '1.6%',
      //   // pagination: {
      //   //     el: '.swiper-pagination',
      //   //   },
      //   navigation: {
      //     nextEl: '.swiper-button-next1',
      //     prevEl: '.swiper-button-prev1',
      //   },
      // });
      // window.onresize = function() {
      //   if(window.innerWidth > 768)
      //   setTimeout(() => {
      //     that.home_bg_height = that.$refs.home_bg.offsetHeight - 70;
      //     console.log(that.home_bg_height)
      //   },0);
      // };
    },
    computed:{
      ...mapState([
          'customerCase'
      ]),
      constant() {
        return constant;
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
    .swiper-container{
      margin-top: 75px;
      width: 84.35%;
      // height: 413px;
      overflow: hidden;
      .swiper-slide{
        width: 23.45%!important;
        // height: 410px;
        background: #fff;
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #fff;
        display: flex;
        flex-direction: column;
        img{
          max-width: 100%;
          display: block;
        }
      }
    }
          .company_photo{
            max-width: 100%;
          }
          .company_content{
            font-size:initial;
            // width: 100%;
            flex: 1;
            padding: 20px 35px 20px 35px;
            .logo{
              height: 34px;
            }
            .name{
              font-size: 14px;
              opacity: 0.8;
              margin-top: 15px;
            }
            .desc{
              margin-top: 13px;
              line-height: 15px;
              font-size: 12px;
              opacity: 0.6;
            }
          }

      .swiper-button-prev1{
        left: 3.8%;
      }
      .swiper-button-next1{
        right: 3.8%;
      }
    >>>.swiper-button-next1,.swiper-button-prev1{
      color: #FFF!important;
      opacity: 0.8!important;

    }

    >>>.swiper-button-prev1:hover{
      color: #00a0dc!important;

    }
    >>>.swiper-button-next1:hover{
      color: #00a0dc!important;
    }
    >>>.swiper-button-disabled{
   color: #000!important;
    opacity: 0.4!important;
}

@media (max-width: 768px){
  .swiper-container{
    width: 75.35%!important;
    margin-top: 30px;
    .swiper-slide{
      width: 99%!important;
      .company_content{
        padding: 15px 15px 15px 15px;
        .name{
          margin-top: 10px!important;
        }
        .desc{
          margin-top: 10px!important;
        }
      }
    }
  }
  // .swiper-button-next, .swiper-button-prev{
  //   top: 20%!important;
  // }
}

</style>
