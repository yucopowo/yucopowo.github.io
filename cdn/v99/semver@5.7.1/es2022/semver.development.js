/* esm.sh - esbuild bundle(semver@5.7.1) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
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

// esm-build-431ef2b9605e5187730909200f0c6c4ddca1e7c1-f15f8418/node_modules/semver/semver.js
var require_semver = __commonJS({
  'esm-build-431ef2b9605e5187730909200f0c6c4ddca1e7c1-f15f8418/node_modules/semver/semver.js'(exports, module) {
    exports = module.exports = SemVer2;
    var debug;
    if (
      typeof __Process$ === 'object' &&
      __Process$.env &&
      __Process$.env.NODE_DEBUG &&
      /\bsemver\b/i.test(__Process$.env.NODE_DEBUG)
    ) {
      debug = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift('SEMVER');
        console.log.apply(console, args);
      };
    } else {
      debug = function() {};
    }
    exports.SEMVER_SPEC_VERSION = '2.0.0';
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var re = (exports.re = []);
    var src = (exports.src = []);
    var R = 0;
    var NUMERICIDENTIFIER = R++;
    src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
    var NUMERICIDENTIFIERLOOSE = R++;
    src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
    var NONNUMERICIDENTIFIER = R++;
    src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
    var MAINVERSION = R++;
    src[MAINVERSION] =
      '(' + src[NUMERICIDENTIFIER] + ')\\.(' + src[NUMERICIDENTIFIER] + ')\\.(' + src[NUMERICIDENTIFIER] + ')';
    var MAINVERSIONLOOSE = R++;
    src[MAINVERSIONLOOSE] =
      '(' +
      src[NUMERICIDENTIFIERLOOSE] +
      ')\\.(' +
      src[NUMERICIDENTIFIERLOOSE] +
      ')\\.(' +
      src[NUMERICIDENTIFIERLOOSE] +
      ')';
    var PRERELEASEIDENTIFIER = R++;
    src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
    var PRERELEASEIDENTIFIERLOOSE = R++;
    src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
    var PRERELEASE = R++;
    src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
    var PRERELEASELOOSE = R++;
    src[PRERELEASELOOSE] =
      '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
    var BUILDIDENTIFIER = R++;
    src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
    var BUILD = R++;
    src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
    var FULL = R++;
    var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
    src[FULL] = '^' + FULLPLAIN + '$';
    var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
    var LOOSE = R++;
    src[LOOSE] = '^' + LOOSEPLAIN + '$';
    var GTLT = R++;
    src[GTLT] = '((?:<|>)?=?)';
    var XRANGEIDENTIFIERLOOSE = R++;
    src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
    var XRANGEIDENTIFIER = R++;
    src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
    var XRANGEPLAIN = R++;
    src[XRANGEPLAIN] =
      '[v=\\s]*(' +
      src[XRANGEIDENTIFIER] +
      ')(?:\\.(' +
      src[XRANGEIDENTIFIER] +
      ')(?:\\.(' +
      src[XRANGEIDENTIFIER] +
      ')(?:' +
      src[PRERELEASE] +
      ')?' +
      src[BUILD] +
      '?)?)?';
    var XRANGEPLAINLOOSE = R++;
    src[XRANGEPLAINLOOSE] =
      '[v=\\s]*(' +
      src[XRANGEIDENTIFIERLOOSE] +
      ')(?:\\.(' +
      src[XRANGEIDENTIFIERLOOSE] +
      ')(?:\\.(' +
      src[XRANGEIDENTIFIERLOOSE] +
      ')(?:' +
      src[PRERELEASELOOSE] +
      ')?' +
      src[BUILD] +
      '?)?)?';
    var XRANGE = R++;
    src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
    var XRANGELOOSE = R++;
    src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
    var COERCE = R++;
    src[COERCE] =
      '(?:^|[^\\d])(\\d{1,' +
      MAX_SAFE_COMPONENT_LENGTH +
      '})(?:\\.(\\d{1,' +
      MAX_SAFE_COMPONENT_LENGTH +
      '}))?(?:\\.(\\d{1,' +
      MAX_SAFE_COMPONENT_LENGTH +
      '}))?(?:$|[^\\d])';
    var LONETILDE = R++;
    src[LONETILDE] = '(?:~>?)';
    var TILDETRIM = R++;
    src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
    re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
    var tildeTrimReplace = '$1~';
    var TILDE = R++;
    src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
    var TILDELOOSE = R++;
    src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
    var LONECARET = R++;
    src[LONECARET] = '(?:\\^)';
    var CARETTRIM = R++;
    src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
    re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
    var caretTrimReplace = '$1^';
    var CARET = R++;
    src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
    var CARETLOOSE = R++;
    src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
    var COMPARATORLOOSE = R++;
    src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
    var COMPARATOR = R++;
    src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
    var COMPARATORTRIM = R++;
    src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
    re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
    var comparatorTrimReplace = '$1$2$3';
    var HYPHENRANGE = R++;
    src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')\\s+-\\s+(' + src[XRANGEPLAIN] + ')\\s*$';
    var HYPHENRANGELOOSE = R++;
    src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')\\s+-\\s+(' + src[XRANGEPLAINLOOSE] + ')\\s*$';
    var STAR = R++;
    src[STAR] = '(<|>)?=?\\s*\\*';
    for (i = 0; i < R; i++) {
      debug(i, src[i]);
      if (!re[i]) {
        re[i] = new RegExp(src[i]);
      }
    }
    var i;
    exports.parse = parse2;
    function parse2(version, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (version instanceof SemVer2) {
        return version;
      }
      if (typeof version !== 'string') {
        return null;
      }
      if (version.length > MAX_LENGTH) {
        return null;
      }
      var r = options.loose ? re[LOOSE] : re[FULL];
      if (!r.test(version)) {
        return null;
      }
      try {
        return new SemVer2(version, options);
      } catch (er) {
        return null;
      }
    }
    exports.valid = valid2;
    function valid2(version, options) {
      var v = parse2(version, options);
      return v ? v.version : null;
    }
    exports.clean = clean2;
    function clean2(version, options) {
      var s = parse2(version.trim().replace(/^[=v]+/, ''), options);
      return s ? s.version : null;
    }
    exports.SemVer = SemVer2;
    function SemVer2(version, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (version instanceof SemVer2) {
        if (version.loose === options.loose) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== 'string') {
        throw new TypeError('Invalid Version: ' + version);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
      }
      if (!(this instanceof SemVer2)) {
        return new SemVer2(version, options);
      }
      debug('SemVer', version, options);
      this.options = options;
      this.loose = !!options.loose;
      var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL]);
      if (!m) {
        throw new TypeError('Invalid Version: ' + version);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError('Invalid major version');
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError('Invalid minor version');
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError('Invalid patch version');
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split('.').map(function(id) {
          if (/^[0-9]+$/.test(id)) {
            var num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split('.') : [];
      this.format();
    }
    SemVer2.prototype.format = function() {
      this.version = this.major + '.' + this.minor + '.' + this.patch;
      if (this.prerelease.length) {
        this.version += '-' + this.prerelease.join('.');
      }
      return this.version;
    };
    SemVer2.prototype.toString = function() {
      return this.version;
    };
    SemVer2.prototype.compare = function(other) {
      debug('SemVer.compare', this.version, this.options, other);
      if (!(other instanceof SemVer2)) {
        other = new SemVer2(other, this.options);
      }
      return this.compareMain(other) || this.comparePre(other);
    };
    SemVer2.prototype.compareMain = function(other) {
      if (!(other instanceof SemVer2)) {
        other = new SemVer2(other, this.options);
      }
      return (
        compareIdentifiers2(this.major, other.major) ||
        compareIdentifiers2(this.minor, other.minor) ||
        compareIdentifiers2(this.patch, other.patch)
      );
    };
    SemVer2.prototype.comparePre = function(other) {
      if (!(other instanceof SemVer2)) {
        other = new SemVer2(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      var i2 = 0;
      do {
        var a = this.prerelease[i2];
        var b = other.prerelease[i2];
        debug('prerelease compare', i2, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers2(a, b);
        }
      } while (++i2);
    };
    SemVer2.prototype.inc = function(release, identifier) {
      switch (release) {
        case 'premajor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc('pre', identifier);
          break;
        case 'preminor':
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc('pre', identifier);
          break;
        case 'prepatch':
          this.prerelease.length = 0;
          this.inc('patch', identifier);
          this.inc('pre', identifier);
          break;
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', identifier);
          }
          this.inc('pre', identifier);
          break;
        case 'major':
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case 'minor':
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case 'patch':
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0];
          } else {
            var i2 = this.prerelease.length;
            while (--i2 >= 0) {
              if (typeof this.prerelease[i2] === 'number') {
                this.prerelease[i2]++;
                i2 = -2;
              }
            }
            if (i2 === -1) {
              this.prerelease.push(0);
            }
          }
          if (identifier) {
            if (this.prerelease[0] === identifier) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0];
              }
            } else {
              this.prerelease = [identifier, 0];
            }
          }
          break;
        default:
          throw new Error('invalid increment argument: ' + release);
      }
      this.format();
      this.raw = this.version;
      return this;
    };
    exports.inc = inc2;
    function inc2(version, release, loose, identifier) {
      if (typeof loose === 'string') {
        identifier = loose;
        loose = void 0;
      }
      try {
        return new SemVer2(version, loose).inc(release, identifier).version;
      } catch (er) {
        return null;
      }
    }
    exports.diff = diff2;
    function diff2(version1, version2) {
      if (eq2(version1, version2)) {
        return null;
      } else {
        var v1 = parse2(version1);
        var v2 = parse2(version2);
        var prefix = '';
        if (v1.prerelease.length || v2.prerelease.length) {
          prefix = 'pre';
          var defaultResult = 'prerelease';
        }
        for (var key in v1) {
          if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) {
              return prefix + key;
            }
          }
        }
        return defaultResult;
      }
    }
    exports.compareIdentifiers = compareIdentifiers2;
    var numeric = /^[0-9]+$/;
    function compareIdentifiers2(a, b) {
      var anum = numeric.test(a);
      var bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    }
    exports.rcompareIdentifiers = rcompareIdentifiers2;
    function rcompareIdentifiers2(a, b) {
      return compareIdentifiers2(b, a);
    }
    exports.major = major2;
    function major2(a, loose) {
      return new SemVer2(a, loose).major;
    }
    exports.minor = minor2;
    function minor2(a, loose) {
      return new SemVer2(a, loose).minor;
    }
    exports.patch = patch2;
    function patch2(a, loose) {
      return new SemVer2(a, loose).patch;
    }
    exports.compare = compare2;
    function compare2(a, b, loose) {
      return new SemVer2(a, loose).compare(new SemVer2(b, loose));
    }
    exports.compareLoose = compareLoose2;
    function compareLoose2(a, b) {
      return compare2(a, b, true);
    }
    exports.rcompare = rcompare2;
    function rcompare2(a, b, loose) {
      return compare2(b, a, loose);
    }
    exports.sort = sort2;
    function sort2(list, loose) {
      return list.sort(function(a, b) {
        return exports.compare(a, b, loose);
      });
    }
    exports.rsort = rsort2;
    function rsort2(list, loose) {
      return list.sort(function(a, b) {
        return exports.rcompare(a, b, loose);
      });
    }
    exports.gt = gt2;
    function gt2(a, b, loose) {
      return compare2(a, b, loose) > 0;
    }
    exports.lt = lt2;
    function lt2(a, b, loose) {
      return compare2(a, b, loose) < 0;
    }
    exports.eq = eq2;
    function eq2(a, b, loose) {
      return compare2(a, b, loose) === 0;
    }
    exports.neq = neq2;
    function neq2(a, b, loose) {
      return compare2(a, b, loose) !== 0;
    }
    exports.gte = gte2;
    function gte2(a, b, loose) {
      return compare2(a, b, loose) >= 0;
    }
    exports.lte = lte2;
    function lte2(a, b, loose) {
      return compare2(a, b, loose) <= 0;
    }
    exports.cmp = cmp2;
    function cmp2(a, op, b, loose) {
      switch (op) {
        case '===':
          if (typeof a === 'object') a = a.version;
          if (typeof b === 'object') b = b.version;
          return a === b;
        case '!==':
          if (typeof a === 'object') a = a.version;
          if (typeof b === 'object') b = b.version;
          return a !== b;
        case '':
        case '=':
        case '==':
          return eq2(a, b, loose);
        case '!=':
          return neq2(a, b, loose);
        case '>':
          return gt2(a, b, loose);
        case '>=':
          return gte2(a, b, loose);
        case '<':
          return lt2(a, b, loose);
        case '<=':
          return lte2(a, b, loose);
        default:
          throw new TypeError('Invalid operator: ' + op);
      }
    }
    exports.Comparator = Comparator2;
    function Comparator2(comp, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (comp instanceof Comparator2) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      if (!(this instanceof Comparator2)) {
        return new Comparator2(comp, options);
      }
      debug('comparator', comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = '';
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug('comp', this);
    }
    var ANY = {};
    Comparator2.prototype.parse = function(comp) {
      var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
      var m = comp.match(r);
      if (!m) {
        throw new TypeError('Invalid comparator: ' + comp);
      }
      this.operator = m[1];
      if (this.operator === '=') {
        this.operator = '';
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer2(m[2], this.options.loose);
      }
    };
    Comparator2.prototype.toString = function() {
      return this.value;
    };
    Comparator2.prototype.test = function(version) {
      debug('Comparator.test', version, this.options.loose);
      if (this.semver === ANY) {
        return true;
      }
      if (typeof version === 'string') {
        version = new SemVer2(version, this.options);
      }
      return cmp2(version, this.operator, this.semver, this.options);
    };
    Comparator2.prototype.intersects = function(comp, options) {
      if (!(comp instanceof Comparator2)) {
        throw new TypeError('a Comparator is required');
      }
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      var rangeTmp;
      if (this.operator === '') {
        rangeTmp = new Range2(comp.value, options);
        return satisfies2(this.value, rangeTmp, options);
      } else if (comp.operator === '') {
        rangeTmp = new Range2(this.value, options);
        return satisfies2(comp.semver, rangeTmp, options);
      }
      var sameDirectionIncreasing =
        (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
      var sameDirectionDecreasing =
        (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
      var sameSemVer = this.semver.version === comp.semver.version;
      var differentDirectionsInclusive =
        (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
      var oppositeDirectionsLessThan =
        cmp2(this.semver, '<', comp.semver, options) &&
        (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<');
      var oppositeDirectionsGreaterThan =
        cmp2(this.semver, '>', comp.semver, options) &&
        (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>');
      return (
        sameDirectionIncreasing ||
        sameDirectionDecreasing ||
        (sameSemVer && differentDirectionsInclusive) ||
        oppositeDirectionsLessThan ||
        oppositeDirectionsGreaterThan
      );
    };
    exports.Range = Range2;
    function Range2(range, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        };
      }
      if (range instanceof Range2) {
        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
          return range;
        } else {
          return new Range2(range.raw, options);
        }
      }
      if (range instanceof Comparator2) {
        return new Range2(range.value, options);
      }
      if (!(this instanceof Range2)) {
        return new Range2(range, options);
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range;
      this.set = range
        .split(/\s*\|\|\s*/)
        .map(function(range2) {
          return this.parseRange(range2.trim());
        }, this)
        .filter(function(c) {
          return c.length;
        });
      if (!this.set.length) {
        throw new TypeError('Invalid SemVer Range: ' + range);
      }
      this.format();
    }
    Range2.prototype.format = function() {
      this.range = this.set
        .map(function(comps) {
          return comps.join(' ').trim();
        })
        .join('||')
        .trim();
      return this.range;
    };
    Range2.prototype.toString = function() {
      return this.range;
    };
    Range2.prototype.parseRange = function(range) {
      var loose = this.options.loose;
      range = range.trim();
      var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
      range = range.replace(hr, hyphenReplace);
      debug('hyphen replace', range);
      range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
      debug('comparator trim', range, re[COMPARATORTRIM]);
      range = range.replace(re[TILDETRIM], tildeTrimReplace);
      range = range.replace(re[CARETTRIM], caretTrimReplace);
      range = range.split(/\s+/).join(' ');
      var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
      var set = range
        .split(' ')
        .map(function(comp) {
          return parseComparator(comp, this.options);
        }, this)
        .join(' ')
        .split(/\s+/);
      if (this.options.loose) {
        set = set.filter(function(comp) {
          return !!comp.match(compRe);
        });
      }
      set = set.map(function(comp) {
        return new Comparator2(comp, this.options);
      }, this);
      return set;
    };
    Range2.prototype.intersects = function(range, options) {
      if (!(range instanceof Range2)) {
        throw new TypeError('a Range is required');
      }
      return this.set.some(function(thisComparators) {
        return thisComparators.every(function(thisComparator) {
          return range.set.some(function(rangeComparators) {
            return rangeComparators.every(function(rangeComparator) {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    };
    exports.toComparators = toComparators2;
    function toComparators2(range, options) {
      return new Range2(range, options).set.map(function(comp) {
        return comp
          .map(function(c) {
            return c.value;
          })
          .join(' ')
          .trim()
          .split(' ');
      });
    }
    function parseComparator(comp, options) {
      debug('comp', comp, options);
      comp = replaceCarets(comp, options);
      debug('caret', comp);
      comp = replaceTildes(comp, options);
      debug('tildes', comp);
      comp = replaceXRanges(comp, options);
      debug('xrange', comp);
      comp = replaceStars(comp, options);
      debug('stars', comp);
      return comp;
    }
    function isX(id) {
      return !id || id.toLowerCase() === 'x' || id === '*';
    }
    function replaceTildes(comp, options) {
      return comp
        .trim()
        .split(/\s+/)
        .map(function(comp2) {
          return replaceTilde(comp2, options);
        })
        .join(' ');
    }
    function replaceTilde(comp, options) {
      var r = options.loose ? re[TILDELOOSE] : re[TILDE];
      return comp.replace(r, function(_, M, m, p, pr) {
        debug('tilde', comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
        } else if (isX(p)) {
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
        } else if (pr) {
          debug('replaceTilde pr', pr);
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
        } else {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        }
        debug('tilde return', ret);
        return ret;
      });
    }
    function replaceCarets(comp, options) {
      return comp
        .trim()
        .split(/\s+/)
        .map(function(comp2) {
          return replaceCaret(comp2, options);
        })
        .join(' ');
    }
    function replaceCaret(comp, options) {
      debug('caret', comp, options);
      var r = options.loose ? re[CARETLOOSE] : re[CARET];
      return comp.replace(r, function(_, M, m, p, pr) {
        debug('caret', comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
        } else if (isX(p)) {
          if (M === '0') {
            ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
          } else {
            ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
          }
        } else if (pr) {
          debug('replaceCaret pr', pr);
          if (M === '0') {
            if (m === '0') {
              ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + m + '.' + (+p + 1);
            } else {
              ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
            }
          } else {
            ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0';
          }
        } else {
          debug('no pr');
          if (M === '0') {
            if (m === '0') {
              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
            } else {
              ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
            }
          } else {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
          }
        }
        debug('caret return', ret);
        return ret;
      });
    }
    function replaceXRanges(comp, options) {
      debug('replaceXRanges', comp, options);
      return comp
        .split(/\s+/)
        .map(function(comp2) {
          return replaceXRange(comp2, options);
        })
        .join(' ');
    }
    function replaceXRange(comp, options) {
      comp = comp.trim();
      var r = options.loose ? re[XRANGELOOSE] : re[XRANGE];
      return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        var xM = isX(M);
        var xm = xM || isX(m);
        var xp = xm || isX(p);
        var anyX = xp;
        if (gtlt === '=' && anyX) {
          gtlt = '';
        }
        if (xM) {
          if (gtlt === '>' || gtlt === '<') {
            ret = '<0.0.0';
          } else {
            ret = '*';
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === '>') {
            gtlt = '>=';
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === '<=') {
            gtlt = '<';
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          ret = gtlt + M + '.' + m + '.' + p;
        } else if (xm) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
        } else if (xp) {
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
        }
        debug('xRange return', ret);
        return ret;
      });
    }
    function replaceStars(comp, options) {
      debug('replaceStars', comp, options);
      return comp.trim().replace(re[STAR], '');
    }
    function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
      if (isX(fM)) {
        from = '';
      } else if (isX(fm)) {
        from = '>=' + fM + '.0.0';
      } else if (isX(fp)) {
        from = '>=' + fM + '.' + fm + '.0';
      } else {
        from = '>=' + from;
      }
      if (isX(tM)) {
        to = '';
      } else if (isX(tm)) {
        to = '<' + (+tM + 1) + '.0.0';
      } else if (isX(tp)) {
        to = '<' + tM + '.' + (+tm + 1) + '.0';
      } else if (tpr) {
        to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
      } else {
        to = '<=' + to;
      }
      return (from + ' ' + to).trim();
    }
    Range2.prototype.test = function(version) {
      if (!version) {
        return false;
      }
      if (typeof version === 'string') {
        version = new SemVer2(version, this.options);
      }
      for (var i2 = 0; i2 < this.set.length; i2++) {
        if (testSet(this.set[i2], version, this.options)) {
          return true;
        }
      }
      return false;
    };
    function testSet(set, version, options) {
      for (var i2 = 0; i2 < set.length; i2++) {
        if (!set[i2].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (i2 = 0; i2 < set.length; i2++) {
          debug(set[i2].semver);
          if (set[i2].semver === ANY) {
            continue;
          }
          if (set[i2].semver.prerelease.length > 0) {
            var allowed = set[i2].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }
    exports.satisfies = satisfies2;
    function satisfies2(version, range, options) {
      try {
        range = new Range2(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    }
    exports.maxSatisfying = maxSatisfying2;
    function maxSatisfying2(versions, range, options) {
      var max = null;
      var maxSV = null;
      try {
        var rangeObj = new Range2(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach(function(v) {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer2(max, options);
          }
        }
      });
      return max;
    }
    exports.minSatisfying = minSatisfying2;
    function minSatisfying2(versions, range, options) {
      var min = null;
      var minSV = null;
      try {
        var rangeObj = new Range2(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach(function(v) {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer2(min, options);
          }
        }
      });
      return min;
    }
    exports.minVersion = minVersion2;
    function minVersion2(range, loose) {
      range = new Range2(range, loose);
      var minver = new SemVer2('0.0.0');
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer2('0.0.0-0');
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (var i2 = 0; i2 < range.set.length; ++i2) {
        var comparators = range.set[i2];
        comparators.forEach(function(comparator) {
          var compver = new SemVer2(comparator.semver.version);
          switch (comparator.operator) {
            case '>':
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case '':
            case '>=':
              if (!minver || gt2(minver, compver)) {
                minver = compver;
              }
              break;
            case '<':
            case '<=':
              break;
            default:
              throw new Error('Unexpected operation: ' + comparator.operator);
          }
        });
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    }
    exports.validRange = validRange2;
    function validRange2(range, options) {
      try {
        return new Range2(range, options).range || '*';
      } catch (er) {
        return null;
      }
    }
    exports.ltr = ltr2;
    function ltr2(version, range, options) {
      return outside2(version, range, '<', options);
    }
    exports.gtr = gtr2;
    function gtr2(version, range, options) {
      return outside2(version, range, '>', options);
    }
    exports.outside = outside2;
    function outside2(version, range, hilo, options) {
      version = new SemVer2(version, options);
      range = new Range2(range, options);
      var gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case '>':
          gtfn = gt2;
          ltefn = lte2;
          ltfn = lt2;
          comp = '>';
          ecomp = '>=';
          break;
        case '<':
          gtfn = lt2;
          ltefn = gte2;
          ltfn = gt2;
          comp = '<';
          ecomp = '<=';
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies2(version, range, options)) {
        return false;
      }
      for (var i2 = 0; i2 < range.set.length; ++i2) {
        var comparators = range.set[i2];
        var high = null;
        var low = null;
        comparators.forEach(function(comparator) {
          if (comparator.semver === ANY) {
            comparator = new Comparator2('>=0.0.0');
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    }
    exports.prerelease = prerelease2;
    function prerelease2(version, options) {
      var parsed = parse2(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    }
    exports.intersects = intersects2;
    function intersects2(r1, r2, options) {
      r1 = new Range2(r1, options);
      r2 = new Range2(r2, options);
      return r1.intersects(r2);
    }
    exports.coerce = coerce2;
    function coerce2(version) {
      if (version instanceof SemVer2) {
        return version;
      }
      if (typeof version !== 'string') {
        return null;
      }
      var match = version.match(re[COERCE]);
      if (match == null) {
        return null;
      }
      return parse2(match[1] + '.' + (match[2] || '0') + '.' + (match[3] || '0'));
    }
  }
});

// esm-build-431ef2b9605e5187730909200f0c6c4ddca1e7c1-f15f8418/mod.js
var __module = __toESM(require_semver());
var {
  SEMVER_SPEC_VERSION,
  parse,
  valid,
  clean,
  SemVer,
  inc,
  diff,
  compareIdentifiers,
  rcompareIdentifiers,
  major,
  minor,
  patch,
  compare,
  compareLoose,
  rcompare,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  Comparator,
  Range,
  toComparators,
  satisfies,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  ltr,
  gtr,
  outside,
  prerelease,
  intersects,
  coerce
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  Comparator,
  Range,
  SEMVER_SPEC_VERSION,
  SemVer,
  clean,
  cmp,
  coerce,
  compare,
  compareIdentifiers,
  compareLoose,
  mod_default as default,
  diff,
  eq,
  gt,
  gte,
  gtr,
  inc,
  intersects,
  lt,
  lte,
  ltr,
  major,
  maxSatisfying,
  minSatisfying,
  minVersion,
  minor,
  neq,
  outside,
  parse,
  patch,
  prerelease,
  rcompare,
  rcompareIdentifiers,
  rsort,
  satisfies,
  sort,
  toComparators,
  valid,
  validRange
};
