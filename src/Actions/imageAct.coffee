import * as Route from '../routes'

export openImage = (uri)=>
  (dispatch)=>
    Route.Push(Route.IMAGE_PLAYER, uri: uri)
    dispatch(type: TYPES.PLAY_IMAGE)
