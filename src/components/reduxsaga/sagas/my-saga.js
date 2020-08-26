import { fork, take, call, takeLatest, delay, select, takeEvery, put} from 'redux-saga/effects'
import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';
import * as taskListAction from '../actions/task-list.action';
import * as taskApi from '../services/manage-task.service';
function * getListSaga() {
    const list = yield select(state => state.taskList);
    console.log('get let: ', list);
}

function * addTask({payload}) {
    try {
        const {task} = payload;
        const listTask = yield select(state => state.taskList);
        task.id = listTask[listTask.length - 1].id + 1;
        yield call(taskApi.addTask, task);
        yield put(taskListAction.addTaskSuccess(task));
    } catch (error) {
        yield put(taskListAction.addTaskFail(error));
    }

}

function * deleteTask({payload}) {
    console.log('vao day')
    try {
        const {id} = payload;
        yield call(taskApi.deleteTask, id);
        yield put(taskListAction.deleteTaskSuccess(id));
    } catch (error) {
        console.log(error);
        yield put(taskListAction.deleteTaskError(error));
    }
}

function * editTask({payload}) {
    try {
        let {task} = payload;
        yield call(taskApi.editTask, task);
        yield put(taskListAction.editTaskSuccess(task));
    } catch (error) {
        yield put(taskListAction.editTaskFail(error));
    }
}

function* mySaga() {
    yield takeLatest(REDUX_SAGA_CONSTANTS.LIST.GET_LIST, getListSaga);
    yield takeEvery(REDUX_SAGA_CONSTANTS.LIST.ADD, addTask);
    yield takeEvery(REDUX_SAGA_CONSTANTS.LIST.DELETE, deleteTask);
    yield takeEvery(REDUX_SAGA_CONSTANTS.LIST.EDIT_REQUEST, editTask);
}

export default mySaga;