"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxsagaConstant = _interopRequireDefault(require("../consts/reduxsaga-constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = [];

var taskListReducer = function taskListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _reduxsagaConstant["default"].LIST.RESET_LIST:
      state = initialState;
      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.GET_LIST_SUCCESS:
      state = action.payload.tasks;
      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.GET_LIST_FAIL:
      state = action.payload.tasks;
      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.ADD:
      action.task.id = state[state.length - 1].id + 1;
      state.push(action.task);
      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.EDIT:
      var taskIndex = state.findIndex(function (t) {
        return t.id === action.task.id;
      });

      if (taskIndex !== -1) {
        state[taskIndex].title = action.task.title;
        state[taskIndex].description = action.task.description;
        state[taskIndex].status = action.task.status;
      }

      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.GET_LIST_BY_STATUS:
      return _toConsumableArray(state.filter(function (t) {
        return t.status === action.status;
      }));

    case _reduxsagaConstant["default"].LIST.DELETE:
      return _toConsumableArray(state.filter(function (t) {
        return t.id !== action.id;
      }));

    default:
      return _toConsumableArray(state);
  }
};

var _default = taskListReducer;
exports["default"] = _default;