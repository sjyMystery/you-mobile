//这个页面是初始化界面，打开应用就看到他了

import React from 'react';
import {Font, AppLoading} from 'expo';
import HelloWorld from "react-native/local-cli/templates/HelloWorld/index.ios";

export default class Init extends React.Component {


    render() {

        return (
            <HelloWorld/>
        );
    }
}
