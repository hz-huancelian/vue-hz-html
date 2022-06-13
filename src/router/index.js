import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components ={
  home:()=>import('@/views/Home.vue'),
  productService:()=>import('@/views/ProductService.vue'),
  customerService:()=>import('@/views/CustomerService.vue'),
  customerCase:()=>import('@/views/CustomerCase.vue'),
  aboutUs:()=>import('@/views/AboutUs.vue'),
  privacyPolicy:()=>import('@/views/PrivacyPolicy.vue'),
  aggrement:()=>import('@/views/Aggrement.vue'),
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        title:'首页'
      },
      component:components.home
    },
    {
      path: '/productService',
      name: 'productService',
      meta:{
        title:'产品服务'
      },
      component:components.productService,
    },
    {
      path: '/customerService',
      name: 'customerService',
      meta:{
        title:'客户服务'
      },
      component:components.customerService,
    },
    {
      path: '/customerCase',
      name: 'customerCase',
      meta:{
        title:'客户案例'
      },
      component:components.customerCase,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      meta:{
        title:'关于我们'
      },
      component:components.aboutUs,
    },
    {
      path: '*',
      name: 'home',
      component:components.home
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component:components.privacyPolicy
    },
    {
      path: '/aggrement',
      name: 'aggrement',
      component:components.aggrement
    },

  ]
})
