import React, { useState } from 'react';
import { connect } from 'react-redux';
import './toggle.css';

function PollsList(props) {
    const { answeredQuestionIds, unansweredQuestionIds, questions } = props;
    const pollTextObj = { true: 'Showing answered polls', false: 'Showing unanswered polls' };
    const pollBasedIds = { true: unansweredQuestionIds, false: answeredQuestionIds };
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState(pollTextObj[false]);
    const [ids, setIds] = useState(pollBasedIds[false]);
    const handleCheckChange = (e) => {
        setToggle(!toggle);
        setMessage(pollTextObj[!toggle]);
        setIds(pollBasedIds[!toggle]);
    }

    const handleLiClick = (event) => {
        // console.log('event target Parent Node ID', event.target.parentNode.id);
        console.log('event target current Target ID', event.currentTarget.id);
        props.history.push(`/question/${event.currentTarget.id}`);
    };

    return (
        <div className='container'>
            <div className='flex-container'>
                <label htmlFor='togglePolls'>{message}</label> &nbsp;
                <label className='switch'>
                    <input id='togglePolls' name='togglePolls' type='checkbox' value={toggle} onClick={e => handleCheckChange(e)}></input>
                    <span className='slider round'></span>
                </label>
            </div>

            <ul>
                {
                    ids.map(id => (
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
    const { authedUser, questions } = state;
    const answeredQuestionIds = Object.keys(authedUser.answers);
    const keys = Object.keys(questions);
    const unansweredQuestionIds = keys.filter(questionId => !answeredQuestionIds.includes(questionId));
    return {
        answeredQuestionIds,
        unansweredQuestionIds,
        questions
    };
}

export default connect(mapStateToPropss)(PollsList);