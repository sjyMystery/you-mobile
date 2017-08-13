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

const ProfileReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case Actions.UPDATE_HOME_PROFILE: {
            console.log("action.profile", action.profile);
            return updateHomeProfile(state, action.profile)
        }
        default: {
            return state
        }
    }
};

export default ProfileReducer