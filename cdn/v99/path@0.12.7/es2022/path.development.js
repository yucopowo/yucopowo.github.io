/* esm.sh - esbuild bundle(path@0.12.7) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import __util$ from '/cdn/v99/util@0.10.4/es2022/util.development.bundle.js';
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

// esm-build-b32bb60508977fafa8e8d1b55fef8028a8451a85-929807fc/node_modules/path/path.js
var require_path = __commonJS({
  'esm-build-b32bb60508977fafa8e8d1b55fef8028a8451a85-929807fc/node_modules/path/path.js'(exports, module) {
    'use strict';

    var isWindows = __Process$.platform === 'win32';
    var util = __util$;
    function normalizeArray(parts, allowAboveRoot) {
      var res = [];
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (!p || p === '.') continue;
        if (p === '..') {
          if (res.length && res[res.length - 1] !== '..') {
            res.pop();
          } else if (allowAboveRoot) {
            res.push('..');
          }
        } else {
          res.push(p);
        }
      }
      return res;
    }
    function trimArray(arr) {
      var lastIndex = arr.length - 1;
      var start = 0;
      for (; start <= lastIndex; start++) {
        if (arr[start]) break;
      }
      var end = lastIndex;
      for (; end >= 0; end--) {
        if (arr[end]) break;
      }
      if (start === 0 && end === lastIndex) return arr;
      if (start > end) return [];
      return arr.slice(start, end + 1);
    }
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var splitTailRe = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;
    var win322 = {};
    function win32SplitPath(filename) {
      var result = splitDeviceRe.exec(filename),
        device = (result[1] || '') + (result[2] || ''),
        tail = result[3] || '';
      var result2 = splitTailRe.exec(tail),
        dir = result2[1],
        basename2 = result2[2],
        ext = result2[3];
      return [device, dir, basename2, ext];
    }
    function win32StatPath(path) {
      var result = splitDeviceRe.exec(path),
        device = result[1] || '',
        isUnc = !!device && device[1] !== ':';
      return {
        device,
        isUnc,
        isAbsolute: isUnc || !!result[2],
        tail: result[3]
      };
    }
    function normalizeUNCRoot(device) {
      return '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
    }
    win322.resolve = function() {
      var resolvedDevice = '',
        resolvedTail = '',
        resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1; i--) {
        var path;
        if (i >= 0) {
          path = arguments[i];
        } else if (!resolvedDevice) {
          path = __Process$.cwd();
        } else {
          path = __Process$.env['=' + resolvedDevice];
          if (!path || path.substr(0, 3).toLowerCase() !== resolvedDevice.toLowerCase() + '\\') {
            path = resolvedDevice + '\\';
          }
        }
        if (!util.isString(path)) {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        var result = win32StatPath(path),
          device = result.device,
          isUnc = result.isUnc,
          isAbsolute2 = result.isAbsolute,
          tail = result.tail;
        if (device && resolvedDevice && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
          continue;
        }
        if (!resolvedDevice) {
          resolvedDevice = device;
        }
        if (!resolvedAbsolute) {
          resolvedTail = tail + '\\' + resolvedTail;
          resolvedAbsolute = isAbsolute2;
        }
        if (resolvedDevice && resolvedAbsolute) {
          break;
        }
      }
      if (isUnc) {
        resolvedDevice = normalizeUNCRoot(resolvedDevice);
      }
      resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/), !resolvedAbsolute).join('\\');
      return resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail || '.';
    };
    win322.normalize = function(path) {
      var result = win32StatPath(path),
        device = result.device,
        isUnc = result.isUnc,
        isAbsolute2 = result.isAbsolute,
        tail = result.tail,
        trailingSlash = /[\\\/]$/.test(tail);
      tail = normalizeArray(tail.split(/[\\\/]+/), !isAbsolute2).join('\\');
      if (!tail && !isAbsolute2) {
        tail = '.';
      }
      if (tail && trailingSlash) {
        tail += '\\';
      }
      if (isUnc) {
        device = normalizeUNCRoot(device);
      }
      return device + (isAbsolute2 ? '\\' : '') + tail;
    };
    win322.isAbsolute = function(path) {
      return win32StatPath(path).isAbsolute;
    };
    win322.join = function() {
      var paths = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!util.isString(arg)) {
          throw new TypeError('Arguments to path.join must be strings');
        }
        if (arg) {
          paths.push(arg);
        }
      }
      var joined = paths.join('\\');
      if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
        joined = joined.replace(/^[\\\/]{2,}/, '\\');
      }
      return win322.normalize(joined);
    };
    win322.relative = function(from, to) {
      from = win322.resolve(from);
      to = win322.resolve(to);
      var lowerFrom = from.toLowerCase();
      var lowerTo = to.toLowerCase();
      var toParts = trimArray(to.split('\\'));
      var lowerFromParts = trimArray(lowerFrom.split('\\'));
      var lowerToParts = trimArray(lowerTo.split('\\'));
      var length = Math.min(lowerFromParts.length, lowerToParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (lowerFromParts[i] !== lowerToParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      if (samePartsLength == 0) {
        return to;
      }
      var outputParts = [];
      for (var i = samePartsLength; i < lowerFromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('\\');
    };
    win322._makeLong = function(path) {
      if (!util.isString(path)) return path;
      if (!path) {
        return '';
      }
      var resolvedPath = win322.resolve(path);
      if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
        return '\\\\?\\' + resolvedPath;
      } else if (/^\\\\[^?.]/.test(resolvedPath)) {
        return '\\\\?\\UNC\\' + resolvedPath.substring(2);
      }
      return path;
    };
    win322.dirname = function(path) {
      var result = win32SplitPath(path),
        root = result[0],
        dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    win322.basename = function(path, ext) {
      var f = win32SplitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    win322.extname = function(path) {
      return win32SplitPath(path)[3];
    };
    win322.format = function(pathObject) {
      if (!util.isObject(pathObject)) {
        throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof pathObject);
      }
      var root = pathObject.root || '';
      if (!util.isString(root)) {
        throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof pathObject.root);
      }
      var dir = pathObject.dir;
      var base = pathObject.base || '';
      if (!dir) {
        return base;
      }
      if (dir[dir.length - 1] === win322.sep) {
        return dir + base;
      }
      return dir + win322.sep + base;
    };
    win322.parse = function(pathString) {
      if (!util.isString(pathString)) {
        throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
      }
      var allParts = win32SplitPath(pathString);
      if (!allParts || allParts.length !== 4) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      return {
        root: allParts[0],
        dir: allParts[0] + allParts[1].slice(0, -1),
        base: allParts[2],
        ext: allParts[3],
        name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
      };
    };
    win322.sep = '\\';
    win322.delimiter = ';';
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var posix2 = {};
    function posixSplitPath(filename) {
      return splitPathRe.exec(filename).slice(1);
    }
    posix2.resolve = function() {
      var resolvedPath = '',
        resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? arguments[i] : __Process$.cwd();
        if (!util.isString(path)) {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path[0] === '/';
      }
      resolvedPath = normalizeArray(resolvedPath.split('/'), !resolvedAbsolute).join('/');
      return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
    };
    posix2.normalize = function(path) {
      var isAbsolute2 = posix2.isAbsolute(path),
        trailingSlash = path && path[path.length - 1] === '/';
      path = normalizeArray(path.split('/'), !isAbsolute2).join('/');
      if (!path && !isAbsolute2) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute2 ? '/' : '') + path;
    };
    posix2.isAbsolute = function(path) {
      return path.charAt(0) === '/';
    };
    posix2.join = function() {
      var path = '';
      for (var i = 0; i < arguments.length; i++) {
        var segment = arguments[i];
        if (!util.isString(segment)) {
          throw new TypeError('Arguments to path.join must be strings');
        }
        if (segment) {
          if (!path) {
            path += segment;
          } else {
            path += '/' + segment;
          }
        }
      }
      return posix2.normalize(path);
    };
    posix2.relative = function(from, to) {
      from = posix2.resolve(from).substr(1);
      to = posix2.resolve(to).substr(1);
      var fromParts = trimArray(from.split('/'));
      var toParts = trimArray(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    posix2._makeLong = function(path) {
      return path;
    };
    posix2.dirname = function(path) {
      var result = posixSplitPath(path),
        root = result[0],
        dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    posix2.basename = function(path, ext) {
      var f = posixSplitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    posix2.extname = function(path) {
      return posixSplitPath(path)[3];
    };
    posix2.format = function(pathObject) {
      if (!util.isObject(pathObject)) {
        throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof pathObject);
      }
      var root = pathObject.root || '';
      if (!util.isString(root)) {
        throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof pathObject.root);
      }
      var dir = pathObject.dir ? pathObject.dir + posix2.sep : '';
      var base = pathObject.base || '';
      return dir + base;
    };
    posix2.parse = function(pathString) {
      if (!util.isString(pathString)) {
        throw new TypeError("Parameter 'pathString' must be a string, not " + typeof pathString);
      }
      var allParts = posixSplitPath(pathString);
      if (!allParts || allParts.length !== 4) {
        throw new TypeError("Invalid path '" + pathString + "'");
      }
      allParts[1] = allParts[1] || '';
      allParts[2] = allParts[2] || '';
      allParts[3] = allParts[3] || '';
      return {
        root: allParts[0],
        dir: allParts[0] + allParts[1].slice(0, -1),
        base: allParts[2],
        ext: allParts[3],
        name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
      };
    };
    posix2.sep = '/';
    posix2.delimiter = ':';
    if (isWindows) module.exports = win322;
    else module.exports = posix2;
    module.exports.posix = posix2;
    module.exports.win32 = win322;
  }
});

// esm-build-b32bb60508977fafa8e8d1b55fef8028a8451a85-929807fc/mod.js
var __module = __toESM(require_path());
var {
  resolve,
  normalize,
  isAbsolute,
  join,
  relative,
  _makeLong,
  dirname,
  basename,
  extname,
  format,
  parse,
  sep,
  delimiter,
  posix,
  win32
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  _makeLong,
  basename,
  mod_default as default,
  delimiter,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  normalize,
  parse,
  posix,
  relative,
  resolve,
  sep,
  win32
};
