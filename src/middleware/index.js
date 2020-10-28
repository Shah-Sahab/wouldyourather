import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import updateUsers from './updateUsers';

export default applyMiddleware(
    thunk,
    logger,
    // updateUsers
);


