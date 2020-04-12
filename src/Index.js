/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-04-12 16:31:40
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Stack from './navigation/Stack';
import RootTabs from './navigation/RootTabs';




export class Index extends Component {
  render () {
    return (<View style={styles.body}>
      <StatusBar barStyle="dark-content" />
      <RootTabs />
      <SafeAreaView>
      </SafeAreaView>
    </View >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});
