import axios from 'axios'

export function getCode () {
  return axios.get('http://localhost:3000/getCaptcha')
}
