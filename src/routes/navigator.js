/**
 * Created by 34883 on 2017-08-01.
 */
import * as Pages from '../pages'
import * as Names from './names'
import {Scene , Actions} from 'react-native-router-flux'
import React from 'react'

const navigator = Actions.create(
	<Scene key="root" tabs={false} hideNavBar={true}>
		<Scene key={Names.LOAD} component={Pages.Load} tabs={false} initial={true}/>
		<Scene key={Names.HOME} component={Pages.Home} tabs={false}/>
		<Scene key={Names.CHATROOM} component={Pages.ChatRoom} tabs={false}/>
		<Scene key={Names.LOGIN} component={Pages.Login} tabs={false}/>
		<Scene key={Names.CONTACT_LIST} component={Pages.ContactList}/>
	</Scene>);

export default navigator