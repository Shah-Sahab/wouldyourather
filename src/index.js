import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers';
import middleware from './middleware';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer, middleware);
const connectedApp = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(
  connectedApp,
  document.getElementById('root')
);
