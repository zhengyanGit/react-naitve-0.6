/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 15:58:03
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { Home } from '../../config/value-const';
import { Input, Button } from 'react-native-elements';
import ToastUtil from '../../utils/toastUtil';
import storageUtil from '../../utils/storageUtil';


export class LoginPage extends Component {
  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false
  }
  constructor(props) {
    super(props);
    this.state = {};
    this.from = {
      name: '',
      password: ''
    }
  }
  //登入
  _login = async () => {
    let { name, password } = this.from;
    if (name == '') {
      ToastUtil.showError('请输入用户名');
      return
    } else if (password == '') {
      ToastUtil.showError('请输入密码');
      return
    }
    await storageUtil.set('userName', name);
    this.props.navigation.goBack();
  }
  render () {
    return (<SafeAreaView style={styles.body}>
      <View style={styles.logBox}>
        <View style={styles.itemRow}>
          <Text style={styles.Text}>用户名：</Text>
          <Input placeholder='name' onChangeText={(value) => { this.from.name = value; }} style={styles.inputStyle} />
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.Text}>密码：</Text>
          <Input placeholder='password' onChangeText={(value) => { this.from.password = value; }} />
        </View>
        <Button
          title="登入"
          style={styles.buttonStyle}
          onPress={this._login}
        />
      </View>
    </SafeAreaView >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30 * Home.scale,
    color: 'orange'
  },
  logBox: {
    paddingHorizontal: 30,
  },
  Text: {
    fontSize: 14,
    color: '#333',
    paddingLeft: 8
  },
  itemRow: {

  },
  inputStyle: {
    padding: 0,
    margin: 0,
    backgroundColor: 'red'
  },
  buttonStyle: {
    marginLeft: 8,
    marginRight: 8
  }
});
