/* esm.sh - esbuild bundle(convert-source-map@1.9.0) es2022 development */
import { Buffer as __Buffer$ } from '/cdn/v99/node_buffer.js';
import __path$ from '/cdn/v99/path-browserify@1.0.1/es2022/path-browserify.development.bundle.js';
import __fs$ from '/cdn/v99/node_fs.js';
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

// esm-build-55df801194c453f40bcdcd9de27580677b507925-ae3572e8/node_modules/convert-source-map/index.js
var require_convert_source_map = __commonJS({
  'esm-build-55df801194c453f40bcdcd9de27580677b507925-ae3572e8/node_modules/convert-source-map/index.js'(exports) {
    'use strict';

    var fs = __fs$;
    var path = __path$;
    Object.defineProperty(exports, 'commentRegex', {
      get: function getCommentRegex() {
        return /^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/gm;
      }
    });
    Object.defineProperty(exports, 'mapFileCommentRegex', {
      get: function getMapFileCommentRegex() {
        return /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"`]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/gm;
      }
    });
    var decodeBase64;
    if (typeof __Buffer$ !== 'undefined') {
      if (typeof __Buffer$.from === 'function') {
        decodeBase64 = decodeBase64WithBufferFrom;
      } else {
        decodeBase64 = decodeBase64WithNewBuffer;
      }
    } else {
      decodeBase64 = decodeBase64WithAtob;
    }
    function decodeBase64WithBufferFrom(base64) {
      return __Buffer$.from(base64, 'base64').toString();
    }
    function decodeBase64WithNewBuffer(base64) {
      if (typeof value === 'number') {
        throw new TypeError('The value to decode must not be of type number.');
      }
      return new __Buffer$(base64, 'base64').toString();
    }
    function decodeBase64WithAtob(base64) {
      return decodeURIComponent(escape(atob(base64)));
    }
    function stripComment(sm) {
      return sm.split(',').pop();
    }
    function readFromFileMap(sm, dir) {
      var r = exports.mapFileCommentRegex.exec(sm);
      var filename = r[1] || r[2];
      var filepath = path.resolve(dir, filename);
      try {
        return fs.readFileSync(filepath, 'utf8');
      } catch (e) {
        throw new Error('An error occurred while trying to read the map file at ' + filepath + '\n' + e);
      }
    }
    function Converter(sm, opts) {
      opts = opts || {};
      if (opts.isFileComment) sm = readFromFileMap(sm, opts.commentFileDir);
      if (opts.hasComment) sm = stripComment(sm);
      if (opts.isEncoded) sm = decodeBase64(sm);
      if (opts.isJSON || opts.isEncoded) sm = JSON.parse(sm);
      this.sourcemap = sm;
    }
    Converter.prototype.toJSON = function(space) {
      return JSON.stringify(this.sourcemap, null, space);
    };
    if (typeof __Buffer$ !== 'undefined') {
      if (typeof __Buffer$.from === 'function') {
        Converter.prototype.toBase64 = encodeBase64WithBufferFrom;
      } else {
        Converter.prototype.toBase64 = encodeBase64WithNewBuffer;
      }
    } else {
      Converter.prototype.toBase64 = encodeBase64WithBtoa;
    }
    function encodeBase64WithBufferFrom() {
      var json = this.toJSON();
      return __Buffer$.from(json, 'utf8').toString('base64');
    }
    function encodeBase64WithNewBuffer() {
      var json = this.toJSON();
      if (typeof json === 'number') {
        throw new TypeError('The json to encode must not be of type number.');
      }
      return new __Buffer$(json, 'utf8').toString('base64');
    }
    function encodeBase64WithBtoa() {
      var json = this.toJSON();
      return btoa(unescape(encodeURIComponent(json)));
    }
    Converter.prototype.toComment = function(options) {
      var base64 = this.toBase64();
      var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
      return options && options.multiline ? '/*# ' + data + ' */' : '//# ' + data;
    };
    Converter.prototype.toObject = function() {
      return JSON.parse(this.toJSON());
    };
    Converter.prototype.addProperty = function(key, value2) {
      if (this.sourcemap.hasOwnProperty(key))
        throw new Error('property "' + key + '" already exists on the sourcemap, use set property instead');
      return this.setProperty(key, value2);
    };
    Converter.prototype.setProperty = function(key, value2) {
      this.sourcemap[key] = value2;
      return this;
    };
    Converter.prototype.getProperty = function(key) {
      return this.sourcemap[key];
    };
    exports.fromObject = function(obj) {
      return new Converter(obj);
    };
    exports.fromJSON = function(json) {
      return new Converter(json, {
        isJSON: true
      });
    };
    exports.fromBase64 = function(base64) {
      return new Converter(base64, {
        isEncoded: true
      });
    };
    exports.fromComment = function(comment) {
      comment = comment.replace(/^\/\*/g, '//').replace(/\*\/$/g, '');
      return new Converter(comment, {
        isEncoded: true,
        hasComment: true
      });
    };
    exports.fromMapFileComment = function(comment, dir) {
      return new Converter(comment, {
        commentFileDir: dir,
        isFileComment: true,
        isJSON: true
      });
    };
    exports.fromSource = function(content) {
      var m = content.match(exports.commentRegex);
      return m ? exports.fromComment(m.pop()) : null;
    };
    exports.fromMapFileSource = function(content, dir) {
      var m = content.match(exports.mapFileCommentRegex);
      return m ? exports.fromMapFileComment(m.pop(), dir) : null;
    };
    exports.removeComments = function(src) {
      return src.replace(exports.commentRegex, '');
    };
    exports.removeMapFileComments = function(src) {
      return src.replace(exports.mapFileCommentRegex, '');
    };
    exports.generateMapFileComment = function(file, options) {
      var data = 'sourceMappingURL=' + file;
      return options && options.multiline ? '/*# ' + data + ' */' : '//# ' + data;
    };
  }
});

// esm-build-55df801194c453f40bcdcd9de27580677b507925-ae3572e8/mod.js
var __module = __toESM(require_convert_source_map());
var {
  commentRegex,
  mapFileCommentRegex,
  fromObject,
  fromJSON,
  fromBase64,
  fromComment,
  fromMapFileComment,
  fromSource,
  fromMapFileSource,
  removeComments,
  removeMapFileComments,
  generateMapFileComment
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  commentRegex,
  mod_default as default,
  fromBase64,
  fromComment,
  fromJSON,
  fromMapFileComment,
  fromMapFileSource,
  fromObject,
  fromSource,
  generateMapFileComment,
  mapFileCommentRegex,
  removeComments,
  removeMapFileComments
};
