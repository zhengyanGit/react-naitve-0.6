/*
 * @Author: zy 
 * @Date: 2020-04-12 13:46:36 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:46:36 
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

const scale = GLOBAL.SCALE;
export class EmptyView extends Component {
  static props = {

  }

  constructor(props) {
    super(props);
  }

  _onPress () {

  }

  render () {
    let { imgSource } = this.props;
    let imgSrc = imgSource || require('../../imgs/global/dealtWithEmpty.png');
    return (
      <View style={[styles.container, {
        backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : null
      }]}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image style={styles.imgStyle} source={imgSrc} />
          </View>
          <Text style={[styles.textStyle, this.props.textStyle, (this.props.title && this.props.title.length > 10) ? styles.longTextStyle : null]}>{this.props.title ? this.props.title : '还没有内容'}</Text>
          {
            this.props.btnShow ?
              <TouchableOpacity style={[styles.btnStyle, this.props.buttonStyle]} activeOpacity={1}
                onPress={() => this.props.onPress() ? this.props.onPress() : this._onPress()} >
                {
                  this.props.btnImgShow ?
                    (<Image style={styles.btnImgStyle} source={this.props.btnImgSource ? this.props.btnImgSource : require('../../imgs/report/Group2.png')} />)
                    : (null)
                }

                <Text style={[styles.btnTextStyle, this.props.btnTextStyle]}>{this.props.btnText ? this.props.btnText : '返回'}</Text>
              </TouchableOpacity>
              : (null)
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    marginBottom: 22 * scale,
    width: 140 * scale,
    height: 140 * scale
  },
  textStyle: {
    fontSize: 13 * scale,
    color: '#4B4B4B',
    textAlign: 'center',
    marginBottom: 16 * scale,
  },
  longTextStyle: {
    paddingLeft: 50 * scale,
    paddingRight: 50 * scale,
    textAlign: 'left',
    lineHeight: 18 * scale
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //width: '34%',
    backgroundColor: style.color.themeColor,
    borderRadius: 100 * scale,
    paddingTop: 10 * scale,
    paddingBottom: 10 * scale,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 14 * scale,
  }
})