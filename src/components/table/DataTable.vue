<template>
  <v-card style="margin: 25px">
    <v-card-title v-if="search">
      <div style="display: flex; align-items: center">
        <span style="padding-right: 25px">{{ label }}</span>
        <slot name="addButton"></slot>
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="searchValue"
        append-icon="mdi-magnify"
        label="Поиск"
        single-line
        hide-details
        color="green"
        style="padding: 0; margin: 0"
      ></v-text-field>
    </v-card-title>

    <v-data-table
      color="green"
      fixed-header
      :no-data-text="'Данные не найдены'"
      :no-result-text="'Данные не найдены'"
      :headers="headers"
      :items="objectList"
      :search="searchValue"
      :loading="loading"
      :loading-text="loadingText"
      single-expand
      :expanded="[]"
      :show-expand="showExpand"
    >
      <template v-slot:item.action="{ item }">
        <slot name="actionCell" v-bind:item="item"></slot>
      </template>
      <template v-slot:expanded-item="{ headers, item }" v-if="showExpand">
        <td :colspan="headers.length">
          <div style="margin: 16px 0">
            <v-card style="padding: 0">
              <div
                v-for="(header) of headers"
                :key="header.name"
                v-if="header.tab"
              >
                <v-col>
                  <div style="display: flex; justify-content: space-between">
                    <div style="width: 50%">{{header.tab ? header.tab[1] : ''}}</div>
                    <div style="align-self: center">
                      <div style="display: flex; justify-content: space-between">Оценка: {{item[header.value].split('/')[0]}}</div>
                      <div v-if="item[header.value].split('/')[1]" style="display: flex; justify-content: space-between">Важность: {{item[header.value].split('/')[1]}}</div>
                    </div>
                  </div>
                </v-col>
                <hr>
              </div>
              <v-col v-if="item.recommendation.length">
                <v-col>Дополнительная информация</v-col>
                <hr>
                <div v-for="recommendation of item.recommendation">
                  <v-col style="display: flex; justify-content: space-between">
                    <div style="width: 50%">{{ recommendation[0] }}</div>
                    <div>{{recommendation[1]}}</div>
                  </v-col>
                </div>
              </v-col>
            </v-card>
          </div>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import AddUserModal from '@/components/modal/user/AddUserModal'
import AddDisciplineModal from '@/components/modal/discipline/AddDisciplineModal'
export default {
  name: 'DataTable',
  components: { AddDisciplineModal, AddUserModal },
  props: {
    headers: Array,
    objectList: Array,
    search: Boolean,
    loading: Boolean,
    loadingText: String,
    label: String,
    showExpand: Boolean
  },

  data() {
    return {
      searchValue: ''
    }
  }
}
</script>

<style>
th {
  white-space: nowrap;
}
</style>
