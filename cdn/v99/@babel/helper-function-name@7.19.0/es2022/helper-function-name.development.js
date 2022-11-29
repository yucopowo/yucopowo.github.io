/* esm.sh - esbuild bundle(@babel/helper-function-name@7.19.0) es2022 development */
import ___babel_types$ from '/cdn/v99/@babel/types@7.20.2/es2022/types.development.js';
import * as ___babel_template$ from '/cdn/v99/@babel/template@7.18.10/es2022/template.development.js';
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

// esm-build-94c9f239983ea3dc133830660aa23dc4d60e8c03-81cf930a/node_modules/@babel/helper-function-name/lib/index.js
var require_lib = __commonJS({
  'esm-build-94c9f239983ea3dc133830660aa23dc4d60e8c03-81cf930a/node_modules/@babel/helper-function-name/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = _default;
    var _template = ___babel_template$;
    var _t = ___babel_types$;
    var {
      NOT_LOCAL_BINDING,
      cloneNode,
      identifier,
      isAssignmentExpression,
      isAssignmentPattern,
      isFunction,
      isIdentifier,
      isLiteral,
      isNullLiteral,
      isObjectMethod,
      isObjectProperty,
      isRegExpLiteral,
      isRestElement,
      isTemplateLiteral,
      isVariableDeclarator,
      toBindingIdentifierName
    } = _t;
    function getFunctionArity(node) {
      const count = node.params.findIndex(param => isAssignmentPattern(param) || isRestElement(param));
      return count === -1 ? node.params.length : count;
    }
    var buildPropertyMethodAssignmentWrapper = _template.default.statement(`
  (function (FUNCTION_KEY) {
    function FUNCTION_ID() {
      return FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    }

    return FUNCTION_ID;
  })(FUNCTION)
`);
    var buildGeneratorPropertyMethodAssignmentWrapper = _template.default.statement(`
  (function (FUNCTION_KEY) {
    function* FUNCTION_ID() {
      return yield* FUNCTION_KEY.apply(this, arguments);
    }

    FUNCTION_ID.toString = function () {
      return FUNCTION_KEY.toString();
    };

    return FUNCTION_ID;
  })(FUNCTION)
`);
    var visitor = {
      'ReferencedIdentifier|BindingIdentifier'(path, state) {
        if (path.node.name !== state.name) return;
        const localDeclar = path.scope.getBindingIdentifier(state.name);
        if (localDeclar !== state.outerDeclar) return;
        state.selfReference = true;
        path.stop();
      }
    };
    function getNameFromLiteralId(id) {
      if (isNullLiteral(id)) {
        return 'null';
      }
      if (isRegExpLiteral(id)) {
        return `_${id.pattern}_${id.flags}`;
      }
      if (isTemplateLiteral(id)) {
        return id.quasis.map(quasi => quasi.value.raw).join('');
      }
      if (id.value !== void 0) {
        return id.value + '';
      }
      return '';
    }
    function wrap(state, method, id, scope) {
      if (state.selfReference) {
        if (scope.hasBinding(id.name) && !scope.hasGlobal(id.name)) {
          scope.rename(id.name);
        } else {
          if (!isFunction(method)) return;
          let build = buildPropertyMethodAssignmentWrapper;
          if (method.generator) {
            build = buildGeneratorPropertyMethodAssignmentWrapper;
          }
          const template = build({
            FUNCTION: method,
            FUNCTION_ID: id,
            FUNCTION_KEY: scope.generateUidIdentifier(id.name)
          }).expression;
          const params = template.callee.body.body[0].params;
          for (let i = 0, len = getFunctionArity(method); i < len; i++) {
            params.push(scope.generateUidIdentifier('x'));
          }
          return template;
        }
      }
      method.id = id;
      scope.getProgramParent().references[id.name] = true;
    }
    function visit(node, name, scope) {
      const state = {
        selfAssignment: false,
        selfReference: false,
        outerDeclar: scope.getBindingIdentifier(name),
        name
      };
      const binding = scope.getOwnBinding(name);
      if (binding) {
        if (binding.kind === 'param') {
          state.selfReference = true;
        } else {
        }
      } else if (state.outerDeclar || scope.hasGlobal(name)) {
        scope.traverse(node, visitor, state);
      }
      return state;
    }
    function _default({ node, parent, scope, id }, localBinding = false, supportUnicodeId = false) {
      if (node.id) return;
      if (
        (isObjectProperty(parent) ||
          isObjectMethod(parent, {
            kind: 'method'
          })) &&
        (!parent.computed || isLiteral(parent.key))
      ) {
        id = parent.key;
      } else if (isVariableDeclarator(parent)) {
        id = parent.id;
        if (isIdentifier(id) && !localBinding) {
          const binding = scope.parent.getBinding(id.name);
          if (binding && binding.constant && scope.getBinding(id.name) === binding) {
            node.id = cloneNode(id);
            node.id[NOT_LOCAL_BINDING] = true;
            return;
          }
        }
      } else if (
        isAssignmentExpression(parent, {
          operator: '='
        })
      ) {
        id = parent.left;
      } else if (!id) {
        return;
      }
      let name;
      if (id && isLiteral(id)) {
        name = getNameFromLiteralId(id);
      } else if (id && isIdentifier(id)) {
        name = id.name;
      }
      if (name === void 0) {
        return;
      }
      if (!supportUnicodeId && isFunction(node) && /[\uD800-\uDFFF]/.test(name)) {
        return;
      }
      name = toBindingIdentifierName(name);
      const newId = identifier(name);
      newId[NOT_LOCAL_BINDING] = true;
      const state = visit(node, name, scope);
      return wrap(state, node, newId, scope) || node;
    }
  }
});

// esm-build-94c9f239983ea3dc133830660aa23dc4d60e8c03-81cf930a/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
