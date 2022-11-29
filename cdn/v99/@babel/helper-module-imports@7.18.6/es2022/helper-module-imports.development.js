/* esm.sh - esbuild bundle(@babel/helper-module-imports@7.18.6) es2022 development */
import ___babel_types$ from '/cdn/v99/@babel/types@7.20.2/es2022/types.development.js';
import __assert$ from '/cdn/v99/assert@2.0.0/es2022/assert.development.bundle.js';
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

// esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/import-builder.js
var require_import_builder = __commonJS({
  'esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/import-builder.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _assert = __assert$;
    var _t = ___babel_types$;
    var {
      callExpression,
      cloneNode,
      expressionStatement,
      identifier,
      importDeclaration,
      importDefaultSpecifier,
      importNamespaceSpecifier,
      importSpecifier,
      memberExpression,
      stringLiteral,
      variableDeclaration,
      variableDeclarator
    } = _t;
    var ImportBuilder = class {
      constructor(importedSource, scope, hub) {
        this._statements = [];
        this._resultName = null;
        this._importedSource = void 0;
        this._scope = scope;
        this._hub = hub;
        this._importedSource = importedSource;
      }
      done() {
        return {
          statements: this._statements,
          resultName: this._resultName
        };
      }
      import() {
        this._statements.push(importDeclaration([], stringLiteral(this._importedSource)));
        return this;
      }
      require() {
        this._statements.push(
          expressionStatement(callExpression(identifier('require'), [stringLiteral(this._importedSource)]))
        );
        return this;
      }
      namespace(name = 'namespace') {
        const local = this._scope.generateUidIdentifier(name);
        const statement = this._statements[this._statements.length - 1];
        _assert(statement.type === 'ImportDeclaration');
        _assert(statement.specifiers.length === 0);
        statement.specifiers = [importNamespaceSpecifier(local)];
        this._resultName = cloneNode(local);
        return this;
      }
      default(name) {
        const id = this._scope.generateUidIdentifier(name);
        const statement = this._statements[this._statements.length - 1];
        _assert(statement.type === 'ImportDeclaration');
        _assert(statement.specifiers.length === 0);
        statement.specifiers = [importDefaultSpecifier(id)];
        this._resultName = cloneNode(id);
        return this;
      }
      named(name, importName) {
        if (importName === 'default') return this.default(name);
        const id = this._scope.generateUidIdentifier(name);
        const statement = this._statements[this._statements.length - 1];
        _assert(statement.type === 'ImportDeclaration');
        _assert(statement.specifiers.length === 0);
        statement.specifiers = [importSpecifier(id, identifier(importName))];
        this._resultName = cloneNode(id);
        return this;
      }
      var(name) {
        const id = this._scope.generateUidIdentifier(name);
        let statement = this._statements[this._statements.length - 1];
        if (statement.type !== 'ExpressionStatement') {
          _assert(this._resultName);
          statement = expressionStatement(this._resultName);
          this._statements.push(statement);
        }
        this._statements[this._statements.length - 1] = variableDeclaration('var', [
          variableDeclarator(id, statement.expression)
        ]);
        this._resultName = cloneNode(id);
        return this;
      }
      defaultInterop() {
        return this._interop(this._hub.addHelper('interopRequireDefault'));
      }
      wildcardInterop() {
        return this._interop(this._hub.addHelper('interopRequireWildcard'));
      }
      _interop(callee) {
        const statement = this._statements[this._statements.length - 1];
        if (statement.type === 'ExpressionStatement') {
          statement.expression = callExpression(callee, [statement.expression]);
        } else if (statement.type === 'VariableDeclaration') {
          _assert(statement.declarations.length === 1);
          statement.declarations[0].init = callExpression(callee, [statement.declarations[0].init]);
        } else {
          _assert.fail('Unexpected type.');
        }
        return this;
      }
      prop(name) {
        const statement = this._statements[this._statements.length - 1];
        if (statement.type === 'ExpressionStatement') {
          statement.expression = memberExpression(statement.expression, identifier(name));
        } else if (statement.type === 'VariableDeclaration') {
          _assert(statement.declarations.length === 1);
          statement.declarations[0].init = memberExpression(statement.declarations[0].init, identifier(name));
        } else {
          _assert.fail('Unexpected type:' + statement.type);
        }
        return this;
      }
      read(name) {
        this._resultName = memberExpression(this._resultName, identifier(name));
      }
    };
    exports.default = ImportBuilder;
  }
});

// esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/is-module.js
var require_is_module = __commonJS({
  'esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/is-module.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = isModule2;
    function isModule2(path) {
      const { sourceType } = path.node;
      if (sourceType !== 'module' && sourceType !== 'script') {
        throw path.buildCodeFrameError(`Unknown sourceType "${sourceType}", cannot transform.`);
      }
      return path.node.sourceType === 'module';
    }
  }
});

// esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/import-injector.js
var require_import_injector = __commonJS({
  'esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/import-injector.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _assert = __assert$;
    var _t = ___babel_types$;
    var _importBuilder = require_import_builder();
    var _isModule = require_is_module();
    var { numericLiteral, sequenceExpression } = _t;
    var ImportInjector2 = class {
      constructor(path, importedSource, opts) {
        this._defaultOpts = {
          importedSource: null,
          importedType: 'commonjs',
          importedInterop: 'babel',
          importingInterop: 'babel',
          ensureLiveReference: false,
          ensureNoContext: false,
          importPosition: 'before'
        };
        const programPath = path.find(p => p.isProgram());
        this._programPath = programPath;
        this._programScope = programPath.scope;
        this._hub = programPath.hub;
        this._defaultOpts = this._applyDefaults(importedSource, opts, true);
      }
      addDefault(importedSourceIn, opts) {
        return this.addNamed('default', importedSourceIn, opts);
      }
      addNamed(importName, importedSourceIn, opts) {
        _assert(typeof importName === 'string');
        return this._generateImport(this._applyDefaults(importedSourceIn, opts), importName);
      }
      addNamespace(importedSourceIn, opts) {
        return this._generateImport(this._applyDefaults(importedSourceIn, opts), null);
      }
      addSideEffect(importedSourceIn, opts) {
        return this._generateImport(this._applyDefaults(importedSourceIn, opts), void 0);
      }
      _applyDefaults(importedSource, opts, isInit = false) {
        let newOpts;
        if (typeof importedSource === 'string') {
          newOpts = Object.assign(
            {},
            this._defaultOpts,
            {
              importedSource
            },
            opts
          );
        } else {
          _assert(!opts, 'Unexpected secondary arguments.');
          newOpts = Object.assign({}, this._defaultOpts, importedSource);
        }
        if (!isInit && opts) {
          if (opts.nameHint !== void 0) newOpts.nameHint = opts.nameHint;
          if (opts.blockHoist !== void 0) newOpts.blockHoist = opts.blockHoist;
        }
        return newOpts;
      }
      _generateImport(opts, importName) {
        const isDefault = importName === 'default';
        const isNamed = !!importName && !isDefault;
        const isNamespace = importName === null;
        const {
          importedSource,
          importedType,
          importedInterop,
          importingInterop,
          ensureLiveReference,
          ensureNoContext,
          nameHint,
          importPosition,
          blockHoist
        } = opts;
        let name = nameHint || importName;
        const isMod = (0, _isModule.default)(this._programPath);
        const isModuleForNode = isMod && importingInterop === 'node';
        const isModuleForBabel = isMod && importingInterop === 'babel';
        if (importPosition === 'after' && !isMod) {
          throw new Error(`"importPosition": "after" is only supported in modules`);
        }
        const builder = new _importBuilder.default(importedSource, this._programScope, this._hub);
        if (importedType === 'es6') {
          if (!isModuleForNode && !isModuleForBabel) {
            throw new Error('Cannot import an ES6 module from CommonJS');
          }
          builder.import();
          if (isNamespace) {
            builder.namespace(nameHint || importedSource);
          } else if (isDefault || isNamed) {
            builder.named(name, importName);
          }
        } else if (importedType !== 'commonjs') {
          throw new Error(`Unexpected interopType "${importedType}"`);
        } else if (importedInterop === 'babel') {
          if (isModuleForNode) {
            name = name !== 'default' ? name : importedSource;
            const es6Default = `${importedSource}$es6Default`;
            builder.import();
            if (isNamespace) {
              builder
                .default(es6Default)
                .var(name || importedSource)
                .wildcardInterop();
            } else if (isDefault) {
              if (ensureLiveReference) {
                builder
                  .default(es6Default)
                  .var(name || importedSource)
                  .defaultInterop()
                  .read('default');
              } else {
                builder
                  .default(es6Default)
                  .var(name)
                  .defaultInterop()
                  .prop(importName);
              }
            } else if (isNamed) {
              builder.default(es6Default).read(importName);
            }
          } else if (isModuleForBabel) {
            builder.import();
            if (isNamespace) {
              builder.namespace(name || importedSource);
            } else if (isDefault || isNamed) {
              builder.named(name, importName);
            }
          } else {
            builder.require();
            if (isNamespace) {
              builder.var(name || importedSource).wildcardInterop();
            } else if ((isDefault || isNamed) && ensureLiveReference) {
              if (isDefault) {
                name = name !== 'default' ? name : importedSource;
                builder.var(name).read(importName);
                builder.defaultInterop();
              } else {
                builder.var(importedSource).read(importName);
              }
            } else if (isDefault) {
              builder
                .var(name)
                .defaultInterop()
                .prop(importName);
            } else if (isNamed) {
              builder.var(name).prop(importName);
            }
          }
        } else if (importedInterop === 'compiled') {
          if (isModuleForNode) {
            builder.import();
            if (isNamespace) {
              builder.default(name || importedSource);
            } else if (isDefault || isNamed) {
              builder.default(importedSource).read(name);
            }
          } else if (isModuleForBabel) {
            builder.import();
            if (isNamespace) {
              builder.namespace(name || importedSource);
            } else if (isDefault || isNamed) {
              builder.named(name, importName);
            }
          } else {
            builder.require();
            if (isNamespace) {
              builder.var(name || importedSource);
            } else if (isDefault || isNamed) {
              if (ensureLiveReference) {
                builder.var(importedSource).read(name);
              } else {
                builder.prop(importName).var(name);
              }
            }
          }
        } else if (importedInterop === 'uncompiled') {
          if (isDefault && ensureLiveReference) {
            throw new Error('No live reference for commonjs default');
          }
          if (isModuleForNode) {
            builder.import();
            if (isNamespace) {
              builder.default(name || importedSource);
            } else if (isDefault) {
              builder.default(name);
            } else if (isNamed) {
              builder.default(importedSource).read(name);
            }
          } else if (isModuleForBabel) {
            builder.import();
            if (isNamespace) {
              builder.default(name || importedSource);
            } else if (isDefault) {
              builder.default(name);
            } else if (isNamed) {
              builder.named(name, importName);
            }
          } else {
            builder.require();
            if (isNamespace) {
              builder.var(name || importedSource);
            } else if (isDefault) {
              builder.var(name);
            } else if (isNamed) {
              if (ensureLiveReference) {
                builder.var(importedSource).read(name);
              } else {
                builder.var(name).prop(importName);
              }
            }
          }
        } else {
          throw new Error(`Unknown importedInterop "${importedInterop}".`);
        }
        const { statements, resultName } = builder.done();
        this._insertStatements(statements, importPosition, blockHoist);
        if ((isDefault || isNamed) && ensureNoContext && resultName.type !== 'Identifier') {
          return sequenceExpression([numericLiteral(0), resultName]);
        }
        return resultName;
      }
      _insertStatements(statements, importPosition = 'before', blockHoist = 3) {
        const body = this._programPath.get('body');
        if (importPosition === 'after') {
          for (let i = body.length - 1; i >= 0; i--) {
            if (body[i].isImportDeclaration()) {
              body[i].insertAfter(statements);
              return;
            }
          }
        } else {
          statements.forEach(node => {
            node._blockHoist = blockHoist;
          });
          const targetPath = body.find(p => {
            const val = p.node._blockHoist;
            return Number.isFinite(val) && val < 4;
          });
          if (targetPath) {
            targetPath.insertBefore(statements);
            return;
          }
        }
        this._programPath.unshiftContainer('body', statements);
      }
    };
    exports.default = ImportInjector2;
  }
});

// esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/index.js
var require_lib = __commonJS({
  'esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/node_modules/@babel/helper-module-imports/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    Object.defineProperty(exports, 'ImportInjector', {
      enumerable: true,
      get: function() {
        return _importInjector.default;
      }
    });
    exports.addDefault = addDefault2;
    exports.addNamed = addNamed2;
    exports.addNamespace = addNamespace2;
    exports.addSideEffect = addSideEffect2;
    Object.defineProperty(exports, 'isModule', {
      enumerable: true,
      get: function() {
        return _isModule.default;
      }
    });
    var _importInjector = require_import_injector();
    var _isModule = require_is_module();
    function addDefault2(path, importedSource, opts) {
      return new _importInjector.default(path).addDefault(importedSource, opts);
    }
    function addNamed2(path, name, importedSource, opts) {
      return new _importInjector.default(path).addNamed(name, importedSource, opts);
    }
    function addNamespace2(path, importedSource, opts) {
      return new _importInjector.default(path).addNamespace(importedSource, opts);
    }
    function addSideEffect2(path, importedSource, opts) {
      return new _importInjector.default(path).addSideEffect(importedSource, opts);
    }
  }
});

// esm-build-8ee65d610ba4f64b863478f243ed5fde4975d7f1-dca0ceed/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { ImportInjector, addDefault, addNamed, addNamespace, addSideEffect, isModule } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  ImportInjector,
  __esModule,
  addDefault,
  addNamed,
  addNamespace,
  addSideEffect,
  mod_default as default,
  isModule
};
