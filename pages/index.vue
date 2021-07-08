<template>
  <div id="home">
    <Hero />
    <div class="wrapper-small md:px-10 bg-white py-10">
      <div class="header mt-5">
        <Introduction />
        <full-calendar v-bind:event="items"/>
      </div>
      <div class="mt-16 mb-16">
        <News />
        <Instagram />
        <Products />
        <Googlemap />
        <Information />
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import Introduction from '../components/Introduction.vue'
  import News from '../components/News.vue'
  import Social from '../components/Social.vue'
  import Projects from '../components/Projects.vue'
  import Information from '../components/Information.vue'
  import Products from '../components/Products.vue'
  import Googlemap from '../components/Googlemap.vue'
  import Instagram from '../components/Instagram.vue'
  import axios from 'axios'
  import IntersectionObserver from "../components/IntersectionObserver"

    export default {
      components:{
        Hero, Introduction, News, Information, Social, Projects, Products, IntersectionObserver, Googlemap
      },
      // head() {
      //   return {
      //     script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      //   };
      // },
      data() {
        return {
          items: []
        };
      },
      async asyncData({ $config }) {
        const { data } = await axios.get(
          $config.baseUrl,
          {
            headers: { "X-API-KEY": $config.apiKey }
          }
        );
        const events = []
        for (var i=0; i < data.contents.length ; ++i){
          let colors = ""
          switch(data.contents[i]['color'][0]) {
            case "紫":
              colors = '#FF99FF'
              break
            case "オレンジ":
              colors = '#FF9933'
              break
            case "青":
              colors = '#66CCFF'
              break
            case "緑":
              colors = '#66CC66'
              break
            default:
              colors = '#F0F0F0'
              break
          }
          let ev = {
            id : i,
            title : data.contents[i]['title'],
            start : data.contents[i]['eventDate'],
            detail : data.contents[i]['detail'],
            backgroundColor : colors
          }
          events.push(ev)
        }
        return {
          items: events
        };
      }
    };
</script>

<style>

</style>