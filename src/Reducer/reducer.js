import * as ACTION from '../Actions/types';
import * as STATE from './state';
import {combineReducers} from 'redux'
import authReducers from './authReducers'


const initialSate = {
    status: STATE.INIT,
    success: false

};

const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

mainReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ACTION.TO_LOGIN:{
            return assign(state,{
                status: STATE.LOGIN,
            })
        }
        case ACTION.LOG_OUT: {
            return assign(state, {
                status: STATE.LOGOUT,
                success: false
            })
        }
        case ACTION.TO_HOME: {
            return assign(
                state, {
                    status: STATE.HOME
                }
            )
        }
        case ACTION.TO_CHATROOM: {
            return assign(
                state, {
                    status: STATE.CHATROOM,
                    submitted: false
                }
            )
        }
        case ACTION.SUBMIT_MSG: {
            return assign(
                state, {
                    status: STATE.CHATROOM,
                    submitted: true
                }
            )
        }
        case ACTION.INIT: {
            return initialSate
        }
        default : {
            return state;
        }
    }
};

Reducer=combineReducers({mainReducer,authReducers})

export default Reducer