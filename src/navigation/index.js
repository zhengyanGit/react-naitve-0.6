/*
 * @Author: zy
 * @Date: 2020-04-12 15:47:17
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 13:25:56
 */

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Layout from '../views/single/Layout';
//Stack 页面
import { SplashPage } from '../views/single/SplashPage';

const AppNavigator = createStackNavigator({ Layout }, {
  defaultNavigationOptions: null,
  animationEnabled: false,
  mode: 'modal', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});

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