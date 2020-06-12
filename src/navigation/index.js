/*
 * @Author: zy
 * @Date: 2020-04-12 15:47:17
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 12:15:01
 */

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Layout from '../views/single/Layout';
//Stack 页面
import { SplashPage } from '../views/single/SplashPage';
import defaultStack from './defaultStack';

const AppNavigator = createStackNavigator({ Layout }, { ...defaultStack });
const SwitchNavigator = createSwitchNavigator(//为了实现启动广告页
  {
    ModalNavigator: AppNavigator,
    SplashPage: SplashPage,
  },
  {
    initialRouteName: 'SplashPage',
    // initialRouteParams: {title: 'Home'},  //可以带参数
  }
);


export default createAppContainer(SwitchNavigator);