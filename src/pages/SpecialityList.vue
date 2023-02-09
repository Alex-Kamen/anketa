<template>
  <div>
    <DataTable
      :loading="!specialityList.length"
      :headers="headers"
      :object-list="specialityList"
      :search="search"
      :loading-text="'Загрузка'"
      :label="'Специальности'"
    >
      <template v-slot:addButton>
        <AddSpecialityModal></AddSpecialityModal>
      </template>

      <template v-slot:actionCell="{item}">
        <div style="display: flex; justify-content: flex-end">
          <span style="padding-right: 15px"><EditSpecialityModal :speciality="item"></EditSpecialityModal></span>
          <span><DeleteSpecialityModal :id="+item.id"></DeleteSpecialityModal></span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import DeleteSpecialityModal from '@/components/modal/speciality/DeleteSpecialityModal'
import EditSpecialityModal from '@/components/modal/speciality/EditSpecialityModal'
import AddSpecialityModal from '@/components/modal/speciality/AddSpecialityModal'

export default {
  name: 'SpecialityList',
  components: {
    AddSpecialityModal,
    EditSpecialityModal,
    DeleteSpecialityModal,
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
    specialityList () {
      return this.$store.getters['speciality/specialityList']
    }
  },

  mounted () {
    this.$store.dispatch('speciality/specialityList')
  }
}
</script>

<style scoped>

</style>
