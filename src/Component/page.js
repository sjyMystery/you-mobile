import React from 'react'
import * as style from '../style'
import {View} from 'react-native'
import {connect} from 'react-redux'

const Page = (m1, m2, WrappedPage) => {
    class wPage extends React.Component {


        render() {
            const MPage = connect(m1, m2)(WrappedPage);
            console.log(MPage);
            return (<View style={style.page.main}>
                <MPage style={{flex: 0}}/>
            </View>)
        }
    }

    return wPage
};
export default Page