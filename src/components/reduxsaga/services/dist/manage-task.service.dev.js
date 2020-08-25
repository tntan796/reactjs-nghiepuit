"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchListTask = void 0;

var _apiCaller = _interopRequireDefault(require("../utils/apiCaller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchListTask = function fetchListTask() {
  return _apiCaller["default"].get("tasks");
};

exports.fetchListTask = fetchListTask;