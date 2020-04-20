/**
 * 项目环境接口配置
 * @api: 数据接口
 * @static: 静态资源
 */
const config = {
  development: {
    api: 'http://app-beta.zifeiyucoco.com',
    bmtApi: '',
    static: '',
  },
  production: {
    //api: 'http://app-beta.zifeiyucoco.com',
    api: 'http://app.zifeiyucoco.com',
    bmtApi: '',
    static: '/',
  },
}

const mock = {
  url: "http://app-beta.zifeiyucoco.com",
  bmtApi: 'http://134.175.238.150'
}
module.exports = {
  APP_URL: config[process.env.API_ENV].api,
  BMT_URL: config[process.env.API_ENV].bmtApi,
  CONFIG: config,
  MOCK: mock,
}
