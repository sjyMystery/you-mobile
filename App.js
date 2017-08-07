import React from 'react';
import * as actions from './src/Actions'
import {Provider} from 'react-redux'
import {ReduxRouter , navigator} from './src/routes'
import configureStore from './src/storage'

//这个是程序的入口
//我们在这里判断是否登录
//已登录则跳转到主界面
//未登录则跳转到登录界面
export default class App extends React.Component {

	store: Object;

    constructor(props) {
        super(props);
		this.store = configureStore(() =>
		{
			this.store.dispatch(actions.entry())
		})
    }

    render() {
        return (
			<Provider store={this.store}>
				<ReduxRouter navigator={navigator}/>
            </Provider>
        )
    }
}
