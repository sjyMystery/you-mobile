/**
 * Created by 34883 on 2017-08-01.
 */
import React from 'react'
import * as Pages from '../pages'
import * as Names from './names'
import {Router, Scene} from 'react-native-router-flux'

class Root extends React.Component {

    render() {
        return <Router>
            <Scene key="root" tabs={false} hideNavBar={true}>
                <Scene key={Names.LOAD} component={Pages.Load} tabs={false} initial={true}
                       dispatch={this.props.dispatch} store={this.props.store}/>
                <Scene key={Names.HOME} component={Pages.Home} tabs={false} dispatch={this.props.dispatch}/>
                <Scene key={Names.CHATROOM} component={Pages.ChatRoom} tabs={false} dispatch={this.props.dispatch}/>
                <Scene key={Names.LOGIN} component={Pages.Login} tabs={false} dispatch={this.props.dispatch}/>
                <Scene key={Names.CONTACT_LIST} component={Pages.ContactList} hideNavBar={false}
                       dispatch={this.props.dispatch}/>
            </Scene>
        </Router>
    }
}

export default Root