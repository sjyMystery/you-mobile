//import { QRScannerView } from 'ac-qrcode';
import React from 'react'
import View from 'react-native'

export default class QRScreen extends React.Component {
    render() {
        /*        return (

                    < QRScannerView
                        onScanResultReceived={this.barcodeReceived.bind(this)}

                        renderTopBarView={() => this._renderTitleBar()}

                        renderBottomMenuView={() => this._renderMenu()}
                    />
                )*/
        return <View/>
    }

    _renderTitleBar() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >Here is title bar</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >Here is bottom menu</Text>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}