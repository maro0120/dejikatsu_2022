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
  <div>
  <nav class="fixed w-full p-3 bg-transparent z-50 bg-brown">
    <div class="flex items-center justify-between">

      <!-- Header logo -->
      <div>
        <nuxt-link v-scroll-to="'#home'"to><Tailwind /></nuxt-link>
      </div>
      <div class="block">
        <ul class="flex space-x-8 font-title">
          <!--<li class="transform transition duration-300 hover:scale-125"><nuxt-link v-scroll-to="'#home'"to>Home</nuxt-link></li>-->
          <li class="transform transition duration-300 hover:scale-125"><button type="button" class="outline-none focus:outline-none"onclick="history.back()">back</button></li>
          </ul>
      </div>
    </div>
  </nav>
  <div class="wrapper-small md:px-10 bg-white py-10">
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'news-list',
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