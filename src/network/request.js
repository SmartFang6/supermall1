import axios from 'axios'
export function request(config){
 //1.创建axios的实例
 const instance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
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