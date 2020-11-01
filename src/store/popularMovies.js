import Axios from 'axios'

const state = {
  popularMovies: []
}

const getters = {
  getPopularMovies(state) {
    return state.popularMovies
  }
}

const mutations = {
  setPopularMovies(state, movies) {
    state.popularMovies = movies
  }
}

const actions = {
  fetchPopularMovies({ commit }) {
    Axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=ec05eba6536bd9e3c915f2e783745be3&language=en-US&page=1'
    ).then((res) => {
      console.log(res.data.results)
      commit('setPopularMovies', res.data.results)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
