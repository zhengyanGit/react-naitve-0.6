/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 13:01:25
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, Button
} from 'react-native';
import { Home } from '../../config/value-const'
import { StackActions, NavigationActions } from 'react-navigation';


export class UserIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('NavigationActions', NavigationActions)
  }
  render () {
    return (<View style={styles.body}>
      <Text style={styles.text}>user</Text>
      <Button
        title="跳首页列表"
        onPress={() => this.props.navigation.navigate('ListPage')}
      />
      <Button
        title="跳登入"
        onPress={() => {
          this.props.navigation.navigate('LoginPage')
        }}
      />
      <Button
        title="跳引导页"
        onPress={() => {
          this.props.navigation.navigate('SplashPage')
        }}
      />
    </View >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50 * Home.scale,
    color: 'orange'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
