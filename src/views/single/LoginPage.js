/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 13:17:02
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView, Button
} from 'react-native';
import { Home } from '../../config/value-const';


export class LoginPage extends Component {

  static navigationOptions = {
    headerShown: false,
    gesturesEnabled: false //禁止侧滑返回事件
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (<SafeAreaView style={styles.body}>
      <Text style={styles.text}>登入页</Text>
      <Button
        title="跳首页"
        onPress={() => this.props.navigation.navigate('Layout')}
      />
    </SafeAreaView >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30 * Home.scale,
    color: 'orange'
  }
});
