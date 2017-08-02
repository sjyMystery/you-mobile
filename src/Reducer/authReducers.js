import * as STATE from './state.js'
import * as Actions from '../Actions'
//默认是停留在这个界面等待登录的情况
const initialLoginState ={
    status:STATE.LOGIN,
    success:false
}


const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

const loginReducer = (state=initialLoginState,action)=>{
    switch (action.type)
    {
        case Actions.LOG_IN:
        {
            if(success)
            {
                return assign(state,{
                    status: STATE.LOGIN,
                    username:action.username,
                    token:action.token
                })
            }
            else
            {
                return assign(state,{
                    status: STATE.LOGIN,
                    error:action.error
                    }
                )
            }
        }
        default:
        {
            return state
        }
    }
}

authReducers =loginReducer

export default authReducers