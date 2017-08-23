//This file gives an example for creating a page
import {Page} from '../Component'
import React from 'react'
import {bindActionCreators} from 'redux'
import View from 'react-native'
import { Constants, WebBrowser } from 'expo'
import {WebView} from '../Component'
myPage = class WebPage extends React.Component {
    render() {
        console.log('render')
        return <WebView {...this.props}/>
    }

};
selectProps = (state) => {
    return {}
};
selectActions = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

export default Page.WithHeaderNav(selectProps, selectActions, myPage)