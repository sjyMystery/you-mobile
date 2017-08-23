import * as TYPES from './types'
import * as net from '../network'
export const updateHome = (profile) => {
    return dispatch => {
        dispatch({type: TYPES.UPDATE_HOME_PROFILE, profile: profile})
    }
};

export const editProfile = (item,value) =>{
    return dispatch=>{
        let p =new Promise((resolve,reject)=>{
            net.profile.edit(item,value).then(
                (data)=>{
                    resolve(data)
                    dispatch({type:TYPES.EDIT_PROFILE,item:item,value:value})
                },
                reject
            )
        })
        return p
    }
}

