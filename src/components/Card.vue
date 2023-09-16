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
      {{ info.vote }}
    </p>
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
