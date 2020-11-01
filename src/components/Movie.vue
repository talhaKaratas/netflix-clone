<template>
  <div class="movie">
    <img class="movie__category" :src="movieImageUrl" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['movie'],
  computed: {
    movieImageUrl() {
      return 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path
    }
  }
}
</script>

<style>
.movie {
  width: 250px;
  height: auto;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
}

.movie__category {
  width: 100%;
}

.movie:hover {
  transform: scale(1.8);
  position: relative;
  z-index: 11;
}
</style>
