/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 15:58:19
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { Home } from '../../config/value-const';


export class SetPasswrodPage extends Component {

  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (<SafeAreaView style={styles.body}>
      <Text style={styles.text}>设置密码</Text>
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
