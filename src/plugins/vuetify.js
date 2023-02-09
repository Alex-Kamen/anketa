import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = new Vuetify({
  themes: {
    light: {
      primary: "green",
    },
  },
  icons: {
    iconfont: "mdi",
  }
})

Vue.use(Vuetify)
