"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCtxMock = getCtxMock;

function _merge() {
  const data = _interopRequireDefault(require("lodash/merge"));

  _merge = function () {
    return data;
  };

  return data;
}

function _mocksAndroid() {
  const data = require("./mocks-android");

  _mocksAndroid = function () {
    return data;
  };

  return data;
}

function _mocksConstants() {
  const data = require("./mocks-constants");

  _mocksConstants = function () {
    return data;
  };

  return data;
}

function _mocksIos() {
  const data = require("./mocks-ios");

  _mocksIos = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCtxMock(mockOverride = {}) {
  const defaultMock = {
    ios: (0, _mocksIos().getIosApiMock)(),
    android: (0, _mocksAndroid().getAndroidApiMock)(),
    appleCtx: _mocksIos().appleCtxMock,
    ensureAppleCtx: jest.fn(),
    user: {
      username: _mocksConstants().testUsername
    },
    hasAppleCtx: jest.fn(() => true),
    hasProjectContext: true,
    manifest: _mocksConstants().testAppJson,
    projectDir: '.'
  };
  return (0, _merge().default)(defaultMock, mockOverride);
}
//# sourceMappingURL=mocks-context.js.map