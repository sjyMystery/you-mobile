import React from 'react'
import {Text, TextInput, StyleSheet, View} from 'react-native'
import {Item, Input} from 'native-base'
import {Divider} from 'react-native-elements'
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
            <Item>
            </Item>
            <Item rounded>
                <Input
                    style={{height: Math.max(40, this.state.textInputHeight < 180 ? this.state.textInputHeight : 180)}}
                    multiline={true}
                    blurOnSubmit={true}
                    controlled={true}
                    returnKeyType="send"
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
                    onSubmitEditing={this._onPress}
            />
            </Item>
        </View>)
    }
}

const styles = StyleSheet.create({
    bottomToolBar: {
        flexDirection: 'row',
		alignItems : 'flex-start' ,
		justifyContent : 'flex-start' ,
        borderTopWidth: 0,
        backgroundColor: '#fafafa',
        height: 40
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