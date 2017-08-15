import * as TYPES from './types'
import * as Route from '../routes'

export const submit = (connection, msg, session_id) => {
    connection.sendChatMessage(msg, session_id);
    return {
		type : TYPES.SUBMIT_MSG ,
		message : msg
	}
};
export const push   = (msg) =>
{
	return {
		type : TYPES.PUSH_MSG ,
		message : msg
	}
};

export const convert = (session_id) => {
    return {
        type: TYPES.CONVERT_SESSION,
        session_id: session_id
    }
};