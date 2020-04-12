/*
 * @Author: zy
 * @Date: 2020-04-12 15:47:17
 * @Last Modified by: zy
 * @Last Modified time: 2020-04-12 16:17:54
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomePage } from '../../src/views/home/HomePage';
import { DetailsPage } from '../../src/views/home/DetailsPage';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  Details: {
    screen: DetailsPage,
  },
}, {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator);