/* esm.sh - esbuild bundle(@babel/helper-split-export-declaration@7.18.6) es2022 development */
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

// esm-build-be5d02559a9a8a70cde312d05d259d0fc701dc71-2f3de8fa/node_modules/@babel/helper-split-export-declaration/lib/index.js
var require_lib = __commonJS({
  'esm-build-be5d02559a9a8a70cde312d05d259d0fc701dc71-2f3de8fa/node_modules/@babel/helper-split-export-declaration/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = splitExportDeclaration;
    var _t = ___babel_types$;
    var {
      cloneNode,
      exportNamedDeclaration,
      exportSpecifier,
      identifier,
      variableDeclaration,
      variableDeclarator
    } = _t;
    function splitExportDeclaration(exportDeclaration) {
      if (!exportDeclaration.isExportDeclaration() || exportDeclaration.isExportAllDeclaration()) {
        throw new Error('Only default and named export declarations can be split.');
      }
      if (exportDeclaration.isExportDefaultDeclaration()) {
        const declaration2 = exportDeclaration.get('declaration');
        const standaloneDeclaration = declaration2.isFunctionDeclaration() || declaration2.isClassDeclaration();
        const scope = declaration2.isScope() ? declaration2.scope.parent : declaration2.scope;
        let id = declaration2.node.id;
        let needBindingRegistration = false;
        if (!id) {
          needBindingRegistration = true;
          id = scope.generateUidIdentifier('default');
          if (standaloneDeclaration || declaration2.isFunctionExpression() || declaration2.isClassExpression()) {
            declaration2.node.id = cloneNode(id);
          }
        }
        const updatedDeclaration = standaloneDeclaration
          ? declaration2.node
          : variableDeclaration('var', [variableDeclarator(cloneNode(id), declaration2.node)]);
        const updatedExportDeclaration = exportNamedDeclaration(null, [
          exportSpecifier(cloneNode(id), identifier('default'))
        ]);
        exportDeclaration.insertAfter(updatedExportDeclaration);
        exportDeclaration.replaceWith(updatedDeclaration);
        if (needBindingRegistration) {
          scope.registerDeclaration(exportDeclaration);
        }
        return exportDeclaration;
      } else if (exportDeclaration.get('specifiers').length > 0) {
        throw new Error("It doesn't make sense to split exported specifiers.");
      }
      const declaration = exportDeclaration.get('declaration');
      const bindingIdentifiers = declaration.getOuterBindingIdentifiers();
      const specifiers = Object.keys(bindingIdentifiers).map(name => {
        return exportSpecifier(identifier(name), identifier(name));
      });
      const aliasDeclar = exportNamedDeclaration(null, specifiers);
      exportDeclaration.insertAfter(aliasDeclar);
      exportDeclaration.replaceWith(declaration.node);
      return exportDeclaration;
    }
  }
});

// esm-build-be5d02559a9a8a70cde312d05d259d0fc701dc71-2f3de8fa/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
