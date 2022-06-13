<template>
  <!--动画导航栏-->
    <transition
      enter-active-class="animated_slide_down slideInDown"
      leave-active-class="animated_slide_up slideOutUp"
    >
      <Nav position="fixed" theme="black" v-show="showFixedNav"></Nav>
    </transition>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  export default {
    name: "AnimateNav",
    props: {
      scrollEleClass: {
        require: true,
        type: String
      },
      bannerHeight: {
        require: true,
        type: Number
      },
    },    
    components: {
      Nav
    },
    data(){
      return{
        showFixedNav: false,
        showFixedNavRatio: 0.6 // 展示悬浮导航，需要达到banner位置的80%
      }
    },
    computed:{

    },
    mounted(){
      document.querySelector('.' + this.scrollEleClass).onscroll = (event) => {
        const scrollTop = event.srcElement.scrollTop;
        if(scrollTop > this.bannerHeight * this.showFixedNavRatio) {
          this.showFixedNav = true;
        } else {
          this.showFixedNav = false;
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
    .animated_slide_down{
      -webkit-animation-duration: .5s;
      animation-duration: .5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    .animated_slide_up{
      -webkit-animation-duration: .2s;
      animation-duration: .2s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }

</style>
