<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { eventBus } from './main'
export default {
  name: 'App',
  created() {
    document.addEventListener('scroll', this.postScrollPosition)
  },
  methods: {
    postScrollPosition() {
      if (window.scrollY > 2) {
        eventBus.$emit('scroll_down', true)
      } else {
        eventBus.$emit('scroll_down', false)
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
}

body {
  background-color: #141414;
}
</style>
