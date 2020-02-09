import axios from 'axios'
export function request(config){ //对axios进行封装
 //1.创建axios的实例
 const instance = axios.create({
  // baseURL: 'http://123.207.32.32:8000/api/hy',
  baseURL: 'http://106.54.54.237:8000/api/hy',
  timeout: 5000
 })
//  instance.interceptors.request.use(res=>{
//   return res.data
//  },err =>{
//     return err
//     console.log(err)
//  })
  //2.进行网络请求
 return instance(config)
}