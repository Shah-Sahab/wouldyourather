import { RECEIVE_QUESTIONS, ANSWER_UPVOTE } from '../actions/questions';

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
                ...state, [qid] : {
                    ...state[qid],  [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([action.authedUser.id])
                    }
                }
            };
        default:
            return state;
    }
}