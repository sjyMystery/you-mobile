import * as STATE from './state.js'
import * as Actions from '../Actions'

const initialContactState = {
    list: {}
};
const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

const updateList = (state, list) => {
    return assign(state, {list: list})
};

const contactReducer = (state = initialContactState, action) => {
    switch (action.type) {
        case Actions.UPDATE_CONTACT_LIST: {
            return updateList(state, action.list)
        }
        case Actions.OPEN_CHAT: {
            return state
        }
        case Actions.GET_QRCODE:{
            return assign(state,{qr_token:action.qr_token})
        }
        case Actions.LOG_OUT: {
            return initialContactState
        }
        default: {
            return state
        }
    }
};

export default contactReducer