import * as codes from '../codes'
import csrf from './csrf'
import fetch_factory from './fetch_factory'

export http_login = (username, token) =>
  new Promise (resolve, reject) =>
    fetch_factory('/auth/token_login','POST',{username:username,token:token})
    .then(
      (data) => if data['status'] == 1 then resolve()
      else reject
          error: codes.error.verify_id_failed
          message: "身份验证失败"
      (error) => reject error
    )
export login = (username, password) =>
  new Promise (resolve, reject) =>
    fetch_factory('/auth/login','POST',{username:username,password:password})
    .then(
      (data) =>
        if data['status'] == 1 then resolve data else reject data
      (error) =>
        reject error
    )