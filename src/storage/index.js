import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
const Reducer = require('../Reducer').Reducer;
import createFilter , {createBlacklistFilter} from 'redux-persist-transform-filter';

const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

let middlewares = [
    logger,
    thunk
];

let createAppStore = applyMiddleware(logger, thunk)(createStore);

const authFilter = createFilter(
	'auth' ,
	['username' , 'token']
);

export default function configureStore(onComplete: () => void) {
	const store = autoRehydrate({log : true})(createAppStore)(Reducer);
    let opt     = {
        storage: AsyncStorage,
		whitelist : ['auth']
    };
    persistStore(store, opt, onComplete);
    return store;
}