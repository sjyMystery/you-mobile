fetch_factory = (path, method = 'GET', csrf_token = null, data = null) => {

    console.log('fetch factory');
    return new Promise(function (resolve, reject) {
        var headers = null;
        if (method == 'POST') {
            headers = {
                'X-CSRF-TOKEN': csrf_token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            if (data != null) {
                data = JSON.stringify(data)
            }
        }
        console.log('fetch factory');
        fetch('http://incidence.cn:9924' + path, {method: method, headers: headers, body: data})
            .then(response => {
                console.log('fetch method:', method, 'path:', path, 'body:', data, 'headers:', headers, 'response:', response);
                if (response.ok == false) {
                    console.log('fetch failed: with status', response.status);
                    reject(response);
                    return
                }
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

export default fetch_factory