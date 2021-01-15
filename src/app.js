import React, { Component } from 'react'
import { Provider } from 'react-redux'
import dva from './dva';
import models from './models';
import Tabbar from './component/Tabbar'
//import './app.scss'
const dvaApp = dva.createApp({
    initialState: {},
    models,
});

const store = dvaApp.getStore();
class App extends Component {

    componentDidMount() { }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    // this.props.children 是将要会渲染的页面

    render() {
        return (
            <Provider store={store}>
                {this.props.children}
                <Tabbar />
            </Provider>
        )
    }
}
export default App