##This file gives an example for creating a page
import {Page} from '../Component'
import React from 'react'
import {bindActionCreators} from 'redux'
import View from 'react-native'
import {Image} from '../Component'

import * as style from '../style'


class ImagePlayer extends React.Component
  render = ()=>
    <Image
      height = {style.device.width}
      width = {style.device.width}
      {...@props}
    > </Image>

selectProps = (state) =>{}
selectActions = (dispatch) => bindActionCreators({}, dispatch)

export default Page.Pure(selectProps, selectActions, myPage)
