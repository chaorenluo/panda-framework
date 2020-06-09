"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../locale/index.js");

var _default = {
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _index.t.apply(this, args);
    }
  }
};
exports.default = _default;