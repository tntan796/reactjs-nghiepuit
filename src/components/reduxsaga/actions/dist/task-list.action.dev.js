"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTaskError = exports.deleteTaskSuccess = exports.deleteTaskRequest = exports.editTaskFail = exports.editTaskSuccess = exports.editTaskRequest = exports.addTaskFail = exports.addTaskSuccess = exports.addTaskRequest = exports.getListByStatus = exports.getListRequest = exports.getListRequestFail = exports.getListRequestSuccess = exports.resetListTask = void 0;

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
    dispatch({
      type: _reduxsagaConstant["default"].LIST.GET_LIST
    });
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
  return {
    type: _reduxsagaConstant["default"].LIST.ADD,
    payload: {
      task: task
    }
  };
};

exports.addTaskRequest = addTaskRequest;

var addTaskSuccess = function addTaskSuccess(task) {
  _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.ADD_SUCCESSFUL);

  return {
    type: _reduxsagaConstant["default"].LIST.ADD_SUCCESS,
    payload: {
      task: task
    }
  };
};

exports.addTaskSuccess = addTaskSuccess;

var addTaskFail = function addTaskFail(error) {
  _toastMessage.ToastMessage.error(_reduxsagaConstant["default"].MESSAGE.ALERT.ADD_FAIL);

  return {
    type: _reduxsagaConstant["default"].LIST.ADD_FAIL,
    payload: {
      error: error
    }
  };
};

exports.addTaskFail = addTaskFail;

var editTaskRequest = function editTaskRequest(task) {
  return {
    type: _reduxsagaConstant["default"].LIST.EDIT_REQUEST,
    payload: {
      task: task
    }
  };
};

exports.editTaskRequest = editTaskRequest;

var editTaskSuccess = function editTaskSuccess(task) {
  _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.UPDATE_SUCCESSFUL);

  return {
    type: _reduxsagaConstant["default"].LIST.EDIT_SUCCESS,
    task: task
  };
};

exports.editTaskSuccess = editTaskSuccess;

var editTaskFail = function editTaskFail(error) {
  console.log('Delete Task Error:', error);

  _toastMessage.ToastMessage.error(_reduxsagaConstant["default"].MESSAGE.ALERT.UPDATE_FAIL);
};

exports.editTaskFail = editTaskFail;

var deleteTaskRequest = function deleteTaskRequest(id) {
  return {
    type: _reduxsagaConstant["default"].LIST.DELETE,
    payload: {
      id: id
    }
  };
};

exports.deleteTaskRequest = deleteTaskRequest;

var deleteTaskSuccess = function deleteTaskSuccess(id) {
  _toastMessage.ToastMessage.success(_reduxsagaConstant["default"].MESSAGE.ALERT.DELETE_SUCCESS);

  return {
    type: _reduxsagaConstant["default"].LIST.DELETE_SUCCESS,
    payload: {
      id: id
    }
  };
};

exports.deleteTaskSuccess = deleteTaskSuccess;

var deleteTaskError = function deleteTaskError(error) {
  console.log('Delete Task Error:', error);

  _toastMessage.ToastMessage.error(_reduxsagaConstant["default"].MESSAGE.ALERT.DELETE_FAIL);
};

exports.deleteTaskError = deleteTaskError;