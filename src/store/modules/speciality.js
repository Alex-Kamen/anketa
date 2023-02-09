import { HTTP } from '@/plugins/axios';
import { Speciality } from '@/models/Speciality'

export default {
  namespaced: true,

  state: () => ({
    specialityList: []
  }),

  mutations: {
    specialityList(state, list) {
      state.specialityList = list.map((speciality) => new Speciality(speciality));
    },

    addSpeciality(state, speciality) {
      state.specialityList.push(new Speciality(speciality));
    },

    editSpeciality(state, speciality) {
      state.specialityList = state.specialityList.filter((specialityItem) => specialityItem.id !== speciality.id);
      state.specialityList.push(new Speciality(speciality));
    },

    deleteSpeciality(state, specialityId) {
      state.specialityList = state.specialityList.filter((speciality) => speciality.id !== specialityId);
    }
  },

  actions: {
    specialityList({commit}) {
      return HTTP.post('/speciality/list')
        .then((result) => commit('specialityList', result.data))
        .catch((error) => console.log(error))
    },

    addSpeciality({commit}, speciality) {
      return HTTP.post('/speciality/add', Speciality.toRequest(speciality))
        .then(() => {
          commit('addSpeciality', speciality);
          console.log('Add speciality');
        })
        .catch((error) => console.log(error))
    },


    editSpeciality({commit}, speciality) {
      return HTTP.post('/speciality/edit', Speciality.toRequest(speciality))
        .then(() => {
          commit('editSpeciality', speciality);
          console.log('Edit speciality');
        })
        .catch((error) => console.log(error))
    },

    deleteSpeciality({commit}, specialityId) {
      return HTTP.get(`/speciality/delete/${specialityId}`)
        .then(() => {
          commit('deleteSpeciality', specialityId);
          console.log('Delete speciality');
        })
        .catch((error) => console.log(error))
    },
  },

  getters: {
    specialityList: (state) => state.specialityList,

    specialityOptionList: (state) => state.specialityList
      .map((speciality) => ({name: speciality.name, value: speciality.id, entity: speciality}))
  }
}
