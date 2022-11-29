/* esm.sh - esbuild bundle(@babel/plugin-proposal-object-rest-spread@7.12.1) es2022 development */
import * as ___babel_plugin_syntax_object_rest_spread$ from '/cdn/v99/@babel/plugin-syntax-object-rest-spread@7.8.3/es2022/plugin-syntax-object-rest-spread.development.js';
import ___babel_helper_plugin_utils$ from '/cdn/v99/@babel/helper-plugin-utils@7.20.2/es2022/helper-plugin-utils.development.js';
import * as ___babel_plugin_transform_parameters$ from '/cdn/v99/@babel/plugin-transform-parameters@7.20.3/es2022/plugin-transform-parameters.development.js';
import ___babel_core$ from '/cdn/v99/@babel/core@7.20.2/es2022/core.development.js';
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

// esm-build-d187a467c3447eed4e5f647fd99a5b13552f78c0-fd0c3d13/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js
var require_lib = __commonJS({
  'esm-build-d187a467c3447eed4e5f647fd99a5b13552f78c0-fd0c3d13/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _helperPluginUtils = ___babel_helper_plugin_utils$;
    var _pluginSyntaxObjectRestSpread = _interopRequireDefault(___babel_plugin_syntax_object_rest_spread$);
    var _core = ___babel_core$;
    var _pluginTransformParameters = ___babel_plugin_transform_parameters$;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj
          };
    }
    var ZERO_REFS = (() => {
      const node = _core.types.identifier('a');
      const property = _core.types.objectProperty(_core.types.identifier('key'), node);
      const pattern = _core.types.objectPattern([property]);
      return _core.types.isReferenced(node, property, pattern) ? 1 : 0;
    })();
    var _default = (0, _helperPluginUtils.declare)((api, opts) => {
      api.assertVersion(7);
      const { useBuiltIns = false, loose = false } = opts;
      if (typeof loose !== 'boolean') {
        throw new Error('.loose must be a boolean, or undefined');
      }
      function getExtendsHelper(file) {
        return useBuiltIns
          ? _core.types.memberExpression(_core.types.identifier('Object'), _core.types.identifier('assign'))
          : file.addHelper('extends');
      }
      function hasRestElement(path) {
        let foundRestElement = false;
        visitRestElements(path, restElement => {
          foundRestElement = true;
          restElement.stop();
        });
        return foundRestElement;
      }
      function hasObjectPatternRestElement(path) {
        let foundRestElement = false;
        visitRestElements(path, restElement => {
          if (restElement.parentPath.isObjectPattern()) {
            foundRestElement = true;
            restElement.stop();
          }
        });
        return foundRestElement;
      }
      function visitRestElements(path, visitor) {
        path.traverse({
          Expression(path2) {
            const parentType = path2.parent.type;
            if (
              (parentType === 'AssignmentPattern' && path2.key === 'right') ||
              (parentType === 'ObjectProperty' && path2.parent.computed && path2.key === 'key')
            ) {
              path2.skip();
            }
          },
          RestElement: visitor
        });
      }
      function hasSpread(node) {
        for (const prop of node.properties) {
          if (_core.types.isSpreadElement(prop)) {
            return true;
          }
        }
        return false;
      }
      function extractNormalizedKeys(path) {
        const props = path.node.properties;
        const keys = [];
        let allLiteral = true;
        for (const prop of props) {
          if (_core.types.isIdentifier(prop.key) && !prop.computed) {
            keys.push(_core.types.stringLiteral(prop.key.name));
          } else if (_core.types.isTemplateLiteral(prop.key)) {
            keys.push(_core.types.cloneNode(prop.key));
          } else if (_core.types.isLiteral(prop.key)) {
            keys.push(_core.types.stringLiteral(String(prop.key.value)));
          } else {
            keys.push(_core.types.cloneNode(prop.key));
            allLiteral = false;
          }
        }
        return {
          keys,
          allLiteral
        };
      }
      function replaceImpureComputedKeys(properties, scope) {
        const impureComputedPropertyDeclarators = [];
        for (const propPath of properties) {
          const key = propPath.get('key');
          if (propPath.node.computed && !key.isPure()) {
            const name = scope.generateUidBasedOnNode(key.node);
            const declarator = _core.types.variableDeclarator(_core.types.identifier(name), key.node);
            impureComputedPropertyDeclarators.push(declarator);
            key.replaceWith(_core.types.identifier(name));
          }
        }
        return impureComputedPropertyDeclarators;
      }
      function removeUnusedExcludedKeys(path) {
        const bindings = path.getOuterBindingIdentifierPaths();
        Object.keys(bindings).forEach(bindingName => {
          const bindingParentPath = bindings[bindingName].parentPath;
          if (path.scope.getBinding(bindingName).references > ZERO_REFS || !bindingParentPath.isObjectProperty()) {
            return;
          }
          bindingParentPath.remove();
        });
      }
      function createObjectSpread(path, file, objRef) {
        const props = path.get('properties');
        const last = props[props.length - 1];
        _core.types.assertRestElement(last.node);
        const restElement = _core.types.cloneNode(last.node);
        last.remove();
        const impureComputedPropertyDeclarators = replaceImpureComputedKeys(path.get('properties'), path.scope);
        const { keys, allLiteral } = extractNormalizedKeys(path);
        if (keys.length === 0) {
          return [
            impureComputedPropertyDeclarators,
            restElement.argument,
            _core.types.callExpression(getExtendsHelper(file), [
              _core.types.objectExpression([]),
              _core.types.cloneNode(objRef)
            ])
          ];
        }
        let keyExpression;
        if (!allLiteral) {
          keyExpression = _core.types.callExpression(
            _core.types.memberExpression(_core.types.arrayExpression(keys), _core.types.identifier('map')),
            [file.addHelper('toPropertyKey')]
          );
        } else {
          keyExpression = _core.types.arrayExpression(keys);
        }
        return [
          impureComputedPropertyDeclarators,
          restElement.argument,
          _core.types.callExpression(file.addHelper(`objectWithoutProperties${loose ? 'Loose' : ''}`), [
            _core.types.cloneNode(objRef),
            keyExpression
          ])
        ];
      }
      function replaceRestElement(parentPath, paramPath, container) {
        if (paramPath.isAssignmentPattern()) {
          replaceRestElement(parentPath, paramPath.get('left'), container);
          return;
        }
        if (paramPath.isArrayPattern() && hasRestElement(paramPath)) {
          const elements = paramPath.get('elements');
          for (let i = 0; i < elements.length; i++) {
            replaceRestElement(parentPath, elements[i], container);
          }
        }
        if (paramPath.isObjectPattern() && hasRestElement(paramPath)) {
          const uid = parentPath.scope.generateUidIdentifier('ref');
          const declar = _core.types.variableDeclaration('let', [_core.types.variableDeclarator(paramPath.node, uid)]);
          if (container) {
            container.push(declar);
          } else {
            parentPath.ensureBlock();
            parentPath.get('body').unshiftContainer('body', declar);
          }
          paramPath.replaceWith(_core.types.cloneNode(uid));
        }
      }
      return {
        name: 'proposal-object-rest-spread',
        inherits: _pluginSyntaxObjectRestSpread.default,
        visitor: {
          Function(path) {
            const params = path.get('params');
            const paramsWithRestElement = /* @__PURE__ */ new Set();
            const idsInRestParams = /* @__PURE__ */ new Set();
            for (let i2 = 0; i2 < params.length; ++i2) {
              const param = params[i2];
              if (hasRestElement(param)) {
                paramsWithRestElement.add(i2);
                for (const name of Object.keys(param.getBindingIdentifiers())) {
                  idsInRestParams.add(name);
                }
              }
            }
            let idInRest = false;
            const IdentifierHandler = function(path2, functionScope) {
              const name = path2.node.name;
              if (path2.scope.getBinding(name) === functionScope.getBinding(name) && idsInRestParams.has(name)) {
                idInRest = true;
                path2.stop();
              }
            };
            let i;
            for (i = 0; i < params.length && !idInRest; ++i) {
              const param = params[i];
              if (!paramsWithRestElement.has(i)) {
                if (param.isReferencedIdentifier() || param.isBindingIdentifier()) {
                  IdentifierHandler(path, path.scope);
                } else {
                  param.traverse(
                    {
                      'Scope|TypeAnnotation|TSTypeAnnotation': path2 => path2.skip(),
                      'ReferencedIdentifier|BindingIdentifier': IdentifierHandler
                    },
                    path.scope
                  );
                }
              }
            }
            if (!idInRest) {
              for (let i2 = 0; i2 < params.length; ++i2) {
                const param = params[i2];
                if (paramsWithRestElement.has(i2)) {
                  replaceRestElement(param.parentPath, param);
                }
              }
            } else {
              const shouldTransformParam = idx => idx >= i - 1 || paramsWithRestElement.has(idx);
              (0, _pluginTransformParameters.convertFunctionParams)(
                path,
                loose,
                shouldTransformParam,
                replaceRestElement
              );
            }
          },
          VariableDeclarator(path, file) {
            if (!path.get('id').isObjectPattern()) {
              return;
            }
            let insertionPath = path;
            const originalPath = path;
            visitRestElements(path.get('id'), path2 => {
              if (!path2.parentPath.isObjectPattern()) {
                return;
              }
              if (originalPath.node.id.properties.length > 1 && !_core.types.isIdentifier(originalPath.node.init)) {
                const initRef = path2.scope.generateUidIdentifierBasedOnNode(originalPath.node.init, 'ref');
                originalPath.insertBefore(_core.types.variableDeclarator(initRef, originalPath.node.init));
                originalPath.replaceWith(
                  _core.types.variableDeclarator(originalPath.node.id, _core.types.cloneNode(initRef))
                );
                return;
              }
              let ref = originalPath.node.init;
              const refPropertyPath = [];
              let kind;
              path2.findParent(path3 => {
                if (path3.isObjectProperty()) {
                  refPropertyPath.unshift(path3);
                } else if (path3.isVariableDeclarator()) {
                  kind = path3.parentPath.node.kind;
                  return true;
                }
              });
              const impureObjRefComputedDeclarators = replaceImpureComputedKeys(refPropertyPath, path2.scope);
              refPropertyPath.forEach(prop => {
                const { node } = prop;
                ref = _core.types.memberExpression(
                  ref,
                  _core.types.cloneNode(node.key),
                  node.computed || _core.types.isLiteral(node.key)
                );
              });
              const objectPatternPath = path2.findParent(path3 => path3.isObjectPattern());
              const [impureComputedPropertyDeclarators, argument, callExpression] = createObjectSpread(
                objectPatternPath,
                file,
                ref
              );
              if (loose) {
                removeUnusedExcludedKeys(objectPatternPath);
              }
              _core.types.assertIdentifier(argument);
              insertionPath.insertBefore(impureComputedPropertyDeclarators);
              insertionPath.insertBefore(impureObjRefComputedDeclarators);
              insertionPath.insertAfter(_core.types.variableDeclarator(argument, callExpression));
              insertionPath = insertionPath.getSibling(insertionPath.key + 1);
              path2.scope.registerBinding(kind, insertionPath);
              if (objectPatternPath.node.properties.length === 0) {
                objectPatternPath
                  .findParent(path3 => path3.isObjectProperty() || path3.isVariableDeclarator())
                  .remove();
              }
            });
          },
          ExportNamedDeclaration(path) {
            const declaration = path.get('declaration');
            if (!declaration.isVariableDeclaration()) return;
            const hasRest = declaration.get('declarations').some(path2 => hasObjectPatternRestElement(path2.get('id')));
            if (!hasRest) return;
            const specifiers = [];
            for (const name of Object.keys(path.getOuterBindingIdentifiers(path))) {
              specifiers.push(_core.types.exportSpecifier(_core.types.identifier(name), _core.types.identifier(name)));
            }
            path.replaceWith(declaration.node);
            path.insertAfter(_core.types.exportNamedDeclaration(null, specifiers));
          },
          CatchClause(path) {
            const paramPath = path.get('param');
            replaceRestElement(paramPath.parentPath, paramPath);
          },
          AssignmentExpression(path, file) {
            const leftPath = path.get('left');
            if (leftPath.isObjectPattern() && hasRestElement(leftPath)) {
              const nodes = [];
              const refName = path.scope.generateUidBasedOnNode(path.node.right, 'ref');
              nodes.push(
                _core.types.variableDeclaration('var', [
                  _core.types.variableDeclarator(_core.types.identifier(refName), path.node.right)
                ])
              );
              const [impureComputedPropertyDeclarators, argument, callExpression] = createObjectSpread(
                leftPath,
                file,
                _core.types.identifier(refName)
              );
              if (impureComputedPropertyDeclarators.length > 0) {
                nodes.push(_core.types.variableDeclaration('var', impureComputedPropertyDeclarators));
              }
              const nodeWithoutSpread = _core.types.cloneNode(path.node);
              nodeWithoutSpread.right = _core.types.identifier(refName);
              nodes.push(_core.types.expressionStatement(nodeWithoutSpread));
              nodes.push(_core.types.toStatement(_core.types.assignmentExpression('=', argument, callExpression)));
              nodes.push(_core.types.expressionStatement(_core.types.identifier(refName)));
              path.replaceWithMultiple(nodes);
            }
          },
          ForXStatement(path) {
            const { node, scope } = path;
            const leftPath = path.get('left');
            const left = node.left;
            if (!hasObjectPatternRestElement(leftPath)) {
              return;
            }
            if (!_core.types.isVariableDeclaration(left)) {
              const temp = scope.generateUidIdentifier('ref');
              node.left = _core.types.variableDeclaration('var', [_core.types.variableDeclarator(temp)]);
              path.ensureBlock();
              if (node.body.body.length === 0 && path.isCompletionRecord()) {
                node.body.body.unshift(_core.types.expressionStatement(scope.buildUndefinedNode()));
              }
              node.body.body.unshift(
                _core.types.expressionStatement(
                  _core.types.assignmentExpression('=', left, _core.types.cloneNode(temp))
                )
              );
            } else {
              const pattern = left.declarations[0].id;
              const key = scope.generateUidIdentifier('ref');
              node.left = _core.types.variableDeclaration(left.kind, [_core.types.variableDeclarator(key, null)]);
              path.ensureBlock();
              node.body.body.unshift(
                _core.types.variableDeclaration(node.left.kind, [
                  _core.types.variableDeclarator(pattern, _core.types.cloneNode(key))
                ])
              );
            }
          },
          ArrayPattern(path) {
            const objectPatterns = [];
            visitRestElements(path, path2 => {
              if (!path2.parentPath.isObjectPattern()) {
                return;
              }
              const objectPattern = path2.parentPath;
              const uid = path2.scope.generateUidIdentifier('ref');
              objectPatterns.push(_core.types.variableDeclarator(objectPattern.node, uid));
              objectPattern.replaceWith(_core.types.cloneNode(uid));
              path2.skip();
            });
            if (objectPatterns.length > 0) {
              const statementPath = path.getStatementParent();
              statementPath.insertAfter(
                _core.types.variableDeclaration(statementPath.node.kind || 'var', objectPatterns)
              );
            }
          },
          ObjectExpression(path, file) {
            if (!hasSpread(path.node)) return;
            let helper;
            if (loose) {
              helper = getExtendsHelper(file);
            } else {
              try {
                helper = file.addHelper('objectSpread2');
              } catch (_unused) {
                this.file.declarations['objectSpread2'] = null;
                helper = file.addHelper('objectSpread');
              }
            }
            let exp = null;
            let props = [];
            function make() {
              const hadProps = props.length > 0;
              const obj = _core.types.objectExpression(props);
              props = [];
              if (!exp) {
                exp = _core.types.callExpression(helper, [obj]);
                return;
              }
              if (loose) {
                if (hadProps) {
                  exp.arguments.push(obj);
                }
                return;
              }
              exp = _core.types.callExpression(_core.types.cloneNode(helper), [
                exp,
                ...(hadProps ? [_core.types.objectExpression([]), obj] : [])
              ]);
            }
            for (const prop of path.node.properties) {
              if (_core.types.isSpreadElement(prop)) {
                make();
                exp.arguments.push(prop.argument);
              } else {
                props.push(prop);
              }
            }
            if (props.length) make();
            path.replaceWith(exp);
          }
        }
      };
    });
    exports.default = _default;
  }
});

// esm-build-d187a467c3447eed4e5f647fd99a5b13552f78c0-fd0c3d13/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
