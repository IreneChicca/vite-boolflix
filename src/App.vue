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
          let searchLength = response.data.results.length;
          for (let i = 1; i < searchLength; i++) {
            store.movies = {
              originalTitle: response.data.results[i].original_title,
              title: response.data.results[i].title,
              lang: response.data.results[i].original_language,
              vote: response.data.results[i].vote_average,
            };
            console.log(store.movies);
          }
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
