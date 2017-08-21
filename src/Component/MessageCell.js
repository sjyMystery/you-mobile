import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import * as style from '../style'

import {Dimensions} from 'react-native'


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

    componentWillMount() {
    }

    render() {
        let message = this.props.message.item;
        let differentStyle = {};
        if (!message.rl) {
            differentStyle = {
                flexDirection: 'row-reverse',
                borderColor: style.color.white,
                backgroundColor: style.color.white
            };
        } else {
            differentStyle = {
                flexDirection: 'row',
                backgroundColor: style.color.mikebluePro,
                borderColor: style.color.white
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
                    style={[styles.contentView, {
                        backgroundColor: differentStyle.backgroundColor,
                        borderColor: differentStyle.borderColor
                    }]}
                >
                    <Text style={styles.messageCellText}>{message.content}</Text>
                </View>
                <View style={[styles.endBlankBlock]}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    messageCell: {
        marginTop: style.chatroom.messageCellMargin,
        marginBottom: style.chatroom.messageCellMargin,
    },
    messageCellText: {
        fontSize: style.chatroom.messageFontSize
    },
    avatar: {
        borderRadius: 20,
        borderWidth: style.chatroom.avatarBorderWidth,
        borderColor: style.color.white,
        margin: style.chatroom.messageContentMargin,
        width: style.chatroom.avatarWidth,
        height: style.chatroom.avatarHeight
    },
    contentView: {
        borderRadius: style.chatroom.messageContentRadius,
        borderWidth: style.chatroom.messageContentBorderWith,
        padding: style.chatroom.messageContentPaddingV,
        overflow: 'hidden',
        margin: style.chatroom.messageContentMargin,
        justifyContent: 'space-between',
        maxWidth: style.chatroom.messageContentMaxWidth,
    },
    endBlankBlock: {
        margin: style.chatroom.messageContentMargin,
        height: style.chatroom.messageContentHeight,
        width: style.chatroom.endLineBlankWidth,
        flex: 1
    }
});
