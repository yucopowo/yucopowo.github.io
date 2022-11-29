/* esm.sh - esbuild bundle(string_decoder@1.3.0) es2022 development */
import __buffer$ from '/cdn/v99/node_buffer.js';
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

// esm-build-881956c3f0c54f75d2ba0f9cbeaa8783e7547cab-f99f0843/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  'esm-build-881956c3f0c54f75d2ba0f9cbeaa8783e7547cab-f99f0843/node_modules/safe-buffer/index.js'(exports, module) {
    var buffer = __buffer$;
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// esm-build-881956c3f0c54f75d2ba0f9cbeaa8783e7547cab-f99f0843/node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  'esm-build-881956c3f0c54f75d2ba0f9cbeaa8783e7547cab-f99f0843/node_modules/string_decoder/lib/string_decoder.js'(
    exports
  ) {
    'use strict';

    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding =
      Buffer2.isEncoding ||
      function(encoding) {
        encoding = '' + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
          case 'raw':
            return true;
          default:
            return false;
        }
      };
    function _normalizeEncoding(enc) {
      if (!enc) return 'utf8';
      var retried;
      while (true) {
        switch (enc) {
          case 'utf8':
          case 'utf-8':
            return 'utf8';
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return 'utf16le';
          case 'latin1':
          case 'binary':
            return 'latin1';
          case 'base64':
          case 'ascii':
          case 'hex':
            return enc;
          default:
            if (retried) return;
            enc = ('' + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== 'string' && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error('Unknown encoding: ' + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder2;
    function StringDecoder2(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case 'utf16le':
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case 'utf8':
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case 'base64':
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder2.prototype.write = function(buf) {
      if (buf.length === 0) return '';
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return '';
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || '';
    };
    StringDecoder2.prototype.end = utf8End;
    StringDecoder2.prototype.text = utf8Text;
    StringDecoder2.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return '\uFFFD';
      }
      if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self.lastNeed = 1;
          return '\uFFFD';
        }
        if (self.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self.lastNeed = 2;
            return '\uFFFD';
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString('utf8', i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString('utf8', i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) return r + '\uFFFD';
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString('utf16le', i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString('utf16le', i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString('utf16le', 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString('base64', i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString('base64', i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : '';
      if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : '';
    }
  }
});

// esm-build-881956c3f0c54f75d2ba0f9cbeaa8783e7547cab-f99f0843/mod.js
var __module = __toESM(require_string_decoder());
var { StringDecoder } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { StringDecoder, mod_default as default };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
