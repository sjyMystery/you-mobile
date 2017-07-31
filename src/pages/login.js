import {
    StyleSheet,
    Image,
    TextInput,
    Text,
    Icon,
    View
} from'react-native';
import React  from'react';
import {Actions} from 'react-native-router-flux'
import {Button} from 'native-base'
import user_info_storage from '../storage/userInfoStore'


console.disableYellowBox = true;


export default class Login extends React.Component {
    state = {
        fontsAreLoaded: false,
    };

    //在这里处理登录请求
    _onPress = () => {
        var username = this.state.username;
        var password = this.state.password;
        username = '348831271@qq.com';
        password = 'sujiayi970804';
        return fetch('http://incidence.cn/csrf_token', {method: 'GET'})
            .then((response) => {
                response.json().then(data => {
                    fetch('http://incidence.cn/mobile/login',
                        {
                            method: 'POST',
                            headers: {
                                'X-CSRF-TOKEN': data['csrf_token'],
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    'username': username,
                                    'password': password
                                }
                            )
                        }).then((response) => {
                        console.log(response);
                        response.json().then(data => {
                            if (data['status'] == 1) {
                                console.log('login!');
                                Actions.replace('chatroom');
                                user_info_storage.save(username, data['token']);
                                //这个地方就登录成功了，处理TOKEN并存下来
                            }
                            else {
                                console.log('login failed!');
                                //这个地方登录就失败了，
                            }
                        })
                    })
                        .catch((error) => console.error(error))
                })
                    .catch((error) => {
                        console.error(error);
                    })
            });
    };

    async componentWillMount() {
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