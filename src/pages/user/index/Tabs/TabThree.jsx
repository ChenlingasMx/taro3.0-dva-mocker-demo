import React, { forwardRef } from 'react'
import { View, Text } from '@tarojs/components'
//import { AtTabs, AtTabsPane } from 'taro-ui'
import { connect } from 'react-redux'

const TabThree = () => {
  return (
    <View>
      <Text>我的页面</Text>
    </View>
  )
}

const TabThreeConnect = connect(({ index, loading }) => ({ index, loading }))(TabThree);
export default forwardRef((props, ref) => <TabThreeConnect {...props} refInstance={ref} />);