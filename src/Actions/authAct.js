import * as TYPES from './types'
import * as codes from '../codes'
import {auth} from '../network'
import {to_login} from "./mainAct";

export const login_failed       = (error,msg='') =>{
    return {
        type: TYPES.LOG_IN,
        success: 0,
		error : error ,
		msg : msg
    }
};
export const login_success      =(username,token) =>{
    return {
        type: TYPES.LOG_IN,
        success: 1,
        username:username,
        token:token
    }
};
export const http_login_failed  = (error , msg = '') =>
{
	return {
		type : TYPES.HTTP_LOG_IN ,
		success : 0 ,
		error : error ,
		msg : msg
	}
};
export const http_login_success = () =>
{
	console.log('http login!');
	return {
		type : TYPES.HTTP_LOG_IN ,
		success : 1
	}
};
export const http_login         = (username , token) =>
{
	return (dispatch) =>
	{
		var p = new Promise((resolve , reject) =>
			{
                auth.http_login(username, token).then(data =>
				{
                    resolve(data);
                    dispatch(http_login_success())
                }, (error) => {
                    dispatch(http_login_failed(error));
                    reject(error)
                })
			}
		);
		return p;
	}
};
export const login              = (username,password) => {

    return (dispatch) => {
        var p = new Promise((resolve, reject) => {
                auth.login(username, password).then((data) => {
                    resolve(data);
                    dispatch(login_success(username,data.token))
                }, (error) => {
                    dispatch(login_failed(error));
                    reject(error)
                })
            }
        );
        return p;
    }

};
export const logout = ()=>{
    return (dispatch)=>{
        dispatch({type: TYPES.LOG_OUT});
        dispatch(to_login())
    }
};