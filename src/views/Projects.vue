<template>
  <div class="projects">
    <v-container>
      <h1 class="subheading grey--text">My Projects</h1>
    </v-container>

    <v-container class="my-5">
      <v-expansion-panels focusable popout>
        <v-expansion-panel
          class="mb-1"
          v-for="(project, i) in myProjects"
          :key="i"
        >
          <v-expansion-panel-header
            class="text-capitalize"
            style="min-height: 40px"
          >
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="px-0 pt-2 grey--text">
                <div class="font-weight-bold">
                  Due by: {{ project.dueDate }}
                </div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import firebase from '../firebase'

const db = firebase.firestore()

export default {
  name: 'Projects',

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

  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The fCoder' && project.status != 'complete'
      })
    }
  }
}
</script>

<style></style>
