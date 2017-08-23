import React from 'react'
import RN from 'react-native'
class Image extends React.Component
  constructor: (props)-> super props
  render: ->
    console.log @props.uri
    <
    RN.Image source = {uri: @props.uri}
      mutable = {@props.mutable
    }
    style = {
      height: @props.height
      width: @props.width
    } / >


      export default Image
