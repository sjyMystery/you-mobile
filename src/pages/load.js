//这个页面是初始化界面，打开应用就看到他了

import React from 'react';
import {AppLoading} from 'expo';
import * as Actions from '../Actions'
import {connect} from 'react-redux'

class Load extends React.Component
{
	constructor(props)
	{
		super(props);
		const {dispatch} = props;
		console.log("in constuctor" + this.props.loaded);
		dispatch(Actions.load())
	}

	componentWillUpdate(nextPropsnextState)
	{
		console.log('update load')
	}

	shouldComponentUpdate(nextProps , nextState)
	{

		console.log('update login with:current' + this.props.loaded + ' and then :' + nextProps.loaded);
		if(nextProps.loaded == props.loaded)
		{
			return false
		}
		else
		{
			if(nextProps.login)
			{
				this.props.dispatch(Actions.init());
				this.props.dispatch(Actions.to_home())
			}
			else
			{
				this.props.dispatch(Actions.to_login())
			}
			return false
		}
	}

	render()
	{

		return (
			<AppLoading/>
		);
	}
}

select = (state) =>
{
	return {
		loaded : state.loaded ,
		login : state.login
	}
};

export default connect(select)(Load)
