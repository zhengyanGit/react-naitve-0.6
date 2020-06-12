/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 15:48:14
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Home } from '../../config/value-const';
import storageUtil from '../../utils/storageUtil';



export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _removeAsyncStorage = async () => {
    await storageUtil.remove('userName');
  }

  render () {
    return (<View style={styles.body}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.row}>
        <Button
          title="跳列表页"
          onPress={() => this.props.navigation.navigate('ListPage')}
        />
        <Button
          title="跳登入"
          onPress={() => this.props.navigation.navigate('LoginPage')}
        />
        <Button
          title="删除登入信息"
          onPress={this._removeAsyncStorage}
        />
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
    alignItems: 'center'
  }
});
