import { HTTP } from '@/plugins/axios';
import { Department } from '@/models/Department'

export default {
  namespaced: true,

  state: () => ({
    departmentList: []
  }),

  mutations: {
    departmentList(state, list) {
      state.departmentList = list.map((department) => new Department(department));
    },

    addDepartment(state, department) {
      state.departmentList.push(new Department(department));
    },

    editDepartment(state, department) {
      state.departmentList = state.departmentList.filter((departmentItem) => departmentItem.id !== department.id);
      state.departmentList.push(new Department(department));
    },

    deleteDepartment(state, departmentId) {
      state.departmentList = state.departmentList.filter((department) => department.id !== departmentId);
    }
  },

  actions: {
    departmentList({commit}) {
      return HTTP.post('/department/list')
        .then((result) => commit('departmentList', result.data))
        .catch((error) => console.log(error))
    },

    addDepartment({commit}, department) {
      return HTTP.post('/department/add', Department.toRequest(department))
        .then(() => {
          commit('addDepartment', department);
          console.log('Add department');
        })
        .catch((error) => console.log(error))
    },


    editDepartment({commit}, department) {
      return HTTP.post('/department/edit', Department.toRequest(department))
        .then(() => {
          commit('editDepartment', department);
          console.log('Edit department');
        })
        .catch((error) => console.log(error))
    },

    deleteDepartment({commit}, departmentId) {
      return HTTP.get(`/department/delete/${departmentId}`)
        .then(() => {
          commit('deleteDepartment', departmentId);
          console.log('Delete department');
        })
        .catch((error) => console.log(error))
    },
  },

  getters: {
    departmentList: (state) => state.departmentList,

    departmentOptionList: (state) => state.departmentList
      .map((department) => ({name: department.name, value: department.id, entity: department}))
  }
}
