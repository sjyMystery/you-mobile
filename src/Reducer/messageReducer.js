import * as ACTION from '../Actions/types';
import * as STATE from './state';

const ListView = require('react-native').ListView;
//默认是停留在这个界面等待登录的情况

const rows = [[], []];

const initialMessageState = {
    rows: [],
    ds: [],
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
			var rows = state.rows.concat();

			for(var key in action.message)
			{
                if (rows[action.message[key].session] == undefined) {
                    rows[action.message[key].session] = [];
                }
                rows[action.message[key].session] = rows[action.message[key].session].concat([{
					rl : 0 ,
					content : action.message[key].content ,
					remote : action.message[key].remote ,
					avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
                }]);
                if (state.ds[action.message[key].session] === undefined) {
                    state.ds[action.message[key].session] = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                }
                state.ds[action.message[key].session].cloneWithRows(rows[action.message[key].session])
            }

			var newState = assign(state , {
				rows : rows ,
				submitted : state.submitted ,
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
            if (ds[state.session_id] == undefined) {
                state.ds[state.session_id] = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            }

            rows[state.session_id] = rows[state.session_id].concat([{
				rl : 1 ,
				content : action.message ,
				avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
            }]);
            state.ds[state.session_id].cloneWithRows(rows[state.session_id]);


			var newState = assign(state , {
				rows : rows ,
				submitted : true ,
			});
			return newState;
		}
        case ACTION.CONVERT_SESSION: {
            if (state.rows[action.session_id] == undefined)
                state.rows[action.session_id] = [];
            if (state.ds[action.session_id] == undefined) {
                state.ds[action.session_id] = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            }
            return assign(state, {
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