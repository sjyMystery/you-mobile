import React from 'react'
import {QRScreen,Page} from '../Component'
import {bindActionCreators} from 'redux'
class QRScanner extends React.Component {
    render = () => {
        return <QRScreen/>
    }

    constructor() {
        super()
    }
}
selectProps = (state) => {
    return {}
};
selectActions = (dispatch) => {
    return bindActionCreators({}, dispatch)
};


export default Page.WithHeaderNav(selectProps,selectActions,QRScanner);