import { SET_AUTHED_USER } from '../actions/authedUser';

export default function(state = null, action) {
    console.log('SET_AUTHED_USER_ACTION INFO', action);
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.authedUser;
        default:
            return state;
    }
}