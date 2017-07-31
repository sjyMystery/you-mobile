import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export default class MessageCell extends React.Component {
    //属性约定如下：
    //message.rl: 0 在左侧显示  1 在右侧显示
    //message.avatar ： 头像连接
    //message.content : 消息内容
    //
    //
    constructor(props) {
        super(props)
    }

    render() {
        let {message} = this.props;

        let differentStyle = {};
        if (message.rl) {
            differentStyle = {
                flexDirection: 'row-reverse',
                backgroundColor: '#92E649'
            };
        } else {
            differentStyle = {
                flexDirection: 'row',
                backgroundColor: '#FFFFFF'
            };
        }

        return (
            <View
                style={[styles.messageCell, {flexDirection: differentStyle.flexDirection}]}
            >
                <Image
                    source={require('../../assets/img/app_icon.png')}
                    style={styles.avatar}
                />
                <View
                    style={[styles.contentView, {backgroundColor: differentStyle.backgroundColor}]}
                >
                    <Text style={styles.messageCellText}>{message.content}</Text>
                </View>
                <View style={styles.endBlankBlock}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    messageCell: {
        marginTop: 5,
        marginBottom: 5,
    },
    messageCellText: {
        fontSize: 16
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
    contentView: {
        borderRadius: 4,
        padding: 4,
        paddingHorizontal: 8,
        overflow: 'hidden',
        flex: 1,
        margin: 5,
        justifyContent: 'center'
    },
    endBlankBlock: {
        margin: 5,
        width: 50,
        height: 40
    }
});
