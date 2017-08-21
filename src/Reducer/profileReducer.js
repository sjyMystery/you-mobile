import * as Actions from '../Actions'

const initialProfileState = {
    home: {}
};
const assign = (previous, next) => {
    return Object.assign({}, previous, next)
};

const updateHomeProfile = (state, home) => {
    return assign(state, {home: home})
};

const editProfile = (state,item,value) =>{
    let new_home_profile=Object.assign({},state.home)
    new_home_profile[item]=value
    let a=assign(state,{home:new_home_profile})
    console.log("editprofile",a)
    return a
}

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case Actions.UPDATE_HOME_PROFILE: {
            console.log("action.profile", action.profile);
            return updateHomeProfile(state, action.profile)
        }
        case Actions.EDIT_PROFILE:{
            return editProfile(state,action.item,action.value)
        }
        default: {
            return state
        }
    }
};

export default ProfileReducer