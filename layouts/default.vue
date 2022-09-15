<template>
  <div class="flex flex-col justify-between font-body fadein-anime bg-grey">
    <Header />
    <div class="">
      <Nuxt />
      <Footer />
    </div>

  </div>
</template>

<style>
  a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html {
    font-size: 18px;
  }
  /* ローディング画面 */
.bg-grey {
  background: #f5f5f7;
}
</style>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
}
</script>