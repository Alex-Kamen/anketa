<template>
  <v-card style="margin: 25px">
    <v-card-title>
      <div style="display: flex; align-items: center">
        <span style="padding-right: 25px">{{ label }}</span>
      </div>
      <v-spacer></v-spacer>
      <FilterComponent></FilterComponent>
    </v-card-title>

    <v-treeview
      :items="objectList"
      open-on-click
      transition
    >
      <template v-slot:label="{ item }">
        <div v-if="!item.headers">{{item.name}}</div>
        <DataTable
          v-else-if="!!item.objectList.length"
          color="green"
          :no-data-text="'Данные не найдены'"
          :no-result-text="'Данные не найдены'"
          :headers="item.headers"
          :objectList="item.objectList"
          showExpand
        >
          <template v-slot:actionCell="{item}">
            <slot name="actions" v-bind:item="item"></slot>
          </template>
        </DataTable>
      </template>
    </v-treeview>
  </v-card>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import FilterComponent from '@/components/filter/FilterComponent'
export default {
  name: 'TreeDataTable',
  components: { FilterComponent, DataTable },
  props: {
    objectList: Array,
    loading: Boolean,
    label: String
  },
}
</script>

<style>
.v-treeview-node__label .v-card {
  margin: 0 !important;
}
</style>
