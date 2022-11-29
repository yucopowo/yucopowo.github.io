/* esm.sh - esbuild bundle(stream-browserify@3.0.0) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
var __global$ = globalThis || (typeof window !== 'undefined' ? window : self);
import __string_decoder$ from '/cdn/v99/string_decoder@1.3.0/es2022/string_decoder.development.bundle.js';
import __util$ from '/cdn/v99/util@0.12.5/es2022/util.development.bundle.js';
import __buffer$ from '/cdn/v99/node_buffer.js';
import __events$ from '/cdn/v99/events@3.3.0/es2022/events.development.bundle.js';
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

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/inherits/inherits_browser.js'(
    exports,
    module
  ) {
    if (typeof Object.create === 'function') {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/stream-browser.js
var require_stream_browser = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/stream-browser.js'(
    exports,
    module
  ) {
    module.exports = __events$.EventEmitter;
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/buffer_list.js'(
    exports,
    module
  ) {
    'use strict';

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var _require = __buffer$;
    var Buffer2 = _require.Buffer;
    var _require2 = __util$;
    var inspect = _require2.inspect;
    var custom = (inspect && inspect.custom) || 'inspect';
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    module.exports = /* @__PURE__ */ (function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [
        {
          key: 'push',
          value: function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0) this.tail.next = entry;
            else this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        },
        {
          key: 'unshift',
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0) this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        },
        {
          key: 'shift',
          value: function shift() {
            if (this.length === 0) return;
            var ret = this.head.data;
            if (this.length === 1) this.head = this.tail = null;
            else this.head = this.head.next;
            --this.length;
            return ret;
          }
        },
        {
          key: 'clear',
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        },
        {
          key: 'join',
          value: function join(s) {
            if (this.length === 0) return '';
            var p = this.head;
            var ret = '' + p.data;
            while ((p = p.next)) {
              ret += s + p.data;
            }
            return ret;
          }
        },
        {
          key: 'concat',
          value: function concat(n) {
            if (this.length === 0) return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
        },
        {
          key: 'consume',
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        },
        {
          key: 'first',
          value: function first() {
            return this.head.data;
          }
        },
        {
          key: '_getString',
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while ((p = p.next)) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length) ret += str;
              else ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        },
        {
          key: '_getBuffer',
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while ((p = p.next)) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next) this.head = p.next;
                  else this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        },
        {
          key: custom,
          value: function value(_, options) {
            return inspect(
              this,
              _objectSpread({}, options, {
                depth: 0,
                customInspect: false
              })
            );
          }
        }
      ]);
      return BufferList;
    })();
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/destroy.js'(
    exports,
    module
  ) {
    'use strict';

    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            __Process$.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            __Process$.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            __Process$.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            __Process$.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            __Process$.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          __Process$.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          __Process$.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self, err) {
      emitErrorNT(self, err);
      emitCloseNT(self);
    }
    function emitCloseNT(self) {
      if (self._writableState && !self._writableState.emitClose) return;
      if (self._readableState && !self._readableState.emitClose) return;
      self.emit('close');
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self, err) {
      self.emit('error', err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if ((rState && rState.autoDestroy) || (wState && wState.autoDestroy)) stream.destroy(err);
      else stream.emit('error', err);
    }
    module.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/errors-browser.js
var require_errors_browser = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/errors-browser.js'(
    exports,
    module
  ) {
    'use strict';

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = /* @__PURE__ */ (function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
          return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError2;
      })(Base);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
          return String(i);
        });
        if (len > 2) {
          return (
            'one of '.concat(thing, ' ').concat(expected.slice(0, len - 1).join(', '), ', or ') + expected[len - 1]
          );
        } else if (len === 2) {
          return 'one of '
            .concat(thing, ' ')
            .concat(expected[0], ' or ')
            .concat(expected[1]);
        } else {
          return 'of '.concat(thing, ' ').concat(expected[0]);
        }
      } else {
        return 'of '.concat(thing, ' ').concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType(
      'ERR_INVALID_OPT_VALUE',
      function(name, value) {
        return 'The value "' + value + '" is invalid for option "' + name + '"';
      },
      TypeError
    );
    createErrorType(
      'ERR_INVALID_ARG_TYPE',
      function(name, expected, actual) {
        var determiner;
        if (typeof expected === 'string' && startsWith(expected, 'not ')) {
          determiner = 'must not be';
          expected = expected.replace(/^not /, '');
        } else {
          determiner = 'must be';
        }
        var msg;
        if (endsWith(name, ' argument')) {
          msg = 'The '
            .concat(name, ' ')
            .concat(determiner, ' ')
            .concat(oneOf(expected, 'type'));
        } else {
          var type = includes(name, '.') ? 'property' : 'argument';
          msg = 'The "'
            .concat(name, '" ')
            .concat(type, ' ')
            .concat(determiner, ' ')
            .concat(oneOf(expected, 'type'));
        }
        msg += '. Received type '.concat(typeof actual);
        return msg;
      },
      TypeError
    );
    createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
    createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function(name) {
      return 'The ' + name + ' method is not implemented';
    });
    createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
    createErrorType('ERR_STREAM_DESTROYED', function(name) {
      return 'Cannot call ' + name + ' after a stream was destroyed';
    });
    createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
    createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
    createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
    createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
    createErrorType(
      'ERR_UNKNOWN_ENCODING',
      function(arg) {
        return 'Unknown encoding: ' + arg;
      },
      TypeError
    );
    createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
    module.exports.codes = codes;
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/state.js'(
    exports,
    module
  ) {
    'use strict';

    var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : 'highWaterMark';
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module.exports = {
      getHighWaterMark
    };
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/util-deprecate/browser.js'(
    exports,
    module
  ) {
    module.exports = deprecate;
    function deprecate(fn, msg) {
      if (config('noDeprecation')) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config('throwDeprecation')) {
            throw new Error(msg);
          } else if (config('traceDeprecation')) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config(name) {
      try {
        if (!__global$.localStorage) return false;
      } catch (_) {
        return false;
      }
      var val = __global$.localStorage[name];
      if (null == val) return false;
      return String(val).toLowerCase() === 'true';
    }
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_writable.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = Writable2;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex2;
    Writable2.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_browser()
    };
    var Stream2 = require_stream_browser();
    var Buffer2 = __buffer$.Buffer;
    var OurUint8Array = __global$.Uint8Array || function() {};
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits_browser()(Writable2, Stream2);
    function nop() {}
    function WritableState(options, stream, isDuplex) {
      Duplex2 = Duplex2 || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex2;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, 'buffer', {
          get: internalUtil.deprecate(
            function writableStateBufferGetter() {
              return this.getBuffer();
            },
            '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
            'DEP0003'
          )
        });
      } catch (_) {}
    })();
    var realHasInstance;
    if (
      typeof Symbol === 'function' &&
      Symbol.hasInstance &&
      typeof Function.prototype[Symbol.hasInstance] === 'function'
    ) {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable2, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable2) return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable2(options) {
      Duplex2 = Duplex2 || require_stream_duplex();
      var isDuplex = this instanceof Duplex2;
      if (!isDuplex && !realHasInstance.call(Writable2, this)) return new Writable2(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === 'function') this._write = options.write;
        if (typeof options.writev === 'function') this._writev = options.writev;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
        if (typeof options.final === 'function') this._final = options.final;
      }
      Stream2.call(this);
    }
    Writable2.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      __Process$.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== 'string' && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        __Process$.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable2.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }
      if (isBuf) encoding = 'buffer';
      else if (!encoding) encoding = state.defaultEncoding;
      if (typeof cb !== 'function') cb = nop;
      if (state.ending) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable2.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable2.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable2.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === 'string') encoding = encoding.toLowerCase();
      if (
        !(
          ['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf(
            (encoding + '').toLowerCase()
          ) > -1
        )
      )
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable2.prototype, 'writableBuffer', {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable2.prototype, 'writableHighWaterMark', {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = 'buffer';
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret) state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));
      else if (writev) stream._writev(chunk, state.onwrite);
      else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        __Process$.nextTick(cb, er);
        __Process$.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er) onwriteError(stream, state, sync, er, cb);
      else {
        var finished2 = needFinish(state) || stream.destroyed;
        if (!finished2 && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          __Process$.nextTick(afterWrite, stream, state, finished2, cb);
        } else {
          afterWrite(stream, state, finished2, cb);
        }
      }
    }
    function afterWrite(stream, state, finished2, cb) {
      if (!finished2) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null) state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable2.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
    };
    Writable2.prototype._writev = null;
    Writable2.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending) endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable2.prototype, 'writableLength', {
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit('prefinish');
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === 'function' && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          __Process$.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit('prefinish');
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit('finish');
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || (rState.autoDestroy && rState.endEmitted)) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) __Process$.nextTick(cb);
        else stream.once('finish', cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable2.prototype, 'destroyed', {
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable2.prototype.destroy = destroyImpl.destroy;
    Writable2.prototype._undestroy = destroyImpl.undestroy;
    Writable2.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_duplex.js'(
    exports,
    module
  ) {
    'use strict';

    var objectKeys =
      Object.keys ||
      function(obj) {
        var keys2 = [];
        for (var key in obj) {
          keys2.push(key);
        }
        return keys2;
      };
    module.exports = Duplex2;
    var Readable2 = require_stream_readable();
    var Writable2 = require_stream_writable();
    require_inherits_browser()(Duplex2, Readable2);
    {
      keys = objectKeys(Writable2.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex2.prototype[method]) Duplex2.prototype[method] = Writable2.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex2(options) {
      if (!(this instanceof Duplex2)) return new Duplex2(options);
      Readable2.call(this, options);
      Writable2.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once('end', onend);
        }
      }
    }
    Object.defineProperty(Duplex2.prototype, 'writableHighWaterMark', {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex2.prototype, 'writableBuffer', {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex2.prototype, 'writableLength', {
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended) return;
      __Process$.nextTick(onEndNT, this);
    }
    function onEndNT(self) {
      self.end();
    }
    Object.defineProperty(Duplex2.prototype, 'destroyed', {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/end-of-stream.js'(
    exports,
    module
  ) {
    'use strict';

    var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {}
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === 'function';
    }
    function eos(stream, opts, callback) {
      if (typeof opts === 'function') return eos(stream, null, opts);
      if (!opts) opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || (opts.readable !== false && stream.readable);
      var writable = opts.writable || (opts.writable !== false && stream.writable);
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable) onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on('finish', onfinish);
      };
      if (isRequest(stream)) {
        stream.on('complete', onfinish);
        stream.on('abort', onclose);
        if (stream.req) onrequest();
        else stream.on('request', onrequest);
      } else if (writable && !stream._writableState) {
        stream.on('end', onlegacyfinish);
        stream.on('close', onlegacyfinish);
      }
      stream.on('end', onend);
      stream.on('finish', onfinish);
      if (opts.error !== false) stream.on('error', onerror);
      stream.on('close', onclose);
      return function() {
        stream.removeListener('complete', onfinish);
        stream.removeListener('abort', onclose);
        stream.removeListener('request', onrequest);
        if (stream.req) stream.req.removeListener('finish', onfinish);
        stream.removeListener('end', onlegacyfinish);
        stream.removeListener('close', onlegacyfinish);
        stream.removeListener('finish', onfinish);
        stream.removeListener('end', onend);
        stream.removeListener('error', onerror);
        stream.removeListener('close', onclose);
      };
    }
    module.exports = eos;
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/async_iterator.js'(
    exports,
    module
  ) {
    'use strict';

    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var finished2 = require_end_of_stream();
    var kLastResolve = Symbol('lastResolve');
    var kLastReject = Symbol('lastReject');
    var kError = Symbol('error');
    var kEnded = Symbol('ended');
    var kLastPromise = Symbol('lastPromise');
    var kHandlePromise = Symbol('handlePromise');
    var kStream = Symbol('stream');
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      __Process$.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf(
      ((_Object$setPrototypeO = {
        get stream() {
          return this[kStream];
        },
        next: function next() {
          var _this = this;
          var error = this[kError];
          if (error !== null) {
            return Promise.reject(error);
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult(void 0, true));
          }
          if (this[kStream].destroyed) {
            return new Promise(function(resolve, reject) {
              __Process$.nextTick(function() {
                if (_this[kError]) {
                  reject(_this[kError]);
                } else {
                  resolve(createIterResult(void 0, true));
                }
              });
            });
          }
          var lastPromise = this[kLastPromise];
          var promise;
          if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
          } else {
            var data = this[kStream].read();
            if (data !== null) {
              return Promise.resolve(createIterResult(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
          }
          this[kLastPromise] = promise;
          return promise;
        }
      }),
      _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
      }),
      _defineProperty(_Object$setPrototypeO, 'return', function _return() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2[kStream].destroy(null, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(createIterResult(void 0, true));
          });
        });
      }),
      _Object$setPrototypeO),
      AsyncIteratorPrototype
    );
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(
        ReadableStreamAsyncIteratorPrototype,
        ((_Object$create = {}),
        _defineProperty(_Object$create, kStream, {
          value: stream,
          writable: true
        }),
        _defineProperty(_Object$create, kLastResolve, {
          value: null,
          writable: true
        }),
        _defineProperty(_Object$create, kLastReject, {
          value: null,
          writable: true
        }),
        _defineProperty(_Object$create, kError, {
          value: null,
          writable: true
        }),
        _defineProperty(_Object$create, kEnded, {
          value: stream._readableState.endEmitted,
          writable: true
        }),
        _defineProperty(_Object$create, kHandlePromise, {
          value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult(data, false));
            } else {
              iterator[kLastResolve] = resolve;
              iterator[kLastReject] = reject;
            }
          },
          writable: true
        }),
        _Object$create)
      );
      iterator[kLastPromise] = null;
      finished2(stream, function(err) {
        if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on('readable', onReadable.bind(null, iterator));
      return iterator;
    };
    module.exports = createReadableStreamAsyncIterator;
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/from-browser.js
var require_from_browser = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/from-browser.js'(
    exports,
    module
  ) {
    module.exports = function() {
      throw new Error('Readable.from is not available in the browser');
    };
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_readable.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = Readable2;
    var Duplex2;
    Readable2.ReadableState = ReadableState;
    var EE = __events$.EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream2 = require_stream_browser();
    var Buffer2 = __buffer$.Buffer;
    var OurUint8Array = __global$.Uint8Array || function() {};
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = __util$;
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog('stream');
    } else {
      debug = function debug2() {};
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits_browser()(Readable2, Stream2);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
      else emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex2 = Duplex2 || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex2;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = __string_decoder$.StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable2(options) {
      Duplex2 = Duplex2 || require_stream_duplex();
      if (!(this instanceof Readable2)) return new Readable2(options);
      var isDuplex = this instanceof Duplex2;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === 'function') this._read = options.read;
        if (typeof options.destroy === 'function') this._destroy = options.destroy;
      }
      Stream2.call(this);
    }
    Object.defineProperty(Readable2.prototype, 'destroyed', {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === 'string') {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = '';
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug('readableAddChunk', chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || (chunk && chunk.length > 0)) {
          if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
              else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit('data', chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
      }
      return er;
    }
    Readable2.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable2.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = __string_decoder$.StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = '';
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== '') this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || (state.length === 0 && state.ended)) return 0;
      if (state.objectMode) return 1;
      if (n !== n) {
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
      }
      if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length) return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable2.prototype.read = function(n) {
      debug('read', n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0) state.emittedReadable = false;
      if (
        n === 0 &&
        state.needReadable &&
        ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)
      ) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug('need readable', doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      } else if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        if (state.length === 0) state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading) n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0) ret = fromList(n, state);
      else ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended) state.needReadable = true;
        if (nOrig !== n && state.ended) endReadable(this);
      }
      if (ret !== null) this.emit('data', ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug('onEofChunk');
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug('emitReadable', state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        __Process$.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug('emitReadable_', state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit('readable');
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        __Process$.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (
        !state.reading &&
        !state.ended &&
        (state.length < state.highWaterMark || (state.flowing && state.length === 0))
      ) {
        var len = state.length;
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length) break;
      }
      state.readingMore = false;
    }
    Readable2.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== __Process$.stdout && dest !== __Process$.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) __Process$.nextTick(endFn);
      else src.once('end', endFn);
      dest.on('unpipe', onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug('onunpipe');
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug('onend');
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug('cleanup');
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', unpipe);
        src.removeListener('data', ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        debug('dest.write', ret);
        if (ret === false) {
          if (
            ((state.pipesCount === 1 && state.pipes === dest) ||
              (state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1)) &&
            !cleanedUp
          ) {
            debug('false write response, pause', state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
      }
      prependListener(dest, 'error', onerror);
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);
      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }
      dest.emit('pipe', src);
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable2.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0) return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit('unpipe', this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit('unpipe', this, {
            hasUnpiped: false
          });
        }
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];
      dest.emit('unpipe', this, unpipeInfo);
      return this;
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream2.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === 'data') {
        state.readableListening = this.listenerCount('readable') > 0;
        if (state.flowing !== false) this.resume();
      } else if (ev === 'readable') {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug('on readable', state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            __Process$.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    Readable2.prototype.removeListener = function(ev, fn) {
      var res = Stream2.prototype.removeListener.call(this, ev, fn);
      if (ev === 'readable') {
        __Process$.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable2.prototype.removeAllListeners = function(ev) {
      var res = Stream2.prototype.removeAllListeners.apply(this, arguments);
      if (ev === 'readable' || ev === void 0) {
        __Process$.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self) {
      var state = self._readableState;
      state.readableListening = self.listenerCount('readable') > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self.listenerCount('data') > 0) {
        self.resume();
      }
    }
    function nReadingNextTick(self) {
      debug('readable nexttick read 0');
      self.read(0);
    }
    Readable2.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        __Process$.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug('resume', state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }
    Readable2.prototype.pause = function() {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      while (state.flowing && stream.read() !== null) {}
    }
    Readable2.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder) chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === 'function') {
          this[i] = (function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          })(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug('wrapped _read', n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === 'function') {
      Readable2.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable2.prototype, 'readableHighWaterMark', {
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable2.prototype, 'readableBuffer', {
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable2.prototype, 'readableFlowing', {
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable2._fromList = fromList;
    Object.defineProperty(Readable2.prototype, 'readableLength', {
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList(n, state) {
      if (state.length === 0) return null;
      var ret;
      if (state.objectMode) ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder) ret = state.buffer.join('');
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug('endReadable', state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        __Process$.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug('endReadableNT', state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || (wState.autoDestroy && wState.finished)) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === 'function') {
      Readable2.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from_browser();
        }
        return from(Readable2, iterable, opts);
      };
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_transform.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = Transform2;
    var _require$codes = require_errors_browser().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex2 = require_stream_duplex();
    require_inherits_browser()(Transform2, Duplex2);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit('error', new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null) this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform2(options) {
      if (!(this instanceof Transform2)) return new Transform2(options);
      Duplex2.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === 'function') this._transform = options.transform;
        if (typeof options.flush === 'function') this._flush = options.flush;
      }
      this.on('prefinish', prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === 'function' && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform2.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex2.prototype.push.call(this, chunk, encoding);
    };
    Transform2.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
    };
    Transform2.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform2.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform2.prototype._destroy = function(err, cb) {
      Duplex2.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit('error', er);
      if (data != null) stream.push(data);
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/_stream_passthrough.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = PassThrough2;
    var Transform2 = require_stream_transform();
    require_inherits_browser()(PassThrough2, Transform2);
    function PassThrough2(options) {
      if (!(this instanceof PassThrough2)) return new PassThrough2(options);
      Transform2.call(this, options);
    }
    PassThrough2.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/readable-stream/lib/internal/streams/pipeline.js'(
    exports,
    module
  ) {
    'use strict';

    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors_browser().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err) throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === 'function';
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on('close', function() {
        closed = true;
      });
      if (eos === void 0) eos = require_end_of_stream();
      eos(
        stream,
        {
          readable: reading,
          writable: writing
        },
        function(err) {
          if (err) return callback(err);
          closed = true;
          callback();
        }
      );
      var destroyed = false;
      return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === 'function') return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED('pipe'));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length) return noop;
      if (typeof streams[streams.length - 1] !== 'function') return noop;
      return streams.pop();
    }
    function pipeline2() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0])) streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS('streams');
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error) error = err;
          if (err) destroys.forEach(call);
          if (reading) return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module.exports = pipeline2;
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/stream-browserify/index.js
var require_stream_browserify = __commonJS({
  'esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/node_modules/stream-browserify/index.js'(
    exports,
    module
  ) {
    module.exports = Stream2;
    var EE = __events$.EventEmitter;
    var inherits = require_inherits_browser();
    inherits(Stream2, EE);
    Stream2.Readable = require_stream_readable();
    Stream2.Writable = require_stream_writable();
    Stream2.Duplex = require_stream_duplex();
    Stream2.Transform = require_stream_transform();
    Stream2.PassThrough = require_stream_passthrough();
    Stream2.finished = require_end_of_stream();
    Stream2.pipeline = require_pipeline();
    Stream2.Stream = Stream2;
    function Stream2() {
      EE.call(this);
    }
    Stream2.prototype.pipe = function(dest, options) {
      var source = this;
      function ondata(chunk) {
        if (dest.writable) {
          if (false === dest.write(chunk) && source.pause) {
            source.pause();
          }
        }
      }
      source.on('data', ondata);
      function ondrain() {
        if (source.readable && source.resume) {
          source.resume();
        }
      }
      dest.on('drain', ondrain);
      if (!dest._isStdio && (!options || options.end !== false)) {
        source.on('end', onend);
        source.on('close', onclose);
      }
      var didOnEnd = false;
      function onend() {
        if (didOnEnd) return;
        didOnEnd = true;
        dest.end();
      }
      function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;
        if (typeof dest.destroy === 'function') dest.destroy();
      }
      function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, 'error') === 0) {
          throw er;
        }
      }
      source.on('error', onerror);
      dest.on('error', onerror);
      function cleanup() {
        source.removeListener('data', ondata);
        dest.removeListener('drain', ondrain);
        source.removeListener('end', onend);
        source.removeListener('close', onclose);
        source.removeListener('error', onerror);
        dest.removeListener('error', onerror);
        source.removeListener('end', cleanup);
        source.removeListener('close', cleanup);
        dest.removeListener('close', cleanup);
      }
      source.on('end', cleanup);
      source.on('close', cleanup);
      dest.on('close', cleanup);
      dest.emit('pipe', source);
      return dest;
    };
  }
});

// esm-build-f516838c5a687442817289d7e4f4bbcba23d06fd-f75d110d/mod.js
var __module = __toESM(require_stream_browserify());
var { Readable, Writable, Duplex, Transform, PassThrough, finished, pipeline, Stream } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { Duplex, PassThrough, Readable, Stream, Transform, Writable, mod_default as default, finished, pipeline };
