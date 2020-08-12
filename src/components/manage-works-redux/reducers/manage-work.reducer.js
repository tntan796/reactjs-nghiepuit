import {combineReducers } from 'redux';
import workListReduxReducer from './work-list-redux.reducer';
import toggleFormReducer from './toggleForm.reducer';
import workEditReducer from './work-edit.reducer';
import filterTableReducer from './filter-table.reducer';
const myReducer = combineReducers({
    works: workListReduxReducer,
    isDisplayForm: toggleFormReducer,
    itemEdit: workEditReducer,
    filter: filterTableReducer
});

export default myReducer;