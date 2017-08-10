import React from 'react'

import View from 'react-native'
import FriendCell from '../Component/FriendCell.js'

import {List , ListItem , Grid , Row} from 'react-native-elements'

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

export default class ContactList extends React.Component{
    constructor(props){
        super(props)

    }
    render()
    {
		return <List containerStyle={{marginBottom : 20}}>
			{
				list.map((l , i) => (
					<ListItem
						roundAvatar
						avatar={{uri : l.avatar_url}}
						key={i}
						title={l.name}
					/>
				))
			}
		</List>
    }
}