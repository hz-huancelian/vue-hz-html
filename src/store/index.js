import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ad: {},
    customerCase:[],
    homeWord:[],
    homeOffer:[],
    case:[]
  },
  mutations: {
    'save_ad'(state, ad) {
      this.state.ad = ad;
    },
    'customer_case'(state, customerCase) {
      this.state.customerCase = customerCase;
    },
    'home_word'(state, word) {
      this.state.homeWord = word;
    },
    'home_offer'(state, offer) {
      this.state.homeOffer = offer;
    },
    'case'(state, cCase) {
      this.state.case = cCase;
    },
    
    
  },
  actions: {
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})
window.store = store;
export default store
