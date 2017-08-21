import request from './fetch_factory'

export const get = () => {
    return request('/profile')
};

export const edit=(item,value) =>{
    data={}
    data[item]=value
    return request('/profile','POST',data)
}