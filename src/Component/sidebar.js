import React from "react";
import {Image, Platform} from "react-native";
import {StyleSheet} from 'react-native';
import * as Actions from '../Actions'
import {connect} from 'react-redux'


import {
    Content,
    Text,
    List,
    ListItem,
    Container,
    Left,
    Right,
    Badge,
    Button,
    View,
    StyleProvider,
    getTheme,
    variables,
} from "native-base";

import {Icon} from 'react-native-elements';

class SideBar extends React.Component
{

	datas = [
        ,
		{
			name : "主页" ,
			action : Actions.to_home ,
			icon_name : "circle-o" ,
			icon_type : "font-awesome" ,
			bg : "#C5F442"
        },
        {
            name: "资料",
            action: Actions.to_profile,
            icon_name: "id-card",
            icon_type: "font-awesome",
            bg: "#C5F442"
        }
];
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

    render() {
        return (
            <Container>

                <Content bounces={false} style={{flex: 1, backgroundColor: "#fff", top: -1, flexDirection: 'column'}}>
                    <View style={{padding: 30, flexDirection: 'row'}}>
                        <Image
                            source={require('../../assets/img/app_icon.png')}
                            style={styles.avatar}
                        />
                        <Text style={{fontSize: 40}}>You</Text>
                    </View>
                    <List
						dataArray={this.datas}
						renderRow={data =>
                            <ListItem button noBorder onPress={() => {
                                this.props.dispatch(data.action())
                            } }>
                                <Left>
                                    <Icon active name={data.icon_name} type={data.icon_type}
                                          style={{shadowColor: "#777", width: 30}}/>
                                    <Text style={styles.text}>
                                        {data.name}

                                    </Text>
                                </Left>
                                {data.types &&
                                <Right style={{flex: 1}}>
                                    <Badge
                                        style={{
                                            borderRadius: 3,
                                            height: 25,
                                            width: 72,
                                            backgroundColor: data.bg,
                                        }}
                                    >
                                        <Text style={styles.badgeText}>{`${data.types} Types`}</Text>
                                    </Badge>
                                </Right>}
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        marginLeft: 20
    },
    badgeText: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        marginLeft: 20
    },
    avatar: {
        borderRadius: 4,
        margin: 5,
        width: 40,
        height: 40
    },
});

export default connect()(SideBar)

