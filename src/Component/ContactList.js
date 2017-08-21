import React from 'react'
import ContactCell from './ContactCell'

import {List} from 'react-native-elements'
import * as style from '../style'

class ContactList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {
        var list = this.props.list;
        if (typeof list.map === 'function') {

            return <List containerStyle={{backgroundColor: style.page.ftcolor, borderTopWidth: 0,}}>
                {
                    list.map((l, i) => (
                        <ContactCell
                            key={i}
                            contact={l}
                            open={this.props.openChat}
                        />
                    ))
                }
            </List>
        }
        else {
            return <List containerStyle={{marginBottom: 20}}></List>
        }
    }
}

export default ContactList