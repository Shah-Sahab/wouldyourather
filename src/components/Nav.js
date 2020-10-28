import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleLogout } from '../actions/authedUser';

function Nav(props) {

    const { authedUser } = props;

    const handleLogout = () => {
        //dispaatch logout
        props.handleLogout();
        return <Redirect to='/' />
    };

    return (
        <nav className='app-nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/add' activeClassName='active'>
                        Add Poll
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>

                <li className='app-nav-item-right'>
                    {
                        authedUser && (<span style={{ backgroundColor: `#FFF`}}>
                            <span style={{color:`white`, fontWeight: `bold`}}>Logged In as: &nbsp;</span> &nbsp; {authedUser.name}
                        </span>)
                    }
                    &nbsp; 
                    {
                        authedUser && (<button className='btn-link' onClick={handleLogout}>logout</button>)
                    }
                </li>

            </ul>
        </nav>
    );
};

function mapStateToProps({ authedUserId, users }) {
    return {
        authedUser: users[authedUserId]
    }
}

export default connect(mapStateToProps, { handleLogout })(Nav);