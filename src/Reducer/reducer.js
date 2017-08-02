import * as ACTION from '../Actions/types';
import * as STATE from './state';

const initialSate = {
    status: STATE.INIT,
    success: false

};

const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

Reducer = (state = initialSate, action) => {
    switch (action.type) {
        case ACTION.LOG_IN: {
            return assign(state, {
                status: STATE.LOGIN,
                success: false
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

export default Reducer