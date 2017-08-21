import csrf from './csrf'

fetch_base =(path, method = 'GET',headers = null, data = null)=>{
    return new Promise(function (resolve, reject) {
        fetch('http://incidence.cn:9924/api' + path, {method: method, headers: headers, body: data})
            .then(response => {
                console.log('fetch method:', method, 'path:', path, 'body:', data, 'headers:', headers, 'response:', response)
                if (response.ok == false) {
                    console.log('fetch failed: with status', response.status)
                    response.text().then(
                        data=>console.log('fetch failed data:',data)
                    )
                    reject(response);
                    return
                }
                response.json().then(
                    data => {
                        console.log('fetch response json_decoded:',data)
                        resolve(data)
                    },
                    error => {
                        console.log('fetch response json_decode rejected error:',error)
                        reject(error)
                    }
                ).catch(error=>{
                    console.log('fetch response json_decode rejected exception:',error)
                    reject(error)
                })
            }, err => {
                console.log('fetch rejected,error:',err)
                reject(err)
            })
            .catch(err => {
                console.log('fetch exception:', err);
                reject(err)
            })
    })
}

request = (path, method = 'GET',data = null) => {
    return new Promise(function (resolve, reject) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (method == 'POST') {
            csrf().then( csrf_token=> {
                headers=Object.assign({},headers,{
                    'X-CSRF-TOKEN': csrf_token,
                })
                if (data != null) {
                    data = JSON.stringify(data)
                }
                fetch_base(path, 'POST', headers, data).then(data=>resolve(data),data=>reject(data))
            },err=>reject(err))
        }
        else
        {
            fetch_base(path,method,headers,data).then(data=>resolve(data),data=>reject(data))
        }
    })
};

export default request