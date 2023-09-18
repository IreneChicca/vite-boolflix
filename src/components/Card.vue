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
  <div class="ccard card">
    <div class="card-back">
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

      <p>
        {{ info.desc }}
      </p>
    </div>
    <div class="card-front">
      <img :src="'https://image.tmdb.org/t/p/w780/' + info.img" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.flag {
  width: 40px;
}

.ccard {
  width: 300px;
  height: 450px;
  perspective: 1000px;
  border: 1px solid red;
  position: relative;

  &:hover .card-front {
    transform: rotateY(-180deg);
  }
  &:hover .card-back {
    transform: rotateY(0deg);
  }
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.9s ease;
}

.card-front {
  img {
    width: 100%;
    height: auto;
  }
}

.card-back {
  transform: rotateY(180deg);
}
</style>
