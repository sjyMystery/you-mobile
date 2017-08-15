import fetch_factory from './fetch_factory'

export const get = () => {
    return fetch_factory('/profile')
};