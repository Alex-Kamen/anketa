import { HTTP } from '@/plugins/axios';
import lscache from 'lscache'
import router from '@/router'

export default {
  namespaced: true,

  actions: {
    auth ({}, authForm) {
      HTTP.post('/auth', authForm)
        .then((response) => {
          if (response.data.status) {
            lscache.set('session', response.data);
            router.push('/dashboard');
          } else {
            console.log('error');
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },

    logout({}) {
      lscache.remove('session');
    }
  },
}
