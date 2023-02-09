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
          <span class="text-h5">Редактировать специальность</span>
        </v-card-title>
        <v-card-text>
          <SpecialityForm ref="form" :specialityData="speciality"></SpecialityForm>
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
            @click="editSpeciality"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SpecialityForm from '@/components/form/SpecialityForm'

export default {
  name: 'EditSpecialityModal',
  components: { SpecialityForm },

  props: {
    speciality: Object
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    editSpeciality() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('speciality/editSpeciality', this.$refs.form.speciality);
      this.dialog = false;
    }
  },
}
</script>

<style scoped>

</style>
