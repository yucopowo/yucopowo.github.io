/* esm.sh - esbuild bundle(styled-components@5.3.6) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import __stream$ from '/cdn/v99/stream-browserify@3.0.0/es2022/stream-browserify.development.bundle.js';
var __require = /* @__PURE__ */ (x2 =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x2, {
        get: (a2, b2) => (typeof require !== 'undefined' ? require : a2)[b2]
      })
    : x2)(function(x2) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});

// esm-build-7148549b27f5bc5f8159aa6582b86b6c221d6659-98db8793/node_modules/styled-components/dist/styled-components.esm.js
import {
  typeOf as e,
  isElement as t,
  isValidElementType as n
} from '/cdn/v99/react-is@16.13.1/es2022/react-is.development.js';
import r, {
  useState as o,
  useContext as s,
  useMemo as i,
  useEffect as a,
  useRef as c,
  createElement as u,
  useDebugValue as l
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import d from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import h from '/cdn/v99/@emotion/stylis@0.8.5/es2022/stylis.development.js';
import p from '/cdn/v99/@emotion/unitless@0.7.5/es2022/unitless.development.js';
import f from '/cdn/v99/@emotion/is-prop-valid@1.2.0/es2022/is-prop-valid.development.js';
import m from '/cdn/v99/hoist-non-react-statics@3.3.2/es2022/hoist-non-react-statics.development.js';
function y() {
  return (y =
    Object.assign ||
    function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }).apply(this, arguments);
}
var v = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1) n2.push(t2[r2], e2[r2 + 1]);
  return n2;
};
var g = function(t2) {
  return (
    null !== t2 &&
    'object' == typeof t2 &&
    '[object Object]' === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) &&
    !e(t2)
  );
};
var S = Object.freeze([]);
var w = Object.freeze({});
function E(e2) {
  return 'function' == typeof e2;
}
function b(e2) {
  return ('string' == typeof e2 && e2) || e2.displayName || e2.name || 'Component';
}
function _(e2) {
  return e2 && 'string' == typeof e2.styledComponentId;
}
var N =
  ('undefined' != typeof __Process$ && (__Process$.env.REACT_APP_SC_ATTR || __Process$.env.SC_ATTR)) || 'data-styled';
var A = '5.3.6';
var C = 'undefined' != typeof window && 'HTMLElement' in window;
var I = Boolean(
  'boolean' == typeof SC_DISABLE_SPEEDY
    ? SC_DISABLE_SPEEDY
    : 'undefined' != typeof __Process$ &&
      void 0 !== __Process$.env.REACT_APP_SC_DISABLE_SPEEDY &&
      '' !== __Process$.env.REACT_APP_SC_DISABLE_SPEEDY
    ? 'false' !== __Process$.env.REACT_APP_SC_DISABLE_SPEEDY && __Process$.env.REACT_APP_SC_DISABLE_SPEEDY
    : 'undefined' != typeof __Process$ &&
      void 0 !== __Process$.env.SC_DISABLE_SPEEDY &&
      '' !== __Process$.env.SC_DISABLE_SPEEDY
    ? 'false' !== __Process$.env.SC_DISABLE_SPEEDY && __Process$.env.SC_DISABLE_SPEEDY
    : true
);
var P = {};
var O = true
  ? {
      1: 'Cannot create styled-component for component: %s.\n\n',
      2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
      3: 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n',
      4: 'The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n',
      5: 'The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n',
      6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
      7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
      8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
      9: 'Missing document `<head>`\n\n',
      10: 'Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n',
      11: '_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n',
      12: 'It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n',
      13: '%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n',
      14: 'ThemeProvider: "theme" prop is required.\n\n',
      15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
      16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
      17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
    }
  : {};
function R() {
  for (var e2 = arguments.length <= 0 ? void 0 : arguments[0], t2 = [], n2 = 1, r2 = arguments.length; n2 < r2; n2 += 1)
    t2.push(n2 < 0 || arguments.length <= n2 ? void 0 : arguments[n2]);
  return (
    t2.forEach(function(t3) {
      e2 = e2.replace(/%[a-z]/, t3);
    }),
    e2
  );
}
function D(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw false
    ? new Error(
        'An error occurred. See https://git.io/JUIaE#' +
          e2 +
          ' for more information.' +
          (n2.length > 0 ? ' Args: ' + n2.join(', ') : '')
      )
    : new Error(R.apply(void 0, [O[e2]].concat(n2)).trim());
}
var j = (function() {
  function e2(e3) {
    (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e3);
  }
  var t2 = e2.prototype;
  return (
    (t2.indexOfGroup = function(e3) {
      for (var t3 = 0, n2 = 0; n2 < e3; n2++) t3 += this.groupSizes[n2];
      return t3;
    }),
    (t2.insertRules = function(e3, t3) {
      if (e3 >= this.groupSizes.length) {
        for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; ) (o2 <<= 1) < 0 && D(16, '' + e3);
        (this.groupSizes = new Uint32Array(o2)), this.groupSizes.set(n2), (this.length = o2);
        for (var s2 = r2; s2 < o2; s2++) this.groupSizes[s2] = 0;
      }
      for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++)
        this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
    }),
    (t2.clearGroup = function(e3) {
      if (e3 < this.length) {
        var t3 = this.groupSizes[e3],
          n2 = this.indexOfGroup(e3),
          r2 = n2 + t3;
        this.groupSizes[e3] = 0;
        for (var o2 = n2; o2 < r2; o2++) this.tag.deleteRule(n2);
      }
    }),
    (t2.getGroup = function(e3) {
      var t3 = '';
      if (e3 >= this.length || 0 === this.groupSizes[e3]) return t3;
      for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
        t3 += this.tag.getRule(s2) + '/*!sc*/\n';
      return t3;
    }),
    e2
  );
})();
var T = /* @__PURE__ */ new Map();
var x = /* @__PURE__ */ new Map();
var k = 1;
var V = function(e2) {
  if (T.has(e2)) return T.get(e2);
  for (; x.has(k); ) k++;
  var t2 = k++;
  return ((0 | t2) < 0 || t2 > 1 << 30) && D(16, '' + t2), T.set(e2, t2), x.set(t2, e2), t2;
};
var z = function(e2) {
  return x.get(e2);
};
var B = function(e2, t2) {
  t2 >= k && (k = t2 + 1), T.set(e2, t2), x.set(t2, e2);
};
var M = 'style[' + N + '][data-styled-version="5.3.6"]';
var G = new RegExp('^' + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var L = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(','), s2 = 0, i2 = o2.length; s2 < i2; s2++) (r2 = o2[s2]) && e2.registerName(t2, r2);
};
var F = function(e2, t2) {
  for (var n2 = (t2.textContent || '').split('/*!sc*/\n'), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(G);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10),
          u2 = a2[2];
        0 !== c2 && (B(u2, c2), L(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), (r2.length = 0);
      } else r2.push(i2);
    }
  }
};
var Y = function() {
  return 'undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
};
var q = function(e2) {
  var t2 = document.head,
    n2 = e2 || t2,
    r2 = document.createElement('style'),
    o2 = (function(e3) {
      for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
        var r3 = t3[n3];
        if (r3 && 1 === r3.nodeType && r3.hasAttribute(N)) return r3;
      }
    })(n2),
    s2 = void 0 !== o2 ? o2.nextSibling : null;
  r2.setAttribute(N, 'active'), r2.setAttribute('data-styled-version', '5.3.6');
  var i2 = Y();
  return i2 && r2.setAttribute('nonce', i2), n2.insertBefore(r2, s2), r2;
};
var H = (function() {
  function e2(e3) {
    var t3 = (this.element = q(e3));
    t3.appendChild(document.createTextNode('')),
      (this.sheet = (function(e4) {
        if (e4.sheet) return e4.sheet;
        for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
          var o2 = t4[n2];
          if (o2.ownerNode === e4) return o2;
        }
        D(17);
      })(t3)),
      (this.length = 0);
  }
  var t2 = e2.prototype;
  return (
    (t2.insertRule = function(e3, t3) {
      try {
        return this.sheet.insertRule(t3, e3), this.length++, true;
      } catch (e4) {
        return false;
      }
    }),
    (t2.deleteRule = function(e3) {
      this.sheet.deleteRule(e3), this.length--;
    }),
    (t2.getRule = function(e3) {
      var t3 = this.sheet.cssRules[e3];
      return void 0 !== t3 && 'string' == typeof t3.cssText ? t3.cssText : '';
    }),
    e2
  );
})();
var $ = (function() {
  function e2(e3) {
    var t3 = (this.element = q(e3));
    (this.nodes = t3.childNodes), (this.length = 0);
  }
  var t2 = e2.prototype;
  return (
    (t2.insertRule = function(e3, t3) {
      if (e3 <= this.length && e3 >= 0) {
        var n2 = document.createTextNode(t3),
          r2 = this.nodes[e3];
        return this.element.insertBefore(n2, r2 || null), this.length++, true;
      }
      return false;
    }),
    (t2.deleteRule = function(e3) {
      this.element.removeChild(this.nodes[e3]), this.length--;
    }),
    (t2.getRule = function(e3) {
      return e3 < this.length ? this.nodes[e3].textContent : '';
    }),
    e2
  );
})();
var W = (function() {
  function e2(e3) {
    (this.rules = []), (this.length = 0);
  }
  var t2 = e2.prototype;
  return (
    (t2.insertRule = function(e3, t3) {
      return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
    }),
    (t2.deleteRule = function(e3) {
      this.rules.splice(e3, 1), this.length--;
    }),
    (t2.getRule = function(e3) {
      return e3 < this.length ? this.rules[e3] : '';
    }),
    e2
  );
})();
var U = C;
var J = {
  isServer: !C,
  useCSSOMInjection: !I
};
var X = (function() {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = w),
      void 0 === t3 && (t3 = {}),
      (this.options = y({}, J, {}, e3)),
      (this.gs = t3),
      (this.names = new Map(n2)),
      (this.server = !!e3.isServer),
      !this.server &&
        C &&
        U &&
        ((U = false),
        (function(e4) {
          for (var t4 = document.querySelectorAll(M), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
            var o2 = t4[n3];
            o2 && 'active' !== o2.getAttribute(N) && (F(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
          }
        })(this));
  }
  e2.registerId = function(e3) {
    return V(e3);
  };
  var t2 = e2.prototype;
  return (
    (t2.reconstructWithOptions = function(t3, n2) {
      return void 0 === n2 && (n2 = true), new e2(y({}, this.options, {}, t3), this.gs, (n2 && this.names) || void 0);
    }),
    (t2.allocateGSInstance = function(e3) {
      return (this.gs[e3] = (this.gs[e3] || 0) + 1);
    }),
    (t2.getTag = function() {
      return (
        this.tag ||
        (this.tag =
          ((n2 = (t3 = this.options).isServer),
          (r2 = t3.useCSSOMInjection),
          (o2 = t3.target),
          (e3 = n2 ? new W(o2) : r2 ? new H(o2) : new $(o2)),
          new j(e3)))
      );
      var e3, t3, n2, r2, o2;
    }),
    (t2.hasNameForId = function(e3, t3) {
      return this.names.has(e3) && this.names.get(e3).has(t3);
    }),
    (t2.registerName = function(e3, t3) {
      if ((V(e3), this.names.has(e3))) this.names.get(e3).add(t3);
      else {
        var n2 = /* @__PURE__ */ new Set();
        n2.add(t3), this.names.set(e3, n2);
      }
    }),
    (t2.insertRules = function(e3, t3, n2) {
      this.registerName(e3, t3), this.getTag().insertRules(V(e3), n2);
    }),
    (t2.clearNames = function(e3) {
      this.names.has(e3) && this.names.get(e3).clear();
    }),
    (t2.clearRules = function(e3) {
      this.getTag().clearGroup(V(e3)), this.clearNames(e3);
    }),
    (t2.clearTag = function() {
      this.tag = void 0;
    }),
    (t2.toString = function() {
      return (function(e3) {
        for (var t3 = e3.getTag(), n2 = t3.length, r2 = '', o2 = 0; o2 < n2; o2++) {
          var s2 = z(o2);
          if (void 0 !== s2) {
            var i2 = e3.names.get(s2),
              a2 = t3.getGroup(o2);
            if (i2 && a2 && i2.size) {
              var c2 = N + '.g' + o2 + '[id="' + s2 + '"]',
                u2 = '';
              void 0 !== i2 &&
                i2.forEach(function(e4) {
                  e4.length > 0 && (u2 += e4 + ',');
                }),
                (r2 += '' + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n');
            }
          }
        }
        return r2;
      })(this);
    }),
    e2
  );
})();
var Z = /(a)(d)/gi;
var K = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function Q(e2) {
  var t2,
    n2 = '';
  for (t2 = Math.abs(e2); t2 > 52; t2 = (t2 / 52) | 0) n2 = K(t2 % 52) + n2;
  return (K(t2 % 52) + n2).replace(Z, '$1-$2');
}
var ee = function(e2, t2) {
  for (var n2 = t2.length; n2; ) e2 = (33 * e2) ^ t2.charCodeAt(--n2);
  return e2;
};
var te = function(e2) {
  return ee(5381, e2);
};
function ne(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (E(n2) && !_(n2)) return false;
  }
  return true;
}
var re = te('5.3.6');
var oe = (function() {
  function e2(e3, t2, n2) {
    (this.rules = e3),
      (this.staticRulesId = ''),
      (this.isStatic = false),
      (this.componentId = t2),
      (this.baseHash = ee(re, t2)),
      (this.baseStyle = n2),
      X.registerId(t2);
  }
  return (
    (e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
      var r2 = this.componentId,
        o2 = [];
      if ((this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)) {
        if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId)) o2.push(this.staticRulesId);
        else {
          var s2 = _e(this.rules, e3, t2, n2).join(''),
            i2 = Q(ee(this.baseHash, s2) >>> 0);
          if (!t2.hasNameForId(r2, i2)) {
            var a2 = n2(s2, '.' + i2, void 0, r2);
            t2.insertRules(r2, i2, a2);
          }
          o2.push(i2), (this.staticRulesId = i2);
        }
      } else {
        for (var c2 = this.rules.length, u2 = ee(this.baseHash, n2.hash), l2 = '', d2 = 0; d2 < c2; d2++) {
          var h2 = this.rules[d2];
          if ('string' == typeof h2) (l2 += h2), (u2 = ee(u2, h2 + d2));
          else if (h2) {
            var p2 = _e(h2, e3, t2, n2),
              f2 = Array.isArray(p2) ? p2.join('') : p2;
            (u2 = ee(u2, f2 + d2)), (l2 += f2);
          }
        }
        if (l2) {
          var m2 = Q(u2 >>> 0);
          if (!t2.hasNameForId(r2, m2)) {
            var y2 = n2(l2, '.' + m2, void 0, r2);
            t2.insertRules(r2, m2, y2);
          }
          o2.push(m2);
        }
      }
      return o2.join(' ');
    }),
    e2
  );
})();
var se = /^\s*\/\/.*$/gm;
var ie = [':', '[', '.', '#'];
function ae(e2) {
  var t2,
    n2,
    r2,
    o2,
    s2 = void 0 === e2 ? w : e2,
    i2 = s2.options,
    a2 = void 0 === i2 ? w : i2,
    c2 = s2.plugins,
    u2 = void 0 === c2 ? S : c2,
    l2 = new h(a2),
    d2 = [],
    p2 = (function(e3) {
      function t3(t4) {
        if (t4)
          try {
            e3(t4 + '}');
          } catch (e4) {}
      }
      return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
        switch (n3) {
          case 1:
            if (0 === l3 && 64 === r3.charCodeAt(0)) return e3(r3 + ';'), '';
            break;
          case 2:
            if (0 === u3) return r3 + '/*|*/';
            break;
          case 3:
            switch (u3) {
              case 102:
              case 112:
                return e3(o3[0] + r3), '';
              default:
                return r3 + (0 === d3 ? '/*|*/' : '');
            }
          case -2:
            r3.split('/*|*/}').forEach(t3);
        }
      };
    })(function(e3) {
      d2.push(e3);
    }),
    f2 = function(e3, r3, s3) {
      return (0 === r3 && -1 !== ie.indexOf(s3[n2.length])) || s3.match(o2) ? e3 : '.' + t2;
    };
  function m2(e3, s3, i3, a3) {
    void 0 === a3 && (a3 = '&');
    var c3 = e3.replace(se, ''),
      u3 = s3 && i3 ? i3 + ' ' + s3 + ' { ' + c3 + ' }' : c3;
    return (
      (t2 = a3),
      (n2 = s3),
      (r2 = new RegExp('\\' + n2 + '\\b', 'g')),
      (o2 = new RegExp('(\\' + n2 + '\\b){2,}')),
      l2(i3 || !s3 ? '' : s3, u3)
    );
  }
  return (
    l2.use(
      [].concat(u2, [
        function(e3, t3, o3) {
          2 === e3 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f2));
        },
        p2,
        function(e3) {
          if (-2 === e3) {
            var t3 = d2;
            return (d2 = []), t3;
          }
        }
      ])
    ),
    (m2.hash = u2.length
      ? u2
          .reduce(function(e3, t3) {
            return t3.name || D(15), ee(e3, t3.name);
          }, 5381)
          .toString()
      : ''),
    m2
  );
}
var ce = r.createContext();
var ue = ce.Consumer;
var le = r.createContext();
var de = (le.Consumer, new X());
var he = ae();
function pe() {
  return s(ce) || de;
}
function fe() {
  return s(le) || he;
}
function me(e2) {
  var t2 = o(e2.stylisPlugins),
    n2 = t2[0],
    s2 = t2[1],
    c2 = pe(),
    u2 = i(
      function() {
        var t3 = c2;
        return (
          e2.sheet
            ? (t3 = e2.sheet)
            : e2.target &&
              (t3 = t3.reconstructWithOptions(
                {
                  target: e2.target
                },
                false
              )),
          e2.disableCSSOMInjection &&
            (t3 = t3.reconstructWithOptions({
              useCSSOMInjection: false
            })),
          t3
        );
      },
      [e2.disableCSSOMInjection, e2.sheet, e2.target]
    ),
    l2 = i(
      function() {
        return ae({
          options: {
            prefix: !e2.disableVendorPrefixes
          },
          plugins: n2
        });
      },
      [e2.disableVendorPrefixes, n2]
    );
  return (
    a(
      function() {
        d(n2, e2.stylisPlugins) || s2(e2.stylisPlugins);
      },
      [e2.stylisPlugins]
    ),
    r.createElement(
      ce.Provider,
      {
        value: u2
      },
      r.createElement(
        le.Provider,
        {
          value: l2
        },
        true ? r.Children.only(e2.children) : e2.children
      )
    )
  );
}
var ye = (function() {
  function e2(e3, t2) {
    var n2 = this;
    (this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = he);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, '@keyframes'));
    }),
      (this.toString = function() {
        return D(12, String(n2.name));
      }),
      (this.name = e3),
      (this.id = 'sc-keyframes-' + e3),
      (this.rules = t2);
  }
  return (
    (e2.prototype.getName = function(e3) {
      return void 0 === e3 && (e3 = he), this.name + e3.hash;
    }),
    e2
  );
})();
var ve = /([A-Z])/;
var ge = /([A-Z])/g;
var Se = /^ms-/;
var we = function(e2) {
  return '-' + e2.toLowerCase();
};
function Ee(e2) {
  return ve.test(e2) ? e2.replace(ge, we).replace(Se, '-ms-') : e2;
}
var be = function(e2) {
  return null == e2 || false === e2 || '' === e2;
};
function _e(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      '' !== (s2 = _e(e2[a2], n2, r2, o2)) && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (be(e2)) return '';
  if (_(e2)) return '.' + e2.styledComponentId;
  if (E(e2)) {
    if ('function' != typeof (l2 = e2) || (l2.prototype && l2.prototype.isReactComponent) || !n2) return e2;
    var u2 = e2(n2);
    return (
      t(u2) &&
        console.warn(
          b(e2) +
            ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
        ),
      _e(u2, n2, r2, o2)
    );
  }
  var l2;
  return e2 instanceof ye
    ? r2
      ? (e2.inject(r2, o2), e2.getName(o2))
      : e2
    : g(e2)
    ? (function e3(t2, n3) {
        var r3,
          o3,
          s3 = [];
        for (var i3 in t2)
          t2.hasOwnProperty(i3) &&
            !be(t2[i3]) &&
            ((Array.isArray(t2[i3]) && t2[i3].isCss) || E(t2[i3])
              ? s3.push(Ee(i3) + ':', t2[i3], ';')
              : g(t2[i3])
              ? s3.push.apply(s3, e3(t2[i3], i3))
              : s3.push(
                  Ee(i3) +
                    ': ' +
                    ((r3 = i3),
                    null == (o3 = t2[i3]) || 'boolean' == typeof o3 || '' === o3
                      ? ''
                      : 'number' != typeof o3 || 0 === o3 || r3 in p
                      ? String(o3).trim()
                      : o3 + 'px') +
                    ';'
                ));
        return n3 ? [n3 + ' {'].concat(s3, ['}']) : s3;
      })(e2)
    : e2.toString();
}
var Ne = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ae(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return E(e2) || g(e2)
    ? Ne(_e(v(S, [e2].concat(n2))))
    : 0 === n2.length && 1 === e2.length && 'string' == typeof e2[0]
    ? e2
    : Ne(_e(v(e2, n2)));
}
var Ce = /invalid hook call/i;
var Ie = /* @__PURE__ */ new Set();
var Pe = function(e2, t2) {
  if (true) {
    var n2 =
        'The component ' +
        e2 +
        (t2 ? ' with the id of "' + t2 + '"' : '') +
        " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
      r2 = console.error;
    try {
      var o2 = true;
      (console.error = function(e3) {
        if (Ce.test(e3)) (o2 = false), Ie.delete(n2);
        else {
          for (var t3 = arguments.length, s2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
            s2[i2 - 1] = arguments[i2];
          r2.apply(void 0, [e3].concat(s2));
        }
      }),
        c(),
        o2 && !Ie.has(n2) && (console.warn(n2), Ie.add(n2));
    } catch (e3) {
      Ce.test(e3.message) && Ie.delete(n2);
    } finally {
      console.error = r2;
    }
  }
};
var Oe = function(e2, t2, n2) {
  return void 0 === n2 && (n2 = w), (e2.theme !== n2.theme && e2.theme) || t2 || n2.theme;
};
var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De = /(^-|-$)/g;
function je(e2) {
  return e2.replace(Re, '-').replace(De, '');
}
var Te = function(e2) {
  return Q(te(e2) >>> 0);
};
function xe(e2) {
  return 'string' == typeof e2 && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
var ke = function(e2) {
  return 'function' == typeof e2 || ('object' == typeof e2 && null !== e2 && !Array.isArray(e2));
};
var Ve = function(e2) {
  return '__proto__' !== e2 && 'constructor' !== e2 && 'prototype' !== e2;
};
function ze(e2, t2, n2) {
  var r2 = e2[n2];
  ke(t2) && ke(r2) ? Be(r2, t2) : (e2[n2] = t2);
}
function Be(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (ke(i2)) for (var a2 in i2) Ve(a2) && ze(e2, i2[a2], a2);
  }
  return e2;
}
var Me = r.createContext();
var Ge = Me.Consumer;
function Le(e2) {
  var t2 = s(Me),
    n2 = i(
      function() {
        return (function(e3, t3) {
          if (!e3) return D(14);
          if (E(e3)) {
            var n3 = e3(t3);
            return null !== n3 && !Array.isArray(n3) && 'object' == typeof n3 ? n3 : D(7);
          }
          return Array.isArray(e3) || 'object' != typeof e3 ? D(8) : t3 ? y({}, t3, {}, e3) : e3;
        })(e2.theme, t2);
      },
      [e2.theme, t2]
    );
  return e2.children
    ? r.createElement(
        Me.Provider,
        {
          value: n2
        },
        e2.children
      )
    : null;
}
var Fe = {};
function Ye(e2, t2, n2) {
  var o2 = _(e2),
    i2 = !xe(e2),
    a2 = t2.attrs,
    c2 = void 0 === a2 ? S : a2,
    d2 = t2.componentId,
    h2 =
      void 0 === d2
        ? (function(e3, t3) {
            var n3 = 'string' != typeof e3 ? 'sc' : je(e3);
            Fe[n3] = (Fe[n3] || 0) + 1;
            var r2 = n3 + '-' + Te('5.3.6' + n3 + Fe[n3]);
            return t3 ? t3 + '-' + r2 : r2;
          })(t2.displayName, t2.parentComponentId)
        : d2,
    p2 = t2.displayName,
    v2 =
      void 0 === p2
        ? (function(e3) {
            return xe(e3) ? 'styled.' + e3 : 'Styled(' + b(e3) + ')';
          })(e2)
        : p2,
    g2 = t2.displayName && t2.componentId ? je(t2.displayName) + '-' + t2.componentId : t2.componentId || h2,
    N2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2,
    A2 = t2.shouldForwardProp;
  o2 &&
    e2.shouldForwardProp &&
    (A2 = t2.shouldForwardProp
      ? function(n3, r2, o3) {
          return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
        }
      : e2.shouldForwardProp);
  var C2,
    I2 = new oe(n2, g2, o2 ? e2.componentStyle : void 0),
    P2 = I2.isStatic && 0 === c2.length,
    O2 = function(e3, t3) {
      return (function(e4, t4, n3, r2) {
        var o3 = e4.attrs,
          i3 = e4.componentStyle,
          a3 = e4.defaultProps,
          c3 = e4.foldedComponentIds,
          d3 = e4.shouldForwardProp,
          h3 = e4.styledComponentId,
          p3 = e4.target;
        l(h3);
        var m2 = (function(e5, t5, n4) {
            void 0 === e5 && (e5 = w);
            var r3 = y({}, t5, {
                theme: e5
              }),
              o4 = {};
            return (
              n4.forEach(function(e6) {
                var t6,
                  n5,
                  s2,
                  i4 = e6;
                for (t6 in (E(i4) && (i4 = i4(r3)), i4))
                  r3[t6] = o4[t6] =
                    'className' === t6 ? ((n5 = o4[t6]), (s2 = i4[t6]), n5 && s2 ? n5 + ' ' + s2 : n5 || s2) : i4[t6];
              }),
              [r3, o4]
            );
          })(Oe(t4, s(Me), a3) || w, t4, o3),
          v3 = m2[0],
          g3 = m2[1],
          S2 = (function(e5, t5, n4, r3) {
            var o4 = pe(),
              s2 = fe(),
              i4 = t5 ? e5.generateAndInjectStyles(w, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
            return l(i4), !t5 && r3 && r3(i4), i4;
          })(i3, r2, v3, true ? e4.warnTooManyClasses : void 0),
          b2 = n3,
          _2 = g3.$as || t4.$as || g3.as || t4.as || p3,
          N3 = xe(_2),
          A3 = g3 !== t4 ? y({}, t4, {}, g3) : t4,
          C3 = {};
        for (var I3 in A3)
          '$' !== I3[0] &&
            'as' !== I3 &&
            ('forwardedAs' === I3 ? (C3.as = A3[I3]) : (d3 ? d3(I3, f, _2) : !N3 || f(I3)) && (C3[I3] = A3[I3]));
        return (
          t4.style && g3.style !== t4.style && (C3.style = y({}, t4.style, {}, g3.style)),
          (C3.className = Array.prototype
            .concat(c3, h3, S2 !== h3 ? S2 : null, t4.className, g3.className)
            .filter(Boolean)
            .join(' ')),
          (C3.ref = b2),
          u(_2, C3)
        );
      })(C2, e3, t3, P2);
    };
  return (
    (O2.displayName = v2),
    ((C2 = r.forwardRef(O2)).attrs = N2),
    (C2.componentStyle = I2),
    (C2.displayName = v2),
    (C2.shouldForwardProp = A2),
    (C2.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S),
    (C2.styledComponentId = g2),
    (C2.target = o2 ? e2.target : e2),
    (C2.withComponent = function(e3) {
      var r2 = t2.componentId,
        o3 = (function(e4, t3) {
          if (null == e4) return {};
          var n3,
            r3,
            o4 = {},
            s3 = Object.keys(e4);
          for (r3 = 0; r3 < s3.length; r3++) (n3 = s3[r3]), t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
          return o4;
        })(t2, ['componentId']),
        s2 = r2 && r2 + '-' + (xe(e3) ? e3 : je(b(e3)));
      return Ye(
        e3,
        y({}, o3, {
          attrs: N2,
          componentId: s2
        }),
        n2
      );
    }),
    Object.defineProperty(C2, 'defaultProps', {
      get: function() {
        return this._foldedDefaultProps;
      },
      set: function(t3) {
        this._foldedDefaultProps = o2 ? Be({}, e2.defaultProps, t3) : t3;
      }
    }),
    Pe(v2, g2),
    (C2.warnTooManyClasses = (function(e3, t3) {
      var n3 = {},
        r2 = false;
      return function(o3) {
        if (!r2 && ((n3[o3] = true), Object.keys(n3).length >= 200)) {
          var s2 = t3 ? ' with the id of "' + t3 + '"' : '';
          console.warn(
            'Over 200 classes were generated for component ' +
              e3 +
              s2 +
              '.\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />'
          ),
            (r2 = true),
            (n3 = {});
        }
      };
    })(v2, g2)),
    (C2.toString = function() {
      return '.' + C2.styledComponentId;
    }),
    i2 &&
      m(C2, e2, {
        attrs: true,
        componentStyle: true,
        displayName: true,
        foldedComponentIds: true,
        shouldForwardProp: true,
        styledComponentId: true,
        target: true,
        withComponent: true
      }),
    C2
  );
}
var qe = function(e2) {
  return (function e3(t2, r2, o2) {
    if ((void 0 === o2 && (o2 = w), !n(r2))) return D(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ae.apply(void 0, arguments));
    };
    return (
      (s2.withConfig = function(n2) {
        return e3(t2, r2, y({}, o2, {}, n2));
      }),
      (s2.attrs = function(n2) {
        return e3(
          t2,
          r2,
          y({}, o2, {
            attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean)
          })
        );
      }),
      s2
    );
  })(Ye, e2);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan'
].forEach(function(e2) {
  qe[e2] = qe(e2);
});
var He = (function() {
  function e2(e3, t3) {
    (this.rules = e3), (this.componentId = t3), (this.isStatic = ne(e3)), X.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return (
    (t2.createStyles = function(e3, t3, n2, r2) {
      var o2 = r2(_e(this.rules, t3, n2, r2).join(''), ''),
        s2 = this.componentId + e3;
      n2.insertRules(s2, s2, o2);
    }),
    (t2.removeStyles = function(e3, t3) {
      t3.clearRules(this.componentId + e3);
    }),
    (t2.renderStyles = function(e3, t3, n2, r2) {
      e3 > 2 && X.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
    }),
    e2
  );
})();
function $e(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o2 = 1; o2 < t2; o2++)
    n2[o2 - 1] = arguments[o2];
  var i2 = Ae.apply(void 0, [e2].concat(n2)),
    a2 = 'sc-global-' + Te(JSON.stringify(i2)),
    u2 = new He(i2, a2);
  function l2(e3) {
    var t3 = pe(),
      n3 = fe(),
      o3 = s(Me),
      u3 = c(t3.allocateGSInstance(a2)).current;
    return (
      r.Children.count(e3.children) &&
        console.warn(
          'The global style component ' + a2 + ' was given child JSX. createGlobalStyle does not render children.'
        ),
      i2.some(function(e4) {
        return 'string' == typeof e4 && -1 !== e4.indexOf('@import');
      }) &&
        console.warn(
          'Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.'
        ),
      t3.server && d2(u3, e3, t3, o3, n3),
      null
    );
  }
  function d2(e3, t3, n3, r2, o3) {
    if (u2.isStatic) u2.renderStyles(e3, P, n3, o3);
    else {
      var s2 = y({}, t3, {
        theme: Oe(t3, r2, l2.defaultProps)
      });
      u2.renderStyles(e3, s2, n3, o3);
    }
  }
  return Pe(a2), r.memo(l2);
}
function We(e2) {
  'undefined' != typeof navigator &&
    'ReactNative' === navigator.product &&
    console.warn(
      '`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.'
    );
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o2 = Ae.apply(void 0, [e2].concat(n2)).join(''),
    s2 = Te(o2);
  return new ye(s2, o2);
}
var Ue = /^\s*<\/[a-z]/i;
var Je = (function() {
  function e2() {
    var e3 = this;
    (this._emitSheetCSS = function() {
      var t3 = e3.instance.toString();
      if (!t3) return '';
      var n2 = Y();
      return (
        '<style ' +
        [n2 && 'nonce="' + n2 + '"', N + '="true"', 'data-styled-version="5.3.6"'].filter(Boolean).join(' ') +
        '>' +
        t3 +
        '</style>'
      );
    }),
      (this.getStyleTags = function() {
        return e3.sealed ? D(2) : e3._emitSheetCSS();
      }),
      (this.getStyleElement = function() {
        var t3;
        if (e3.sealed) return D(2);
        var n2 =
            (((t3 = {})[N] = ''),
            (t3['data-styled-version'] = '5.3.6'),
            (t3.dangerouslySetInnerHTML = {
              __html: e3.instance.toString()
            }),
            t3),
          o2 = Y();
        return (
          o2 && (n2.nonce = o2),
          [
            r.createElement(
              'style',
              y({}, n2, {
                key: 'sc-0-0'
              })
            )
          ]
        );
      }),
      (this.seal = function() {
        e3.sealed = true;
      }),
      (this.instance = new X({
        isServer: true
      })),
      (this.sealed = false);
  }
  var t2 = e2.prototype;
  return (
    (t2.collectStyles = function(e3) {
      return this.sealed
        ? D(2)
        : r.createElement(
            me,
            {
              sheet: this.instance
            },
            e3
          );
    }),
    (t2.interleaveWithNodeStream = function(e3) {
      if (C) return D(3);
      if (this.sealed) return D(2);
      this.seal();
      var t3 = __stream$,
        n2 = (t3.Readable, t3.Transform),
        r2 = e3,
        o2 = this.instance,
        s2 = this._emitSheetCSS,
        i2 = new n2({
          transform: function(e4, t4, n3) {
            var r3 = e4.toString(),
              i3 = s2();
            if ((o2.clearTag(), Ue.test(r3))) {
              var a2 = r3.indexOf('>') + 1,
                c2 = r3.slice(0, a2),
                u2 = r3.slice(a2);
              this.push(c2 + i3 + u2);
            } else this.push(i3 + r3);
            n3();
          }
        });
      return (
        r2.on('error', function(e4) {
          i2.emit('error', e4);
        }),
        r2.pipe(i2)
      );
    }),
    e2
  );
})();
var Xe = function(e2) {
  var t2 = r.forwardRef(function(t3, n2) {
    var o2 = s(Me),
      i2 = e2.defaultProps,
      a2 = Oe(t3, o2, i2);
    return (
      void 0 === a2 &&
        console.warn(
          '[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' +
            b(e2) +
            '"'
        ),
      r.createElement(
        e2,
        y({}, t3, {
          theme: a2,
          ref: n2
        })
      )
    );
  });
  return m(t2, e2), (t2.displayName = 'WithTheme(' + b(e2) + ')'), t2;
};
var Ze = function() {
  return s(Me);
};
var Ke = {
  StyleSheet: X,
  masterSheet: de
};
'undefined' != typeof navigator &&
  'ReactNative' === navigator.product &&
  console.warn(
    "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
  ),
  'undefined' != typeof window &&
    ((window['__styled-components-init__'] = window['__styled-components-init__'] || 0),
    1 === window['__styled-components-init__'] &&
      console.warn(
        "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
      ),
    (window['__styled-components-init__'] += 1));
var styled_components_esm_default = qe;
export {
  Je as ServerStyleSheet,
  ue as StyleSheetConsumer,
  ce as StyleSheetContext,
  me as StyleSheetManager,
  Ge as ThemeConsumer,
  Me as ThemeContext,
  Le as ThemeProvider,
  Ke as __PRIVATE__,
  $e as createGlobalStyle,
  Ae as css,
  styled_components_esm_default as default,
  _ as isStyledComponent,
  We as keyframes,
  Ze as useTheme,
  A as version,
  Xe as withTheme
};
