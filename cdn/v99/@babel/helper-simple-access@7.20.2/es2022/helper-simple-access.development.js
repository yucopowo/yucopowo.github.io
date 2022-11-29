/* esm.sh - esbuild bundle(@babel/helper-simple-access@7.20.2) es2022 development */
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

// esm-build-297083f6e52293acf6f3b3bd925d5fac7faf81a6-cec7f1b5/node_modules/@babel/helper-simple-access/lib/index.js
var require_lib = __commonJS({
  'esm-build-297083f6e52293acf6f3b3bd925d5fac7faf81a6-cec7f1b5/node_modules/@babel/helper-simple-access/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = simplifyAccess;
    var _t = ___babel_types$;
    var {
      LOGICAL_OPERATORS,
      assignmentExpression,
      binaryExpression,
      cloneNode,
      identifier,
      logicalExpression,
      numericLiteral,
      sequenceExpression,
      unaryExpression
    } = _t;
    var simpleAssignmentVisitor = {
      UpdateExpression: {
        exit(path) {
          const { scope, bindingNames, includeUpdateExpression } = this;
          if (!includeUpdateExpression) {
            return;
          }
          const arg = path.get('argument');
          if (!arg.isIdentifier()) return;
          const localName = arg.node.name;
          if (!bindingNames.has(localName)) return;
          if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
            return;
          }
          if (path.parentPath.isExpressionStatement() && !path.isCompletionRecord()) {
            const operator = path.node.operator == '++' ? '+=' : '-=';
            path.replaceWith(assignmentExpression(operator, arg.node, numericLiteral(1)));
          } else if (path.node.prefix) {
            path.replaceWith(
              assignmentExpression(
                '=',
                identifier(localName),
                binaryExpression(path.node.operator[0], unaryExpression('+', arg.node), numericLiteral(1))
              )
            );
          } else {
            const old = path.scope.generateUidIdentifierBasedOnNode(arg.node, 'old');
            const varName = old.name;
            path.scope.push({
              id: old
            });
            const binary = binaryExpression(path.node.operator[0], identifier(varName), numericLiteral(1));
            path.replaceWith(
              sequenceExpression([
                assignmentExpression('=', identifier(varName), unaryExpression('+', arg.node)),
                assignmentExpression('=', cloneNode(arg.node), binary),
                identifier(varName)
              ])
            );
          }
        }
      },
      AssignmentExpression: {
        exit(path) {
          const { scope, seen, bindingNames } = this;
          if (path.node.operator === '=') return;
          if (seen.has(path.node)) return;
          seen.add(path.node);
          const left = path.get('left');
          if (!left.isIdentifier()) return;
          const localName = left.node.name;
          if (!bindingNames.has(localName)) return;
          if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
            return;
          }
          const operator = path.node.operator.slice(0, -1);
          if (LOGICAL_OPERATORS.includes(operator)) {
            path.replaceWith(
              logicalExpression(
                operator,
                path.node.left,
                assignmentExpression('=', cloneNode(path.node.left), path.node.right)
              )
            );
          } else {
            path.node.right = binaryExpression(operator, cloneNode(path.node.left), path.node.right);
            path.node.operator = '=';
          }
        }
      }
    };
    function simplifyAccess(path, bindingNames, includeUpdateExpression = true) {
      path.traverse(simpleAssignmentVisitor, {
        scope: path.scope,
        bindingNames,
        seen: /* @__PURE__ */ new WeakSet(),
        includeUpdateExpression
      });
    }
  }
});

// esm-build-297083f6e52293acf6f3b3bd925d5fac7faf81a6-cec7f1b5/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
