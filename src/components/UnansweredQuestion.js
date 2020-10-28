import React, { useState } from 'react';
import { BiUpvote } from "react-icons/bi";
import { handleUpvoteQuestionAnswer } from '../actions/questions';

function UnansweredQuestion({ authedUser, question, dispatch }) {
    const [option1CSS, setOption1CSS] = useState('hide');
    const [option2CSS, setOption2CSS] = useState('hide');
    const handleUpvote = (e) => {
        if (e.currentTarget.id === 'optionOne') {
            setOption1CSS('show');
            setOption2CSS('hide');
        } else {
            setOption1CSS('hide');
            setOption2CSS('show');
        }
        dispatch(handleUpvoteQuestionAnswer(question, e.currentTarget.id, authedUser));
    };
    return (
        <div className="col">
            <ol>
                <li className="list-group-item btn" key={1} id='optionOne' onClick={e => handleUpvote(e)}>
                    1. {question.optionOne.text} <BiUpvote className={option1CSS} />
                </li>
                <li className="list-group-item btn" key={2} id='optionTwo' onClick={e => handleUpvote(e)}>
                    2. {question.optionTwo.text} <BiUpvote className={option2CSS} />
                </li>
            </ol>
        </div>
    );
}

export default UnansweredQuestion;