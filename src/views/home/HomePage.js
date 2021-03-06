/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 11:26:41
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Home } from '../../config/value-const';



export class HomePage extends Component {



  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return (<View style={styles.body}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.row}>
        <Button
          title="跳首页详情"
          onPress={() => this.props.navigation.navigate('DetailsPage')}
        />
        <Button
          title="跳登入"
          onPress={() => this.props.navigation.navigate('LoginPage')}
        />
        {/* <Ionicons name="egg-outline" /> */}
      </View>
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
