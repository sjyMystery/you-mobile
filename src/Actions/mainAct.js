import * as TYPES from './types'
import * as Route from '../routes'

export const to_chatroom    = () =>
{
	return dispatch =>
	{
		Route.Push(Route.CHATROOM);
		return dispatch({type : TYPES.TO_CHATROOM})
    }
};
export const to_home        = () =>
{
	return dispatch =>
	{
		Route.Go(Route.HOME);
		return dispatch({type : TYPES.TO_HOME})
    }

};
export const to_contactlist = () => {
	return dispatch =>
	{
		Route.Push(Route.CONTACT_LIST);
		return dispatch({
			type : TYPES.TO_CONTACTLIST
		})
    }
};

export const to_login =()=>{

	return (dispatch) =>
	{
		Route.Go(Route.LOGIN);
		return dispatch({type : TYPES.TO_LOGIN})
    }
};


