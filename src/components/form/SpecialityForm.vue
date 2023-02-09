<template>
  <v-container>
    <v-row>
      <v-col>
        <InputComponent
          label="Наименование"
          v-model="speciality.name"
          :v="v$.speciality.name"
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
import { Speciality } from '@/models/Speciality'
import useVuelidate from '@vuelidate/core'
import PasswordInput from '@/components/input/PasswordInput'

export default {
  name: 'SpecialityForm',
  components: { PasswordInput, SelectComponent, AutocompleteComponent, InputComponent },

  setup () {
    return { v$: useVuelidate() }
  },

  props: {
    specialityData: Object
  },

  data() {
    return {
      speciality: this.specialityData ? this.specialityData : new Speciality(),
      Speciality: Speciality
    }
  },

  watch: {
    specialityData(specialityData) {
      this.speciality = new Speciality(specialityData);
    }
  },

  computed: {
    departmentOptionList() {
      return this.$store.getters['department/departmentOptionList'];
    },
  },

  methods: {
    invalid() {
      this.v$.speciality.$touch();

      return this.v$.speciality.$invalid;
    }
  },

  validations () {
    return {
      speciality: {
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
