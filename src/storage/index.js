import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import {Reducer} from '../Reducer';

const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatching', action);
    console.log(next);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

let middlewares = [
    logger,
    thunk
];

let createAppStore = applyMiddleware(logger, thunk)(createStore);


export default function configureStore(onComplete: () => void) {
	const store = autoRehydrate({log : true})(createAppStore)(Reducer);
    let opt     = {
        storage: AsyncStorage,
        transform: [],
		whitelist : ['username' , 'token']
    };
    persistStore(store, opt, onComplete);
    return store;
}