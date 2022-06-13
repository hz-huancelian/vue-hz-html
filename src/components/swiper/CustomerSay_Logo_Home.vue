<template>
  <div class="swiper-container-say-logos swiper-no-swiping">
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
            content:"“环测链”平台贴近用户需求，符合用户操作习惯，平台角色分工明确，方便我们机构对每一个检测项目进行精细化管理，提高了我们对客户的服务效率和服务质量。",
            author: "曹某，江苏泰科检测总经理",
            logo: "test_home_case_logo1.png"
          },
         {
            content:"平台可以根据采样数据和实验室数据自动生成报告，我只需要做一些检查核对工作，必要时做少部分修改，这样就大大减少了我做一份报告所需要的时间。",
            author: "刘某，江苏博尔环境监测报告编制员",
            logo: "test_home_case_logo2.png"
          },
          {
            content:"平台实现了采样流程的无纸化、自动化，从采样工作分配，到录样、交接样，都能通过平台完成，使我们的采样工作更加便捷。",
            author: "丁某，安徽泰科检测采样负责人",
            logo: "test_home_case_logo3.png"
          },
          {
            content:"我们现在业务部门的报价和合同都是在平台完成，报价单和合同都可以自动生成下载，上级审核工作也是在线审核，非常地方便。",
            author: "王某，江苏方露检测业务员",
            logo: "test_home_case_logo4.png"
          },
          {
            content:"样品可以一键批量出入库，还可以自动生成样品交接单，交接单包含样品详情、送样人、接样人、领样人、仓库存放位置等关键信息，一目了然。",
            author: "李某，森茂检测科技样品管理员",
            logo: "test_home_case_logo1-1.png"
          }

        ],
      }
    },
    computed:{
      constant() {
        return constant;
      }
    },
    mounted(){
      var mySwiper_logos = new Swiper('.swiper-container-say-logos',{
        loop: true,
        slidesPerView: "auto",
        autoplay:true,
        // centeredSlides:true,
        centeredSlides:false,
        spaceBetween: 32,
      });
      this.$root.$on('logoIndex', (index) => {
        console.log(index)
        // mySwiper_logos.slideTo(index);
      });
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .swiper-container-say-logos{
      // margin-top: 75px;
      width: 97%;
      height: 80px;
      overflow: hidden;
      margin: 0 auto;
      .swiper-slide{
        padding: 0;
        margin:10px 0px 0 45px;
        width: auto!important;
        // height: 410px;
        //  background: rgb(30, 30, 30);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .swiper-slide-active{
        // border-bottom: 1px solid red!important;
        // box-shadow: 0px 16px 22px 0px rgba(254, 254, 255, 0.8);

        transform: scale(1.2)!important;
      }
      img{
        height: 62px;
        // max-width: 130px;
      }
    }
</style>
