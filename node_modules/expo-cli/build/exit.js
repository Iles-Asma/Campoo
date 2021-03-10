"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installExitHooks = installExitHooks;

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

function _log() {
  const data = _interopRequireDefault(require("./log"));

  _log = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function installExitHooks(projectDir, onStop = _xdl().Project.stopAsync) {
  const killSignals = ['SIGINT', 'SIGTERM'];

  for (const signal of killSignals) {
    process.on(signal, () => {
      _log().default.nested(_chalk().default.blue('\nStopping packager...'));

      onStop(projectDir).then(() => {
        _log().default.nested(_chalk().default.green('Packager stopped.'));

        process.exit();
      });
    });
  }
}
//# sourceMappingURL=exit.js.map