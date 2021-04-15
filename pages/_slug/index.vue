<template>
  <!--<div class="wrapper pt-16">-->
  <!--  <div>-->
  <!--    <h1 class="title">{{ title }}</h1>-->
  <!--    <p class="publishedAt">{{ publishedAt }}</p>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <img :src="image.url" alt="">-->
  <!--  </div>-->
  <!--<div class="post" v-html="body"></div>-->
  <!--</div>-->
  <div class="wrapper px-10 py-20">
    <div class="text-center max-w-screen-lg mx-auto px-2 py-5">
      <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold">{{ title }}</h3>
      <h3 class="text-sm md:text-base text-gray-600 font-semibold max-w-lg mx-auto my-3">Posted on : <span class="text-gray-700">{{ formatDate(publishedAt) }}</span></h3>
    </div>
    <div class="max-w-screen-lg mx-auto px-2 py-5">
      <p style="white-space: pre-wrap;">{{ content }}</p>
    </div>
    <div>
      <img :src="image.url" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods:{
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ja', options)
    }
  },
  async asyncData({ $config,params }) {
    const { data } = await axios.get(
      `https://bure.microcms.io/api/v1/news/${params.slug}`,
      {
        headers: { 'X-API-KEY': $config.apiKey }
      }
    )
    return data
  }
}
</script>