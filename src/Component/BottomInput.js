import React from 'react'
import {Text, TextInput, StyleSheet, View} from 'react-native'
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux'
import * as Actions from '../Actions'
import {bindActionCreators} from 'redux'
class BottomInput extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            textInputHeight: 40
        };
    }

    _onPress = () => {
		this.props.submit_data(this.props.connection , this.state.inputValue);
        this.setState({inputValue: ''});
    };

    render() {
        return (<View style={styles.bottomToolBar}>
            <TextInput
                style={[styles.inputBar, {height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180)}]}
                multiline={true}
                controlled={true}
                underlineColorAndroid="transparent"
                returnKeyType="default"
                onContentSizeChange={
                    (event) => {
                        this.setState({textInputHeight: event.nativeEvent.contentSize.height});
                    }
                }
                value={this.state.inputValue}
                enablesReturnKeyAutomatically={true}
                onChangeText={ (text) => {
                    this.setState({inputValue: text});
                }}
            />
            <Button
                style={styles.sendButton}
                disabled={!this.state.inputValue}
                onPress={this._onPress}
                backgroundColor="#000000"
                icon={{type: "font-awesome", name: 'rocket', size: 20, backgroundColor: '#ffffff'}}
            >
            </Button>
        </View>)
    }
}

const styles = StyleSheet.create({
    inputBar: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10
    },
    sendButton: {
        height: 43,
        backgroundColor: '#ff0000'
    },
    bottomToolBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 0,
        backgroundColor: '#f2f2f2'
    },
});

select = (state) => {
    return {}
};
act    = (dispatch) =>
{
	return bindActionCreators({
		submit_data : Actions.msg.submit
	} , dispatch)
};

export default connect(select , act)(BottomInput)