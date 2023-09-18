<script>
import { store } from "../data/store";
import Card from "./Card.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { Card },
};
</script>
<template>
  <div class="d-flex flex-wrap justify-content-center movie-list">
    <Card v-for="(movie, i) in store.movies" :info="store.movies[i]" />
    <Card v-for="(serie, i) in store.series" :info="store.series[i]" />
  </div>
</template>
<style scoped>
.movie-list {
  background-color: #434343;
}
</style>
