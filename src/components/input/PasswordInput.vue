<template>
  <div>
    <v-text-field
      v-model="modelValue"
      :error-messages="v && v.$errors[0] ? v.$errors[0].$params.message : ''"
      :label="label"
      required
      @input="v ? v.$touch() : false"
      @blur="v ? v.$touch() : false"
      color="green"
      :type="showValue ? 'text' : 'password'"
      :append-icon="this.showValue ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showValue = !showValue"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',

  props: {
    value: {
      type: String,
      default: null
    },
    label: String,
    v: Object,
  },

  model: {
    prop: 'value',
    event: 'input',
  },

  data() {
    return {
      showValue: false
    }
  },

  computed: {
    modelValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit('input', value);
      }
    }
  },
}
</script>

<style scoped>

</style>
