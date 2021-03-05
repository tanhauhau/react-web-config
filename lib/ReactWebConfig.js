"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactWebConfig = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _dotenv = require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactWebConfig = function ReactWebConfig(path) {
  var env = (0, _dotenv.config)({
    path: path
  }).parsed;
  return new _webpack["default"].DefinePlugin({
    '__REACT_WEB_CONFIG__': JSON.stringify(env)
  });
};

exports.ReactWebConfig = ReactWebConfig;