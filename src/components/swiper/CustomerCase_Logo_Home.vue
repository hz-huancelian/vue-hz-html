<template>
  <div class="swiper-container-logos swiper-no-swiping" >
    <div class="swiper-wrapper">
      <template v-for="(item,index) in corpLogos" >
        <div class="swiper-slide" :key="index">
          <img :key="index" :src="require(`../../assets/${item.logo}`)" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import constant from '@/constant/constant.js';
  export default {
    name: "CustomerCase_Logo_Home",
    data(){
      return{
        corpLogos: [
          {
            logo: "test_home_case_logo5.png"
          },
          {
            logo: "test_home_case_logo6.png"
          },
          {
            logo: "test_home_case_logo7.png"
          },
          {
            logo: "test_home_case_logo8.png"
          },
          {
            logo: "test_home_case_logo5.png"
          },
          {
            logo: "test_home_case_logo6.png"
          },
          {
            logo: "test_home_case_logo7.png"
          },
          {
            logo: "test_home_case_logo8.png"
          },
          {
            logo: "test_home_case_logo9.png"
          },
          {
            logo: "test_home_case_logo10.png"
          },
        ],
      }
    },
    computed:{
      constant() {
        return constant;
      }
    },
    mounted(){
      var mySwiper_logos = new Swiper('.swiper-container-logos',{
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 32,
        autoplay : {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        speed:2000,
        loop : true,
        freeMode:true,
        slidesPerGroup : 1,
      });
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
      .swiper-container-logos{
      // margin-top: 75px;
      width: 97%;
      height: 120px;
      overflow: hidden;
      .swiper-slide{
        width: auto!important;
        // height: 410px;
        background: #fff;
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #fff;
        display: flex;
        flex-direction: column;
        img{
          // max-width: 100%;
          max-height: 100%;
          display: block;
        }
      }
    }
@media (max-width: 768px){
  .home_corparation_logos{
    display: none!important;
  }
}

</style>
