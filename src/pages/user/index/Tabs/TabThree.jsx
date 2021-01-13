import React, {} from 'react'
import { View,Text} from '@tarojs/components'
//import { AtTabs, AtTabsPane } from 'taro-ui'
import {connect} from 'react-redux'

const TabThree = () => {
    return (
      <View>
        <Text>11111111111</Text>
      </View>
    )
}

export default connect(({index})=>({index}))(TabThree);