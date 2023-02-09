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
          <span class="text-h5">Добавить кафедру</span>
        </v-card-title>
        <v-card-text>
          <DepartmentForm ref="form"></DepartmentForm>
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
            @click="addDepartment"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DepartmentForm from '@/components/form/DepartmentForm'
export default {
  name: 'AddDepartmentModal',
  components: { DepartmentForm },

  data() {
    return {
      dialog: false
    }
  },

  methods: {
    addDepartment() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('department/addDepartment', this.$refs.form.department);
      this.dialog = false;
    }
  }
}
</script>

<style scoped>

</style>
