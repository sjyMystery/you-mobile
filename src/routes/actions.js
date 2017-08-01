/**
 * Created by 34883 on 2017-08-02.
 */
import * as Flux from 'react-native-router-flux';

export const Go = (route, params = null) => {
    Flux.Actions[route](Flux.REPLACE, params)
};

export const Push = (route, params = null) => {
    Flux.Actions[route](Flux.PUSH, params)
};

export const Pop = (route, params = null) => {
    Flux.Actions[route](Flux.POP, params)
};