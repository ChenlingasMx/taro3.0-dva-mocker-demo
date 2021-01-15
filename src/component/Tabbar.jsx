import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";

class Tabbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  handleAtTabBarClick = (data) => {
    this.setState({
      current: data
    })
    switch (data) {
      case 0:
        Taro.navigateTo({
          url: '/pages/home/index/index'
        })
        break
      case 1:
        Taro.navigateTo({
          url: '/pages/user/index/index'
        })
        break
      default:
        Taro.navigateTo({
          url: '/pages/index/index'
        })
    }
  }
  render() {
    return (
      <AtTabBar
        current={this.state.current}
        fixed
        onClick={this.handleAtTabBarClick}
        tabList={[
          { title: '首页', iconType: 'bullet-list', text: 'new' },
          { title: '个人中心', iconType: 'user' }
        ]}
      />
    )
  }
}
export default Tabbar