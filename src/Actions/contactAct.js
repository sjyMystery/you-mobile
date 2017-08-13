import * as TYPES from './types'

export const updateList = (list) => {
    return dispatch => {
        dispatch({type: TYPES.UPDATE_CONTACT_LIST, list: list})
    }
};