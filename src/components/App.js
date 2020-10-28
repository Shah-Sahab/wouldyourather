import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionDetails from './QuestionDetails';
import PollsList from './PollsList';
import Login from './Login';
import AddQuestion from './AddQuestion';
import PageNotFound from './PageNotFound';
import Leaderboard from './Leaderboard';
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
              <Switch>
                <Route path='/' exact component={PollsList} />
                <Route path='/question/:questionId' component={QuestionDetails} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/Leaderboard' component={Leaderboard} />
                {/* add 404 page  */}
                <Route path="*" component={PageNotFound} />
                <Route path="/404" component={PageNotFound} />
              </Switch>

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
