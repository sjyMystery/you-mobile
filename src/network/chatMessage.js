import wsMessage from 'WSMessage';


import user_info_storage from '../storage/userInfoStore';

export default class chatMessage extends wsMessage {


    constructor(props) {
        super(props);


        this.ws.onmessage = this.onMessage;
        this.ws.onopen = this.onOpen;
        this.ws.onclose = this.onClose;
    }

    sendLoginToken = () => {

    };

    onMessage = (e) => {

    };

    onOpen = () => {
        this.sendMessage()
    };

    onClose = () => {

    };


    render() {

    }

}