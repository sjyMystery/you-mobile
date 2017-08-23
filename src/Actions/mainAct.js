import * as TYPES from './types'
import * as Route from '../routes'
import {Alert} from 'react-native'
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
export const to_contacts = () => {
	return dispatch =>
	{
        Route.Push(Route.CONTACTS);
		return dispatch({
            type: TYPES.TO_CONTACTS
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

export const to_qrscanner = () => {
    return dispatch => {
    	console.log('test')
        Route.Push(Route.QRSCANNER);
        return dispatch({type: TYPES.TO_QRSCANNER})
    }
};

export const to_profile = () => {
    return dispatch => {
        Route.Push(Route.PROFILE);
        return dispatch({type: TYPES.TO_PROFILE})
    }
};

export const to_profile_edit = (item,name,value='',type='text') =>{
	return dispatch=>{
		Route.Push(Route.PROFILE_EDIT,{item:item,item_name:name,value:value,type:type})
		return dispatch({type:TYPES.TO_PROFILE_EDIT})
	}
}
export const to_qrcode = () =>{
	return dispatch=>{
		Route.Push(Route.QRCODE)
		return dispatch({type:TYPES.TO_QRCODE})
	}
}
export const to_webpage_url = (url)=>{
	return dispatch=>{
		Route.Push(Route.WEB_PAGE,{url:url})
		return dispatch({type:TYPES.TO_WEBPAGE})
	}
}
export const to_webpage_html =(html)=>{
	return dispatch=>{
		Route.Push(Route.WEB_PAGE,{html:html})
		return dispatch({type:TYPES.TO_WEBPAGE})
	}
}
export const pop =()=> {
	return dispatch=>{
		Route.Pop()
		return dispatch({type:TYPES.ROUTE_POP})
	}
}

export const output_error = data => {
	return dispatch=> {
        Alert.alert(JSON.stringify(data))
		return dispatch({type:TYPES.OUTPUT_ERROR})
    }
}
