import React from 'react';
import {Font, AppLoading} from 'expo';
import HelloWorld from "react-native/local-cli/templates/HelloWorld/index.ios";

export default class DefaultPage extends React.Component {
    state = {
        fontsAreLoaded: false,
        options: [
            {title: '登录', value: '1'},
            {title: '聊天', value: '2'},
        ],
    };

    async componentWillMount() {

        this.setState({fontsAreLoaded: true});
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading />;
        }

        return (
            <HelloWorld/>
        );
    }
}
