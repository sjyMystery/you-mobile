import * as ACTION from '../Actions/types';
import * as STATE from './state';

const initialMessageState = {
    message_lists:[],
	submitted : false ,
    session_id: 10
};
const assign              = (previous , next) =>
{
	return Object.assign({} , previous , next)
};

messageReducer = (state = initialMessageState , action) =>
{
	console.log("message reducer" , action);
	switch(action.type)
	{
		case ACTION.PUSH_MSG:
		{
			var message_lists = state.message_lists.concat();

			for(var key in action.message)
			{
                if (message_lists[action.message[key].session] == undefined) {
                    message_lists[action.message[key].session] = [];
                }
                message_lists[action.message[key].session] = message_lists[action.message[key].session].concat([{
					rl : 0 ,
					content : action.message[key].content ,
					remote : action.message[key].remote ,
					avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
                }]);
            }

			var newState = assign(state , {
				message_lists : message_lists ,
				submitted : state.submitted ,
			});

			console.log(message_lists , newState);
			return newState;
		}
		case ACTION.SUBMIT_MSG:
		{
			var message_lists = state.message_lists.concat();

            if (message_lists[state.session_id] == undefined) {
                message_lists[state.session_id] = [];
            }

            message_lists[state.session_id] = message_lists[state.session_id].concat([{
				rl : 1 ,
				content : action.message ,
				avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
            }]);


			var newState = assign(state , {
				message_lists : message_lists ,
				submitted : true ,
			});
			return newState;
		}
        case ACTION.CONVERT_SESSION: {
            if (state.message_lists[action.session_id] === undefined){
                state.message_lists[action.session_id] = [];
            }
            return assign(state, {
                session_id: action.session_id
            })
        }
        case ACTION.INIT: {
            return initialMessageState
        }

        case ACTION.LOG_OUT: {
            return initialMessageState
        }
		default:
		{
			return state
		}
	}
};

export default messageReducer;