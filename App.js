import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Icon, Button, Right, Left, Body, Title, Drawer, Text, View, Container} from 'native-base';

import Main from './src/pages/main.js'


import {Router, Scene} from "react-native-router-flux";


//这个是程序的入口
//我们在这里判断是否登录
//已登录则跳转到主界面
//未登录则跳转到登录界面
export default class App extends React.Component {


    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Main/>)
    }
}

const styles = StyleSheet.create(
);
