import {combineReducers} from 'redux';
import taskListReducer from './task-list.reducer';
import popupReducer from './popup.reducer';
import formReducer from './form.reducer';
const reduxSagaReducer = combineReducers({
    taskList: taskListReducer,
    isPopup: popupReducer,
    task: formReducer
});
export default reduxSagaReducer;