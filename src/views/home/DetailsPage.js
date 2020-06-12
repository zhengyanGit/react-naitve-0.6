/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 15:47:19
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Home } from '../../config/value-const';


export class DetailsPage extends Component {
  constructor(props) {
    super(props);
    let { itemData } = props.navigation.state.params || {};
    let { num } = itemData || {};
    this.state = {
      num
    };
  }
  render () {
    let { num } = this.state;
    return (<View style={styles.body}>
      <Text style={styles.text}>DetailsPage:{num}</Text>
    </View >
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
