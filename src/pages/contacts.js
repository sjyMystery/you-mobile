import React from 'react';
import {ContactList} from '../Component'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

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

export default connect(selectProps, selectActions)(Contacts);