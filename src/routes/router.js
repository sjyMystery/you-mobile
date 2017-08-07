/**
 * Created by 34883 on 2017-08-01.
 */
import {Router} from 'react-native-router-flux'
import {connect} from 'react-redux'

const ReduxRouter = connect((state) => ({state : state.route}))(Router);

export default ReduxRouter;