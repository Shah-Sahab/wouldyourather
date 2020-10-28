export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOG_OUT = 'LOG_OUT';

export function handleSetAuthUser(authedUserId) {
    return {
        type: SET_AUTHED_USER,
        authedUserId
    };
}

export function handleLogout(authedUserId = null) {
    return {
        type: LOG_OUT,
        authedUserId
    };
}