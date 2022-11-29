/* esm.sh - esbuild bundle(acorn-dynamic-import@4.0.0) es2022 development */
import * as __acorn$ from '/cdn/v99/acorn@6.4.2/es2022/acorn.development.js';
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

// esm-build-687c1034fb2570d76d466eff2c263d132b43f486-d42b2a48/node_modules/acorn-dynamic-import/lib/index.js
var require_lib = __commonJS({
  'esm-build-687c1034fb2570d76d466eff2c263d132b43f486-d42b2a48/node_modules/acorn-dynamic-import/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.DynamicImportKey = void 0;
    var _createClass = (function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();
    var _get = (function() {
      function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            return get(parent, property, receiver);
          }
        } else if ('value' in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      }
      return get;
    })();
    exports['default'] = dynamicImport;
    var _acorn = __acorn$;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
    }
    var DynamicImportKey2 = (exports.DynamicImportKey = 'Import');
    _acorn.tokTypes._import.startsExpr = true;
    function parseDynamicImport() {
      var node = this.startNode();
      this.next();
      if (this.type !== _acorn.tokTypes.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, DynamicImportKey2);
    }
    function parenAfter() {
      return /^(\s|\/\/.*|\/\*[^]*?\*\/)*\(/.test(this.input.slice(this.pos));
    }
    function dynamicImport(Parser) {
      return (function(_Parser) {
        _inherits(_class, _Parser);
        function _class() {
          _classCallCheck(this, _class);
          return _possibleConstructorReturn(
            this,
            (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments)
          );
        }
        _createClass(_class, [
          {
            key: 'parseStatement',
            value: (function() {
              function parseStatement(context, topLevel, exports2) {
                if (this.type === _acorn.tokTypes._import && parenAfter.call(this)) {
                  return this.parseExpressionStatement(this.startNode(), this.parseExpression());
                }
                return _get(
                  _class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype),
                  'parseStatement',
                  this
                ).call(this, context, topLevel, exports2);
              }
              return parseStatement;
            })()
          },
          {
            key: 'parseExprAtom',
            value: (function() {
              function parseExprAtom(refDestructuringErrors) {
                if (this.type === _acorn.tokTypes._import) {
                  return parseDynamicImport.call(this);
                }
                return _get(
                  _class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype),
                  'parseExprAtom',
                  this
                ).call(this, refDestructuringErrors);
              }
              return parseExprAtom;
            })()
          }
        ]);
        return _class;
      })(Parser);
    }
  }
});

// esm-build-687c1034fb2570d76d466eff2c263d132b43f486-d42b2a48/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { DynamicImportKey } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { DynamicImportKey, __esModule, mod_default as default };
