<template>
  <!--导航栏页-->
  <div :class="isAbs ? 'abs nav':'rel nav'" :style="navBg">
    <img class="nav_logo" v-if="theme !== 'black'" :src="require('../assets/logo_white.png')" style="width：115px;height:44px;">
    <img  class="nav_logo" v-else :src="require('../assets/logo_black.png')" style="width：115px;height:44px;">
    <div :class="theme !== 'black' ? 'nav_container' : 'nav_container_black'" >
      <div class="nav_menu">
      <template v-for="(item, index) in navList">
        <div :key=index @click="changeNav(item)">{{item.name}}</div>
      </template>
    </div>
    </div>
    <img @click="triggerMenu" class="nav_nav" v-if="theme !== 'black'" :src="require('../assets/icon_menu_white.png')">
    <img @click="triggerMenu" class="nav_nav" v-else :src="require('../assets/icon_menu_black.png')">
    <el-dropdown trigger="click" ref="dropdown" @command="changeNav">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <template v-for="(item, index) in navList">
          <!-- el-icon-plus -->
          <el-dropdown-item icon="" :key="index" :command="item">{{item.name}}</el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import constant from '@/constant/constant.js';
  export default {
    name: "Nav",
    props: {
      isAbs: {
        require: false,
        type: Boolean
      },
      theme: {
        require: false,
        type: String
      },
      position:{
        require: false,
        type: String
      },
    },
    data(){
      return{
        // isCollapse:true
        winWidth:0
      }
    },
    computed:{
      navList() {
        return constant.nav_list;
      },
      navBg(){
        return this.theme !=="black"? {
          background: "#000",
            opacity: "0.6",
          position: this.position || "relative"
        }:{
          background:"#fff",
           position: this.position || "relative"
        }
      }
    },
    mounted(){
      this.winWidth = window.innerWidth;
      window.onresize = function(){
        this.winWidth = window.innerWidth;
      }
      //
    },
    methods: {
      changeNav(routerObj){
        this.$router.push({
          name: routerObj.router,
          params: {
            navName: routerObj.name
          }
        });
      },
      triggerMenu(){
        if(this.winWidth > 768) {
          return;
        }
        document.querySelector(".el-dropdown-link").click();
      }
    }
  }
</script>

<style scoped lang="scss">
  .abs{
    position: absolute;
    top: 0;
    left: 0;
  }
  .rel{
    position: relative;
  }
  .nav {
    // position: relative;
    padding-left: 40px;
    padding-right: 40px;
    border-bottom: 0.5px solid rgba(125, 125, 125, 0.8);
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 100000;
    .nav_container{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .nav_menu{
        height: 100%;
        width: 400px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #fff;
      }
      .nav_menu div:hover{
          cursor: pointer; //鼠标变手
          color: #00a0dc;
      }
    }
    .nav_container_black{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .nav_menu{
        height: 100%;
        width: 400px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #000;
      }
      .nav_menu div:hover{
          cursor: pointer; //鼠标变手
          color: #00a0dc;
      }
    }

  }
  .el-dropdown{
        position: absolute;
        right: 0;
        // display: none;
        opacity: 0;
      }
       .el-dropdown:hover{
         cursor: pointer;
       }
      // .el-dropdown-menu {
      //   display: none;
      // }
    @media (max-width: 768px){
      // .el-dropdown-menu {
      //   display: block!important;
      // }
      .nav_menu {
        display: none!important;
      }
      .nav_nav{
        position: absolute;
        right: 10px;
      }

      .nav{
        padding-left: 10px!important;
        padding-right: 10px!important;
        border-bottom: 0!important;
        height: 50px!important;
      }
      // .nav_logo{
      //   display: none!important;
      // }

    }
</style>
