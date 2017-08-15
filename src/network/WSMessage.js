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
        console.log('sending:', data);
        this.ws.send(buff)
    };

	pullChatMessage = () =>
	{
		this.sendMessage({
			protocol : codes.protocol.PULL_MSG
		})
	};

    sendChatMessage = (msg, session_id) =>
	{
		this.sendMessage({
			protocol : codes.protocol.SEND_MSG ,
			message : msg ,
            remote: session_id
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

	sendReciveMessage = (message) =>
	{
		this.sendMessage({
			protocol : codes.protocol.RECIVE_MSG ,
			message : message
		})
	};




    render() {

    }

}