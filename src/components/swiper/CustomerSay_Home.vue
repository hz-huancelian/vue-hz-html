<template>
  <div class="swiper-container-saying" v-if="homeWord.length">
    <div class="swiper-wrapper">
      <template v-for="(item,index) in homeWord">
        <div class="swiper-slide" :key="index">
          <div class="wellsaying_content">
            <div class="content" v-html="item.content"></div>
            <!-- <div class="author" v-html="item.bottomSign"></div> -->
            <div class="author" v-html="item.bottomSign?'——' + item.bottomSign:''"></div>
          </div>

        </div>
      </template>
    </div>
    <div class="swiper-pagination-saying"></div>
    <div class="swiper-button-prev swiper-button-prev2"></div>
    <div class="swiper-button-next swiper-button-next2"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import constant from '@/constant/constant.js';
  export default {
    name: "CustomerSay_Home",
    data(){
      return{
        // 
      }
    },
    watch:{
      homeWord() {
        const that = this;
        this.$nextTick(() => { 
          if(this.homeWord.length) {
            var mySwiper_saying = new Swiper('.swiper-container-saying',{
              loop: true,
              pagination: {
                  el: '.swiper-pagination-saying',
                },
              navigation: {
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
              },
              on:{
                slideChange: function(){
                  let index = 0;
                  if(this.activeIndex > that.homeWord.length) {
                    index = 0;
                  }
                  else if(this.activeIndex < 1) {
                    index = 6;
                  }
                  else{
                    index = this.activeIndex -1;
                  }
                  that.$root.$emit('logoIndex',index);
                },
              }
            });
          }
        })

      },
    },
    mounted(){
      // 
    },
    computed:{
      ...mapState([
          'homeWord'
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
    .swiper-container-saying{
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
    .swiper-button-next2{
      right: 60px!important;
    }
    .swiper-button-prev2{
      left: 60px!important;
    }
    .wellsaying_content{
      width: 40%;
      height: auto;
      // margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      // border: 1px solid red;
      .content {
        font-size: 0.287rem;
        color: #fff;
        line-height: 0.59rem;
      }
      .author{
        font-size: 0.19rem;
        text-align: right;
        color: #fff;
        margin-top: 0.39rem;
      }
    }
    .swiper-pagination-saying{
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 27%;
    }
    >>>.swiper-button-next2,.swiper-button-prev2{
      color: #FFF!important;
      opacity: 0.8!important;

    }

    >>>.swiper-button-prev2:hover{
      color: #00a0dc!important;

    }
    >>>.swiper-button-next2:hover{
      color: #00a0dc!important;
    }

@media (max-width: 768px){
    .wellsaying_content{
      width: 65%!important;
    }
    .swiper-button-prev2{
      left: 15px!important;
    }
    .swiper-button-next2{
      right: 15px!important;
    }
.swiper-pagination-saying{
  bottom: 17%!important;
}
}

</style>
