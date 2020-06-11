/*
 * @Author: zy
 * @Date: 2020-04-12 14:41:58
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 13:27:03
 */
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { HomePage } from '../../src/views/home/HomePage';
import { ListPage } from '../../src/views/home/ListPage';
import { DetailsPage } from '../../src/views/home/DetailsPage';


import { OrderIndexPage } from '../views/order/OrderIndexPage';
import { OrderPage } from '../views/order/OrderPage';

import { UserIndexPage } from '../../src/views/user/index';
import { ServerPage } from '../../src/views/server/index';

import IconWithBadge from '../components/ui/IconCpt';

import StackPage from './Stack';



const HomeStack = createStackNavigator({
  HomePage: { screen: HomePage },
  DetailsPage: { screen: DetailsPage },
  ListPage: { screen: ListPage },
  ...StackPage
});

const OrderStack = createStackNavigator({
  OrderIndexPage: { screen: OrderIndexPage },
  OrderPage: { screen: OrderPage },
});





const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} />;
};

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '首页',
    }
  },
  Order: {
    screen: OrderStack,
    navigationOptions: {
      tabBarLabel: '店铺',
    }
  },
  Server: {
    screen: ServerPage,
    navigationOptions: {
      tabBarLabel: '服务',
    }
  },
  User: {
    screen: UserIndexPage,
    navigationOptions: {
      tabBarLabel: '我的',
    }
  }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        //console.log('routeName', routeName, horizontal, tintColor)
        let IconComponent = null;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (routeName === 'Order') {
          iconName = focused ? 'isv' : 'isv';
        } else if (routeName === 'User') {
          iconName = focused ? 'user' : 'user';
        } else {
          iconName = focused ? 'codesquareo' : 'codesquareo';
        }
        IconComponent = HomeIconWithBadge;
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 13,
      },
    },
  });

export default createAppContainer(TabNavigator);
