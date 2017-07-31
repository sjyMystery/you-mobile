import React from 'react';

export default class wsMessage extends React.Component {

    ws: Object;

    constructor(props) {
        super(props);

        this.ws = new Websocket(this.props.server, 'jsonrpc');
    }

    sendMessage = (params) => {
        var data = {
            'method': '/',
            'params': params,
            'id': 1
        };
        var buff = JSON.stringify(data);
        this.ws.send(buff)
    };


    render() {

    }

}