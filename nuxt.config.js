import axios from 'axios'

require('dotenv').config()
// const { MICROCMS_API_KEY } = process.env.MICROCMS_API_KEY
// const { MICROCMS_API_URL } = process.env.MICROCMS_API_URL
// const isDev = process.env.NODE_ENV === 'development'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: 'true',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '久米南町スマホ教室　デジタル活用支援推進事業',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '岡山県　久米南町　スマホ教室　デジタル活用支援推進事業' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        // src: '~/assets/js/wow.min.js'
      }
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'boxicons/css/boxicons.min.css',
    // "~assets/css/animate.css",
    'animate.css/animate.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/full-calendar', mode: 'client' },
    { src: '~/plugins/vue-scrollto', mode: 'client' },
    { src: '~/plugins/vue-good-table', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    // { src: '~/plugins/animate', mode: 'client' },
    // { src: '~/plugins/microcms' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    // '@nuxt/typescript-build',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Cabin+Sketch': true,
          'Kosugi+Maru': true,
          'Noto+Sans+JP': true,
        },
      }
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    ['@nuxtjs/google-gtag',{
      id: 'G-6Z87LYB498',
      debug: false
    }]
    // '@nuxt/http',
  ],
  axios: {
    // proxyHeaders: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //transpile: /@fullcalendar.*/ // transpile ESM modules within all fullcalendar packages
    extend(config, ctx) {},
    // vendor: ['vue2-google-maps'],
    // transpile: [/^vue2-google-maps($|\/)/]
    postcss: {
  		plugins: {
  			'postcss-custom-properties': false
  		}
	}
  },
  privateRuntimeConfig: {
    apiKey: process.env.MICROCMS_API_KEY,
    baseUrl: process.env.MICROCMS_API_URL,
    newsUrl: process.env.MICROCMS_NEWS_URL
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? process.env.MICROCMS_API_KEY : undefined,
    baseUrl: process.env.NODE_ENV !== 'production' ? process.env.MICROCMS_API_URL : undefined,
    newsUrl: process.env.NODE_ENV !== 'production' ? process.env.MICROCMS_NEWS_URL : undefined
  },
  // [isDev ? 'publicRuntimeConfig':'privateRuntimeConfig'] : {'apikey': MICROCMS_API_KEY },
  // [isDev ? 'publicRuntimeConfig':'privateRuntimeConfig'] : {'baseUrl': MICROCMS_API_URL },
  // generate: {
  //   async routes() {
  //     const limit = 1
  //     const range = (start, end) =>
  //       [...Array(end - start + 1)].map((_, i) => start + i)

  //     // 一覧のページング
  //     const pages = await axios
  //       .get(process.env.MICROCMS_NEWS_URL+`?limit=0`, {
  //         headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
  //       })
  //       .then((res) =>
  //         range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
  //           route: `/page/${p}`,
  //         }))
  //       )
  //     return pages
  //   },
  // },
  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: '/page/:p',
  //       component: resolve(__dirname, 'pages/index.vue'),
  //       name: 'page',
  //     })
  //   },
  // },
}
