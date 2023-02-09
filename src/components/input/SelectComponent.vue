<template>
  <div>
    <v-select
      v-model="modelValue"
      :items="items"
      :label="label"
      item-text="name"
      item-value="value"
      @input="v ? v.$touch() : false"
      @blur="v ? v.$touch() : false"
      color="green"
      :error-messages="v && v.$errors[0] ? v.$errors[0].$params.message : ''"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',

  props: {
    label: String,
    value: {
      type: String,
      default: null
    },
    items: Array,
    v: Object
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
