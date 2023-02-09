<template>
  <div>
    <v-text-field
      v-model="modelValue"
      :error-messages="v && v.$errors[0] ? v.$errors[0].$params.message : ''"
      :label="label"
      @input="v ? v.$touch() : false"
      @blur="v ? v.$touch() : false"
      color="green"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',

  props: {
    value: {
      type: String,
      default: null
    },
    label: String,
    v: Object,
    type: String
  },

  model: {
    prop: 'value',
    event: 'input',
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
