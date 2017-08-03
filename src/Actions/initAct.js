import * as TYPES from './types'
import {chatMessage} from '../network'

export const entry = () =>
{
	return {
		types : TYPE.ENTRY
	}
};

export const init = () =>
{
	return (dispatch) =>
	{
		let connection = new chatMessage("incidence.cn" , 9924);
		return dispatch({
			types : TYPES.INIT ,
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

