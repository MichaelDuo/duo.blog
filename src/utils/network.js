import axios from 'axios'

export const fetch = (url, config) => {
  return axios.get(url, config)
}