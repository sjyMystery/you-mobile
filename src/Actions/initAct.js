import * as TYPES from './types'
import * as network from '../network'

import * as contact from './contactAct'
import * as profile from './profileAct'

export const entry = () =>
{
	return (dispatch) => dispatch({type : TYPES.ENTRY})
};

export const init = (userName , token , pushMessage) =>
{
	return (dispatch) =>
	{
        let connection = new network.chatMessage("incidence.cn", 9923, userName, token, pushMessage);
        network.contact.getlist().then(data => {
            console.log('get contact', data);
            dispatch(contact.updateList(data))
        }, data => {
        });
        network.profile.get().then(data => {
            console.log('get profile', data);
            dispatch(profile.updateHome(data))
        }, data => {

        });
		return dispatch({
			type : TYPES.INIT ,
			success : true ,
			connection : connection
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

