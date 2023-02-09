import { HTTP } from '@/plugins/axios';
import { User } from '@/models/User';

export default {
  namespaced: true,

  state: () => ({
    userList: []
  }),

  mutations: {
    userList(state, list) {
      state.userList = list.map((user) => new User(user));
    },

    addUser(state, user) {
      state.userList.push(new User(user));
    },

    editUser(state, user) {
      state.userList = state.userList.filter((userItem) => userItem.id !== user.id);
      state.userList.push(new User(user));
    },

    deleteUser(state, userId) {
      state.userList = state.userList.filter((user) => user.id !== userId);
    }
  },

  actions: {
    userList({commit}) {
      return HTTP.post('/user/list')
        .then((result) => commit('userList', result.data))
        .catch((error) => console.log(error))
    },

    addUser({commit}, user) {
      return HTTP.post('/user/add', User.toRequest(user))
        .then(() => {
          commit('addUser', user);
          console.log('Add user');
        })
        .catch((error) => console.log(error))
    },


    editUser({commit}, user) {
      return HTTP.post('/user/edit', User.toRequest(user))
        .then(() => {
          commit('editUser', user);
          console.log('Edit user');
        })
        .catch((error) => console.log(error))
    },

    deleteUser({commit}, userId) {
      return HTTP.get(`/user/delete/${userId}`)
        .then(() => {
          commit('deleteUser', userId);
          console.log('Delete user');
        })
        .catch((error) => console.log(error))
    },

    userById({}, id) {
      return HTTP.get(`/user/byId/${id}`)
        .catch((error) => console.log(error))
    }
  },

  getters: {
    userList: (state) => state.userList,

    userOptionList: (state) => state.userList
      .map((user) => ({name: user.login, value: user.id, entity: user}))
  }
}
