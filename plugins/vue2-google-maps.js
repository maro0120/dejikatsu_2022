import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAc9YBJiedhMZsaHPo0FI27UkAAkIVUJOE',
    libraries: 'places',
  },
})
