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

function* mySaga() {
    yield takeLatest(REDUX_SAGA_CONSTANTS.LIST.GET_LIST, getListSaga);
    yield takeEvery(REDUX_SAGA_CONSTANTS.LIST.ADD, addTask);
}

export default mySaga;