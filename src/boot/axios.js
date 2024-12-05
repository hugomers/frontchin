import { boot } from 'quasar/wrappers'
import axios from 'axios'

const url = 'https://apimport.grupovizcarra.mx/';
// const url = 'http://192.168.10.160:1920/appchin/public/';

const api = axios.create({ baseURL: `${url}api`})

const media = `${url}storage`


export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api,media }
