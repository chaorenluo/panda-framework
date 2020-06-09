"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.t = void 0;

var _enUS = _interopRequireDefault(require("./lang/en-US"));

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var _vue = _interopRequireDefault(require("vue"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigatorLanguage = navigator.language || navigator.userLanguage;
var lang = navigatorLanguage === 'en-US' ? _enUS.default : _zhCN.default;
var merged = false;

var i18nHandler = function i18nHandler() {
  var vuei18n = Object.getPrototypeOf(this || _vue.default).$t; // 兼容外部的i18n

  if (typeof vuei18n === 'function' && _vue.default.locale) {
    if (!merged) {
      merged = true;

      _vue.default.locale(_vue.default.config.lang, (0, _deepmerge.default)(lang, _vue.default.locale(_vue.default.config.lang) || {}, {
        clone: true
      }));
    }

    return vuei18n.apply(this, arguments);
  }
};

var t = function t(path, options) {
  var value = i18nHandler.apply(this, arguments);

  if (value !== null && value !== undefined) {
    return value;
  }

  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];

    if (i === j - 1) {
      return value;
    }

    if (!value) {
      return '';
    }

    current = value;
  }

  return '';
};

exports.t = t;

var use = function use(l) {
  lang = {} || lang;
};

var i18n = function i18n(fn) {
  i18nHandler = fn || i18nHandler;
};

var _default = {
  use: use,
  i18n: i18n,
  t: t
};
exports.default = _default;