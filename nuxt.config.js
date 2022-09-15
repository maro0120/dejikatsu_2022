require('dotenv').config()

export default {
  target: 'static',
  ssr: 'true',
  components: true,
  head: {
    title: '久米南町スマホ教室　デジタル活用支援推進事業',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '岡山県　久米南町　スマホ教室　デジタル活用支援推進事業' },
      { name: 'google-site-verification', content: 'C-UdKHEuBYYJOoHWVRkZ7pFrKQ9PtN_gfds2hGYW1mM' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'boxicons/css/boxicons.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scrollto', mode: 'client' },
    { src: '~/plugins/vue-good-table', mode: 'client' },
    { src: '~/plugins/KeenSlide', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans+JP': true,
        },
      }
    ],
    ['@nuxt/image', {
        provider: 'static',
        screens: {
            xs: 400,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
        },
    }],
    'nuxt-gsap-module',
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    ['@nuxtjs/google-gtag',{
      id: 'G-6Z87LYB498',
      debug: false
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    // '@nuxt/http',
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://dejikatsu-kumenan.netlify.app/'
  },
  gtm: {
    id: 'GTM-5CZLDQB' // タグマネージャーのid
  },
  axios: {
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false, // 本番環境ではfalseに設定してください
    extend(config, ctx) {},
    postcss: {
  		plugins: {
  			'postcss-custom-properties': false
  		}
	}
  },
}
