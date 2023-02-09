<template>
  <v-container>
    <v-row>
      <v-col>
        <InputComponent
          label="Наименование"
          v-model="department.name"
          :v="v$.department.name"
        ></InputComponent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputComponent from '@/components/input/InputComponent'
import AutocompleteComponent from '@/components/input/AutocompleteComponent'
import SelectComponent from '@/components/input/SelectComponent'
import { Validators } from '@/logic/validation/Validators'
import { Department } from '@/models/Department'
import useVuelidate from '@vuelidate/core'
import PasswordInput from '@/components/input/PasswordInput'

export default {
  name: 'DepartmentForm',
  components: { PasswordInput, SelectComponent, AutocompleteComponent, InputComponent },

  setup () {
    return { v$: useVuelidate() }
  },

  props: {
    departmentData: Object
  },

  data() {
    return {
      department: this.departmentData ? this.departmentData : new Department(),
      Department: Department
    }
  },

  watch: {
    departmentData(departmentData) {
      this.department = new Department(departmentData);
    }
  },

  methods: {
    invalid() {
      this.v$.department.$touch();

      return this.v$.department.$invalid;
    }
  },

  validations () {
    return {
      department: {
        name: {
          required: Validators.required(),
          validLength: Validators.validLength(100, 'Поле не должно превышать 100 символов')
        },
      }
    }
  },

  mounted () {
    this.$store.dispatch('department/departmentList');
  }
}
</script>

<style scoped>

</style>
