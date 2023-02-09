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
          <span class="text-h5">Редактировать дисциплину</span>
        </v-card-title>
        <v-card-text>
          <DisciplineForm ref="form" :disciplineData="discipline"></DisciplineForm>
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
            @click="editDiscipline"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DisciplineForm from '@/components/form/DisciplineForm'

export default {
  name: 'EditDisciplineModal',
  components: { DisciplineForm },

  props: {
    discipline: Object
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    editDiscipline() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('discipline/editDiscipline', this.$refs.form.discipline);
      this.dialog = false;
    }
  },
}
</script>

<style scoped>

</style>
