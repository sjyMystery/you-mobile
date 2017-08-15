import * as codes from '../codes'

csrf = () => {
    return new Promise(function (resolve, reject) {
        fetch('http://incidence.cn:9924/csrf_token', {method: 'GET'})
            .then((response) => {
                response.json().then(data => {
                    resolve(data['csrf_token'])
                }, (error) => reject({error: codes.error.fetch_rejected, message: '获取CSRFTOKEN的请求被拒绝，错误：' + error}))
                    .catch((error) => {
                        reject({error: codes.error.server_data_invalid, message: '获取CSRFTOKEN时服务器返回了无效的数据：' + error})
                    })

            }).catch((error) => reject({
            error: codes.error.network_exception,
            message: '获取CSRF TOKEN 时遭遇网络错误：' + error
        }))
    })
};

export default csrf