<template>
  <v-container>
    <v-row>
      <v-col>
        <InputComponent
          label="Наименование"
          v-model="discipline.name"
          :v="v$.discipline.name"
        ></InputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AutocompleteComponent
          label="Кафедра"
          v-model="discipline.department"
          :items="departmentOptionList"
          :v="v$.discipline.department"
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
import { Discipline } from '@/models/Discipline'
import useVuelidate from '@vuelidate/core'
import PasswordInput from '@/components/input/PasswordInput'

export default {
  name: 'DisciplineForm',
  components: { PasswordInput, SelectComponent, AutocompleteComponent, InputComponent },

  setup () {
    return { v$: useVuelidate() }
  },

  props: {
    disciplineData: Object
  },

  data() {
    return {
      discipline: this.disciplineData ? this.disciplineData : new Discipline(),
      Discipline: Discipline
    }
  },

  watch: {
    disciplineData(disciplineData) {
      this.discipline = new Discipline(disciplineData);
    }
  },

  computed: {
    departmentOptionList() {
      return this.$store.getters['department/departmentOptionList'];
    },
  },

  methods: {
    invalid() {
      this.v$.discipline.$touch();

      return this.v$.discipline.$invalid;
    }
  },

  validations () {
    return {
      discipline: {
        name: {
          required: Validators.required(),
          validLength: Validators.validLength(100, 'Поле не должно превышать 100 символов')
        },
        department: {
          required: Validators.required(),
        }
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
