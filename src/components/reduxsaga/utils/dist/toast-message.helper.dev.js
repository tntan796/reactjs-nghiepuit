"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastMessage = void 0;

var _reactToastify = require("react-toastify");

var ToastMessage = {
  success: function success(message) {
    _reactToastify.toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  },
  error: function error(message) {
    _reactToastify.toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  },
  warning: function warning(message) {
    _reactToastify.toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  },
  info: function info(message) {
    _reactToastify.toast.info(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }
};
exports.ToastMessage = ToastMessage;