// import { fork, take, call, takeLatest, delay, select } from 'redux-saga/effects'
// import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';

// function * getListSaga() {
//     yield delay(5000);
//     const list = yield select(state => state.taskList);
//     console.log('get let: ', list);
// }

function* mySaga() {
    // yield takeLatest(REDUX_SAGA_CONSTANTS.LIST.GET_LIST, getListSaga);
}

export default mySaga;