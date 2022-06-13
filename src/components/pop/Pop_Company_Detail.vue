<template>
  <!--导航栏页-->
  <div class="pop_detail" v-if="showSubmitPop">
      <div class="pop">
        <img class="close" :src="require('../../assets/icon_close.png')" @click="hidePop"/>
        <div class="top"></div>
        <div class="content">
          <div class="title">{{popDetail.title}}:{{popDetail.comment}}</div>
          <div class="say">
            <img class="cycle" :src="require('../../assets/icon_detail.png')" />
            <div class="saying">
              <div class="lang" v-html="popDetail.serverDesc"></div>
              <div class="author">{{popDetail.descSign?'—— ' + popDetail.descSign:''}}</div>
            </div>
          </div>
        </div>
        <div class="fo-content">
          <div class="detail">
              <!-- <div class="name">客户概述</div>-->
              <div class="desc" v-html="popDetail.content"></div>
          </div>
          <!-- <div class="detail">
              <div class="name">客户概述</div>
              <div class="desc">雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长。雨山湖边，落日朝阳，幸福
的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长。</div>
          </div>
          <div class="detail">
              <div class="name">客户概述</div>
              <div class="desc">雨山湖边，落日朝阳，幸福的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长。雨山湖边，落日朝阳，幸福
的模样。时常怀念往日时光，我的马钢清纯姑娘，见证我的初恋成长。</div>
          </div> -->
        </div>
      </div>
  </div>
</template>

<script>
  import constant from '@/constant/constant.js';
  export default {
    name: "PopSubmit",
    data(){
      return{
        showSubmitPop: false,
        popDetail: {}
        // isCollapse:true
      }
    },
    computed:{
      constant() {
        return constant;
      }
    },
    mounted(){
      this.$root.$on('showCompanyDetail', (detail) => {
        this.popDetail = detail;
        this.showSubmitPop = true;
      });
    },
    methods: {
      hidePop(){
        this.showSubmitPop = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .pop_detail {
    background:rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000000;
    .pop{
      position: relative;
      width:50%;
      height: 10rem;
      border: 1px solid rgb(199, 196, 196);
      border-radius:6px;
      background: #f3f3f3;
      opacity: 1!important;
      .close{
        display: block;
        max-width: 100%;
        position: absolute;
        top: -20px;
        right: 0px;
      }
      .top{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.8rem;
        background-image: url("../../assets/bg_pop_detail.png");
        display: flex;
      }
      .content{
        height: 2.5rem;
        width: 84%;
        position: relative;
        top: 0;
        left: 8%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
          width: 100%;
          text-align: left;
          color: #fff;
          font-size:0.3819rem;
          margin-top: 1rem;
        }
        .say{
            width: 100%;
            background: #fff;
            border-radius: 5px;
            height: 2rem;
            margin-top: 0.6rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .cycle{
              display: block;
              height: 95px;
              width: 75px;
              // width: 100px;
              // height: 100px;
              // background: gray;
              // border-radius: 0.6rem
              margin-left: 0.2rem;
              margin-top: 0.4rem;
            }
            .saying{
              flex: 1;
              height: 100%;
              margin-top: 0.2rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .lang{
                font-size: 0.191rem;
                line-height: 18px;
                color: #000;

              }
              .author{

                padding-top:6px;
                font-size: 0.191rem;
                color: #000;
                width: 100%;
                text-align: right;
              }
            }
        }
        .detail{
          .name{
            color: #81C3F8;
            font-size: 0.272rem;
            margin-top: 0.4rem;
          }
          .desc{
            color:rgba(0,0,0,0.6);
            font-size: 0.19rem;
            margin-top: 0.2rem;
            line-height: 0.3rem;
          }
        }
      }
      .fo-content {
        background: white;
        width: 100%;
        padding: 1px；;
        position: relative;
        top: 2rem;
        height: 5.5rem;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .detail{
          width: 80%;
          padding: 0.2rem 1.08rem;
          .name{
            color: #81C3F8;
            font-size: 0.272rem;
            margin-top: 0.4rem;
          }
          .desc{
            color:rgba(0,0,0,0.6);
            font-size: 12px;
            margin-top: 0.2rem;
            line-height: 0.3rem;
          }
        }
      }
    }
  }
@media (max-width: 768px){
  .pop{
    height: 15rem !important;
    width: 90% !important;
    .desc{
      line-height: 20px !important;
    }
    .content {
      height: 110px;
      .say{
        height: 4rem !important;
        padding-bottom: 10px;
        .saying .lang{
          font-size: 12px!important;

        }
        .saying .author{
          font-size: 12px!important;
        }
      }
    }
    .fo-content{
      top: 4.5rem !important;
      height: 10.5rem !important;
    }
  }

}
</style>
