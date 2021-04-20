<template>
  <div>
    <div class="text-center m-10 border-b-2 pb-3">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">blog</h3>
    </div>
    <div v-for='(item, index) in items' :key='item.id' class="transform hover:bg-gray-100 transition duration-500 hover:scale-105">
      <nuxt-link :to="`/${item.id}`">
        <div class="project-card flex flex-col md:flex-row justify-center items-center content-center text-center mt-8 fiu shadow-lg bg-white rounded-xl"
        :class="{
            'fadeInUp': isIntersectingElement[index],
          }">
            <div style="flex-basis:50%;">
                <img :src="item.image.url" class="rounded-xl h-screen/3 block m-auto" alt="">
            </div>
            <div class="flex max-w-lg justify-center" style="flex-basis:50%;">
              <div class="txt md:px-5 lg:px-0">
              <p class="text-base text-gray-700 my-3 group-hover:text-red">{{ new Date(item.publishedAt).toLocaleDateString() }}</p>
              <h2 class="text-xl font-semibold text-gray-800">{{ item.title }}</h2>
              </div>
          </div>
        </div>
      </nuxt-link>
      <intersection-observer
        sentinal-name="sentinal-name"
        v-model='isIntersectingElement[index]'>
      </intersection-observer>
    </div>
  </div>
  
</template>

<script>
// import axios from 'axios'
import IntersectionObserver from "../components/IntersectionObserver"
export default {
  components:{
    IntersectionObserver
  },
  data () {
    return {
      items: "",
      isIntersectingElement: []
    }
  },
  // methods: {
  //   addFind: function (id) {
  //     this.finds.push({ id: false });
  //     console.log(this.finds)
  //   },
  // },
  // mounted() {
  //   this.asyncData()
  // },
  // methods: {
  //   asyncData () {
  //     this.$axios.get(this.$config.newsUrl,{
  //       headers: { 'X-API-KEY': this.$config.apiKey }
  //     })
  //     .then(res =>{
  //       console.log(res)
  //       this.items= res.data.contents
  //     })
  //     .catch(error=>{
  //       //失敗した時の処理
  //       console.log('this.$config.newsUrl:' + this.$config.newsUrl)
  //       console.log('this.$config.apiKey:' + this.$config.apiKey)
  //     })
  //   }
  // },
  async fetch() {
    const data = await this.$axios.get(this.$config.newsUrl,{
        headers: { 'X-API-KEY': this.$config.apiKey }
      })
    this.items = data.data.contents
  }, 
}
</script>

<style>
  /*----- フェードインしながら上へスライド -----*/
  .fiu{
  	opacity: 0;
  	transform: translate(0, 60px);
  	-webkit-transform: translate(0, 60px);
  }
  .fadeInUp{
  	opacity: 1.0;
  	transform: translate(0, 0);
  	-webkit-transform: translate(0, 0);
  	transition: .8s;
  }
  .max-height-30{
    max-height: 40vh;
  }
</style>