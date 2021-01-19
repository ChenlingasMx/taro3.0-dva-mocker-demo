import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtSearchBar } from 'taro-ui'
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import { connect } from 'react-redux'

class TabOne extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "user/getList" })
  }
  onChange(value) {
    this.props.dispatch({
      type:"user/updateData",
      payload:{
        searchValue:value
      }
    })
  }
  render() {
    const { user: { sourceList,searchValue } } = this.props
    return (
      <View>
        <AtSearchBar
          value={searchValue}
          onChange={this.onChange.bind(this)}
        />
        <AtList>
          {sourceList.map(itm => {
            return (
              <AtListItem
                key={itm.id}
                title={itm.title}
                note={itm.note}
                arrow='right'
                extraText={itm.extraText}
                thumb={itm.img}
              />
            )
          })}
        </AtList>
      </View>
    )
  }

}

export default connect(({ user }) => ({ user }))(TabOne);