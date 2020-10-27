export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function handleSetAuthUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser
    };
}

export function handleLogout(authedUser = null) {
    return {
        type: SET_AUTHED_USER,
        authedUser
    };
}