import * as TYPES from './types'
import * as codes from '../codes'

export const login_failed = (error,msg='') =>{

    console.log('login failed! with error:'+error+'msg:'+msg);
    return {
        type: TYPES.LOG_IN,
        success: 0,
        error:error
    }
};
export const login_success =(username,token) =>{

    console.log('login! with name:'+username+' token:'+token);
    //这个地方就登录成功了，处理TOKEN并存下来
    return {
        type: TYPES.LOG_IN,
        success: 1,
        username:username,
        token:token
    }
};

export const login = (username,password) => {
    return (dispatch) => {
        //测试帐号
        username = '348831271@qq.com';
        password = 'sujiayi970804';

        //由于这个地方CSRF TOKEN具有一定的时效性，所以我们不做解藕

		fetch('http://incidence.cn:9924/csrf_token' , {method : 'GET'})
            .then((response) => {
                response.json().then(data => {
					fetch('http://incidence.cn:9924/mobile/auth/login' ,
                        {
                            method: 'POST',
                            headers: {
                                'X-CSRF-TOKEN': data['csrf_token'],
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    'username': username,
                                    'password': password
                                }
                            )
                        })
                        .then((response) => {

							console.log("login request response :");
							console.log(response);

                            response.json().then(data => {
                                if (data['status'] == 1) {
                                    dispatch(login_success(username,data.token))
                                }
                                else {
                                    //这个地方登录就失败了，
                                    dispatch(login_failed(codes.error.verify_id_failed,"用户名或者密码错误"))
                                }
                            }).catch((error) => dispatch(login_failed(codes.error.server_data_invalid,'登陆时服务器返回了无效的数据：'+error)))

                    }).catch((error) => dispatch(login_failed(codes.error.network_exception,'登陆时遭遇网络错误：'+error)))
                })
                    .catch((error) => {
                        dispatch(login_failed(codes.error.server_data_invalid,'获取CSRFTOKEN时服务器返回了无效的数据：'+error))
                    })

            }).catch((error) => dispatch(login_failed(codes.error.network_exception,'登陆时遭遇网络错误：'+error)))
    }
};