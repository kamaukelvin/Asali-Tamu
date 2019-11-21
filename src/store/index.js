import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems:[
      {
          name: 'Frozen Yogurt',
          price: 159,
          description: 'Natural sweet honey, no preservatives added'
  
         }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getBasketItems: state=>state.basketItems
  }
})
