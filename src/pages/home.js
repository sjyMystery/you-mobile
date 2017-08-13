import React from 'react'
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import * as Actions from '../Actions'
import {connect} from 'react-redux'
import {AddSideMenu , VCard} from '../Component'

class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.log(this.props);
		//source={require('../../assets/img/logo1.png')}
        const {dispatch} = this.props;
        return <View style={styles.container}>
            <VCard
                style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
                name={this.props.profile.name}
                motto={this.props.profile.motto}
                gender={this.props.profile.gender}
                mobile={this.props.profile.mobile}
                id={this.props.profile.id}

            />
            <Tabs tabBarStyle={{
                height: 40,
                borderTopWidth: 1, borderTopColor: '#ffffff', backgroundColor: '#ffffff'
            }}>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    title='联系人'
                    renderIcon={() => <Icon
                        containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                        color={'#5e6977'} type="foundation" name='torsos-male-female' size={20}/>}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30}/>}
                    onPress={() => {
                        dispatch(Actions.to_contactlist())
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

select = (state) => {
    return {
        profile: state.profile.home
    }
};
var HomeWithSide = AddSideMenu(connect(select)(Home));
export default HomeWithSide