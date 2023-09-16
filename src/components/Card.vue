<script>
export default {
  data() {
    return {};
  },

  props: { movie: Object },

  methods: {
    buildLangPath(lang) {
      const langUrl = new URL(
        "../assets/img/" + lang + ".png",
        import.meta.url
      );
      return langUrl.href;
    },
  },
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

    <img :src="buildLangPath(movie.lang)" class="w-25" />
    <p>
      {{ movie.vote }}
    </p>
    <p>
      {{ movie.desc }}
    </p>
  </div>
</template>
<style></style>
