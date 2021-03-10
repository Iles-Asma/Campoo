"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.askForSendToAsync = askForSendToAsync;

function _xdl() {
  const data = require("@expo/xdl");

  _xdl = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("./log"));

  _log = function () {
    return data;
  };

  return data;
}

function _prompts() {
  const data = require("./prompts");

  _prompts = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function askForSendToAsync() {
  const cachedValue = await _xdl().UserSettings.getAsync('sendTo', null);

  _log().default.nested("Enter an email address and we'll send a link");

  const recipient = await (0, _prompts().promptEmailAsync)({
    message: `Email address`,
    initial: cachedValue !== null && cachedValue !== void 0 ? cachedValue : undefined
  }, {
    nonInteractiveHelp: 'Please specify email address with --send-to.'
  });
  await _xdl().UserSettings.mergeAsync({
    sendTo: recipient
  });
  return recipient;
}
//# sourceMappingURL=askUser.js.map