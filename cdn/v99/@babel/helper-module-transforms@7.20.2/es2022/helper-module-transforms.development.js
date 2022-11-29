/* esm.sh - esbuild bundle(@babel/helper-module-transforms@7.20.2) es2022 development */
import * as ___babel_helper_split_export_declaration$ from '/cdn/v99/@babel/helper-split-export-declaration@7.18.6/es2022/helper-split-export-declaration.development.js';
import __path$ from '/cdn/v99/path-browserify@1.0.1/es2022/path-browserify.development.bundle.js';
import * as ___babel_helper_simple_access$ from '/cdn/v99/@babel/helper-simple-access@7.20.2/es2022/helper-simple-access.development.js';
import __assert$ from '/cdn/v99/assert@2.0.0/es2022/assert.development.bundle.js';
import ___babel_helper_validator_identifier$ from '/cdn/v99/@babel/helper-validator-identifier@7.19.1/es2022/helper-validator-identifier.development.js';
import * as ___babel_traverse$ from '/cdn/v99/@babel/traverse@7.20.1/es2022/traverse.development.js';
import * as ___babel_helper_environment_visitor$ from '/cdn/v99/@babel/helper-environment-visitor@7.18.9/es2022/helper-environment-visitor.development.js';
import ___babel_helper_module_imports$ from '/cdn/v99/@babel/helper-module-imports@7.18.6/es2022/helper-module-imports.development.js';
import * as ___babel_template$ from '/cdn/v99/@babel/template@7.18.10/es2022/template.development.js';
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

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/rewrite-this.js
var require_rewrite_this = __commonJS({
  'esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/rewrite-this.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = rewriteThis2;
    var _helperEnvironmentVisitor = ___babel_helper_environment_visitor$;
    var _traverse = ___babel_traverse$;
    var _t = ___babel_types$;
    var { numericLiteral, unaryExpression } = _t;
    var rewriteThisVisitor = _traverse.default.visitors.merge([
      _helperEnvironmentVisitor.default,
      {
        ThisExpression(path) {
          path.replaceWith(unaryExpression('void', numericLiteral(0), true));
        }
      }
    ]);
    function rewriteThis2(programPath) {
      (0, _traverse.default)(
        programPath.node,
        Object.assign({}, rewriteThisVisitor, {
          noScope: true
        })
      );
    }
  }
});

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/rewrite-live-references.js
var require_rewrite_live_references = __commonJS({
  'esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/rewrite-live-references.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = rewriteLiveReferences;
    var _assert = __assert$;
    var _t = ___babel_types$;
    var _template = ___babel_template$;
    var _helperSimpleAccess = ___babel_helper_simple_access$;
    var {
      assignmentExpression,
      callExpression,
      cloneNode,
      expressionStatement,
      getOuterBindingIdentifiers,
      identifier,
      isMemberExpression,
      isVariableDeclaration,
      jsxIdentifier,
      jsxMemberExpression,
      memberExpression,
      numericLiteral,
      sequenceExpression,
      stringLiteral,
      variableDeclaration,
      variableDeclarator
    } = _t;
    function isInType(path) {
      do {
        switch (path.parent.type) {
          case 'TSTypeAnnotation':
          case 'TSTypeAliasDeclaration':
          case 'TSTypeReference':
          case 'TypeAnnotation':
          case 'TypeAlias':
            return true;
          case 'ExportSpecifier':
            return path.parentPath.parent.exportKind === 'type';
          default:
            if (path.parentPath.isStatement() || path.parentPath.isExpression()) {
              return false;
            }
        }
      } while ((path = path.parentPath));
    }
    function rewriteLiveReferences(programPath, metadata) {
      const imported = /* @__PURE__ */ new Map();
      const exported = /* @__PURE__ */ new Map();
      const requeueInParent = path => {
        programPath.requeue(path);
      };
      for (const [source, data] of metadata.source) {
        for (const [localName, importName] of data.imports) {
          imported.set(localName, [source, importName, null]);
        }
        for (const localName of data.importsNamespace) {
          imported.set(localName, [source, null, localName]);
        }
      }
      for (const [local, data] of metadata.local) {
        let exportMeta = exported.get(local);
        if (!exportMeta) {
          exportMeta = [];
          exported.set(local, exportMeta);
        }
        exportMeta.push(...data.names);
      }
      const rewriteBindingInitVisitorState = {
        metadata,
        requeueInParent,
        scope: programPath.scope,
        exported
      };
      programPath.traverse(rewriteBindingInitVisitor, rewriteBindingInitVisitorState);
      (0, _helperSimpleAccess.default)(
        programPath,
        /* @__PURE__ */ new Set([...Array.from(imported.keys()), ...Array.from(exported.keys())]),
        false
      );
      const rewriteReferencesVisitorState = {
        seen: /* @__PURE__ */ new WeakSet(),
        metadata,
        requeueInParent,
        scope: programPath.scope,
        imported,
        exported,
        buildImportReference: ([source, importName, localName], identNode) => {
          const meta = metadata.source.get(source);
          if (localName) {
            if (meta.lazy) {
              identNode = callExpression(identNode, []);
            }
            return identNode;
          }
          let namespace = identifier(meta.name);
          if (meta.lazy) namespace = callExpression(namespace, []);
          if (importName === 'default' && meta.interop === 'node-default') {
            return namespace;
          }
          const computed = metadata.stringSpecifiers.has(importName);
          return memberExpression(namespace, computed ? stringLiteral(importName) : identifier(importName), computed);
        }
      };
      programPath.traverse(rewriteReferencesVisitor, rewriteReferencesVisitorState);
    }
    var rewriteBindingInitVisitor = {
      Scope(path) {
        path.skip();
      },
      ClassDeclaration(path) {
        const { requeueInParent, exported, metadata } = this;
        const { id } = path.node;
        if (!id) throw new Error('Expected class to have a name');
        const localName = id.name;
        const exportNames = exported.get(localName) || [];
        if (exportNames.length > 0) {
          const statement = expressionStatement(
            buildBindingExportAssignmentExpression(metadata, exportNames, identifier(localName), path.scope)
          );
          statement._blockHoist = path.node._blockHoist;
          requeueInParent(path.insertAfter(statement)[0]);
        }
      },
      VariableDeclaration(path) {
        const { requeueInParent, exported, metadata } = this;
        Object.keys(path.getOuterBindingIdentifiers()).forEach(localName => {
          const exportNames = exported.get(localName) || [];
          if (exportNames.length > 0) {
            const statement = expressionStatement(
              buildBindingExportAssignmentExpression(metadata, exportNames, identifier(localName), path.scope)
            );
            statement._blockHoist = path.node._blockHoist;
            requeueInParent(path.insertAfter(statement)[0]);
          }
        });
      }
    };
    var buildBindingExportAssignmentExpression = (metadata, exportNames, localExpr, scope) => {
      const exportsObjectName = metadata.exportName;
      for (let currentScope = scope; currentScope != null; currentScope = currentScope.parent) {
        if (currentScope.hasOwnBinding(exportsObjectName)) {
          currentScope.rename(exportsObjectName);
        }
      }
      return (exportNames || []).reduce((expr, exportName) => {
        const { stringSpecifiers } = metadata;
        const computed = stringSpecifiers.has(exportName);
        return assignmentExpression(
          '=',
          memberExpression(
            identifier(exportsObjectName),
            computed ? stringLiteral(exportName) : identifier(exportName),
            computed
          ),
          expr
        );
      }, localExpr);
    };
    var buildImportThrow = localName => {
      return _template.default.expression.ast`
    (function() {
      throw new Error('"' + '${localName}' + '" is read-only.');
    })()
  `;
    };
    var rewriteReferencesVisitor = {
      ReferencedIdentifier(path) {
        const { seen, buildImportReference, scope, imported, requeueInParent } = this;
        if (seen.has(path.node)) return;
        seen.add(path.node);
        const localName = path.node.name;
        const importData = imported.get(localName);
        if (importData) {
          if (isInType(path)) {
            throw path.buildCodeFrameError(
              `Cannot transform the imported binding "${localName}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`
            );
          }
          const localBinding = path.scope.getBinding(localName);
          const rootBinding = scope.getBinding(localName);
          if (rootBinding !== localBinding) return;
          const ref = buildImportReference(importData, path.node);
          ref.loc = path.node.loc;
          if (
            (path.parentPath.isCallExpression({
              callee: path.node
            }) ||
              path.parentPath.isOptionalCallExpression({
                callee: path.node
              }) ||
              path.parentPath.isTaggedTemplateExpression({
                tag: path.node
              })) &&
            isMemberExpression(ref)
          ) {
            path.replaceWith(sequenceExpression([numericLiteral(0), ref]));
          } else if (path.isJSXIdentifier() && isMemberExpression(ref)) {
            const { object, property } = ref;
            path.replaceWith(jsxMemberExpression(jsxIdentifier(object.name), jsxIdentifier(property.name)));
          } else {
            path.replaceWith(ref);
          }
          requeueInParent(path);
          path.skip();
        }
      },
      UpdateExpression(path) {
        const { scope, seen, imported, exported, requeueInParent, buildImportReference } = this;
        if (seen.has(path.node)) return;
        seen.add(path.node);
        const arg = path.get('argument');
        if (arg.isMemberExpression()) return;
        const update = path.node;
        if (arg.isIdentifier()) {
          const localName = arg.node.name;
          if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
            return;
          }
          const exportedNames = exported.get(localName);
          const importData = imported.get(localName);
          if ((exportedNames == null ? void 0 : exportedNames.length) > 0 || importData) {
            if (importData) {
              path.replaceWith(
                assignmentExpression(
                  update.operator[0] + '=',
                  buildImportReference(importData, arg.node),
                  buildImportThrow(localName)
                )
              );
            } else if (update.prefix) {
              path.replaceWith(
                buildBindingExportAssignmentExpression(this.metadata, exportedNames, cloneNode(update), path.scope)
              );
            } else {
              const ref = scope.generateDeclaredUidIdentifier(localName);
              path.replaceWith(
                sequenceExpression([
                  assignmentExpression('=', cloneNode(ref), cloneNode(update)),
                  buildBindingExportAssignmentExpression(
                    this.metadata,
                    exportedNames,
                    identifier(localName),
                    path.scope
                  ),
                  cloneNode(ref)
                ])
              );
            }
          }
        }
        requeueInParent(path);
        path.skip();
      },
      AssignmentExpression: {
        exit(path) {
          const { scope, seen, imported, exported, requeueInParent, buildImportReference } = this;
          if (seen.has(path.node)) return;
          seen.add(path.node);
          const left = path.get('left');
          if (left.isMemberExpression()) return;
          if (left.isIdentifier()) {
            const localName = left.node.name;
            if (scope.getBinding(localName) !== path.scope.getBinding(localName)) {
              return;
            }
            const exportedNames = exported.get(localName);
            const importData = imported.get(localName);
            if ((exportedNames == null ? void 0 : exportedNames.length) > 0 || importData) {
              _assert(path.node.operator === '=', 'Path was not simplified');
              const assignment = path.node;
              if (importData) {
                assignment.left = buildImportReference(importData, left.node);
                assignment.right = sequenceExpression([assignment.right, buildImportThrow(localName)]);
              }
              path.replaceWith(
                buildBindingExportAssignmentExpression(this.metadata, exportedNames, assignment, path.scope)
              );
              requeueInParent(path);
            }
          } else {
            const ids = left.getOuterBindingIdentifiers();
            const programScopeIds = Object.keys(ids).filter(
              localName => scope.getBinding(localName) === path.scope.getBinding(localName)
            );
            const id = programScopeIds.find(localName => imported.has(localName));
            if (id) {
              path.node.right = sequenceExpression([path.node.right, buildImportThrow(id)]);
            }
            const items = [];
            programScopeIds.forEach(localName => {
              const exportedNames = exported.get(localName) || [];
              if (exportedNames.length > 0) {
                items.push(
                  buildBindingExportAssignmentExpression(
                    this.metadata,
                    exportedNames,
                    identifier(localName),
                    path.scope
                  )
                );
              }
            });
            if (items.length > 0) {
              let node = sequenceExpression(items);
              if (path.parentPath.isExpressionStatement()) {
                node = expressionStatement(node);
                node._blockHoist = path.parentPath.node._blockHoist;
              }
              const statement = path.insertAfter(node)[0];
              requeueInParent(statement);
            }
          }
        }
      },
      'ForOfStatement|ForInStatement'(path) {
        const { scope, node } = path;
        const { left } = node;
        const { exported, imported, scope: programScope } = this;
        if (!isVariableDeclaration(left)) {
          let didTransformExport = false,
            importConstViolationName;
          const loopBodyScope = path.get('body').scope;
          for (const name of Object.keys(getOuterBindingIdentifiers(left))) {
            if (programScope.getBinding(name) === scope.getBinding(name)) {
              if (exported.has(name)) {
                didTransformExport = true;
                if (loopBodyScope.hasOwnBinding(name)) {
                  loopBodyScope.rename(name);
                }
              }
              if (imported.has(name) && !importConstViolationName) {
                importConstViolationName = name;
              }
            }
          }
          if (!didTransformExport && !importConstViolationName) {
            return;
          }
          path.ensureBlock();
          const bodyPath = path.get('body');
          const newLoopId = scope.generateUidIdentifierBasedOnNode(left);
          path.get('left').replaceWith(variableDeclaration('let', [variableDeclarator(cloneNode(newLoopId))]));
          scope.registerDeclaration(path.get('left'));
          if (didTransformExport) {
            bodyPath.unshiftContainer('body', expressionStatement(assignmentExpression('=', left, newLoopId)));
          }
          if (importConstViolationName) {
            bodyPath.unshiftContainer('body', expressionStatement(buildImportThrow(importConstViolationName)));
          }
        }
      }
    };
  }
});

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/normalize-and-load-metadata.js
var require_normalize_and_load_metadata = __commonJS({
  'esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/normalize-and-load-metadata.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = normalizeModuleAndLoadMetadata;
    exports.hasExports = hasExports2;
    exports.isSideEffectImport = isSideEffectImport2;
    exports.validateImportInteropOption = validateImportInteropOption;
    var _path = __path$;
    var _helperValidatorIdentifier = ___babel_helper_validator_identifier$;
    var _helperSplitExportDeclaration = ___babel_helper_split_export_declaration$;
    function hasExports2(metadata) {
      return metadata.hasExports;
    }
    function isSideEffectImport2(source) {
      return (
        source.imports.size === 0 &&
        source.importsNamespace.size === 0 &&
        source.reexports.size === 0 &&
        source.reexportNamespace.size === 0 &&
        !source.reexportAll
      );
    }
    function validateImportInteropOption(importInterop) {
      if (
        typeof importInterop !== 'function' &&
        importInterop !== 'none' &&
        importInterop !== 'babel' &&
        importInterop !== 'node'
      ) {
        throw new Error(
          `.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${importInterop}).`
        );
      }
      return importInterop;
    }
    function resolveImportInterop(importInterop, source, filename) {
      if (typeof importInterop === 'function') {
        return validateImportInteropOption(importInterop(source, filename));
      }
      return importInterop;
    }
    function normalizeModuleAndLoadMetadata(
      programPath,
      exportName,
      { importInterop, initializeReexports = false, lazy = false, esNamespaceOnly = false, filename }
    ) {
      if (!exportName) {
        exportName = programPath.scope.generateUidIdentifier('exports').name;
      }
      const stringSpecifiers = /* @__PURE__ */ new Set();
      nameAnonymousExports(programPath);
      const { local, source, hasExports: hasExports3 } = getModuleMetadata(
        programPath,
        {
          initializeReexports,
          lazy
        },
        stringSpecifiers
      );
      removeModuleDeclarations(programPath);
      for (const [, metadata] of source) {
        if (metadata.importsNamespace.size > 0) {
          metadata.name = metadata.importsNamespace.values().next().value;
        }
        const resolvedInterop = resolveImportInterop(importInterop, metadata.source, filename);
        if (resolvedInterop === 'none') {
          metadata.interop = 'none';
        } else if (resolvedInterop === 'node' && metadata.interop === 'namespace') {
          metadata.interop = 'node-namespace';
        } else if (resolvedInterop === 'node' && metadata.interop === 'default') {
          metadata.interop = 'node-default';
        } else if (esNamespaceOnly && metadata.interop === 'namespace') {
          metadata.interop = 'default';
        }
      }
      return {
        exportName,
        exportNameListName: null,
        hasExports: hasExports3,
        local,
        source,
        stringSpecifiers
      };
    }
    function getExportSpecifierName(path, stringSpecifiers) {
      if (path.isIdentifier()) {
        return path.node.name;
      } else if (path.isStringLiteral()) {
        const stringValue = path.node.value;
        if (!(0, _helperValidatorIdentifier.isIdentifierName)(stringValue)) {
          stringSpecifiers.add(stringValue);
        }
        return stringValue;
      } else {
        throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${path.node.type}`);
      }
    }
    function assertExportSpecifier(path) {
      if (path.isExportSpecifier()) {
        return;
      } else if (path.isExportNamespaceSpecifier()) {
        throw path.buildCodeFrameError(
          'Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`.'
        );
      } else {
        throw path.buildCodeFrameError('Unexpected export specifier type');
      }
    }
    function getModuleMetadata(programPath, { lazy, initializeReexports }, stringSpecifiers) {
      const localData = getLocalExportMetadata(programPath, initializeReexports, stringSpecifiers);
      const sourceData = /* @__PURE__ */ new Map();
      const getData = sourceNode => {
        const source = sourceNode.value;
        let data = sourceData.get(source);
        if (!data) {
          data = {
            name: programPath.scope.generateUidIdentifier((0, _path.basename)(source, (0, _path.extname)(source))).name,
            interop: 'none',
            loc: null,
            imports: /* @__PURE__ */ new Map(),
            importsNamespace: /* @__PURE__ */ new Set(),
            reexports: /* @__PURE__ */ new Map(),
            reexportNamespace: /* @__PURE__ */ new Set(),
            reexportAll: null,
            lazy: false,
            source
          };
          sourceData.set(source, data);
        }
        return data;
      };
      let hasExports3 = false;
      programPath.get('body').forEach(child => {
        if (child.isImportDeclaration()) {
          const data = getData(child.node.source);
          if (!data.loc) data.loc = child.node.loc;
          child.get('specifiers').forEach(spec => {
            if (spec.isImportDefaultSpecifier()) {
              const localName = spec.get('local').node.name;
              data.imports.set(localName, 'default');
              const reexport = localData.get(localName);
              if (reexport) {
                localData.delete(localName);
                reexport.names.forEach(name => {
                  data.reexports.set(name, 'default');
                });
              }
            } else if (spec.isImportNamespaceSpecifier()) {
              const localName = spec.get('local').node.name;
              data.importsNamespace.add(localName);
              const reexport = localData.get(localName);
              if (reexport) {
                localData.delete(localName);
                reexport.names.forEach(name => {
                  data.reexportNamespace.add(name);
                });
              }
            } else if (spec.isImportSpecifier()) {
              const importName = getExportSpecifierName(spec.get('imported'), stringSpecifiers);
              const localName = spec.get('local').node.name;
              data.imports.set(localName, importName);
              const reexport = localData.get(localName);
              if (reexport) {
                localData.delete(localName);
                reexport.names.forEach(name => {
                  data.reexports.set(name, importName);
                });
              }
            }
          });
        } else if (child.isExportAllDeclaration()) {
          hasExports3 = true;
          const data = getData(child.node.source);
          if (!data.loc) data.loc = child.node.loc;
          data.reexportAll = {
            loc: child.node.loc
          };
        } else if (child.isExportNamedDeclaration() && child.node.source) {
          hasExports3 = true;
          const data = getData(child.node.source);
          if (!data.loc) data.loc = child.node.loc;
          child.get('specifiers').forEach(spec => {
            assertExportSpecifier(spec);
            const importName = getExportSpecifierName(spec.get('local'), stringSpecifiers);
            const exportName = getExportSpecifierName(spec.get('exported'), stringSpecifiers);
            data.reexports.set(exportName, importName);
            if (exportName === '__esModule') {
              throw spec.get('exported').buildCodeFrameError('Illegal export "__esModule".');
            }
          });
        } else if (child.isExportNamedDeclaration() || child.isExportDefaultDeclaration()) {
          hasExports3 = true;
        }
      });
      for (const metadata of sourceData.values()) {
        let needsDefault = false;
        let needsNamed = false;
        if (metadata.importsNamespace.size > 0) {
          needsDefault = true;
          needsNamed = true;
        }
        if (metadata.reexportAll) {
          needsNamed = true;
        }
        for (const importName of metadata.imports.values()) {
          if (importName === 'default') needsDefault = true;
          else needsNamed = true;
        }
        for (const importName of metadata.reexports.values()) {
          if (importName === 'default') needsDefault = true;
          else needsNamed = true;
        }
        if (needsDefault && needsNamed) {
          metadata.interop = 'namespace';
        } else if (needsDefault) {
          metadata.interop = 'default';
        }
      }
      for (const [source, metadata] of sourceData) {
        if (lazy !== false && !(isSideEffectImport2(metadata) || metadata.reexportAll)) {
          if (lazy === true) {
            metadata.lazy = !/\./.test(source);
          } else if (Array.isArray(lazy)) {
            metadata.lazy = lazy.indexOf(source) !== -1;
          } else if (typeof lazy === 'function') {
            metadata.lazy = lazy(source);
          } else {
            throw new Error(`.lazy must be a boolean, string array, or function`);
          }
        }
      }
      return {
        hasExports: hasExports3,
        local: localData,
        source: sourceData
      };
    }
    function getLocalExportMetadata(programPath, initializeReexports, stringSpecifiers) {
      const bindingKindLookup = /* @__PURE__ */ new Map();
      programPath.get('body').forEach(child => {
        let kind;
        if (child.isImportDeclaration()) {
          kind = 'import';
        } else {
          if (child.isExportDefaultDeclaration()) {
            child = child.get('declaration');
          }
          if (child.isExportNamedDeclaration()) {
            if (child.node.declaration) {
              child = child.get('declaration');
            } else if (initializeReexports && child.node.source && child.get('source').isStringLiteral()) {
              child.get('specifiers').forEach(spec => {
                assertExportSpecifier(spec);
                bindingKindLookup.set(spec.get('local').node.name, 'block');
              });
              return;
            }
          }
          if (child.isFunctionDeclaration()) {
            kind = 'hoisted';
          } else if (child.isClassDeclaration()) {
            kind = 'block';
          } else if (
            child.isVariableDeclaration({
              kind: 'var'
            })
          ) {
            kind = 'var';
          } else if (child.isVariableDeclaration()) {
            kind = 'block';
          } else {
            return;
          }
        }
        Object.keys(child.getOuterBindingIdentifiers()).forEach(name => {
          bindingKindLookup.set(name, kind);
        });
      });
      const localMetadata = /* @__PURE__ */ new Map();
      const getLocalMetadata = idPath => {
        const localName = idPath.node.name;
        let metadata = localMetadata.get(localName);
        if (!metadata) {
          const kind = bindingKindLookup.get(localName);
          if (kind === void 0) {
            throw idPath.buildCodeFrameError(`Exporting local "${localName}", which is not declared.`);
          }
          metadata = {
            names: [],
            kind
          };
          localMetadata.set(localName, metadata);
        }
        return metadata;
      };
      programPath.get('body').forEach(child => {
        if (child.isExportNamedDeclaration() && (initializeReexports || !child.node.source)) {
          if (child.node.declaration) {
            const declaration = child.get('declaration');
            const ids = declaration.getOuterBindingIdentifierPaths();
            Object.keys(ids).forEach(name => {
              if (name === '__esModule') {
                throw declaration.buildCodeFrameError('Illegal export "__esModule".');
              }
              getLocalMetadata(ids[name]).names.push(name);
            });
          } else {
            child.get('specifiers').forEach(spec => {
              const local = spec.get('local');
              const exported = spec.get('exported');
              const localMetadata2 = getLocalMetadata(local);
              const exportName = getExportSpecifierName(exported, stringSpecifiers);
              if (exportName === '__esModule') {
                throw exported.buildCodeFrameError('Illegal export "__esModule".');
              }
              localMetadata2.names.push(exportName);
            });
          }
        } else if (child.isExportDefaultDeclaration()) {
          const declaration = child.get('declaration');
          if (declaration.isFunctionDeclaration() || declaration.isClassDeclaration()) {
            getLocalMetadata(declaration.get('id')).names.push('default');
          } else {
            throw declaration.buildCodeFrameError('Unexpected default expression export.');
          }
        }
      });
      return localMetadata;
    }
    function nameAnonymousExports(programPath) {
      programPath.get('body').forEach(child => {
        if (!child.isExportDefaultDeclaration()) return;
        (0, _helperSplitExportDeclaration.default)(child);
      });
    }
    function removeModuleDeclarations(programPath) {
      programPath.get('body').forEach(child => {
        if (child.isImportDeclaration()) {
          child.remove();
        } else if (child.isExportNamedDeclaration()) {
          if (child.node.declaration) {
            child.node.declaration._blockHoist = child.node._blockHoist;
            child.replaceWith(child.node.declaration);
          } else {
            child.remove();
          }
        } else if (child.isExportDefaultDeclaration()) {
          const declaration = child.get('declaration');
          if (declaration.isFunctionDeclaration() || declaration.isClassDeclaration()) {
            declaration._blockHoist = child.node._blockHoist;
            child.replaceWith(declaration);
          } else {
            throw declaration.buildCodeFrameError('Unexpected default expression export.');
          }
        } else if (child.isExportAllDeclaration()) {
          child.remove();
        }
      });
    }
  }
});

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/dynamic-import.js
var require_dynamic_import = __commonJS({
  'esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/dynamic-import.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.getDynamicImportSource = getDynamicImportSource2;
    var t = ___babel_types$;
    var _template = ___babel_template$;
    function getDynamicImportSource2(node) {
      const [source] = node.arguments;
      return t.isStringLiteral(source) || t.isTemplateLiteral(source)
        ? source
        : _template.default.expression.ast`\`\${${source}}\``;
    }
  }
});

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/get-module-name.js
var require_get_module_name = __commonJS({
  'esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/get-module-name.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = getModuleName2;
    {
      const originalGetModuleName = getModuleName2;
      exports.default = getModuleName2 = function getModuleName3(rootOpts, pluginOpts) {
        var _pluginOpts$moduleId, _pluginOpts$moduleIds, _pluginOpts$getModule, _pluginOpts$moduleRoo;
        return originalGetModuleName(rootOpts, {
          moduleId: (_pluginOpts$moduleId = pluginOpts.moduleId) != null ? _pluginOpts$moduleId : rootOpts.moduleId,
          moduleIds:
            (_pluginOpts$moduleIds = pluginOpts.moduleIds) != null ? _pluginOpts$moduleIds : rootOpts.moduleIds,
          getModuleId:
            (_pluginOpts$getModule = pluginOpts.getModuleId) != null ? _pluginOpts$getModule : rootOpts.getModuleId,
          moduleRoot:
            (_pluginOpts$moduleRoo = pluginOpts.moduleRoot) != null ? _pluginOpts$moduleRoo : rootOpts.moduleRoot
        });
      };
    }
    function getModuleName2(rootOpts, pluginOpts) {
      const { filename, filenameRelative = filename, sourceRoot = pluginOpts.moduleRoot } = rootOpts;
      const { moduleId, moduleIds = !!moduleId, getModuleId, moduleRoot = sourceRoot } = pluginOpts;
      if (!moduleIds) return null;
      if (moduleId != null && !getModuleId) {
        return moduleId;
      }
      let moduleName = moduleRoot != null ? moduleRoot + '/' : '';
      if (filenameRelative) {
        const sourceRootReplacer = sourceRoot != null ? new RegExp('^' + sourceRoot + '/?') : '';
        moduleName += filenameRelative.replace(sourceRootReplacer, '').replace(/\.(\w*?)$/, '');
      }
      moduleName = moduleName.replace(/\\/g, '/');
      if (getModuleId) {
        return getModuleId(moduleName) || moduleName;
      } else {
        return moduleName;
      }
    }
  }
});

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/index.js
var require_lib = __commonJS({
  'esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/node_modules/@babel/helper-module-transforms/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.buildNamespaceInitStatements = buildNamespaceInitStatements2;
    exports.ensureStatementsHoisted = ensureStatementsHoisted2;
    Object.defineProperty(exports, 'getDynamicImportSource', {
      enumerable: true,
      get: function() {
        return _dynamicImport.getDynamicImportSource;
      }
    });
    Object.defineProperty(exports, 'getModuleName', {
      enumerable: true,
      get: function() {
        return _getModuleName.default;
      }
    });
    Object.defineProperty(exports, 'hasExports', {
      enumerable: true,
      get: function() {
        return _normalizeAndLoadMetadata.hasExports;
      }
    });
    Object.defineProperty(exports, 'isModule', {
      enumerable: true,
      get: function() {
        return _helperModuleImports.isModule;
      }
    });
    Object.defineProperty(exports, 'isSideEffectImport', {
      enumerable: true,
      get: function() {
        return _normalizeAndLoadMetadata.isSideEffectImport;
      }
    });
    exports.rewriteModuleStatementsAndPrepareHeader = rewriteModuleStatementsAndPrepareHeader2;
    Object.defineProperty(exports, 'rewriteThis', {
      enumerable: true,
      get: function() {
        return _rewriteThis.default;
      }
    });
    exports.wrapInterop = wrapInterop2;
    var _assert = __assert$;
    var _t = ___babel_types$;
    var _template = ___babel_template$;
    var _helperModuleImports = ___babel_helper_module_imports$;
    var _rewriteThis = require_rewrite_this();
    var _rewriteLiveReferences = require_rewrite_live_references();
    var _normalizeAndLoadMetadata = require_normalize_and_load_metadata();
    var _dynamicImport = require_dynamic_import();
    var _getModuleName = require_get_module_name();
    var {
      booleanLiteral,
      callExpression,
      cloneNode,
      directive,
      directiveLiteral,
      expressionStatement,
      identifier,
      isIdentifier,
      memberExpression,
      stringLiteral,
      valueToNode,
      variableDeclaration,
      variableDeclarator
    } = _t;
    function rewriteModuleStatementsAndPrepareHeader2(
      path,
      {
        loose,
        exportName,
        strict,
        allowTopLevelThis,
        strictMode,
        noInterop,
        importInterop = noInterop ? 'none' : 'babel',
        lazy,
        esNamespaceOnly,
        filename,
        constantReexports = loose,
        enumerableModuleMeta = loose,
        noIncompleteNsImportDetection
      }
    ) {
      (0, _normalizeAndLoadMetadata.validateImportInteropOption)(importInterop);
      _assert((0, _helperModuleImports.isModule)(path), 'Cannot process module statements in a script');
      path.node.sourceType = 'script';
      const meta = (0, _normalizeAndLoadMetadata.default)(path, exportName, {
        importInterop,
        initializeReexports: constantReexports,
        lazy,
        esNamespaceOnly,
        filename
      });
      if (!allowTopLevelThis) {
        (0, _rewriteThis.default)(path);
      }
      (0, _rewriteLiveReferences.default)(path, meta);
      if (strictMode !== false) {
        const hasStrict = path.node.directives.some(directive2 => {
          return directive2.value.value === 'use strict';
        });
        if (!hasStrict) {
          path.unshiftContainer('directives', directive(directiveLiteral('use strict')));
        }
      }
      const headers = [];
      if ((0, _normalizeAndLoadMetadata.hasExports)(meta) && !strict) {
        headers.push(buildESModuleHeader(meta, enumerableModuleMeta));
      }
      const nameList = buildExportNameListDeclaration(path, meta);
      if (nameList) {
        meta.exportNameListName = nameList.name;
        headers.push(nameList.statement);
      }
      headers.push(
        ...buildExportInitializationStatements(path, meta, constantReexports, noIncompleteNsImportDetection)
      );
      return {
        meta,
        headers
      };
    }
    function ensureStatementsHoisted2(statements) {
      statements.forEach(header => {
        header._blockHoist = 3;
      });
    }
    function wrapInterop2(programPath, expr, type) {
      if (type === 'none') {
        return null;
      }
      if (type === 'node-namespace') {
        return callExpression(programPath.hub.addHelper('interopRequireWildcard'), [expr, booleanLiteral(true)]);
      } else if (type === 'node-default') {
        return null;
      }
      let helper;
      if (type === 'default') {
        helper = 'interopRequireDefault';
      } else if (type === 'namespace') {
        helper = 'interopRequireWildcard';
      } else {
        throw new Error(`Unknown interop: ${type}`);
      }
      return callExpression(programPath.hub.addHelper(helper), [expr]);
    }
    function buildNamespaceInitStatements2(metadata, sourceMetadata, constantReexports = false) {
      const statements = [];
      let srcNamespace = identifier(sourceMetadata.name);
      if (sourceMetadata.lazy) srcNamespace = callExpression(srcNamespace, []);
      for (const localName of sourceMetadata.importsNamespace) {
        if (localName === sourceMetadata.name) continue;
        statements.push(
          _template.default.statement`var NAME = SOURCE;`({
            NAME: localName,
            SOURCE: cloneNode(srcNamespace)
          })
        );
      }
      if (constantReexports) {
        statements.push(...buildReexportsFromMeta(metadata, sourceMetadata, true));
      }
      for (const exportName of sourceMetadata.reexportNamespace) {
        statements.push(
          (sourceMetadata.lazy
            ? _template.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `
            : _template.default.statement`EXPORTS.NAME = NAMESPACE;`)({
            EXPORTS: metadata.exportName,
            NAME: exportName,
            NAMESPACE: cloneNode(srcNamespace)
          })
        );
      }
      if (sourceMetadata.reexportAll) {
        const statement = buildNamespaceReexport(metadata, cloneNode(srcNamespace), constantReexports);
        statement.loc = sourceMetadata.reexportAll.loc;
        statements.push(statement);
      }
      return statements;
    }
    var ReexportTemplate = {
      constant: _template.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,
      constantComputed: _template.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,
      spec: _template.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `
    };
    function buildReexportsFromMeta(meta, metadata, constantReexports) {
      const namespace = metadata.lazy ? callExpression(identifier(metadata.name), []) : identifier(metadata.name);
      const { stringSpecifiers } = meta;
      return Array.from(metadata.reexports, ([exportName, importName]) => {
        let NAMESPACE_IMPORT = cloneNode(namespace);
        if (importName === 'default' && metadata.interop === 'node-default') {
        } else if (stringSpecifiers.has(importName)) {
          NAMESPACE_IMPORT = memberExpression(NAMESPACE_IMPORT, stringLiteral(importName), true);
        } else {
          NAMESPACE_IMPORT = memberExpression(NAMESPACE_IMPORT, identifier(importName));
        }
        const astNodes = {
          EXPORTS: meta.exportName,
          EXPORT_NAME: exportName,
          NAMESPACE_IMPORT
        };
        if (constantReexports || isIdentifier(NAMESPACE_IMPORT)) {
          if (stringSpecifiers.has(exportName)) {
            return ReexportTemplate.constantComputed(astNodes);
          } else {
            return ReexportTemplate.constant(astNodes);
          }
        } else {
          return ReexportTemplate.spec(astNodes);
        }
      });
    }
    function buildESModuleHeader(metadata, enumerableModuleMeta = false) {
      return (enumerableModuleMeta
        ? _template.default.statement`
        EXPORTS.__esModule = true;
      `
        : _template.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({
        EXPORTS: metadata.exportName
      });
    }
    function buildNamespaceReexport(metadata, namespace, constantReexports) {
      return (constantReexports
        ? _template.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `
        : _template.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({
        NAMESPACE: namespace,
        EXPORTS: metadata.exportName,
        VERIFY_NAME_LIST: metadata.exportNameListName
          ? (0, _template.default)`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({
              EXPORTS_LIST: metadata.exportNameListName
            })
          : null
      });
    }
    function buildExportNameListDeclaration(programPath, metadata) {
      const exportedVars = /* @__PURE__ */ Object.create(null);
      for (const data of metadata.local.values()) {
        for (const name2 of data.names) {
          exportedVars[name2] = true;
        }
      }
      let hasReexport = false;
      for (const data of metadata.source.values()) {
        for (const exportName of data.reexports.keys()) {
          exportedVars[exportName] = true;
        }
        for (const exportName of data.reexportNamespace) {
          exportedVars[exportName] = true;
        }
        hasReexport = hasReexport || !!data.reexportAll;
      }
      if (!hasReexport || Object.keys(exportedVars).length === 0) return null;
      const name = programPath.scope.generateUidIdentifier('exportNames');
      delete exportedVars.default;
      return {
        name: name.name,
        statement: variableDeclaration('var', [variableDeclarator(name, valueToNode(exportedVars))])
      };
    }
    function buildExportInitializationStatements(
      programPath,
      metadata,
      constantReexports = false,
      noIncompleteNsImportDetection = false
    ) {
      const initStatements = [];
      for (const [localName, data] of metadata.local) {
        if (data.kind === 'import') {
        } else if (data.kind === 'hoisted') {
          initStatements.push([data.names[0], buildInitStatement(metadata, data.names, identifier(localName))]);
        } else if (!noIncompleteNsImportDetection) {
          for (const exportName of data.names) {
            initStatements.push([exportName, null]);
          }
        }
      }
      for (const data of metadata.source.values()) {
        if (!constantReexports) {
          const reexportsStatements = buildReexportsFromMeta(metadata, data, false);
          const reexports = [...data.reexports.keys()];
          for (let i = 0; i < reexportsStatements.length; i++) {
            initStatements.push([reexports[i], reexportsStatements[i]]);
          }
        }
        if (!noIncompleteNsImportDetection) {
          for (const exportName of data.reexportNamespace) {
            initStatements.push([exportName, null]);
          }
        }
      }
      initStatements.sort(([a], [b]) => {
        if (a < b) return -1;
        if (b < a) return 1;
        return 0;
      });
      const results = [];
      if (noIncompleteNsImportDetection) {
        for (const [, initStatement] of initStatements) {
          results.push(initStatement);
        }
      } else {
        const chunkSize = 100;
        for (let i = 0; i < initStatements.length; i += chunkSize) {
          let uninitializedExportNames = [];
          for (let j = 0; j < chunkSize && i + j < initStatements.length; j++) {
            const [exportName, initStatement] = initStatements[i + j];
            if (initStatement !== null) {
              if (uninitializedExportNames.length > 0) {
                results.push(
                  buildInitStatement(metadata, uninitializedExportNames, programPath.scope.buildUndefinedNode())
                );
                uninitializedExportNames = [];
              }
              results.push(initStatement);
            } else {
              uninitializedExportNames.push(exportName);
            }
          }
          if (uninitializedExportNames.length > 0) {
            results.push(
              buildInitStatement(metadata, uninitializedExportNames, programPath.scope.buildUndefinedNode())
            );
          }
        }
      }
      return results;
    }
    var InitTemplate = {
      computed: _template.default.expression`EXPORTS["NAME"] = VALUE`,
      default: _template.default.expression`EXPORTS.NAME = VALUE`
    };
    function buildInitStatement(metadata, exportNames, initExpr) {
      const { stringSpecifiers, exportName: EXPORTS } = metadata;
      return expressionStatement(
        exportNames.reduce((acc, exportName) => {
          const params = {
            EXPORTS,
            NAME: exportName,
            VALUE: acc
          };
          if (stringSpecifiers.has(exportName)) {
            return InitTemplate.computed(params);
          } else {
            return InitTemplate.default(params);
          }
        }, initExpr)
      );
    }
  }
});

// esm-build-8a22547dca37589158b3fdd890cc26017920db3e-84d73260/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var {
  buildNamespaceInitStatements,
  ensureStatementsHoisted,
  getDynamicImportSource,
  getModuleName,
  hasExports,
  isModule,
  isSideEffectImport,
  rewriteModuleStatementsAndPrepareHeader,
  rewriteThis,
  wrapInterop
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  __esModule,
  buildNamespaceInitStatements,
  mod_default as default,
  ensureStatementsHoisted,
  getDynamicImportSource,
  getModuleName,
  hasExports,
  isModule,
  isSideEffectImport,
  rewriteModuleStatementsAndPrepareHeader,
  rewriteThis,
  wrapInterop
};
