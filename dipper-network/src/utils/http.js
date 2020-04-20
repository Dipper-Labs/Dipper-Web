import axios from 'axios'
import appConfig from '@/config.js'
import {
  userAgentInfo
} from '@/utils'
//请求接口地址
axios.defaults.baseURL = appConfig.BASE_URL
axios.defaults.validateStatus = function (status) {
  return status < 500
}
//axios.defaults.timeout = 2000
const thisHttp = {
  method: 'get',
  url: ''
}

//添加拦截器
axios.interceptors.request.use((config) => {
    // 在请求发出之前进行一些操作

    //config.headers.common['sessionId'] = localStorage.getItem('sessionId') || ''
    if (!/UserCentre/.test(config.url)) {
      config.headers['accessToken'] = userAgentInfo('accessToken') || '9ed852830d1bdb61510781f6fc2dba79'
    }
    //config.withCredentials = true


    thisHttp.url = config.url
    for (let key in config.params) {
      if (config.params[key] === null || config.params[key] === '') {
        delete config.params[key]
      }
    }
    console.dir(config)
    return config
  }, (err) =>
  // Do something with request error
  Promise.reject(err)
)

/* eslint-disable */
// 响应拦截器
axios.interceptors.response.use((res) => {
  console.log(res)
  if (res.status === 200 && (res.data.cmd === '0' || res.data.code == 0)) {
    // console.log(res)
    return Promise.resolve(res.data)
  } else if (res.data.errno == '1001') {
    //用户不存在
    return Promise.resolve(res.data)
  } else {
    console.log('服务器出错！')
    return Promise.reject()
  }
}, (err) => {
  console.log('服务器出错！')
  return Promise.reject(err)
})

export default axios
