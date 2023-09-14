<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./data/store";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    fetchMovies(searchbarText) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=01c3d334aa14018b5baffdcd7aa00955&query=" +
            searchbarText
        )
        .then((response) => {
          console.log(response.data.results[0].original_title);
          console.log(response.data.results[0].title);
          console.log(response.data.results[0].original_language);
          console.log(response.data.results[0].vote_average);
          // store.movies= ...
        });
    },
  },
};
</script>

<template>
  <AppHeader @search-btn-click="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
