import * as TYPES from './types'
import {chatMessage} from '../network'

export const entry = () =>
{
	return (dispatch) => dispatch({type : TYPES.ENTRY})
};

export const init = (userName , token , pushMessage) =>
{
	return (dispatch) =>
	{
		let connection = new chatMessage("incidence.cn" , 9923 , userName , token , pushMessage);
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

