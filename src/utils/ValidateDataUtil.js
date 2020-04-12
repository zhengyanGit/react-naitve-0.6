/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:15 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:15 
 */

class ValidateDataUtil {

  regExpObj = {
    oneNumver: /^[1-9]{1}$/,  //只能输入1-9的整数
  }

	/**
	 * 是否为空
	 * @return {boolean}
	 * @param {string} value 
	 */
  isEmpty (value) {
    if ((typeof (value) == "undefined") || (value == null)) {
      return true;
    }

    value = this._removeAllSpace(value);
    return (value.length == 0);
  }

	/**
	 * 去掉空格回车
	 * @return {string}
	 * @param {any} str 
	 */
  _removeAllSpace (str) {
    str = str + "";
    return str.replace(/\s+/g, "");
  }

	/* 
	* 密码验证
	*/
  password (str) {
    regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    return regExp.test(str)
  }

	/* 
	* 去除中文字符
	*/
  removeChinese (str) {
    return str.replace(/[\u4e00-\u9fa5]/g, '');
  }

	/* 
  * 去除非数字
  */
  onlyNumber (str) {
    return str.replace(/[^\d]+/, '')
  }

	/* 
  * 手机号验证
  */
  isPhone (str) {
    const myreg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    const newStr = this.onlyNumber(str);
    return myreg.test(newStr);
  }

	/* 
	* 金额小数点后两位
	*/
  simpleFormatAsMoney (mnt) {
    // mnt -= 0;
    mnt = mnt ? (Math.round(mnt * 100)) / 100 : undefined;
    return (mnt == Math.floor(mnt)) ? mnt + '.00' : ((mnt * 10 == Math.floor(mnt * 10)) ? mnt + '0' : mnt);
  }

	/* 
	* 日期格式
	*/
  _getDateStr (str) {
    if (str && str.length) {
      const currDate = (typeof str == 'string') ? new Date(str.replace(/-/g, '/')) : str;

      var y = currDate.getFullYear(),
        m = currDate.getMonth() + 1,
        d = currDate.getDate();
      var dateStr = "";
      dateStr += y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
      return dateStr;
    } else {
      return '';
    }
  }

}

module.exports = new ValidateDataUtil();