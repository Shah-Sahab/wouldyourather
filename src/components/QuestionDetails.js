import React from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';


const QuestionDetails = ({ authedUser, question, user, dispatch }) => {
    const { avatarURL, name } = user;
    const avatar = avatarURL;
    const isQuestionAnswered = Object.keys(authedUser.answers).includes(question.id);
    const pollComponent = isQuestionAnswered ? <UnansweredQuestion authedUser={authedUser} question={question} dispatch={dispatch} /> : <AnsweredQuestion />;
    return (
        <div>
            <div className="poll-info">
                <div className='poll'>
                    <div className="col-lg">
                        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
                        <span style={{ color: `black`, fontWeight: `unset`, fontSize: `22px` }}>Would You Rather</span>
                        { pollComponent }
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
    const { questionId } = props.match.params;
    const question = questions[questionId];
    return {
        id: questionId,
        question,
        user: users[question.author],
        authedUser
    };
};

export default connect(mapStateToProps)(QuestionDetails);