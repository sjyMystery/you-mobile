import React from 'react'

import View from 'react-native'
import FriendCell from '../Component/FriendCell.js'

export default class ContactList extends React.Component{
    constructor(props){
        super(props)

    }

    render()
    {
        return (
            <View>
                <FriendCell friend_name ='联系人1' />
                <FriendCell friend_name ='联系人2' />
            </View>
        )
    }
}