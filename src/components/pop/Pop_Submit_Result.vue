<template>
  <!--导航栏页-->
  <div class="pop_submit_result" v-if="showSubmitResultPop">
      <div class="pop">
        <el-row class="title">
          <el-col>{{checkData || successData}}</el-col>
        </el-row>
        <el-row class="footer">
          <el-col :span="24">
            <el-button  @click="hidePop" type="primary" style="width: 80%;height:50px;font-size:22px;">确定</el-button>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
  import constant from '@/constant/constant.js';
  export default {
    name: "PopSubmitResult",
    data(){
      return{
        showSubmitResultPop: false,
        successData:"我们已收到您的体验申请，将在3个工作日内为您免费开通体验账号，请注意查收您的邮箱，感谢您的申请！",
        checkData:"",
      }
    },
    computed:{
      constant() {
        return constant;
      }
    },
    mounted(){
      this.$root.$on('showSubmitResultPop', (content) => {
        this.checkData = content || "";
        this.showSubmitResultPop = true;
      });
    },
    methods: {
      hidePop(){
        this.showSubmitResultPop = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .pop_submit_result {
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
    .pop{
      background-color: white;
      width: 420px;
      // height: 600px;
      border-radius: 5px;
      opacity: 1!important;
      padding-left: 50px;
      padding-right: 50px;
      padding-bottom: 20px;
      .title {
        margin-top:40px;
        text-align:center;
        font-size: 18px;
        height: 70px;
        opacity: 0.7;
        line-height: 30px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .footer {
        position: relative;
        text-align: center;
      }
    }
  }

  @media (max-width: 768px){
  .pop{
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
