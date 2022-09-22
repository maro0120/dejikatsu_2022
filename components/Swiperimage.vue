<template>
  <div class="my-5">
    <div class="gallery">
      <nuxt-img src="/img/image1-2.png" quality="70" class="block m-auto" format="webp" />
      <nuxt-img src="/img/image1-3.png" quality="70" class="block m-auto" format="webp" />
      <nuxt-img src="/img/image1-4.png" quality="70" class="block m-auto" format="webp" />
    </div>
    <!--<div ref="slider" class="keen-slider">-->
    <!--  <div class="keen-slider__slide number-slide1">-->
    <!--    <nuxt-img src="/img/image1-2.png" quality="70" sizes="md:100% lg:500px" class="block m-auto" format="webp" />-->
    <!--  </div>-->
    <!--  <div class="keen-slider__slide number-slide2">-->
    <!--    <nuxt-img src="/img/image1-3.png" quality="70" sizes="md:100% lg:500px" class="block m-auto" format="webp" />-->
    <!--  </div>-->
    <!--  <div class="keen-slider__slide number-slide3">-->
    <!--    <nuxt-img src="/img/image1-4.png" quality="70" sizes="md:100% lg:500px" class="block m-auto" format="webp" />-->
    <!--  </div>-->
    <!--</div>-->
  </div>
</template>
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
.gallery {
  --n: 1; /* number of rows*/
  --m: 3; /* number of columns */
  --g: 0px;  /* control the gap */
  --f: .8;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  width: 100%;
  height: 50vh;
  grid-template-columns: repeat(var(--m),auto);
}

.gallery > img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}

.gallery img:hover{
  filter: grayscale(0);
  width:  calc(50vh*var(--f)/var(--n));
  height: calc(100%*var(--f)/var(--m));
}


  /*[class^="number-slide"],*/
  /*[class*=" number-slide"] {*/
    /*background: grey;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  justify-content: center;*/
  /*  font-size: 50px;*/
  /*  color: #fff;*/
  /*  font-weight: 500;*/
  /*  height: 300px;*/
  /*  max-height: 100vh;*/
  /*}*/

  /*.swiper {*/
  /*  height: 300px;*/
  /*  width: 100%;*/
  /*}*/

  /*.swiper .swiper-slide {*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*  text-align: center;*/
  /*  font-weight: bold;*/
  /*  font-size: $font-size-huge * 2;*/
  /*  background-color: $white;*/
  /*}*/

  /*.swiper-slide>img {*/
  /*  object-fit: contain;*/
    /* IE: not support */
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*}*/
</style>
