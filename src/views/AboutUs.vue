<template>
  <!--登录页-->
  <div class="aboutus">
    <div class="aboutus_bg">
      <img @load="setWinHeight" ref="aboutus_bg" :src="require('../assets/bg_aboutus.jpg')">
      <div class="aboutus_bg_content"></div>
    </div>
    <div class="aboutus_main_content" v-if="aboutus_bg_height">
      <div class="aboutus_main_container">
        <!-- 导航 -->
        <Nav></Nav>
        <AnimateNav scrollEleClass="aboutus_main_content" :bannerHeight="aboutus_bg_height"></AnimateNav>
        <!-- banner 窗户 -->
        <div class="aboutus_banner_win" :style="winHeight">{{$route.meta.title}}</div>
        <!-- banner 窗户 -->
        <div class="aboutus_info">
          <div class="aboutus_info_name">{{constant.about_us_info.name}}</div>
          <div class="aboutus_info_desc">
            <el-row v-for="(item, index) in constant.about_us_info.infos" :key="index">
                <el-col :span="2" style="line-height:22px;font-weight:bolde;font-size:16px;width: 80px;">{{ item.title }}</el-col>
                <el-col :span="22"><div style="line-height:24px;">{{item.content}}</div></el-col>
            </el-row>
          </div>
          <!-- <template v-for="(item, index) in constant.about_us_info.infos">


            <div :key="index" class="aboutus_info_desc">
              <el-row :gutter="10">
                <el-col :span="2">{{ item.title }}</el-col>
                <el-col :span="22"><div style="line-height:22px;">{{item.content}}</div></el-col>
              </el-row>
            </div>
          </template> -->
        </div>
        <!-- 公司口号 -->
        <div class="aboutus_slogan" v-if="ad.imgUrl" @click="showSubmitPop">
          <div class="text">{{constant.slogan}}</div>
          <!-- <img class="img" :src="require('../assets/bg_slogan.jpg')"> -->
          <img class="img" :src="adUrl" />
        </div>
        <Footer></Footer>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Nav from '@/components/Nav.vue';
  import AnimateNav from '@/components/Animate_Nav.vue';
  import Footer from '@/components/Footer.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "index",
    data() {
      return {
        aboutus_bg_height: 0,
      }

    },
    components: {
      Nav,
      AnimateNav,
      Footer
    },
    mounted(){
      const that = this;
      window.onresize = function() {
        setTimeout(() => {
          that.aboutus_bg_height = that.$refs.aboutus_bg.offsetHeight - 70;
        },0);
      }
    },
    computed:{
      ...mapState([
          'ad',
      ]),
      adUrl() {
        return this.constant.imgPath + this.ad.imgUrl;
      },
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
      setWinHeight(){
         this.aboutus_bg_height = this.$refs.aboutus_bg.offsetHeight - 70;
      },
      submitForm(form) {
        this.$router.push('/allPages')
        // this.$refs[form].validate((valid) => {
        //   if (valid) {

        //   } else {
        //     return false;
        //   }
        // })
      },
      login() {
        this.loading_ = true
        this.$axios.post('/login', this.form).then(res => {
          if (res.data.code = 20000) {
            this.$message.success('登录成功')
            this.$store.commit('USER_DATA', res.data.data)
            this.$store.commit('SAVE_TOKEN', res.data.data.admin_token)
            setTimeout(() => {
              this.$router.push('/allPages')
            }, 1000)
          } else {
            this.$message.info(res.data.msg)
          }
          this.loading_ = false
        }).catch(err => {
          this.$message.error('请求出错,请确认密码是否正确或账号被禁用，请联系管理员')
          this.loading_ = false
        })
      },
      showSubmitPop(){
      this.$root.$emit('showPopSubmit');
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
    // height: 5000px;
  }
  .aboutus_bg {
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    // background:url("../assets/bg_aboutus.jpg") center no-repeat;
    // background-size: 100%;
    // padding-top: 37.5%;
    // background-attachment:fixed;
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
  .aboutus_main_content{
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
          padding: 0.81rem 0 0.68rem 0;
          .aboutus_info_name{
            margin-left: 1.45rem;
            font-size: 31px;
            color: rgba(90,90,90,1);
          }
          .aboutus_info_desc{
            // text-indent: 2em;
            font-size: 16px;
            margin-top: 10px;
            margin-left: 1.45rem;
            margin-right: 1.09rem;
            color: rgba(150,150,150,1);
          }

        }
        .aboutus_slogan{
            position: relative;
            width: 100%;
           .text{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              font-size: 0.98rem;
              color: rgba(255,255,255,0.9)
            }
           .img{
              display:block;
              width: 100%;
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

    @media (max-width: 768px){
      .aboutus_info_name{
        font-size: 18px!important;
      }
      .aboutus_info_desc{
        font-size: 14px!important;
      }
      .aboutus_slogan{
        height: 170px!important;
        overflow: hidden;
        img{
          width: auto!important;
        }
        .text{
          width: 100%!important;
          text-align: center!important;
        }
      }
}
</style>
