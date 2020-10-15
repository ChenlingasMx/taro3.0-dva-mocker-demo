import Taro from "@tarojs/taro"
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import {connect} from 'react-redux'
import sysConfig from '@/config'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    this.props.dispatch({
      type:'index/userLoginCode',
      payload:{
          phone:'13812457277',
          code:'0990'
      }
  })
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goto=()=>{
    Taro.navigateTo({url:'/pages/account/login/index'})
  }
  render () {
    if(this.props.loading.effects['index/userLoginCode']!==false){
      return <View className='index'>jiazai</View>
    }
    console.log(this.props)
    return (
      <View className='index'>
        <Text>Hello home!</Text>
      </View>
    )
  }
}

export default connect(({index,loading})=>({index,loading}))(Index);