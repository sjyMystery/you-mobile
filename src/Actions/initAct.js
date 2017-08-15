import * as TYPES from './types'
import * as network from '../network'

import * as contact from './contactAct'
import * as profile from './profileAct'

import {bindActionCreators} from 'redux'
import * as msg from './messageAct'

export const entry = () =>
{
	return (dispatch) => dispatch({type : TYPES.ENTRY})
};

export const init = (userName, token) =>
{
	return (dispatch) =>
	{
        return new Promise((resolve, reject = error => console.log('init failed err:', error)) => {
            let connection = new network.chatMessage("incidence.cn", 9923, userName, token, bindActionCreators(msg.push, dispatch));
            network.contact.getlist().then(data => {
                console.log('get contact', data);
                dispatch(contact.updateList(data));
                network.profile.get().then(data => {
                    console.log('get profile', data);
                    dispatch(profile.updateHome(data));
                    dispatch({
                        type: TYPES.INIT,
                        success: true,
                        connection: connection
                    }, data => reject(data));
                    resolve()
                }, data => reject(data))
            }, data => reject(data));
        })
	}
};

export const load = () =>
{
	return (dispatch) =>
	{
		console.log("load");
		return dispatch({type : TYPES.LOAD})
	}
};

