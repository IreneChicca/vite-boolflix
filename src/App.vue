<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain },

  methods: {
    searchElement() {
      console.log("ok");
    },
  },
};
</script>

<template>
  <AppHeader @search-btn-click="searchElement" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
