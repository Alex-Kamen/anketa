<template>
  <div>
    <DataTable
      :loading="!specializationList.length"
      :headers="headers"
      :object-list="specializationList"
      :search="search"
      :loading-text="'Загрузка'"
      :label="'Специализации'"
    >
      <template v-slot:addButton>
        <AddSpecializationModal></AddSpecializationModal>
      </template>
      <template v-slot:actionCell="{item}">
        <div style="display: flex; justify-content: flex-end">
          <span style="padding-right: 15px"><EditSpecializationModal :specialization="item"></EditSpecializationModal></span>
          <span><DeleteSpecializationModal :id="+item.id"></DeleteSpecializationModal></span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import DeleteSpecializationModal from '@/components/modal/specialization/DeleteSpecializationModal'
import EditSpecializationModal from '@/components/modal/specialization/EditSpecializationModal'
import AddSpecializationModal from '@/components/modal/specialization/AddSpecializationModal'

export default {
  name: 'SpecializationList',
  components: {
    AddSpecializationModal,
    EditSpecializationModal,
    DeleteSpecializationModal,
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
          text: 'Специальность',
          value: 'specialityName'
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
    specializationList () {
      return this.$store.getters['specialization/specializationList']
    }
  },

  mounted () {
    this.$store.dispatch('specialization/specializationList')
  }
}
</script>

<style scoped>

</style>
