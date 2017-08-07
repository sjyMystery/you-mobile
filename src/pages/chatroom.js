import React from 'react'
import {BottomInput, AvoidkeyBoardWarp, MessageList} from '../Component'
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native'
import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import * as Actions from '../Actions'

class ChatRoom extends React.Component {

    constructor() {
        super();
    }


    render() {
        //
        //<MessageList/>
        //
        let content = <View style={styles.container}>
			<MessageList/>
			<BottomInput connection={this.props.connection}/>
        </View>;
        if (Platform.OS === 'ios') {
            return (
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.KeyboardAvoidingView}
                >
                    {content}
                </KeyboardAvoidingView>
            );
        } else {
            return content;
        }
    }
}

const styles     = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            backgroundColor: "#f2f2f2"
        },
        KeyboardAvoidingView: {
            flex: 1
        }
    }
);
select           = (state) =>
{
	return {
		connection : state.main.connection
	}
};
dispatchFunction = (dispatch) =>
{
	return bindActionCreators(
		{submit : Actions.msg.submit} ,
		dispatch
	)
};

export default connect(select , dispatchFunction)(ChatRoom)