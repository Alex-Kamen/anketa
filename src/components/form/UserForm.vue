<template>
  <v-container>
    <v-row>
      <v-col>
        <InputComponent
          label="Логин"
          v-model="user.login"
          :v="v$.user.login"
        ></InputComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PasswordInput
          label="Пароль"
          v-model="user.password"
          :v="userData ? v$.user.password : null"
        ></PasswordInput>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AutocompleteComponent
          label="Кафедра"
          v-model="user.department"
          :items="departmentOptionList"
        ></AutocompleteComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AutocompleteComponent
          label="Специализация"
          v-model="user.specialization"
          :items="specializationOptionList"
        ></AutocompleteComponent>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SelectComponent
          label="Статус"
          v-model="user.status"
          :v="v$.user.status"
          :items="User.statusOptionList()"
        ></SelectComponent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputComponent from '@/components/input/InputComponent'
import AutocompleteComponent from '@/components/input/AutocompleteComponent'
import SelectComponent from '@/components/input/SelectComponent'
import { Validators } from '@/logic/validation/Validators'
import { User } from '@/models/User'
import useVuelidate from '@vuelidate/core'
import PasswordInput from '@/components/input/PasswordInput'

export default {
  name: 'UserForm',
  components: { PasswordInput, SelectComponent, AutocompleteComponent, InputComponent },

  setup () {
    return { v$: useVuelidate() }
  },

  props: {
    userData: Object
  },

  data() {
    return {
      user: this.userData ? this.userData : new User(),
      User: User
    }
  },

  watch: {
    userData(userData) {
      this.user = new User(userData);
    }
  },

  computed: {
    departmentOptionList() {
      return this.$store.getters['department/departmentOptionList'];
    },

    specializationOptionList() {
      return this.$store.getters['specialization/specializationOptionList'];
    }
  },

  methods: {
    invalid() {
      this.v$.user.$touch();

      return this.v$.user.$invalid;
    }
  },

  validations () {
    return {
      user: {
        login: {
          required: Validators.required(),
          validLength: Validators.validLength(64, 'Поле не должно превышать 64 символа')
        },
        password: {
          required: Validators.requiredIf(!this.userData),
          validLength: Validators.validLength(64, 'Поле не должно превышать 64 символа')
        },
        status: {
          required: Validators.required(),
        }
      }
    }
  },

  mounted () {
    this.$store.dispatch('department/departmentList');
    this.$store.dispatch('specialization/specializationList');
  }
}
</script>

<style scoped>

</style>
