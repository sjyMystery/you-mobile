import React from 'react';
import {SideMenu} from 'react-native-elements';
import SideBar from "./sidebar";

import {Router, Scene} from "react-native-router-flux";


import ChatRoom from "./chatroom";
import Login from './login';
import Home from "./home"
import ContactList from './ContactList'


export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    onSideMenuChange(isOpen: boolean) {
        this.setState({
            isOpen: isOpen
        })
    }

    toggleSideMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const MenuComponent = (<SideBar/>
        );

        return (
            <SideMenu
                isOpen={this.state.isOpen}
                onChange={this.onSideMenuChange.bind(this)}
                menu={MenuComponent}>
                {
                    <Router>
                        <Scene key="root" tabs={false} hideNavBar={true}>
                            <Scene key="home" component={Home} tabs={false}/>
                            <Scene key="chatroom" component={ChatRoom} tabs={false}/>
                            <Scene key="login" component={Login} tabs={false}/>
                            <Scene key="contactList" component={ContactList} hideNavBar={false}/>
                        </Scene>
                    </Router>
                }
            </SideMenu>
        )
    }
}