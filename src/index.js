import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
// import myReducer from './components/manage-works-redux/reducers/manage-work.reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reduxSagaReducer from './components/reduxsaga/reducers/reduxsaga.reducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './components/reduxsaga/sagas/my-saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reduxSagaReducer, applyMiddleware(thunk, sagaMiddleware));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
sagaMiddleware.run(mySaga)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
