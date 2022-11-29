/* esm.sh - esbuild bundle(@babel/helper-compilation-targets@7.20.0) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import ___babel_compat_data_plugins$ from '/cdn/v99/@babel/compat-data@7.20.1/es2022/plugins.development.js';
import __semver$ from '/cdn/v99/semver@6.3.0/es2022/semver.development.js';
import ___babel_compat_data_native_modules$ from '/cdn/v99/@babel/compat-data@7.20.1/es2022/native-modules.development.js';
import ___babel_helper_validator_option$ from '/cdn/v99/@babel/helper-validator-option@7.18.6/es2022/helper-validator-option.development.js';
import __browserslist$ from '/cdn/v99/browserslist@4.21.4/es2022/browserslist.development.js';
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

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/targets.js
var require_targets = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/targets.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.unreleasedLabels = exports.browserNameMap = void 0;
    var unreleasedLabels2 = {
      safari: 'tp'
    };
    exports.unreleasedLabels = unreleasedLabels2;
    var browserNameMap = {
      and_chr: 'chrome',
      and_ff: 'firefox',
      android: 'android',
      chrome: 'chrome',
      edge: 'edge',
      firefox: 'firefox',
      ie: 'ie',
      ie_mob: 'ie',
      ios_saf: 'ios',
      node: 'node',
      deno: 'deno',
      op_mob: 'opera',
      opera: 'opera',
      safari: 'safari',
      samsung: 'samsung'
    };
    exports.browserNameMap = browserNameMap;
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/utils.js
var require_utils = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/utils.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.getHighestUnreleased = getHighestUnreleased;
    exports.getLowestImplementedVersion = getLowestImplementedVersion;
    exports.getLowestUnreleased = getLowestUnreleased;
    exports.isUnreleasedVersion = isUnreleasedVersion;
    exports.semverMin = semverMin;
    exports.semverify = semverify;
    var _semver = __semver$;
    var _helperValidatorOption = ___babel_helper_validator_option$;
    var _targets = require_targets();
    var versionRegExp = /^(\d+|\d+.\d+)$/;
    var v = new _helperValidatorOption.OptionValidator('@babel/helper-compilation-targets');
    function semverMin(first, second) {
      return first && _semver.lt(first, second) ? first : second;
    }
    function semverify(version) {
      if (typeof version === 'string' && _semver.valid(version)) {
        return version;
      }
      v.invariant(
        typeof version === 'number' || (typeof version === 'string' && versionRegExp.test(version)),
        `'${version}' is not a valid version`
      );
      const split = version.toString().split('.');
      while (split.length < 3) {
        split.push('0');
      }
      return split.join('.');
    }
    function isUnreleasedVersion(version, env) {
      const unreleasedLabel = _targets.unreleasedLabels[env];
      return !!unreleasedLabel && unreleasedLabel === version.toString().toLowerCase();
    }
    function getLowestUnreleased(a, b, env) {
      const unreleasedLabel = _targets.unreleasedLabels[env];
      if (a === unreleasedLabel) {
        return b;
      }
      if (b === unreleasedLabel) {
        return a;
      }
      return semverMin(a, b);
    }
    function getHighestUnreleased(a, b, env) {
      return getLowestUnreleased(a, b, env) === a ? b : a;
    }
    function getLowestImplementedVersion(plugin, environment) {
      const result = plugin[environment];
      if (!result && environment === 'android') {
        return plugin.chrome;
      }
      return result;
    }
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/options.js
var require_options = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/options.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.TargetNames = void 0;
    var TargetNames2 = {
      node: 'node',
      deno: 'deno',
      chrome: 'chrome',
      opera: 'opera',
      edge: 'edge',
      firefox: 'firefox',
      safari: 'safari',
      ie: 'ie',
      ios: 'ios',
      android: 'android',
      electron: 'electron',
      samsung: 'samsung',
      rhino: 'rhino'
    };
    exports.TargetNames = TargetNames2;
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/pretty.js
var require_pretty = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/pretty.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.prettifyTargets = prettifyTargets2;
    exports.prettifyVersion = prettifyVersion;
    var _semver = __semver$;
    var _targets = require_targets();
    function prettifyVersion(version) {
      if (typeof version !== 'string') {
        return version;
      }
      const parts = [_semver.major(version)];
      const minor = _semver.minor(version);
      const patch = _semver.patch(version);
      if (minor || patch) {
        parts.push(minor);
      }
      if (patch) {
        parts.push(patch);
      }
      return parts.join('.');
    }
    function prettifyTargets2(targets) {
      return Object.keys(targets).reduce((results, target) => {
        let value = targets[target];
        const unreleasedLabel = _targets.unreleasedLabels[target];
        if (typeof value === 'string' && unreleasedLabel !== value) {
          value = prettifyVersion(value);
        }
        results[target] = value;
        return results;
      }, {});
    }
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/debug.js
var require_debug = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/debug.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.getInclusionReasons = getInclusionReasons2;
    var _semver = __semver$;
    var _pretty = require_pretty();
    var _utils = require_utils();
    function getInclusionReasons2(item, targetVersions, list) {
      const minVersions = list[item] || {};
      return Object.keys(targetVersions).reduce((result, env) => {
        const minVersion = (0, _utils.getLowestImplementedVersion)(minVersions, env);
        const targetVersion = targetVersions[env];
        if (!minVersion) {
          result[env] = (0, _pretty.prettifyVersion)(targetVersion);
        } else {
          const minIsUnreleased = (0, _utils.isUnreleasedVersion)(minVersion, env);
          const targetIsUnreleased = (0, _utils.isUnreleasedVersion)(targetVersion, env);
          if (
            !targetIsUnreleased &&
            (minIsUnreleased || _semver.lt(targetVersion.toString(), (0, _utils.semverify)(minVersion)))
          ) {
            result[env] = (0, _pretty.prettifyVersion)(targetVersion);
          }
        }
        return result;
      }, {});
    }
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/filter-items.js
var require_filter_items = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/filter-items.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = filterItems2;
    exports.isRequired = isRequired2;
    exports.targetsSupported = targetsSupported;
    var _semver = __semver$;
    var _plugins = ___babel_compat_data_plugins$;
    var _utils = require_utils();
    function targetsSupported(target, support) {
      const targetEnvironments = Object.keys(target);
      if (targetEnvironments.length === 0) {
        return false;
      }
      const unsupportedEnvironments = targetEnvironments.filter(environment => {
        const lowestImplementedVersion = (0, _utils.getLowestImplementedVersion)(support, environment);
        if (!lowestImplementedVersion) {
          return true;
        }
        const lowestTargetedVersion = target[environment];
        if ((0, _utils.isUnreleasedVersion)(lowestTargetedVersion, environment)) {
          return false;
        }
        if ((0, _utils.isUnreleasedVersion)(lowestImplementedVersion, environment)) {
          return true;
        }
        if (!_semver.valid(lowestTargetedVersion.toString())) {
          throw new Error(
            `Invalid version passed for target "${environment}": "${lowestTargetedVersion}". Versions must be in semver format (major.minor.patch)`
          );
        }
        return _semver.gt((0, _utils.semverify)(lowestImplementedVersion), lowestTargetedVersion.toString());
      });
      return unsupportedEnvironments.length === 0;
    }
    function isRequired2(name, targets, { compatData = _plugins, includes, excludes } = {}) {
      if (excludes != null && excludes.has(name)) return false;
      if (includes != null && includes.has(name)) return true;
      return !targetsSupported(targets, compatData[name]);
    }
    function filterItems2(list, includes, excludes, targets, defaultIncludes, defaultExcludes, pluginSyntaxMap) {
      const result = /* @__PURE__ */ new Set();
      const options = {
        compatData: list,
        includes,
        excludes
      };
      for (const item in list) {
        if (isRequired2(item, targets, options)) {
          result.add(item);
        } else if (pluginSyntaxMap) {
          const shippedProposalsSyntax = pluginSyntaxMap.get(item);
          if (shippedProposalsSyntax) {
            result.add(shippedProposalsSyntax);
          }
        }
      }
      if (defaultIncludes) {
        defaultIncludes.forEach(item => !excludes.has(item) && result.add(item));
      }
      if (defaultExcludes) {
        defaultExcludes.forEach(item => !includes.has(item) && result.delete(item));
      }
      return result;
    }
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/index.js
var require_lib = __commonJS({
  'esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/node_modules/@babel/helper-compilation-targets/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    Object.defineProperty(exports, 'TargetNames', {
      enumerable: true,
      get: function() {
        return _options.TargetNames;
      }
    });
    exports.default = getTargets;
    Object.defineProperty(exports, 'filterItems', {
      enumerable: true,
      get: function() {
        return _filterItems.default;
      }
    });
    Object.defineProperty(exports, 'getInclusionReasons', {
      enumerable: true,
      get: function() {
        return _debug.getInclusionReasons;
      }
    });
    exports.isBrowsersQueryValid = isBrowsersQueryValid2;
    Object.defineProperty(exports, 'isRequired', {
      enumerable: true,
      get: function() {
        return _filterItems.isRequired;
      }
    });
    Object.defineProperty(exports, 'prettifyTargets', {
      enumerable: true,
      get: function() {
        return _pretty.prettifyTargets;
      }
    });
    Object.defineProperty(exports, 'unreleasedLabels', {
      enumerable: true,
      get: function() {
        return _targets.unreleasedLabels;
      }
    });
    var _browserslist = __browserslist$;
    var _helperValidatorOption = ___babel_helper_validator_option$;
    var _nativeModules = ___babel_compat_data_native_modules$;
    var _utils = require_utils();
    var _targets = require_targets();
    var _options = require_options();
    var _pretty = require_pretty();
    var _debug = require_debug();
    var _filterItems = require_filter_items();
    var ESM_SUPPORT = _nativeModules['es6.module'];
    var v = new _helperValidatorOption.OptionValidator('@babel/helper-compilation-targets');
    function validateTargetNames(targets) {
      const validTargets = Object.keys(_options.TargetNames);
      for (const target of Object.keys(targets)) {
        if (!(target in _options.TargetNames)) {
          throw new Error(
            v.formatMessage(`'${target}' is not a valid target
- Did you mean '${(0, _helperValidatorOption.findSuggestion)(target, validTargets)}'?`)
          );
        }
      }
      return targets;
    }
    function isBrowsersQueryValid2(browsers) {
      return typeof browsers === 'string' || (Array.isArray(browsers) && browsers.every(b => typeof b === 'string'));
    }
    function validateBrowsers(browsers) {
      v.invariant(
        browsers === void 0 || isBrowsersQueryValid2(browsers),
        `'${String(browsers)}' is not a valid browserslist query`
      );
      return browsers;
    }
    function getLowestVersions(browsers) {
      return browsers.reduce((all, browser) => {
        const [browserName, browserVersion] = browser.split(' ');
        const target = _targets.browserNameMap[browserName];
        if (!target) {
          return all;
        }
        try {
          const splitVersion = browserVersion.split('-')[0].toLowerCase();
          const isSplitUnreleased = (0, _utils.isUnreleasedVersion)(splitVersion, target);
          if (!all[target]) {
            all[target] = isSplitUnreleased ? splitVersion : (0, _utils.semverify)(splitVersion);
            return all;
          }
          const version = all[target];
          const isUnreleased = (0, _utils.isUnreleasedVersion)(version, target);
          if (isUnreleased && isSplitUnreleased) {
            all[target] = (0, _utils.getLowestUnreleased)(version, splitVersion, target);
          } else if (isUnreleased) {
            all[target] = (0, _utils.semverify)(splitVersion);
          } else if (!isUnreleased && !isSplitUnreleased) {
            const parsedBrowserVersion = (0, _utils.semverify)(splitVersion);
            all[target] = (0, _utils.semverMin)(version, parsedBrowserVersion);
          }
        } catch (e) {}
        return all;
      }, {});
    }
    function outputDecimalWarning(decimalTargets) {
      if (!decimalTargets.length) {
        return;
      }
      console.warn('Warning, the following targets are using a decimal version:\n');
      decimalTargets.forEach(({ target, value }) => console.warn(`  ${target}: ${value}`));
      console.warn(`
We recommend using a string for minor/patch versions to avoid numbers like 6.10
getting parsed as 6.1, which can lead to unexpected behavior.
`);
    }
    function semverifyTarget(target, value) {
      try {
        return (0, _utils.semverify)(value);
      } catch (error) {
        throw new Error(v.formatMessage(`'${value}' is not a valid value for 'targets.${target}'.`));
      }
    }
    function nodeTargetParser(value) {
      const parsed = value === true || value === 'current' ? __Process$.versions.node : semverifyTarget('node', value);
      return ['node', parsed];
    }
    function defaultTargetParser(target, value) {
      const version = (0, _utils.isUnreleasedVersion)(value, target)
        ? value.toLowerCase()
        : semverifyTarget(target, value);
      return [target, version];
    }
    function generateTargets(inputTargets) {
      const input = Object.assign({}, inputTargets);
      delete input.esmodules;
      delete input.browsers;
      return input;
    }
    function resolveTargets(queries, env) {
      const resolved = _browserslist(queries, {
        mobileToDesktop: true,
        env
      });
      return getLowestVersions(resolved);
    }
    function getTargets(inputTargets = {}, options = {}) {
      var _browsers, _browsers2;
      let { browsers, esmodules } = inputTargets;
      const { configPath = '.' } = options;
      validateBrowsers(browsers);
      const input = generateTargets(inputTargets);
      let targets = validateTargetNames(input);
      const shouldParseBrowsers = !!browsers;
      const hasTargets = shouldParseBrowsers || Object.keys(targets).length > 0;
      const shouldSearchForConfig = !options.ignoreBrowserslistConfig && !hasTargets;
      if (!browsers && shouldSearchForConfig) {
        browsers = _browserslist.loadConfig({
          config: options.configFile,
          path: configPath,
          env: options.browserslistEnv
        });
        if (browsers == null) {
          {
            browsers = [];
          }
        }
      }
      if (esmodules && (esmodules !== 'intersect' || !((_browsers = browsers) != null && _browsers.length))) {
        browsers = Object.keys(ESM_SUPPORT)
          .map(browser => `${browser} >= ${ESM_SUPPORT[browser]}`)
          .join(', ');
        esmodules = false;
      }
      if ((_browsers2 = browsers) != null && _browsers2.length) {
        const queryBrowsers = resolveTargets(browsers, options.browserslistEnv);
        if (esmodules === 'intersect') {
          for (const browser of Object.keys(queryBrowsers)) {
            const version = queryBrowsers[browser];
            const esmSupportVersion = ESM_SUPPORT[browser];
            if (esmSupportVersion) {
              queryBrowsers[browser] = (0, _utils.getHighestUnreleased)(
                version,
                (0, _utils.semverify)(esmSupportVersion),
                browser
              );
            } else {
              delete queryBrowsers[browser];
            }
          }
        }
        targets = Object.assign(queryBrowsers, targets);
      }
      const result = {};
      const decimalWarnings = [];
      for (const target of Object.keys(targets).sort()) {
        const value = targets[target];
        if (typeof value === 'number' && value % 1 !== 0) {
          decimalWarnings.push({
            target,
            value
          });
        }
        const [parsedTarget, parsedValue] =
          target === 'node' ? nodeTargetParser(value) : defaultTargetParser(target, value);
        if (parsedValue) {
          result[parsedTarget] = parsedValue;
        }
      }
      outputDecimalWarning(decimalWarnings);
      return result;
    }
  }
});

// esm-build-aa77a3b7da6d7d1e8e7c61ffb3b203a83d09e254-3ca7f23e/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var {
  TargetNames,
  filterItems,
  getInclusionReasons,
  isBrowsersQueryValid,
  isRequired,
  prettifyTargets,
  unreleasedLabels
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  TargetNames,
  __esModule,
  mod_default as default,
  filterItems,
  getInclusionReasons,
  isBrowsersQueryValid,
  isRequired,
  prettifyTargets,
  unreleasedLabels
};
