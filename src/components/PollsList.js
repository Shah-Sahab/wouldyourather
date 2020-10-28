import React, { useState } from 'react';
import { connect } from 'react-redux';
import './toggle.css';

function PollsList(props) {
    const { answeredQuestionIds, unansweredQuestionIds, questions } = props;
    const pollTextObj = { true: 'Showing answered polls', false: 'Showing unanswered polls' };
    const pollBasedIds = { true: answeredQuestionIds, false: unansweredQuestionIds };
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState(pollTextObj[false]);
    const handleToggleChange = (e) => {
        setToggle(!toggle);
        setMessage(pollTextObj[!toggle]);
    }

    const handleLiClick = (event) => {
        props.history.push(`/question/${event.currentTarget.id}`);
    };

    return (
        <div className='container'>
            <div className='flex-container'>
                <label htmlFor='togglePolls'>{message}</label> &nbsp;
                <label className='switch'>
                    <input id='togglePolls' name='togglePolls' type='checkbox' value={toggle} onClick={e => handleToggleChange(e)}></input>
                    <span className='slider round'></span>
                </label>
            </div>

            <ul>
                {
                    pollBasedIds[toggle].map(id => (
                        <li id={id} key={id} onClick={e => handleLiClick(e)}>
                            <div className='container' style={{ border: `1px dashed yellowGreen` }}>
                                <h5 style={{alignContent:`center`}}>Would You Rather???</h5>
                                <span>1. {questions[id].optionOne.text}</span>
                                <br />
                                <span>2. {questions[id].optionTwo.text}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

function mapStateToPropss(state) {
    const { authedUserId, questions, users } = state;
    const answeredQuestionIds = Object.keys(users[authedUserId].answers).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const keys = Object.keys(questions);
    const unansweredQuestionIds = keys.filter(questionId => !answeredQuestionIds.includes(questionId)).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    return {
        answeredQuestionIds,
        unansweredQuestionIds,
        questions
    };
}

export default connect(mapStateToPropss)(PollsList);