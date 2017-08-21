import React from 'react';
import {ContactList} from '../Component'
import * as Actions from '../Actions'
import {bindActionCreators} from 'redux'
import {Page} from '../Component'

class Contacts extends React.Component {
    render() {
        return <ContactList openChat={this.props.openChat} list={this.props.list}/>
    }
}

selectActions = (dispatch) => {
    return bindActionCreators({openChat: Actions.contact.openChat}, dispatch)
};
selectProps = (state) => {
    return {
        list: state.contact.list
    }
};

export default Page.WithHeaderNav(selectProps, selectActions,Contacts);