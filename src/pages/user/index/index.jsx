import React, { useState, forwardRef } from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss";
import { connect } from 'react-redux'
import TabOne from './Tabs/TabOne'
import TabTwo from './Tabs/TabTwo'
import TabThree from './Tabs/TabThree'
import './index.scss'

const Users = () => {
  const [current, setCurrent] = useState(0)
  const tabList = [{ title: '商品列表' }, { title: 'form表单' }, { title: '我的' }]
  const handleClick = (value) => {
    setCurrent(value)
  }
  return (
    <AtTabs current={current} tabList={tabList} onClick={handleClick.bind(this)}>
      <AtTabsPane current={current} index={0} >
        <TabOne />
      </AtTabsPane>
      <AtTabsPane current={current} index={1}>
        <TabTwo />
      </AtTabsPane>
      <AtTabsPane current={current} index={2}>
        <TabThree />
      </AtTabsPane>
    </AtTabs>
  )
}
const UserConnect = connect(({ user }) => ({ user }))(Users)
export default forwardRef((props, ref) => <UserConnect {...props} refInstance={ref} />);