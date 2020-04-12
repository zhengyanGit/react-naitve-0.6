/*
 * @Author: zy 
 * @Date: 2020-04-12 13:47:04 
 * @Last Modified by:   zy 
 * @Last Modified time: 2020-04-12 13:47:04 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Loading } from './Pageloading';
import { ErrorView } from './PageError';
import { EmptyView } from './PageEmpty';
import { BottomView } from './PageBottom';
import { StatusBarView } from './PageStatusBar';

export class PageStatusIndex extends Component {
  //static props = {}
  constructor(props) {
    super(props);
  }

  _onEmptyPress = () => {
    this.props.onEmptyPress();
  };

  _onErrorPress = () => {
    this.props.onErrorPress();
  };

  static defaultProps = {
    status: 'data',
  };

  //页面的状态  loading-请求中  data-数据返回 empty-数据为空 error-返回错误
  render () {
    // 第一次加载等待的view
    if (this.props.status === 'loading') {
      return this.renderLoadingView();
    } else if (this.props.status === 'empty') {
      //请求为空的view
      return this.renderEmptyView();
    } else if (this.props.status === 'error') {
      //请求失败view
      return this.renderErrorView();
    }
    else if (this.props.status === 'bottom') {
      return this.renderBottomView();
    } else if (this.props.status === 'statusbar') {
      return this.renderStatusBarView();
    }
    //加载数据
    return null;
  }


  //加载等待的view
  renderLoadingView () {
    return (
      <Loading
        hintStyle={this.props.initHintStyle}
        indicatorColor={this.props.initIndicatorColor}
        containerBgColor={this.props.initContainerBgColor}
        loadingHint={this.props.initHint} />
    );
  }

  //加载失败view
  renderErrorView () {
    return (
      <ErrorView
        title={this.props.errorText}
        imgSource={this.props.errorImgSource}
        btnText={this.props.errorBtnText}
        textStyle={this.props.errorTextStyle}
        buttonStyle={this.props.errorButtonStyle}
        backgroundColor={this.props.errorBgColor}
        onPress={() => {
          this._onErrorPress();
        }} />
    );
  }

  //加载失败view
  renderEmptyView () {
    return (
      <EmptyView
        title={this.props.emptyText}
        imgSource={this.props.emptyImgSource}
        btnText={this.props.emptyBtnText}
        btnShow={this.props.emptyBtnShow}
        textStyle={this.props.emptyTextStyle}
        buttonStyle={this.props.emptyButtonStyle}
        backgroundColor={this.props.emptyBgColor}
        btnImgShow={this.props.btnImgShow}
        onPress={() => {
          this._onEmptyPress();
        }} />
    );
  }

  //加载底部
  renderBottomView () {
    return (
      <BottomView
        recordCount={this.props.recordCount}   // 总条数
        nowList={this.props.nowList}    // 当前加载几条
      />
    )
  }

  //头部状态栏
  renderStatusBarView () {
    let { hidden, backgroundColor, barStyle } = this.props;
    return (
      <StatusBarView
        hidden={hidden}   //是否隐藏状态栏   true  flase
        backgroundColor={backgroundColor}   //backgroundColor  背景颜色
        barStyle={barStyle}    //设置状态栏文本的颜色（俩种）值：   'default'->黑色  
      />
    )
  }



  renderData () {
    return (
      <View style={{ flex: 1, }} {...this.props}>
        {this.props.status === 'loading' ? <View style={styles.just_loading_container}>
          <Loading
            hintStyle={this.props.loadingHintStyle}
            indicatorColor={this.props.loadingIndicatorColor}
            containerBgColor={this.props.loadingContainerBgColor}
            loadingHint={this.props.loadingHint}
          />
        </View> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  position_container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    flexDirection: 'column',
  },

  just_loading_container: {
    width: window.width,
    height: window.height - 40,
    backgroundColor: "transparent",
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
})