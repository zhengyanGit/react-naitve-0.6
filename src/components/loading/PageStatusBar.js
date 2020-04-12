/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:56 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:56 
 */

import React, { Component } from 'react';
import {
  StatusBar
} from "react-native";

import { style } from '../../theme/style';

export class StatusBarView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  render () {
    let { hidden, backgroundColor, barStyle } = this.props;
    return (
      <StatusBar
        hidden={hidden}   //是否隐藏状态栏   true  flase
        backgroundColor={backgroundColor || style.color.themeColor}   //backgroundColor  背景颜色
        barStyle={barStyle || 'light-content'}    //设置状态栏文本的颜色（俩种）值：   'default'->黑色  安卓黑色最好 ->'dark-content'    'light-content'->白色 
      />

    )
  }
}
