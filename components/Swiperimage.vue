<template>
  <div class="my-5">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <nuxt-img
        src="/img/image1-2.png"
        quality="70"
        sizes="md:100% lg:500px"
        class="block m-auto"
      />
      <!--<img src="../assets/image1-2.png" class="block m-auto" alt="">-->
      </swiper-slide>
      <swiper-slide>
        <nuxt-img
        src="/img/image1-3.png"
        quality="70"
        sizes="md:100% lg:500px"
        class="block m-auto"
      />
      </swiper-slide>
      <swiper-slide>
        <nuxt-img
        src="/img/image1-4.png"
        quality="70"
        sizes="md:100% lg:500px"
        class="block m-auto"
      />
      </swiper-slide>
      <!--<swiper-slide><img src="../assets/image1-3.png" class="block m-auto" alt=""></swiper-slide>-->
      <!--<swiper-slide><img src="../assets/image1-4.png" class="block m-auto" alt=""></swiper-slide>-->
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
      }
    }
  }
}
</script>

<style scoped>
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