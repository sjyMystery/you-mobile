/**
 * Created by 34883 on 2017-08-10.
 */

import request from './fetch_factory'

export const getlist = () => {
    return new Promise(
        (resolve, reject) => {
            request('/contact').then(data=>(resolve(data)),err=>reject(err))
        }
    )
};