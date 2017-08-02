import React from 'react';
import {SideMenu} from 'react-native-elements';
import {SideBar} from './index'
import {View} from 'react-native'

const AddSideMenu = (WrappedComponent) => {
    class wSideMenu extends React.Component {
        constructor() {
            super();
            this.state = {
                isOpen: false
            };
            this.toggleSideMenu = this.toggleSideMenu.bind(this);
            console.log('render side menu')
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
            const menu = <SideBar/>;
            return (
                <SideMenu
                    isOpen={this.state.isOpen}
                    onChange={this.onSideMenuChange.bind(this)}
                    menu={menu}
                    menuPosition="right">
                    <WrappedComponent/>
                </SideMenu>

            )
        }
    }
    return wSideMenu
};
export default AddSideMenu