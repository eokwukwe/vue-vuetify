<template>
  <div class="home">
    <v-container>
      <h1 class="subheading grey--text">Dashboard</h1>
    </v-container>

    <v-container class="my-5">
      <div class="mb-3">
        <v-btn text color="grey" @click="sortBy('title')">
          <v-icon>mdi-folder</v-icon>
          <span class="caption text-lowercase">by project name</span>
        </v-btn>

        <v-btn text color="grey" class="ml-3" @click="sortBy('person')">
          <v-icon>mdi-account</v-icon>
          <span class="caption text-lowercase">by person</span>
        </v-btn>
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
                    <div class="caption grey--text">Project Title</div>
                    <div>{{ project.title }}</div>
                  </v-col>

                  <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Person</div>
                    <div>{{ project.person }}</div>
                  </v-col>

                  <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Due by</div>
                    <div>{{ project.due }}</div>
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
// @ is an alias to /src

export default {
  name: 'Dashboard',

  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'The Net Ninja',
          due: '1st Jan 2019',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Create a community forum',
          person: 'Gouken',
          due: '20th Oct 2018',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        }
      ]
    }
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
