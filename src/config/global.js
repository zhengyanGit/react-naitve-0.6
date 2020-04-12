/*
 * @Author: zy 
 * @Date: 2020-04-12 13:45:11 
 * @Last Modified by: zy
 * @Last Modified time: 2020-04-12 16:07:32
 * @params GLOBAL里存放一些全局公共的变量
 */

import { Dimensions, Platform } from "react-native";
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export const GLOBAL = {
  CURR_ENV: 'PROD',
  CURR_MODULE: '2.0',
  SCREEN_HEIGHT: ScreenHeight,
  SCREEN_WIDTH: ScreenWidth,
  SCALE: ScreenWidth / 375
}
