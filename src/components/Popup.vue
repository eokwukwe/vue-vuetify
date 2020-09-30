<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed color="success" dark v-bind="attrs" v-on="on">
        Add Project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">Add a New Project</span>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-form v-model="valid" lazy-validation ref="form">
              <v-text-field
                v-model="title"
                label="Title"
                outlined
                :rules="inputRules"
                append-icon="mdi-folder"
              ></v-text-field>

              <v-textarea
                outlined
                auto-grow
                rows="3"
                v-model="content"
                :rules="inputRules"
                label="Project Content"
                append-icon="mdi-information"
              ></v-textarea>

              <v-menu
                v-model="dateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formattedDate"
                    label="Due Date"
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="inputRules"
                    outlined
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="dueDate"
                  @input="dateMenu = false"
                ></v-date-picker>
              </v-menu>

              <v-btn
                :disabled="!valid"
                depressed
                color="success"
                @click="submit"
              >
                Add Project
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format } from 'date-fns'
import { parseISO } from 'date-fns'

export default {
  name: 'Popup',

  data() {
    return {
      valid: true,
      dateMenu: false,
      dialog: false,
      dueDate: '',
      title: '',
      content: '',
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },

  computed: {
    formattedDate() {
      return this.dueDate ? format(parseISO(this.dueDate), 'do MMM yyyy') : ''
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.valid = true
        console.log(this.title, this.content, this.formattedDate)
      }
    }
  }
}
</script>

<style></style>
