"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(mySaga);

// import { fork, take, call, takeLatest, delay, select } from 'redux-saga/effects'
// import REDUX_SAGA_CONSTANTS from '../consts/reduxsaga-constant';
// function * getListSaga() {
//     yield delay(5000);
//     const list = yield select(state => state.taskList);
//     console.log('get let: ', list);
// }
function mySaga() {
  return regeneratorRuntime.wrap(function mySaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var _default = mySaga;
exports["default"] = _default;