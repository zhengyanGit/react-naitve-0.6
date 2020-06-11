import React, { Component } from 'react';
import BottomTab from '../../navigation/RootTabs';

export default class Layout extends Component {

  static navigationOptions = {
    header: null,
    gesturesEnabled: false //禁止侧滑返回事件
  }

  render () {
    return (<BottomTab />)
  }
}