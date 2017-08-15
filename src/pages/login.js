import {
    StyleSheet,
    Image,
    TextInput,
    Text,
    Icon,
    View
} from'react-native';
import React  from'react';
import {Button} from 'native-base'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


console.disableYellowBox = true;


class Login extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			username : '' ,
			password : ''
		}
	}

    //在这里处理登录请求
    _onPress = () => {
		this.props.Login(this.state.username , this.state.password)
            .then((data) =>
				{
                    this.props.Initialize(data.username, data.token).then(this.props.Home, (error) => {
                        console.log(error)
                        //初始化失败
                    });
                }, (error) =>
				{
					//登录失败的提示
				}
			)
	};

	shouldComponentUpdate(nextProps , nextState)
	{
		return false
    }


    render() {

        return (
            <View style={{backgroundColor: '#ffffff', flex: 1, alignItems: 'center'}}>
                <Image
                    style={{
                        borderRadius: 35,
                        height: 70,
                        width: 70,
                        marginTop: 40,
                        alignSelf: 'center',
                    }}
                    source={require('../../assets/img/app_icon.png')}/>
                <TextInput
                    style={{
                        backgroundColor: '#fff',
                        marginTop: 10,
                        height: 35,
                    }}
                    placeholder='手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                    onChangeText={(e) => this.setState({username: e})}
                />
                <View
                    style={{height: 1, backgroundColor: '#000000', width: 350}}
                />
                <TextInput
                    style={{
                        backgroundColor: '#fff',
                        height: 35,
                    }}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                    onChangeText={(e) => this.setState({password: e})}
                />
                <View
                    style={{height: 1, backgroundColor: '#000000', width: 350}}
                />
                <View style={{
                    marginTop: 15,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: '#ffffff',
                    height: 35,
                    borderRadius: 5,
                    justifyContent: 'center',
                    width: 300,
                    alignItems: 'center'
                }}>
                    <Button styleName="secondary" onPress={() => {
                        this._onPress()
                    }} block dark>
                        <Text style={{color: '#ffffff'}}>登录</Text>
                    </Button>

                </View>
                <View style={{
                    marginTop: 15,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: '#fff',
                    height: 35, borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        marginLeft: 10,
                    }}>
                        无法登录?
                    </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        marginRight: 10,
                        alignItems: 'flex-end',
                        flex: 1,
                        flexDirection: 'row',
                        textAlign: 'right',
                    }}>
                        新用户
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        marginTop: 10,
        height: 35,
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 35,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin: {
        fontSize: 12,
        color: '#63B8FF',
        marginLeft: 10,
    },
    style_view_register: {
        fontSize: 12,
        color: '#63B8FF',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right',
    }
});

mapStateToProps    = (state) =>
{
	return {
		token : state.auth.token ,
		username : state.auth.username ,
		status : state.main.status
	}
};
mapDispatchToProps = (dispatch) =>
{
	return bindActionCreators({
		Home : Actions.to_home ,
		Initialize : Actions.init ,
        Login: Actions.auth.login
	} , dispatch);
};

export default connect(mapStateToProps , mapDispatchToProps)(Login)