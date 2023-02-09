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
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-lead-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Редактировать преподавателя</span>
        </v-card-title>
        <v-card-text>
          <TeacherForm ref="form" :teacherData="teacher"></TeacherForm>
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
            @click="editTeacher"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import TeacherForm from '@/components/form/TeacherForm'

export default {
  name: 'EditTeacherModal',
  components: { TeacherForm },

  props: {
    teacher: Object
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    editTeacher() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('teacher/editTeacher', this.$refs.form.teacher);
      this.dialog = false;
    }
  },
}
</script>

<style scoped>

</style>
