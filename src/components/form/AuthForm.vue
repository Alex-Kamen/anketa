<template>
  <v-form style="margin-top: 30px">
    <InputComponent
      v-model="authForm.login"
      label="Логин"
      :v="v$.authForm.login"
    ></InputComponent>
    <PasswordInput
      v-model="authForm.password"
      label="Пароль"
      :v="v$.authForm.password"
    ></PasswordInput>
    <v-btn
      class="mr-4"
      @click="submit"
      color="green"
      style="color: white; margin-top: 30px"
    >
      Войти
    </v-btn>
  </v-form>
</template>

<script>
import PasswordInput from '@/components/input/PasswordInput'
import { Auth } from '@/models/Auth'
import useVuelidate from '@vuelidate/core'
import { Validators } from '@/logic/validation/Validators'
import InputComponent from '@/components/input/InputComponent'

export default {
  name: 'AuthForm',

  components: { InputComponent, PasswordInput },

  setup () {
    return { v$: useVuelidate() }
  },

  data () {
    return {
      authForm: new Auth()
    }
  },

  methods: {
    submit () {
      if (this.invalid()) return;

      this.$store.dispatch('session/auth', this.authForm)
    },

    invalid() {
      this.v$.authForm.$touch();

      return this.v$.authForm.$invalid;
    }
  },

  validations () {
    return {
      authForm: {
        login: {
          required: Validators.required(),
          validLength: Validators.validLength(64, 'Поле не должно превышать 64 символа')
        },
        password: {
          required: Validators.required(),
          validLength: Validators.validLength(64, 'Поле не должно превышать 64 символа')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
