//This file gives an example for creating a component
//This file gives an example for creating a component
import React from 'react'
import {WebView,View} from 'react-native'
myComponent = class mWebView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
            var source
            if(this.props.html===null||this.props.html===undefined)
            {
                source={url:this.props.url}
            }
            else {

                source={html:this.props.html}
            }
        return(<WebView source={source}
                        style={{height: 300, backgroundColor: 'white'}}
                        scalesPageToFit={true}/>)
    }
};
export default myComponent