"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDownloadStream = createDownloadStream;
exports.downloadAppArchiveAsync = downloadAppArchiveAsync;
exports.extractLocalArchiveAsync = extractLocalArchiveAsync;
exports.pathIsTar = pathIsTar;
exports.uploadAppArchiveAsync = uploadAppArchiveAsync;

function _fsExtra() {
  const data = _interopRequireDefault(require("fs-extra"));

  _fsExtra = function () {
    return data;
  };

  return data;
}

function _glob() {
  const data = require("glob");

  _glob = function () {
    return data;
  };

  return data;
}

function _got() {
  const data = _interopRequireDefault(require("got"));

  _got = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function () {
    return data;
  };

  return data;
}

function _stream() {
  const data = _interopRequireDefault(require("stream"));

  _stream = function () {
    return data;
  };

  return data;
}

function _tar() {
  const data = _interopRequireDefault(require("tar"));

  _tar = function () {
    return data;
  };

  return data;
}

function _tempy() {
  const data = _interopRequireDefault(require("tempy"));

  _tempy = function () {
    return data;
  };

  return data;
}

function _util() {
  const data = require("util");

  _util = function () {
    return data;
  };

  return data;
}

function _uploads() {
  const data = require("../../../../uploads");

  _uploads = function () {
    return data;
  };

  return data;
}

function _progress() {
  const data = require("../../../utils/progress");

  _progress = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pipeline = (0, _util().promisify)(_stream().default.pipeline);

async function moveFileOfTypeAsync(directory, extension, dest) {
  const [matching] = (0, _glob().sync)(`*.${extension}`, {
    absolute: true,
    cwd: directory
  });

  if (!matching) {
    throw new Error(`No .${extension} files found in directory: ${directory}`);
  } // The incoming destination may be tar.gz because it wasn't clear what type of app file was included.
  // Compare the app file extension with the destination extension and if they don't match,
  // append the app file extension to the destination. Ex. App.tar.gz.ipa


  const matchingExtension = (0, _path().extname)(matching).toLowerCase();
  const destExtension = (0, _path().extname)(dest).toLowerCase();

  if (matchingExtension !== destExtension) {
    dest = `${dest}${matchingExtension}`;
  } // Ensure we actually need to move the file.


  if (matching !== dest) {
    await _fsExtra().default.move(matching, dest);
  }

  return dest;
}

function createDownloadStream(url) {
  return _got().default.stream(url).on('downloadProgress', (0, _progress().createProgressTracker)());
}

function pathIsTar(path) {
  return path.endsWith('tar.gz');
}

async function downloadAppArchiveAsync(url) {
  const filename = (0, _path().basename)(url); // Since we may need to rename the destination path,
  // add everything to a folder which can be nuked to ensure we don't accidentally use an old build with the same name.

  const destinationFolder = _tempy().default.directory();

  const destinationPath = (0, _path().join)(destinationFolder, filename);
  const downloadStream = createDownloadStream(url); // Special use-case for downloading an EAS tar.gz file and unpackaging it.

  if (pathIsTar(url)) {
    await pipeline(downloadStream, _tar().default.extract({
      cwd: destinationFolder
    }, [])); // Move the folder contents matching .ipa, .apk, or .aab

    return await moveFileOfTypeAsync(destinationFolder, '{ipa,apk,aab}', destinationPath);
  } else {
    await pipeline(downloadStream, _fsExtra().default.createWriteStream(destinationPath));
  }

  return destinationPath;
}

async function uploadAppArchiveAsync(path) {
  const fileSize = (await _fsExtra().default.stat(path)).size;
  return await (0, _uploads().uploadAsync)(_uploads().UploadType.SUBMISSION_APP_ARCHIVE, path, (0, _progress().createProgressTracker)(fileSize));
}

async function decompressTarAsync(src, destination) {
  await pipeline(_fsExtra().default.createReadStream(src), _tar().default.extract({
    cwd: destination
  }, []));
}

async function extractLocalArchiveAsync(filePath) {
  if (!pathIsTar(filePath)) {
    // No need to extract, copy, or rename the file.
    // Leave it in place and return the path.
    return filePath;
  }

  const filename = (0, _path().basename)(filePath); // Since we may need to rename the destination path,
  // add everything to a folder which can be nuked to ensure we don't accidentally use an old build with the same name.

  const destinationFolder = _tempy().default.directory();

  const destinationPath = (0, _path().join)(destinationFolder, filename); // Special use-case for downloading an EAS tar.gz file and unpackaging it.

  await decompressTarAsync(filePath, destinationFolder); // Move the folder contents matching .ipa, .apk, or .aab

  return await moveFileOfTypeAsync(destinationFolder, '{ipa,apk,aab}', destinationPath);
}
//# sourceMappingURL=files.js.map