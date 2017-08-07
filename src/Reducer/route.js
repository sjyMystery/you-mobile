import {Reducer} from 'react-native-router-flux'

const defaultReducer = Reducer();

export default routeReducer = (state , action) =>
{
	console.log('Reducing action: ' , action.type);
	switch(action.type)
	{
		default:
			return defaultReducer(state , action);
	}
}