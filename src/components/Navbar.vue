<template>
  <nav>
    <v-snackbar color="success" :timeout="4000" top v-model="snackbar">
      Awesome! You have added a new project
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-navigation-drawer app color="primary" v-model="drawer">
      <v-row justify="center" class="mt-5">
        <v-col cols="6">
          <v-avatar size="100">
            <img src="/avatar-1.png" />
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">The fCoder</p>
        </v-col>
      </v-row>

      <!-- poppup modal-->
      <v-row justify="center">
        <v-col cols="8">
          <popup @project-added="snackbar = true" />
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevate-on-scroll dense app color="white lighten-4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Vuetify</span>
        <span>Task</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="primary" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
            class="p"
          >
            <v-list-item-title class="text-sm-body-2 primary--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  name: 'Navbar',

  components: {
    Popup
  },

  data() {
    return {
      snackbar: false,
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' }
      ]
    }
  }
}
</script>

<style></style>
