import * as ACTION from '../Actions/types';
import * as STATE from './state';
const view                = require('react-native').ListView;
//默认是停留在这个界面等待登录的情况

const rows = [[], []];

const initialMessageState = {
    rows: rows,
	submitted : false ,
    ds: ((new view.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(rows))),
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
			var rows = state.rows.concat();

			for(var key in action.message)
			{
                if (rows[action.message[key].session] == undefined) {
                    rows[action.message[key].session] = [];
                }
                rows[action.message[key].session].push({
					rl : 0 ,
					content : action.message[key].content ,
					remote : action.message[key].remote ,
					avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
				})
			}
            console.log("add message", action.message, 'from session', state.session_id, 'state', state);
            if (rows[state.session_id] == undefined) {
                rows[state.session_id] = [];
            }
			var newState = assign(state , {
				rows : rows ,
				submitted : state.submitted ,
                ds: state.ds.cloneWithRows(rows[state.session_id])
			});

			console.log(rows , newState);
			return newState;
		}
		case ACTION.SUBMIT_MSG:
		{
			var rows = state.rows.concat();

            if (rows[state.session_id] == undefined) {
                rows[state.session_id] = [];
            }
            rows[state.session_id].push({
				rl : 1 ,
				content : action.message ,
				avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
			});


			var newState = assign(state , {
				rows : rows ,
				submitted : true ,
                ds: state.ds.cloneWithRows(rows[state.session_id])
			});
            console.log(rows);
            console.log(rows[state.session_id], newState);
			return newState;
		}
        case ACTION.CONVERT_SESSION: {
            if (state.rows[state.session_id] == undefined)
                state.rows[state.session_id] = [];
            return assign(state, {
                ds: state.ds.cloneWithRows(state.rows[state.session_id]),
                session_id: action.session_id
            })
        }
        case ACTION.INIT: {
        }
		default:
		{
			return state
		}
	}
};

export default messageReducer;