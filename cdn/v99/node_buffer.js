/* esm.sh - esbuild bundle(buffer@6.0.3) es2021 production */
var yr = Object.create;
var N = Object.defineProperty;
var wr = Object.getOwnPropertyDescriptor;
var xr = Object.getOwnPropertyNames;
var Br = Object.getPrototypeOf,
  Er = Object.prototype.hasOwnProperty;
var dr = i =>
  N(i, '__esModule', {
    value: !0
  });
var k = (i, r) => () => (
  r ||
    i(
      (r = {
        exports: {}
      }).exports,
      r
    ),
  r.exports
);
var gr = (i, r, t) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
      for (let n of xr(r))
        !Er.call(i, n) &&
          n !== 'default' &&
          N(i, n, {
            get: () => r[n],
            enumerable: !(t = wr(r, n)) || t.enumerable
          });
    return i;
  },
  H = i =>
    gr(
      dr(
        N(
          i != null ? yr(Br(i)) : {},
          'default',
          i && i.__esModule && 'default' in i
            ? {
                get: () => i.default,
                enumerable: !0
              }
            : {
                value: i,
                enumerable: !0
              }
        )
      ),
      i
    );
var J = k(_ => {
  'use strict';

  _.byteLength = Ir;
  _.toByteArray = Ar;
  _.fromByteArray = Rr;
  var B = [],
    w = [],
    mr = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
    b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (m = 0, V = b.length; m < V; ++m) (B[m] = b[m]), (w[b.charCodeAt(m)] = m);
  var m, V;
  w['-'.charCodeAt(0)] = 62;
  w['_'.charCodeAt(0)] = 63;
  function z(i) {
    var r = i.length;
    if (r % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    var t = i.indexOf('=');
    t === -1 && (t = r);
    var n = t === r ? 0 : 4 - (t % 4);
    return [t, n];
  }
  function Ir(i) {
    var r = z(i),
      t = r[0],
      n = r[1];
    return ((t + n) * 3) / 4 - n;
  }
  function Fr(i, r, t) {
    return ((r + t) * 3) / 4 - t;
  }
  function Ar(i) {
    var r,
      t = z(i),
      n = t[0],
      e = t[1],
      o = new mr(Fr(i, n, e)),
      u = 0,
      f = e > 0 ? n - 4 : n,
      c;
    for (c = 0; c < f; c += 4)
      (r =
        (w[i.charCodeAt(c)] << 18) |
        (w[i.charCodeAt(c + 1)] << 12) |
        (w[i.charCodeAt(c + 2)] << 6) |
        w[i.charCodeAt(c + 3)]),
        (o[u++] = (r >> 16) & 255),
        (o[u++] = (r >> 8) & 255),
        (o[u++] = r & 255);
    return (
      e === 2 && ((r = (w[i.charCodeAt(c)] << 2) | (w[i.charCodeAt(c + 1)] >> 4)), (o[u++] = r & 255)),
      e === 1 &&
        ((r = (w[i.charCodeAt(c)] << 10) | (w[i.charCodeAt(c + 1)] << 4) | (w[i.charCodeAt(c + 2)] >> 2)),
        (o[u++] = (r >> 8) & 255),
        (o[u++] = r & 255)),
      o
    );
  }
  function Ur(i) {
    return B[(i >> 18) & 63] + B[(i >> 12) & 63] + B[(i >> 6) & 63] + B[i & 63];
  }
  function Tr(i, r, t) {
    for (var n, e = [], o = r; o < t; o += 3)
      (n = ((i[o] << 16) & 16711680) + ((i[o + 1] << 8) & 65280) + (i[o + 2] & 255)), e.push(Ur(n));
    return e.join('');
  }
  function Rr(i) {
    for (var r, t = i.length, n = t % 3, e = [], o = 16383, u = 0, f = t - n; u < f; u += o)
      e.push(Tr(i, u, u + o > f ? f : u + o));
    return (
      n === 1
        ? ((r = i[t - 1]), e.push(B[r >> 2] + B[(r << 4) & 63] + '=='))
        : n === 2 && ((r = (i[t - 2] << 8) + i[t - 1]), e.push(B[r >> 10] + B[(r >> 4) & 63] + B[(r << 2) & 63] + '=')),
      e.join('')
    );
  }
});
var K = k(D => {
  D.read = function(i, r, t, n, e) {
    var o,
      u,
      f = e * 8 - n - 1,
      c = (1 << f) - 1,
      l = c >> 1,
      s = -7,
      p = t ? e - 1 : 0,
      F = t ? -1 : 1,
      x = i[r + p];
    for (p += F, o = x & ((1 << -s) - 1), x >>= -s, s += f; s > 0; o = o * 256 + i[r + p], p += F, s -= 8);
    for (u = o & ((1 << -s) - 1), o >>= -s, s += n; s > 0; u = u * 256 + i[r + p], p += F, s -= 8);
    if (o === 0) o = 1 - l;
    else {
      if (o === c) return u ? NaN : (x ? -1 : 1) * (1 / 0);
      (u = u + Math.pow(2, n)), (o = o - l);
    }
    return (x ? -1 : 1) * u * Math.pow(2, o - n);
  };
  D.write = function(i, r, t, n, e, o) {
    var u,
      f,
      c,
      l = o * 8 - e - 1,
      s = (1 << l) - 1,
      p = s >> 1,
      F = e === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      x = n ? 0 : o - 1,
      M = n ? 1 : -1,
      ar = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
    for (
      r = Math.abs(r),
        isNaN(r) || r === 1 / 0
          ? ((f = isNaN(r) ? 1 : 0), (u = s))
          : ((u = Math.floor(Math.log(r) / Math.LN2)),
            r * (c = Math.pow(2, -u)) < 1 && (u--, (c *= 2)),
            u + p >= 1 ? (r += F / c) : (r += F * Math.pow(2, 1 - p)),
            r * c >= 2 && (u++, (c /= 2)),
            u + p >= s
              ? ((f = 0), (u = s))
              : u + p >= 1
              ? ((f = (r * c - 1) * Math.pow(2, e)), (u = u + p))
              : ((f = r * Math.pow(2, p - 1) * Math.pow(2, e)), (u = 0)));
      e >= 8;
      i[t + x] = f & 255, x += M, f /= 256, e -= 8
    );
    for (u = (u << e) | f, l += e; l > 0; i[t + x] = u & 255, x += M, u /= 256, l -= 8);
    i[t + x - M] |= ar * 128;
  };
});
var X = k(R => {
  'use strict';

  var $ = J(),
    A = K(),
    Z =
      typeof Symbol == 'function' && typeof Symbol.for == 'function' ? Symbol.for('nodejs.util.inspect.custom') : null;
  R.Buffer = h;
  R.SlowBuffer = Nr;
  R.INSPECT_MAX_BYTES = 50;
  var S = 2147483647;
  R.kMaxLength = S;
  h.TYPED_ARRAY_SUPPORT = Cr();
  !h.TYPED_ARRAY_SUPPORT &&
    typeof console != 'undefined' &&
    typeof console.error == 'function' &&
    console.error(
      'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
    );
  function Cr() {
    try {
      let i = new Uint8Array(1),
        r = {
          foo: function() {
            return 42;
          }
        };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42;
    } catch (i) {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, 'parent', {
    enumerable: !0,
    get: function() {
      if (!!h.isBuffer(this)) return this.buffer;
    }
  });
  Object.defineProperty(h.prototype, 'offset', {
    enumerable: !0,
    get: function() {
      if (!!h.isBuffer(this)) return this.byteOffset;
    }
  });
  function d(i) {
    if (i > S) throw new RangeError('The value "' + i + '" is invalid for option "size"');
    let r = new Uint8Array(i);
    return Object.setPrototypeOf(r, h.prototype), r;
  }
  function h(i, r, t) {
    if (typeof i == 'number') {
      if (typeof r == 'string')
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return P(i);
    }
    return Q(i, r, t);
  }
  h.poolSize = 8192;
  function Q(i, r, t) {
    if (typeof i == 'string') return Sr(i, r);
    if (ArrayBuffer.isView(i)) return Lr(i);
    if (i == null)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof i
      );
    if (
      E(i, ArrayBuffer) ||
      (i && E(i.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer != 'undefined' && (E(i, SharedArrayBuffer) || (i && E(i.buffer, SharedArrayBuffer))))
    )
      return G(i, r, t);
    if (typeof i == 'number')
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = i.valueOf && i.valueOf();
    if (n != null && n !== i) return h.from(n, r, t);
    let e = Mr(i);
    if (e) return e;
    if (typeof Symbol != 'undefined' && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == 'function')
      return h.from(i[Symbol.toPrimitive]('string'), r, t);
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof i
    );
  }
  h.from = function(i, r, t) {
    return Q(i, r, t);
  };
  Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(h, Uint8Array);
  function v(i) {
    if (typeof i != 'number') throw new TypeError('"size" argument must be of type number');
    if (i < 0) throw new RangeError('The value "' + i + '" is invalid for option "size"');
  }
  function _r(i, r, t) {
    return v(i), i <= 0 ? d(i) : r !== void 0 ? (typeof t == 'string' ? d(i).fill(r, t) : d(i).fill(r)) : d(i);
  }
  h.alloc = function(i, r, t) {
    return _r(i, r, t);
  };
  function P(i) {
    return v(i), d(i < 0 ? 0 : Y(i) | 0);
  }
  h.allocUnsafe = function(i) {
    return P(i);
  };
  h.allocUnsafeSlow = function(i) {
    return P(i);
  };
  function Sr(i, r) {
    if (((typeof r != 'string' || r === '') && (r = 'utf8'), !h.isEncoding(r)))
      throw new TypeError('Unknown encoding: ' + r);
    let t = rr(i, r) | 0,
      n = d(t),
      e = n.write(i, r);
    return e !== t && (n = n.slice(0, e)), n;
  }
  function O(i) {
    let r = i.length < 0 ? 0 : Y(i.length) | 0,
      t = d(r);
    for (let n = 0; n < r; n += 1) t[n] = i[n] & 255;
    return t;
  }
  function Lr(i) {
    if (E(i, Uint8Array)) {
      let r = new Uint8Array(i);
      return G(r.buffer, r.byteOffset, r.byteLength);
    }
    return O(i);
  }
  function G(i, r, t) {
    if (r < 0 || i.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
    if (i.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      r === void 0 && t === void 0
        ? (n = new Uint8Array(i))
        : t === void 0
        ? (n = new Uint8Array(i, r))
        : (n = new Uint8Array(i, r, t)),
      Object.setPrototypeOf(n, h.prototype),
      n
    );
  }
  function Mr(i) {
    if (h.isBuffer(i)) {
      let r = Y(i.length) | 0,
        t = d(r);
      return t.length === 0 || i.copy(t, 0, 0, r), t;
    }
    if (i.length !== void 0) return typeof i.length != 'number' || j(i.length) ? d(0) : O(i);
    if (i.type === 'Buffer' && Array.isArray(i.data)) return O(i.data);
  }
  function Y(i) {
    if (i >= S)
      throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + S.toString(16) + ' bytes');
    return i | 0;
  }
  function Nr(i) {
    return +i != i && (i = 0), h.alloc(+i);
  }
  h.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== h.prototype;
  };
  h.compare = function(r, t) {
    if (
      (E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)),
      E(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
      !h.isBuffer(r) || !h.isBuffer(t))
    )
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === t) return 0;
    let n = r.length,
      e = t.length;
    for (let o = 0, u = Math.min(n, e); o < u; ++o)
      if (r[o] !== t[o]) {
        (n = r[o]), (e = t[o]);
        break;
      }
    return n < e ? -1 : e < n ? 1 : 0;
  };
  h.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return !0;
      default:
        return !1;
    }
  };
  h.concat = function(r, t) {
    if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0) return h.alloc(0);
    let n;
    if (t === void 0) for (t = 0, n = 0; n < r.length; ++n) t += r[n].length;
    let e = h.allocUnsafe(t),
      o = 0;
    for (n = 0; n < r.length; ++n) {
      let u = r[n];
      if (E(u, Uint8Array))
        o + u.length > e.length
          ? (h.isBuffer(u) || (u = h.from(u)), u.copy(e, o))
          : Uint8Array.prototype.set.call(e, u, o);
      else if (h.isBuffer(u)) u.copy(e, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += u.length;
    }
    return e;
  };
  function rr(i, r) {
    if (h.isBuffer(i)) return i.length;
    if (ArrayBuffer.isView(i) || E(i, ArrayBuffer)) return i.byteLength;
    if (typeof i != 'string')
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i
      );
    let t = i.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && t === 0) return 0;
    let e = !1;
    for (;;)
      switch (r) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return t;
        case 'utf8':
        case 'utf-8':
          return W(i).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return t * 2;
        case 'hex':
          return t >>> 1;
        case 'base64':
          return lr(i).length;
        default:
          if (e) return n ? -1 : W(i).length;
          (r = ('' + r).toLowerCase()), (e = !0);
      }
  }
  h.byteLength = rr;
  function kr(i, r, t) {
    let n = !1;
    if (
      ((r === void 0 || r < 0) && (r = 0),
      r > this.length ||
        ((t === void 0 || t > this.length) && (t = this.length), t <= 0) ||
        ((t >>>= 0), (r >>>= 0), t <= r))
    )
      return '';
    for (i || (i = 'utf8'); ; )
      switch (i) {
        case 'hex':
          return jr(this, r, t);
        case 'utf8':
        case 'utf-8':
          return nr(this, r, t);
        case 'ascii':
          return qr(this, r, t);
        case 'latin1':
        case 'binary':
          return Wr(this, r, t);
        case 'base64':
          return Gr(this, r, t);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Xr(this, r, t);
        default:
          if (n) throw new TypeError('Unknown encoding: ' + i);
          (i = (i + '').toLowerCase()), (n = !0);
      }
  }
  h.prototype._isBuffer = !0;
  function I(i, r, t) {
    let n = i[r];
    (i[r] = i[t]), (i[t] = n);
  }
  h.prototype.swap16 = function() {
    let r = this.length;
    if (r % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (let t = 0; t < r; t += 2) I(this, t, t + 1);
    return this;
  };
  h.prototype.swap32 = function() {
    let r = this.length;
    if (r % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for (let t = 0; t < r; t += 4) I(this, t, t + 3), I(this, t + 1, t + 2);
    return this;
  };
  h.prototype.swap64 = function() {
    let r = this.length;
    if (r % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for (let t = 0; t < r; t += 8)
      I(this, t, t + 7), I(this, t + 1, t + 6), I(this, t + 2, t + 5), I(this, t + 3, t + 4);
    return this;
  };
  h.prototype.toString = function() {
    let r = this.length;
    return r === 0 ? '' : arguments.length === 0 ? nr(this, 0, r) : kr.apply(this, arguments);
  };
  h.prototype.toLocaleString = h.prototype.toString;
  h.prototype.equals = function(r) {
    if (!h.isBuffer(r)) throw new TypeError('Argument must be a Buffer');
    return this === r ? !0 : h.compare(this, r) === 0;
  };
  h.prototype.inspect = function() {
    let r = '',
      t = R.INSPECT_MAX_BYTES;
    return (
      (r = this.toString('hex', 0, t)
        .replace(/(.{2})/g, '$1 ')
        .trim()),
      this.length > t && (r += ' ... '),
      '<Buffer ' + r + '>'
    );
  };
  Z && (h.prototype[Z] = h.prototype.inspect);
  h.prototype.compare = function(r, t, n, e, o) {
    if ((E(r, Uint8Array) && (r = h.from(r, r.offset, r.byteLength)), !h.isBuffer(r)))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (
      (t === void 0 && (t = 0),
      n === void 0 && (n = r ? r.length : 0),
      e === void 0 && (e = 0),
      o === void 0 && (o = this.length),
      t < 0 || n > r.length || e < 0 || o > this.length)
    )
      throw new RangeError('out of range index');
    if (e >= o && t >= n) return 0;
    if (e >= o) return -1;
    if (t >= n) return 1;
    if (((t >>>= 0), (n >>>= 0), (e >>>= 0), (o >>>= 0), this === r)) return 0;
    let u = o - e,
      f = n - t,
      c = Math.min(u, f),
      l = this.slice(e, o),
      s = r.slice(t, n);
    for (let p = 0; p < c; ++p)
      if (l[p] !== s[p]) {
        (u = l[p]), (f = s[p]);
        break;
      }
    return u < f ? -1 : f < u ? 1 : 0;
  };
  function tr(i, r, t, n, e) {
    if (i.length === 0) return -1;
    if (
      (typeof t == 'string'
        ? ((n = t), (t = 0))
        : t > 2147483647
        ? (t = 2147483647)
        : t < -2147483648 && (t = -2147483648),
      (t = +t),
      j(t) && (t = e ? 0 : i.length - 1),
      t < 0 && (t = i.length + t),
      t >= i.length)
    ) {
      if (e) return -1;
      t = i.length - 1;
    } else if (t < 0)
      if (e) t = 0;
      else return -1;
    if ((typeof r == 'string' && (r = h.from(r, n)), h.isBuffer(r))) return r.length === 0 ? -1 : ir(i, r, t, n, e);
    if (typeof r == 'number')
      return (
        (r = r & 255),
        typeof Uint8Array.prototype.indexOf == 'function'
          ? e
            ? Uint8Array.prototype.indexOf.call(i, r, t)
            : Uint8Array.prototype.lastIndexOf.call(i, r, t)
          : ir(i, [r], t, n, e)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function ir(i, r, t, n, e) {
    let o = 1,
      u = i.length,
      f = r.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()), n === 'ucs2' || n === 'ucs-2' || n === 'utf16le' || n === 'utf-16le')
    ) {
      if (i.length < 2 || r.length < 2) return -1;
      (o = 2), (u /= 2), (f /= 2), (t /= 2);
    }
    function c(s, p) {
      return o === 1 ? s[p] : s.readUInt16BE(p * o);
    }
    let l;
    if (e) {
      let s = -1;
      for (l = t; l < u; l++)
        if (c(i, l) === c(r, s === -1 ? 0 : l - s)) {
          if ((s === -1 && (s = l), l - s + 1 === f)) return s * o;
        } else s !== -1 && (l -= l - s), (s = -1);
    } else
      for (t + f > u && (t = u - f), l = t; l >= 0; l--) {
        let s = !0;
        for (let p = 0; p < f; p++)
          if (c(i, l + p) !== c(r, p)) {
            s = !1;
            break;
          }
        if (s) return l;
      }
    return -1;
  }
  h.prototype.includes = function(r, t, n) {
    return this.indexOf(r, t, n) !== -1;
  };
  h.prototype.indexOf = function(r, t, n) {
    return tr(this, r, t, n, !0);
  };
  h.prototype.lastIndexOf = function(r, t, n) {
    return tr(this, r, t, n, !1);
  };
  function br(i, r, t, n) {
    t = Number(t) || 0;
    let e = i.length - t;
    n ? ((n = Number(n)), n > e && (n = e)) : (n = e);
    let o = r.length;
    n > o / 2 && (n = o / 2);
    let u;
    for (u = 0; u < n; ++u) {
      let f = parseInt(r.substr(u * 2, 2), 16);
      if (j(f)) return u;
      i[t + u] = f;
    }
    return u;
  }
  function Dr(i, r, t, n) {
    return L(W(r, i.length - t), i, t, n);
  }
  function $r(i, r, t, n) {
    return L(Jr(r), i, t, n);
  }
  function Pr(i, r, t, n) {
    return L(lr(r), i, t, n);
  }
  function Or(i, r, t, n) {
    return L(Kr(r, i.length - t), i, t, n);
  }
  h.prototype.write = function(r, t, n, e) {
    if (t === void 0) (e = 'utf8'), (n = this.length), (t = 0);
    else if (n === void 0 && typeof t == 'string') (e = t), (n = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0), isFinite(n) ? ((n = n >>> 0), e === void 0 && (e = 'utf8')) : ((e = n), (n = void 0));
    else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    let o = this.length - t;
    if (((n === void 0 || n > o) && (n = o), (r.length > 0 && (n < 0 || t < 0)) || t > this.length))
      throw new RangeError('Attempt to write outside buffer bounds');
    e || (e = 'utf8');
    let u = !1;
    for (;;)
      switch (e) {
        case 'hex':
          return br(this, r, t, n);
        case 'utf8':
        case 'utf-8':
          return Dr(this, r, t, n);
        case 'ascii':
        case 'latin1':
        case 'binary':
          return $r(this, r, t, n);
        case 'base64':
          return Pr(this, r, t, n);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Or(this, r, t, n);
        default:
          if (u) throw new TypeError('Unknown encoding: ' + e);
          (e = ('' + e).toLowerCase()), (u = !0);
      }
  };
  h.prototype.toJSON = function() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Gr(i, r, t) {
    return r === 0 && t === i.length ? $.fromByteArray(i) : $.fromByteArray(i.slice(r, t));
  }
  function nr(i, r, t) {
    t = Math.min(i.length, t);
    let n = [],
      e = r;
    for (; e < t; ) {
      let o = i[e],
        u = null,
        f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (e + f <= t) {
        let c, l, s, p;
        switch (f) {
          case 1:
            o < 128 && (u = o);
            break;
          case 2:
            (c = i[e + 1]), (c & 192) == 128 && ((p = ((o & 31) << 6) | (c & 63)), p > 127 && (u = p));
            break;
          case 3:
            (c = i[e + 1]),
              (l = i[e + 2]),
              (c & 192) == 128 &&
                (l & 192) == 128 &&
                ((p = ((o & 15) << 12) | ((c & 63) << 6) | (l & 63)), p > 2047 && (p < 55296 || p > 57343) && (u = p));
            break;
          case 4:
            (c = i[e + 1]),
              (l = i[e + 2]),
              (s = i[e + 3]),
              (c & 192) == 128 &&
                (l & 192) == 128 &&
                (s & 192) == 128 &&
                ((p = ((o & 15) << 18) | ((c & 63) << 12) | ((l & 63) << 6) | (s & 63)),
                p > 65535 && p < 1114112 && (u = p));
        }
      }
      u === null
        ? ((u = 65533), (f = 1))
        : u > 65535 && ((u -= 65536), n.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (u & 1023))),
        n.push(u),
        (e += f);
    }
    return Yr(n);
  }
  var er = 4096;
  function Yr(i) {
    let r = i.length;
    if (r <= er) return String.fromCharCode.apply(String, i);
    let t = '',
      n = 0;
    for (; n < r; ) t += String.fromCharCode.apply(String, i.slice(n, (n += er)));
    return t;
  }
  function qr(i, r, t) {
    let n = '';
    t = Math.min(i.length, t);
    for (let e = r; e < t; ++e) n += String.fromCharCode(i[e] & 127);
    return n;
  }
  function Wr(i, r, t) {
    let n = '';
    t = Math.min(i.length, t);
    for (let e = r; e < t; ++e) n += String.fromCharCode(i[e]);
    return n;
  }
  function jr(i, r, t) {
    let n = i.length;
    (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
    let e = '';
    for (let o = r; o < t; ++o) e += Zr[i[o]];
    return e;
  }
  function Xr(i, r, t) {
    let n = i.slice(r, t),
      e = '';
    for (let o = 0; o < n.length - 1; o += 2) e += String.fromCharCode(n[o] + n[o + 1] * 256);
    return e;
  }
  h.prototype.slice = function(r, t) {
    let n = this.length;
    (r = ~~r),
      (t = t === void 0 ? n : ~~t),
      r < 0 ? ((r += n), r < 0 && (r = 0)) : r > n && (r = n),
      t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
      t < r && (t = r);
    let e = this.subarray(r, t);
    return Object.setPrototypeOf(e, h.prototype), e;
  };
  function a(i, r, t) {
    if (i % 1 != 0 || i < 0) throw new RangeError('offset is not uint');
    if (i + r > t) throw new RangeError('Trying to access beyond buffer length');
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(r, t, n) {
    (r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
    let e = this[r],
      o = 1,
      u = 0;
    for (; ++u < t && (o *= 256); ) e += this[r + u] * o;
    return e;
  };
  h.prototype.readUintBE = h.prototype.readUIntBE = function(r, t, n) {
    (r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
    let e = this[r + --t],
      o = 1;
    for (; t > 0 && (o *= 256); ) e += this[r + --t] * o;
    return e;
  };
  h.prototype.readUint8 = h.prototype.readUInt8 = function(r, t) {
    return (r = r >>> 0), t || a(r, 1, this.length), this[r];
  };
  h.prototype.readUint16LE = h.prototype.readUInt16LE = function(r, t) {
    return (r = r >>> 0), t || a(r, 2, this.length), this[r] | (this[r + 1] << 8);
  };
  h.prototype.readUint16BE = h.prototype.readUInt16BE = function(r, t) {
    return (r = r >>> 0), t || a(r, 2, this.length), (this[r] << 8) | this[r + 1];
  };
  h.prototype.readUint32LE = h.prototype.readUInt32LE = function(r, t) {
    return (
      (r = r >>> 0),
      t || a(r, 4, this.length),
      (this[r] | (this[r + 1] << 8) | (this[r + 2] << 16)) + this[r + 3] * 16777216
    );
  };
  h.prototype.readUint32BE = h.prototype.readUInt32BE = function(r, t) {
    return (
      (r = r >>> 0),
      t || a(r, 4, this.length),
      this[r] * 16777216 + ((this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3])
    );
  };
  h.prototype.readBigUInt64LE = g(function(r) {
    (r = r >>> 0), T(r, 'offset');
    let t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && C(r, this.length - 8);
    let e = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24,
      o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
    return BigInt(e) + (BigInt(o) << BigInt(32));
  });
  h.prototype.readBigUInt64BE = g(function(r) {
    (r = r >>> 0), T(r, 'offset');
    let t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && C(r, this.length - 8);
    let e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r],
      o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
    return (BigInt(e) << BigInt(32)) + BigInt(o);
  });
  h.prototype.readIntLE = function(r, t, n) {
    (r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
    let e = this[r],
      o = 1,
      u = 0;
    for (; ++u < t && (o *= 256); ) e += this[r + u] * o;
    return (o *= 128), e >= o && (e -= Math.pow(2, 8 * t)), e;
  };
  h.prototype.readIntBE = function(r, t, n) {
    (r = r >>> 0), (t = t >>> 0), n || a(r, t, this.length);
    let e = t,
      o = 1,
      u = this[r + --e];
    for (; e > 0 && (o *= 256); ) u += this[r + --e] * o;
    return (o *= 128), u >= o && (u -= Math.pow(2, 8 * t)), u;
  };
  h.prototype.readInt8 = function(r, t) {
    return (r = r >>> 0), t || a(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  };
  h.prototype.readInt16LE = function(r, t) {
    (r = r >>> 0), t || a(r, 2, this.length);
    let n = this[r] | (this[r + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  h.prototype.readInt16BE = function(r, t) {
    (r = r >>> 0), t || a(r, 2, this.length);
    let n = this[r + 1] | (this[r] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  h.prototype.readInt32LE = function(r, t) {
    return (
      (r = r >>> 0), t || a(r, 4, this.length), this[r] | (this[r + 1] << 8) | (this[r + 2] << 16) | (this[r + 3] << 24)
    );
  };
  h.prototype.readInt32BE = function(r, t) {
    return (
      (r = r >>> 0), t || a(r, 4, this.length), (this[r] << 24) | (this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3]
    );
  };
  h.prototype.readBigInt64LE = g(function(r) {
    (r = r >>> 0), T(r, 'offset');
    let t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && C(r, this.length - 8);
    let e = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
    return (BigInt(e) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  });
  h.prototype.readBigInt64BE = g(function(r) {
    (r = r >>> 0), T(r, 'offset');
    let t = this[r],
      n = this[r + 7];
    (t === void 0 || n === void 0) && C(r, this.length - 8);
    let e = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(e) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
  });
  h.prototype.readFloatLE = function(r, t) {
    return (r = r >>> 0), t || a(r, 4, this.length), A.read(this, r, !0, 23, 4);
  };
  h.prototype.readFloatBE = function(r, t) {
    return (r = r >>> 0), t || a(r, 4, this.length), A.read(this, r, !1, 23, 4);
  };
  h.prototype.readDoubleLE = function(r, t) {
    return (r = r >>> 0), t || a(r, 8, this.length), A.read(this, r, !0, 52, 8);
  };
  h.prototype.readDoubleBE = function(r, t) {
    return (r = r >>> 0), t || a(r, 8, this.length), A.read(this, r, !1, 52, 8);
  };
  function y(i, r, t, n, e, o) {
    if (!h.isBuffer(i)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > e || r < o) throw new RangeError('"value" argument is out of bounds');
    if (t + n > i.length) throw new RangeError('Index out of range');
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(r, t, n, e) {
    if (((r = +r), (t = t >>> 0), (n = n >>> 0), !e)) {
      let f = Math.pow(2, 8 * n) - 1;
      y(this, r, t, n, f, 0);
    }
    let o = 1,
      u = 0;
    for (this[t] = r & 255; ++u < n && (o *= 256); ) this[t + u] = (r / o) & 255;
    return t + n;
  };
  h.prototype.writeUintBE = h.prototype.writeUIntBE = function(r, t, n, e) {
    if (((r = +r), (t = t >>> 0), (n = n >>> 0), !e)) {
      let f = Math.pow(2, 8 * n) - 1;
      y(this, r, t, n, f, 0);
    }
    let o = n - 1,
      u = 1;
    for (this[t + o] = r & 255; --o >= 0 && (u *= 256); ) this[t + o] = (r / u) & 255;
    return t + n;
  };
  h.prototype.writeUint8 = h.prototype.writeUInt8 = function(r, t, n) {
    return (r = +r), (t = t >>> 0), n || y(this, r, t, 1, 255, 0), (this[t] = r & 255), t + 1;
  };
  h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(r, t, n) {
    return (
      (r = +r), (t = t >>> 0), n || y(this, r, t, 2, 65535, 0), (this[t] = r & 255), (this[t + 1] = r >>> 8), t + 2
    );
  };
  h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(r, t, n) {
    return (
      (r = +r), (t = t >>> 0), n || y(this, r, t, 2, 65535, 0), (this[t] = r >>> 8), (this[t + 1] = r & 255), t + 2
    );
  };
  h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(r, t, n) {
    return (
      (r = +r),
      (t = t >>> 0),
      n || y(this, r, t, 4, 4294967295, 0),
      (this[t + 3] = r >>> 24),
      (this[t + 2] = r >>> 16),
      (this[t + 1] = r >>> 8),
      (this[t] = r & 255),
      t + 4
    );
  };
  h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(r, t, n) {
    return (
      (r = +r),
      (t = t >>> 0),
      n || y(this, r, t, 4, 4294967295, 0),
      (this[t] = r >>> 24),
      (this[t + 1] = r >>> 16),
      (this[t + 2] = r >>> 8),
      (this[t + 3] = r & 255),
      t + 4
    );
  };
  function or(i, r, t, n, e) {
    sr(r, n, e, i, t, 7);
    let o = Number(r & BigInt(4294967295));
    (i[t++] = o), (o = o >> 8), (i[t++] = o), (o = o >> 8), (i[t++] = o), (o = o >> 8), (i[t++] = o);
    let u = Number((r >> BigInt(32)) & BigInt(4294967295));
    return (i[t++] = u), (u = u >> 8), (i[t++] = u), (u = u >> 8), (i[t++] = u), (u = u >> 8), (i[t++] = u), t;
  }
  function ur(i, r, t, n, e) {
    sr(r, n, e, i, t, 7);
    let o = Number(r & BigInt(4294967295));
    (i[t + 7] = o), (o = o >> 8), (i[t + 6] = o), (o = o >> 8), (i[t + 5] = o), (o = o >> 8), (i[t + 4] = o);
    let u = Number((r >> BigInt(32)) & BigInt(4294967295));
    return (i[t + 3] = u), (u = u >> 8), (i[t + 2] = u), (u = u >> 8), (i[t + 1] = u), (u = u >> 8), (i[t] = u), t + 8;
  }
  h.prototype.writeBigUInt64LE = g(function(r, t = 0) {
    return or(this, r, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  h.prototype.writeBigUInt64BE = g(function(r, t = 0) {
    return ur(this, r, t, BigInt(0), BigInt('0xffffffffffffffff'));
  });
  h.prototype.writeIntLE = function(r, t, n, e) {
    if (((r = +r), (t = t >>> 0), !e)) {
      let c = Math.pow(2, 8 * n - 1);
      y(this, r, t, n, c - 1, -c);
    }
    let o = 0,
      u = 1,
      f = 0;
    for (this[t] = r & 255; ++o < n && (u *= 256); )
      r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), (this[t + o] = (((r / u) >> 0) - f) & 255);
    return t + n;
  };
  h.prototype.writeIntBE = function(r, t, n, e) {
    if (((r = +r), (t = t >>> 0), !e)) {
      let c = Math.pow(2, 8 * n - 1);
      y(this, r, t, n, c - 1, -c);
    }
    let o = n - 1,
      u = 1,
      f = 0;
    for (this[t + o] = r & 255; --o >= 0 && (u *= 256); )
      r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), (this[t + o] = (((r / u) >> 0) - f) & 255);
    return t + n;
  };
  h.prototype.writeInt8 = function(r, t, n) {
    return (
      (r = +r), (t = t >>> 0), n || y(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), (this[t] = r & 255), t + 1
    );
  };
  h.prototype.writeInt16LE = function(r, t, n) {
    return (
      (r = +r), (t = t >>> 0), n || y(this, r, t, 2, 32767, -32768), (this[t] = r & 255), (this[t + 1] = r >>> 8), t + 2
    );
  };
  h.prototype.writeInt16BE = function(r, t, n) {
    return (
      (r = +r), (t = t >>> 0), n || y(this, r, t, 2, 32767, -32768), (this[t] = r >>> 8), (this[t + 1] = r & 255), t + 2
    );
  };
  h.prototype.writeInt32LE = function(r, t, n) {
    return (
      (r = +r),
      (t = t >>> 0),
      n || y(this, r, t, 4, 2147483647, -2147483648),
      (this[t] = r & 255),
      (this[t + 1] = r >>> 8),
      (this[t + 2] = r >>> 16),
      (this[t + 3] = r >>> 24),
      t + 4
    );
  };
  h.prototype.writeInt32BE = function(r, t, n) {
    return (
      (r = +r),
      (t = t >>> 0),
      n || y(this, r, t, 4, 2147483647, -2147483648),
      r < 0 && (r = 4294967295 + r + 1),
      (this[t] = r >>> 24),
      (this[t + 1] = r >>> 16),
      (this[t + 2] = r >>> 8),
      (this[t + 3] = r & 255),
      t + 4
    );
  };
  h.prototype.writeBigInt64LE = g(function(r, t = 0) {
    return or(this, r, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  h.prototype.writeBigInt64BE = g(function(r, t = 0) {
    return ur(this, r, t, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
  });
  function hr(i, r, t, n, e, o) {
    if (t + n > i.length) throw new RangeError('Index out of range');
    if (t < 0) throw new RangeError('Index out of range');
  }
  function fr(i, r, t, n, e) {
    return (
      (r = +r),
      (t = t >>> 0),
      e || hr(i, r, t, 4, 34028234663852886e22, -34028234663852886e22),
      A.write(i, r, t, n, 23, 4),
      t + 4
    );
  }
  h.prototype.writeFloatLE = function(r, t, n) {
    return fr(this, r, t, !0, n);
  };
  h.prototype.writeFloatBE = function(r, t, n) {
    return fr(this, r, t, !1, n);
  };
  function cr(i, r, t, n, e) {
    return (
      (r = +r),
      (t = t >>> 0),
      e || hr(i, r, t, 8, 17976931348623157e292, -17976931348623157e292),
      A.write(i, r, t, n, 52, 8),
      t + 8
    );
  }
  h.prototype.writeDoubleLE = function(r, t, n) {
    return cr(this, r, t, !0, n);
  };
  h.prototype.writeDoubleBE = function(r, t, n) {
    return cr(this, r, t, !1, n);
  };
  h.prototype.copy = function(r, t, n, e) {
    if (!h.isBuffer(r)) throw new TypeError('argument should be a Buffer');
    if (
      (n || (n = 0),
      !e && e !== 0 && (e = this.length),
      t >= r.length && (t = r.length),
      t || (t = 0),
      e > 0 && e < n && (e = n),
      e === n || r.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError('targetStart out of bounds');
    if (n < 0 || n >= this.length) throw new RangeError('Index out of range');
    if (e < 0) throw new RangeError('sourceEnd out of bounds');
    e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
    let o = e - n;
    return (
      this === r && typeof Uint8Array.prototype.copyWithin == 'function'
        ? this.copyWithin(t, n, e)
        : Uint8Array.prototype.set.call(r, this.subarray(n, e), t),
      o
    );
  };
  h.prototype.fill = function(r, t, n, e) {
    if (typeof r == 'string') {
      if (
        (typeof t == 'string'
          ? ((e = t), (t = 0), (n = this.length))
          : typeof n == 'string' && ((e = n), (n = this.length)),
        e !== void 0 && typeof e != 'string')
      )
        throw new TypeError('encoding must be a string');
      if (typeof e == 'string' && !h.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e);
      if (r.length === 1) {
        let u = r.charCodeAt(0);
        ((e === 'utf8' && u < 128) || e === 'latin1') && (r = u);
      }
    } else typeof r == 'number' ? (r = r & 255) : typeof r == 'boolean' && (r = Number(r));
    if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index');
    if (n <= t) return this;
    (t = t >>> 0), (n = n === void 0 ? this.length : n >>> 0), r || (r = 0);
    let o;
    if (typeof r == 'number') for (o = t; o < n; ++o) this[o] = r;
    else {
      let u = h.isBuffer(r) ? r : h.from(r, e),
        f = u.length;
      if (f === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (o = 0; o < n - t; ++o) this[o + t] = u[o % f];
    }
    return this;
  };
  var U = {};
  function q(i, r, t) {
    U[i] = class extends t {
      constructor() {
        super();
        Object.defineProperty(this, 'message', {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }),
          (this.name = `${this.name} [${i}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return i;
      }
      set code(e) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: e,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${i}]: ${this.message}`;
      }
    };
  }
  q(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function(i) {
      return i ? `${i} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
    },
    RangeError
  );
  q(
    'ERR_INVALID_ARG_TYPE',
    function(i, r) {
      return `The "${i}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  );
  q(
    'ERR_OUT_OF_RANGE',
    function(i, r, t) {
      let n = `The value of "${i}" is out of range.`,
        e = t;
      return (
        Number.isInteger(t) && Math.abs(t) > 2 ** 32
          ? (e = pr(String(t)))
          : typeof t == 'bigint' &&
            ((e = String(t)),
            (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = pr(e)),
            (e += 'n')),
        (n += ` It must be ${r}. Received ${e}`),
        n
      );
    },
    RangeError
  );
  function pr(i) {
    let r = '',
      t = i.length,
      n = i[0] === '-' ? 1 : 0;
    for (; t >= n + 4; t -= 3) r = `_${i.slice(t - 3, t)}${r}`;
    return `${i.slice(0, t)}${r}`;
  }
  function Hr(i, r, t) {
    T(r, 'offset'), (i[r] === void 0 || i[r + t] === void 0) && C(r, i.length - (t + 1));
  }
  function sr(i, r, t, n, e, o) {
    if (i > t || i < r) {
      let u = typeof r == 'bigint' ? 'n' : '',
        f;
      throw (o > 3
        ? r === 0 || r === BigInt(0)
          ? (f = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}`)
          : (f = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}`)
        : (f = `>= ${r}${u} and <= ${t}${u}`),
      new U.ERR_OUT_OF_RANGE('value', f, i));
    }
    Hr(n, e, o);
  }
  function T(i, r) {
    if (typeof i != 'number') throw new U.ERR_INVALID_ARG_TYPE(r, 'number', i);
  }
  function C(i, r, t) {
    throw Math.floor(i) !== i
      ? (T(i, t), new U.ERR_OUT_OF_RANGE(t || 'offset', 'an integer', i))
      : r < 0
      ? new U.ERR_BUFFER_OUT_OF_BOUNDS()
      : new U.ERR_OUT_OF_RANGE(t || 'offset', `>= ${t ? 1 : 0} and <= ${r}`, i);
  }
  var Vr = /[^+/0-9A-Za-z-_]/g;
  function zr(i) {
    if (((i = i.split('=')[0]), (i = i.trim().replace(Vr, '')), i.length < 2)) return '';
    for (; i.length % 4 != 0; ) i = i + '=';
    return i;
  }
  function W(i, r) {
    r = r || 1 / 0;
    let t,
      n = i.length,
      e = null,
      o = [];
    for (let u = 0; u < n; ++u) {
      if (((t = i.charCodeAt(u)), t > 55295 && t < 57344)) {
        if (!e) {
          if (t > 56319) {
            (r -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (u + 1 === n) {
            (r -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          e = t;
          continue;
        }
        if (t < 56320) {
          (r -= 3) > -1 && o.push(239, 191, 189), (e = t);
          continue;
        }
        t = (((e - 55296) << 10) | (t - 56320)) + 65536;
      } else e && (r -= 3) > -1 && o.push(239, 191, 189);
      if (((e = null), t < 128)) {
        if ((r -= 1) < 0) break;
        o.push(t);
      } else if (t < 2048) {
        if ((r -= 2) < 0) break;
        o.push((t >> 6) | 192, (t & 63) | 128);
      } else if (t < 65536) {
        if ((r -= 3) < 0) break;
        o.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else if (t < 1114112) {
        if ((r -= 4) < 0) break;
        o.push((t >> 18) | 240, ((t >> 12) & 63) | 128, ((t >> 6) & 63) | 128, (t & 63) | 128);
      } else throw new Error('Invalid code point');
    }
    return o;
  }
  function Jr(i) {
    let r = [];
    for (let t = 0; t < i.length; ++t) r.push(i.charCodeAt(t) & 255);
    return r;
  }
  function Kr(i, r) {
    let t,
      n,
      e,
      o = [];
    for (let u = 0; u < i.length && !((r -= 2) < 0); ++u)
      (t = i.charCodeAt(u)), (n = t >> 8), (e = t % 256), o.push(e), o.push(n);
    return o;
  }
  function lr(i) {
    return $.toByteArray(zr(i));
  }
  function L(i, r, t, n) {
    let e;
    for (e = 0; e < n && !(e + t >= r.length || e >= i.length); ++e) r[e + t] = i[e];
    return e;
  }
  function E(i, r) {
    return (
      i instanceof r ||
      (i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === r.name)
    );
  }
  function j(i) {
    return i !== i;
  }
  var Zr = (function() {
    let i = '0123456789abcdef',
      r = new Array(256);
    for (let t = 0; t < 16; ++t) {
      let n = t * 16;
      for (let e = 0; e < 16; ++e) r[n + e] = i[t] + i[e];
    }
    return r;
  })();
  function g(i) {
    return typeof BigInt == 'undefined' ? Qr : i;
  }
  function Qr() {
    throw new Error('BigInt not supported');
  }
});
var vr = H(X()),
  rt = H(X()),
  { Buffer: ut, SlowBuffer: ht, INSPECT_MAX_BYTES: ft, kMaxLength: ct } = vr;
var export_default = rt.default;
export { ut as Buffer, ft as INSPECT_MAX_BYTES, ht as SlowBuffer, export_default as default, ct as kMaxLength };
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
