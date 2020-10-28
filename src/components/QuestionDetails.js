import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';

const QuestionDetails = ({ authedUser, question, user, totalUsers, dispatch, questionNotFound }) => {
    if (questionNotFound) {
        return <Redirect to='/404' />;
    }

    const { avatarURL, name } = user;
    const isQuestionAnswered = Object.keys(authedUser.answers).includes(question.id);
    const answeredComponent = <AnsweredQuestion authedUser={authedUser} question={question} totalUsers={totalUsers} />;
    const unansweredComponent = <UnansweredQuestion authedUser={authedUser} question={question} dispatch={dispatch} />;
    const pollComponent = !isQuestionAnswered ?  unansweredComponent : answeredComponent; 
    return (
        <div>
            <div className="poll-info">
                <div className='poll'>
                    <div className="col-lg">
                        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
                        <span style={{ color: `black`, fontWeight: `unset`, fontSize: `22px` }}>Would You Rather</span>
                        { pollComponent }
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ questions, users, authedUserId }, props) => {
    const { questionId } = props.match.params;
    const question = questions[questionId];
    return {
        id: questionId,
        question,
        user: question ? users[question.author] : null,
        authedUser: users[authedUserId],
        totalUsers: Object.keys(users).length,
        questionNotFound: question ? false : true
    };
};

export default connect(mapStateToProps)(QuestionDetails);