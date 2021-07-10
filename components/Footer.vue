<template>
  <div class="">
  <div class="wrapper-small mx-auto py-2 bg-brown">
      <div class="pt-2">
        <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
            <div class="mb-4">
              <Tailwind />
            </div>
            <div class="flex flex-col mb-4">
              <div>
                <a href="tel:08038909705">電話: 080-3890-9705</a>
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