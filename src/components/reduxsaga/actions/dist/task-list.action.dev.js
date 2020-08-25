"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTask = exports.deleteTaskRequest = exports.editTask = exports.editTaskRequest = exports.addTask = exports.addTaskRequest = exports.getListByStatus = exports.getListRequest = exports.getListRequestFail = exports.getListRequestSuccess = exports.resetListTask = void 0;

var _reduxsagaConstant = _interopRequireDefault(require("../consts/reduxsaga-constant"));

var _apiCaller = _interopRequireDefault(require("../../connect-api/utils/apiCaller.utils"));

var _toastMessage = require("../utils/toast-message.helper");

var taskApi = _interopRequireWildcard(require("../services/manage-task.service"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resetListTask = function resetListTask() {
  return {
    type: _reduxsagaConstant["default"].LIST.RESET_LIST
  };
};

exports.resetListTask = resetListTask;

var getListRequestSuccess = function getListRequestSuccess(tasks) {
  return {
    type: _reduxsagaConstant["default"].LIST.GET_LIST_SUCCESS,
    payload: {
      tasks: tasks
    }
  };
};

exports.getListRequestSuccess = getListRequestSuccess;

var getListRequestFail = function getListRequestFail(error) {
  return {
    type: _reduxsagaConstant["default"].LIST.GET_LIST_FAIL,
    payload: {
      error: error
    }
  };
};

exports.getListRequestFail = getListRequestFail;

var getListRequest = function getListRequest() {
  return function (dispatch) {
    dispatch(resetListTask());
    taskApi.fetchListTask().then(function (result) {
      dispatch(getListRequestSuccess(result.data));
    })["catch"](function (error) {
      dispatch(getListRequestFail(error));
    });
  };
};

exports.getListRequest = getListRequest;

var getListByStatus = function getListByStatus(status) {
  return {
    type: _reduxsagaConstant["default"].LIST.GET_LIST_BY_STATUS,
    status: status
  };
};

exports.getListByStatus = getListByStatus;

var addTaskRequest = function addTaskRequest(task) {
  return function (dispatch) {
    (0, _apiCaller["default"])('tasks/add', 'POST', task).then(function (res) {
      _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.ADD_SUCCESSFUL);

      dispatch(addTask(task));
    })["catch"](function (error) {
      _toastMessage.ToastMessage.error(_reduxsagaConstant["default"].MESSAGE.ALERT.ADD_FAIL);
    });
  };
};

exports.addTaskRequest = addTaskRequest;

var addTask = function addTask(task) {
  return {
    type: _reduxsagaConstant["default"].LIST.ADD,
    task: task
  };
};

exports.addTask = addTask;

var editTaskRequest = function editTaskRequest(task) {
  return function (dispatch) {
    (0, _apiCaller["default"])('tasks/edit' + task.id, 'POST', null).then(function (res) {
      _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.UPDATE_SUCCESSFUL);

      dispatch(editTask(res.data));
    })["catch"](function (error) {
      _toastMessage.ToastMessage.error(_reduxsagaConstant["default"].MESSAGE.ALERT.UPDATE_FAIL);
    });
  };
};

exports.editTaskRequest = editTaskRequest;

var editTask = function editTask(task) {
  return {
    type: _reduxsagaConstant["default"].LIST.EDIT,
    task: task
  };
};

exports.editTask = editTask;

var deleteTaskRequest = function deleteTaskRequest(id) {
  return function (dispatch) {
    (0, _apiCaller["default"])('tasks/delete/' + id, 'DELETE').then(function (res) {
      _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.DELETE_SUCCESS);

      dispatch(deleteTask(id));
    })["catch"](function (error) {
      _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.DELETE_FAIL);
    });
  };
};

exports.deleteTaskRequest = deleteTaskRequest;

var deleteTask = function deleteTask(id) {
  return {
    type: _reduxsagaConstant["default"].LIST.DELETE,
    id: id
  };
};

exports.deleteTask = deleteTask;