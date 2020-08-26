"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editTask = exports.deleteTask = exports.addTask = exports.fetchListTask = void 0;

var _apiCaller = _interopRequireDefault(require("../utils/apiCaller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchListTask = function fetchListTask() {
  return _apiCaller["default"].get("tasks");
};

exports.fetchListTask = fetchListTask;

var addTask = function addTask(task) {
  return _apiCaller["default"].post('tasks/add', task);
};

exports.addTask = addTask;

var deleteTask = function deleteTask(id) {
  return _apiCaller["default"]["delete"]("tasks/delete/".concat(id));
};

exports.deleteTask = deleteTask;

var editTask = function editTask(task) {
  return _apiCaller["default"].post("tasks/edit", task);
};

exports.editTask = editTask;