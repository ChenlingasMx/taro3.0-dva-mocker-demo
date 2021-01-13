import React, {useState} from 'react'
import { AtTabs, AtTabsPane } from 'taro-ui'
import "taro-ui/dist/style/components/tabs.scss";
import {connect} from 'react-redux'
import TabOne from './Tabs/TabOne'
import TabTwo from './Tabs/TabTwo'
import TabThree from './Tabs/TabThree'
import './index.scss'

const Users = () => {
  const [ current,setCurrent] = useState(0)
  const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
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

export default connect(({index})=>({index}))(Users);