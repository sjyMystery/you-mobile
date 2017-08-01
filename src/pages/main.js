import React from 'react';
import {SideMenu} from 'react-native-elements';
import SideBar from "../Component/sidebar";

import {Router} from "react-native-router-flux";
import Root from '../routes'


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

                    </Router>
                }
            </SideMenu>
        )
    }
}