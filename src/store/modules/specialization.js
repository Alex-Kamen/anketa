import { HTTP } from '@/plugins/axios';
import { Specialization } from '@/models/Specialization'

export default {
  namespaced: true,

  state: () => ({
    specializationList: []
  }),

  mutations: {
    specializationList(state, list) {
      state.specializationList = list.map((specialization) => new Specialization(specialization));
    },

    addSpecialization(state, specialization) {
      state.specializationList.push(new Specialization(specialization));
    },

    editSpecialization(state, specialization) {
      state.specializationList = state.specializationList
        .filter((specializationItem) => specializationItem.id !== specialization.id);

      state.specializationList.push(new Specialization(specialization));
    },

    deleteSpecialization(state, specializationId) {
      state.specializationList = state.specializationList
        .filter((specialization) => specialization.id !== specializationId);
    }
  },

  actions: {
    specializationList({commit}) {
      return HTTP.post('/specialization/list')
        .then((result) => commit('specializationList', result.data))
        .catch((error) => console.log(error))
    },

    addSpecialization({commit}, specialization) {
      return HTTP.post('/specialization/add', Specialization.toRequest(specialization))
        .then(() => {
          commit('addSpecialization', specialization);
          console.log('Add specialization');
        })
        .catch((error) => console.log(error))
    },


    editSpecialization({commit}, specialization) {
      return HTTP.post('/specialization/edit', Specialization.toRequest(specialization))
        .then(() => {
          commit('editSpecialization', specialization);
          console.log('Edit specialization');
        })
        .catch((error) => console.log(error))
    },

    deleteSpecialization({commit}, specializationId) {
      return HTTP.get(`/specialization/delete/${specializationId}`)
        .then(() => {
          commit('deleteSpecialization', specializationId);
          console.log('Delete specialization');
        })
        .catch((error) => console.log(error))
    },
  },

  getters: {
    specializationList: (state) => state.specializationList,

    specializationOptionList: (state) => state.specializationList
      .map((specialization) => ({name: specialization.name, value: specialization.id, entity: specialization}))
  }
}
