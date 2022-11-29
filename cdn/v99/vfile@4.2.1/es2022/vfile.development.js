/* esm.sh - esbuild bundle(vfile@4.2.1) es2022 development */
import __is_buffer$ from '/cdn/v99/is-buffer@2.0.5/es2022/is-buffer.development.js';
import __vfile_message$ from '/cdn/v99/vfile-message@2.0.4/es2022/vfile-message.development.js';
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

// esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/minpath.browser.js
var require_minpath_browser = __commonJS({
  'esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/minpath.browser.js'(exports) {
    'use strict';

    exports.basename = basename;
    exports.dirname = dirname;
    exports.extname = extname;
    exports.join = join;
    exports.sep = '/';
    function basename(path, ext) {
      var start = 0;
      var end = -1;
      var index;
      var firstNonSlashEnd;
      var seenNonSlash;
      var extIndex;
      if (ext !== void 0 && typeof ext !== 'string') {
        throw new TypeError('"ext" argument must be a string');
      }
      assertPath(path);
      index = path.length;
      if (ext === void 0 || !ext.length || ext.length > path.length) {
        while (index--) {
          if (path.charCodeAt(index) === 47) {
            if (seenNonSlash) {
              start = index + 1;
              break;
            }
          } else if (end < 0) {
            seenNonSlash = true;
            end = index + 1;
          }
        }
        return end < 0 ? '' : path.slice(start, end);
      }
      if (ext === path) {
        return '';
      }
      firstNonSlashEnd = -1;
      extIndex = ext.length - 1;
      while (index--) {
        if (path.charCodeAt(index) === 47) {
          if (seenNonSlash) {
            start = index + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd < 0) {
            seenNonSlash = true;
            firstNonSlashEnd = index + 1;
          }
          if (extIndex > -1) {
            if (path.charCodeAt(index) === ext.charCodeAt(extIndex--)) {
              if (extIndex < 0) {
                end = index;
              }
            } else {
              extIndex = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end < 0) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    function dirname(path) {
      var end;
      var unmatchedSlash;
      var index;
      assertPath(path);
      if (!path.length) {
        return '.';
      }
      end = -1;
      index = path.length;
      while (--index) {
        if (path.charCodeAt(index) === 47) {
          if (unmatchedSlash) {
            end = index;
            break;
          }
        } else if (!unmatchedSlash) {
          unmatchedSlash = true;
        }
      }
      return end < 0
        ? path.charCodeAt(0) === 47
          ? '/'
          : '.'
        : end === 1 && path.charCodeAt(0) === 47
        ? '//'
        : path.slice(0, end);
    }
    function extname(path) {
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var preDotState = 0;
      var unmatchedSlash;
      var code;
      var index;
      assertPath(path);
      index = path.length;
      while (index--) {
        code = path.charCodeAt(index);
        if (code === 47) {
          if (unmatchedSlash) {
            startPart = index + 1;
            break;
          }
          continue;
        }
        if (end < 0) {
          unmatchedSlash = true;
          end = index + 1;
        }
        if (code === 46) {
          if (startDot < 0) {
            startDot = index;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot > -1) {
          preDotState = -1;
        }
      }
      if (
        startDot < 0 ||
        end < 0 ||
        preDotState === 0 ||
        (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
      ) {
        return '';
      }
      return path.slice(startDot, end);
    }
    function join() {
      var index = -1;
      var joined;
      while (++index < arguments.length) {
        assertPath(arguments[index]);
        if (arguments[index]) {
          joined = joined === void 0 ? arguments[index] : joined + '/' + arguments[index];
        }
      }
      return joined === void 0 ? '.' : normalize(joined);
    }
    function normalize(path) {
      var absolute;
      var value;
      assertPath(path);
      absolute = path.charCodeAt(0) === 47;
      value = normalizeString(path, !absolute);
      if (!value.length && !absolute) {
        value = '.';
      }
      if (value.length && path.charCodeAt(path.length - 1) === 47) {
        value += '/';
      }
      return absolute ? '/' + value : value;
    }
    function normalizeString(path, allowAboveRoot) {
      var result = '';
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var index = -1;
      var code;
      var lastSlashIndex;
      while (++index <= path.length) {
        if (index < path.length) {
          code = path.charCodeAt(index);
        } else if (code === 47) {
          break;
        } else {
          code = 47;
        }
        if (code === 47) {
          if (lastSlash === index - 1 || dots === 1) {
          } else if (lastSlash !== index - 1 && dots === 2) {
            if (
              result.length < 2 ||
              lastSegmentLength !== 2 ||
              result.charCodeAt(result.length - 1) !== 46 ||
              result.charCodeAt(result.length - 2) !== 46
            ) {
              if (result.length > 2) {
                lastSlashIndex = result.lastIndexOf('/');
                if (lastSlashIndex !== result.length - 1) {
                  if (lastSlashIndex < 0) {
                    result = '';
                    lastSegmentLength = 0;
                  } else {
                    result = result.slice(0, lastSlashIndex);
                    lastSegmentLength = result.length - 1 - result.lastIndexOf('/');
                  }
                  lastSlash = index;
                  dots = 0;
                  continue;
                }
              } else if (result.length) {
                result = '';
                lastSegmentLength = 0;
                lastSlash = index;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              result = result.length ? result + '/..' : '..';
              lastSegmentLength = 2;
            }
          } else {
            if (result.length) {
              result += '/' + path.slice(lastSlash + 1, index);
            } else {
              result = path.slice(lastSlash + 1, index);
            }
            lastSegmentLength = index - lastSlash - 1;
          }
          lastSlash = index;
          dots = 0;
        } else if (code === 46 && dots > -1) {
          dots++;
        } else {
          dots = -1;
        }
      }
      return result;
    }
    function assertPath(path) {
      if (typeof path !== 'string') {
        throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
      }
    }
  }
});

// esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/minproc.browser.js
var require_minproc_browser = __commonJS({
  'esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/minproc.browser.js'(exports) {
    'use strict';

    exports.cwd = cwd;
    function cwd() {
      return '/';
    }
  }
});

// esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/core.js
var require_core = __commonJS({
  'esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/core.js'(exports, module) {
    'use strict';

    var p = require_minpath_browser();
    var proc = require_minproc_browser();
    var buffer = __is_buffer$;
    module.exports = VFile;
    var own = {}.hasOwnProperty;
    var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
    VFile.prototype.toString = toString;
    Object.defineProperty(VFile.prototype, 'path', {
      get: getPath,
      set: setPath
    });
    Object.defineProperty(VFile.prototype, 'dirname', {
      get: getDirname,
      set: setDirname
    });
    Object.defineProperty(VFile.prototype, 'basename', {
      get: getBasename,
      set: setBasename
    });
    Object.defineProperty(VFile.prototype, 'extname', {
      get: getExtname,
      set: setExtname
    });
    Object.defineProperty(VFile.prototype, 'stem', {
      get: getStem,
      set: setStem
    });
    function VFile(options) {
      var prop;
      var index;
      if (!options) {
        options = {};
      } else if (typeof options === 'string' || buffer(options)) {
        options = {
          contents: options
        };
      } else if ('message' in options && 'messages' in options) {
        return options;
      }
      if (!(this instanceof VFile)) {
        return new VFile(options);
      }
      this.data = {};
      this.messages = [];
      this.history = [];
      this.cwd = proc.cwd();
      index = -1;
      while (++index < order.length) {
        prop = order[index];
        if (own.call(options, prop)) {
          this[prop] = options[prop];
        }
      }
      for (prop in options) {
        if (order.indexOf(prop) < 0) {
          this[prop] = options[prop];
        }
      }
    }
    function getPath() {
      return this.history[this.history.length - 1];
    }
    function setPath(path) {
      assertNonEmpty(path, 'path');
      if (this.path !== path) {
        this.history.push(path);
      }
    }
    function getDirname() {
      return typeof this.path === 'string' ? p.dirname(this.path) : void 0;
    }
    function setDirname(dirname) {
      assertPath(this.path, 'dirname');
      this.path = p.join(dirname || '', this.basename);
    }
    function getBasename() {
      return typeof this.path === 'string' ? p.basename(this.path) : void 0;
    }
    function setBasename(basename) {
      assertNonEmpty(basename, 'basename');
      assertPart(basename, 'basename');
      this.path = p.join(this.dirname || '', basename);
    }
    function getExtname() {
      return typeof this.path === 'string' ? p.extname(this.path) : void 0;
    }
    function setExtname(extname) {
      assertPart(extname, 'extname');
      assertPath(this.path, 'extname');
      if (extname) {
        if (extname.charCodeAt(0) !== 46) {
          throw new Error('`extname` must start with `.`');
        }
        if (extname.indexOf('.', 1) > -1) {
          throw new Error('`extname` cannot contain multiple dots');
        }
      }
      this.path = p.join(this.dirname, this.stem + (extname || ''));
    }
    function getStem() {
      return typeof this.path === 'string' ? p.basename(this.path, this.extname) : void 0;
    }
    function setStem(stem) {
      assertNonEmpty(stem, 'stem');
      assertPart(stem, 'stem');
      this.path = p.join(this.dirname || '', stem + (this.extname || ''));
    }
    function toString(encoding) {
      return (this.contents || '').toString(encoding);
    }
    function assertPart(part, name) {
      if (part && part.indexOf(p.sep) > -1) {
        throw new Error('`' + name + '` cannot be a path: did not expect `' + p.sep + '`');
      }
    }
    function assertNonEmpty(part, name) {
      if (!part) {
        throw new Error('`' + name + '` cannot be empty');
      }
    }
    function assertPath(path, name) {
      if (!path) {
        throw new Error('Setting `' + name + '` requires `path` to be set too');
      }
    }
  }
});

// esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/index.js
var require_lib = __commonJS({
  'esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/lib/index.js'(exports, module) {
    'use strict';

    var VMessage = __vfile_message$;
    var VFile = require_core();
    module.exports = VFile;
    VFile.prototype.message = message;
    VFile.prototype.info = info;
    VFile.prototype.fail = fail;
    function message(reason, position, origin) {
      var message2 = new VMessage(reason, position, origin);
      if (this.path) {
        message2.name = this.path + ':' + message2.name;
        message2.file = this.path;
      }
      message2.fatal = false;
      this.messages.push(message2);
      return message2;
    }
    function fail() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = true;
      throw message2;
    }
    function info() {
      var message2 = this.message.apply(this, arguments);
      message2.fatal = null;
      return message2;
    }
  }
});

// esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/index.js
var require_vfile = __commonJS({
  'esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/node_modules/vfile/index.js'(exports, module) {
    'use strict';

    module.exports = require_lib();
  }
});

// esm-build-8f4f153e3cf89a20fed2e9851b473f54fdd0dea5-0dd06b7f/mod.js
var __module = __toESM(require_vfile());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
