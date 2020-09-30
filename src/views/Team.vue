<template>
  <div class="team">
    <v-container>
      <h1 class="subheading grey--text">Team</h1>
    </v-container>

    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(person, i) in team"
          :key="i"
        >
          <v-card flat>
            <v-row justify="center">
              <v-col cols="6">
                <v-avatar size="120" class="grey lighten-4">
                  <v-img :src="person.avatar"></v-img>
                </v-avatar>
              </v-col>
            </v-row>

            <v-card-title>
              {{ person.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ person.role }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="grey" text>
                <v-icon small left>mdi-message-alert</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Team',

  data() {
    return {
      team: [
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' },
        {
          name: 'Gouken',
          role: 'Social media maverick',
          avatar: '/avatar-4.png'
        },
        {
          name: 'The fCoder',
          role: 'Web developer',
          avatar: '/avatar-1.png'
        }
      ]
    }
  }
}
</script>

<style></style>
