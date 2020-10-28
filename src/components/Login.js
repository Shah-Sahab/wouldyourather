import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleSetAuthUser } from '../actions/authedUser';
import { isObjectEmpty } from '../utils/util';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: '-1'
        };
    }

    render() {
        const { loading } = this.props;
        return (
            <Fragment>
                <LoadingBar />
                <div className='container'>
                    {loading === true ? null : this.createForm()}
                </div>
            </Fragment>
        );
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (this.state.selectedUser === "-1") {
            return alert('Please select a user first. Thank you!');
        }
        // this.props.dispatch(handleSetAuthUser(this.props.users[this.state.selectedUser]));
        this.props.dispatch(handleSetAuthUser(this.state.selectedUser));
    }

    handleSelectionChange = (event) => {
        this.setState({ selectedUser: event.target.value });
    }

    createForm() {
        const { users, userKeys } = this.props;
        
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label htmlFor='users'>Please select a User</label>
                    <br />
                    <select id='users' name='usersList' onChange={this.handleSelectionChange}>
                        <option value="-1" key="-1" defaultValue> Please select an option </option>
                        {userKeys.map(id => (
                            <option key={id} value={id}>{users[id].name}</option>
                        ))}
                    </select>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        loading: isObjectEmpty(users),
        users,
        userKeys: Object.keys(users)
    };
}

export default connect(mapStateToProps)(Login);