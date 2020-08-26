"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxsagaConstant = _interopRequireDefault(require("../consts/reduxsaga-constant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      state = action.payload.error;
      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.ADD_SUCCESS:
      state.push(action.payload.task);
      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.EDIT_SUCCESS:
      var taskIndex = state.findIndex(function (t) {
        return t.id === action.task.id;
      });

      if (taskIndex !== -1) {
        state[taskIndex].title = action.task.title;
        state[taskIndex].description = action.task.description;
        state[taskIndex].status = action.task.status;
        state[taskIndex] = _objectSpread({}, state[taskIndex]);
      }

      return _toConsumableArray(state);

    case _reduxsagaConstant["default"].LIST.GET_LIST_BY_STATUS:
      return _toConsumableArray(state.filter(function (t) {
        return t.status === action.status;
      }));

    case _reduxsagaConstant["default"].LIST.DELETE_SUCCESS:
      return _toConsumableArray(state.filter(function (t) {
        return t.id !== action.payload.id;
      }));

    default:
      return _toConsumableArray(state);
  }
};

var _default = taskListReducer;
exports["default"] = _default;