import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://anketaback.vfbsac.by/'
})
