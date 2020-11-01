<template>
  <div class="home">
    <Header />
    <Hero />
    <div class="movies">
      <PopularMovies />
      <PopularMovies />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Hero from '../components/Hero'
import PopularMovies from '../components/PopularMovies'
export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    PopularMovies
  }
}
</script>

<style>
.movies {
  margin-top: -200px;
}
</style>
