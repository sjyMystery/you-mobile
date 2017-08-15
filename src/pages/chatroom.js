import React from 'react'
import {BottomInput, AvoidkeyBoardWarp, MessageList} from '../Component'
import {StyleSheet, Text, View, KeyboardAvoidingView, Platform} from 'react-native'
import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import * as style from '../style'

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
            <MessageList ds={this.props.ds} submitted={this.props.submitted}/>
            <BottomInput connection={this.props.connection} session_id8={this.props.session_id}
                         submit={this.props.submit}/>
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
        session_id: state.message.session_id,
        ds: state.message.ds,
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