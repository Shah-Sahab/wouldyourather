import React from 'react';
import { BiUpvote } from "react-icons/bi";

function AnsweredQuestion({ authedUser, question, totalUsers }) {
    let option1CSS, option2CSS = false;
    let option1Content, option2Content = null;
    if (authedUser.answers[question.id] === 'optionOne') {
        option1CSS = 'show';
        option2CSS = 'hide';
        option1Content = 'selected';
        option2Content = null;
    } else {
        option2CSS = 'show';
        option1CSS = 'hide';
        option2Content = 'selected';
        option1Content = null;
    }

    return (
        <div className="col">
            <ol>
                <li className="list-group-item" key={1} id='optionOne'>
                    <h5>1. {question.optionOne.text} <BiUpvote className={option1CSS} /> {option1Content && (<span style={{backgroundColor:`greenyellow`}}>{option1Content}</span>)} </h5>
                    <PeopleVoteAndPercentage votes={question.optionOne.votes.length} totalUsers={totalUsers} />
                </li>
                <li className="list-group-item" key={2} id='optionTwo'>
                    <h5> 2. {question.optionTwo.text} <BiUpvote className={option2CSS} /> {option2Content && (<span style={{backgroundColor:`greenyellow`}}>{option2Content}</span>)}</h5>
                    <PeopleVoteAndPercentage votes={question.optionTwo.votes.length} totalUsers={totalUsers} />
                </li>
            </ol>
        </div>
    );
}

function PeopleVoteAndPercentage({votes, totalUsers}) {
    return (
        <div>
            <h6>
                # of people voted: {votes}
            </h6>
            <h6>
                % of people voted: { (votes / totalUsers * 100).toFixed(2) }
            </h6>
        </div>
    );
}

export default AnsweredQuestion;
