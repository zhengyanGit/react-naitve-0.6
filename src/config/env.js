/*
 * @Author: zy 
 * @Date: 2020-04-12 13:45:28 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:45:28 
 */

export const ENVIRONMENT = {
  DEV: {
    title: '开发环境', //环境标题
    baseUrl: 'http://10.10.3.56:8080', //服务端请求BASE
  },
  TEST: {
    title: '测试环境',
    baseUrl: 'http://10.10.3.87:8080',
  },
  UAT: {
    title: 'UAT环境',
    baseUrl: 'https://www.baidu.com/',
  },
  PROD: {
    title: '生产环境',
    isProduction: true,
    baseUrl: 'https://www.baidu.com/'
  }
}