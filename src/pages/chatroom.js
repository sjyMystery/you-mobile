import React from 'react'
import {BottomInput, AvoidkeyBoardWarp, MessageList} from '../Component'
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native'

export default class ChatRoom extends React.Component {

    messageList: Object;

    constructor() {
        super();
    }

    _onSubmitEditing = (msg) => {
        console.log(msg);
        this.messageList._userHasBeenInputed = true;
        this.messageList.pushMessage(msg);
    };

    render() {
        //
        //<MessageList/>
        //
        let content = <View style={styles.container}>
            <MessageList ref={(list) => this.messageList = list}/>
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