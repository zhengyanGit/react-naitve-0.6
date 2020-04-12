/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:48 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:48 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from "react-native";
import { GLOBAL } from '../../config/global';
const scale = GLOBAL.SCALE;


/* 
	bgShow : 是否去掉黑色块  默认 false
*/



export class Loading extends Component {
  static props = {

  }

  constructor(props) {
    super(props);
  }

  render () {
    let { bgShow } = this.props || {};
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
      }}>
        {
          bgShow ? <ActivityIndicator
            animating={true}
            color={'#000'}
            size="small"
          /> : <View style={styles.loadedCell}>
              <ActivityIndicator
                animating={true}
                color={'#fff'}
                size="small"
              />
            </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadedCell: {
    width: 75 * scale,
    height: 75 * scale,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  }
})