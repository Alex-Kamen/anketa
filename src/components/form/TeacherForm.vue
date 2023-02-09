<template>
  <v-container>
    <v-row>
      <v-col>
        <InputComponent
          label="Полное имя"
          v-model="teacher.fullName"
          :v="v$.teacher.fullName"
        ></InputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AutocompleteComponent
          label="Кафедра"
          v-model="teacher.department"
          :items="departmentOptionList"
          :v="v$.teacher.department"
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
import { Teacher } from '@/models/Teacher'
import useVuelidate from '@vuelidate/core'
import PasswordInput from '@/components/input/PasswordInput'

export default {
  name: 'TeacherForm',
  components: { PasswordInput, SelectComponent, AutocompleteComponent, InputComponent },

  setup () {
    return { v$: useVuelidate() }
  },

  props: {
    teacherData: Object
  },

  data() {
    return {
      teacher: this.teacherData ? this.teacherData : new Teacher(),
      Teacher: Teacher
    }
  },

  watch: {
    teacherData(teacherData) {
      this.teacher = new Teacher(teacherData);
    }
  },

  computed: {
    departmentOptionList() {
      return this.$store.getters['department/departmentOptionList'];
    },
  },

  methods: {
    invalid() {
      this.v$.teacher.$touch();

      return this.v$.teacher.$invalid;
    }
  },

  validations () {
    return {
      teacher: {
        fullName: {
          required: Validators.required(),
          validLength: Validators.validLength(200, 'Поле не должно превышать 200 символов')
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
