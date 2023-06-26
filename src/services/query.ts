import http from '~/utils/request'

const prefix = 'dor-api'

const {
  get,post
} = http

// http.post("http://localhost:8080/goods/goodAll").then((res)=>{
//      console.log(res)
// })
// 集群资源
// export const getDatasource = () => get(`/${prefix}/datasource/meta`)

// export function getDatasource() {
//   return get(`/${prefix}/datasource/meta`)
// }

export function itemPost() {
  return post(`/goods/goodAll`)
}

