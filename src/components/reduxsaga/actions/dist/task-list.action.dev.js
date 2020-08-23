"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTask = exports.deleteTaskRequest = exports.editTask = exports.editTaskRequest = exports.addTask = exports.addTaskRequest = exports.getListByStatus = exports.getList = exports.getListRequest = void 0;

var _reduxsagaConstant = _interopRequireDefault(require("../consts/reduxsaga-constant"));

var _apiCaller = _interopRequireDefault(require("../../connect-api/utils/apiCaller.utils"));

var _toastMessage = require("../utils/toast-message.helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getListRequest = function getListRequest() {
  return function (dispatch) {
    return (0, _apiCaller["default"])('tasks', 'GET', null).then(function (result) {
      dispatch(getList(result.data));
    })["catch"](function (error) {
      _toastMessage.ToastMessage.error('Get list request fail!');
    });
  };
};

exports.getListRequest = getListRequest;

var getList = function getList(tasks) {
  return {
    type: _reduxsagaConstant["default"].LIST.GET_LIST,
    tasks: tasks
  };
};

exports.getList = getList;

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