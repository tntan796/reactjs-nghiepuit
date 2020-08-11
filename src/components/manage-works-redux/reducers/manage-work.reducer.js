import {combineReducers } from 'redux';
import workListReduxReducer from './work-list-redux.reducer';

const myReducer = combineReducers({
    works: workListReduxReducer
});

export default myReducer;