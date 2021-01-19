import React, {useEffect} from 'react'
import { View,Text} from '@tarojs/components'
//import { AtTabs, AtTabsPane } from 'taro-ui'
import {connect} from 'react-redux'

const TabTwo = (props) => {
    useEffect(()=>{
      props.dispatch({type: "user/getList"})
    },[])
    return (
      <View>
        <Text>11111111111</Text>
      </View>
    )
}

export default connect(({user})=>({user}))(TabTwo);