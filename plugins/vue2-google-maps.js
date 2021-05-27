import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAL5AUhiNsZLvOa6QG5R3X-j9G_ABVnOmQ',
    libraries: 'places',
  },
})