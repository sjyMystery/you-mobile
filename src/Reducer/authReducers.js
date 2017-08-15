import * as STATE from './state.js'
import * as Actions from '../Actions'
//默认是停留在这个界面等待登录的情况
const initialLoginState ={
	username : "" ,
	token : "" ,
	http_login : false
};


const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

const loginReducer = (state=initialLoginState,action)=>{
    switch (action.type)
    {
		case Actions.ENTRY:
		{
			return assign(state , {
				http_login : false
			});
			break;
		}
        case Actions.LOG_IN:
        {
			if(action.success)
            {
                return assign(state,{
                    username:action.username,
					token : action.token ,
					http_login : true
                })
            }
            else
            {
                return assign(state,{
					error : action.error ,
					msg : action.msg ,
					http_login : false
                    }
                )
            }
		}
		case Actions.HTTP_LOG_IN:
		{
			if(action.success)
			{
				return assign(state , {
					http_login : true
				})
			}
            else {
                return assign(state, {
                    http_login: false
                })
            }
			break;
        }
        default:
        {
            return state
        }
    }
};

authReducer = loginReducer;

export default authReducer