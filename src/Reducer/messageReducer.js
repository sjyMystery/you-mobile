import * as ACTION from '../Actions/types';
import * as STATE from './state';
const view                = require('react-native').ListView;
//默认是停留在这个界面等待登录的情况
const initialMessageState = {
	rows : [] ,
	submitted : false ,
	ds : (new view.DataSource({rowHasChanged : (r1 , r2) => r1 !== r2}))
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
				rows.push({
					rl : 0 ,
					content : action.message[key].content ,
					remote : action.message[key].remote ,
					avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
				})
			}

			var newState = assign(state , {
				rows : rows ,
				submitted : state.submitted ,
				ds : state.ds.cloneWithRows(rows)
			});

			console.log(rows , newState);
			return newState;
		}
		case ACTION.SUBMIT_MSG:
		{
			var rows = state.rows.concat();

			rows.push({
				rl : 1 ,
				content : action.message ,
				avatar : 'http://img1.imgtn.bdimg.com/it/u=3580504744,3022551902&fm=214&gp=0.jpg'
			});

			var newState = assign(state , {
				rows : rows ,
				submitted : true ,
				ds : state.ds.cloneWithRows(rows)
			});
			console.log(rows , newState);
			return newState;
		}
		default:
		{
			return state
		}
	}
};

export default messageReducer;