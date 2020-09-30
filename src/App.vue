<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <navbar />
    <v-main>
      <div class="px-4 pb-4">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },

  data: () => ({
    //
  })
}
</script>
