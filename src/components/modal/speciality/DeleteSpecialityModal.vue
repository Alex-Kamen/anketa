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
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Удалить специальность</span>
        </v-card-title>
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
            @click="specialityDelete"
          >
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'deleteSpecialityModal',

  data: () => ({
    dialog: false,
  }),

  props: {
    id: Number
  },

  methods: {
    specialityDelete() {
      this.$store.dispatch('speciality/deleteSpeciality', this.id);
      this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>
