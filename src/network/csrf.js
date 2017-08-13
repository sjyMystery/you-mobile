export const csrf = () => {
    return new Promise(function (resolve, reject) {
        fetch('http://incidence.cn:9924/csrf_token', {method: 'GET'})
            .then((response) => {
                response.json().then(data => {
                    resolve({csrf_token: data.csrf_token, error: 0})
                })
                    .catch((error) => {
                        reject({error: codes.error.server_data_invalid, message: '获取CSRFTOKEN时服务器返回了无效的数据：' + error})
                    })

            }).catch((error) => reject({
            error: codes.error.network_exception,
            message: '获取CSRF TOKEN 时遭遇网络错误：' + error
        }))
    })
};