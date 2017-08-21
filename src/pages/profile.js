//This file gives an example for creating a page
import {Page} from '../Component'
import React from 'react'
import {bindActionCreators} from 'redux'
import View from 'react-native'
import {ProfilePlayer} from '../Component'
import * as Actions from '../Actions'

myPage = class Profile extends React.Component {
    render() {
        return <ProfilePlayer {...this.props}/>
    }

};
selectProps = (state) => {
    return {
        profile: state.profile
    }
};
selectActions = (dispatch) => {
    return bindActionCreators({
        edit:Actions.to_profile_edit
    }, dispatch)
};

export default Page.WithHeaderNav(selectProps, selectActions, myPage)