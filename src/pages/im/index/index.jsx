import React from 'react'
import { View, Text } from '@tarojs/components'
import {connect} from 'react-redux'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

const Im =()=>  {
    return (
      <View className='index'>
        <Text>欢迎聊天</Text>
      </View>
    )
}

export default connect(({index})=>({index}))(Im);