<template>
  <div class="flex flex-col h-screen justify-between">
    <transition
      name="headerNav"
    >
      <!--<div class="mb-auto"  >-->
        <Header v-show="isShow" />
      <!--</div>-->
    </transition>
    <div class="bg-gradient-to-r from-gray-100 to-gray-200">
      <Nuxt />
    </div>
    <div class="h-10">
      <Footer />
    </div>
  </div>
</template>

<style>
  .wrapper{
    @apply max-w-screen-xl mx-auto;
  }

  .wrapper-small{
    @apply max-w-screen-lg mx-auto px-6;
  }

  .flex-center{
    @apply flex justify-center items-center;
  }
  .headerNav-enter-active, .headerNav-leave-active {
    transition: opacity .5s;
  }
  .headerNav-enter, .headerNav-leave-to {
    opacity: 0;
    pointer-events: none;
  }
  a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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
  data () {
    return {
      scrollY: 0,
      isShow: true
    }
  },
  mounted () {
    // スクロールイベントを取得
    window.addEventListener('scroll', this.onScroll)
    // window.addEventListener('scroll', () => {
				// if( 30 < window.scrollY ) {
				//   this.onScroll()
				// }
    // })
    window.addEventListener('load', () => {
      this.onScroll()
    })
  },
  watch: {
    // 上にスクロールした時に表示
    scrollY (newValue, oldValue) {
      this.$set(this, 'isShow', newValue < oldValue)
    }
  },
  methods: {
    // スクロール値の取得
    onScroll () {
      // alert(window.scrollY)
      this.$set(this, 'scrollY', window.pageYOffset)
    }
  }
}
</script>