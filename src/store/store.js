import Vue from 'vue'
import Vuex from 'vuex'

import popularMovies from './popularMovies'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    popularMovies
  }
})
