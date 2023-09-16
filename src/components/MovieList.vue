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
  <div class="p-5">
    <Card v-for="(movie, i) in store.movies" :movie="store.movies[i]" />
  </div>
</template>
<style></style>
