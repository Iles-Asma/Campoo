"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitStatusAsync = gitStatusAsync;
exports.gitDiffAsync = gitDiffAsync;
exports.gitAddAsync = gitAddAsync;
exports.gitDoesRepoExistAsync = gitDoesRepoExistAsync;
exports.gitRootDirectory = gitRootDirectory;

function _spawnAsync() {
  const data = _interopRequireDefault(require("@expo/spawn-async"));

  _spawnAsync = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function gitStatusAsync({
  showUntracked
} = {}) {
  return (await (0, _spawnAsync().default)('git', ['status', '-s', showUntracked ? '-uall' : '-uno'])).stdout;
}

async function gitDiffAsync() {
  await (0, _spawnAsync().default)('git', ['--no-pager', 'diff'], {
    stdio: ['ignore', 'inherit', 'inherit']
  });
}

async function gitAddAsync(file, options) {
  if (options === null || options === void 0 ? void 0 : options.intentToAdd) {
    await (0, _spawnAsync().default)('git', ['add', '--intent-to-add', file]);
  } else {
    await (0, _spawnAsync().default)('git', ['add', file]);
  }
}

async function gitDoesRepoExistAsync() {
  try {
    await (0, _spawnAsync().default)('git', ['rev-parse', '--git-dir']);
    return true;
  } catch (err) {
    return false;
  }
}

async function gitRootDirectory() {
  return (await (0, _spawnAsync().default)('git', ['rev-parse', '--show-toplevel'])).stdout.trim();
}
//# sourceMappingURL=git.js.map