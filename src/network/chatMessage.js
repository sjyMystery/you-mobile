import wsMessage from './WSMessage'
import * as codes from '../codes'
export default class chatMessage extends wsMessage {

	userName: String;
	token: String;
	pushMessage: Object;
	pullMessage: Object;

	constructor(host , port , userName , token , pushMessage)
	{
		super(host , port);
		this.pushMessage  = pushMessage;
		this.userName     = userName;
		this.token        = token;
        this.ws.onmessage = this.onMessage;
        this.ws.onopen    = this.onOpen;
        this.ws.onclose   = this.onClose;
    }



    onMessage = (e) => {
		console.log('has msg coming:' , e.data);
		data = JSON.parse(e.data);
		switch(data.protocol)
		{
			case codes.protocol.CHECK_IN_R:
			{
				if(data.status == 1)
				{
					this.pullChatMessage();
				}
				else
				{

				}
				break;
			}
			case codes.protocol.PUSH_MSG:
			{
				console.log('we are pushed msg:' , data.message);
                if (data.message == [])
                    break;
				this.pushMessage(data.message);
				var message_list = [];
				for(var key in data.message)
				{
					message_list[key] = data.message[key].id
				}
				this.sendReciveMessage(message_list);
				break;
			}
			case codes.protocol.PULL_MSG_R:
			{
				this.pushMessage(data.message);
                if (data.message == [])
                    break;
				var message_list = [];
				for(var key in data.message)
				{
					message_list[key] = data.message[key].id
				}
				this.sendReciveMessage(message_list);
				break;
			}
            case codes.protocol.SEND_MSG_R: {
                console.log('send msg returned:', data)
            }
		}
    };

    onOpen = () => {
		console.log('chatMessage open,send token for:' + this.userName);
		this.sendLoginToken(this.userName , this.token)
    };

    onClose = () => {
        console.log('on close called')
    };

    close = () => {
        try {
            this.ws.close();
            console.log("close")
        }
        catch (e) {
            console.log(e)
        }
    };


    render() {

    }

}