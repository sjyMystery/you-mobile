import * as TYPES from './types'
import * as codes from '../codes'
import {auth} from '../network'

export const login_failed       = (error,msg='') =>{
    console.log('login failed! with error:'+error+'msg:'+msg);
    return {
        type: TYPES.LOG_IN,
        success: 0,
		error : error ,
		msg : msg
    }
};
export const login_success      =(username,token) =>{

    console.log('login! with name:'+username+' token:'+token);
    //这个地方就登录成功了，处理TOKEN并存下来
    return {
        type: TYPES.LOG_IN,
        success: 1,
        username:username,
        token:token
    }
};
export const http_login_failed  = (error , msg = '') =>
{
	console.log('http login failed! with error:' + error + 'msg:' + msg);
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
				failed  = (error , msg) =>
				{
					dispatch(http_login_failed(error , msg));
					reject()
				};
				success = () =>
				{
					dispatch(http_login_success());
					resolve()
				};
				auth.http_login(username , token , success , failed)
			}
		);
		return p;
	}
};
export const login              = (username,password) => {
	return (dispatch) =>
	{
		//测试帐号
		//username = '348831271@qq.com';
		//password = 'sujiayi970804';
		var p = new Promise((resolve , reject) =>
		{
			failed  = (data) =>
			{
				dispatch(login_failed(data.error , data.message));
				reject()
			};
			success = (data) =>
			{
				dispatch(login_success(data.username , data.token));
                resolve({username: data.username, token: data.token})
			};
			auth.login(username , password).then(success , failed)
		});
		return p
	}

};