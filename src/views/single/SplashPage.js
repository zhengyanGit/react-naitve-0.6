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
  TouchableOpacity
} from 'react-native';
import { Home } from '../../config/value-const';
//import Icon from 'react-native-vector-icons/AntDesign';
import { styleData } from '../../basic/css/theme'
import { Button } from 'react-native-elements';

export class SplashPage extends Component {

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
      <View style={styles.info}>
        {/* <Icon name="earth" style={{ fontSize: 100, color: '#fff' }} /> */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginPage')}>
          <Text style={styles.text} >中石油</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Layout')}>
          <Text style={styles.text} >首页-苹果电脑翻译</Text>
        </TouchableOpacity>
        <Button
          title="Solid Button"
        />
      </View>
    </SafeAreaView >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: styleData.color.themeColor
  },
  info: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20 * Home.scale,
    color: '#fff',
  }
});
