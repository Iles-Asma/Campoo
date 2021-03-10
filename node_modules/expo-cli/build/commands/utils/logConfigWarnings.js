"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logConfigWarningsIOS = logConfigWarningsIOS;
exports.logConfigWarningsAndroid = logConfigWarningsAndroid;
exports.formatNamedWarning = formatNamedWarning;

function _configPlugins() {
  const data = require("@expo/config-plugins");

  _configPlugins = function () {
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

function _log() {
  const data = _interopRequireDefault(require("../../log"));

  _log = function () {
    return data;
  };

  return data;
}

function TerminalLink() {
  const data = _interopRequireWildcard(require("./TerminalLink"));

  TerminalLink = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logConfigWarningsIOS() {
  const warningsIOS = _configPlugins().WarningAggregator.flushWarningsIOS();

  if (warningsIOS.length) {
    warningsIOS.forEach(([property, warning, link]) => {
      _log().default.nested(formatNamedWarning(property, warning, link));
    });
  }

  return !!warningsIOS;
}

function logConfigWarningsAndroid() {
  const warningsAndroid = _configPlugins().WarningAggregator.flushWarningsAndroid();

  if (warningsAndroid.length) {
    warningsAndroid.forEach(([property, warning, link]) => {
      _log().default.nested(formatNamedWarning(property, warning, link));
    });
  }

  return !!warningsAndroid;
}

function formatNamedWarning(property, warning, link) {
  return `- ${_chalk().default.bold(property)}: ${warning}${link ? getSpacer(warning) + _log().default.chalk.dim(TerminalLink().learnMore(link)) : ''}`;
}

function getSpacer(text) {
  if (text.endsWith('.')) {
    return ' ';
  } else {
    return '. ';
  }
}
//# sourceMappingURL=logConfigWarnings.js.map