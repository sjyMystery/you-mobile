export const fetch_factory = (path, method = 'GET') => {
    return new Promise(function (resolve, reject) {
        fetch('http://incidence.cn:9924' + path, {method: method})
            .then(response => {
                console.log('fetch method:', method, 'path:', path, 'response:', response);
                response.json().then(
                    data => resolve(data),
                    error => reject(error)
                )
            }, err => reject(err))
            .catch(err => {
                console.log('fetch exception:', err);
                reject(err)
            })
    })
};