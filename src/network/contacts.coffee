
import request from './fetch_factory'
export getlist = =>
  new Promise (resolve, reject) =>
    request '/contact'
    .then(
      (data) => resolve data
      (err) => reject err
    )
export get_add_qrtoken = =>
  new Promise (resolve, reject) =>
    request '/contact/create_add_qr'
    .then(
      (data)=>if data['status'] == 1 then resolve data.qr_token else reject data
      (data)=>reject data
    )
export add_by_qrtoken = (token)=>
  new Promise (resolve, reject) =>
    request('/contact/add_by_qr','POST',token:token)
    .then(
      (data)=> if data.status == 1 then resolve data else reject data
      (data)=> reject data
    )
export test = (token) =>
