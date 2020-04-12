/*
 * @Author: zy
 * @Date: 2020-04-12 14:41:58
 * @Last Modified by: zy
 * @Last Modified time: 2020-04-12 17:49:24
 */
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomePage } from '../../src/views/home/HomePage';
import { DetailsPage } from '../../src/views/home/DetailsPage';
import { OrderIndexPage } from '../../src/views/order/index';
import { UserIndexPage } from '../../src/views/user/index';
import { PriceIndexPage } from '../../src/views/price/index';

import IconWithBadge from '../components/ui/IconCpt';


const HomeStack = createStackNavigator({
  Home: { screen: HomePage },
  Details: { screen: DetailsPage },
});





const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Order: OrderIndexPage,
  User: UserIndexPage,
  Price: PriceIndexPage
}, {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     if (routeName === 'Home') {
    //       iconName = focused
    //         ? 'home-outline'
    //         : 'home-outline';
    //       IconComponent = HomeIconWithBadge;
    //     } else {
    //       iconName = focused ? 'home-outline' : 'home-outline';
    //     }

    //     // You can return any component that you like here!
    //     return <IconComponent name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    // tabBarOptions: {
    //   activeTintColor: 'tomato',
    //   inactiveTintColor: 'gray',
    // },
  });

export default createAppContainer(TabNavigator);
