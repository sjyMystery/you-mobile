import React from 'react'
import {ListItem,Avatar} from 'react-native-elements'
import * as style from '../style'
class ContactCell extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<ListItem
            roundAvatar
            avatar={<Avatar rounded large />}
            title={this.props.contact.name}
            switchButton={true}
            onPress={() => this.props.open(this.props.contact)}
            containerStyle={{height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderBottomColor:style.color.whiteGreyPro}}
            titleContainerStyle={{marginTop:0,marginLeft:50,height:100,flexDirection:'column',justifyContent:'center'}}
            titleStyle={{fontSize:style.fontSize.xmax,color:style.color.black}}
        />)
    }
}

export default ContactCell