import { boot } from 'quasar/wrappers'
import axios from 'axios'
const api = axios.create({ baseURL: 'http://192.168.10.112:1920/appchin/public/api' })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }