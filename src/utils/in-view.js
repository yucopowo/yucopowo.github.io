/* esm.sh - esbuild bundle(in-view@0.6.1) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// esm-build-c6b6946ada364dceb4e89f163bf1e2c6196eb6a7-a592c0c0/node_modules/in-view/dist/in-view.min.js
var require_in_view_min = __commonJS({
  "esm-build-c6b6946ada364dceb4e89f163bf1e2c6196eb6a7-a592c0c0/node_modules/in-view/dist/in-view.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : t.inView = e();
    }(exports, function() {
      return function(t) {
        function e(r) {
          if (n[r])
            return n[r].exports;
          var i = n[r] = { exports: {}, id: r, loaded: false };
          return t[r].call(i.exports, i, i.exports, e), i.loaded = true, i.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
      }([function(t, e, n) {
        "use strict";
        function r(t2) {
          return t2 && t2.__esModule ? t2 : { "default": t2 };
        }
        var i = n(2), o = r(i);
        t.exports = o["default"];
      }, function(t, e) {
        function n(t2) {
          var e2 = typeof t2;
          return null != t2 && ("object" == e2 || "function" == e2);
        }
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        function r(t2) {
          return t2 && t2.__esModule ? t2 : { "default": t2 };
        }
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(9), o = r(i), u = n(3), f = r(u), s = n(4), c = function() {
          if ("undefined" != typeof window) {
            var t2 = 100, e2 = ["scroll", "resize", "load"], n2 = { history: [] }, r2 = { offset: {}, threshold: 0, test: s.inViewport }, i2 = (0, o["default"])(function() {
              n2.history.forEach(function(t3) {
                n2[t3].check();
              });
            }, t2);
            e2.forEach(function(t3) {
              return addEventListener(t3, i2);
            }), window.MutationObserver && addEventListener("DOMContentLoaded", function() {
              new MutationObserver(i2).observe(document.body, { attributes: true, childList: true, subtree: true });
            });
            var u2 = function(t3) {
              var e3
              if ("string" == typeof t3) {
                e3 = [].slice.call(document.querySelectorAll(t3));
              } else {
                e3 = [t3];
              }

                return n2.history.indexOf(t3) > -1 ? n2[t3].elements = e3 : (n2[t3] = (0, f["default"])(e3, r2), n2.history.push(t3)), n2[t3];


            };
            return u2.offset = function(t3) {
              if (void 0 === t3)
                return r2.offset;
              var e3 = function(t4) {
                return "number" == typeof t4;
              };
              return ["top", "right", "bottom", "left"].forEach(e3(t3) ? function(e4) {
                return r2.offset[e4] = t3;
              } : function(n3) {
                return e3(t3[n3]) ? r2.offset[n3] = t3[n3] : null;
              }), r2.offset;
            }, u2.threshold = function(t3) {
              return "number" == typeof t3 && t3 >= 0 && t3 <= 1 ? r2.threshold = t3 : r2.threshold;
            }, u2.test = function(t3) {
              return "function" == typeof t3 ? r2.test = t3 : r2.test;
            }, u2.is = function(t3) {
              return r2.test(t3, r2);
            }, u2.offset(0), u2;
          }
        };
        e["default"] = c();
      }, function(t, e) {
        "use strict";
        function n(t2, e2) {
          if (!(t2 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(e, "__esModule", { value: true });
        var r = function() {
          function t2(t3, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
            }
          }
          return function(e2, n2, r2) {
            return n2 && t2(e2.prototype, n2), r2 && t2(e2, r2), e2;
          };
        }(), i = function() {
          function t2(e2, r2) {
            n(this, t2), this.options = r2, this.elements = e2, this.current = [], this.handlers = { enter: [], exit: [] }, this.singles = { enter: [], exit: [] };
          }
          return r(t2, [{ key: "check", value: function() {
            var t3 = this;
            return this.elements.forEach(function(e2) {
              var n2 = t3.options.test(e2, t3.options), r2 = t3.current.indexOf(e2), i2 = r2 > -1, o = n2 && !i2, u = !n2 && i2;
              o && (t3.current.push(e2), t3.emit("enter", e2)), u && (t3.current.splice(r2, 1), t3.emit("exit", e2));
            }), this;
          } }, { key: "on", value: function(t3, e2) {
            return this.handlers[t3].push(e2), this;
          } }, { key: "once", value: function(t3, e2) {
            return this.singles[t3].unshift(e2), this;
          } }, { key: "emit", value: function(t3, e2) {
            for (; this.singles[t3].length; )
              this.singles[t3].pop()(e2);
            for (var n2 = this.handlers[t3].length; --n2 > -1; )
              this.handlers[t3][n2](e2);
            return this;
          } }]), t2;
        }();
        e["default"] = function(t2, e2) {
          return new i(t2, e2);
        };
      }, function(t, e) {
        "use strict";
        function n(t2, e2) {
          var n2 = t2.getBoundingClientRect(), r = n2.top, i = n2.right, o = n2.bottom, u = n2.left, f = n2.width, s = n2.height, c = { t: o, r: window.innerWidth - u, b: window.innerHeight - r, l: i }, a = { x: e2.threshold * f, y: e2.threshold * s };
          return c.t > e2.offset.top + a.y && c.r > e2.offset.right + a.x && c.b > e2.offset.bottom + a.y && c.l > e2.offset.left + a.x;
        }
        Object.defineProperty(e, "__esModule", { value: true }), e.inViewport = n;
      }, function(t, e) {
        (function(e2) {
          var n = "object" == typeof e2 && e2 && e2.Object === Object && e2;
          t.exports = n;
        }).call(e, function() {
          return this;
        }());
      }, function(t, e, n) {
        var r = n(5), i = "object" == typeof self && self && self.Object === Object && self, o = r || i || Function("return this")();
        t.exports = o;
      }, function(t, e, n) {
        function r(t2, e2, n2) {
          function r2(e3) {
            var n3 = x, r3 = m;
            return x = m = void 0, E = e3, w = t2.apply(r3, n3);
          }
          function a(t3) {
            return E = t3, j = setTimeout(h, e2), M ? r2(t3) : w;
          }
          function l(t3) {
            var n3 = t3 - O, r3 = t3 - E, i2 = e2 - n3;
            return _ ? c(i2, g - r3) : i2;
          }
          function d(t3) {
            var n3 = t3 - O, r3 = t3 - E;
            return void 0 === O || n3 >= e2 || n3 < 0 || _ && r3 >= g;
          }
          function h() {
            var t3 = o();
            return d(t3) ? p(t3) : void (j = setTimeout(h, l(t3)));
          }
          function p(t3) {
            return j = void 0, T && x ? r2(t3) : (x = m = void 0, w);
          }
          function v() {
            void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
          }
          function y() {
            return void 0 === j ? w : p(o());
          }
          function b() {
            var t3 = o(), n3 = d(t3);
            if (x = arguments, m = this, O = t3, n3) {
              if (void 0 === j)
                return a(O);
              if (_)
                return j = setTimeout(h, e2), r2(O);
            }
            return void 0 === j && (j = setTimeout(h, e2)), w;
          }
          var x, m, g, w, j, O, E = 0, M = false, _ = false, T = true;
          if ("function" != typeof t2)
            throw new TypeError(f);
          return e2 = u(e2) || 0, i(n2) && (M = !!n2.leading, _ = "maxWait" in n2, g = _ ? s(u(n2.maxWait) || 0, e2) : g, T = "trailing" in n2 ? !!n2.trailing : T), b.cancel = v, b.flush = y, b;
        }
        var i = n(1), o = n(8), u = n(10), f = "Expected a function", s = Math.max, c = Math.min;
        t.exports = r;
      }, function(t, e, n) {
        var r = n(6), i = function() {
          return r.Date.now();
        };
        t.exports = i;
      }, function(t, e, n) {
        function r(t2, e2, n2) {
          var r2 = true, f = true;
          if ("function" != typeof t2)
            throw new TypeError(u);
          return o(n2) && (r2 = "leading" in n2 ? !!n2.leading : r2, f = "trailing" in n2 ? !!n2.trailing : f), i(t2, e2, { leading: r2, maxWait: e2, trailing: f });
        }
        var i = n(7), o = n(1), u = "Expected a function";
        t.exports = r;
      }, function(t, e) {
        function n(t2) {
          return t2;
        }
        t.exports = n;
      }]);
    });
  }
});

// esm-build-c6b6946ada364dceb4e89f163bf1e2c6196eb6a7-a592c0c0/mod.js
var __module = __toESM(require_in_view_min());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  mod_default as default
};
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
