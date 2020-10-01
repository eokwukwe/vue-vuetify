<template>
  <div class="home">
    <v-container>
      <h1 class="subheading grey--text">Dashboard</h1>
    </v-container>

    <v-container class="my-5">
      <div class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              color="grey"
              @click="sortBy('title')"
            >
              <v-icon>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>sort by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              text
              color="grey"
              @click="sortBy('person')"
            >
              <v-icon>mdi-account</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>sort by person</span>
        </v-tooltip>
      </div>

      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-col cols="12" class="px-0 py-0">
              <div
                v-for="(project, i) in projects"
                :key="i"
                :class="`project ${project.status}`"
              >
                <v-row class="px-4">
                  <v-col cols="12" md="6">
                    <div class="caption grey--text text-capitalize">
                      Project Title
                    </div>
                    <div class="text-capitalize">{{ project.title }}</div>
                  </v-col>

                  <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Person</div>
                    <div>{{ project.person }}</div>
                  </v-col>

                  <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Due by</div>
                    <div>{{ project.dueDate }}</div>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="4"
                    md="2"
                    class="d-flex align-center justify-end"
                  >
                    <v-chip
                      label
                      x-small
                      :color="`${project.status}`"
                      :class="`v-chip--active white--text caption px-1 my-2`"
                      >{{ project.status }}</v-chip
                    >
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </div>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from '../firebase'

const db = firebase.firestore()

export default {
  name: 'Dashboard',

  data() {
    return {
      projects: []
    }
  },

  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },

  methods: {
    sortBy(props) {
      this.projects.sort((a, b) => (a[props] < b[props] ? -1 : 1))
    }
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
