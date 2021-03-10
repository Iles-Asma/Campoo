"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _dateformat() {
  const data = _interopRequireDefault(require("dateformat"));

  _dateformat = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("../log"));

  _log = function () {
    return data;
  };

  return data;
}

function _PublishUtils() {
  const data = require("./utils/PublishUtils");

  _PublishUtils = function () {
    return data;
  };

  return data;
}

function table() {
  const data = _interopRequireWildcard(require("./utils/cli-table"));

  table = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HORIZ_CELL_WIDTH_SMALL = 15;
const HORIZ_CELL_WIDTH_BIG = 40;

var _default = program => {
  program.command('publish:history [path]').alias('ph').description("Log the project's releases").helpGroup('publish').option('-c, --release-channel <channel-name>', 'Filter by release channel. If this flag is not included, the most recent publications will be shown.').option('--count <number-of-logs>', 'Number of logs to view, maximum 100, default 5.', parseInt).option('-p, --platform <ios|android>', 'Filter by platform, android or ios. Defaults to both platforms.').option('-s, --sdk-version <version>', 'Filter by SDK version e.g. 35.0.0').option('-r, --raw', 'Produce some raw output.').asyncActionProjectDir(async (projectDir, options) => {
    const result = await (0, _PublishUtils().getPublishHistoryAsync)(projectDir, options);

    if (options.raw) {
      (0, _log().default)(JSON.stringify(result));
      return;
    }

    if (result.queryResult && result.queryResult.length > 0) {
      // Print general publication info
      const sampleItem = result.queryResult[0]; // get a sample item

      const generalTableString = table().printTableJson({
        fullName: sampleItem.fullName
      }, 'General Info');
      (0, _log().default)(generalTableString); // Print info specific to each publication

      const headers = ['publishedTime', 'appVersion', 'sdkVersion', 'platform', 'channel', 'publicationId']; // colWidths contains the cell size of each header

      const colWidths = [];
      const bigCells = new Set(['publicationId', 'publishedTime', 'channel']);
      headers.forEach(header => {
        if (bigCells.has(header)) {
          colWidths.push(HORIZ_CELL_WIDTH_BIG);
        } else {
          colWidths.push(HORIZ_CELL_WIDTH_SMALL);
        }
      });
      const resultRows = result.queryResult.map(publication => ({ ...publication,
        publishedTime: (0, _dateformat().default)(publication.publishedTime, 'ddd mmm dd yyyy HH:MM:ss Z')
      }));
      const tableString = table().printTableJsonArray(headers, resultRows, colWidths);
      (0, _log().default)(tableString);
    } else {
      throw new Error('No records found matching your query.');
    }
  }, {
    checkConfig: true
  });
  program.command('publish:details [path]').alias('pd').description('Log details of a published release').helpGroup('publish').option('--publish-id <publish-id>', 'Publication id. (Required)').option('-r, --raw', 'Produce some raw output.').asyncActionProjectDir(async (projectDir, options) => {
    if (!options.publishId) {
      throw new Error('--publish-id must be specified.');
    }

    const detail = await (0, _PublishUtils().getPublicationDetailAsync)(projectDir, options);
    await (0, _PublishUtils().printPublicationDetailAsync)(detail, options);
  }, {
    checkConfig: true
  });
};

exports.default = _default;
//# sourceMappingURL=publish-info.js.map