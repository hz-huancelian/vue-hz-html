<template>
  <div class="swiper-container-offer" v-if="homeOffer.length">
    <div class="swiper-wrapper">
      <template v-for="(item,index) in homeOffer" >
        <div class="swiper-slide" :key="index" >
          <img :src="constant.imgPath+item.imgUrl" />
          <div class="right">
            <div class="goOffer" v-html="item.title"></div>
            <div class="desc" v-html="item.content"></div>
            <div class="buttons">
              <!--  -->
              <div class="left_button" @click="openVide(item)">{{constant.preview}}</div>
              <div class="right_button" @click="turntoproduct">{{constant.more}}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
    <div class="swiper-button-prev swiper-button-offer-prev"></div>
    <div class="swiper-button-next swiper-button-offer-next"></div>
    <el-dialog :visible.sync="showVideo">
      <video id="showVideo" ref="showVideo" autoplay controls loop muted style="width:100%">
          <source  :src="videoUrl" type="video/mp4" />
        </video>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import constant from '@/constant/constant.js';
  export default {
    name: "CustomerCase_Home",
    data(){
      return{
        videoUrl: '',
        showVideo: false
      }
    },
    watch:{
      homeOffer() {
        this.$nextTick(() => {
          if(this.homeOffer.length) {
            var mySwiper = new Swiper('.swiper-container-offer',{
              loop: true,
              autoplay: true,
              spaceBetween: 0,
              navigation: {
                nextEl: '.swiper-button-offer-next',
                prevEl: '.swiper-button-offer-prev',
              },
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
        'homeOffer'
      ]),
      constant() {
        return constant;
      }
    },
    methods: {
      openVide(item) {
        if(item.videoUrl) {
          this.videoUrl = this.constant.videoPath + item.videoUrl;
          this.$nextTick(() => {
            this.$refs.showVideo.load()
          })
          this.showVideo = true
        }
      },

      turntoproduct() {
        this.$router.push('/productService');
      }
    }
  }
</script>

<style scoped lang="scss">
    .swiper-container-offer{
      position: relative;
      // margin-top: 40px;
      // width: 84.35%;
      // height: 413px;
      overflow: hidden;
      .swiper-slide{
        // width: 380px!important;
        // height: 410px;
        background: rgb(30, 30, 30);
        border-radius: 2px;
        // overflow: hidden;
        // border: 1px solid #fff;
        // display: flex;
        // flex-direction: column;
        img{
          width: 50%;
          max-width: 100%;
          display: block;
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
        .right{
          float: left;
           width: 40%;
          .goOffer {
            position: absolute;
            left: 64%;
            top: 36%;
            // width: 100px;
            // height: 100px;
            font-size: 0.625rem;
            color: #fff;
            opacity: 0.7;
          }
          .desc {
            position: absolute;
            left: 64%;
            top: 45%;
            width: 20%;
            // height: 100px;
            font-size: 0.235rem;
            color: #fff;
            line-height: 0.45rem;
            opacity: 0.5;
          }
          .buttons{
            position: absolute;
            left: 64%;
            bottom: 25%;
            width: 176px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            .left_button {
              width: 83px;
              height: 100%;
              background: #000;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              border-radius: 2px;
              border: 1px solid rgb(180, 178, 178);
            }
            .left_button:hover,.right_button:hover {
              cursor: pointer; //鼠标变手
              background: #00a0dc;
              color: #FFF;
              border: 0;
            }
            .right_button {
              width: 83px;
              height: 100%;
              // background: #00a0dc;
              // color: #FFF;
              background: #000;
              color: #fff;
              border: 1px solid rgb(180, 178, 178);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              border-radius: 2px;
            }
          }
        }



      }
      .swiper-button-offer-prev{
        top: 30%;
        left: 64%;
      }
      .swiper-button-offer-next{
        top: 30%;
        right: 30%;
      }
      .company_photo{
            max-width: 100%;
          }
          .company_content{
            // width: 100%;
            flex: 1;
            padding: 20px 35px 20px 35px;
            .logo{
              max-height: 34px;
            }
            .name{
              font-size: 14px;
              opacity: 0.8;
              margin-top: 15px;
            }
            .desc{
              margin-top: 20px;
              font-size: 12px;
              opacity: 0.6;
            }
          }
    }



>>>.swiper-button-offer-next,.swiper-button-offer-prev{
  color: #fff!important;
  opacity: 0.8!important;
  transform: scale(0.6)!important;


}
>>>.swiper-button-disabled{
   color: #000!important;
    opacity: 0.4!important;
    transform: scale(0.6)!important;
}
>>>.swiper-button-offer-prev:hover{
  color:#00a0dc !important;

}
>>>.swiper-button-offer-next:hover{
  color: #00a0dc!important;
}

@media (max-width: 768px){
  .swiper-slide{
    display: flex!important;
    flex-direction: column!important;
    img{
      padding-top: 30px!important;
      padding-bottom: 10px!important;
      width: 100%!important;
    }
    .right{
      width: 100%!important;
      display: flex!important;
      flex-direction: column!important;
      align-items: center!important;
      justify-content: center!important;
      .goOffer{
        position: relative!important;
        width: 100%!important;
        text-align: center!important;
        font-size: 14px!important;
        top: 0!important;
        left: 0!important;
        margin-bottom: 10px!important;
      }
      .desc{
        position: relative!important;
        width: 90%!important;
        font-size: 12px!important;
        top: 0!important;
        left: 0!important;
        margin-bottom: 10px!important;
        line-height: 16px!important;
        padding-left: 20px!important;
        padding-right: 20px!important;
      }
      .buttons{
        position: relative!important;
        width: 100%!important;
        justify-content: center!important;
        top: 0!important;
        left: 0!important;
        padding-bottom: 20px!important;
        div{
          margin-right: 15px!important;
          width: 66px!important;
        }
      }
    }
  }
.swiper-button-offer-next{
  right: 2%!important;
}
.swiper-button-offer-prev{
  left: 2%!important;
}
// .img{
//   width: 45%!important;
// }
// .goOffer{
//   font-size: 14px!important;
//   left: 58%!important;
// }
// .desc{
//   width: 40%!important;
//   font-size: 12px!important;
//   left: 58%!important;
// }
// .buttons{
//   width: 140px!important;
//   bottom: 10%!important;
//   left: 58%!important;
//   div{
//     width: 66px!important;
//   }
// }

}
</style>
