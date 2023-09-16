<script>
export default {
  data() {
    return {
      languages: ["it", "en", "de"],
    };
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

    <img
      v-if="languages.includes(movie.lang)"
      :src="buildLangPath(movie.lang)"
      class="flag"
    />
    <img v-else src="../assets/img/xx.png" alt="" class="flag" />
    <p>
      {{ movie.vote }}
    </p>
    <p>
      {{ movie.desc }}
    </p>
  </div>
</template>
<style scoped>
.flag {
  width: 40px;
}
</style>
