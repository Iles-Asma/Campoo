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

async function action(projectDir, options) {
  await _xdl().Detach.prepareDetachedBuildAsync(projectDir, options);
}

function _default(program) {
  program.command('prepare-detached-build [path]').description('Prepare a detached project for building').helpGroup('internal').option('--platform [platform]', 'detached project platform').option('--skipXcodeConfig [bool]', '[iOS only] if true, do not configure Xcode project').asyncActionProjectDir(action);
}
//# sourceMappingURL=prepare-detached-build.js.map