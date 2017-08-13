import * as TYPES from './types'
import * as Route from '../routes'

export const submit = (connection , msg) =>
{
	connection.sendChatMessage(msg);
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

export const convert = (session) => {
    return {
        message: TYPES.CONVERT_SESSION,
        session: session
    }
};