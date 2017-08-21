import React from 'react'
import {BottomInput, AvoidkeyBoardWarp, MessageList} from '../Component'
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native'
import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import * as style from '../style'

import * as Actions from '../Actions'

class ChatRoom extends React.Component {


    messageList:Object

    constructor() {
        super();
    }

    submit = (inputValue)=>{
        this.messageList._scrollToBottom()
        this.props.submit(this.props.connection,inputValue, this.props.session_id)
    }


    render() {
        //
        //<MessageList/>
        //
        let content = <View style={styles.container}>
            <MessageList message_list={this.props.message_list} submitted={this.props.submitted} ref={(ref)=>{this.messageList=ref}}/>
            <BottomInput submit={this.submit}/>
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
            backgroundColor: style.color.whiteGreyPro
        },
        KeyboardAvoidingView: {
            flex: 1
        }
    }
);
select           = (state) =>
{
	return {
        connection: state.main.connection,
        session_id:state.message.session_id,
        message_list: state.message.message_lists[state.message.session_id],
        submitted: state.message.submitted
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