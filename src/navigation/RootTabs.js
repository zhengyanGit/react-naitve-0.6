/*
 * @Author: zy
 * @Date: 2020-04-12 14:41:58
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 17:39:13
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import defaultStack from './defaultStack';
import IconWithBadge from '../components/ui/IconCpt';
import HomeStack from './HomeStack';
import OrderStack from './OrderStack';
import ServerStack from './ServerStack';
import UserStack from './UserStack';
import { styleData } from '../basic/css/theme'


const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} />;
};


class TabItem {
  constructor(page) {
    this.page = page;
  }
  getStack () {
    return createStackNavigator({ ...this.page }, { ...defaultStack });
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: new TabItem(HomeStack).getStack(),
    navigationOptions: {
      tabBarLabel: '首页',
    }
  },
  Order: {
    screen: new TabItem(OrderStack).getStack(),
    navigationOptions: {
      tabBarLabel: '店铺',
    }
  },
  Server: {
    screen: new TabItem(ServerStack).getStack(),
    navigationOptions: {
      tabBarLabel: '服务',
    }
  },
  User: {
    screen: new TabItem(UserStack).getStack(),
    navigationOptions: {
      tabBarLabel: '我的',
    }
  }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      gestureEnabled: false, // 关闭手势
      gesturesResponseDistance: 100,// 距离
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
      activeTintColor: styleData.color.themeColor,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 13,
      },
    },
  });

export default createAppContainer(TabNavigator);
