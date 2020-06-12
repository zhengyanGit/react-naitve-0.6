/*
 * @Author: zy 
 * @Date: 2020-04-12 14:07:14 
 * @Last Modified by: zy
 * @Last Modified time: 2020-06-12 16:30:42
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { styleData } from '../../basic/css/theme';
import NavigationService from '../../navigation/navigationSeevice'


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
    this.listNum = 15;
  }

  UNSAFE_componentWillMount () {
    this._getData();
  }

  //数据生成
  _listData = () => {
    let { pageNo } = this.parmas;
    let lsArr = [];
    let num = (pageNo - 1) * this.listNum;
    for (let i = num; i < num + this.listNum; i++) {
      lsArr.push({
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        num: i
      });
    }
    return lsArr;
  }

  //获取数据
  _getData = async (refresh) => {
    let data = this._listData();
    this.setState({
      listData: refresh ? data : this.state.listData.concat(data)
    })
  }

  //一条数据模版
  _renderItemView = (data, index) => {
    let { name, avatar_url, subtitle, num } = data.item || {};
    return <ListItem
      key={index}
      leftAvatar={{ source: { uri: avatar_url } }}
      title={name + '-' + num}
      subtitle={subtitle}
      style={{ marginBottom: 5 }}
      onPress={() => { this._onBackdropPress(data.item) }}
    />
  }

  //跳详情页
  _onBackdropPress = (itemData) => {
    NavigationService.navigate('DetailsPage', { itemData })
  }

  // 下拉更新函数
  _isLoadRefresh = async () => {
    this.parmas.pageNo = 1;
    await this._getData(true);
  }

  // 上拉加载
  _onEndReached = async () => {
    this.parmas.pageNo++;
    this._getData();
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
