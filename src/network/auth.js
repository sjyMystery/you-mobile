import * as codes from '../codes'

export const login = (username , password) =>
{
	var p = new Promise(function(resolve , reject)
	{
		fetch('http://incidence.cn:9924/csrf_token' , {method : 'GET'})
			.then((response) =>
			{
				response.json().then(data =>
				{
					fetch('http://incidence.cn:9924/mobile/auth/login' ,
						{
							method : 'POST' ,
							headers : {
								'X-CSRF-TOKEN' : data['csrf_token'] ,
								'Accept' : 'application/json' ,
								'Content-Type' : 'application/json'
							} ,
							body : JSON.stringify(
								{
									'username' : username ,
									'password' : password
								}
							)
						})
						.then((response) =>
						{

							console.log("login request response :");
							console.log(response);

							response.json().then(data =>
							{
								if(data['status'] == 1)
								{
									resolve({username : username , token : data.token})
								}
								else
								{
									//这个地方登录就失败了，
									reject({error : codes.error.verify_id_failed , message : "TOKEN或用户名错误"})
								}
							}).catch((error) => reject({
								error : codes.error.server_data_invalid ,
								message : '登陆时服务器返回了无效的数据：' + error
							}))

						}).catch((error) => reject({
						error : codes.error.network_exception ,
						message : '登陆时遭遇网络错误：' + error
					}))
				})
					.catch((error) =>
					{
						reject({error : codes.error.server_data_invalid , message : '获取CSRFTOKEN时服务器返回了无效的数据：' + error})
					})

			}).catch((error) => reject({error : codes.error.network_exception , message : '登陆时遭遇网络错误：' + error}))
	});
	return p;
};

export const http_login = (username , token , success , failed) =>
{
	fetch('http://incidence.cn:9924/csrf_token' , {method : 'GET'})
		.then((response) =>
		{
			response.json().then(data =>
			{
				fetch('http://incidence.cn:9924/mobile/auth/token_login' ,
					{
						method : 'POST' ,
						headers : {
							'X-CSRF-TOKEN' : data['csrf_token'] ,
							'Accept' : 'application/json' ,
							'Content-Type' : 'application/json'
						} ,
						body : JSON.stringify(
							{
								'username' : username ,
								'token' : token
							}
						)
					})
					.then((response) =>
					{

						console.log("login with Token request response :");
						console.log(response);

						response.json().then(data =>
						{
							if(data['status'] == 1)
							{
								success(username , data.token)
							}
							else
							{
								//这个地方登录就失败了，
								failed(codes.error.verify_id_failed , "用户名或者密码错误")
							}
						}).catch((error) => failed(codes.error.server_data_invalid , '登陆时服务器返回了无效的数据：' + error))

					}).catch((error) => failed(codes.error.network_exception , '登陆时遭遇网络错误：' + error))
			})
				.catch((error) =>
				{
					failed(codes.error.server_data_invalid , '获取CSRFTOKEN时服务器返回了无效的数据：' + error)
				})

		}).catch((error) => failed(codes.error.network_exception , '登陆时遭遇网络错误：' + error))
};