import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA9b4IOTMeroiH_In3KBvglI5mH73KRQBo',
    libraries: 'places',
  },
})
