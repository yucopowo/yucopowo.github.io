/* esm.sh - esbuild bundle(@babel/plugin-transform-react-display-name@7.18.6) es2022 development */
import ___babel_core$ from '/cdn/v99/@babel/core@7.20.5/es2022/core.development.js';
import __path$ from '/cdn/v99/path-browserify@1.0.1/es2022/path-browserify.development.bundle.js';
import ___babel_helper_plugin_utils$ from '/cdn/v99/@babel/helper-plugin-utils@7.20.2/es2022/helper-plugin-utils.development.js';
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

// esm-build-cb7dbe14439e48cc645ebabbcd6f9a6ddc9474d4-590e379c/node_modules/@babel/plugin-transform-react-display-name/lib/index.js
var require_lib = __commonJS({
  'esm-build-cb7dbe14439e48cc645ebabbcd6f9a6ddc9474d4-590e379c/node_modules/@babel/plugin-transform-react-display-name/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _helperPluginUtils = ___babel_helper_plugin_utils$;
    var _path = __path$;
    var _core = ___babel_core$;
    var _default = (0, _helperPluginUtils.declare)(api => {
      api.assertVersion(7);
      function addDisplayName(id, call) {
        const props = call.arguments[0].properties;
        let safe = true;
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (_core.types.isSpreadElement(prop)) {
            continue;
          }
          const key = _core.types.toComputedKey(prop);
          if (
            _core.types.isStringLiteral(key, {
              value: 'displayName'
            })
          ) {
            safe = false;
            break;
          }
        }
        if (safe) {
          props.unshift(
            _core.types.objectProperty(_core.types.identifier('displayName'), _core.types.stringLiteral(id))
          );
        }
      }
      const isCreateClassCallExpression = _core.types.buildMatchMemberExpression('React.createClass');
      const isCreateClassAddon = callee =>
        _core.types.isIdentifier(callee, {
          name: 'createReactClass'
        });
      function isCreateClass(node) {
        if (!node || !_core.types.isCallExpression(node)) return false;
        if (!isCreateClassCallExpression(node.callee) && !isCreateClassAddon(node.callee)) {
          return false;
        }
        const args = node.arguments;
        if (args.length !== 1) return false;
        const first = args[0];
        if (!_core.types.isObjectExpression(first)) return false;
        return true;
      }
      return {
        name: 'transform-react-display-name',
        visitor: {
          ExportDefaultDeclaration({ node }, state) {
            if (isCreateClass(node.declaration)) {
              const filename = state.filename || 'unknown';
              let displayName = _path.basename(filename, _path.extname(filename));
              if (displayName === 'index') {
                displayName = _path.basename(_path.dirname(filename));
              }
              addDisplayName(displayName, node.declaration);
            }
          },
          CallExpression(path) {
            const { node } = path;
            if (!isCreateClass(node)) return;
            let id;
            path.find(function(path2) {
              if (path2.isAssignmentExpression()) {
                id = path2.node.left;
              } else if (path2.isObjectProperty()) {
                id = path2.node.key;
              } else if (path2.isVariableDeclarator()) {
                id = path2.node.id;
              } else if (path2.isStatement()) {
                return true;
              }
              if (id) return true;
            });
            if (!id) return;
            if (_core.types.isMemberExpression(id)) {
              id = id.property;
            }
            if (_core.types.isIdentifier(id)) {
              addDisplayName(id.name, node);
            }
          }
        }
      };
    });
    exports.default = _default;
  }
});

// esm-build-cb7dbe14439e48cc645ebabbcd6f9a6ddc9474d4-590e379c/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
