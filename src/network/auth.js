import * as codes from '../codes'
import csrf from './csrf'
import fetch_factory from './fetch_factory'

export const http_login = (username, token) => {
    return new Promise((resolve, reject) =>
        fetch_factory('/auth/token_login', 'POST',{
            username: username,
            token: token
        })
        .then(
            data => {
                if (data['status'] == 1) {
                    resolve()
                }
                else {
                    reject({error: codes.error.verify_id_failed, message: '身份验证失败'})
                }
            },
            err => reject(err)
        ))
        /*csrf()
            .then(csrf_token => fetch_factory('/mobile/auth/token_login', 'POST', csrf_token, {
                username: username,
                token: token
            }), err => reject(err))
            .then(
                data => {
                    if (data['status'] == 1) {
                        resolve()
                    }
                    else {
                        reject({error: codes.error.verify_id_failed, message: '身份验证失败'})
                    }
                },
                err => reject(err)
            ),
        err => reject(err)*/
};
export const login = (username, password) => {
    return new Promise((resolve, reject) => csrf()
            .then(csrf_token => fetch_factory('/mobile/auth/login', 'POST', csrf_token, {
                username: username,
                password: password
            }), err => reject(err))
            .then(
                data => {
                    if (data['status'] == 1) {
                        console.log('login success:', resolve);
                        resolve({username: username, token: data['token']})
                    }
                    else {
                        reject({error: codes.error.verify_id_failed, message: '身份验证失败'})
                    }
                },
                err => reject(err)
            ),
        err => reject(err)
    )
};