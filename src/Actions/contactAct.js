import * as TYPES from './types'
import * as message from './messageAct'
import * as Route from '../routes'
export const updateList = (list) => {
    return dispatch => {
        dispatch({type: TYPES.UPDATE_CONTACT_LIST, list: list})
    }
};

export const openChat = (contact) => {

    return dispatch => {
        dispatch(message.convert(contact.pivot.session_id));
        Route.Push(Route.CHATROOM);
        dispatch({type: TYPES.OPEN_CHAT})
    }
};