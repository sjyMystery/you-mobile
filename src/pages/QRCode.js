//This file gives an example for creating a page
import {Page} from '../Component'
import React from 'react'
import {bindActionCreators} from 'redux'
import {View} from 'react-native'
import {Header,QRPlayer} from '../Component'
import * as Actions from '../Actions'
import * as net from '../network'
import * as style from '../style'

myPage = class QRCode extends React.Component {

    qrplayer :Object;
    timer: Object;

    onPop=()=>{
        clearInterval(this.timer);
        this.props.pop()
    };
    componentWillMount = () => {
        this.props.get_qr_token()
            .then(
                (data) => {
                    console.log(11);
                    this.timer = setInterval(
                        this.props.get_qr_token,
                        1000 * 60 * 5
                    )
                },
                () => {
                }
            )
    };
    componentWillUnMount=()=>{
        clearInterval(this.timer)
    };

    render() {
        return (<View style={{justifyContent:'flex-start',flex:1}}>
            <Header.Nav
                        pop={()=>this.onPop()}
                        title="二维码"
                        style={{flex:0}}
                        />
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:style.device.width*3/4,justifyContent:'center',alignItems:'center',height:style.device.width*5/6,backgroundColor:style.page.ftcolor}}>
            <QRPlayer data={this.props.qr_token}
                      size={style.device.width*2/3}
            />
                </View>
            </View>
        </View>)
    }

};
selectProps = (state) => {
    return {
        qr_token:state.contact.qr_token
    }
};
selectActions = (dispatch) => {
    return bindActionCreators({
        pop:Actions.pop,
        handle_error:Actions.output_error,
        get_qr_token:Actions.contact.getContactQRCode
    }, dispatch)
};

export default Page.Pure(selectProps, selectActions, myPage)