<template>
  <div class="projects">
    <v-container>
      <h1 class="subheading grey--text">Projects</h1>
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
                <div class="font-weight-bold">Due by: {{ project.due }}</div>
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
export default {
  name: 'Projects',

  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'The fCoder',
          due: '1st Jan 2019',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi! fcoder'
        },
        {
          title: 'Design a new API',
          person: 'The fCoder',
          due: '1st Jan 2021',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi! fcoder'
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
