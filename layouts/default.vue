<template>
  <div class="flex flex-col h-screen justify-between font-body">
    <div id="loading">
      <div id="loader">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
    </div>
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
  /* ローディング画面 */
#loading {
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  background-color: #fca45c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.spinner {
  width: 100px;
  height: 100px;
  margin: 200px auto;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}
/* ローディングアニメーション */
@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
.loaded {
  opacity: 0;
  visibility: hidden;
}
#loader {
  /* Uncomment this to make it run! */
  /*
     animation: loader 5s linear infinite; 
  */
  
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
@keyframes loader {
  0% { left: -100px }
  100% { left: 110%; }
}
#box {
  width: 50px;
  height: 50px;
  background: #fff;
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% { border-bottom-right-radius: 3px; }
  25% { transform: translateY(9px) rotate(22.5deg); }
  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  75% { transform: translateY(9px) rotate(67.5deg); }
  100% { transform: translateY(0) rotate(90deg); }
} 
#shadow { 
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow .5s linear infinite;
}
@keyframes shadow {
  50% {
    transform: scale(1.2,1);
  }
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
    window.onload = function() {
      const spinner = document.getElementById('loading');
      spinner.classList.add('loaded');
    }
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