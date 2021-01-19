import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtSearchBar } from 'taro-ui'
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import { connect } from 'react-redux'

class TabOne extends Component {
  state = {
    value: ''
  }
  componentDidMount() {
    this.props.dispatch({ type: "user/getList" })
  }
  onChange(value) {
    this.setState({
      value: value
    })
  }
  render() {
    const { user: { sourceList } } = this.props
    return (
      <View>
        <AtSearchBar
          value={this.state.value}
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