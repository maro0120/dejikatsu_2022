<template>
  <div>
    <!--<li v-for='item in items' :key='item.id'>-->
    <!--    <nuxt-link :to="`/${item.id}`">-->
    <!--      {{ item.title }}-->
    <!--    </nuxt-link>-->
    <!--</li>-->
    <div v-for='item in items' :key='item.id' class="transform hover:bg-gray-200 transition duration-500 hover:scale-105">
      <nuxt-link :to="`/${item.id}`">
        <div class="project-card md:flex mt-8 ">
        <!--:class="{-->
        <!--    'anime-right': isIntersectingElement,-->
        <!--  }">-->
            <div class="img max-w-lg md:max-w-sm mx-auto">
                <img :src="item.image.url" class="rounded-xl" alt="">
            </div>
            <div class="flex flex-col justify-between max-w-lg mx-auto">
                <div class="txt md:px-5 lg:px-0">
                <p class="text-base text-gray-700 my-3 group-hover:text-red">{{ new Date(item.publishedAt).toLocaleDateString() }}</p>
                <h2 class="text-xl font-semibold text-gray-800">{{ item.title }}</h2>
                </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
  
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      items: ""
    }
  },
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
    this.item = data.data.contents
    // console.log(data.data.contents)
  }, 
}
</script>