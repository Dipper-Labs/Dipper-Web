import http from "@/utils/http"
import appConfig from "@/config.js"

/******** app的接口********/

// 获取用户信息
export const getUserInfo = params => http(`${appConfig.APP_URL}/user/bidashi-info`, params, {
  method: "GET"
})


/*****bmt的接口******/

//账户信息
export const getUserCentre = params => http(`${appConfig.BMT_URL}/UserCentre`, {
  params: params
}, {
  method: "GET"
})
