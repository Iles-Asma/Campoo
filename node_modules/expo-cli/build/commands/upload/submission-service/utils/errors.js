"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSubmissionError = printSubmissionError;

function _log() {
  const data = _interopRequireDefault(require("../../../../log"));

  _log = function () {
    return data;
  };

  return data;
}

function _TerminalLink() {
  const data = require("../../../utils/TerminalLink");

  _TerminalLink = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmissionErrorCode;

(function (SubmissionErrorCode) {
  SubmissionErrorCode["ARCHIVE_DOWNLOAD_NOT_FOUND_ERROR"] = "SUBMISSION_SERVICE_COMMON_ARCHIVE_DOWNLOAD_NOT_FOUND_ERROR";
  SubmissionErrorCode["ARCHIVE_DOWNLOAD_FORBIDDEN_ERROR"] = "SUBMISSION_SERVICE_COMMON_ARCHIVE_DOWNLOAD_FORBIDDEN_ERROR";
  SubmissionErrorCode["ANDROID_UNKNOWN_ERROR"] = "SUBMISSION_SERVICE_ANDROID_UNKNOWN_ERROR";
  SubmissionErrorCode["ANDROID_FIRST_UPLOAD_ERROR"] = "SUBMISSION_SERVICE_ANDROID_FIRST_UPLOAD_ERROR";
  SubmissionErrorCode["ANDROID_OLD_VERSION_CODE_ERROR"] = "SUBMISSION_SERVICE_ANDROID_OLD_VERSION_CODE_ERROR";
  SubmissionErrorCode["ANDROID_MISSING_PRIVACY_POLICY"] = "SUBMISSION_SERVICE_ANDROID_MISSING_PRIVACY_POLICY";
})(SubmissionErrorCode || (SubmissionErrorCode = {}));

const SubmissionErrorMessages = {
  [SubmissionErrorCode.ARCHIVE_DOWNLOAD_NOT_FOUND_ERROR]: "Failed to download the archive file (Response code: 404 Not Found). Please make sure the URL you've provided is correct.",
  [SubmissionErrorCode.ARCHIVE_DOWNLOAD_FORBIDDEN_ERROR]: 'Failed to download the archive file (Response code: 403 Forbidden). This is most probably caused by trying to upload an expired build artifact. All Expo build artifacts expire after 30 days.',
  [SubmissionErrorCode.ANDROID_UNKNOWN_ERROR]: "We couldn't figure out what went wrong. Please see logs to learn more.",
  [SubmissionErrorCode.ANDROID_FIRST_UPLOAD_ERROR]: "You haven't submitted this app to Google Play Store yet. The first submission of the app needs to be performed manually.\n" + `${_log().default.chalk.dim((0, _TerminalLink().learnMore)('https://expo.fyi/first-android-submission'))}.`,
  [SubmissionErrorCode.ANDROID_OLD_VERSION_CODE_ERROR]: "You've already submitted this version of the app.\n" + 'Versions are identified by Android version code (expo.android.versionCode in app.json).\n' + "If you're submitting a managed Expo project, increment the version code in app.json and build the project with expo build:android.\n" + `${_log().default.chalk.dim((0, _TerminalLink().learnMore)('https://expo.fyi/bumping-android-version-code'))}.`,
  [SubmissionErrorCode.ANDROID_MISSING_PRIVACY_POLICY]: 'The app has permissions that require a privacy policy set for the app.\n' + `${_log().default.chalk.dim((0, _TerminalLink().learnMore)('https://expo.fyi/missing-privacy-policy'))}.`
};

function printSubmissionError(error) {
  if (Object.values(SubmissionErrorCode).includes(error.errorCode)) {
    const errorCode = error.errorCode;

    _log().default.addNewLineIfNone();

    _log().default.error(SubmissionErrorMessages[errorCode]);

    return errorCode === SubmissionErrorCode.ANDROID_UNKNOWN_ERROR;
  } else {
    (0, _log().default)(error.message);
    return true;
  }
}
//# sourceMappingURL=errors.js.map