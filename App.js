import React from 'react';
import {Root} from './src/routes'
import * as Actions from './src/Actions'
import {Provider} from 'react-redux'
import configureStore from './src/storage'


//这个是程序的入口
//我们在这里判断是否登录
//已登录则跳转到主界面
//未登录则跳转到登录界面
export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            store: configureStore(() => {
				this.state.store.dispatch(Actions.entry())
            })
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Root store={this.state.store} dispatch={this.state.store.dispatch}/>
            </Provider>
        )
    }
}
