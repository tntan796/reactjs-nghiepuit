import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
// import myReducer from './components/manage-works-redux/reducers/manage-work.reducer';
import { Provider } from 'react-redux';
import connectApiReducer from './components/connect-api/reducers/connect-api.reducer';
import thunk from 'redux-thunk';
const store = createStore(connectApiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
