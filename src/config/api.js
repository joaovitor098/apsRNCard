import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://aps-teste-1.herokuapp.com'
})

export default Api;