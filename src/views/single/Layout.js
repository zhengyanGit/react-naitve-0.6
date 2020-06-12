import React, { Component } from 'react';
import BottomTab from '../../navigation/RootTabs';
import storageUtil from '../../utils/storageUtil';
import NavigationService from '../../navigation/navigationSeevice'

export default class Layout extends Component {

  static navigationOptions = {
    headerShown: false,
    gestureEnabled: false
  }

  componentDidMount () {
    this._isLoging();
  }

  _isLoging = async () => {
    let isLoad = await storageUtil.get('userName');
    if (!isLoad) {
      NavigationService.navigate('LoginPage');
    }
  }


  render () {
    return (<BottomTab ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);//设置顶层导航
    }} onNavigationStateChange={(prevState, newState, action) => { this._isLoging() }} />)
  }
}