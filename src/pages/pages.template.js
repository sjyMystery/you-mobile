//This file gives an example for creating a page
import {Page} from '../Component'
import React from 'react'
import {bindActionCreators} from 'redux'
import View from 'react-native'

myPage = class Template extends React.Component {
    render() {
        return <View></View>
    }

};
selectProps = (state) => {
    return {}
};
selectActions = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

export default Page(selectProps, selectActions, myPage)