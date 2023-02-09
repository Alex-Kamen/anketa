import { HTTP } from '@/plugins/axios';
import { Discipline } from '@/models/Discipline'

export default {
  namespaced: true,

  state: () => ({
    disciplineList: []
  }),

  mutations: {
    disciplineList(state, list) {
      state.disciplineList = list.map((discipline) => new Discipline(discipline));
    },

    addDiscipline(state, discipline) {
      state.disciplineList.push(new Discipline(discipline));
    },

    editDiscipline(state, discipline) {
      state.disciplineList = state.disciplineList.filter((disciplineItem) => disciplineItem.id !== discipline.id);
      state.disciplineList.push(new Discipline(discipline));
    },

    deleteDiscipline(state, disciplineId) {
      state.disciplineList = state.disciplineList.filter((discipline) => discipline.id !== disciplineId);
    }
  },

  actions: {
    disciplineList({commit}) {
      return HTTP.post('/discipline/list')
        .then((result) => commit('disciplineList', result.data))
        .catch((error) => console.log(error))
    },

    addDiscipline({commit}, discipline) {
      return HTTP.post('/discipline/add', Discipline.toRequest(discipline))
        .then(() => {
          commit('addDiscipline', discipline);
          console.log('Add discipline');
        })
        .catch((error) => console.log(error))
    },


    editDiscipline({commit}, discipline) {
      return HTTP.post('/discipline/edit', Discipline.toRequest(discipline))
        .then(() => {
          commit('editDiscipline', discipline);
          console.log('Edit discipline');
        })
        .catch((error) => console.log(error))
    },

    deleteDiscipline({commit}, disciplineId) {
      return HTTP.get(`/discipline/delete/${disciplineId}`)
        .then(() => {
          commit('deleteDiscipline', disciplineId);
          console.log('Delete discipline');
        })
        .catch((error) => console.log(error))
    },
  },

  getters: {
    disciplineList: (state) => state.disciplineList,

    disciplineOptionList: (state) => state.disciplineList
      .map((discipline) => ({name: discipline.name, value: discipline.id, entity: discipline}))
  }
}
