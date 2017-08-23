import * as TYPES from './types'
import * as contact from './contactAct'
import {output_error} from './mainAct'
export scanQRCode = (data) ->
  (dispatch) ->
    try
      res=JSON.parse(data)
      switch res.type
        when 'add_contact' then dispatch contact.addContactByQRCode res.token
    catch error
      dispatch output_error error