"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fallbackToTextAndUrl = fallbackToTextAndUrl;
exports.fallbackToUrl = fallbackToUrl;
exports.learnMore = learnMore;
exports.linkedText = linkedText;
exports.transporterAppLink = transporterAppLink;

function _terminalLink() {
  const data = _interopRequireDefault(require("terminal-link"));

  _terminalLink = function () {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * When linking isn't available, fallback to displaying the URL beside the
 * text in parentheses.
 *
 * @example [Expo](https://expo.io)
 * @example Expo (https://expo.io)
 *
 * @param value
 * @param url
 */
function fallbackToTextAndUrl(text, url) {
  return (0, _terminalLink().default)(text, url);
}
/**
 * When linking isn't available, fallback to just displaying the URL.
 *
 * @example [value](https://expo.io)
 * @example https://expo.io
 *
 * @param text
 * @param url
 */


function fallbackToUrl(text, url) {
  return (0, _terminalLink().default)(text, url, {
    fallback: (_, url) => url
  });
}
/**
 * When linking isn't available, format the learn more link better.
 *
 * @example [Learn more](https://expo.io)
 * @example Learn more: https://expo.io
 * @param url
 */


function learnMore(url) {
  return (0, _terminalLink().default)(_log().default.chalk.underline('Learn more.'), url, {
    fallback: (text, url) => `Learn more: ${_log().default.chalk.underline(url)}`
  });
}

function linkedText(text, url) {
  return (0, _terminalLink().default)(text, url, {
    fallback: (text, url) => {
      return `${text} ${_log().default.chalk.dim.underline(url)}`;
    }
  });
}

function transporterAppLink() {
  return fallbackToTextAndUrl('Transporter.app', 'https://apps.apple.com/us/app/transporter/id1450874784');
}
//# sourceMappingURL=TerminalLink.js.map