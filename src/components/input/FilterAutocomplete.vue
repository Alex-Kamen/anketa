<template>
  <div>
    <v-autocomplete
      v-model="modelValue"
      :items="items"
      :label="label"
      item-text="name"
      item-value="value"
      @input="v ? v.$touch() : false"
      @blur="v ? v.$touch() : false"
      color="green"
      :error-messages="v && v.$errors[0] ? v.$errors[0].$params.message : ''"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'FilterAutocomplete',

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
        return this.value
      },

      set(value) {
        this.$emit('input', value);
      }
    }
  },
}
</script>

<style>
.v-list-item__title {
  white-space: normal;
  overflow: auto;
  max-width: 300px;
}
</style>
