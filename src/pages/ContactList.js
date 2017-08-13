import React from 'react'

import View from 'react-native'
import FriendCell from '../Component/FriendCell.js'

import {List , ListItem , Grid , Row} from 'react-native-elements'
import {connect} from 'react-redux'
const list = [
	{
		name : 'Amy Farha' ,
		avatar_url : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' ,
		subtitle : 'Vice President'
	} ,
	{
		name : 'Chris Jackson' ,
		avatar_url : 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' ,
		subtitle : 'Vice Chairman'
	}
];

class ContactList extends React.Component {
	constructor(props)
	{
		super(props);

    }

    componentWillMount() {

	}
    render()
    {
        var list = this.props.list;
        if (typeof list.map === 'function') {

            return <List containerStyle={{marginBottom: 20}}>
                {
                    list.map((l, i) => (
						<ListItem
							roundAvatar
							avatar={{uri: l.avatar_url}}
							key={i}
							title={l.name}
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

mapStateToProps = (state) => {
    return {
        list: state.contact.list
    }
};

export default connect(mapStateToProps)(ContactList)