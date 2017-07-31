import React from 'react'
import WelcomeText from "react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeText.android";
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
export default class Home extends React.Component {
    render() {

        return <View style={styles.container}>
            <Image
                source={require('../../assets/img/logo1.png')}
                style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
            />
            <Tabs tabBarStyle={{
                height: 40,
                borderTopWidth: 1, borderTopColor: '#ffffff', backgroundColor: '#ffffff'
            }} tabBarShadowStyle={{backgroudColor: '#ffffff'}}>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    title='联系人'
                    renderIcon={() => <Icon
                        containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                        color={'#5e6977'} type="foundation" name='torsos-male-female' size={20}/>}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30}/>}
                    onPress={() => {
                        Actions.jump('contactList')
                    }}>
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    title='更多'
                    renderIcon={() => <Icon
                        containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                        color={'#5e6977'} type="font-awesome" name="th-large" size={20}/>}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30}/>}
                    onPress={() => {
                    }}>
                </Tab>
            </Tabs>
        </View>
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            backgroundColor: "#fafafa"
        },
        KeyboardAvoidingView: {
            flex: 1
        }
    }
);