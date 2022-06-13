<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <template v-for="(item,index) in customerCase">
        <div class="swiper-slide" :key="index">
            <img class="company_photo" :src="constant.imgPath+(item.bigImgUrl || item.imgUrl)" />
          <div class="company_content">
            <img class="logo" :src="constant.imgPath+item.logo" />
            <div class="name" v-html="item.title"></div>
            <div class="desc" ><p v-html="item.content"></p></div>
          </div>

        </div>
      </template>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import constant from '@/constant/constant.js';
  export default {
    name: "CustomerCase",
    data(){
      return{
        //
      }
    },
    mounted(){
      this.$nextTick(() => {
              var mySwiper = new Swiper('.swiper-container',{
              loop: true,
                  slidesPerView: "auto",
                  centeredSlides:true,
                  spaceBetween: 30,
              pagination: {
                  el: '.swiper-pagination',
                },
              });
      })

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
      margin-top: 35px;
      // height: 710px;
      position: relative;
      padding-bottom: 1.2rem;
      overflow: hidden;
    }
    .swiper-slide{
      width: 15.68rem!important;
      // height: 660px;
      background: #fff;
      border-radius: 15px;
      border: 1px solid #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .company_photo{
            max-width: 100%;
            max-height: 300px;
          }
          .company_content{
            // width: 100%;
            font-size: initial;
            flex: 1;
            padding: 20px 0.682rem 20px 0.682rem;
            .logo{
              height: 47px;
              max-height: 47px;
            }
            .name{
              font-size: 0.327rem;
              margin-top: 15px;
            }
            .desc{
              margin-top: 14px;
              font-size: 0.272rem;
              opacity: 0.6;
              p{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
              }
            }
          }
    }
    @media (max-width: 768px){
  .swiper-slide{
    width: 77%!important;
    .company_content .logo {
      max-height: 32px!important;
    }
  }
}
</style>
