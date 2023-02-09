<template>
  <v-container>
    <v-row>
      <v-col>
        <InputComponent
          label="Наименование"
          v-model="specialization.name"
          :v="v$.specialization.name"
        ></InputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AutocompleteComponent
          label="Специальность"
          v-model="specialization.speciality"
          :items="specialityOptionList"
          :v="v$.specialization.speciality"
        ></AutocompleteComponent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputComponent from '@/components/input/InputComponent'
import AutocompleteComponent from '@/components/input/AutocompleteComponent'
import SelectComponent from '@/components/input/SelectComponent'
import { Validators } from '@/logic/validation/Validators'
import { Specialization } from '@/models/Specialization'
import useVuelidate from '@vuelidate/core'
import PasswordInput from '@/components/input/PasswordInput'

export default {
  name: 'SpecializationForm',
  components: { PasswordInput, SelectComponent, AutocompleteComponent, InputComponent },

  setup () {
    return { v$: useVuelidate() }
  },

  props: {
    specializationData: Object
  },

  data() {
    return {
      specialization: this.specializationData ? this.specializationData : new Specialization(),
      Specialization: Specialization
    }
  },

  watch: {
    specializationData(specializationData) {
      this.specialization = new Specialization(specializationData);
    }
  },

  computed: {
    specialityOptionList() {
      return this.$store.getters['speciality/specialityOptionList'];
    },
  },

  methods: {
    invalid() {
      this.v$.specialization.$touch();

      return this.v$.specialization.$invalid;
    }
  },

  validations () {
    return {
      specialization: {
        name: {
          required: Validators.required(),
          validLength: Validators.validLength(100, 'Поле не должно превышать 100 символов')
        },
        speciality: {
          required: Validators.required(),
        }
      }
    }
  },

  mounted () {
    this.$store.dispatch('speciality/specialityList');
  }
}
</script>

<style scoped>

</style>
