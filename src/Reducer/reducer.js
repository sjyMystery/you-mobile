import * as ACTION from '../Actions/types';
import * as STATE from './state';
import {combineReducers} from 'redux'
import authReducers from './authReducers'


const initialSate = {
	status : STATE.LOAD ,
	loaded : false

};

const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

//NOTE:这里给的status是指的是“刚刚完成了某个动作”
//这样对于这个动作完成的后续处理应该在相应的UI逻辑上
//比如STATE.LOAD表示刚才完成了加载
//这个时候UI层面进行响应，根据state继续下一个动作，to_login或者to_chatroom

mainReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ACTION.TO_LOGIN:{
            return assign(state,{
                status: STATE.LOGIN,
            })
        }
        case ACTION.LOG_OUT: {
            return assign(state, {
                status: STATE.LOGOUT,
                success: false
            })
        }
        case ACTION.TO_HOME: {
            return assign(
                state, {
                    status: STATE.HOME
                }
            )
        }
        case ACTION.TO_CHATROOM: {
            return assign(
                state, {
                    status: STATE.CHATROOM,
                    submitted: false
                }
            )
        }
        case ACTION.SUBMIT_MSG: {
            return assign(
                state, {
                    status: STATE.CHATROOM,
                    submitted: true
                }
            )
        }
		case ACTION.LOAD:
		{
			return assign(
				state , {
					status : STATE.LOAD ,
					loaded : true
				}
			)
		}
		case ACTION.INIT:
		{
			if(action.success)
			{
				return assign(
					state , {
						status : STATE.INIT ,
						init : true ,
						connection : action.connection
					}
				)
			}
			else
			{
				return assign(
					state , {
						status : STATE.INIT ,
						init : false
					}
				)
			}
        }
        default : {
            return state;
        }
    }
};

Reducer = combineReducers({mainReducer , authReducers});

export default Reducer