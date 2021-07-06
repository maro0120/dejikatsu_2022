<template>
  <div class="">
  <div class="wrapper-small mx-auto py-2 bg-brown">
    <!--<hr class="h-px mt-6 border-gray-300 max-w-screen-xl mx-auto">-->
      <div class="pt-2">
        <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
            <!--<div class="logo">-->
            <!--  <nuxt-link to="/">-->
            <!--    <h1 class="text-xl font-semibold text-gray-700"> <span-->
            <!--        class="text-primary font-bold">mono</span>tone.</h1>-->
            <!--  </nuxt-link>-->
            <!--</div>-->

            <!--<div class="my-5 md:my-0 order-last md:order-none text-center">-->
            <!--    <p class="text-lg font-semibold text-gray-600">Made with</p>-->
            <!--</div>-->
            <div class="mb-4">
              <Tailwind />
            </div>
            <div class="flex flex-col mb-4">
              <div>
                <a href="tel:0867283671">電話: 086-728-3671</a>
              </div>
              <div>
                <p>住所: 岡山県久米郡久米南町塩之内1355</p>
              </div>
            </div>
            <div>
              <Social />
            </div>
        </div>
        <div class="mb-4">
          <p class="font-title text-center text-xs">Copyright © Meison de Pain blé. All Rights Reserved.</p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Social from '../components/Social.vue'
export default {
    components: {
        Social
    }
}
</script>

<style>

</style>