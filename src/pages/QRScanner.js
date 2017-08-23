import React from 'react'
import {QRScreen,Page} from '../Component'
import {bindActionCreators} from 'redux'
import {scanQRCode,pop} from '../Actions'
class QRScanner extends React.Component {
    render = () => {
        return <QRScreen {...this.props}/>
    }

    constructor() {
        super()
    }
}
selectProps = (state) => {
    return {}
};
selectActions = (dispatch) => {
    return bindActionCreators({submit:scanQRCode,back:pop}, dispatch)
};


export default Page.Pure(selectProps,selectActions,QRScanner);