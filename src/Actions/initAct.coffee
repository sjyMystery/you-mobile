import * as TYPES from './types'
import * as network from '../network'

import * as contact from './contactAct'
import * as profile from './profileAct'

import {bindActionCreators} from 'redux'
import * as msg from './messageAct'
import output_error from './mainAct'

export init = (username, token) =>
  (dispatch)=>
    connection = new network.chatMessage("incidence.cn", 9923, username, token, bindActionCreators(msg.push, dispatch))
    dispatch(
      type: TYPES.INIT,
      connection: connection
      success: true
    )
    network.profile.get()
      .then(
      (data) =>
        dispatch profile.updateHome data
        network.contact.getlist().then(
          (data) =>  dispatch contact.updateList(data)
          (error) => reject(error)
        )
      (error) => reject error
    )

export load = ()=>(dispatch)=> dispatch(type: TYPES.LOAD)


