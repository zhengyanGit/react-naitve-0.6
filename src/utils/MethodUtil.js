/*
 * @Author: zy 
 * @Date: 2020-04-12 13:45:57 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:45:57 
 */

import { style } from '../theme/style';
class MethodUtil {
  //格式化钱数，三位加一逗号
  toThousands (number, decimals) {
    number = number + "";
    number = number.replace(/\,/g, "");
    if (isNaN(number) || number == "") return "";
    number = Math.round(number * 100) / 100;
    if (number < 0)
      return '-' + this.outputdollars(Math.floor(Math.abs(number) - 0) + '') + (decimals ? this.outputcents(Math.abs(number) - 0) : '');
    else
      return this.outputdollars(Math.floor(number - 0) + '') + (decimals ? this.outputcents(number - 0) : '');
  }
  //格式化金额
  outputdollars (number) {
    if (number.length <= 3)
      return (number == '' ? '0' : number);
    else {
      var mod = number.length % 3;
      var output = (mod == 0 ? '' : (number.substring(0, mod)));
      for (i = 0; i < Math.floor(number.length / 3); i++) {
        if ((mod == 0) && (i == 0))
          output += number.substring(mod + 3 * i, mod + 3 * i + 3);
        else
          output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
      }
      return (output);
    }
  }
  outputcents (amount) {
    amount = Math.round(((amount) - Math.floor(amount)) * 100);
    return (amount < 10 ? '.0' + amount : '.' + amount);
  }

  //求百分比
  setPercent (numberA, numberB) {
    let output;
    let num = parseFloat(numberA);
    let total = parseFloat(numberB);
    if (isNaN(num) || isNaN(total)) {
      return "-";
    }
    return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00 + "%");
  }


  // js 计算 丢失精度
  countObj = {
		/*
     * 判断obj是否为一个整数
     */
    isInteger: function (obj) {
      return Math.floor(obj) === obj
    },
    /* 将一个浮点数转成整数，返回整数和倍数 */
    toInteger: function (floatNum) {
      var ret = { times: 1, num: 0 }
      var isNegative = floatNum < 0
      if (this.isInteger(floatNum)) {
        ret.num = floatNum
        return ret
      }
      var strfi = floatNum + ''
      var dotPos = strfi.indexOf('.')
      var len = strfi.substr(dotPos + 1).length
      var times = Math.pow(10, len)
      var intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10)
      ret.times = times
      if (isNegative) {
        intNum = -intNum
      }
      ret.num = intNum
      return ret
    },
    isNumber: function (val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    },
    toFixed: function toFixed (num, s) {
      var times = Math.pow(10, s)
      var des = num * times + 0.5
      des = parseInt(des, 10) / times
      return des + ''
    },
    /*  */
    operation: function (a, b, op) {
      var o1 = this.toInteger(a)
      var o2 = this.toInteger(b)
      var n1 = o1.num
      var n2 = o2.num
      var t1 = o1.times
      var t2 = o2.times
      var max = t1 > t2 ? t1 : t2
      var result = null
      var resultLs = (n1 / n2) * (t2 / t1);
      switch (op) {
        case 'add':
          if (t1 === t2) { // 两个小数位数相同
            result = n1 + n2
          } else if (t1 > t2) { // o1 小数位 大于 o2
            result = n1 + n2 * (t1 / t2)
          } else { // o1 小数位 小于 o2
            result = n1 * (t2 / t1) + n2
          }
          return result / max
        case 'subtract':
          if (t1 === t2) {
            result = n1 - n2
          } else if (t1 > t2) {
            result = n1 - n2 * (t1 / t2)
          } else {
            result = n1 * (t2 / t1) - n2
          }
          return result / max
        case 'multiply':
          result = (n1 * n2) / (t1 * t2)
          return result
        case 'divide':
          result = (n1 / n2) * (t2 / t1)
          return result
      }
    },
    add: function (a, b) {   //加
      if (this.isNumber(a) && this.isNumber(b)) {
        return this.operation(a, b, 'add')
      } else {
        return null;
      }
    },
    subtract: function (a, b) {   // 减
      if (this.isNumber(a) && this.isNumber(b)) {
        return this.operation(a, b, 'subtract')
      } else {
        return null;
      }
    },
    multiply: function (a, b) {   // 乘法
      if (this.isNumber(a) && this.isNumber(b)) {
        return this.operation(a, b, 'multiply')
      } else {
        return null;
      }
    },
    divide: function (a, b, digits) {   //除法
      if (this.isNumber(a) && this.isNumber(b)) {
        return digits ? this.toFixed(this.operation(a, b, 'divide'), digits) : this.operation(a, b, 'divide');
        //return digits ? this.operation(a, b, 'divide').toFixed(digits) : this.operation(a, b, 'divide');
      } else {
        return null;
      }
    }
  }
  //是否是数字
  checkRate (input) {
    var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/ 
    if (!re.test(input)) {
      return false;
    }
    return true;
  }
  //时间范围
  timeRange (timeStart, timeEnd) {
    if (!timeStart && !timeEnd) return
    //月份判断
    let timeStartArr = timeStart.split('-');
    let timeEndArr = timeEnd.split('-');
    let startYear = parseInt(timeStartArr[0]);
    let startMonth = parseInt(timeStartArr[1]);
    let startDay = parseInt(timeStartArr[2]);
    let endYear = parseInt(timeEndArr[0]);
    let endMonth = parseInt(timeEndArr[1]);
    let endDay = parseInt(timeEndArr[2]);
    let resetObj = {};


    if (endYear > startYear) {  // 不同年
      //去年
      for (var i = startMonth; i <= 12; i++) {
        if (startMonth == i) { // 第一个开始点
          for (var j = startDay; j < 32; j++) {
            if (startDay == j) {
              resetObj[startYear + '-' + this._bigTen(i) + '-' + this._bigTen(startDay)] = { startingDay: true, color: style.color.timeColor, textColor: style.color.white };
            } else {
              resetObj[startYear + '-' + this._bigTen(i) + '-' + this._bigTen(j)] = { color: style.color.timeColor, textColor: style.color.white };
            }
          }
        } else {
          for (var j = 1; j < 32; j++) {
            resetObj[startYear + '-' + this._bigTen(i) + '-' + this._bigTen(j)] = { color: style.color.timeColor, textColor: style.color.white };
          }
        }
      }
      //今年
      for (var m = 1; m <= endMonth; m++) {
        if (endMonth == m) {
          for (var n = 1; n <= endDay; n++) {
            if (endDay == n) {
              resetObj[endYear + '-' + this._bigTen(m) + '-' + this._bigTen(n)] = { endingDay: true, color: style.color.timeColor, textColor: style.color.white };
            } else {
              resetObj[endYear + '-' + this._bigTen(m) + '-' + this._bigTen(n)] = { color: style.color.timeColor, textColor: style.color.white };
            }
          }
        } else {
          for (var n = 1; n < 32; n++) {
            resetObj[endYear + '-' + this._bigTen(m) + '-' + this._bigTen(n)] = { color: style.color.timeColor, textColor: style.color.white };
          }
        }
      }
    } else {   // 同年
      if (startMonth == endMonth) {  // 同月
        for (var i = startDay; i <= endDay; i++) {
          if (i == startDay) {
            resetObj[startYear + '-' + this._bigTen(startMonth) + '-' + this._bigTen(i)] = { startingDay: true, color: style.color.timeColor, textColor: style.color.white };
          } else if (i == endDay) {  // 最后一个
            resetObj[startYear + '-' + this._bigTen(startMonth) + '-' + this._bigTen(i)] = { endingDay: true, color: style.color.timeColor, textColor: style.color.white };
          } else {
            resetObj[startYear + '-' + this._bigTen(startMonth) + '-' + this._bigTen(i)] = { color: style.color.timeColor, textColor: style.color.white };
          }
        }
      } else { // 不同月
        for (var i = startMonth; i <= endMonth; i++) {
          if (i == startMonth) {
            for (var j = startDay; j < 32; j++) {
              if (j == startDay) {
                resetObj[startYear + '-' + this._bigTen(i) + '-' + this._bigTen(startDay)] = { startingDay: true, color: style.color.timeColor, textColor: style.color.white };
              } else {
                resetObj[endYear + '-' + this._bigTen(i) + '-' + this._bigTen(j)] = { color: style.color.timeColor, textColor: style.color.white };
              }
            }
          } else if (i == endMonth) {
            for (var j = 1; j <= endDay; j++) {
              if (j == endDay) {
                resetObj[endYear + '-' + this._bigTen(i) + '-' + this._bigTen(j)] = { endingDay: true, color: style.color.timeColor, textColor: style.color.white };
              } else {
                resetObj[endYear + '-' + this._bigTen(i) + '-' + this._bigTen(j)] = { color: style.color.timeColor, textColor: style.color.white };
              }
            }
          } else {
            for (var j = 1; j < 32; j++) {
              resetObj[endYear + '-' + this._bigTen(i) + '-' + this._bigTen(j)] = { color: style.color.timeColor, textColor: style.color.white };
            }
          }
        }
      }
    }
    return resetObj;
  }
  //大于10
  _bigTen (numStr) {
    return numStr >= 10 ? numStr : '0' + numStr;
  }
}
module.exports = new MethodUtil();