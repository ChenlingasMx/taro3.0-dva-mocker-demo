import Taro from "@tarojs/taro"
import React, { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from 'react-redux'
import sysConfig from '@/config'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

const Home = () => {
  useEffect(() => {
    props.dispatch({
      type: 'index/userLoginCode',
      payload: {
        phone: '13812457277',
        code: '0990'
      }
    })
  }, [])
  const goto = () => {
    Taro.navigateTo({ url: '/pages/account/login/index' })
  }
  return (
      <View className='index'>
        <Text>欢迎来到首页</Text>
      </View>
  )
}

export default connect(({ index, loading }) => ({ index, loading }))(Home);