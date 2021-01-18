import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import { connect } from 'react-redux'

const TabOne = (props) => {
  const {user:{sourceList,page,pageSize}} = props
  useEffect(() => {
    props.dispatch({
      type: "user/getList",
      payload: {
        page: page,
        pageSize: pageSize
      }
    })
  })
  return (
    <View>
      <AtList>
        {sourceList.map(itm=>{
          return(
            <AtListItem
              key={itm.id}
              title={itm.title}
              note={itm.note}
              arrow='right'
              extraText={itm.extraText}
              iconInfo={{ size: 25, color: '#78A4FA', value: itm.icon, }}
            />
          )
        })}
      </AtList>
    </View>
  )
}

export default connect(({ user }) => ({ user }))(TabOne);