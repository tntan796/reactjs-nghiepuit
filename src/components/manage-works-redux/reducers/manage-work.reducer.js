import {combineReducers } from 'redux';
import workListReduxReducer from './work-list-redux.reducer';
import toggleFormReducer from './toggleForm.reducer';

const myReducer = combineReducers({
    works: workListReduxReducer,
    isDisplayForm: toggleFormReducer
});

export default myReducer;