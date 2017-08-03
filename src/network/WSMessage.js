import React from 'react';
import * as codes from '../codes';

export default class wsMessage {

    ws: Object;

    server_url: String;

	constructor(host , port)
	{
		this.server_url = "ws://" + host + ":" + port;
        console.log('create a Websocket to server:' + this.server_url);
		this.ws = new Websocket(this.server_url , 'jsonrpc')

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

	sendChatMessage = (msg) =>
	{
		this.sendMessage({
			protocol : codes.protocol.SEND_MSG ,
			message : msg ,
			remote : ''
		})
	};

	sendLoginToken = (username , token) =>
	{
		this.sendMessage({
			protocol : codes.protocol.CHECK_IN ,
			username : userName ,
			token : token
		})
	};


    render() {

    }

}