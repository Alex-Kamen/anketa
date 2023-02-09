<template>
  <div>
    <DataTable
      :loading="!departmentList.length"
      :headers="headers"
      :object-list="departmentList"
      :search="search"
      :loading-text="'Загрузка'"
      :label="'Кафедры'"
    >
      <template v-slot:addButton>
        <AddDepartmentModal></AddDepartmentModal>
      </template>

      <template v-slot:actionCell="{item}">
        <div style="display: flex; justify-content: flex-end">
          <span style="padding-right: 15px"><EditDepartmentModal :department="item"></EditDepartmentModal></span>
          <span><DeleteDepartmentModal :id="+item.id"></DeleteDepartmentModal></span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import DeleteDepartmentModal from '@/components/modal/department/DeleteDepartmentModal'
import EditDepartmentModal from '@/components/modal/department/EditDepartmentModal'
import AddDepartmentModal from '@/components/modal/department/AddDepartmentModal'

export default {
  name: 'DepartmentList',
  components: {
    AddDepartmentModal,
    EditDepartmentModal,
    DeleteDepartmentModal,
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
          text: '',
          value: 'action',
          sortable: false
        },
      ],
    }
  },

  computed: {
    departmentList () {
      return this.$store.getters['department/departmentList']
    }
  },

  mounted () {
    this.$store.dispatch('department/departmentList')
  }
}
</script>

<style scoped>

</style>
