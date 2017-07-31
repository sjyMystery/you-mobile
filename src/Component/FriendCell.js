import React from 'react'
import {View,Image,Text,StyleSheet,TouchableHighlight} from 'react-native'

export default class FriendCell extends React.Component{
    constructor(props)
    {
        super(props)
    }
    _onPressButton(){
        <Text>xxx</Text>
    }

    render() {
        let { friend_name } = this.props;

        return (
            <View
                style={[styles.friend_cell, {flexDirection: 'row'}]}
            >
                <Image
                    source={{uri:'https://tse1-mm.cn.bing.net/th?id=OIP.Ii9yYwUSLtc1jtK8R_EgMQEsCm&p=0&pid=1.1'}}
                    style={styles.avatar}
                />
                <View
                    style={[styles.content_view, {backgroundColor: '#FFF000'}]}
                >
                    <TouchableHighlight onPress={this._onPressButton}>
                        <Text style={styles.name_cell}>{friend_name}</Text>
                    </TouchableHighlight>

                </View>
                <View style={styles.endBlankBlock} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    friend_cell: {
        marginTop: 5,
        marginBottom: 5,
        width: 420
    },
    name_cell: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15,
        left: 10
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 55,
        height: 55,
        top: 5,
        left: 10
    },
    content_view: {
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
