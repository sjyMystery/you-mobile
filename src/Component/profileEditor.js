//This file gives an example for creating a component
import React from 'react'
import {View, Text} from 'react-native'
import {Item, Input, Label} from 'native-base'

myComponent = class ProfileEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (<View>

            <Item floatingLabel>
                <Label>姓名</Label>
                <Input/>
            </Item>
            <Item floatingLabel>
                <Label>手机号</Label>
                <Input/>
            </Item>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input/>
            </Item>
        </View>)
    }
};
export default myComponent