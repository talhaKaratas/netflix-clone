<template>
  <div class="row">
    <div class="row__title">
      <h2>Popular Movies</h2>
    </div>
    <div class="row__images">
      <Movie
        v-for="(movie, index) in getPopularMovies"
        :key="index"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import Movie from './Movie'
import { mapGetters } from 'vuex'
export default {
  name: 'PopularMovies',
  components: {
    Movie
  },
  created() {
    this.$store.dispatch('fetchPopularMovies')
  },
  computed: {
    ...mapGetters(['getPopularMovies'])
  }
}
</script>

<style>
.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: -70px; */
  position: relative;
  z-index: 9;
  margin-bottom: -60px;
}
.row__title {
  color: #fff;
  padding-left: 60px;
  margin-bottom: -70px;
}
.row__images {
  display: grid;
  place-items: center;
  height: 300px;
  grid-template-columns: repeat(20, 255px);
  padding: 0 60px;

  overflow-x: scroll;
}
.row__images::-webkit-scrollbar {
  display: none;
}
</style>
