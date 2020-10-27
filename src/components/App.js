import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionDetails from './QuestionDetails';
import PollsList from './PollsList';
import Login from './Login';
import Nav from './Nav';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          <Nav />
          {authedUser ? (
            <div>
              <Route path='/' exact component={PollsList} /> 
              <Route path='/question/:questionId' component={QuestionDetails} />
            </div>
          ) : (<Login />)}
        </div>
      </Router>

    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps, { handleInitialData })(App);
