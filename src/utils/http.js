/**
 * 
 * @description 统一请求处理
 * @returns 
 *    1. rejectError = false的返回值
 *      1) undefined或者null 代表请求返回数据错误  
 *      2）{} 代表请求正常返回，但是返回值为null或者空数据
 *      3）{...} 或者 [] 或者 具体的值 代表请求正常返回     
 *    2. rejectError = true的返回值
 *      在第一个情况返回基础上多一种情况，当服务端返回success == 0的时候数据格式为
 *        {
 *          isReject: true,
 *          code: '99',
 *          msg: '....'
 *        }
 * 
 *    注意
 *      1. handleError 为统一toast提示错误信息
 *      2. 如果需要传递自己的config, 对象中rejectError和handleError都必须传递，否则按照undefinde == false 来处理逻辑
 *      3. 绝大多数情况使用默认的config
 */

import { STORAGE_CONSTANT } from '../config/storage';
import StorageHelper from './storageHelper';
import { GLOBAL } from '../config/global';
import { URL } from './helper';
import ToastUtil from './toast';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'LoginPage' })],
});

const HttpTimeout = 20000;

class HTTP {

  defaultConfig = {
    rejectError: false, //是否将错误数据以reject的方式返回
    handerError: true //统一出错处理 通过toast提示
  }

  toastDeadline;
  GET (url, params = {}, config, timeout) {
    return this.request(URL.getUrl(url, params), 'GET', {}, config, null, timeout)
  }

  POST (url, params = {}, config, timeout) {
    return this.request(url, 'POST', params, config, null, timeout)
  }

  async request (url, method, params = {}, config = this.defaultConfig, headers, timeout) {
    let reqStartTime = Date.now(); //记录请求开始时间
    return Promise.race([
      this.timeoutPromise(timeout),
      this.fetchPromise(url, method, params, config, reqStartTime, headers)
    ]).catch(err => {
      console.warn('******Request Reject Error:', url, method, err)
      if (err == 'timeout') {
        this.checkToastAvailable(reqStartTime) && ToastUtil.showError('网络请求超时啦!');
      } else {
        this.checkToastAvailable(reqStartTime) && ToastUtil.showError('网络开小差啦!');
      }
    })
  }

  async fetchPromise (url, method, params, config, reqStartTime, headers) {
    let APP_HOT_VERSION = await StorageHelper.get(STORAGE_CONSTANT.APP_HOT_VERSION);
    return new Promise((resolve, reject) => {
      let requestData = {
        method: method,
        headers: headers || {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authToken': GLOBAL.TOKEN || '',
          'version': GLOBAL.VERSION,
          'platform': GLOBAL.PLATFORM_OS,
          'versionCode': GLOBAL.VERSION_CODE,
          'extVersionCode': APP_HOT_VERSION || '',
          'loginName': GLOBAL.LOGIN_NAME || ''
        },
        body: headers ? params : method == 'POST' ? (params ? JSON.stringify(params) : JSON.stringify({})) : null
      }
      console.log('-----Start Request:', url, requestData)
      fetch(url, requestData).then(response => {
        return response.json()
      }).then(async (body) => {
        let data;
        if (body && body.success == 1) {
          data = body.data || {};
        } else if (body.error) {
          let error = body.error || {};
          if (error.code == '06') {
            //登录失效
            await this.clearLoginStatus();
            if (this.checkToastAvailable(reqStartTime)) {
              ToastUtil.showInfo('登录失效啦，请重新登录!');
              this.toastDeadline = Date.now();// 记录登录失效跳转时间
              setTimeout(() => {
                GLOBAL.ROOT_NAVIGATION.dispatch(resetAction);
              }, 800)
            }
          } else {
            if (config.handerError) {
              //统一处理错误信息
              this.checkToastAvailable(reqStartTime) && ToastUtil.showError(error.msg || '请求出错啦！');
              console.warn('******Request Error:', url, method, error);
            }
            if (config.rejectError) {
              //返回错误数据，注意会通过resolve方式 并且只会返回error对象
              error.isReject = true; //错误返回数据，以isReject作为标识
              data = error;
            }
          }
        }
        console.log('===========End Response:', url, method, data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  timeoutPromise (timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('timeout')
      }, timeout || HttpTimeout)
    })
  }

  async clearLoginStatus () {
    GLOBAL.TOKEN = null;
    await StorageHelper.remove(STORAGE_CONSTANT.TOKEN)
  }

  checkToastAvailable (startTime) {
    return !this.toastDeadline || startTime > this.toastDeadline
  }

}

module.exports = new HTTP();