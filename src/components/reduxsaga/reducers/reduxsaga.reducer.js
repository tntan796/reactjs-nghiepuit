import {combineReducers} from 'redux';
import taskListReducer from './task-list.reducer';
import popupReducer from './popup.reducer';
const reduxSagaReducer = combineReducers({
    taskList: taskListReducer,
    isPopup: popupReducer
});
export default reduxSagaReducer;