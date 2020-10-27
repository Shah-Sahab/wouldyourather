import { _getQuestions, _saveQuestionAnswer } from '../apis/_DATA';
export const RECEIVE_QUESTION_DETAILS = 'RECEIVE_QUESTION_DETAILS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_UPVOTE = 'ANSWER_UPVOTE';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function handleGetQuestions() {
    return dispatch => {
        dispatch(_getQuestions()).then(questions => dispatch(receiveQuestions(questions)));
    };
}

function upvoteQuestionAnswer(question, upvotedOption, authedUser) {
    return {
        type: ANSWER_UPVOTE,
        question,
        upvotedOption,
        authedUser
    };
}

export function handleUpvoteQuestionAnswer(question, upvotedOption, authedUser) {
    return (dispatch) => {
        dispatch(upvoteQuestionAnswer(question, upvotedOption, authedUser));
        const info = { qid: question.id, authedUser: authedUser.id, answer: upvotedOption};
        return _saveQuestionAnswer(info).catch((e) => {
            console.warn('Error in the handleUpvoteQuestionAnswer: ', e);
            dispatch(upvoteQuestionAnswer); // To reset the tweet like back to the oppossite value.
            alert('There was an error upvoting an answer. Please try again.')
        });
    };
}