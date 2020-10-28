import React from 'react';
import { connect } from 'react-redux';

function Leaderboard({ userIds, users }) {
    return (
        <div>
            <ul>
                {
                    userIds.map((id, idx) => (
                        <li className="list-group-item" key={id}>
                            <h4>{idx + 1}. Name: {users[id].name}</h4> <br />
                            <span># of Questions asked: {users[id].questions.length}</span> <br />
                            <span># of Questions answered: {Object.keys(users[id].answers).length}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users).sort((a, b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length)),
        users
    };
}

export default connect(mapStateToProps)(Leaderboard);
