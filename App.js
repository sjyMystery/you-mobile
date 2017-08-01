import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Icon, Button, Right, Left, Body, Title, Drawer, Text, View, Container} from 'native-base';

import Main from './src/pages/main.js'


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
            isLoading: true,
            store: configureStore(() => {
                this.setState({isLoading: false})
            })
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Main/>
            </Provider>
        )
    }
}

const styles = StyleSheet.create(
);
