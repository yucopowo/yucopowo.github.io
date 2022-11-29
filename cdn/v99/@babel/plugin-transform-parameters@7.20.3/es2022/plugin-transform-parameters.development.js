/* esm.sh - esbuild bundle(@babel/plugin-transform-parameters@7.20.3) es2022 development */
import ___babel_core$ from '/cdn/v99/@babel/core@7.20.2/es2022/core.development.js';
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

// esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/shadow-utils.js
var require_shadow_utils = __commonJS({
  'esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/shadow-utils.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.buildScopeIIFE = buildScopeIIFE;
    exports.collectShadowedParamsNames = collectShadowedParamsNames;
    exports.iifeVisitor = void 0;
    var _core = ___babel_core$;
    var iifeVisitor = {
      'ReferencedIdentifier|BindingIdentifier'(path, state) {
        const { scope, node } = path;
        const { name } = node;
        if (
          name === 'eval' ||
          (scope.getBinding(name) === state.scope.parent.getBinding(name) && state.scope.hasOwnBinding(name))
        ) {
          state.needsOuterBinding = true;
          path.stop();
        }
      },
      'TypeAnnotation|TSTypeAnnotation|TypeParameterDeclaration|TSTypeParameterDeclaration': path => path.skip()
    };
    exports.iifeVisitor = iifeVisitor;
    function collectShadowedParamsNames(param, functionScope, shadowedParams) {
      for (const name of Object.keys(param.getBindingIdentifiers())) {
        var _functionScope$bindin;
        const constantViolations =
          (_functionScope$bindin = functionScope.bindings[name]) == null
            ? void 0
            : _functionScope$bindin.constantViolations;
        if (constantViolations) {
          for (const redeclarator of constantViolations) {
            const node = redeclarator.node;
            switch (node.type) {
              case 'VariableDeclarator': {
                if (node.init === null) {
                  const declaration = redeclarator.parentPath;
                  if (!declaration.parentPath.isFor() || declaration.parentPath.get('body') === declaration) {
                    redeclarator.remove();
                    break;
                  }
                }
                shadowedParams.add(name);
                break;
              }
              case 'FunctionDeclaration':
                shadowedParams.add(name);
                break;
            }
          }
        }
      }
    }
    function buildScopeIIFE(shadowedParams, body) {
      const args = [];
      const params = [];
      for (const name of shadowedParams) {
        args.push(_core.types.identifier(name));
        params.push(_core.types.identifier(name));
      }
      return _core.types.returnStatement(
        _core.types.callExpression(_core.types.arrowFunctionExpression(params, body), args)
      );
    }
  }
});

// esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/params.js
var require_params = __commonJS({
  'esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/params.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = convertFunctionParams2;
    var _core = ___babel_core$;
    var _shadowUtils = require_shadow_utils();
    var buildDefaultParam = _core.template.statement(`
  let VARIABLE_NAME =
    arguments.length > ARGUMENT_KEY && arguments[ARGUMENT_KEY] !== undefined ?
      arguments[ARGUMENT_KEY]
    :
      DEFAULT_VALUE;
`);
    var buildLooseDefaultParam = _core.template.statement(`
  if (ASSIGNMENT_IDENTIFIER === UNDEFINED) {
    ASSIGNMENT_IDENTIFIER = DEFAULT_VALUE;
  }
`);
    var buildLooseDestructuredDefaultParam = _core.template.statement(`
  let ASSIGNMENT_IDENTIFIER = PARAMETER_NAME === UNDEFINED ? DEFAULT_VALUE : PARAMETER_NAME ;
`);
    var buildSafeArgumentsAccess = _core.template.statement(`
  let $0 = arguments.length > $1 ? arguments[$1] : undefined;
`);
    function convertFunctionParams2(path, ignoreFunctionLength, shouldTransformParam, replaceRestElement) {
      const params = path.get('params');
      const isSimpleParameterList = params.every(param => param.isIdentifier());
      if (isSimpleParameterList) return false;
      const { node, scope } = path;
      const body = [];
      const shadowedParams = /* @__PURE__ */ new Set();
      for (const param of params) {
        (0, _shadowUtils.collectShadowedParamsNames)(param, scope, shadowedParams);
      }
      const state = {
        needsOuterBinding: false,
        scope
      };
      if (shadowedParams.size === 0) {
        for (const param of params) {
          if (!param.isIdentifier()) param.traverse(_shadowUtils.iifeVisitor, state);
          if (state.needsOuterBinding) break;
        }
      }
      let firstOptionalIndex = null;
      for (let i = 0; i < params.length; i++) {
        const param = params[i];
        if (shouldTransformParam && !shouldTransformParam(i)) {
          continue;
        }
        const transformedRestNodes = [];
        if (replaceRestElement) {
          replaceRestElement(path, param, transformedRestNodes);
        }
        const paramIsAssignmentPattern = param.isAssignmentPattern();
        if (
          paramIsAssignmentPattern &&
          (ignoreFunctionLength ||
            _core.types.isMethod(node, {
              kind: 'set'
            }))
        ) {
          const left = param.get('left');
          const right = param.get('right');
          const undefinedNode = scope.buildUndefinedNode();
          if (left.isIdentifier()) {
            body.push(
              buildLooseDefaultParam({
                ASSIGNMENT_IDENTIFIER: _core.types.cloneNode(left.node),
                DEFAULT_VALUE: right.node,
                UNDEFINED: undefinedNode
              })
            );
            param.replaceWith(left.node);
          } else if (left.isObjectPattern() || left.isArrayPattern()) {
            const paramName = scope.generateUidIdentifier();
            body.push(
              buildLooseDestructuredDefaultParam({
                ASSIGNMENT_IDENTIFIER: left.node,
                DEFAULT_VALUE: right.node,
                PARAMETER_NAME: _core.types.cloneNode(paramName),
                UNDEFINED: undefinedNode
              })
            );
            param.replaceWith(paramName);
          }
        } else if (paramIsAssignmentPattern) {
          if (firstOptionalIndex === null) firstOptionalIndex = i;
          const left = param.get('left');
          const right = param.get('right');
          const defNode = buildDefaultParam({
            VARIABLE_NAME: left.node,
            DEFAULT_VALUE: right.node,
            ARGUMENT_KEY: _core.types.numericLiteral(i)
          });
          body.push(defNode);
        } else if (firstOptionalIndex !== null) {
          const defNode = buildSafeArgumentsAccess([param.node, _core.types.numericLiteral(i)]);
          body.push(defNode);
        } else if (param.isObjectPattern() || param.isArrayPattern()) {
          const uid = path.scope.generateUidIdentifier('ref');
          uid.typeAnnotation = param.node.typeAnnotation;
          const defNode = _core.types.variableDeclaration('let', [_core.types.variableDeclarator(param.node, uid)]);
          body.push(defNode);
          param.replaceWith(_core.types.cloneNode(uid));
        }
        if (transformedRestNodes) {
          for (const transformedNode of transformedRestNodes) {
            body.push(transformedNode);
          }
        }
      }
      if (firstOptionalIndex !== null) {
        node.params = node.params.slice(0, firstOptionalIndex);
      }
      path.ensureBlock();
      const { async, generator } = node;
      if (generator || state.needsOuterBinding || shadowedParams.size > 0) {
        body.push((0, _shadowUtils.buildScopeIIFE)(shadowedParams, path.node.body));
        path.set('body', _core.types.blockStatement(body));
        const bodyPath = path.get('body.body');
        const arrowPath = bodyPath[bodyPath.length - 1].get('argument.callee');
        arrowPath.arrowFunctionToExpression();
        arrowPath.node.generator = generator;
        arrowPath.node.async = async;
        node.generator = false;
        node.async = false;
        if (async) {
          path.node.body = _core.template.statement.ast`{
        try {
          ${path.node.body.body}
        } catch (e) {
          return Promise.reject(e);
        }
      }`;
        }
      } else {
        path.get('body').unshiftContainer('body', body);
      }
      return true;
    }
  }
});

// esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/rest.js
var require_rest = __commonJS({
  'esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/rest.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = convertFunctionRest;
    var _core = ___babel_core$;
    var _shadowUtils = require_shadow_utils();
    var buildRest = _core.template.statement(`
  for (var LEN = ARGUMENTS.length,
           ARRAY = new Array(ARRAY_LEN),
           KEY = START;
       KEY < LEN;
       KEY++) {
    ARRAY[ARRAY_KEY] = ARGUMENTS[KEY];
  }
`);
    var restIndex = _core.template.expression(`
  (INDEX < OFFSET || ARGUMENTS.length <= INDEX) ? undefined : ARGUMENTS[INDEX]
`);
    var restIndexImpure = _core.template.expression(`
  REF = INDEX, (REF < OFFSET || ARGUMENTS.length <= REF) ? undefined : ARGUMENTS[REF]
`);
    var restLength = _core.template.expression(`
  ARGUMENTS.length <= OFFSET ? 0 : ARGUMENTS.length - OFFSET
`);
    function referencesRest(path, state) {
      if (path.node.name === state.name) {
        return path.scope.bindingIdentifierEquals(state.name, state.outerBinding);
      }
      return false;
    }
    var memberExpressionOptimisationVisitor = {
      Scope(path, state) {
        if (!path.scope.bindingIdentifierEquals(state.name, state.outerBinding)) {
          path.skip();
        }
      },
      Flow(path) {
        if (path.isTypeCastExpression()) return;
        path.skip();
      },
      Function(path, state) {
        const oldNoOptimise = state.noOptimise;
        state.noOptimise = true;
        path.traverse(memberExpressionOptimisationVisitor, state);
        state.noOptimise = oldNoOptimise;
        path.skip();
      },
      ReferencedIdentifier(path, state) {
        const { node } = path;
        if (node.name === 'arguments') {
          state.deopted = true;
        }
        if (!referencesRest(path, state)) return;
        if (state.noOptimise) {
          state.deopted = true;
        } else {
          const { parentPath } = path;
          if (parentPath.listKey === 'params' && parentPath.key < state.offset) {
            return;
          }
          if (
            parentPath.isMemberExpression({
              object: node
            })
          ) {
            const grandparentPath = parentPath.parentPath;
            const argsOptEligible =
              !state.deopted &&
              !(
                (grandparentPath.isAssignmentExpression() && parentPath.node === grandparentPath.node.left) ||
                grandparentPath.isLVal() ||
                grandparentPath.isForXStatement() ||
                grandparentPath.isUpdateExpression() ||
                grandparentPath.isUnaryExpression({
                  operator: 'delete'
                }) ||
                ((grandparentPath.isCallExpression() || grandparentPath.isNewExpression()) &&
                  parentPath.node === grandparentPath.node.callee)
              );
            if (argsOptEligible) {
              if (parentPath.node.computed) {
                if (parentPath.get('property').isBaseType('number')) {
                  state.candidates.push({
                    cause: 'indexGetter',
                    path
                  });
                  return;
                }
              } else if (parentPath.node.property.name === 'length') {
                state.candidates.push({
                  cause: 'lengthGetter',
                  path
                });
                return;
              }
            }
          }
          if (state.offset === 0 && parentPath.isSpreadElement()) {
            const call = parentPath.parentPath;
            if (call.isCallExpression() && call.node.arguments.length === 1) {
              state.candidates.push({
                cause: 'argSpread',
                path
              });
              return;
            }
          }
          state.references.push(path);
        }
      },
      BindingIdentifier(path, state) {
        if (referencesRest(path, state)) {
          state.deopted = true;
        }
      }
    };
    function getParamsCount(node) {
      let count = node.params.length;
      if (
        count > 0 &&
        _core.types.isIdentifier(node.params[0], {
          name: 'this'
        })
      ) {
        count -= 1;
      }
      return count;
    }
    function hasRest(node) {
      const length = node.params.length;
      return length > 0 && _core.types.isRestElement(node.params[length - 1]);
    }
    function optimiseIndexGetter(path, argsId, offset) {
      const offsetLiteral = _core.types.numericLiteral(offset);
      let index;
      const parent = path.parent;
      if (_core.types.isNumericLiteral(parent.property)) {
        index = _core.types.numericLiteral(parent.property.value + offset);
      } else if (offset === 0) {
        index = parent.property;
      } else {
        index = _core.types.binaryExpression('+', parent.property, _core.types.cloneNode(offsetLiteral));
      }
      const { scope, parentPath } = path;
      if (!scope.isPure(index)) {
        const temp = scope.generateUidIdentifierBasedOnNode(index);
        scope.push({
          id: temp,
          kind: 'var'
        });
        parentPath.replaceWith(
          restIndexImpure({
            ARGUMENTS: argsId,
            OFFSET: offsetLiteral,
            INDEX: index,
            REF: _core.types.cloneNode(temp)
          })
        );
      } else {
        parentPath.replaceWith(
          restIndex({
            ARGUMENTS: argsId,
            OFFSET: offsetLiteral,
            INDEX: index
          })
        );
        const replacedParentPath = parentPath;
        const offsetTestPath = replacedParentPath.get('test');
        const valRes = offsetTestPath.get('left').evaluate();
        if (valRes.confident) {
          if (valRes.value === true) {
            replacedParentPath.replaceWith(scope.buildUndefinedNode());
          } else {
            offsetTestPath.replaceWith(offsetTestPath.get('right'));
          }
        }
      }
    }
    function optimiseLengthGetter(path, argsId, offset) {
      if (offset) {
        path.parentPath.replaceWith(
          restLength({
            ARGUMENTS: argsId,
            OFFSET: _core.types.numericLiteral(offset)
          })
        );
      } else {
        path.replaceWith(argsId);
      }
    }
    function convertFunctionRest(path) {
      const { node, scope } = path;
      if (!hasRest(node)) return false;
      const restPath = path.get(`params.${node.params.length - 1}.argument`);
      if (!restPath.isIdentifier()) {
        const shadowedParams = /* @__PURE__ */ new Set();
        (0, _shadowUtils.collectShadowedParamsNames)(restPath, path.scope, shadowedParams);
        let needsIIFE = shadowedParams.size > 0;
        if (!needsIIFE) {
          const state2 = {
            needsOuterBinding: false,
            scope
          };
          restPath.traverse(_shadowUtils.iifeVisitor, state2);
          needsIIFE = state2.needsOuterBinding;
        }
        if (needsIIFE) {
          path.ensureBlock();
          path.set(
            'body',
            _core.types.blockStatement([(0, _shadowUtils.buildScopeIIFE)(shadowedParams, path.node.body)])
          );
        }
      }
      let rest = restPath.node;
      node.params.pop();
      if (_core.types.isPattern(rest)) {
        const pattern = rest;
        rest = scope.generateUidIdentifier('ref');
        const declar = _core.types.variableDeclaration('let', [_core.types.variableDeclarator(pattern, rest)]);
        path.ensureBlock();
        node.body.body.unshift(declar);
      } else if (rest.name === 'arguments') {
        scope.rename(rest.name);
      }
      const argsId = _core.types.identifier('arguments');
      const paramsCount = getParamsCount(node);
      const state = {
        references: [],
        offset: paramsCount,
        argumentsNode: argsId,
        outerBinding: scope.getBindingIdentifier(rest.name),
        candidates: [],
        name: rest.name,
        deopted: false
      };
      path.traverse(memberExpressionOptimisationVisitor, state);
      if (!state.deopted && !state.references.length) {
        for (const { path: path2, cause } of state.candidates) {
          const clonedArgsId = _core.types.cloneNode(argsId);
          switch (cause) {
            case 'indexGetter':
              optimiseIndexGetter(path2, clonedArgsId, state.offset);
              break;
            case 'lengthGetter':
              optimiseLengthGetter(path2, clonedArgsId, state.offset);
              break;
            default:
              path2.replaceWith(clonedArgsId);
          }
        }
        return true;
      }
      state.references.push(...state.candidates.map(({ path: path2 }) => path2));
      const start = _core.types.numericLiteral(paramsCount);
      const key = scope.generateUidIdentifier('key');
      const len = scope.generateUidIdentifier('len');
      let arrKey, arrLen;
      if (paramsCount) {
        arrKey = _core.types.binaryExpression('-', _core.types.cloneNode(key), _core.types.cloneNode(start));
        arrLen = _core.types.conditionalExpression(
          _core.types.binaryExpression('>', _core.types.cloneNode(len), _core.types.cloneNode(start)),
          _core.types.binaryExpression('-', _core.types.cloneNode(len), _core.types.cloneNode(start)),
          _core.types.numericLiteral(0)
        );
      } else {
        arrKey = _core.types.identifier(key.name);
        arrLen = _core.types.identifier(len.name);
      }
      const loop = buildRest({
        ARGUMENTS: argsId,
        ARRAY_KEY: arrKey,
        ARRAY_LEN: arrLen,
        START: start,
        ARRAY: rest,
        KEY: key,
        LEN: len
      });
      if (state.deopted) {
        node.body.body.unshift(loop);
      } else {
        let target = path.getEarliestCommonAncestorFrom(state.references).getStatementParent();
        target.findParent(path2 => {
          if (path2.isLoop()) {
            target = path2;
          } else {
            return path2.isFunction();
          }
        });
        target.insertBefore(loop);
      }
      return true;
    }
  }
});

// esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/index.js
var require_lib = __commonJS({
  'esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/node_modules/@babel/plugin-transform-parameters/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    Object.defineProperty(exports, 'convertFunctionParams', {
      enumerable: true,
      get: function() {
        return _params.default;
      }
    });
    exports.default = void 0;
    var _helperPluginUtils = ___babel_helper_plugin_utils$;
    var _params = require_params();
    var _rest = require_rest();
    var _default = (0, _helperPluginUtils.declare)((api, options) => {
      var _api$assumption, _api$assumption2;
      api.assertVersion(7);
      const ignoreFunctionLength =
        (_api$assumption = api.assumption('ignoreFunctionLength')) != null ? _api$assumption : options.loose;
      const noNewArrows = (_api$assumption2 = api.assumption('noNewArrows')) != null ? _api$assumption2 : true;
      return {
        name: 'transform-parameters',
        visitor: {
          Function(path) {
            if (
              path.isArrowFunctionExpression() &&
              path.get('params').some(param => param.isRestElement() || param.isAssignmentPattern())
            ) {
              path.arrowFunctionToExpression({
                noNewArrows
              });
              if (!path.isFunctionExpression()) return;
            }
            const convertedRest = (0, _rest.default)(path);
            const convertedParams = (0, _params.default)(path, ignoreFunctionLength);
            if (convertedRest || convertedParams) {
              path.scope.crawl();
            }
          }
        }
      };
    });
    exports.default = _default;
  }
});

// esm-build-cb0896e0fee51a25e4fd0b40ee23f9888b4445a6-73bef320/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { convertFunctionParams } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, convertFunctionParams, mod_default as default };
