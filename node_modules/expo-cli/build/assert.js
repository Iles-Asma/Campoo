"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = assert;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(value, message) {
  // TODO: Remove after upgrading to `@types/node@^14`
  return (0, _assert().default)(value, message);
}
//# sourceMappingURL=assert.js.map