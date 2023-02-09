<template>
  <div>
    <DataTable
      :loading="!userList.length"
      :headers="headers"
      :object-list="userList"
      :search="search"
      :loading-text="'Загрузка'"
      :label="'Пользователи'"
    >
      <template v-slot:addButton>
        <AddUserModal></AddUserModal>
      </template>

      <template v-slot:actionCell="{item}">
        <div style="display: flex; justify-content: flex-end">
          <span style="padding-right: 15px"><EditUserModal :user="item"></EditUserModal></span>
          <span><DeleteUserModal :id="+item.id"></DeleteUserModal></span>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/table/DataTable'
import DeleteUserModal from '@/components/modal/user/DeleteUserModal'
import EditUserModal from '@/components/modal/user/EditUserModal'
import AddUserModal from '@/components/modal/user/AddUserModal'

export default {
  name: 'UserList',
  components: {
    AddUserModal,
    EditUserModal,
    DeleteUserModal,
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
          text: 'Логин',
          value: 'login'
        },
        {
          text: 'Роль',
          value: 'status'
        },
        {
          text: 'Кафедра',
          value: 'departmentName'
        },
        {
          text: 'Специализация',
          value: 'specializationName'
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
    userList () {
      return this.$store.getters['user/userList']
    }
  },

  mounted () {
    this.$store.dispatch('user/userList')
  }
}
</script>

<style scoped>

</style>
