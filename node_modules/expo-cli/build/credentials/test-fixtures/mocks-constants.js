"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testAppJsonWithDifferentOwner = exports.testAppJson = exports.testAppLookupParams = exports.testJester2ExperienceName = exports.testExperienceName = exports.testPackageName = exports.testBundleIdentifier = exports.testSlug = exports.testUsername = exports.jester2 = exports.jester = void 0;
const jester = {
  kind: 'user',
  username: 'jester',
  nickname: 'jester',
  userId: 'jester-id',
  picture: 'jester-pic',
  userMetadata: {
    onboarded: true
  },
  currentConnection: 'Username-Password-Authentication',
  sessionSecret: 'jester-secret'
};
exports.jester = jester;
const jester2 = {
  kind: 'user',
  username: 'jester2',
  nickname: 'jester2',
  userId: 'jester2-id',
  picture: 'jester2-pic',
  userMetadata: {
    onboarded: true
  },
  currentConnection: 'Username-Password-Authentication',
  sessionSecret: 'jester2-secret'
};
exports.jester2 = jester2;
const testUsername = jester.username;
exports.testUsername = testUsername;
const testSlug = 'testApp';
exports.testSlug = testSlug;
const testBundleIdentifier = 'test.com.app';
exports.testBundleIdentifier = testBundleIdentifier;
const testPackageName = 'test.com.app';
exports.testPackageName = testPackageName;
const testExperienceName = `@${testUsername}/${testSlug}`;
exports.testExperienceName = testExperienceName;
const testJester2ExperienceName = `@${jester2.username}/${testSlug}`;
exports.testJester2ExperienceName = testJester2ExperienceName;
const testAppLookupParams = {
  accountName: testUsername,
  projectName: testSlug,
  bundleIdentifier: testBundleIdentifier
};
exports.testAppLookupParams = testAppLookupParams;
const testAppJson = {
  name: 'testing 123',
  version: '0.1.0',
  slug: testSlug,
  sdkVersion: '38.0.0',
  ios: {
    bundleIdentifier: testBundleIdentifier
  }
};
exports.testAppJson = testAppJson;
const testAppJsonWithDifferentOwner = { ...testAppJson,
  owner: jester2.username
};
exports.testAppJsonWithDifferentOwner = testAppJsonWithDifferentOwner;
//# sourceMappingURL=mocks-constants.js.map