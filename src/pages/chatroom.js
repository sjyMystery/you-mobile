import React from 'react'
import {BottomInput, AvoidkeyBoardWarp, MessageList} from '../Component'
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native'

import {connect} from 'react-redux'

import * as Actions from '../Actions'

class ChatRoom extends React.Component {

    messageList: Object;
    pushMessage: Object;

    constructor() {
        super();
    }

    _onSubmitEditing = (msg) => {
        Actions.msg.submit(this, msg)
    };

    render() {
        //
        //<MessageList/>
        //
        let content = <View style={styles.container}>
            <MessageList ref={(list) => this.messageList = list} push_ref={(push) => this.pushMessage = push}/>
            <BottomInput onSubmitEditing={this._onSubmitEditing}/>
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

const styles = StyleSheet.create({
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
select       = (state) =>
{
	return {
		connection : state.connection
	}
};

export default connect(select)(ChatRoom)