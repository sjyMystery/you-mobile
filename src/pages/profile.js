//This file gives an example for creating a page
import {Page} from '../Component'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import View from 'react-native'
import {ProfilePlayer} from '../Component'

myPage = class Profile extends React.Component {
    render() {
        return <ProfilePlayer profile={this.props.profile}/>
    }

};
selectProps = (state) => {
    return {
        profile: state.profile
    }
};
selectActions = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

export default Page(selectProps, selectActions, myPage)