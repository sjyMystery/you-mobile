/**
 * Created by 34883 on 2017-08-02.
 */
import * as Flux from 'react-native-router-flux';

export const Go = (route, params = {}) => {
    Flux.Actions.replace(route, params)
};

export const Push = (route, params = {}) => {
    Flux.Actions.push(route, params)
};

export const Pop = () => {
    Flux.Actions.pop()
};