import React from 'react'

import View from 'react-native'
import FriendCell from '../Component/FriendCell.js'
import HelloWorld from "react-native/local-cli/templates/HelloWorld/index.ios";

export default class ContactList extends React.Component{
    constructor(props){
        super(props)

    }

    render()
    {
        var v = (<View>
            <FriendCell friend_name='联系人1'/>
            <FriendCell friend_name='联系人2'/>
        </View>);
        return <HelloWorld/>
    }
}