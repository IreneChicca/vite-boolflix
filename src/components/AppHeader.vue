<script>
export default {
  data() {
    return {
      searchbarText: "",
    };
  },

  emits: ["search-btn-click"],
};
</script>
<template>
  <header>
    <div
      class="container-fluid p-4 d-flex justify-content-between align-items-center"
    >
      <div>
        <img
          src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt=""
          class="w-50"
        />
      </div>
      <form @submit.prevent="$emit('search-btn-click', searchbarText)">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Scrivi qualcosa.."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="searchbarText"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Cerca
          </button>
        </div>
      </form>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: #1b1b1b;
}
</style>
