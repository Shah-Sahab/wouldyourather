import { RECEIVE_QUESTIONS, ANSWER_UPVOTE, ADD } from '../actions/questions';

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_UPVOTE:
            const qid = action.question.id;
            const answer = action.upvotedOption;
            return {
                ...state, [qid]: {
                    ...state[qid], [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([action.authedUser.id])
                    }
                }
            };
        case ADD:
            return {
                ...state, [action.question.id]: {
                    ...action.question
                }
            };
        default:
            return state;
    }
}