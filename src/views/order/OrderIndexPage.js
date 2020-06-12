/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 15:56:59
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export class OrderIndexPage extends Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (<View style={styles.body}>
      <Text style={styles.text}>Order</Text>
      <Button
        title="跳店铺一"
        onPress={() => this.props.navigation.navigate('OrderPage')}
      />
      <Button
        title="跳首页"
        onPress={() => this.props.navigation.navigate('HomePage')}
      />
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
    fontSize: 50,
    color: 'orange'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
