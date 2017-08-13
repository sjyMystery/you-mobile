/**
 * Created by 34883 on 2017-08-10.
 */

export const getlist = () => {
    return new Promise(
        (resolve, reject) => {
            fetch('http://incidence.cn:9924/contact', {method: 'GET'}).then((response) => {
                response.json().then((data) => {
                        resolve(data)
                    }
                )
            })
                .catch((error) => {
                    reject(error)
                })
        }
    )
};