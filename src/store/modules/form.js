import { HTTP } from '@/plugins/axios'

export default {
  namespaced: true,

  state: () => ({
    formList: []
  }),

  mutations: {
    formList(state, list) {
      state.formList = list;
    }
  },

  actions: {
    formList({commit}, role = 'admin') {
      return HTTP.post('/form/list', {status: role})
        .then((result) => commit('formList', result.data))
        .catch((error) => console.log(error))
    }
  },

  getters: {
    formList: (state) => state.formList,

    formOptionList: (state) => state.formList
      .map((form) => ({name: form.name, value: form.id, entity: form}))
  }
}
