"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _reduxsagaConstant = _interopRequireDefault(require("../consts/reduxsaga-constant"));

var taskListAction = _interopRequireWildcard(require("../actions/task-list.action"));

var taskApi = _interopRequireWildcard(require("../services/manage-task.service"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getListSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(addTask),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(deleteTask),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(editTask),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(mySaga);

function getListSaga() {
  var list;
  return regeneratorRuntime.wrap(function getListSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(function (state) {
            return state.taskList;
          });

        case 2:
          list = _context.sent;
          console.log('get let: ', list);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function addTask(_ref) {
  var payload, task, listTask;
  return regeneratorRuntime.wrap(function addTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref.payload;
          _context2.prev = 1;
          task = payload.task;
          _context2.next = 5;
          return (0, _effects.select)(function (state) {
            return state.taskList;
          });

        case 5:
          listTask = _context2.sent;
          task.id = listTask[listTask.length - 1].id + 1;
          _context2.next = 9;
          return (0, _effects.call)(taskApi.addTask, task);

        case 9:
          _context2.next = 11;
          return (0, _effects.put)(taskListAction.addTaskSuccess(task));

        case 11:
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 17;
          return (0, _effects.put)(taskListAction.addTaskFail(_context2.t0));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 13]]);
}

function deleteTask(_ref2) {
  var payload, id;
  return regeneratorRuntime.wrap(function deleteTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref2.payload;
          console.log('vao day');
          _context3.prev = 2;
          id = payload.id;
          _context3.next = 6;
          return (0, _effects.call)(taskApi.deleteTask, id);

        case 6:
          _context3.next = 8;
          return (0, _effects.put)(taskListAction.deleteTaskSuccess(id));

        case 8:
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
          _context3.next = 15;
          return (0, _effects.put)(taskListAction.deleteTaskError(_context3.t0));

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 10]]);
}

function editTask(_ref3) {
  var payload, task;
  return regeneratorRuntime.wrap(function editTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref3.payload;
          _context4.prev = 1;
          task = payload.task;
          _context4.next = 5;
          return (0, _effects.call)(taskApi.editTask, task);

        case 5:
          _context4.next = 7;
          return (0, _effects.put)(taskListAction.editTaskSuccess(task));

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 13;
          return (0, _effects.put)(taskListAction.editTaskFail(_context4.t0));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[1, 9]]);
}

function mySaga() {
  return regeneratorRuntime.wrap(function mySaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeLatest)(_reduxsagaConstant["default"].LIST.GET_LIST, getListSaga);

        case 2:
          _context5.next = 4;
          return (0, _effects.takeEvery)(_reduxsagaConstant["default"].LIST.ADD, addTask);

        case 4:
          _context5.next = 6;
          return (0, _effects.takeEvery)(_reduxsagaConstant["default"].LIST.DELETE, deleteTask);

        case 6:
          _context5.next = 8;
          return (0, _effects.takeEvery)(_reduxsagaConstant["default"].LIST.EDIT_REQUEST, editTask);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _default = mySaga;
exports["default"] = _default;