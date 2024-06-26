import { boot } from 'quasar/wrappers'
import axios from 'axios'
// const api = axios.create({ baseURL: 'http://mx100-cedis-mkrqpwcczk.dynamic-m.com:5150/appchin/public/api' })
const api = axios.create({ baseURL: 'https://apimport.grupovizcarra.mx/api' })
// const api = axios.create({ baseURL: 'https://apvizapi.grupovizcarra.net/api' })

// const api = axios.create({ baseURL: 'http://192.168.10.112:1920/appchin/public/api' })


export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
