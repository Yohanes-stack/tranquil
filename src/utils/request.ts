import axios, { AxiosError } from 'axios'

const instance = axios.create({
  // 请求地址
  // baseURL: 'http://data.devops.sit.xiaohongshu.com',
  baseURL: 'http://localhost:8080',
  timeout: 300000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // const { user } = useStore()
    // if (user.profile.token) {
    //   config.headers!.Authorization = `Bearer ${user.profile.token}`
    // }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError<{ code: string, message: string }>) {
    // 服务器异常/ 网络异常
    if (!error.response) {
      alert('网络异常, 请稍后再试')
    } else {
      alert(error.response.data.message)
    }

    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance