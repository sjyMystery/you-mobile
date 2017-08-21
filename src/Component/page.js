import React,{Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import * as style from '../style'
import Header from './Header'
import AddSideMenu from './AddSideMenu'
import * as Actions from '../Actions'
import {bindActionCreators} from 'redux'
const Pure = (m1, m2, WrappedPage,header=null,footer=null,drawer=null) => {
    class wPage extends Component {


        renderElement(view)
        {
            if(React.isValidElement(view)) {
                let props=Object.assign({},view.props,this.props)
                return <view.type {...props}/>
            }
            else
            {
                return <View></View>
            }

        }


        render() {

            return (<View style={style.page.main}>
                {
                    this.renderElement(header)
                }
                <WrappedPage style={{flex: 0}} {...this.props}/>
                {
                    this.renderElement(footer)
                }
                {
                    this.renderElement(drawer)
                }
            </View>)
        }
    }
    selectActions = (dispatch)=>{
        return Object.assign({},m2(dispatch),bindActionCreators({pop:Actions.pop},dispatch))
    }


    return connect(m1,selectActions)(wPage)
};
const WithSideMenu =(m1,m2,page)=>AddSideMenu(Pure(m1,m2,page))
const WithHeader = (m1,m2,page,left=null,center=null,right=null)=>Pure(m1,m2,page,<Header.Pure left={left} right={right} center={center}/>)
const WithHeaderNav = (m1,m2,page,right=null,onpressright=null)=>Pure(m1,m2,page,<Header.Nav right={right} onPressRight={onpressright}/>)
export default {WithHeader,WithHeaderNav,Pure,WithSideMenu}