<template>
  <div>
    <DataTable
      :loading="!disciplineList.length"
      :headers="headers"
      :object-list="disciplineList"
      :search="search"
      :loading-text="'Загрузка'"
      :label="'Дисциплины'"
    >
      <template v-slot:addButton>
        <AddDisciplineModal></AddDisciplineModal>
      </template>
      <template v-slot:actionCell="{item}">
        <div style="display: flex; justify-content: flex-end">
          <span style="padding-right: 15px"><EditDisciplineModal :discipline="item"></EditDisciplineModal></span>
          <span><DeleteDisciplineModal :id="+item.id"></DeleteDisciplineModal></span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import DeleteDisciplineModal from '@/components/modal/discipline/DeleteDisciplineModal'
import EditDisciplineModal from '@/components/modal/discipline/EditDisciplineModal'
import AddDisciplineModal from '@/components/modal/discipline/AddDisciplineModal'

export default {
  name: 'DisciplineList',
  components: {
    AddDisciplineModal,
    EditDisciplineModal,
    DeleteDisciplineModal,
    DataTable
  },

  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Id',
          value: 'id'
        },
        {
          text: 'Наименование',
          value: 'name'
        },
        {
          text: 'Кафедра',
          value: 'departmentName'
        },
        {
          text: '',
          value: 'action',
          sortable: false
        },
      ],
    }
  },

  computed: {
    disciplineList () {
      return this.$store.getters['discipline/disciplineList']
    }
  },

  mounted () {
    this.$store.dispatch('discipline/disciplineList')
  }
}
</script>

<style scoped>

</style>
