import React from 'react';
import {Font, AppLoading} from 'expo';
import {
    Heading,
    NavigationBar,
    Title,
    Text,
    Image,
    Button,
    Icon,
    DropDownMenu
} from '@shoutem/ui';

export default class DefaultPage extends React.Component {
    state = {
        fontsAreLoaded: false,
        options: [
            {title: '登录', value: '1'},
            {title: '聊天', value: '2'},
        ],
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Black': require('../.././node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
            'Rubik-BlackItalic': require('../.././node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
            'Rubik-Bold': require('../.././node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
            'Rubik-BoldItalic': require('../.././node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
            'Rubik-Italic': require('../.././node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
            'Rubik-Light': require('../.././node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
            'Rubik-LightItalic': require('../.././node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
            'Rubik-Medium': require('../.././node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
            'Rubik-MediumItalic': require('../.././node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
            'Rubik-Regular': require('../.././node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('../.././node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
        });

        this.setState({fontsAreLoaded: true});
    }

    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading />;
        }

        return (
            <NavigationBar
                leftComponent={<Icon name="sidebar"/>}
                centerComponent={<Title>TITLE</Title>}
                rightComponent={<DropDownMenu
                    options={this.state.options}
                    titleProperty="title"
                    valueProperty="value"
                    selectedOption={this.state.selectedOption ? this.state.selectedOption : this.state.options[0]}
                    onOptionSelected={(option) => this.setState({
                        selectedOption: option
                    })}
                />}
            />
        );
    }
}
