import React from 'react'

import {ListView} from 'react-native'
import MessageCell from './MessageCell.js'

import {connect} from 'react-redux'

class MessageList extends React.Component {
    _userReachEnd = true;
    _userHasBeenInputed = false;
    MessageListView: Object;

    constructor(props) {
        super(props);
        this._userHasBeenInputed = this.props.submitted
    }

    renderRow = (message) => {
        return <MessageCell message={message}/>
    };

    _scrollToBottom() {
        let scrollProperties = this.MessageListView.scrollProperties;
        // 如果组件没有挂载完全，则不进行内容偏移
        if (!scrollProperties.visibleLength) {
            return;
        }

        // 如果是刷新操作，则不进行滑动
        if (!this._userReachEnd) {
            return;
        }


        // 这里是一个大坑，在测试环境的时候，由于运行速度较慢，scrollProperties.contentLength 总能
        // 获取到正确的值，生产环境需要加个延时，用来保证 `renderRow` 执行完毕
        // 这里设置了 130ms 的延时
        setTimeout(() => {
            let offsetY = scrollProperties.contentLength - scrollProperties.visibleLength;
            this.MessageListView.scrollTo({
                y: offsetY > 0 ? offsetY : 0,
                animated: this._userHasBeenInputed
            });
        }, this._userHasBeenInputed ? 0 : 130);
    }

    render() {
        return <ListView
            dataSource={this.props.ds}
            renderRow={this.renderRow}
            enableEmptySections={true}
            ref={(reference) => {
                this.MessageListView = reference;
            }}
            onLayout={
                (event) => {
                    this._scrollToBottom();
                }
            }
            onContentSizeChange={
                (event) => {
                    this._scrollToBottom();
                }
            }
        />
    }
}

export default MessageList