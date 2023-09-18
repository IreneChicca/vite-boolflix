<script>
export default {
  data() {
    return {
      languages: ["it", "en", "de", "fr", "hu", "ja"],
    };
  },

  props: { info: Object },

  methods: {
    buildLangPath(lang) {
      const langUrl = new URL(
        "../assets/img/" + lang + ".png",
        import.meta.url
      );
      return langUrl.href;
    },
    starClass(n) {
      return n <= Math.ceil(this.info.vote) / 2
        ? "fa-solid fa-star"
        : "fa-regular fa-star";
    },

    // buildImgPath() {
    //   const imgUrl = new URL(
    //     "../assets/img/" + lang + ".png",
    //     import.meta.url
    //   );
    // },
  },
};
</script>
<template>
  <div class="card p-2 mb-3">
    <h5>
      {{ info.title }}
    </h5>
    <p>
      {{ info.originalTitle }}
    </p>

    <img
      v-if="languages.includes(info.lang)"
      :src="buildLangPath(info.lang)"
      class="flag"
    />
    <img v-else src="../assets/img/xx.png" alt="" class="flag" />
    <p>
      {{ Math.ceil(info.vote) / 2 }}
    </p>
    <p><font-awesome-icon :icon="starClass(n)" v-for="n in 5" /></p>
    <img
      :src="'https://image.tmdb.org/t/p/w342/' + info.img"
      alt=""
      class="w-25"
    />
    <p>
      {{ info.desc }}
    </p>
  </div>
</template>
<style scoped>
.flag {
  width: 40px;
}
</style>
