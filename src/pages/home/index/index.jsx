import React from 'react'
import { View } from '@tarojs/components'
import { AtGrid ,AtNoticebar} from 'taro-ui'
import { connect } from 'react-redux'
import "taro-ui/dist/style/components/grid.scss" // 按需引入
import "taro-ui/dist/style/components/noticebar.scss" // 按需引入
import './index.scss'
import SwiperCompanent from './Swiper'

const Home = (props) => {
  const {index:{data}} = props
  return (
    <View>
      <SwiperCompanent />
      <AtNoticebar marquee>欢迎来到首页</AtNoticebar>
      <AtGrid data={data} />
    </View>
  )
}

export default connect(({ index, loading }) => ({ index, loading }))(Home);