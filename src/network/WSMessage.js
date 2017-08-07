import React from 'react';
import * as codes from '../codes';

export default class wsMessage {

    ws: Object;

    server_url: String;

	constructor(host , port)
	{
		this.server_url = "ws://" + host + ":" + port;
		this.ws         = new WebSocket(this.server_url , 'jsonrpc')

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

	pullChatMessage = () =>
	{
		this.sendMessage({
			protocol : codes.protocol.PULL_MSG
		})
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
			username : username ,
			token : token
		})
	};


    render() {

    }

}