import React, { Component } from 'react'
import { AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import Taro from '@tarojs/taro'


class Tabbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    componentDidMount () { }

    componentDidShow () { }

    componentDidHide () { }

    componentDidCatchError () { }

    handleAtTabBarClick = (data) => {
        this.setState({
            current: data
        })
        switch (data) {
            case 0:
                Taro.navigateTo({
                    url: '/pages/home/index/index'
                })
                break
            case 1:
                Taro.navigateTo({
                    url: '/pages/user/index/index'
                })
                break
            default:
                Taro.navigateTo({
                    url: '/pages/home/index/index'
                })
        }
    }

    // this.props.children 就是要渲染的页面
    render () {
        return (
                <AtTabBar
                    current={this.state.current}
                    fixed
                    onClick={this.handleAtTabBarClick}
                    tabList={[
                        { title: '首页', iconType: 'bullet-list', text: 'new' },
                        { title: '用户', iconType: 'user' }
                    ]}
                />
        )
    }
}

export default Tabbar