import { HTTP } from '@/plugins/axios';

export default {
  namespaced: true,

  state: () => ({
    answerList: [],
    formData: [],
    answerData: {}
  }),

  mutations: {
    answerList(state, list) {
      state.answerList = list.answerList;
      state.formData = list.formData;
    },

    answerData(state, list) {
      state.answerData = list;
    },

    addAnswer(state, answer) {
      state.answerList.push(answer);
    },

    deleteAnswer(state, answerId) {
      state.answerList = state.answerList.filter((answer) => answer.id !== answerId);
    }
  },

  actions: {
    answerList({commit}, params) {
      return HTTP.post(`/answer/list${params ? `?${params}` : ''}`)
        .then((result) => commit('answerList', result.data))
        .catch((error) => console.log(error))
    },

    answerData({commit}, params) {
      return HTTP.post(`/answer/data${params ? `?${params}` : ''}`)
        .then((result) => commit('answerData', result.data))
        .catch((error) => console.log(error))
    },

    addAnswer({commit}, answer) {
      return HTTP.post('/form/save', answer)
        .then(() => {
          commit('addAnswer', answer);
          console.log('Add answer');
        })
        .catch((error) => console.log(error))
    },

    deleteAnswer({commit}, answerId) {
      return HTTP.get(`/answer/delete/${answerId}`)
        .then(() => {
          commit('deleteAnswer', answerId);
          console.log('Delete answer');
        })
        .catch((error) => console.log(error))
    },
  },

  getters: {
    answerList: (state) => state.answerList,
    answerData: (state) => state.answerData,
    formData: (state) => state.formData
  }
}
