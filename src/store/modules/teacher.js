import { HTTP } from '@/plugins/axios';
import { Teacher } from '@/models/Teacher'

export default {
  namespaced: true,

  state: () => ({
    teacherList: []
  }),

  mutations: {
    teacherList(state, list) {
      state.teacherList = list.map((teacher) => new Teacher(teacher));
    },

    addTeacher(state, teacher) {
      state.teacherList.push(new Teacher(teacher));
    },

    editTeacher(state, teacher) {
      state.teacherList = state.teacherList.filter((teacherItem) => teacherItem.id !== teacher.id);
      state.teacherList.push(new Teacher(teacher));
    },

    deleteTeacher(state, teacherId) {
      state.teacherList = state.teacherList.filter((teacher) => teacher.id !== teacherId);
    }
  },

  actions: {
    teacherList({commit}) {
      return HTTP.post('/teacher/list')
        .then((result) => commit('teacherList', result.data))
        .catch((error) => console.log(error))
    },

    addTeacher({commit}, teacher) {
      return HTTP.post('/teacher/add', Teacher.toRequest(teacher))
        .then(() => {
          commit('addTeacher', teacher);
          console.log('Add teacher');
        })
        .catch((error) => console.log(error))
    },


    editTeacher({commit}, teacher) {
      return HTTP.post('/teacher/edit', Teacher.toRequest(teacher))
        .then(() => {
          commit('editTeacher', teacher);
          console.log('Edit teacher');
        })
        .catch((error) => console.log(error))
    },

    deleteTeacher({commit}, teacherId) {
      return HTTP.get(`/teacher/delete/${teacherId}`)
        .then(() => {
          commit('deleteTeacher', teacherId);
          console.log('Delete teacher');
        })
        .catch((error) => console.log(error))
    },
  },

  getters: {
    teacherList: (state) => state.teacherList,

    teacherOptionList: (state) => state.teacherList
      .map((teacher) => ({name: teacher.fullName, value: teacher.id, entity: teacher}))
  }
}
