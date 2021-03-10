"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiV2WrapperMock = getApiV2WrapperMock;
exports.getAndroidApiMock = getAndroidApiMock;
exports.testAllCredentials = exports.testJester2AppCredentials = exports.testAppCredentials = exports.testPushCredentials = exports.testKeystore2 = exports.testKeystore = void 0;

function _merge() {
  const data = _interopRequireDefault(require("lodash/merge"));

  _merge = function () {
    return data;
  };

  return data;
}

function _mockBase64Data() {
  const data = require("./mock-base64-data");

  _mockBase64Data = function () {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const testKeystore = {
  keystore: _mockBase64Data().testKeystoreBase64,
  keystorePassword: 'ae6777e9444a436dbe533d2be46c83ba',
  keyAlias: 'QHdrb3p5cmEvY3JlZGVudGlhbHMtdGVzdA==',
  keyPassword: '43f760fe7ecd4e6a925779eb45bc787b'
};
exports.testKeystore = testKeystore;
const testKeystore2 = {
  keystore: _mockBase64Data().testKeystore2Base64,
  keystorePassword: '6faeed2326b94effadbeb731510c2378',
  keyAlias: 'QHdrb3p5cmEvY3JlZGVudGlhbHMtdGVzdA==',
  keyPassword: 'e4829b38057042d78f25053f390478f9'
};
exports.testKeystore2 = testKeystore2;
const testPushCredentials = {
  fcmApiKey: 'examplefcmapikey'
};
exports.testPushCredentials = testPushCredentials;
const testAppCredentials = {
  experienceName: _mocksConstants().testExperienceName,
  keystore: testKeystore,
  pushCredentials: testPushCredentials
};
exports.testAppCredentials = testAppCredentials;
const testJester2AppCredentials = {
  experienceName: _mocksConstants().testJester2ExperienceName,
  keystore: testKeystore2,
  pushCredentials: testPushCredentials
};
exports.testJester2AppCredentials = testJester2AppCredentials;
const testAllCredentials = {
  [_mocksConstants().testExperienceName]: testAppCredentials
};
exports.testAllCredentials = testAllCredentials;

function getApiV2WrapperMock(override = {}) {
  // by default all method throw exceptions to make sure that we only call what is expected
  const getUnexpectedCallMock = () => jest.fn(() => {
    throw new Error('unexpected call');
  });

  return (0, _merge().default)({
    getAllCredentialsApi: getUnexpectedCallMock(),
    getAllCredentialsForAppApi: getUnexpectedCallMock(),
    updateKeystoreApi: getUnexpectedCallMock(),
    updateFcmKeyApi: getUnexpectedCallMock(),
    removeKeystoreApi: getUnexpectedCallMock(),
    removeFcmKeyApi: getUnexpectedCallMock()
  }, override);
}

function getAndroidApiMock(override = {}) {
  return (0, _merge().default)({
    fetchAll: jest.fn(() => testAllCredentials),
    fetchKeystore: jest.fn(() => testKeystore),
    updateKeystore: jest.fn(),
    removeKeystore: jest.fn()
  }, override);
}
//# sourceMappingURL=mocks-android.js.map