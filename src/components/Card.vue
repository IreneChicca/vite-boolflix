<script>
export default {
  data() {
    return {};
  },

  props: { movie: Object },
};
</script>
<template>
  <div class="card p-2">
    <h5>
      {{ movie.originalTitle }}
    </h5>
    <p>
      {{ movie.title }}
    </p>
    <p>
      {{ movie.lang }}
    </p>
    <p>
      {{ movie.vote }}
    </p>
    <p>
      {{ movie.desc }}
    </p>
  </div>
</template>
<style></style>
