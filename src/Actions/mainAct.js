import * as TYPES from './types'
import * as Route from '../routes'


export const login = () => {
    Route.Go(Route.LOGIN);
    return {
        type: TYPES.LOG_IN
    }
};
export const to_chatroom = () => {
    Route.Go(Route.CHATROOM);
    return {
        type: TYPES.TO_CHATROOM
    }
};
