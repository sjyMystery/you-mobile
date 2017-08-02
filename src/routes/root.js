/**
 * Created by 34883 on 2017-08-01.
 */
import React from 'react'
import * as Pages from '../pages'
import * as Names from './names'
import {Router, Scene} from 'react-native-router-flux'
import {connect} from 'react-redux'


class Root extends React.Component {
    render() {
        return <Router>
            <Scene key="root" tabs={false} hideNavBar={true}>
                <Scene key={Names.HOME} component={Pages.Home} tabs={false} initial={true}/>
                <Scene key={Names.CHATROOM} component={Pages.ChatRoom} tabs={false}/>
                <Scene key={Names.LOGIN} component={Pages.Login} tabs={false}/>
                <Scene key={Names.CONTACT_LIST} component={Pages.ContactList} hideNavBar={false}/>
            </Scene>
        </Router>
    }
}

export default connect()(Root)