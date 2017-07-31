import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

export default class userInfoStore {

    storage: Object;

    //是否已经完成加载
    loaded: boolean;
    username: String;
    token: String;

    constructor() {
        this.storage = new Storage(
            {
                size: 100,
                storageBackend: AsyncStorage,
                defaultExpires: 1000 * 3600 * 24,
                enableCache: true,
                sync: {}
            }
        );
        this.loaded = false;
        this.load()
    }

    save = (username, token) => {
        this.username = username;
        this.token = token;
        this.loaded = true;
        this.storage.save({
            key: 'userInfo',
            data: {
                username: username,
                token: token
            },
            expires: 1000 * 3600 * 24
        })
    };

    load = () => {
        this.storage.load({
            key: 'userInfo',
            autoSync: true,
            syncInBackgound: true,
            syncParams: {
                extraFetchOptions: {}
            }
        }).then(ret => {
            console.log("loaded user info:" + ret.username + " with token:" + ret.token);
            this.username = ret.username;
            this.token = ret.token;
            this.loaded = true
        }).catch(err => {
            console.warn(err.message);
        })

    };

    clear = () => {
        this.storage.remove({key: 'userInfo'})
    }
}