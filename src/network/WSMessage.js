import React from 'react';

export default class wsMessage {

    ws: Object;

    server_url: String;

    constructor(ip, port) {
        this.server_url = "ws://" + ip + ":" + port;
        console.log('create a Websocket to server:' + this.server_url);
        this.ws = new Websocket(this.props.server, 'jsonrpc')

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