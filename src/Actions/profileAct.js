import * as TYPES from './types'

export const updateHome = (profile) => {
    return dispatch => {
        dispatch({type: TYPES.UPDATE_HOME_PROFILE, profile: profile})
    }
};