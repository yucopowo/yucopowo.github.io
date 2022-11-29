/* esm.sh - esbuild bundle(browserslist@4.21.4) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import { agents as __caniuse_lite_dist_unpacker_agents$agents } from '/cdn/v99/caniuse-lite@1.0.30001434/es2022/dist/unpacker/agents.development.js';
import __node_releases_data_processed_envs_json$ from '/cdn/v99/node-releases@2.0.6/es2022/data/processed/envs.json.development.js';
import __electron_to_chromium_versions$ from '/cdn/v99/electron-to-chromium@1.4.284/es2022/versions.development.js';
import __path$ from '/cdn/v99/path-browserify@1.0.1/es2022/path-browserify.development.bundle.js';
import __node_releases_data_release_schedule_release_schedule_json$ from '/cdn/v99/node-releases@2.0.6/es2022/data/release-schedule/release-schedule.json.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/error.js
var require_error = __commonJS({
  'esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/error.js'(exports, module) {
    function BrowserslistError(message) {
      this.name = 'BrowserslistError';
      this.message = message;
      this.browserslist = true;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BrowserslistError);
      }
    }
    BrowserslistError.prototype = Error.prototype;
    module.exports = BrowserslistError;
  }
});

// esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/parse.js
var require_parse = __commonJS({
  'esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/parse.js'(exports, module) {
    var AND_REGEXP = /^\s+and\s+(.*)/i;
    var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i;
    function flatten(array) {
      if (!Array.isArray(array)) return [array];
      return array.reduce(function(a, b) {
        return a.concat(flatten(b));
      }, []);
    }
    function find(string, predicate) {
      for (var n = 1, max = string.length; n <= max; n++) {
        var parsed = string.substr(-n, n);
        if (predicate(parsed, n, max)) {
          return string.slice(0, -n);
        }
      }
      return '';
    }
    function matchQuery(all, query) {
      var node = {
        query
      };
      if (query.indexOf('not ') === 0) {
        node.not = true;
        query = query.slice(4);
      }
      for (var name in all) {
        var type = all[name];
        var match = query.match(type.regexp);
        if (match) {
          node.type = name;
          for (var i = 0; i < type.matches.length; i++) {
            node[type.matches[i]] = match[i + 1];
          }
          return node;
        }
      }
      node.type = 'unknown';
      return node;
    }
    function matchBlock(all, string, qs) {
      var node;
      return find(string, function(parsed, n, max) {
        if (AND_REGEXP.test(parsed)) {
          node = matchQuery(all, parsed.match(AND_REGEXP)[1]);
          node.compose = 'and';
          qs.unshift(node);
          return true;
        } else if (OR_REGEXP.test(parsed)) {
          node = matchQuery(all, parsed.match(OR_REGEXP)[1]);
          node.compose = 'or';
          qs.unshift(node);
          return true;
        } else if (n === max) {
          node = matchQuery(all, parsed.trim());
          node.compose = 'or';
          qs.unshift(node);
          return true;
        }
        return false;
      });
    }
    module.exports = function parse2(all, queries) {
      if (!Array.isArray(queries)) queries = [queries];
      return flatten(
        queries.map(function(block) {
          var qs = [];
          do {
            block = matchBlock(all, block, qs);
          } while (block);
          return qs;
        })
      );
    };
  }
});

// esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/browser.js
var require_browser = __commonJS({
  'esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/browser.js'(exports, module) {
    var BrowserslistError = require_error();
    function noop() {}
    module.exports = {
      loadQueries: function loadQueries() {
        throw new BrowserslistError('Sharable configs are not supported in client-side build of Browserslist');
      },
      getStat: function getStat(opts) {
        return opts.stats;
      },
      loadConfig: function loadConfig2(opts) {
        if (opts.config) {
          throw new BrowserslistError('Browserslist config are not supported in client-side build');
        }
      },
      loadCountry: function loadCountry() {
        throw new BrowserslistError('Country statistics are not supported in client-side build of Browserslist');
      },
      loadFeature: function loadFeature() {
        throw new BrowserslistError('Supports queries are not available in client-side build of Browserslist');
      },
      currentNode: function currentNode(resolve, context) {
        return resolve(['maintained node versions'], context)[0];
      },
      parseConfig: noop,
      readConfig: noop,
      findConfig: noop,
      clearCaches: noop,
      oldDataWarning: noop
    };
  }
});

// esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/index.js
var require_browserslist = __commonJS({
  'esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/node_modules/browserslist/index.js'(exports, module) {
    var jsReleases = __node_releases_data_processed_envs_json$;
    var agents = __caniuse_lite_dist_unpacker_agents$agents;
    var jsEOL = __node_releases_data_release_schedule_release_schedule_json$;
    var path = __path$;
    var e2c = __electron_to_chromium_versions$;
    var BrowserslistError = require_error();
    var parse2 = require_parse();
    var env = require_browser();
    var YEAR = 365.259641 * 24 * 60 * 60 * 1e3;
    var ANDROID_EVERGREEN_FIRST = 37;
    function isVersionsMatch(versionA, versionB) {
      return (versionA + '.').indexOf(versionB + '.') === 0;
    }
    function isEolReleased(name) {
      var version = name.slice(1);
      return browserslist.nodeVersions.some(function(i) {
        return isVersionsMatch(i, version);
      });
    }
    function normalize(versions) {
      return versions.filter(function(version) {
        return typeof version === 'string';
      });
    }
    function normalizeElectron(version) {
      var versionToUse = version;
      if (version.split('.').length === 3) {
        versionToUse = version
          .split('.')
          .slice(0, -1)
          .join('.');
      }
      return versionToUse;
    }
    function nameMapper(name) {
      return function mapName(version) {
        return name + ' ' + version;
      };
    }
    function getMajor(version) {
      return parseInt(version.split('.')[0]);
    }
    function getMajorVersions(released, number) {
      if (released.length === 0) return [];
      var majorVersions = uniq(released.map(getMajor));
      var minimum = majorVersions[majorVersions.length - number];
      if (!minimum) {
        return released;
      }
      var selected = [];
      for (var i = released.length - 1; i >= 0; i--) {
        if (minimum > getMajor(released[i])) break;
        selected.unshift(released[i]);
      }
      return selected;
    }
    function uniq(array) {
      var filtered = [];
      for (var i = 0; i < array.length; i++) {
        if (filtered.indexOf(array[i]) === -1) filtered.push(array[i]);
      }
      return filtered;
    }
    function fillUsage(result, name, data2) {
      for (var i in data2) {
        result[name + ' ' + i] = data2[i];
      }
    }
    function generateFilter(sign, version) {
      version = parseFloat(version);
      if (sign === '>') {
        return function(v) {
          return parseFloat(v) > version;
        };
      } else if (sign === '>=') {
        return function(v) {
          return parseFloat(v) >= version;
        };
      } else if (sign === '<') {
        return function(v) {
          return parseFloat(v) < version;
        };
      } else {
        return function(v) {
          return parseFloat(v) <= version;
        };
      }
    }
    function generateSemverFilter(sign, version) {
      version = version.split('.').map(parseSimpleInt);
      version[1] = version[1] || 0;
      version[2] = version[2] || 0;
      if (sign === '>') {
        return function(v) {
          v = v.split('.').map(parseSimpleInt);
          return compareSemver(v, version) > 0;
        };
      } else if (sign === '>=') {
        return function(v) {
          v = v.split('.').map(parseSimpleInt);
          return compareSemver(v, version) >= 0;
        };
      } else if (sign === '<') {
        return function(v) {
          v = v.split('.').map(parseSimpleInt);
          return compareSemver(version, v) > 0;
        };
      } else {
        return function(v) {
          v = v.split('.').map(parseSimpleInt);
          return compareSemver(version, v) >= 0;
        };
      }
    }
    function parseSimpleInt(x) {
      return parseInt(x);
    }
    function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    function compareSemver(a, b) {
      return (
        compare(parseInt(a[0]), parseInt(b[0])) ||
        compare(parseInt(a[1] || '0'), parseInt(b[1] || '0')) ||
        compare(parseInt(a[2] || '0'), parseInt(b[2] || '0'))
      );
    }
    function semverFilterLoose(operator, range) {
      range = range.split('.').map(parseSimpleInt);
      if (typeof range[1] === 'undefined') {
        range[1] = 'x';
      }
      switch (operator) {
        case '<=':
          return function(version) {
            version = version.split('.').map(parseSimpleInt);
            return compareSemverLoose(version, range) <= 0;
          };
        case '>=':
        default:
          return function(version) {
            version = version.split('.').map(parseSimpleInt);
            return compareSemverLoose(version, range) >= 0;
          };
      }
    }
    function compareSemverLoose(version, range) {
      if (version[0] !== range[0]) {
        return version[0] < range[0] ? -1 : 1;
      }
      if (range[1] === 'x') {
        return 0;
      }
      if (version[1] !== range[1]) {
        return version[1] < range[1] ? -1 : 1;
      }
      return 0;
    }
    function resolveVersion(data2, version) {
      if (data2.versions.indexOf(version) !== -1) {
        return version;
      } else if (browserslist.versionAliases[data2.name][version]) {
        return browserslist.versionAliases[data2.name][version];
      } else {
        return false;
      }
    }
    function normalizeVersion(data2, version) {
      var resolved = resolveVersion(data2, version);
      if (resolved) {
        return resolved;
      } else if (data2.versions.length === 1) {
        return data2.versions[0];
      } else {
        return false;
      }
    }
    function filterByYear(since, context) {
      since = since / 1e3;
      return Object.keys(agents).reduce(function(selected, name) {
        var data2 = byName(name, context);
        if (!data2) return selected;
        var versions = Object.keys(data2.releaseDate).filter(function(v) {
          var date = data2.releaseDate[v];
          return date !== null && date >= since;
        });
        return selected.concat(versions.map(nameMapper(data2.name)));
      }, []);
    }
    function cloneData(data2) {
      return {
        name: data2.name,
        versions: data2.versions,
        released: data2.released,
        releaseDate: data2.releaseDate
      };
    }
    function mapVersions(data2, map) {
      data2.versions = data2.versions.map(function(i2) {
        return map[i2] || i2;
      });
      data2.released = data2.released.map(function(i2) {
        return map[i2] || i2;
      });
      var fixedDate = {};
      for (var i in data2.releaseDate) {
        fixedDate[map[i] || i] = data2.releaseDate[i];
      }
      data2.releaseDate = fixedDate;
      return data2;
    }
    function byName(name, context) {
      name = name.toLowerCase();
      name = browserslist.aliases[name] || name;
      if (context.mobileToDesktop && browserslist.desktopNames[name]) {
        var desktop = browserslist.data[browserslist.desktopNames[name]];
        if (name === 'android') {
          return normalizeAndroidData(cloneData(browserslist.data[name]), desktop);
        } else {
          var cloned = cloneData(desktop);
          cloned.name = name;
          if (name === 'op_mob') {
            cloned = mapVersions(cloned, {
              '10.0-10.1': '10'
            });
          }
          return cloned;
        }
      }
      return browserslist.data[name];
    }
    function normalizeAndroidVersions(androidVersions, chromeVersions) {
      var firstEvergreen = ANDROID_EVERGREEN_FIRST;
      var last = chromeVersions[chromeVersions.length - 1];
      return androidVersions
        .filter(function(version) {
          return /^(?:[2-4]\.|[34]$)/.test(version);
        })
        .concat(chromeVersions.slice(firstEvergreen - last - 1));
    }
    function normalizeAndroidData(android, chrome) {
      android.released = normalizeAndroidVersions(android.released, chrome.released);
      android.versions = normalizeAndroidVersions(android.versions, chrome.versions);
      return android;
    }
    function checkName(name, context) {
      var data2 = byName(name, context);
      if (!data2) throw new BrowserslistError('Unknown browser ' + name);
      return data2;
    }
    function unknownQuery(query) {
      return new BrowserslistError(
        'Unknown browser query `' + query + '`. Maybe you are using old Browserslist or made typo in query.'
      );
    }
    function filterAndroid(list, versions, context) {
      if (context.mobileToDesktop) return list;
      var released = browserslist.data.android.released;
      var last = released[released.length - 1];
      var diff = last - ANDROID_EVERGREEN_FIRST - versions;
      if (diff > 0) {
        return list.slice(-1);
      } else {
        return list.slice(diff - 1);
      }
    }
    function resolve(queries, context) {
      return parse2(QUERIES, queries).reduce(function(result, node, index) {
        if (node.not && index === 0) {
          throw new BrowserslistError(
            'Write any browsers query (for instance, `defaults`) before `' + node.query + '`'
          );
        }
        var type = QUERIES[node.type];
        var array = type.select.call(browserslist, context, node).map(function(j) {
          var parts = j.split(' ');
          if (parts[1] === '0') {
            return parts[0] + ' ' + byName(parts[0], context).versions[0];
          } else {
            return j;
          }
        });
        if (node.compose === 'and') {
          if (node.not) {
            return result.filter(function(j) {
              return array.indexOf(j) === -1;
            });
          } else {
            return result.filter(function(j) {
              return array.indexOf(j) !== -1;
            });
          }
        } else {
          if (node.not) {
            var filter = {};
            array.forEach(function(j) {
              filter[j] = true;
            });
            return result.filter(function(j) {
              return !filter[j];
            });
          }
          return result.concat(array);
        }
      }, []);
    }
    function prepareOpts(opts) {
      if (typeof opts === 'undefined') opts = {};
      if (typeof opts.path === 'undefined') {
        opts.path = path.resolve ? path.resolve('.') : '.';
      }
      return opts;
    }
    function prepareQueries(queries, opts) {
      if (typeof queries === 'undefined' || queries === null) {
        var config = browserslist.loadConfig(opts);
        if (config) {
          queries = config;
        } else {
          queries = browserslist.defaults;
        }
      }
      return queries;
    }
    function checkQueries(queries) {
      if (!(typeof queries === 'string' || Array.isArray(queries))) {
        throw new BrowserslistError('Browser queries must be an array or string. Got ' + typeof queries + '.');
      }
    }
    var cache2 = {};
    function browserslist(queries, opts) {
      opts = prepareOpts(opts);
      queries = prepareQueries(queries, opts);
      checkQueries(queries);
      var context = {
        ignoreUnknownVersions: opts.ignoreUnknownVersions,
        dangerousExtend: opts.dangerousExtend,
        mobileToDesktop: opts.mobileToDesktop,
        path: opts.path,
        env: opts.env
      };
      env.oldDataWarning(browserslist.data);
      var stats = env.getStat(opts, browserslist.data);
      if (stats) {
        context.customUsage = {};
        for (var browser in stats) {
          fillUsage(context.customUsage, browser, stats[browser]);
        }
      }
      var cacheKey = JSON.stringify([queries, context]);
      if (cache2[cacheKey]) return cache2[cacheKey];
      var result = uniq(resolve(queries, context)).sort(function(name1, name2) {
        name1 = name1.split(' ');
        name2 = name2.split(' ');
        if (name1[0] === name2[0]) {
          var version1 = name1[1].split('-')[0];
          var version2 = name2[1].split('-')[0];
          return compareSemver(version2.split('.'), version1.split('.'));
        } else {
          return compare(name1[0], name2[0]);
        }
      });
      if (!__Process$.env.BROWSERSLIST_DISABLE_CACHE) {
        cache2[cacheKey] = result;
      }
      return result;
    }
    browserslist.parse = function(queries, opts) {
      opts = prepareOpts(opts);
      queries = prepareQueries(queries, opts);
      checkQueries(queries);
      return parse2(QUERIES, queries);
    };
    browserslist.cache = {};
    browserslist.data = {};
    browserslist.usage = {
      global: {},
      custom: null
    };
    browserslist.defaults = ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead'];
    browserslist.aliases = {
      fx: 'firefox',
      ff: 'firefox',
      ios: 'ios_saf',
      explorer: 'ie',
      blackberry: 'bb',
      explorermobile: 'ie_mob',
      operamini: 'op_mini',
      operamobile: 'op_mob',
      chromeandroid: 'and_chr',
      firefoxandroid: 'and_ff',
      ucandroid: 'and_uc',
      qqandroid: 'and_qq'
    };
    browserslist.desktopNames = {
      and_chr: 'chrome',
      and_ff: 'firefox',
      ie_mob: 'ie',
      op_mob: 'opera',
      android: 'chrome'
    };
    browserslist.versionAliases = {};
    browserslist.clearCaches = env.clearCaches;
    browserslist.parseConfig = env.parseConfig;
    browserslist.readConfig = env.readConfig;
    browserslist.findConfig = env.findConfig;
    browserslist.loadConfig = env.loadConfig;
    browserslist.coverage = function(browsers, stats) {
      var data2;
      if (typeof stats === 'undefined') {
        data2 = browserslist.usage.global;
      } else if (stats === 'my stats') {
        var opts = {};
        opts.path = path.resolve ? path.resolve('.') : '.';
        var customStats = env.getStat(opts);
        if (!customStats) {
          throw new BrowserslistError('Custom usage statistics was not provided');
        }
        data2 = {};
        for (var browser in customStats) {
          fillUsage(data2, browser, customStats[browser]);
        }
      } else if (typeof stats === 'string') {
        if (stats.length > 2) {
          stats = stats.toLowerCase();
        } else {
          stats = stats.toUpperCase();
        }
        env.loadCountry(browserslist.usage, stats, browserslist.data);
        data2 = browserslist.usage[stats];
      } else {
        if ('dataByBrowser' in stats) {
          stats = stats.dataByBrowser;
        }
        data2 = {};
        for (var name in stats) {
          for (var version in stats[name]) {
            data2[name + ' ' + version] = stats[name][version];
          }
        }
      }
      return browsers.reduce(function(all, i) {
        var usage2 = data2[i];
        if (usage2 === void 0) {
          usage2 = data2[i.replace(/ \S+$/, ' 0')];
        }
        return all + (usage2 || 0);
      }, 0);
    };
    function nodeQuery(context, node) {
      var matched = browserslist.nodeVersions.filter(function(i) {
        return isVersionsMatch(i, node.version);
      });
      if (matched.length === 0) {
        if (context.ignoreUnknownVersions) {
          return [];
        } else {
          throw new BrowserslistError('Unknown version ' + node.version + ' of Node.js');
        }
      }
      return ['node ' + matched[matched.length - 1]];
    }
    function sinceQuery(context, node) {
      var year = parseInt(node.year);
      var month = parseInt(node.month || '01') - 1;
      var day = parseInt(node.day || '01');
      return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context);
    }
    function coverQuery(context, node) {
      var coverage2 = parseFloat(node.coverage);
      var usage2 = browserslist.usage.global;
      if (node.place) {
        if (node.place.match(/^my\s+stats$/i)) {
          if (!context.customUsage) {
            throw new BrowserslistError('Custom usage statistics was not provided');
          }
          usage2 = context.customUsage;
        } else {
          var place;
          if (node.place.length === 2) {
            place = node.place.toUpperCase();
          } else {
            place = node.place.toLowerCase();
          }
          env.loadCountry(browserslist.usage, place, browserslist.data);
          usage2 = browserslist.usage[place];
        }
      }
      var versions = Object.keys(usage2).sort(function(a, b) {
        return usage2[b] - usage2[a];
      });
      var coveraged = 0;
      var result = [];
      var version;
      for (var i = 0; i < versions.length; i++) {
        version = versions[i];
        if (usage2[version] === 0) break;
        coveraged += usage2[version];
        result.push(version);
        if (coveraged >= coverage2) break;
      }
      return result;
    }
    var QUERIES = {
      last_major_versions: {
        matches: ['versions'],
        regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
        select: function(context, node) {
          return Object.keys(agents).reduce(function(selected, name) {
            var data2 = byName(name, context);
            if (!data2) return selected;
            var list = getMajorVersions(data2.released, node.versions);
            list = list.map(nameMapper(data2.name));
            if (data2.name === 'android') {
              list = filterAndroid(list, node.versions, context);
            }
            return selected.concat(list);
          }, []);
        }
      },
      last_versions: {
        matches: ['versions'],
        regexp: /^last\s+(\d+)\s+versions?$/i,
        select: function(context, node) {
          return Object.keys(agents).reduce(function(selected, name) {
            var data2 = byName(name, context);
            if (!data2) return selected;
            var list = data2.released.slice(-node.versions);
            list = list.map(nameMapper(data2.name));
            if (data2.name === 'android') {
              list = filterAndroid(list, node.versions, context);
            }
            return selected.concat(list);
          }, []);
        }
      },
      last_electron_major_versions: {
        matches: ['versions'],
        regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
        select: function(context, node) {
          var validVersions = getMajorVersions(Object.keys(e2c), node.versions);
          return validVersions.map(function(i) {
            return 'chrome ' + e2c[i];
          });
        }
      },
      last_node_major_versions: {
        matches: ['versions'],
        regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
        select: function(context, node) {
          return getMajorVersions(browserslist.nodeVersions, node.versions).map(function(version) {
            return 'node ' + version;
          });
        }
      },
      last_browser_major_versions: {
        matches: ['versions', 'browser'],
        regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
        select: function(context, node) {
          var data2 = checkName(node.browser, context);
          var validVersions = getMajorVersions(data2.released, node.versions);
          var list = validVersions.map(nameMapper(data2.name));
          if (data2.name === 'android') {
            list = filterAndroid(list, node.versions, context);
          }
          return list;
        }
      },
      last_electron_versions: {
        matches: ['versions'],
        regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
        select: function(context, node) {
          return Object.keys(e2c)
            .slice(-node.versions)
            .map(function(i) {
              return 'chrome ' + e2c[i];
            });
        }
      },
      last_node_versions: {
        matches: ['versions'],
        regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
        select: function(context, node) {
          return browserslist.nodeVersions.slice(-node.versions).map(function(version) {
            return 'node ' + version;
          });
        }
      },
      last_browser_versions: {
        matches: ['versions', 'browser'],
        regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
          var data2 = checkName(node.browser, context);
          var list = data2.released.slice(-node.versions).map(nameMapper(data2.name));
          if (data2.name === 'android') {
            list = filterAndroid(list, node.versions, context);
          }
          return list;
        }
      },
      unreleased_versions: {
        matches: [],
        regexp: /^unreleased\s+versions$/i,
        select: function(context) {
          return Object.keys(agents).reduce(function(selected, name) {
            var data2 = byName(name, context);
            if (!data2) return selected;
            var list = data2.versions.filter(function(v) {
              return data2.released.indexOf(v) === -1;
            });
            list = list.map(nameMapper(data2.name));
            return selected.concat(list);
          }, []);
        }
      },
      unreleased_electron_versions: {
        matches: [],
        regexp: /^unreleased\s+electron\s+versions?$/i,
        select: function() {
          return [];
        }
      },
      unreleased_browser_versions: {
        matches: ['browser'],
        regexp: /^unreleased\s+(\w+)\s+versions?$/i,
        select: function(context, node) {
          var data2 = checkName(node.browser, context);
          return data2.versions
            .filter(function(v) {
              return data2.released.indexOf(v) === -1;
            })
            .map(nameMapper(data2.name));
        }
      },
      last_years: {
        matches: ['years'],
        regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
        select: function(context, node) {
          return filterByYear(Date.now() - YEAR * node.years, context);
        }
      },
      since_y: {
        matches: ['year'],
        regexp: /^since (\d+)$/i,
        select: sinceQuery
      },
      since_y_m: {
        matches: ['year', 'month'],
        regexp: /^since (\d+)-(\d+)$/i,
        select: sinceQuery
      },
      since_y_m_d: {
        matches: ['year', 'month', 'day'],
        regexp: /^since (\d+)-(\d+)-(\d+)$/i,
        select: sinceQuery
      },
      popularity: {
        matches: ['sign', 'popularity'],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
        select: function(context, node) {
          var popularity = parseFloat(node.popularity);
          var usage2 = browserslist.usage.global;
          return Object.keys(usage2).reduce(function(result, version) {
            if (node.sign === '>') {
              if (usage2[version] > popularity) {
                result.push(version);
              }
            } else if (node.sign === '<') {
              if (usage2[version] < popularity) {
                result.push(version);
              }
            } else if (node.sign === '<=') {
              if (usage2[version] <= popularity) {
                result.push(version);
              }
            } else if (usage2[version] >= popularity) {
              result.push(version);
            }
            return result;
          }, []);
        }
      },
      popularity_in_my_stats: {
        matches: ['sign', 'popularity'],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
        select: function(context, node) {
          var popularity = parseFloat(node.popularity);
          if (!context.customUsage) {
            throw new BrowserslistError('Custom usage statistics was not provided');
          }
          var usage2 = context.customUsage;
          return Object.keys(usage2).reduce(function(result, version) {
            var percentage = usage2[version];
            if (percentage == null) {
              return result;
            }
            if (node.sign === '>') {
              if (percentage > popularity) {
                result.push(version);
              }
            } else if (node.sign === '<') {
              if (percentage < popularity) {
                result.push(version);
              }
            } else if (node.sign === '<=') {
              if (percentage <= popularity) {
                result.push(version);
              }
            } else if (percentage >= popularity) {
              result.push(version);
            }
            return result;
          }, []);
        }
      },
      popularity_in_config_stats: {
        matches: ['sign', 'popularity', 'config'],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
        select: function(context, node) {
          var popularity = parseFloat(node.popularity);
          var stats = env.loadStat(context, node.config, browserslist.data);
          if (stats) {
            context.customUsage = {};
            for (var browser in stats) {
              fillUsage(context.customUsage, browser, stats[browser]);
            }
          }
          if (!context.customUsage) {
            throw new BrowserslistError('Custom usage statistics was not provided');
          }
          var usage2 = context.customUsage;
          return Object.keys(usage2).reduce(function(result, version) {
            var percentage = usage2[version];
            if (percentage == null) {
              return result;
            }
            if (node.sign === '>') {
              if (percentage > popularity) {
                result.push(version);
              }
            } else if (node.sign === '<') {
              if (percentage < popularity) {
                result.push(version);
              }
            } else if (node.sign === '<=') {
              if (percentage <= popularity) {
                result.push(version);
              }
            } else if (percentage >= popularity) {
              result.push(version);
            }
            return result;
          }, []);
        }
      },
      popularity_in_place: {
        matches: ['sign', 'popularity', 'place'],
        regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
        select: function(context, node) {
          var popularity = parseFloat(node.popularity);
          var place = node.place;
          if (place.length === 2) {
            place = place.toUpperCase();
          } else {
            place = place.toLowerCase();
          }
          env.loadCountry(browserslist.usage, place, browserslist.data);
          var usage2 = browserslist.usage[place];
          return Object.keys(usage2).reduce(function(result, version) {
            var percentage = usage2[version];
            if (percentage == null) {
              return result;
            }
            if (node.sign === '>') {
              if (percentage > popularity) {
                result.push(version);
              }
            } else if (node.sign === '<') {
              if (percentage < popularity) {
                result.push(version);
              }
            } else if (node.sign === '<=') {
              if (percentage <= popularity) {
                result.push(version);
              }
            } else if (percentage >= popularity) {
              result.push(version);
            }
            return result;
          }, []);
        }
      },
      cover: {
        matches: ['coverage'],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
        select: coverQuery
      },
      cover_in: {
        matches: ['coverage', 'place'],
        regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
        select: coverQuery
      },
      supports: {
        matches: ['feature'],
        regexp: /^supports\s+([\w-]+)$/,
        select: function(context, node) {
          env.loadFeature(browserslist.cache, node.feature);
          var features = browserslist.cache[node.feature];
          return Object.keys(features).reduce(function(result, version) {
            var flags = features[version];
            if (flags.indexOf('y') >= 0 || flags.indexOf('a') >= 0) {
              result.push(version);
            }
            return result;
          }, []);
        }
      },
      electron_range: {
        matches: ['from', 'to'],
        regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
          var fromToUse = normalizeElectron(node.from);
          var toToUse = normalizeElectron(node.to);
          var from = parseFloat(node.from);
          var to = parseFloat(node.to);
          if (!e2c[fromToUse]) {
            throw new BrowserslistError('Unknown version ' + from + ' of electron');
          }
          if (!e2c[toToUse]) {
            throw new BrowserslistError('Unknown version ' + to + ' of electron');
          }
          return Object.keys(e2c)
            .filter(function(i) {
              var parsed = parseFloat(i);
              return parsed >= from && parsed <= to;
            })
            .map(function(i) {
              return 'chrome ' + e2c[i];
            });
        }
      },
      node_range: {
        matches: ['from', 'to'],
        regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
          return browserslist.nodeVersions
            .filter(semverFilterLoose('>=', node.from))
            .filter(semverFilterLoose('<=', node.to))
            .map(function(v) {
              return 'node ' + v;
            });
        }
      },
      browser_range: {
        matches: ['browser', 'from', 'to'],
        regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
        select: function(context, node) {
          var data2 = checkName(node.browser, context);
          var from = parseFloat(normalizeVersion(data2, node.from) || node.from);
          var to = parseFloat(normalizeVersion(data2, node.to) || node.to);
          function filter(v) {
            var parsed = parseFloat(v);
            return parsed >= from && parsed <= to;
          }
          return data2.released.filter(filter).map(nameMapper(data2.name));
        }
      },
      electron_ray: {
        matches: ['sign', 'version'],
        regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
          var versionToUse = normalizeElectron(node.version);
          return Object.keys(e2c)
            .filter(generateFilter(node.sign, versionToUse))
            .map(function(i) {
              return 'chrome ' + e2c[i];
            });
        }
      },
      node_ray: {
        matches: ['sign', 'version'],
        regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
        select: function(context, node) {
          return browserslist.nodeVersions.filter(generateSemverFilter(node.sign, node.version)).map(function(v) {
            return 'node ' + v;
          });
        }
      },
      browser_ray: {
        matches: ['browser', 'sign', 'version'],
        regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
        select: function(context, node) {
          var version = node.version;
          var data2 = checkName(node.browser, context);
          var alias = browserslist.versionAliases[data2.name][version];
          if (alias) version = alias;
          return data2.released.filter(generateFilter(node.sign, version)).map(function(v) {
            return data2.name + ' ' + v;
          });
        }
      },
      firefox_esr: {
        matches: [],
        regexp: /^(firefox|ff|fx)\s+esr$/i,
        select: function() {
          return ['firefox 102'];
        }
      },
      opera_mini_all: {
        matches: [],
        regexp: /(operamini|op_mini)\s+all/i,
        select: function() {
          return ['op_mini all'];
        }
      },
      electron_version: {
        matches: ['version'],
        regexp: /^electron\s+([\d.]+)$/i,
        select: function(context, node) {
          var versionToUse = normalizeElectron(node.version);
          var chrome = e2c[versionToUse];
          if (!chrome) {
            throw new BrowserslistError('Unknown version ' + node.version + ' of electron');
          }
          return ['chrome ' + chrome];
        }
      },
      node_major_version: {
        matches: ['version'],
        regexp: /^node\s+(\d+)$/i,
        select: nodeQuery
      },
      node_minor_version: {
        matches: ['version'],
        regexp: /^node\s+(\d+\.\d+)$/i,
        select: nodeQuery
      },
      node_patch_version: {
        matches: ['version'],
        regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
        select: nodeQuery
      },
      current_node: {
        matches: [],
        regexp: /^current\s+node$/i,
        select: function(context) {
          return [env.currentNode(resolve, context)];
        }
      },
      maintained_node: {
        matches: [],
        regexp: /^maintained\s+node\s+versions$/i,
        select: function(context) {
          var now = Date.now();
          var queries = Object.keys(jsEOL)
            .filter(function(key) {
              return now < Date.parse(jsEOL[key].end) && now > Date.parse(jsEOL[key].start) && isEolReleased(key);
            })
            .map(function(key) {
              return 'node ' + key.slice(1);
            });
          return resolve(queries, context);
        }
      },
      phantomjs_1_9: {
        matches: [],
        regexp: /^phantomjs\s+1.9$/i,
        select: function() {
          return ['safari 5'];
        }
      },
      phantomjs_2_1: {
        matches: [],
        regexp: /^phantomjs\s+2.1$/i,
        select: function() {
          return ['safari 6'];
        }
      },
      browser_version: {
        matches: ['browser', 'version'],
        regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
        select: function(context, node) {
          var version = node.version;
          if (/^tp$/i.test(version)) version = 'TP';
          var data2 = checkName(node.browser, context);
          var alias = normalizeVersion(data2, version);
          if (alias) {
            version = alias;
          } else {
            if (version.indexOf('.') === -1) {
              alias = version + '.0';
            } else {
              alias = version.replace(/\.0$/, '');
            }
            alias = normalizeVersion(data2, alias);
            if (alias) {
              version = alias;
            } else if (context.ignoreUnknownVersions) {
              return [];
            } else {
              throw new BrowserslistError('Unknown version ' + version + ' of ' + node.browser);
            }
          }
          return [data2.name + ' ' + version];
        }
      },
      browserslist_config: {
        matches: [],
        regexp: /^browserslist config$/i,
        select: function(context) {
          return browserslist(void 0, context);
        }
      },
      extends: {
        matches: ['config'],
        regexp: /^extends (.+)$/i,
        select: function(context, node) {
          return resolve(env.loadQueries(context, node.config), context);
        }
      },
      defaults: {
        matches: [],
        regexp: /^defaults$/i,
        select: function(context) {
          return resolve(browserslist.defaults, context);
        }
      },
      dead: {
        matches: [],
        regexp: /^dead$/i,
        select: function(context) {
          var dead = ['Baidu >= 0', 'ie <= 11', 'ie_mob <= 11', 'bb <= 10', 'op_mob <= 12.1', 'samsung 4'];
          return resolve(dead, context);
        }
      },
      unknown: {
        matches: [],
        regexp: /^(\w+)$/i,
        select: function(context, node) {
          if (byName(node.query, context)) {
            throw new BrowserslistError('Specify versions in Browserslist query for browser ' + node.query);
          } else {
            throw unknownQuery(node.query);
          }
        }
      }
    };
    (function() {
      for (var name in agents) {
        var browser = agents[name];
        browserslist.data[name] = {
          name,
          versions: normalize(agents[name].versions),
          released: normalize(agents[name].versions.slice(0, -3)),
          releaseDate: agents[name].release_date
        };
        fillUsage(browserslist.usage.global, name, browser.usage_global);
        browserslist.versionAliases[name] = {};
        for (var i = 0; i < browser.versions.length; i++) {
          var full = browser.versions[i];
          if (!full) continue;
          if (full.indexOf('-') !== -1) {
            var interval = full.split('-');
            for (var j = 0; j < interval.length; j++) {
              browserslist.versionAliases[name][interval[j]] = full;
            }
          }
        }
      }
      browserslist.versionAliases.op_mob['59'] = '58';
      browserslist.nodeVersions = jsReleases.map(function(release) {
        return release.version;
      });
    })();
    module.exports = browserslist;
  }
});

// esm-build-fd37ae926849255b8befec526c3df9701eda3962-45ad94fa/mod.js
var __module = __toESM(require_browserslist());
var {
  parse,
  cache,
  data,
  usage,
  defaults,
  aliases,
  desktopNames,
  versionAliases,
  clearCaches,
  parseConfig,
  readConfig,
  findConfig,
  loadConfig,
  coverage
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  aliases,
  cache,
  clearCaches,
  coverage,
  data,
  mod_default as default,
  defaults,
  desktopNames,
  findConfig,
  loadConfig,
  parse,
  parseConfig,
  readConfig,
  usage,
  versionAliases
};
