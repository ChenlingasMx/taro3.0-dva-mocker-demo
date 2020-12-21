import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {connect} from 'react-redux'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

const Users = () => {
    return (
      <View className='index'>
        <Text>欢迎用户</Text>
      </View>
    )
}

export default connect(({index})=>({index}))(Users);