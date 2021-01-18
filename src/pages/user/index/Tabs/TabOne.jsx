import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import { connect } from 'react-redux'

class TabOne extends Component {
  componentDidMount() {
    this.props.dispatch({type: "user/getList"})
  }
  render() {
    const { user: { sourceList } } = this.props
    return (
      <View>
        <AtList>
          {sourceList.map(itm => {
            return (
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

}

export default connect(({ user }) => ({ user }))(TabOne);