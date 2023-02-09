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
          <SpecializationForm ref="form" :specializationData="specialization"></SpecializationForm>
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
            @click="editSpecialization"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SpecializationForm from '@/components/form/SpecializationForm'

export default {
  name: 'EditSpecializationModal',
  components: { SpecializationForm },

  props: {
    specialization: Object
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    editSpecialization() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('specialization/editSpecialization', this.$refs.form.specialization);
      this.dialog = false;
    }
  },
}
</script>

<style scoped>

</style>
