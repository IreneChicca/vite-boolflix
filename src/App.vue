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

      // ERRORE ***** errore sulla costante searchLenght, non so perchè ma prende valore sbagliato. Io imposto una variabile searchLenght basata sulla lunghezza dell'array che mi restituisce la ricerca della chiamata ad axios
      // perchè risulta il numero della chiamata precedente? è dovuto dal fatto che faccio due chiamate axios nello stesso metodo?

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

  <!-- ERRORE ******** NON RIESCO AD IMPORTARE LA SECONDA ICONA REGULAR -->
  <!-- <font-awesome-icon icon="fa-regular fa-star" /> -->
  <AppHeader @search-btn-click="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
