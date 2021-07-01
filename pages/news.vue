<template>
  <div>
    <div class="wrapper-small md:px-10 bg-white py-10">
      <div class="header mt-5">
        <ul>
          <li v-for="content in contents" :key="content.id">
            <nuxt-link :to="`/${content.id}`">{{ content.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout: 'news-list',
  async asyncData({ $config, params }) {
    const page = params.p || '1'
    const limit = 1
    const { data } = await axios.get(
      $config.newsUrl+`?limit=${limit}&offset=${(page - 1) * limit}`,
      { headers: { 'X-API-KEY': $config.apiKey } }
    )
    return data
  }
}
</script>