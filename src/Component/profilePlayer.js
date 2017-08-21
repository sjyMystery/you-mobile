//This file gives an example for creating a component
import React from 'react'
import {View, Text} from 'react-native'
import {List, ListItem,Avatar} from 'react-native-elements'
import * as style from '../style'
import * as Actions from '../Actions'

myComponent = class ProfileEditor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <List containerStyle={{backgroundColor: style.page.bgColor, borderTopWidth: 0,}}>

                <ListItem
                    chevronColor={style.page.opcolor}
                    key={0}
                    title={"头像"}
                    containerStyle={{borderBottomColor: style.page.ftcolor,marginBottom:80,backgroundColor:style.page.ftcolor,height:100}}
                    underlayColor={style.page.onitemcolor}
                    onSwitch={() => console.log('test')}
                    onPress={() => console.log('test')}
                    titleContainerStyle={{marginTop:10}}
                    rightIcon={<Avatar rounded large/>}
                />
                <ListItem
                    chevronColor={style.page.opcolor}
                    key={1}
                    title="姓名"
                    containerStyle={{borderBottomColor: style.page.ftcolor,backgroundColor:style.page.ftcolor}}
                    underlayColor={style.page.onitemcolor}
                    subtitle={this.props.profile.home.name}
                    onSwitch={() => console.log('test')}
                    onPress={() => this.props.edit('name','姓名',this.props.profile.home.name)}
                />
                <ListItem
                    chevronColor={style.page.opcolor}
                    key={2}
                    title="手机号"
                    containerStyle={{borderBottomColor: style.page.ftcolor,backgroundColor:style.page.ftcolor}}
                    underlayColor={style.page.onitemcolor}
                    subtitle={this.props.profile.home.mobile}
                    onSwitch={() => console.log('test')}
                    onPress={() => this.props.edit('mobile','手机号',this.props.profile.home.mobile,'phone')}
                />
                <ListItem
                    chevronColor={style.page.opcolor}
                    key={3}
                    title="性别"
                    containerStyle={{borderBottomColor: style.page.ftcolor,backgroundColor:style.page.ftcolor}}
                    underlayColor={style.page.onitemcolor}
                    subtitle={(this.props.profile.home.gender)?'男':'女'}
                    onSwitch={() => console.log('test')}
                    onPress={() => this.props.edit('gender','性别',this.props.profile.home.gender,'gender')}
                />
                <ListItem
                    chevronColor={style.page.opcolor}
                    key={4}
                    title="二维码"
                    rightIcon={{name: 'qrcode', type:'font-awesome'}}
                    containerStyle={{borderBottomColor: style.page.ftcolor,backgroundColor:style.page.ftcolor,marginTop:40}}
                    underlayColor={style.page.onitemcolor}
                    onSwitch={() => console.log('test')}
                    onPress={() => console.log('test')}
                />
            </List>
        )
    }
};
export default myComponent