import React, {} from 'react'
import { View,Text} from '@tarojs/components'
//import { AtTabs, AtTabsPane } from 'taro-ui'
import {connect} from 'react-redux'

const TabThree = () => {
    return (
      <View>
        <Text>我的页面</Text>
      </View>
    )
}

export default connect(({index})=>({index}))(TabThree);