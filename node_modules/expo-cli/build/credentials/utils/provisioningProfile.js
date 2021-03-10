"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readAppleTeam = readAppleTeam;
exports.readProfileName = readProfileName;

function _plist() {
  const data = _interopRequireDefault(require("@expo/plist"));

  _plist = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readAppleTeam(dataBase64) {
  var _ref;

  const profilePlist = parse(dataBase64);
  const teamId = (_ref = profilePlist['TeamIdentifier']) === null || _ref === void 0 ? void 0 : _ref[0];
  const teamName = profilePlist['TeamName'];

  if (!teamId) {
    throw new Error('Team identifier is missing from provisoning profile');
  }

  return {
    teamId,
    teamName
  };
}

function readProfileName(dataBase64) {
  const profilePlist = parse(dataBase64);
  return profilePlist['Name'];
}

function parse(dataBase64) {
  try {
    const buffer = Buffer.from(dataBase64, 'base64');
    const profile = buffer.toString('utf-8');
    return _plist().default.parse(profile);
  } catch (error) {
    throw new Error('Provisioning profile is malformed');
  }
}
//# sourceMappingURL=provisioningProfile.js.map