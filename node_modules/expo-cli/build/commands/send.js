"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _xdl() {
  const data = require("@expo/xdl");

  _xdl = function () {
    return data;
  };

  return data;
}

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _askUser() {
  const data = require("../askUser");

  _askUser = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("../log"));

  _log = function () {
    return data;
  };

  return data;
}

function sendTo() {
  const data = _interopRequireWildcard(require("../sendTo"));

  sendTo = function () {
    return data;
  };

  return data;
}

function _urlOpts() {
  const data = _interopRequireDefault(require("../urlOpts"));

  _urlOpts = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function action(projectRoot, options) {
  await _urlOpts().default.optsAsync(projectRoot, options);
  const url = await _xdl().UrlUtils.constructDeepLinkAsync(projectRoot);

  _log().default.nested('Project manifest URL\n\n' + _chalk().default.underline(url) + '\n');

  if (await _urlOpts().default.handleMobileOptsAsync(projectRoot, options)) {
    return;
  }

  let recipient = typeof options.sendTo !== 'boolean' ? options.sendTo : await _xdl().UserSettings.getAsync('sendTo', null);

  if (!recipient) {
    recipient = await (0, _askUser().askForSendToAsync)();
  }

  await sendTo().sendUrlAsync(url, recipient);
}

function _default(program) {
  program.command('send [path]').description(`Share the project's URL to an email address`).helpGroup('core').option('-s, --send-to [dest]', 'Email address to send the URL to').urlOpts().asyncActionProjectDir(action);
}
//# sourceMappingURL=send.js.map