/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:29 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:29 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio
} from "react-native";
import { GLOBAL } from '../../config/global';
import { style } from '../../theme/style';

const scale = GLOBAL.SCALE;
export class BottomView extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { recordCount, nowList } = this.props;
    return (
      <View style={styles.nowBottom}>
        <Text style={styles.nowBottomText}>当前共<Text style={styles.themColor}>{recordCount}</Text>条消息，已加载<Text style={styles.themColor}>{nowList}</Text>条</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nowBottom: {
    position: 'absolute',
    bottom: 0,
    height: 40 * scale,
    width: '100%',
    backgroundColor: style.color.white,
    borderTopWidth: 1 / PixelRatio.get(),
    borderStyle: 'solid',
    borderTopColor: style.color.border,
  },
  nowBottomText: {
    textAlign: 'center',
    lineHeight: 40 * scale,
    fontSize: 12 * scale,
    color: style.color.dark
  },
  themColor: {
    color: style.color.themeColor
  },
})