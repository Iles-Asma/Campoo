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

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _CommandError() {
  const data = _interopRequireDefault(require("../../CommandError"));

  _CommandError = function () {
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

function _prompts() {
  const data = require("../../prompts");

  _prompts = function () {
    return data;
  };

  return data;
}

function ProjectUtils() {
  const data = _interopRequireWildcard(require("../utils/ProjectUtils"));

  ProjectUtils = function () {
    return data;
  };

  return data;
}

function _AndroidBuilder() {
  const data = _interopRequireDefault(require("./AndroidBuilder"));

  _AndroidBuilder = function () {
    return data;
  };

  return data;
}

function _BaseBuilder() {
  const data = _interopRequireDefault(require("./BaseBuilder"));

  _BaseBuilder = function () {
    return data;
  };

  return data;
}

function _IOSBuilder() {
  const data = _interopRequireDefault(require("./ios/IOSBuilder"));

  _IOSBuilder = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function maybeBailOnWorkflowWarning({
  projectRoot,
  platform,
  nonInteractive
}) {
  const {
    workflow
  } = await ProjectUtils().findProjectRootAsync(projectRoot);

  if (workflow === 'managed') {
    return false;
  }

  const command = `expo build:${platform}`;

  _log().default.warn(_chalk().default.bold(`⚠️  ${command} currently only supports managed workflow apps.`));

  _log().default.warn(`If you proceed with this command, we can run the build for you but it will not include any custom native modules or changes that you have made to your local native projects.`);

  _log().default.warn(`Unless you are sure that you know what you are doing, we recommend aborting the build and doing a native release build through ${platform === 'ios' ? 'Xcode' : 'Android Studio'}.`);

  if (nonInteractive) {
    _log().default.warn(`Skipping confirmation prompt because non-interactive mode is enabled.`);

    return false;
  }

  const answer = await (0, _prompts().confirmAsync)({
    message: `Would you like to proceed?`
  });
  return !answer;
}

function assertReleaseChannel(releaseChannel) {
  const channelRe = new RegExp(/^[a-z\d][a-z\d._-]*$/);

  if (!channelRe.test(releaseChannel)) {
    throw new (_CommandError().default)('Release channel name can only contain lowercase letters, numbers and special characters . _ and -');
  }
}

function assertPublicUrl(publicUrl) {
  if (publicUrl && !_xdl().UrlUtils.isHttps(publicUrl)) {
    throw new (_CommandError().default)('INVALID_PUBLIC_URL', '--public-url must be a valid HTTPS URL');
  }
}

function _default(program) {
  program.command('build:ios [path]').alias('bi').helpGroup('build').option('-c, --clear-credentials', 'Clear all credentials stored on Expo servers.').option('--clear-dist-cert', 'Remove Distribution Certificate stored on Expo servers.').option('--clear-push-key', 'Remove Push Notifications Key stored on Expo servers.').option('--clear-push-cert', 'Remove Push Notifications Certificate stored on Expo servers. Use of Push Notifications Certificates is deprecated.').option('--clear-provisioning-profile', 'Remove Provisioning Profile stored on Expo servers.').option('-r --revoke-credentials', 'Revoke credentials on developer.apple.com, select appropriate using --clear-* options.').option('--apple-id <login>', 'Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable).').option('-t --type <build>', 'Type of build: [archive|simulator].').option('--release-channel <channel-name>', 'Pull from specified release channel.', 'default').option('--no-publish', 'Disable automatic publishing before building.').option('--no-wait', 'Exit immediately after scheduling build.').option('--team-id <apple-teamId>', 'Apple Team ID.').option('--dist-p12-path <dist.p12>', 'Path to your Distribution Certificate P12 (set password as EXPO_IOS_DIST_P12_PASSWORD environment variable).').option('--push-id <push-id>', 'Push Key ID (ex: 123AB4C56D).').option('--push-p8-path <push.p8>', 'Path to your Push Key .p8 file.').option('--provisioning-profile-path <.mobileprovision>', 'Path to your Provisioning Profile.').option('--public-url <url>', 'The URL of an externally hosted manifest (for self-hosted apps).').option('--skip-credentials-check', 'Skip checking credentials.').option('--skip-workflow-check', 'Skip warning about build service bare workflow limitations.').description('Build and sign a standalone IPA for the Apple App Store').asyncActionProjectDir(async (projectRoot, options) => {
    if (!options.skipWorkflowCheck) {
      if (await maybeBailOnWorkflowWarning({
        projectRoot,
        platform: 'ios',
        nonInteractive: program.nonInteractive
      })) {
        return;
      }
    }

    if (options.skipCredentialsCheck && options.clearCredentials) {
      throw new (_CommandError().default)("--skip-credentials-check and --clear-credentials can't be used together");
    }

    assertPublicUrl(options.publicUrl);
    assertReleaseChannel(options.releaseChannel);
    const iosBuilder = new (_IOSBuilder().default)(projectRoot, options);
    return iosBuilder.command();
  }, {
    checkConfig: true
  });
  program.command('build:android [path]').alias('ba').helpGroup('build').option('-c, --clear-credentials', 'Clear stored credentials.').option('--release-channel <channel-name>', 'Pull from specified release channel.', 'default').option('--no-publish', 'Disable automatic publishing before building.').option('--no-wait', 'Exit immediately after triggering build.').option('--keystore-path <app.jks>', 'Path to your Keystore.').option('--keystore-alias <alias>', 'Keystore Alias').option('--generate-keystore', '[deprecated] Generate Keystore if one does not exist').option('--public-url <url>', 'The URL of an externally hosted manifest (for self-hosted apps)').option('--skip-workflow-check', 'Skip warning about build service bare workflow limitations.').option('-t --type <build>', 'Type of build: [app-bundle|apk].').description('Build and sign a standalone APK or App Bundle for the Google Play Store').asyncActionProjectDir(async (projectRoot, options) => {
    if (options.generateKeystore) {
      _log().default.warn(`The --generate-keystore flag is deprecated and does not do anything. A Keystore will always be generated on the Expo servers if it's missing.`);
    }

    if (!options.skipWorkflowCheck) {
      if (await maybeBailOnWorkflowWarning({
        projectRoot,
        platform: 'android',
        nonInteractive: program.nonInteractive
      })) {
        return;
      }
    }

    assertPublicUrl(options.publicUrl);
    assertReleaseChannel(options.releaseChannel);
    const androidBuilder = new (_AndroidBuilder().default)(projectRoot, options);
    return androidBuilder.command();
  }, {
    checkConfig: true
  });
  program.command('build:web [path]').helpGroup('build').option('-c, --clear', 'Clear all cached build files and assets.').option('--no-pwa', 'Prevent webpack from generating the manifest.json and injecting meta into the index.html head.').option('-d, --dev', 'Turns dev flag on before bundling').description('Build the web app for production').asyncActionProjectDir((projectRoot, options) => {
    return _xdl().Webpack.bundleAsync(projectRoot, { ...options,
      dev: typeof options.dev === 'undefined' ? false : options.dev
    });
  });
  program.command('build:status [path]').alias('bs').helpGroup('build').option('--public-url <url>', 'The URL of an externally hosted manifest (for self-hosted apps).').description(`Get the status of the latest build for the project`).asyncActionProjectDir(async (projectRoot, options) => {
    assertPublicUrl(options.publicUrl);
    const builder = new (_BaseBuilder().default)(projectRoot, options);
    return builder.commandCheckStatus();
  });
}
//# sourceMappingURL=index.js.map