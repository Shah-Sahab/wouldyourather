import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionDetails from './QuestionDetails';
import PollsList from './PollsList';
import Login from './Login';
import AddQuestion from './AddQuestion';
import Nav from './Nav';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUserId } = this.props;
    return (
      <Router>
        <div className="App">
          <Nav />
          {authedUserId ? (
            <div>
              <Route path='/' exact component={PollsList} /> 
              <Route path='/question/:questionId' component={QuestionDetails} />
              <Route path='/add' component={AddQuestion} />
            </div>
          ) : (<Login />)}
        </div>
      </Router>

    );
  }
}

const mapStateToProps = ({ authedUserId }) => {
  return {
    authedUserId
  };
};

export default connect(mapStateToProps, { handleInitialData })(App);
