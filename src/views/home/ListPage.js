/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-11 20:04:22
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Home } from '../../config/value-const';
import { ListItem } from 'react-native-elements';
import { styleData } from '../../basic/css/theme'



const LISTDATA = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  }
]


export class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isLoadIco: false,  // 下拉涮新的 图标
    };
    this.parmas = {
      pageNo: 1
    }
  }

  //获取数据
  _getData = async () => {
    this.setState({
      listData: LISTDATA
    })
  }

  //
  _renderItemView = (data, index) => {
    console.log('data-1223', data)
    let { name, avatar_url, subtitle } = data.item || {};
    return <ListItem
      key={index}
      leftAvatar={{ source: { uri: avatar_url } }}
      title={name}
      subtitle={subtitle}
    />
  }

  // 下拉更新函数
  _isLoadRefresh = async () => {
    this.parmas.pageNo = 1;
    await this._getData(true);
  }

  // 上拉加载
  _onEndReached = async () => {
    if (this.parmas.pageNo < this.parmas.totalPage) {
      this.parmas.pageNo++;
      this._getData();
    }
  }


  render () {
    let { listData, isLoadIco } = this.state;
    return (<View style={styles.body}>
      {
        listData && listData.length ? <FlatList
          data={listData}
          extraData={this.state}
          renderItem={this._renderItemView}
          refreshing={isLoadIco}
          onRefresh={this._isLoadRefresh}
          onEndReachedThreshold={0.5}
          onEndReached={this._onEndReached}
        /> : <View style={styles.midden}>
            <ActivityIndicator size="large" color={styleData.color.themeColor} />
          </View>
      }

    </View >
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  midden: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
