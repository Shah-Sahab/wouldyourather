import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../apis/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

export function handleInitialData() {
    return dispatch => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        });       
    };
}

