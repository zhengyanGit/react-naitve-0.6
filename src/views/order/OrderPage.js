/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 09:34:37
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Home } from '../../config/value-const';


export class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (<View style={styles.body}>
      <Text style={styles.text}>店铺一</Text>
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
