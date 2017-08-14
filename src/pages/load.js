//这个页面是初始化界面，打开应用就看到他了

import React from 'react';
import {AppLoading} from 'expo';
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Load extends React.Component
{
	constructor(props , context)
	{
		super(props , context);
	}

	shouldComponentUpdate(nextProps , nextState)
	{
        console.log("load");
		if(nextProps.loaded == this.props.loaded)
		{
			return false
		}
		else
		{
			if(nextProps.token != "")
			{
				this.props.init(nextProps.username , nextProps.token);
				this.props.http_login().then(this.props.to_home , this.props.to_login)
			}
			else
			{
                console.log('to_login in UI');
				this.props.to_login()
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

mapStateToProps    = (state , ownProps) =>
{
	console.log('map state to props' , state , 'ownProps' , ownProps);
	return {
		loaded : state.main.loaded ,
		username : state.auth.username ,
		token : state.auth.token
	}
};
mapDispatchToProps = (dispatch) =>
{
	return bindActionCreators({
		load : Actions.load ,
		init : Actions.init ,
		to_home : Actions.to_home ,
		to_login : Actions.to_login ,
		http_login : Actions.auth.http_login
	} , dispatch)
};

export default connect(mapStateToProps , mapDispatchToProps)(Load)
