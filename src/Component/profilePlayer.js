//This file gives an example for creating a component
import React from 'react'
import {View, Text} from 'react-native'
import {List, ListItem} from 'react-native-elements'
import * as style from '../style'

myComponent = class ProfileEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.profile);
        const list = [
            {
                title: '头像',
                content: this.props.profile.home.name
            },
            {
                title: '姓名',
            },
            {
                title: '手机号',
            },
            {
                title: '性别',
            },
            {
                title: '二维码',
                icon: 'qrcode',
                icon_type: 'font-awesome'
            }
        ];
        return (
            <List containerStyle={{backgroundColor: style.page.ftcolor, borderTopWidth: 0,}}>
                {
                    list.map((item, i) => (
                        <ListItem
                            chevronColor={style.page.opcolor}
                            key={i}
                            title={item.title}
                            textInput={true}
                            textInputEditable={true}
                            rightIcon={{name: item.icon, type: item.icon_type}}
                            containerStyle={{borderBottomColor: style.page.ftcolor}}
                            underlayColor={style.page.onitemcolor}
                            subtitle={item.content}
                            switchButton={true}
                            onSwitch={() => console.log('test')}
                            onPress={() => console.log('test')}
                        />
                    ))
                }
            </List>
        )
    }
};
export default myComponent