/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 13:33:26
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Router from './navigation/index';




export class Index extends Component {
  render () {
    return (<View style={styles.body}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <Router />
    </View >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});
