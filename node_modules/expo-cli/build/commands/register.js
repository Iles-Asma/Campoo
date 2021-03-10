"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _CommandError() {
  const data = _interopRequireDefault(require("../CommandError"));

  _CommandError = function () {
    return data;
  };

  return data;
}

function _accounts() {
  const data = require("../accounts");

  _accounts = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(program) {
  program.command('register').helpGroup('auth').description('Sign up for a new Expo account').asyncAction(options => {
    if (options.parent.nonInteractive) {
      throw new (_CommandError().default)('NON_INTERACTIVE', `Run the command without the '--non-interactive' flag or visit ${_accounts().REGISTRATION_URL} to register a new account.`);
    }

    (0, _accounts().openRegistrationInBrowser)();
  });
}
//# sourceMappingURL=register.js.map