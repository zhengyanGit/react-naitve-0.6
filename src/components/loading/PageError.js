/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:43 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:43 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { GLOBAL } from '../../config/global';
import { style } from '../../theme/style';
// import { Button } from 'native-base';

const scale = GLOBAL.SCALE;
export class ErrorView extends Component {
  static props = {

  }

  constructor(props) {
    super(props);
  }

  _onPress () {

  }

  render () {
    return (
      <View style={[styles.container, {
        backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : null
      }]}>
        <Image style={styles.imgStyle} source={this.props.imgSource ? this.props.imgSource : require('../../imgs/global/dealtWithEmpty.png')} />
        <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.title ? this.props.title : '网络出错了'}</Text>
        <TouchableOpacity style={[styles.btnStyle, this.props.buttonStyle]} activeOpacity={1}
          onPress={() => this.props.onPress() ? this.props.onPress() : this._onPress()} >
          {/* <Image style={styles.btnImgStyle} source={this.props.btnImgSource ? this.props.btnImgSource : require('../../imgs/IntelligenceStatement/Group2.png')} /> */}
          <Text style={[styles.btnTextStyle, this.props.btnTextStyle]}>{this.props.btnText ? this.props.btnText : '刷新'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    marginTop: '20%',
    marginBottom: 22 * scale,
    width: '45%',
  },
  textStyle: {
    fontSize: 13 * scale,
    color: '#4B4B4B',
    textAlign: 'center',
    marginBottom: 16 * scale,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80 * scale,
    backgroundColor: style.color.themeColor,
    borderRadius: 25 * scale,
    paddingTop: 10 * scale,
    paddingBottom: 10 * scale,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 14 * scale
  }
})