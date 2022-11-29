/* esm.sh - esbuild bundle(@babel/helper-hoist-variables@7.18.6) es2022 development */
import ___babel_types$ from '/cdn/v99/@babel/types@7.20.2/es2022/types.development.js';
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

// esm-build-f2cd1760328503cf9b99d988dd951af28727ae45-39651b53/node_modules/@babel/helper-hoist-variables/lib/index.js
var require_lib = __commonJS({
  'esm-build-f2cd1760328503cf9b99d988dd951af28727ae45-39651b53/node_modules/@babel/helper-hoist-variables/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = hoistVariables;
    var _t = ___babel_types$;
    var { assignmentExpression, expressionStatement, identifier } = _t;
    var visitor = {
      Scope(path, state) {
        if (state.kind === 'let') path.skip();
      },
      FunctionParent(path) {
        path.skip();
      },
      VariableDeclaration(path, state) {
        if (state.kind && path.node.kind !== state.kind) return;
        const nodes = [];
        const declarations = path.get('declarations');
        let firstId;
        for (const declar of declarations) {
          firstId = declar.node.id;
          if (declar.node.init) {
            nodes.push(expressionStatement(assignmentExpression('=', declar.node.id, declar.node.init)));
          }
          for (const name of Object.keys(declar.getBindingIdentifiers())) {
            state.emit(identifier(name), name, declar.node.init !== null);
          }
        }
        if (
          path.parentPath.isFor({
            left: path.node
          })
        ) {
          path.replaceWith(firstId);
        } else {
          path.replaceWithMultiple(nodes);
        }
      }
    };
    function hoistVariables(path, emit, kind = 'var') {
      path.traverse(visitor, {
        kind,
        emit
      });
    }
  }
});

// esm-build-f2cd1760328503cf9b99d988dd951af28727ae45-39651b53/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
