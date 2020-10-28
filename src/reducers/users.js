import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_UPVOTE } from '../actions/questions';

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
        default:
            return state;
    }
}