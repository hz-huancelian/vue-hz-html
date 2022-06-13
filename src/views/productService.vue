<template>
  <!--登录页-->
  <div class="customerservice">
    <ProductService></ProductService>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import ProductService from '@/components/swiper/Product_Service.vue';
  import constant from '@/constant/constant.js';
  export default {
    name: "index",
    data() {
      return {

      }

    },
    components: {
      Nav,
      ProductService
    },
    computed:{
      constant(){
        return constant;
      },
    },
    mounted(){
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .customerservice{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
