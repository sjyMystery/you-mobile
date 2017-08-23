//This file gives an example for creating a component
import React from 'react'
import {View} from 'react-native'
import QRCode from 'react-native-qrcode'
import {KeepAwake} from 'expo'


myComponent = class qrPlayer extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        console.log(this.props.data);
        let value = JSON.stringify({type: 'add_contact', token: this.props.data});
        return (<View>
            <KeepAwake/>
            <QRCode
                value={value}
                size={this.props.size}
                bgColor='black'
                fgColor='white'/>
        </View>)
    }
};
export default myComponent