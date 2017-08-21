//This file gives an example for creating a component
import React from 'react'
import {Text} from 'react-native'
import * as style from '../style'
import {Icon} from 'react-native-elements'
import {Header,Right,Body,Left,Button} from 'native-base'
class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('props',this.props)
        return (
            <Header style={{borderBottomWidth:0,backgroundColor:style.page.header_bg_color}}
            >
                <Left>
                    <Button onPress={()=>{this.props.pop()}} transparent>
                    <Icon name="angle-left" type="font-awesome" color={style.page.header_ft_color}
                          />
                    </Button>
                </Left>
                <Body>
                <Text style={{color:style.page.header_ft_color,fontSize:style.page.header_title_size}}>
                {(this.props.title!=null&&this.props.title!=''&&this.props.title!=undefined)?this.props.title:this.props.name}
                </Text>
                </Body>
                <Right>
                    <Button transparent onPress={this.props.onPressRight}>
                    {this.props.right}
                    </Button>
                </Right>
            </Header>)
    }
};
class Pure extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header style={{borderBottomWidth:0,backgroundColor:style.page.header_bg_color}}
            >
                <Left>
                    {this.props.left}
                </Left>
                <Body>
                {this.props.center}
                </Body>
                <Right>
                    {this.props.right}
                </Right>
            </Header>)
    }
};
export default {Nav}