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
          <span class="text-h5">Редактировать кафедру</span>
        </v-card-title>
        <v-card-text>
          <DepartmentForm ref="form" :departmentData="department"></DepartmentForm>
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
            @click="editDepartment"
          >
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import DepartmentForm from '@/components/form/DepartmentForm'

export default {
  name: 'EditDepartmentModal',
  components: { DepartmentForm },

  props: {
    department: Object
  },

  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    editDepartment() {
      if (this.$refs.form.invalid()) return;

      this.$store.dispatch('department/editDepartment', this.$refs.form.department);
      this.dialog = false;
    }
  },
}
</script>

<style scoped>

</style>
