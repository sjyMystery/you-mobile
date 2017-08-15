import React from 'react'
import {ListItem} from 'react-native-elements'

class ContactCell extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<ListItem
            roundAvatar
            avatar={{uri: this.props.contact.avatar_url}}
            title={this.props.contact.name}
            switchButton={true}
            onPress={() => this.props.open(this.props.contact)}
        />)
    }
}

export default ContactCell