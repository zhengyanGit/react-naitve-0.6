/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 14:18:40
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
