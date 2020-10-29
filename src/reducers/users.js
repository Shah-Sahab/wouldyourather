import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_UPVOTE } from '../actions/questions';
import { ADD_QUESTION_TO_USER } from '../actions/questions';

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ANSWER_UPVOTE:
            const userId = action.authedUser.id;
            const qid = action.question.id;
            return {
                ...state,
                [userId]: {
                    ...state[userId], answers: {
                        ...state[userId].answers, [qid]: action.upvotedOption
                    }
                }
            };
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.authedUserId]: {
                    ...state[action.authedUserId], 
                    questions: state[action.authedUserId].questions.concat(action.question.id)
                }
            };
        default:
            return state;
    }
}