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
  <div class="search w-50 container p-4">
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
        @click="$emit('search-btn-click', searchbarText)"
      >
        Cerca
      </button>
    </div>
  </div>
</template>
<style></style>
