<template>
  <div class="wrapper-small md:px-10">
    <div class="header mt-5">
      <Hero />
      <Social />
      <full-calendar v-bind:event="items"/>
    </div>

    <div class="mt-16">
        <div class="flex justify-center items-center text-base font-semibold text-gray-600">
          <h4 class="text-center">Featured Projects </h4>
          <i class='bx bx-chevrons-down ml-1 mt-1'></i>
        </div>

        <div>
          <Projects />
        </div>
    </div>

    

    <div class="mt-16 md:mt-24">
        <div class="flex justify-center items-center text-base font-semibold text-gray-600">
          <h4 class="text-center">Tech stack I use.</h4>
          <i class='bx bx-chevrons-down ml-1 mt-1'></i>
        </div>

        <div>
          <TechStack />
        </div>
    </div>

    


  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import Social from '../components/Social.vue'
  import Projects from '../components/Projects.vue'
  import TechStack from '../components/TechStack.vue'
  import axios from 'axios';

    export default {
      components:{
        Hero, Social, Projects, TechStack
      },
      head() {
        return {
          script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        };
      },
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
          let ev = {
            id : i,
            title : data.contents[i]['title'],
            start : data.contents[i]['eventDate']
          }
          events.push(ev)
        }
        // data.contents.forEach(event => {
        //   Object.keys(event).forEach(key => {
        //     console.log(`key: ${key} value: ${event[key]}`)
        //   })
        // })
        return {
          items: events
        };
      }
    };
</script>

<style>

</style>