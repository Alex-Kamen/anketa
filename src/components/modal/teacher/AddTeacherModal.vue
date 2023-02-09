<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить преподавателя</span>
        </v-card-title>
        <v-card-text>
          <TeacherForm ref="form"></TeacherForm>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="addTeacher"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TeacherForm from '@/components/form/TeacherForm'
export default {
  name: 'AddTeacherModal',
  components: { TeacherForm },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    addTeacher() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('teacher/addTeacher', this.$refs.form.teacher);
      this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>
