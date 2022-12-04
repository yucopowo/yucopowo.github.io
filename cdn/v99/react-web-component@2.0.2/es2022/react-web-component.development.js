/* esm.sh - esbuild bundle(react-web-component@2.0.2) es2022 development */
import __react$ from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { styleElements as __react_web_component_style_loader_exports$styleElements } from '/cdn/v99/react-web-component-style-loader@0.1.4-alpha/es2022/exports.development.js';
import ___webcomponents_custom_elements$ from '/cdn/v99/@webcomponents/custom-elements@1.5.1/es2022/custom-elements.development.js';
import ___webcomponents_shadydom$ from '/cdn/v99/@webcomponents/shadydom@1.10.0/es2022/shadydom.development.js';
import __react_shadow_dom_retarget_events$ from '/cdn/v99/react-shadow-dom-retarget-events@1.1.0/es2022/react-shadow-dom-retarget-events.development.js';
import * as __react_dom$ from '/cdn/v99/react-dom@18.2.0/es2022/client.development.js';
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

// esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/node_modules/react-web-component/src/getStyleElementsFromReactWebComponentStyleLoader.js
var require_getStyleElementsFromReactWebComponentStyleLoader = __commonJS({
  'esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/node_modules/react-web-component/src/getStyleElementsFromReactWebComponentStyleLoader.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = function() {
      try {
        return __react_web_component_style_loader_exports$styleElements;
      } catch (a) {
        return [];
      }
    };
  }
});

// esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/node_modules/react-web-component/src/extractAttributes.js
var require_extractAttributes = __commonJS({
  'esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/node_modules/react-web-component/src/extractAttributes.js'(
    exports,
    module
  ) {
    'use strict';

    function _defineProperty(a, b, c) {
      return (
        b in a
          ? Object.defineProperty(a, b, {
              value: c,
              enumerable: true,
              configurable: true,
              writable: true
            })
          : (a[b] = c),
        a
      );
    }
    function _toConsumableArray(a) {
      if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
      }
      return Array.from(a);
    }
    module.exports = function(a) {
      if (!a.attributes) return {};
      var b = {},
        c = void 0,
        d = [].concat(_toConsumableArray(a.attributes)),
        e = d.map(function(a2) {
          return _defineProperty({}, a2.name, a2.value);
        }),
        f = true,
        g = false,
        h = void 0;
      try {
        for (var i, j = e[Symbol.iterator](); !(f = (i = j.next()).done); f = true) {
          c = i.value;
          var k = Object.keys(c)[0],
            l = k.replace(/-([a-z])/g, function(a2) {
              return a2[1].toUpperCase();
            });
          b[l] = c[k];
        }
        b['children'] = a.innerText;
      } catch (a2) {
        (g = true), (h = a2);
      } finally {
        try {
          !f && j.return && j.return();
        } finally {
          if (g) throw h;
        }
      }
      return b;
    };
  }
});

// esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/node_modules/react-web-component/src/index.js
var require_src = __commonJS({
  'esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/node_modules/react-web-component/src/index.js'(
    exports,
    module
  ) {
    'use strict';

    var _createClass = (function() {
      function a(a2, b) {
        for (var c, d = 0; d < b.length; d++)
          (c = b[d]),
            (c.enumerable = c.enumerable || false),
            (c.configurable = true),
            'value' in c && (c.writable = true),
            Object.defineProperty(a2, c.key, c);
      }
      return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })();
    function _classCallCheck(a, b) {
      if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
    }
    function _possibleConstructorReturn(a, b) {
      if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return b && ('object' == typeof b || 'function' == typeof b) ? b : a;
    }
    function _inherits(a, b) {
      if ('function' != typeof b && null !== b)
        throw new TypeError('Super expression must either be null or a function, not ' + typeof b);
      (a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })),
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
    }
    function _CustomElement() {
      return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
    }
    Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype),
      Object.setPrototypeOf(_CustomElement, HTMLElement);
    var React = __react$;
    var ReactDOM = __react_dom$;
    var retargetEvents = __react_shadow_dom_retarget_events$;
    var getStyleElementsFromReactWebComponentStyleLoader = require_getStyleElementsFromReactWebComponentStyleLoader();
    var extractAttributes = require_extractAttributes();
    ___webcomponents_shadydom$,
      ___webcomponents_custom_elements$,
      (module.exports = {
        //==================================
        createShadow: function create(a, b, o){
          return this.create(a, b, o, true);
        },
        //==================================
        create: function create(a, b, o = {} ,e = false) {
          function c(a2) {
            f && f.webComponentConstructed && f.webComponentConstructed.apply(f, [a2]);
          }
          function d(a2, b2) {
            var c2 = g[a2];
            c2 && f && f[c2] && f[c2].apply(f, b2 || []);
          }
          // var e = !(2 < arguments.length && arguments[2] !== void 0) || arguments[2],
          // var e = !(2 < arguments.length && arguments[2] !== void 0) || arguments[2],
          var f = void 0,
            g = {
              attachedCallback: 'webComponentAttached',
              connectedCallback: 'webComponentConnected',
              disconnectedCallback: 'webComponentDisconnected',
              attributeChangedCallback: 'webComponentAttributeChanged',
              adoptedCallback: 'webComponentAdopted'
            },
            h = (function(b2) {
              function g2() {
                return (
                  _classCallCheck(this, g2),
                  _possibleConstructorReturn(this, (g2.__proto__ || Object.getPrototypeOf(g2)).apply(this, arguments))
                );
              }
              return (
                _inherits(g2, b2),
                _createClass(g2, [
                  {
                    key: 'connectedCallback',
                    value: function connectedCallback() {
                      var b3 = this,
                        g3 = b3;
                      if (e) {
                        var h2 = b3.attachShadow({
                          mode: 'open'
                        });
                        g3 = document.createElement('div');
                        var i = getStyleElementsFromReactWebComponentStyleLoader();
                        i.forEach(function(a2) {
                          h2.appendChild(a2.cloneNode(h2));
                        }),
                          h2.appendChild(g3),
                          retargetEvents(h2);
                      }
                      // ReactDOM.render(React.cloneElement(a, extractAttributes(b3)), g3, function() {
                      //   (f = this), c(b3), d('connectedCallback');
                      // });
                      //==================================
                      // console.log(a, b, e);
                      // if(o && o.rootClassName) {
                      //   g3.className = o.rootClassName;
                      // }
                      const root = ReactDOM.createRoot(g3);
                      const element = React.cloneElement(a, extractAttributes(b3));
                      const App = () => {
                        React.useEffect(() => {
                          (f = this), c(b3), d('connectedCallback');
                        },[]);
                        return element;
                      };
                      root.render(React.createElement(App));
                      // console.log(e);
                      //===================================
                    }
                  },
                  {
                    key: 'disconnectedCallback',
                    value: function disconnectedCallback() {
                      d('disconnectedCallback');
                    }
                  },
                  {
                    key: 'attributeChangedCallback',
                    value: function attributeChangedCallback(a2, b3, c2, e2) {
                      d('attributeChangedCallback', [a2, b3, c2, e2]);
                    }
                  },
                  {
                    key: 'adoptedCallback',
                    value: function adoptedCallback(a2, b3) {
                      d('adoptedCallback', [a2, b3]);
                    }
                  }
                ]),
                g2
              );
            })(_CustomElement);
          customElements.define(b, h);
        }
      });
  }
});

// esm-build-533170b50a0fe22fbb3a3260420d8a21b1704224-388970ca/mod.js
var __module = __toESM(require_src());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
