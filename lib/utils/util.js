"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateId = void 0;

var generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};

exports.generateId = generateId;