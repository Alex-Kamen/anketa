<template>
  <div>
    <DataTable
      :loading="!teacherList.length"
      :headers="headers"
      :object-list="teacherList"
      :search="search"
      :loading-text="'Загрузка'"
      :label="'Преподаватели'"
    >
      <template v-slot:addButton>
        <AddTeacherModal></AddTeacherModal>
      </template>
      <template v-slot:actionCell="{item}">
        <div style="display: flex; justify-content: flex-end">
          <span style="padding-right: 15px"><EditTeacherModal :teacher="item"></EditTeacherModal></span>
          <span><DeleteTeacherModal :id="+item.id"></DeleteTeacherModal></span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import DeleteTeacherModal from '@/components/modal/teacher/DeleteTeacherModal'
import EditTeacherModal from '@/components/modal/teacher/EditTeacherModal'
import AddTeacherModal from '@/components/modal/teacher/AddTeacherModal'

export default {
  name: 'TeacherList',
  components: {
    AddTeacherModal,
    EditTeacherModal,
    DeleteTeacherModal,
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
          text: 'Полное имя',
          value: 'fullName'
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
    teacherList () {
      return this.$store.getters['teacher/teacherList']
    }
  },

  mounted () {
    this.$store.dispatch('teacher/teacherList')
  }
}
</script>

<style scoped>

</style>
