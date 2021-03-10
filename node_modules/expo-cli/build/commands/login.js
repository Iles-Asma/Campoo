"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _accounts() {
  const data = require("../accounts");

  _accounts = function () {
    return data;
  };

  return data;
}

function _default(program) {
  program.command('login').description('Login to an Expo account').alias('signin').helpGroup('auth').option('-u, --username [string]', 'Username').option('-p, --password [string]', 'Password').option('--otp [string]', 'One-time password from your 2FA device').asyncAction(_accounts().login);
}
//# sourceMappingURL=login.js.map