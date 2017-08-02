import * as TYPES from './types'
import * as Route from '../routes'


export const to_chatroom = () => {
    Route.Push(Route.CHATROOM);
    return {
        type: TYPES.TO_CHATROOM
    }
};
export const to_home = () => {
    Route.Go(Route.HOME);
    return {
        type: TYPES.TO_HOME
    }
};
export const to_contactlist = () => {
    Route.Push(Route.CONTACT_LIST);
    return {
        type: TYPES.TO_CONTACTLIST
    }
};

export const to_login =()=>{
    Route.Push(Route.LOGIN)
    return {
        type: TYPES.TO_LOGIN
    }
};
