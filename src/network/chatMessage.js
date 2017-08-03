import wsMessage from './WSMessage'
export default class chatMessage extends wsMessage {

	userName: String;
	token: String;

	constructor(host , port , userName , token)
	{
		super(host , port);

		this.userName = userName;
		this.token    = token;

        this.ws.onmessage = this.onMessage;
        this.ws.onopen = this.onOpen;
        this.ws.onclose = this.onClose;
    }



    onMessage = (e) => {
		console.log('has msg coming:');
		console.log(e)
    };

    onOpen = () => {
		console.log('chatMessage open,send token for:' + this.userName);
		this.sendLoginToken(this.userName , this.token)
    };

    onClose = () => {

    };


    render() {

    }

}