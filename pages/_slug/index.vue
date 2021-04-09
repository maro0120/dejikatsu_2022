<template>
  <div class="wrapper pt-16">
    <div>
      <h1 class="title">{{ title }}</h1>
      <p class="publishedAt">{{ publishedAt }}</p>
    </div>
    <div>
      <img :src="image.url" alt="">
    </div>
  <!--<div class="post" v-html="body"></div>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
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