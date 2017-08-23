import fetch_factory from './fetch_factory'

const csrf = () => {
    return new Promise(function (resolve, reject) {
        fetch_factory('/csrf_token').then(
            data=>resolve(data.csrf_token),data=>reject(data)
        )
    })
};

export default csrf
