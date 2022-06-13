<template>
  <div id="app" style="height: 100%;">
          <!-- leave-active-class="animated_fadeOut fade_out_page" -->
    <transition
      enter-active-class="animated_fadeIn fade_in_page"
      leave-active-class="animated_fadeOut fade_out_page"
    >
      <!-- <keep-alive> -->
        <router-view/>
      <!-- </keep-alive> -->
    </transition>
    <PopSubmit></PopSubmit>
    <PopCompanyDetail></PopCompanyDetail>
    <PopSubmitResult></PopSubmitResult>
  </div>
</template>

<script>
  import PopSubmitResult from '@/components/pop/Pop_Submit_Result.vue';
  import PopSubmit from '@/components/pop/Pop_Submit.vue';
  import PopCompanyDetail from '@/components/pop/Pop_Company_Detail.vue';
  export default {
    name: 'App',
    components: {
      PopSubmit,
      PopCompanyDetail,
      PopSubmitResult
    },
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    scrollbar-width: none;
    font-family:"Microsoft Yahei";
  }

  .clearFix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
    .animated_fadeIn{
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    .animated_fadeOut{
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
@-webkit-keyframes fade_in_page {
    0% {
       opacity: 0.3;
    }

    to {
        /* visibility: hidden; */
        opacity: 1;
    }
}

@keyframes fade_in_page {
    0% {
         opacity: 0.3;
    }

    to {
        /* visibility: hidden; */
        opacity: 1;
    }
}

.fade_in_page {
    -webkit-animation-name: fade_in_page;
    animation-name: fade_in_page
}

@-webkit-keyframes fade_out_page {
    0% {
       opacity: 1;
    }

    to {
        opacity: 0.3;
    }
}

@keyframes fade_out_page {
    0% {
         opacity: 1;
    }

    to {
        opacity: 0.3;
    }
}

.fade_out_page {
    -webkit-animation-name: fade_out_page;
    animation-name: fade_out_page
}
</style>
