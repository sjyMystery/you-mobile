import * as TYPES from './types'
import * as Route from '../routes'

export const submit = (chatroom, msg) => {
	chatroom.props.connection.sendChatMessage(msg);
    chatroom.pushMessage(msg);
    return {
        type: TYPES.SUBMIT_MSG
    }
};