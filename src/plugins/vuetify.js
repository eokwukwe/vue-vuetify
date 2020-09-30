import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        success: '#3cd1c2',
        info: '#ffaa2c',
        error: '#f83e70',
        background: colors.grey.lighten4 // Not automatically applied
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.indigo.base // If not using lighten/darken, use base to return hex
      }
    }
  }
})
