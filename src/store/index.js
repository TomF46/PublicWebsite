import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backgroundColour: '#f7f9fb'
  },
  mutations: {
    setBackgroundColour(state, colour){
      state.backgroundColour = colour;
    }
  },
  actions: {
  },
  modules: {
  }
})
