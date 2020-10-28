import { SET_AUTHED_USER, LOG_OUT } from '../actions/authedUser';

export default function(state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.authedUserId;
        case LOG_OUT:
            return action.authedUserId;
        default:
            return state;
    }
}