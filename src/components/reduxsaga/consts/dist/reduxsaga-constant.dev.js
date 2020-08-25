"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var REDUX_SAGA_CONSTANTS = {
  LIST: {
    RESET_LIST: 'reset list',
    GET_LIST_SUCCESS: 'get list sucess',
    GET_LIST_FAIL: 'get list fail',
    GET_LIST_BY_STATUS: 'get list by status',
    ADD: 'add item to list',
    EDIT: 'edit item to list',
    DELETE: 'delete item in list'
  },
  POPUP: {
    OPEN: 'open popup',
    CLOSE: 'close popup',
    TOGGLE: 'toggle popup'
  },
  FORM: {
    EDIT: 'edit task',
    ADD: 'add task'
  },
  MESSAGE: {
    ALERT: {
      ADD_SUCCESSFUL: 'Thêm mới thành công!',
      ADD_FAIL: 'Thêm mới thất bại!',
      UPDATE_SUCCESSFUL: 'Cập nhật thành công!',
      UPDATE_FAIL: 'Cập nhật thất bại!',
      DELETE_SUCCESS: 'Xóa thành công!',
      DELETE_FAIL: 'Xóa thất bại!'
    },
    CONFIRM: {
      DELETE: 'Bạn có chắc chắn muốn xóa?'
    }
  },
  CONFIG: {
    PRODUCT: {
      BASE_API_URL: 'https://tano-api.herokuapp.com'
    },
    DEVELOP: {
      BASE_API_URL: 'http://localhost:3100'
    }
  }
};
var _default = REDUX_SAGA_CONSTANTS;
exports["default"] = _default;