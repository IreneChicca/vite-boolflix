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
          for (let i = 0; i < searchLength; i++) {
            const movie = response.data.results[i];

            store.movies.push({
              originalTitle: movie.original_title,
              title: movie.title,
              id: movie.id,
              lang: movie.original_language,
              vote: movie.vote_average,
              desc: movie.overview,
              img: movie.poster_path,
            });
          }
          console.log(store.movies);
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
