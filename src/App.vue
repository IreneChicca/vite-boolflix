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
        });

      axios
        .get(
          "https://api.themoviedb.org/3/search/tv?&api_key=01c3d334aa14018b5baffdcd7aa00955&query=" +
            searchbarText
        )
        .then((risp) => {
          let searchLengthTV = risp.data.results.length;
          for (let i = 0; i < searchLengthTV; i++) {
            const serie = risp.data.results[i];

            store.series.push({
              originalTitle: serie.original_name,
              title: serie.name,
              id: serie.id,
              lang: serie.original_language,
              vote: serie.vote_average,
              desc: serie.overview,
              img: serie.poster_path,
            });
          }
        });
      console.log(store.movies);
      console.log(store.series);
    },
  },
};
</script>

<template>
  <font-awesome-icon icon="fa-solid fa-star" />
  <font-awesome-icon icon="fa-regular fa-star" />
  <AppHeader @search-btn-click="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
