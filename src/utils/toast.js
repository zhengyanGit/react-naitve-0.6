/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:05 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:05 
 */

import Toast from 'react-native-root-toast';
import COLORS from '../theme/colors';

class ToastUtil {

  toast = null;
  //友好信息提示类, 例如登录失效
  showInfo (msg) {
    return this._show(msg);
  }

  //警告类 字段校验类
  showWarning (msg, time) {
    return this._show(msg, COLORS.warningColor, COLORS.warningColor, null, time || 800);
  }

  //操作成功提示类
  showSuccess (msg) {
    return this._show(msg, COLORS.successColor, COLORS.successColor, null, 800, 150);
  }

  //请求返回字段出错，请求出错类
  showError (msg) {
    return this._show(msg, COLORS.errorColor, COLORS.errorColor, null, 1200, -150);
  }

  _show (msg, backgroundColor, shadowColor, textColor, duration, position, delay = 0, opacity = 0.95) {
    return new Promise(resolve => {
      if (!Toast) resolve();
      if (this.toast) {
        Toast.hide(this.toast);
      }
      this.toast = Toast.show(msg, {
        backgroundColor: backgroundColor,
        shadowColor: shadowColor,
        textColor: textColor,
        duration: duration || 800,
        position: position || Toast.positions.CENTER,
        opacity: opacity,
        animation: true,
        shadow: true,
        delay: delay,
        onHidden: () => {
          this.toast = null;
          resolve()
        }
      });
    })
  }
}

module.exports = new ToastUtil();