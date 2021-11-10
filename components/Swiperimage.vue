<template>
  <div class="my-5">
      <div ref="slider" class="keen-slider">
        <div class="keen-slider__slide number-slide1">
        <nuxt-img
          src="/img/image1-2.png"
          quality="70"
          sizes="md:100% lg:500px"
          class="block m-auto"
        />
        </div>
        <div class="keen-slider__slide number-slide2">
        <nuxt-img
          src="/img/image1-3.png"
          quality="70"
          sizes="md:100% lg:500px"
          class="block m-auto"
        />
        </div>
        <div class="keen-slider__slide number-slide3">
        <nuxt-img
          src="/img/image1-4.png"
          quality="70"
          sizes="md:100% lg:500px"
          class="block m-auto"
        />
        </div>
      </div>
    <!--<hooper :infiniteScroll="true">-->
    <!--  <slide>-->
    <!--    <nuxt-img-->
    <!--      src="/img/image1-2.png"-->
    <!--      quality="70"-->
    <!--      sizes="md:100% lg:500px"-->
    <!--      class="block m-auto"-->
    <!--    />-->
    <!--  </slide>-->
    <!--    <nuxt-img-->
    <!--      src="/img/image1-3.png"-->
    <!--      quality="70"-->
    <!--      sizes="md:100% lg:500px"-->
    <!--      class="block m-auto"-->
    <!--    />-->
    <!--  </slide>-->
    <!--    <nuxt-img-->
    <!--      src="/img/image1-4.png"-->
    <!--      quality="70"-->
    <!--      sizes="md:100% lg:500px"-->
    <!--      class="block m-auto"-->
    <!--    />-->
    <!--  </slide>-->
    <!--  <hooper-navigation slot="hooper-addons"></hooper-navigation>-->
    <!--</hooper>-->
    <!--<swiper class="swiper" :options="swiperOption">-->
    <!--  <swiper-slide>-->
    <!--    <nuxt-img-->
    <!--    src="/img/image1-2.png"-->
    <!--    quality="70"-->
    <!--    sizes="md:100% lg:500px"-->
    <!--    class="block m-auto"-->
    <!--  />-->
      <!--<img src="../assets/image1-2.png" class="block m-auto" alt="">-->
    <!--  </swiper-slide>-->
    <!--  <swiper-slide>-->
    <!--    <nuxt-img-->
    <!--    src="/img/image1-3.png"-->
    <!--    quality="70"-->
    <!--    sizes="md:100% lg:500px"-->
    <!--    class="block m-auto"-->
    <!--  />-->
    <!--  </swiper-slide>-->
    <!--  <swiper-slide>-->
    <!--    <nuxt-img-->
    <!--    src="/img/image1-4.png"-->
    <!--    quality="70"-->
    <!--    sizes="md:100% lg:500px"-->
    <!--    class="block m-auto"-->
    <!--  />-->
    <!--  </swiper-slide>-->
      <!--<swiper-slide><img src="../assets/image1-3.png" class="block m-auto" alt=""></swiper-slide>-->
      <!--<swiper-slide><img src="../assets/image1-4.png" class="block m-auto" alt=""></swiper-slide>-->
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
    <!--  <div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--  <div class="swiper-button-next" slot="button-next"></div>-->
    <!--</swiper>-->
  </div>
</template>

// <script>
// export default {
//   data() {
//     return {
//       swiperOption: {
//         pagination: {
//           el: '.swiper-pagination'
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         },
//         loop: true,
//       }
//     }
//   }
// }
// </script>
<script>
// import {
//   Hooper,
//   Slide,
//   Navigation as HooperNavigation
//   } from 'hooper';
// import 'hooper/dist/hooper.css'
// export default {
//   components: {
//     Hooper,
//     Slide,
//     HooperNavigation
//   }
// }
</script>

<script>
import "keen-slider/keen-slider.min.css"
import KeenSlider from "keen-slider"

export default {
  name: "Slider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      loop: true,
    })
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },
}
</script>

<style scoped>
[class^="number-slide"],
[class*=" number-slide"] {
  /*background: grey;*/
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
}
.swiper {
  height: 300px;
  width: 100%;
}

.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: $font-size-huge * 2;
  background-color: $white;
}
.swiper-slide > img {
   object-fit: contain; /* IE: not support */
   width: 100%;
   height: 100%;
}
</style>