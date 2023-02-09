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
  name: 'AutocompleteComponent',

  props: {
    label: String,
    value: {
      type: Object,
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
        const value = this.items.find((item) => this.value && +item.value === +this.value.id);
        return value ? value : null;
      },

      set(value) {
        const list = this.items.find((item) => +item.value === +value);
        this.$emit('input', list.entity ? list.entity : null);
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
