/* esm.sh - esbuild bundle(@babel/core@7.20.2) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import * as ___babel_code_frame$ from '/cdn/v99/@babel/code-frame@7.18.6/es2022/code-frame.development.js';
import * as ___babel_helpers$ from '/cdn/v99/@babel/helpers@7.20.1/es2022/helpers.development.js';
import * as ___babel_helper_compilation_targets$ from '/cdn/v99/@babel/helper-compilation-targets@7.20.0/es2022/helper-compilation-targets.development.js';
import __path$ from '/cdn/v99/path-browserify@1.0.1/es2022/path-browserify.development.bundle.js';
import __semver$ from '/cdn/v99/semver@6.3.0/es2022/semver.development.js';
import * as ___babel_template$ from '/cdn/v99/@babel/template@7.18.10/es2022/template.development.js';
import * as ___babel_traverse$ from '/cdn/v99/@babel/traverse@7.20.1/es2022/traverse.development.js';
import ___babel_types$ from '/cdn/v99/@babel/types@7.20.2/es2022/types.development.js';
import __convert_source_map$ from '/cdn/v99/convert-source-map@1.9.0/es2022/convert-source-map.development.js';
import __fs$ from '/cdn/v99/node_fs.js';
import ___ampproject_remapping$$ from '/cdn/v99/@ampproject/remapping@2.2.0/es2022/remapping.development.js';
import * as ___ampproject_remapping$$$ from '/cdn/v99/@ampproject/remapping@2.2.0/es2022/remapping.development.js';
const ___ampproject_remapping$ = Object.assign(
  {
    default: ___ampproject_remapping$$
  },
  ___ampproject_remapping$$$
);
import ___babel_helper_module_transforms$ from '/cdn/v99/@babel/helper-module-transforms@7.20.2/es2022/helper-module-transforms.development.js';
import __debug$ from '/cdn/v99/debug@4.3.4/es2022/debug.development.js';
import * as ___babel_generator$ from '/cdn/v99/@babel/generator@7.20.4/es2022/generator.development.js';
import __gensync$ from '/cdn/v99/gensync@1.0.0-beta.2/es2022/gensync.development.js';
import ___babel_parser$ from '/cdn/v99/@babel/parser@7.20.3/es2022/parser.development.js';
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

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/file/file.js
var require_file = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/file/file.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    function helpers() {
      const data = ___babel_helpers$;
      helpers = function() {
        return data;
      };
      return data;
    }
    function _traverse() {
      const data = ___babel_traverse$;
      _traverse = function() {
        return data;
      };
      return data;
    }
    function _codeFrame() {
      const data = ___babel_code_frame$;
      _codeFrame = function() {
        return data;
      };
      return data;
    }
    function _t() {
      const data = ___babel_types$;
      _t = function() {
        return data;
      };
      return data;
    }
    function _helperModuleTransforms() {
      const data = ___babel_helper_module_transforms$;
      _helperModuleTransforms = function() {
        return data;
      };
      return data;
    }
    function _semver() {
      const data = __semver$;
      _semver = function() {
        return data;
      };
      return data;
    }
    var { cloneNode, interpreterDirective } = _t();
    var errorVisitor = {
      enter(path, state) {
        const loc = path.node.loc;
        if (loc) {
          state.loc = loc;
          path.stop();
        }
      }
    };
    var File2 = class {
      constructor(options, { code, ast, inputMap }) {
        this._map = /* @__PURE__ */ new Map();
        this.opts = void 0;
        this.declarations = {};
        this.path = void 0;
        this.ast = void 0;
        this.scope = void 0;
        this.metadata = {};
        this.code = '';
        this.inputMap = void 0;
        this.hub = {
          file: this,
          getCode: () => this.code,
          getScope: () => this.scope,
          addHelper: this.addHelper.bind(this),
          buildError: this.buildCodeFrameError.bind(this)
        };
        this.opts = options;
        this.code = code;
        this.ast = ast;
        this.inputMap = inputMap;
        this.path = _traverse()
          .NodePath.get({
            hub: this.hub,
            parentPath: null,
            parent: this.ast,
            container: this.ast,
            key: 'program'
          })
          .setContext();
        this.scope = this.path.scope;
      }
      get shebang() {
        const { interpreter } = this.path.node;
        return interpreter ? interpreter.value : '';
      }
      set shebang(value) {
        if (value) {
          this.path.get('interpreter').replaceWith(interpreterDirective(value));
        } else {
          this.path.get('interpreter').remove();
        }
      }
      set(key, val) {
        if (key === 'helpersNamespace') {
          throw new Error(
            "Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'."
          );
        }
        this._map.set(key, val);
      }
      get(key) {
        return this._map.get(key);
      }
      has(key) {
        return this._map.has(key);
      }
      getModuleName() {
        return (0, _helperModuleTransforms().getModuleName)(this.opts, this.opts);
      }
      addImport() {
        throw new Error(
          "This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'."
        );
      }
      availableHelper(name, versionRange) {
        let minVersion;
        try {
          minVersion = helpers().minVersion(name);
        } catch (err) {
          if (err.code !== 'BABEL_HELPER_UNKNOWN') throw err;
          return false;
        }
        if (typeof versionRange !== 'string') return true;
        if (_semver().valid(versionRange)) versionRange = `^${versionRange}`;
        return !_semver().intersects(`<${minVersion}`, versionRange) && !_semver().intersects(`>=8.0.0`, versionRange);
      }
      addHelper(name) {
        const declar = this.declarations[name];
        if (declar) return cloneNode(declar);
        const generator = this.get('helperGenerator');
        if (generator) {
          const res = generator(name);
          if (res) return res;
        }
        helpers().ensure(name, File2);
        const uid = (this.declarations[name] = this.scope.generateUidIdentifier(name));
        const dependencies = {};
        for (const dep of helpers().getDependencies(name)) {
          dependencies[dep] = this.addHelper(dep);
        }
        const { nodes, globals } = helpers().get(
          name,
          dep => dependencies[dep],
          uid,
          Object.keys(this.scope.getAllBindings())
        );
        globals.forEach(name2 => {
          if (this.path.scope.hasBinding(name2, true)) {
            this.path.scope.rename(name2);
          }
        });
        nodes.forEach(node => {
          node._compact = true;
        });
        this.path.unshiftContainer('body', nodes);
        this.path.get('body').forEach(path => {
          if (nodes.indexOf(path.node) === -1) return;
          if (path.isVariableDeclaration()) this.scope.registerDeclaration(path);
        });
        return uid;
      }
      addTemplateObject() {
        throw new Error('This function has been moved into the template literal transform itself.');
      }
      buildCodeFrameError(node, msg, _Error = SyntaxError) {
        let loc = node && (node.loc || node._loc);
        if (!loc && node) {
          const state = {
            loc: null
          };
          (0, _traverse().default)(node, errorVisitor, this.scope, state);
          loc = state.loc;
          let txt = 'This is an error on an internal node. Probably an internal error.';
          if (loc) txt += ' Location has been estimated.';
          msg += ` (${txt})`;
        }
        if (loc) {
          const { highlightCode = true } = this.opts;
          msg +=
            '\n' +
            (0, _codeFrame().codeFrameColumns)(
              this.code,
              {
                start: {
                  line: loc.start.line,
                  column: loc.start.column + 1
                },
                end:
                  loc.end && loc.start.line === loc.end.line
                    ? {
                        line: loc.end.line,
                        column: loc.end.column + 1
                      }
                    : void 0
              },
              {
                highlightCode
              }
            );
        }
        return new _Error(msg);
      }
    };
    exports.default = File2;
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/tools/build-external-helpers.js
var require_build_external_helpers = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/tools/build-external-helpers.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = _default;
    function helpers() {
      const data = ___babel_helpers$;
      helpers = function() {
        return data;
      };
      return data;
    }
    function _generator() {
      const data = ___babel_generator$;
      _generator = function() {
        return data;
      };
      return data;
    }
    function _template() {
      const data = ___babel_template$;
      _template = function() {
        return data;
      };
      return data;
    }
    function _t() {
      const data = ___babel_types$;
      _t = function() {
        return data;
      };
      return data;
    }
    var _file = require_file();
    var {
      arrayExpression,
      assignmentExpression,
      binaryExpression,
      blockStatement,
      callExpression,
      cloneNode,
      conditionalExpression,
      exportNamedDeclaration,
      exportSpecifier,
      expressionStatement,
      functionExpression,
      identifier,
      memberExpression,
      objectExpression,
      program,
      stringLiteral,
      unaryExpression,
      variableDeclaration,
      variableDeclarator
    } = _t();
    var buildUmdWrapper = replacements =>
      _template().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(replacements);
    function buildGlobal(allowlist) {
      const namespace = identifier('babelHelpers');
      const body = [];
      const container = functionExpression(null, [identifier('global')], blockStatement(body));
      const tree = program([
        expressionStatement(
          callExpression(container, [
            conditionalExpression(
              binaryExpression('===', unaryExpression('typeof', identifier('global')), stringLiteral('undefined')),
              identifier('self'),
              identifier('global')
            )
          ])
        )
      ]);
      body.push(
        variableDeclaration('var', [
          variableDeclarator(
            namespace,
            assignmentExpression('=', memberExpression(identifier('global'), namespace), objectExpression([]))
          )
        ])
      );
      buildHelpers(body, namespace, allowlist);
      return tree;
    }
    function buildModule(allowlist) {
      const body = [];
      const refs = buildHelpers(body, null, allowlist);
      body.unshift(
        exportNamedDeclaration(
          null,
          Object.keys(refs).map(name => {
            return exportSpecifier(cloneNode(refs[name]), identifier(name));
          })
        )
      );
      return program(body, [], 'module');
    }
    function buildUmd(allowlist) {
      const namespace = identifier('babelHelpers');
      const body = [];
      body.push(variableDeclaration('var', [variableDeclarator(namespace, identifier('global'))]));
      buildHelpers(body, namespace, allowlist);
      return program([
        buildUmdWrapper({
          FACTORY_PARAMETERS: identifier('global'),
          BROWSER_ARGUMENTS: assignmentExpression(
            '=',
            memberExpression(identifier('root'), namespace),
            objectExpression([])
          ),
          COMMON_ARGUMENTS: identifier('exports'),
          AMD_ARGUMENTS: arrayExpression([stringLiteral('exports')]),
          FACTORY_BODY: body,
          UMD_ROOT: identifier('this')
        })
      ]);
    }
    function buildVar(allowlist) {
      const namespace = identifier('babelHelpers');
      const body = [];
      body.push(variableDeclaration('var', [variableDeclarator(namespace, objectExpression([]))]));
      const tree = program(body);
      buildHelpers(body, namespace, allowlist);
      body.push(expressionStatement(namespace));
      return tree;
    }
    function buildHelpers(body, namespace, allowlist) {
      const getHelperReference = name => {
        return namespace ? memberExpression(namespace, identifier(name)) : identifier(`_${name}`);
      };
      const refs = {};
      helpers().list.forEach(function(name) {
        if (allowlist && allowlist.indexOf(name) < 0) return;
        const ref = (refs[name] = getHelperReference(name));
        helpers().ensure(name, _file.default);
        const { nodes } = helpers().get(name, getHelperReference, ref);
        body.push(...nodes);
      });
      return refs;
    }
    function _default(allowlist, outputType = 'global') {
      let tree;
      const build = {
        global: buildGlobal,
        module: buildModule,
        umd: buildUmd,
        var: buildVar
      }[outputType];
      if (build) {
        tree = build(allowlist);
      } else {
        throw new Error(`Unsupported output type ${outputType}`);
      }
      return (0, _generator().default)(tree).code;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/files/index-browser.js
var require_index_browser = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/files/index-browser.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.ROOT_CONFIG_FILENAMES = void 0;
    exports.findConfigUpwards = findConfigUpwards;
    exports.findPackageData = findPackageData;
    exports.findRelativeConfig = findRelativeConfig;
    exports.findRootConfig = findRootConfig;
    exports.loadConfig = loadConfig;
    exports.loadPlugin = loadPlugin;
    exports.loadPreset = loadPreset;
    exports.resolvePlugin = resolvePlugin2;
    exports.resolvePreset = resolvePreset2;
    exports.resolveShowConfigPath = resolveShowConfigPath;
    function findConfigUpwards(rootDir) {
      return null;
    }
    function* findPackageData(filepath) {
      return {
        filepath,
        directories: [],
        pkg: null,
        isPackage: false
      };
    }
    function* findRelativeConfig(pkgData, envName, caller) {
      return {
        config: null,
        ignore: null
      };
    }
    function* findRootConfig(dirname, envName, caller) {
      return null;
    }
    function* loadConfig(name, dirname, envName, caller) {
      throw new Error(`Cannot load ${name} relative to ${dirname} in a browser`);
    }
    function* resolveShowConfigPath(dirname) {
      return null;
    }
    var ROOT_CONFIG_FILENAMES = [];
    exports.ROOT_CONFIG_FILENAMES = ROOT_CONFIG_FILENAMES;
    function resolvePlugin2(name, dirname) {
      return null;
    }
    function resolvePreset2(name, dirname) {
      return null;
    }
    function loadPlugin(name, dirname) {
      throw new Error(`Cannot load plugin ${name} relative to ${dirname} in a browser`);
    }
    function loadPreset(name, dirname) {
      throw new Error(`Cannot load preset ${name} relative to ${dirname} in a browser`);
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/helpers/environment.js
var require_environment = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/helpers/environment.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.getEnv = getEnv2;
    function getEnv2(defaultValue = 'development') {
      return __Process$.env.BABEL_ENV || 'development';
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/gensync-utils/async.js
var require_async = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/gensync-utils/async.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.forwardAsync = forwardAsync;
    exports.isAsync = void 0;
    exports.isThenable = isThenable;
    exports.maybeAsync = maybeAsync;
    exports.waitFor = exports.onFirstPause = void 0;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this,
          args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
          }
          _next(void 0);
        });
      };
    }
    var runGenerator = _gensync()(function*(item) {
      return yield* item;
    });
    var isAsync = _gensync()({
      sync: () => false,
      errback: cb => cb(null, true)
    });
    exports.isAsync = isAsync;
    function maybeAsync(fn, message) {
      return _gensync()({
        sync(...args) {
          const result = fn.apply(this, args);
          if (isThenable(result)) throw new Error(message);
          return result;
        },
        async(...args) {
          return Promise.resolve(fn.apply(this, args));
        }
      });
    }
    var withKind = _gensync()({
      sync: cb => cb('sync'),
      async: (function() {
        var _ref = _asyncToGenerator(function*(cb) {
          return cb('async');
        });
        return function async(_x) {
          return _ref.apply(this, arguments);
        };
      })()
    });
    function forwardAsync(action, cb) {
      const g = _gensync()(action);
      return withKind(kind => {
        const adapted = g[kind];
        return cb(adapted);
      });
    }
    var onFirstPause = _gensync()({
      name: 'onFirstPause',
      arity: 2,
      sync: function(item) {
        return runGenerator.sync(item);
      },
      errback: function(item, firstPause, cb) {
        let completed = false;
        runGenerator.errback(item, (err, value) => {
          completed = true;
          cb(err, value);
        });
        if (!completed) {
          firstPause();
        }
      }
    });
    exports.onFirstPause = onFirstPause;
    var waitFor = _gensync()({
      sync: x => x,
      async: (function() {
        var _ref2 = _asyncToGenerator(function*(x) {
          return x;
        });
        return function async(_x2) {
          return _ref2.apply(this, arguments);
        };
      })()
    });
    exports.waitFor = waitFor;
    function isThenable(val) {
      return (
        !!val && (typeof val === 'object' || typeof val === 'function') && !!val.then && typeof val.then === 'function'
      );
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/util.js
var require_util = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/util.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.isIterableIterator = isIterableIterator;
    exports.mergeOptions = mergeOptions;
    function mergeOptions(target, source) {
      for (const k of Object.keys(source)) {
        if ((k === 'parserOpts' || k === 'generatorOpts' || k === 'assumptions') && source[k]) {
          const parserOpts = source[k];
          const targetObj = target[k] || (target[k] = {});
          mergeDefaultFields(targetObj, parserOpts);
        } else {
          const val = source[k];
          if (val !== void 0) target[k] = val;
        }
      }
    }
    function mergeDefaultFields(target, source) {
      for (const k of Object.keys(source)) {
        const val = source[k];
        if (val !== void 0) target[k] = val;
      }
    }
    function isIterableIterator(value) {
      return !!value && typeof value.next === 'function' && typeof value[Symbol.iterator] === 'function';
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/helpers/deep-array.js
var require_deep_array = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/helpers/deep-array.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.finalize = finalize;
    exports.flattenToSet = flattenToSet;
    function finalize(deepArr) {
      return Object.freeze(deepArr);
    }
    function flattenToSet(arr) {
      const result = /* @__PURE__ */ new Set();
      const stack = [arr];
      while (stack.length > 0) {
        for (const el of stack.pop()) {
          if (Array.isArray(el)) stack.push(el);
          else result.add(el);
        }
      }
      return result;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/plugin.js
var require_plugin = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/plugin.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _deepArray = require_deep_array();
    var Plugin2 = class {
      constructor(plugin, options, key, externalDependencies = (0, _deepArray.finalize)([])) {
        this.key = void 0;
        this.manipulateOptions = void 0;
        this.post = void 0;
        this.pre = void 0;
        this.visitor = void 0;
        this.parserOverride = void 0;
        this.generatorOverride = void 0;
        this.options = void 0;
        this.externalDependencies = void 0;
        this.key = plugin.name || key;
        this.manipulateOptions = plugin.manipulateOptions;
        this.post = plugin.post;
        this.pre = plugin.pre;
        this.visitor = plugin.visitor || {};
        this.parserOverride = plugin.parserOverride;
        this.generatorOverride = plugin.generatorOverride;
        this.options = options;
        this.externalDependencies = externalDependencies;
      }
    };
    exports.default = Plugin2;
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/gensync-utils/functional.js
var require_functional = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/gensync-utils/functional.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.once = once;
    var _async = require_async();
    function once(fn) {
      let result;
      let resultP;
      return function*() {
        if (result) return result;
        if (!(yield* (0, _async.isAsync)())) return (result = yield* fn());
        if (resultP) return yield* (0, _async.waitFor)(resultP);
        let resolve, reject;
        resultP = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        try {
          result = yield* fn();
          resultP = null;
          resolve(result);
          return result;
        } catch (error) {
          reject(error);
          throw error;
        }
      };
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/caching.js
var require_caching = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/caching.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.assertSimpleType = assertSimpleType;
    exports.makeStrongCache = makeStrongCache;
    exports.makeStrongCacheSync = makeStrongCacheSync;
    exports.makeWeakCache = makeWeakCache;
    exports.makeWeakCacheSync = makeWeakCacheSync;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _async = require_async();
    var _util = require_util();
    var synchronize = gen => {
      return _gensync()(gen).sync;
    };
    function* genTrue() {
      return true;
    }
    function makeWeakCache(handler) {
      return makeCachedFunction(WeakMap, handler);
    }
    function makeWeakCacheSync(handler) {
      return synchronize(makeWeakCache(handler));
    }
    function makeStrongCache(handler) {
      return makeCachedFunction(Map, handler);
    }
    function makeStrongCacheSync(handler) {
      return synchronize(makeStrongCache(handler));
    }
    function makeCachedFunction(CallCache, handler) {
      const callCacheSync = new CallCache();
      const callCacheAsync = new CallCache();
      const futureCache = new CallCache();
      return function* cachedFunction(arg, data) {
        const asyncContext = yield* (0, _async.isAsync)();
        const callCache = asyncContext ? callCacheAsync : callCacheSync;
        const cached = yield* getCachedValueOrWait(asyncContext, callCache, futureCache, arg, data);
        if (cached.valid) return cached.value;
        const cache = new CacheConfigurator(data);
        const handlerResult = handler(arg, cache);
        let finishLock;
        let value;
        if ((0, _util.isIterableIterator)(handlerResult)) {
          value = yield* (0, _async.onFirstPause)(handlerResult, () => {
            finishLock = setupAsyncLocks(cache, futureCache, arg);
          });
        } else {
          value = handlerResult;
        }
        updateFunctionCache(callCache, cache, arg, value);
        if (finishLock) {
          futureCache.delete(arg);
          finishLock.release(value);
        }
        return value;
      };
    }
    function* getCachedValue(cache, arg, data) {
      const cachedValue = cache.get(arg);
      if (cachedValue) {
        for (const { value, valid } of cachedValue) {
          if (yield* valid(data))
            return {
              valid: true,
              value
            };
        }
      }
      return {
        valid: false,
        value: null
      };
    }
    function* getCachedValueOrWait(asyncContext, callCache, futureCache, arg, data) {
      const cached = yield* getCachedValue(callCache, arg, data);
      if (cached.valid) {
        return cached;
      }
      if (asyncContext) {
        const cached2 = yield* getCachedValue(futureCache, arg, data);
        if (cached2.valid) {
          const value = yield* (0, _async.waitFor)(cached2.value.promise);
          return {
            valid: true,
            value
          };
        }
      }
      return {
        valid: false,
        value: null
      };
    }
    function setupAsyncLocks(config, futureCache, arg) {
      const finishLock = new Lock();
      updateFunctionCache(futureCache, config, arg, finishLock);
      return finishLock;
    }
    function updateFunctionCache(cache, config, arg, value) {
      if (!config.configured()) config.forever();
      let cachedValue = cache.get(arg);
      config.deactivate();
      switch (config.mode()) {
        case 'forever':
          cachedValue = [
            {
              value,
              valid: genTrue
            }
          ];
          cache.set(arg, cachedValue);
          break;
        case 'invalidate':
          cachedValue = [
            {
              value,
              valid: config.validator()
            }
          ];
          cache.set(arg, cachedValue);
          break;
        case 'valid':
          if (cachedValue) {
            cachedValue.push({
              value,
              valid: config.validator()
            });
          } else {
            cachedValue = [
              {
                value,
                valid: config.validator()
              }
            ];
            cache.set(arg, cachedValue);
          }
      }
    }
    var CacheConfigurator = class {
      constructor(data) {
        this._active = true;
        this._never = false;
        this._forever = false;
        this._invalidate = false;
        this._configured = false;
        this._pairs = [];
        this._data = void 0;
        this._data = data;
      }
      simple() {
        return makeSimpleConfigurator(this);
      }
      mode() {
        if (this._never) return 'never';
        if (this._forever) return 'forever';
        if (this._invalidate) return 'invalidate';
        return 'valid';
      }
      forever() {
        if (!this._active) {
          throw new Error('Cannot change caching after evaluation has completed.');
        }
        if (this._never) {
          throw new Error('Caching has already been configured with .never()');
        }
        this._forever = true;
        this._configured = true;
      }
      never() {
        if (!this._active) {
          throw new Error('Cannot change caching after evaluation has completed.');
        }
        if (this._forever) {
          throw new Error('Caching has already been configured with .forever()');
        }
        this._never = true;
        this._configured = true;
      }
      using(handler) {
        if (!this._active) {
          throw new Error('Cannot change caching after evaluation has completed.');
        }
        if (this._never || this._forever) {
          throw new Error('Caching has already been configured with .never or .forever()');
        }
        this._configured = true;
        const key = handler(this._data);
        const fn = (0, _async.maybeAsync)(
          handler,
          `You appear to be using an async cache handler, but Babel has been called synchronously`
        );
        if ((0, _async.isThenable)(key)) {
          return key.then(key2 => {
            this._pairs.push([key2, fn]);
            return key2;
          });
        }
        this._pairs.push([key, fn]);
        return key;
      }
      invalidate(handler) {
        this._invalidate = true;
        return this.using(handler);
      }
      validator() {
        const pairs = this._pairs;
        return function*(data) {
          for (const [key, fn] of pairs) {
            if (key !== (yield* fn(data))) return false;
          }
          return true;
        };
      }
      deactivate() {
        this._active = false;
      }
      configured() {
        return this._configured;
      }
    };
    function makeSimpleConfigurator(cache) {
      function cacheFn(val) {
        if (typeof val === 'boolean') {
          if (val) cache.forever();
          else cache.never();
          return;
        }
        return cache.using(() => assertSimpleType(val()));
      }
      cacheFn.forever = () => cache.forever();
      cacheFn.never = () => cache.never();
      cacheFn.using = cb => cache.using(() => assertSimpleType(cb()));
      cacheFn.invalidate = cb => cache.invalidate(() => assertSimpleType(cb()));
      return cacheFn;
    }
    function assertSimpleType(value) {
      if ((0, _async.isThenable)(value)) {
        throw new Error(
          `You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.`
        );
      }
      if (value != null && typeof value !== 'string' && typeof value !== 'boolean' && typeof value !== 'number') {
        throw new Error('Cache keys must be either string, boolean, number, null, or undefined.');
      }
      return value;
    }
    var Lock = class {
      constructor() {
        this.released = false;
        this.promise = void 0;
        this._resolve = void 0;
        this.promise = new Promise(resolve => {
          this._resolve = resolve;
        });
      }
      release(value) {
        this.released = true;
        this._resolve(value);
      }
    };
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/resolve-targets-browser.js
var require_resolve_targets_browser = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/resolve-targets-browser.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.resolveBrowserslistConfigFile = resolveBrowserslistConfigFile;
    exports.resolveTargets = resolveTargets;
    function _helperCompilationTargets() {
      const data = ___babel_helper_compilation_targets$;
      _helperCompilationTargets = function() {
        return data;
      };
      return data;
    }
    function resolveBrowserslistConfigFile(browserslistConfigFile, configFilePath) {
      return void 0;
    }
    function resolveTargets(options, root) {
      const optTargets = options.targets;
      let targets;
      if (typeof optTargets === 'string' || Array.isArray(optTargets)) {
        targets = {
          browsers: optTargets
        };
      } else if (optTargets) {
        if ('esmodules' in optTargets) {
          targets = Object.assign({}, optTargets, {
            esmodules: 'intersect'
          });
        } else {
          targets = optTargets;
        }
      }
      return (0, _helperCompilationTargets().default)(targets, {
        ignoreBrowserslistConfig: true,
        browserslistEnv: options.browserslistEnv
      });
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/config-descriptors.js
var require_config_descriptors = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/config-descriptors.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.createCachedDescriptors = createCachedDescriptors;
    exports.createDescriptor = createDescriptor;
    exports.createUncachedDescriptors = createUncachedDescriptors;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _functional = require_functional();
    var _files = require_index_browser();
    var _item = require_item();
    var _caching = require_caching();
    var _resolveTargets = require_resolve_targets_browser();
    function isEqualDescriptor(a, b) {
      return (
        a.name === b.name &&
        a.value === b.value &&
        a.options === b.options &&
        a.dirname === b.dirname &&
        a.alias === b.alias &&
        a.ownPass === b.ownPass &&
        (a.file && a.file.request) === (b.file && b.file.request) &&
        (a.file && a.file.resolved) === (b.file && b.file.resolved)
      );
    }
    function* handlerOf(value) {
      return value;
    }
    function optionsWithResolvedBrowserslistConfigFile(options, dirname) {
      if (typeof options.browserslistConfigFile === 'string') {
        options.browserslistConfigFile = (0, _resolveTargets.resolveBrowserslistConfigFile)(
          options.browserslistConfigFile,
          dirname
        );
      }
      return options;
    }
    function createCachedDescriptors(dirname, options, alias) {
      const { plugins, presets, passPerPreset } = options;
      return {
        options: optionsWithResolvedBrowserslistConfigFile(options, dirname),
        plugins: plugins ? () => createCachedPluginDescriptors(plugins, dirname)(alias) : () => handlerOf([]),
        presets: presets
          ? () => createCachedPresetDescriptors(presets, dirname)(alias)(!!passPerPreset)
          : () => handlerOf([])
      };
    }
    function createUncachedDescriptors(dirname, options, alias) {
      return {
        options: optionsWithResolvedBrowserslistConfigFile(options, dirname),
        plugins: (0, _functional.once)(() => createPluginDescriptors(options.plugins || [], dirname, alias)),
        presets: (0, _functional.once)(() =>
          createPresetDescriptors(options.presets || [], dirname, alias, !!options.passPerPreset)
        )
      };
    }
    var PRESET_DESCRIPTOR_CACHE = /* @__PURE__ */ new WeakMap();
    var createCachedPresetDescriptors = (0, _caching.makeWeakCacheSync)((items, cache) => {
      const dirname = cache.using(dir => dir);
      return (0, _caching.makeStrongCacheSync)(alias =>
        (0, _caching.makeStrongCache)(function*(passPerPreset) {
          const descriptors = yield* createPresetDescriptors(items, dirname, alias, passPerPreset);
          return descriptors.map(desc => loadCachedDescriptor(PRESET_DESCRIPTOR_CACHE, desc));
        })
      );
    });
    var PLUGIN_DESCRIPTOR_CACHE = /* @__PURE__ */ new WeakMap();
    var createCachedPluginDescriptors = (0, _caching.makeWeakCacheSync)((items, cache) => {
      const dirname = cache.using(dir => dir);
      return (0, _caching.makeStrongCache)(function*(alias) {
        const descriptors = yield* createPluginDescriptors(items, dirname, alias);
        return descriptors.map(desc => loadCachedDescriptor(PLUGIN_DESCRIPTOR_CACHE, desc));
      });
    });
    var DEFAULT_OPTIONS = {};
    function loadCachedDescriptor(cache, desc) {
      const { value, options = DEFAULT_OPTIONS } = desc;
      if (options === false) return desc;
      let cacheByOptions = cache.get(value);
      if (!cacheByOptions) {
        cacheByOptions = /* @__PURE__ */ new WeakMap();
        cache.set(value, cacheByOptions);
      }
      let possibilities = cacheByOptions.get(options);
      if (!possibilities) {
        possibilities = [];
        cacheByOptions.set(options, possibilities);
      }
      if (possibilities.indexOf(desc) === -1) {
        const matches = possibilities.filter(possibility => isEqualDescriptor(possibility, desc));
        if (matches.length > 0) {
          return matches[0];
        }
        possibilities.push(desc);
      }
      return desc;
    }
    function* createPresetDescriptors(items, dirname, alias, passPerPreset) {
      return yield* createDescriptors('preset', items, dirname, alias, passPerPreset);
    }
    function* createPluginDescriptors(items, dirname, alias) {
      return yield* createDescriptors('plugin', items, dirname, alias);
    }
    function* createDescriptors(type, items, dirname, alias, ownPass) {
      const descriptors = yield* _gensync().all(
        items.map((item, index) =>
          createDescriptor(item, dirname, {
            type,
            alias: `${alias}$${index}`,
            ownPass: !!ownPass
          })
        )
      );
      assertNoDuplicates(descriptors);
      return descriptors;
    }
    function* createDescriptor(pair, dirname, { type, alias, ownPass }) {
      const desc = (0, _item.getItemDescriptor)(pair);
      if (desc) {
        return desc;
      }
      let name;
      let options;
      let value = pair;
      if (Array.isArray(value)) {
        if (value.length === 3) {
          [value, options, name] = value;
        } else {
          [value, options] = value;
        }
      }
      let file = void 0;
      let filepath = null;
      if (typeof value === 'string') {
        if (typeof type !== 'string') {
          throw new Error('To resolve a string-based item, the type of item must be given');
        }
        const resolver = type === 'plugin' ? _files.loadPlugin : _files.loadPreset;
        const request = value;
        ({ filepath, value } = yield* resolver(value, dirname));
        file = {
          request,
          resolved: filepath
        };
      }
      if (!value) {
        throw new Error(`Unexpected falsy value: ${String(value)}`);
      }
      if (typeof value === 'object' && value.__esModule) {
        if (value.default) {
          value = value.default;
        } else {
          throw new Error('Must export a default export when using ES6 modules.');
        }
      }
      if (typeof value !== 'object' && typeof value !== 'function') {
        throw new Error(`Unsupported format: ${typeof value}. Expected an object or a function.`);
      }
      if (filepath !== null && typeof value === 'object' && value) {
        throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${filepath}`);
      }
      return {
        name,
        alias: filepath || alias,
        value,
        options,
        dirname,
        ownPass,
        file
      };
    }
    function assertNoDuplicates(items) {
      const map = /* @__PURE__ */ new Map();
      for (const item of items) {
        if (typeof item.value !== 'function') continue;
        let nameMap = map.get(item.value);
        if (!nameMap) {
          nameMap = /* @__PURE__ */ new Set();
          map.set(item.value, nameMap);
        }
        if (nameMap.has(item.name)) {
          const conflicts = items.filter(i => i.value === item.value);
          throw new Error(
            [
              `Duplicate plugin/preset detected.`,
              `If you'd like to use two separate instances of a plugin,`,
              `they need separate names, e.g.`,
              ``,
              `  plugins: [`,
              `    ['some-plugin', {}],`,
              `    ['some-plugin', {}, 'some unique name'],`,
              `  ]`,
              ``,
              `Duplicates detected are:`,
              `${JSON.stringify(conflicts, null, 2)}`
            ].join('\n')
          );
        }
        nameMap.add(item.name);
      }
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/item.js
var require_item = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/item.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.createConfigItem = createConfigItem2;
    exports.createItemFromDescriptor = createItemFromDescriptor;
    exports.getItemDescriptor = getItemDescriptor;
    function _path() {
      const data = __path$;
      _path = function() {
        return data;
      };
      return data;
    }
    var _configDescriptors = require_config_descriptors();
    function createItemFromDescriptor(desc) {
      return new ConfigItem(desc);
    }
    function* createConfigItem2(value, { dirname = '.', type } = {}) {
      const descriptor = yield* (0, _configDescriptors.createDescriptor)(value, _path().resolve(dirname), {
        type,
        alias: 'programmatic item'
      });
      return createItemFromDescriptor(descriptor);
    }
    var CONFIG_ITEM_BRAND = Symbol.for('@babel/core@7 - ConfigItem');
    function getItemDescriptor(item) {
      if (item != null && item[CONFIG_ITEM_BRAND]) {
        return item._descriptor;
      }
      return void 0;
    }
    var ConfigItem = class {
      constructor(descriptor) {
        this._descriptor = void 0;
        this[CONFIG_ITEM_BRAND] = true;
        this.value = void 0;
        this.options = void 0;
        this.dirname = void 0;
        this.name = void 0;
        this.file = void 0;
        this._descriptor = descriptor;
        Object.defineProperty(this, '_descriptor', {
          enumerable: false
        });
        Object.defineProperty(this, CONFIG_ITEM_BRAND, {
          enumerable: false
        });
        this.value = this._descriptor.value;
        this.options = this._descriptor.options;
        this.dirname = this._descriptor.dirname;
        this.name = this._descriptor.name;
        this.file = this._descriptor.file
          ? {
              request: this._descriptor.file.request,
              resolved: this._descriptor.file.resolved
            }
          : void 0;
        Object.freeze(this);
      }
    };
    Object.freeze(ConfigItem.prototype);
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/removed.js
var require_removed = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/removed.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _default = {
      auxiliaryComment: {
        message: 'Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`'
      },
      blacklist: {
        message: 'Put the specific transforms you want in the `plugins` option'
      },
      breakConfig: {
        message: 'This is not a necessary option in Babel 6'
      },
      experimental: {
        message: 'Put the specific transforms you want in the `plugins` option'
      },
      externalHelpers: {
        message: 'Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/'
      },
      extra: {
        message: ''
      },
      jsxPragma: {
        message:
          'use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/'
      },
      loose: {
        message:
          'Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option.'
      },
      metadataUsedHelpers: {
        message: 'Not required anymore as this is enabled by default'
      },
      modules: {
        message:
          'Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules'
      },
      nonStandard: {
        message:
          'Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/'
      },
      optional: {
        message: 'Put the specific transforms you want in the `plugins` option'
      },
      sourceMapName: {
        message:
          'The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves.'
      },
      stage: {
        message: 'Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets'
      },
      whitelist: {
        message: 'Put the specific transforms you want in the `plugins` option'
      },
      resolveModuleSource: {
        version: 6,
        message: "Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"
      },
      metadata: {
        version: 6,
        message: 'Generated plugin metadata is always included in the output result'
      },
      sourceMapTarget: {
        version: 6,
        message:
          'The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves.'
      }
    };
    exports.default = _default;
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/option-assertions.js
var require_option_assertions = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/option-assertions.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.access = access;
    exports.assertArray = assertArray;
    exports.assertAssumptions = assertAssumptions;
    exports.assertBabelrcSearch = assertBabelrcSearch;
    exports.assertBoolean = assertBoolean;
    exports.assertCallerMetadata = assertCallerMetadata;
    exports.assertCompact = assertCompact;
    exports.assertConfigApplicableTest = assertConfigApplicableTest;
    exports.assertConfigFileSearch = assertConfigFileSearch;
    exports.assertFunction = assertFunction;
    exports.assertIgnoreList = assertIgnoreList;
    exports.assertInputSourceMap = assertInputSourceMap;
    exports.assertObject = assertObject;
    exports.assertPluginList = assertPluginList;
    exports.assertRootMode = assertRootMode;
    exports.assertSourceMaps = assertSourceMaps;
    exports.assertSourceType = assertSourceType;
    exports.assertString = assertString;
    exports.assertTargets = assertTargets;
    exports.msg = msg;
    function _helperCompilationTargets() {
      const data = ___babel_helper_compilation_targets$;
      _helperCompilationTargets = function() {
        return data;
      };
      return data;
    }
    var _options = require_options();
    function msg(loc) {
      switch (loc.type) {
        case 'root':
          return ``;
        case 'env':
          return `${msg(loc.parent)}.env["${loc.name}"]`;
        case 'overrides':
          return `${msg(loc.parent)}.overrides[${loc.index}]`;
        case 'option':
          return `${msg(loc.parent)}.${loc.name}`;
        case 'access':
          return `${msg(loc.parent)}[${JSON.stringify(loc.name)}]`;
        default:
          throw new Error(`Assertion failure: Unknown type ${loc.type}`);
      }
    }
    function access(loc, name) {
      return {
        type: 'access',
        name,
        parent: loc
      };
    }
    function assertRootMode(loc, value) {
      if (value !== void 0 && value !== 'root' && value !== 'upward' && value !== 'upward-optional') {
        throw new Error(`${msg(loc)} must be a "root", "upward", "upward-optional" or undefined`);
      }
      return value;
    }
    function assertSourceMaps(loc, value) {
      if (value !== void 0 && typeof value !== 'boolean' && value !== 'inline' && value !== 'both') {
        throw new Error(`${msg(loc)} must be a boolean, "inline", "both", or undefined`);
      }
      return value;
    }
    function assertCompact(loc, value) {
      if (value !== void 0 && typeof value !== 'boolean' && value !== 'auto') {
        throw new Error(`${msg(loc)} must be a boolean, "auto", or undefined`);
      }
      return value;
    }
    function assertSourceType(loc, value) {
      if (value !== void 0 && value !== 'module' && value !== 'script' && value !== 'unambiguous') {
        throw new Error(`${msg(loc)} must be "module", "script", "unambiguous", or undefined`);
      }
      return value;
    }
    function assertCallerMetadata(loc, value) {
      const obj = assertObject(loc, value);
      if (obj) {
        if (typeof obj.name !== 'string') {
          throw new Error(`${msg(loc)} set but does not contain "name" property string`);
        }
        for (const prop of Object.keys(obj)) {
          const propLoc = access(loc, prop);
          const value2 = obj[prop];
          if (
            value2 != null &&
            typeof value2 !== 'boolean' &&
            typeof value2 !== 'string' &&
            typeof value2 !== 'number'
          ) {
            throw new Error(`${msg(propLoc)} must be null, undefined, a boolean, a string, or a number.`);
          }
        }
      }
      return value;
    }
    function assertInputSourceMap(loc, value) {
      if (value !== void 0 && typeof value !== 'boolean' && (typeof value !== 'object' || !value)) {
        throw new Error(`${msg(loc)} must be a boolean, object, or undefined`);
      }
      return value;
    }
    function assertString(loc, value) {
      if (value !== void 0 && typeof value !== 'string') {
        throw new Error(`${msg(loc)} must be a string, or undefined`);
      }
      return value;
    }
    function assertFunction(loc, value) {
      if (value !== void 0 && typeof value !== 'function') {
        throw new Error(`${msg(loc)} must be a function, or undefined`);
      }
      return value;
    }
    function assertBoolean(loc, value) {
      if (value !== void 0 && typeof value !== 'boolean') {
        throw new Error(`${msg(loc)} must be a boolean, or undefined`);
      }
      return value;
    }
    function assertObject(loc, value) {
      if (value !== void 0 && (typeof value !== 'object' || Array.isArray(value) || !value)) {
        throw new Error(`${msg(loc)} must be an object, or undefined`);
      }
      return value;
    }
    function assertArray(loc, value) {
      if (value != null && !Array.isArray(value)) {
        throw new Error(`${msg(loc)} must be an array, or undefined`);
      }
      return value;
    }
    function assertIgnoreList(loc, value) {
      const arr = assertArray(loc, value);
      if (arr) {
        arr.forEach((item, i) => assertIgnoreItem(access(loc, i), item));
      }
      return arr;
    }
    function assertIgnoreItem(loc, value) {
      if (typeof value !== 'string' && typeof value !== 'function' && !(value instanceof RegExp)) {
        throw new Error(`${msg(loc)} must be an array of string/Function/RegExp values, or undefined`);
      }
      return value;
    }
    function assertConfigApplicableTest(loc, value) {
      if (value === void 0) return value;
      if (Array.isArray(value)) {
        value.forEach((item, i) => {
          if (!checkValidTest(item)) {
            throw new Error(`${msg(access(loc, i))} must be a string/Function/RegExp.`);
          }
        });
      } else if (!checkValidTest(value)) {
        throw new Error(`${msg(loc)} must be a string/Function/RegExp, or an array of those`);
      }
      return value;
    }
    function checkValidTest(value) {
      return typeof value === 'string' || typeof value === 'function' || value instanceof RegExp;
    }
    function assertConfigFileSearch(loc, value) {
      if (value !== void 0 && typeof value !== 'boolean' && typeof value !== 'string') {
        throw new Error(`${msg(loc)} must be a undefined, a boolean, a string, got ${JSON.stringify(value)}`);
      }
      return value;
    }
    function assertBabelrcSearch(loc, value) {
      if (value === void 0 || typeof value === 'boolean') return value;
      if (Array.isArray(value)) {
        value.forEach((item, i) => {
          if (!checkValidTest(item)) {
            throw new Error(`${msg(access(loc, i))} must be a string/Function/RegExp.`);
          }
        });
      } else if (!checkValidTest(value)) {
        throw new Error(
          `${msg(
            loc
          )} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(
            value
          )}`
        );
      }
      return value;
    }
    function assertPluginList(loc, value) {
      const arr = assertArray(loc, value);
      if (arr) {
        arr.forEach((item, i) => assertPluginItem(access(loc, i), item));
      }
      return arr;
    }
    function assertPluginItem(loc, value) {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          throw new Error(`${msg(loc)} must include an object`);
        }
        if (value.length > 3) {
          throw new Error(`${msg(loc)} may only be a two-tuple or three-tuple`);
        }
        assertPluginTarget(access(loc, 0), value[0]);
        if (value.length > 1) {
          const opts = value[1];
          if (opts !== void 0 && opts !== false && (typeof opts !== 'object' || Array.isArray(opts) || opts === null)) {
            throw new Error(`${msg(access(loc, 1))} must be an object, false, or undefined`);
          }
        }
        if (value.length === 3) {
          const name = value[2];
          if (name !== void 0 && typeof name !== 'string') {
            throw new Error(`${msg(access(loc, 2))} must be a string, or undefined`);
          }
        }
      } else {
        assertPluginTarget(loc, value);
      }
      return value;
    }
    function assertPluginTarget(loc, value) {
      if ((typeof value !== 'object' || !value) && typeof value !== 'string' && typeof value !== 'function') {
        throw new Error(`${msg(loc)} must be a string, object, function`);
      }
      return value;
    }
    function assertTargets(loc, value) {
      if ((0, _helperCompilationTargets().isBrowsersQueryValid)(value)) return value;
      if (typeof value !== 'object' || !value || Array.isArray(value)) {
        throw new Error(`${msg(loc)} must be a string, an array of strings or an object`);
      }
      const browsersLoc = access(loc, 'browsers');
      const esmodulesLoc = access(loc, 'esmodules');
      assertBrowsersList(browsersLoc, value.browsers);
      assertBoolean(esmodulesLoc, value.esmodules);
      for (const key of Object.keys(value)) {
        const val = value[key];
        const subLoc = access(loc, key);
        if (key === 'esmodules') assertBoolean(subLoc, val);
        else if (key === 'browsers') assertBrowsersList(subLoc, val);
        else if (!Object.hasOwnProperty.call(_helperCompilationTargets().TargetNames, key)) {
          const validTargets = Object.keys(_helperCompilationTargets().TargetNames).join(', ');
          throw new Error(`${msg(subLoc)} is not a valid target. Supported targets are ${validTargets}`);
        } else assertBrowserVersion(subLoc, val);
      }
      return value;
    }
    function assertBrowsersList(loc, value) {
      if (value !== void 0 && !(0, _helperCompilationTargets().isBrowsersQueryValid)(value)) {
        throw new Error(`${msg(loc)} must be undefined, a string or an array of strings`);
      }
    }
    function assertBrowserVersion(loc, value) {
      if (typeof value === 'number' && Math.round(value) === value) return;
      if (typeof value === 'string') return;
      throw new Error(`${msg(loc)} must be a string or an integer number`);
    }
    function assertAssumptions(loc, value) {
      if (value === void 0) return;
      if (typeof value !== 'object' || value === null) {
        throw new Error(`${msg(loc)} must be an object or undefined.`);
      }
      let root = loc;
      do {
        root = root.parent;
      } while (root.type !== 'root');
      const inPreset = root.source === 'preset';
      for (const name of Object.keys(value)) {
        const subLoc = access(loc, name);
        if (!_options.assumptionsNames.has(name)) {
          throw new Error(`${msg(subLoc)} is not a supported assumption.`);
        }
        if (typeof value[name] !== 'boolean') {
          throw new Error(`${msg(subLoc)} must be a boolean.`);
        }
        if (inPreset && value[name] === false) {
          throw new Error(`${msg(subLoc)} cannot be set to 'false' inside presets.`);
        }
      }
      return value;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/errors/rewrite-stack-trace.js
var require_rewrite_stack_trace = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/errors/rewrite-stack-trace.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.beginHiddenCallStack = beginHiddenCallStack;
    exports.endHiddenCallStack = endHiddenCallStack;
    exports.expectedError = expectedError;
    exports.injcectVirtualStackFrame = injcectVirtualStackFrame;
    var ErrorToString = Function.call.bind(Error.prototype.toString);
    var SUPPORTED = !!Error.captureStackTrace;
    var START_HIDNG = "startHiding - secret - don't use this - v1";
    var STOP_HIDNG = "stopHiding - secret - don't use this - v1";
    var expectedErrors = /* @__PURE__ */ new WeakSet();
    var virtualFrames = /* @__PURE__ */ new WeakMap();
    function CallSite(filename) {
      return /* @__PURE__ */ Object.create({
        isNative: () => false,
        isConstructor: () => false,
        isToplevel: () => true,
        getFileName: () => filename,
        getLineNumber: () => void 0,
        getColumnNumber: () => void 0,
        getFunctionName: () => void 0,
        getMethodName: () => void 0,
        getTypeName: () => void 0,
        toString: () => filename
      });
    }
    function injcectVirtualStackFrame(error, filename) {
      if (!SUPPORTED) return;
      let frames = virtualFrames.get(error);
      if (!frames) virtualFrames.set(error, (frames = []));
      frames.push(CallSite(filename));
      return error;
    }
    function expectedError(error) {
      if (!SUPPORTED) return;
      expectedErrors.add(error);
      return error;
    }
    function beginHiddenCallStack(fn) {
      if (!SUPPORTED) return fn;
      return Object.defineProperty(
        function(...args) {
          setupPrepareStackTrace();
          return fn(...args);
        },
        'name',
        {
          value: STOP_HIDNG
        }
      );
    }
    function endHiddenCallStack(fn) {
      if (!SUPPORTED) return fn;
      return Object.defineProperty(
        function(...args) {
          return fn(...args);
        },
        'name',
        {
          value: START_HIDNG
        }
      );
    }
    function setupPrepareStackTrace() {
      setupPrepareStackTrace = () => {};
      const { prepareStackTrace = defaultPrepareStackTrace } = Error;
      const MIN_STACK_TRACE_LIMIT = 50;
      Error.stackTraceLimit && (Error.stackTraceLimit = Math.max(Error.stackTraceLimit, MIN_STACK_TRACE_LIMIT));
      Error.prepareStackTrace = function stackTraceRewriter(err, trace) {
        let newTrace = [];
        const isExpected = expectedErrors.has(err);
        let status = isExpected ? 'hiding' : 'unknown';
        for (let i = 0; i < trace.length; i++) {
          const name = trace[i].getFunctionName();
          if (name === START_HIDNG) {
            status = 'hiding';
          } else if (name === STOP_HIDNG) {
            if (status === 'hiding') {
              status = 'showing';
              if (virtualFrames.has(err)) {
                newTrace.unshift(...virtualFrames.get(err));
              }
            } else if (status === 'unknown') {
              newTrace = trace;
              break;
            }
          } else if (status !== 'hiding') {
            newTrace.push(trace[i]);
          }
        }
        return prepareStackTrace(err, newTrace);
      };
    }
    function defaultPrepareStackTrace(err, trace) {
      if (trace.length === 0) return ErrorToString(err);
      return `${ErrorToString(err)}
    at ${trace.join('\n    at ')}`;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/errors/config-error.js
var require_config_error = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/errors/config-error.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _rewriteStackTrace = require_rewrite_stack_trace();
    var ConfigError = class extends Error {
      constructor(message, filename) {
        super(message);
        (0, _rewriteStackTrace.expectedError)(this);
        if (filename) (0, _rewriteStackTrace.injcectVirtualStackFrame)(this, filename);
      }
    };
    exports.default = ConfigError;
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/options.js
var require_options = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/options.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.assumptionsNames = void 0;
    exports.checkNoUnwrappedItemOptionPairs = checkNoUnwrappedItemOptionPairs;
    exports.validate = validate;
    var _removed = require_removed();
    var _optionAssertions = require_option_assertions();
    var _configError = require_config_error();
    var ROOT_VALIDATORS = {
      cwd: _optionAssertions.assertString,
      root: _optionAssertions.assertString,
      rootMode: _optionAssertions.assertRootMode,
      configFile: _optionAssertions.assertConfigFileSearch,
      caller: _optionAssertions.assertCallerMetadata,
      filename: _optionAssertions.assertString,
      filenameRelative: _optionAssertions.assertString,
      code: _optionAssertions.assertBoolean,
      ast: _optionAssertions.assertBoolean,
      cloneInputAst: _optionAssertions.assertBoolean,
      envName: _optionAssertions.assertString
    };
    var BABELRC_VALIDATORS = {
      babelrc: _optionAssertions.assertBoolean,
      babelrcRoots: _optionAssertions.assertBabelrcSearch
    };
    var NONPRESET_VALIDATORS = {
      extends: _optionAssertions.assertString,
      ignore: _optionAssertions.assertIgnoreList,
      only: _optionAssertions.assertIgnoreList,
      targets: _optionAssertions.assertTargets,
      browserslistConfigFile: _optionAssertions.assertConfigFileSearch,
      browserslistEnv: _optionAssertions.assertString
    };
    var COMMON_VALIDATORS = {
      inputSourceMap: _optionAssertions.assertInputSourceMap,
      presets: _optionAssertions.assertPluginList,
      plugins: _optionAssertions.assertPluginList,
      passPerPreset: _optionAssertions.assertBoolean,
      assumptions: _optionAssertions.assertAssumptions,
      env: assertEnvSet,
      overrides: assertOverridesList,
      test: _optionAssertions.assertConfigApplicableTest,
      include: _optionAssertions.assertConfigApplicableTest,
      exclude: _optionAssertions.assertConfigApplicableTest,
      retainLines: _optionAssertions.assertBoolean,
      comments: _optionAssertions.assertBoolean,
      shouldPrintComment: _optionAssertions.assertFunction,
      compact: _optionAssertions.assertCompact,
      minified: _optionAssertions.assertBoolean,
      auxiliaryCommentBefore: _optionAssertions.assertString,
      auxiliaryCommentAfter: _optionAssertions.assertString,
      sourceType: _optionAssertions.assertSourceType,
      wrapPluginVisitorMethod: _optionAssertions.assertFunction,
      highlightCode: _optionAssertions.assertBoolean,
      sourceMaps: _optionAssertions.assertSourceMaps,
      sourceMap: _optionAssertions.assertSourceMaps,
      sourceFileName: _optionAssertions.assertString,
      sourceRoot: _optionAssertions.assertString,
      parserOpts: _optionAssertions.assertObject,
      generatorOpts: _optionAssertions.assertObject
    };
    {
      Object.assign(COMMON_VALIDATORS, {
        getModuleId: _optionAssertions.assertFunction,
        moduleRoot: _optionAssertions.assertString,
        moduleIds: _optionAssertions.assertBoolean,
        moduleId: _optionAssertions.assertString
      });
    }
    var knownAssumptions = [
      'arrayLikeIsIterable',
      'constantReexports',
      'constantSuper',
      'enumerableModuleMeta',
      'ignoreFunctionLength',
      'ignoreToPrimitiveHint',
      'iterableIsArray',
      'mutableTemplateObject',
      'noClassCalls',
      'noDocumentAll',
      'noIncompleteNsImportDetection',
      'noNewArrows',
      'objectRestNoSymbols',
      'privateFieldsAsProperties',
      'pureGetters',
      'setClassMethods',
      'setComputedProperties',
      'setPublicClassFields',
      'setSpreadProperties',
      'skipForOfIteratorClosing',
      'superIsCallableConstructor'
    ];
    var assumptionsNames = new Set(knownAssumptions);
    exports.assumptionsNames = assumptionsNames;
    function getSource(loc) {
      return loc.type === 'root' ? loc.source : getSource(loc.parent);
    }
    function validate(type, opts, filename) {
      try {
        return validateNested(
          {
            type: 'root',
            source: type
          },
          opts
        );
      } catch (error) {
        const configError = new _configError.default(error.message, filename);
        if (error.code) configError.code = error.code;
        throw configError;
      }
    }
    function validateNested(loc, opts) {
      const type = getSource(loc);
      assertNoDuplicateSourcemap(opts);
      Object.keys(opts).forEach(key => {
        const optLoc = {
          type: 'option',
          name: key,
          parent: loc
        };
        if (type === 'preset' && NONPRESET_VALIDATORS[key]) {
          throw new Error(`${(0, _optionAssertions.msg)(optLoc)} is not allowed in preset options`);
        }
        if (type !== 'arguments' && ROOT_VALIDATORS[key]) {
          throw new Error(`${(0, _optionAssertions.msg)(optLoc)} is only allowed in root programmatic options`);
        }
        if (type !== 'arguments' && type !== 'configfile' && BABELRC_VALIDATORS[key]) {
          if (type === 'babelrcfile' || type === 'extendsfile') {
            throw new Error(
              `${(0, _optionAssertions.msg)(
                optLoc
              )} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`
            );
          }
          throw new Error(
            `${(0, _optionAssertions.msg)(
              optLoc
            )} is only allowed in root programmatic options, or babel.config.js/config file options`
          );
        }
        const validator =
          COMMON_VALIDATORS[key] ||
          NONPRESET_VALIDATORS[key] ||
          BABELRC_VALIDATORS[key] ||
          ROOT_VALIDATORS[key] ||
          throwUnknownError;
        validator(optLoc, opts[key]);
      });
      return opts;
    }
    function throwUnknownError(loc) {
      const key = loc.name;
      if (_removed.default[key]) {
        const { message, version: version2 = 5 } = _removed.default[key];
        throw new Error(`Using removed Babel ${version2} option: ${(0, _optionAssertions.msg)(loc)} - ${message}`);
      } else {
        const unknownOptErr = new Error(
          `Unknown option: ${(0, _optionAssertions.msg)(
            loc
          )}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`
        );
        unknownOptErr.code = 'BABEL_UNKNOWN_OPTION';
        throw unknownOptErr;
      }
    }
    function has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function assertNoDuplicateSourcemap(opts) {
      if (has(opts, 'sourceMap') && has(opts, 'sourceMaps')) {
        throw new Error('.sourceMap is an alias for .sourceMaps, cannot use both');
      }
    }
    function assertEnvSet(loc, value) {
      if (loc.parent.type === 'env') {
        throw new Error(`${(0, _optionAssertions.msg)(loc)} is not allowed inside of another .env block`);
      }
      const parent = loc.parent;
      const obj = (0, _optionAssertions.assertObject)(loc, value);
      if (obj) {
        for (const envName of Object.keys(obj)) {
          const env = (0, _optionAssertions.assertObject)((0, _optionAssertions.access)(loc, envName), obj[envName]);
          if (!env) continue;
          const envLoc = {
            type: 'env',
            name: envName,
            parent
          };
          validateNested(envLoc, env);
        }
      }
      return obj;
    }
    function assertOverridesList(loc, value) {
      if (loc.parent.type === 'env') {
        throw new Error(`${(0, _optionAssertions.msg)(loc)} is not allowed inside an .env block`);
      }
      if (loc.parent.type === 'overrides') {
        throw new Error(`${(0, _optionAssertions.msg)(loc)} is not allowed inside an .overrides block`);
      }
      const parent = loc.parent;
      const arr = (0, _optionAssertions.assertArray)(loc, value);
      if (arr) {
        for (const [index, item] of arr.entries()) {
          const objLoc = (0, _optionAssertions.access)(loc, index);
          const env = (0, _optionAssertions.assertObject)(objLoc, item);
          if (!env) throw new Error(`${(0, _optionAssertions.msg)(objLoc)} must be an object`);
          const overridesLoc = {
            type: 'overrides',
            index,
            parent
          };
          validateNested(overridesLoc, env);
        }
      }
      return arr;
    }
    function checkNoUnwrappedItemOptionPairs(items, index, type, e) {
      if (index === 0) return;
      const lastItem = items[index - 1];
      const thisItem = items[index];
      if (lastItem.file && lastItem.options === void 0 && typeof thisItem.value === 'object') {
        e.message += `
- Maybe you meant to use
"${type}s": [
  ["${lastItem.file.request}", ${JSON.stringify(thisItem.value, void 0, 2)}]
]
To be a valid ${type}, its name and options should be wrapped in a pair of brackets`;
      }
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/pattern-to-regex.js
var require_pattern_to_regex = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/pattern-to-regex.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = pathToPattern;
    function _path() {
      const data = __path$;
      _path = function() {
        return data;
      };
      return data;
    }
    var sep = `\\${_path().sep}`;
    var endSep = `(?:${sep}|$)`;
    var substitution = `[^${sep}]+`;
    var starPat = `(?:${substitution}${sep})`;
    var starPatLast = `(?:${substitution}${endSep})`;
    var starStarPat = `${starPat}*?`;
    var starStarPatLast = `${starPat}*?${starPatLast}?`;
    function escapeRegExp(string) {
      return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }
    function pathToPattern(pattern, dirname) {
      const parts = _path()
        .resolve(dirname, pattern)
        .split(_path().sep);
      return new RegExp(
        [
          '^',
          ...parts.map((part, i) => {
            const last = i === parts.length - 1;
            if (part === '**') return last ? starStarPatLast : starStarPat;
            if (part === '*') return last ? starPatLast : starPat;
            if (part.indexOf('*.') === 0) {
              return substitution + escapeRegExp(part.slice(1)) + (last ? endSep : sep);
            }
            return escapeRegExp(part) + (last ? endSep : sep);
          })
        ].join('')
      );
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/printer.js
var require_printer = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/printer.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.ConfigPrinter = exports.ChainFormatter = void 0;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var ChainFormatter = {
      Programmatic: 0,
      Config: 1
    };
    exports.ChainFormatter = ChainFormatter;
    var Formatter = {
      title(type, callerName, filepath) {
        let title = '';
        if (type === ChainFormatter.Programmatic) {
          title = 'programmatic options';
          if (callerName) {
            title += ' from ' + callerName;
          }
        } else {
          title = 'config ' + filepath;
        }
        return title;
      },
      loc(index, envName) {
        let loc = '';
        if (index != null) {
          loc += `.overrides[${index}]`;
        }
        if (envName != null) {
          loc += `.env["${envName}"]`;
        }
        return loc;
      },
      *optionsAndDescriptors(opt) {
        const content = Object.assign({}, opt.options);
        delete content.overrides;
        delete content.env;
        const pluginDescriptors = [...(yield* opt.plugins())];
        if (pluginDescriptors.length) {
          content.plugins = pluginDescriptors.map(d => descriptorToConfig(d));
        }
        const presetDescriptors = [...(yield* opt.presets())];
        if (presetDescriptors.length) {
          content.presets = [...presetDescriptors].map(d => descriptorToConfig(d));
        }
        return JSON.stringify(content, void 0, 2);
      }
    };
    function descriptorToConfig(d) {
      var _d$file;
      let name = (_d$file = d.file) == null ? void 0 : _d$file.request;
      if (name == null) {
        if (typeof d.value === 'object') {
          name = d.value;
        } else if (typeof d.value === 'function') {
          name = `[Function: ${d.value.toString().slice(0, 50)} ... ]`;
        }
      }
      if (name == null) {
        name = '[Unknown]';
      }
      if (d.options === void 0) {
        return name;
      } else if (d.name == null) {
        return [name, d.options];
      } else {
        return [name, d.options, d.name];
      }
    }
    var ConfigPrinter = class {
      constructor() {
        this._stack = [];
      }
      configure(enabled, type, { callerName, filepath }) {
        if (!enabled) return () => {};
        return (content, index, envName) => {
          this._stack.push({
            type,
            callerName,
            filepath,
            content,
            index,
            envName
          });
        };
      }
      static *format(config) {
        let title = Formatter.title(config.type, config.callerName, config.filepath);
        const loc = Formatter.loc(config.index, config.envName);
        if (loc) title += ` ${loc}`;
        const content = yield* Formatter.optionsAndDescriptors(config.content);
        return `${title}
${content}`;
      }
      *output() {
        if (this._stack.length === 0) return '';
        const configs = yield* _gensync().all(this._stack.map(s => ConfigPrinter.format(s)));
        return configs.join('\n\n');
      }
    };
    exports.ConfigPrinter = ConfigPrinter;
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/config-chain.js
var require_config_chain = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/config-chain.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.buildPresetChain = buildPresetChain;
    exports.buildPresetChainWalker = void 0;
    exports.buildRootChain = buildRootChain;
    function _path() {
      const data = __path$;
      _path = function() {
        return data;
      };
      return data;
    }
    function _debug() {
      const data = __debug$;
      _debug = function() {
        return data;
      };
      return data;
    }
    var _options = require_options();
    var _patternToRegex = require_pattern_to_regex();
    var _printer = require_printer();
    var _rewriteStackTrace = require_rewrite_stack_trace();
    var _configError = require_config_error();
    var _files = require_index_browser();
    var _caching = require_caching();
    var _configDescriptors = require_config_descriptors();
    var debug = _debug()('babel:config:config-chain');
    function* buildPresetChain(arg, context) {
      const chain = yield* buildPresetChainWalker(arg, context);
      if (!chain) return null;
      return {
        plugins: dedupDescriptors(chain.plugins),
        presets: dedupDescriptors(chain.presets),
        options: chain.options.map(o => normalizeOptions(o)),
        files: /* @__PURE__ */ new Set()
      };
    }
    var buildPresetChainWalker = makeChainWalker({
      root: preset => loadPresetDescriptors(preset),
      env: (preset, envName) => loadPresetEnvDescriptors(preset)(envName),
      overrides: (preset, index) => loadPresetOverridesDescriptors(preset)(index),
      overridesEnv: (preset, index, envName) => loadPresetOverridesEnvDescriptors(preset)(index)(envName),
      createLogger: () => () => {}
    });
    exports.buildPresetChainWalker = buildPresetChainWalker;
    var loadPresetDescriptors = (0, _caching.makeWeakCacheSync)(preset =>
      buildRootDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors)
    );
    var loadPresetEnvDescriptors = (0, _caching.makeWeakCacheSync)(preset =>
      (0, _caching.makeStrongCacheSync)(envName =>
        buildEnvDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, envName)
      )
    );
    var loadPresetOverridesDescriptors = (0, _caching.makeWeakCacheSync)(preset =>
      (0, _caching.makeStrongCacheSync)(index =>
        buildOverrideDescriptors(preset, preset.alias, _configDescriptors.createUncachedDescriptors, index)
      )
    );
    var loadPresetOverridesEnvDescriptors = (0, _caching.makeWeakCacheSync)(preset =>
      (0, _caching.makeStrongCacheSync)(index =>
        (0, _caching.makeStrongCacheSync)(envName =>
          buildOverrideEnvDescriptors(
            preset,
            preset.alias,
            _configDescriptors.createUncachedDescriptors,
            index,
            envName
          )
        )
      )
    );
    function* buildRootChain(opts, context) {
      let configReport, babelRcReport;
      const programmaticLogger = new _printer.ConfigPrinter();
      const programmaticChain = yield* loadProgrammaticChain(
        {
          options: opts,
          dirname: context.cwd
        },
        context,
        void 0,
        programmaticLogger
      );
      if (!programmaticChain) return null;
      const programmaticReport = yield* programmaticLogger.output();
      let configFile;
      if (typeof opts.configFile === 'string') {
        configFile = yield* (0, _files.loadConfig)(opts.configFile, context.cwd, context.envName, context.caller);
      } else if (opts.configFile !== false) {
        configFile = yield* (0, _files.findRootConfig)(context.root, context.envName, context.caller);
      }
      let { babelrc, babelrcRoots } = opts;
      let babelrcRootsDirectory = context.cwd;
      const configFileChain = emptyChain();
      const configFileLogger = new _printer.ConfigPrinter();
      if (configFile) {
        const validatedFile = validateConfigFile(configFile);
        const result = yield* loadFileChain(validatedFile, context, void 0, configFileLogger);
        if (!result) return null;
        configReport = yield* configFileLogger.output();
        if (babelrc === void 0) {
          babelrc = validatedFile.options.babelrc;
        }
        if (babelrcRoots === void 0) {
          babelrcRootsDirectory = validatedFile.dirname;
          babelrcRoots = validatedFile.options.babelrcRoots;
        }
        mergeChain(configFileChain, result);
      }
      let ignoreFile, babelrcFile;
      let isIgnored = false;
      const fileChain = emptyChain();
      if ((babelrc === true || babelrc === void 0) && typeof context.filename === 'string') {
        const pkgData = yield* (0, _files.findPackageData)(context.filename);
        if (pkgData && babelrcLoadEnabled(context, pkgData, babelrcRoots, babelrcRootsDirectory)) {
          ({ ignore: ignoreFile, config: babelrcFile } = yield* (0, _files.findRelativeConfig)(
            pkgData,
            context.envName,
            context.caller
          ));
          if (ignoreFile) {
            fileChain.files.add(ignoreFile.filepath);
          }
          if (ignoreFile && shouldIgnore(context, ignoreFile.ignore, null, ignoreFile.dirname)) {
            isIgnored = true;
          }
          if (babelrcFile && !isIgnored) {
            const validatedFile = validateBabelrcFile(babelrcFile);
            const babelrcLogger = new _printer.ConfigPrinter();
            const result = yield* loadFileChain(validatedFile, context, void 0, babelrcLogger);
            if (!result) {
              isIgnored = true;
            } else {
              babelRcReport = yield* babelrcLogger.output();
              mergeChain(fileChain, result);
            }
          }
          if (babelrcFile && isIgnored) {
            fileChain.files.add(babelrcFile.filepath);
          }
        }
      }
      if (context.showConfig) {
        console.log(
          `Babel configs on "${context.filename}" (ascending priority):
` +
            [configReport, babelRcReport, programmaticReport].filter(x => !!x).join('\n\n') +
            '\n-----End Babel configs-----'
        );
      }
      const chain = mergeChain(mergeChain(mergeChain(emptyChain(), configFileChain), fileChain), programmaticChain);
      return {
        plugins: isIgnored ? [] : dedupDescriptors(chain.plugins),
        presets: isIgnored ? [] : dedupDescriptors(chain.presets),
        options: isIgnored ? [] : chain.options.map(o => normalizeOptions(o)),
        fileHandling: isIgnored ? 'ignored' : 'transpile',
        ignore: ignoreFile || void 0,
        babelrc: babelrcFile || void 0,
        config: configFile || void 0,
        files: chain.files
      };
    }
    function babelrcLoadEnabled(context, pkgData, babelrcRoots, babelrcRootsDirectory) {
      if (typeof babelrcRoots === 'boolean') return babelrcRoots;
      const absoluteRoot = context.root;
      if (babelrcRoots === void 0) {
        return pkgData.directories.indexOf(absoluteRoot) !== -1;
      }
      let babelrcPatterns = babelrcRoots;
      if (!Array.isArray(babelrcPatterns)) {
        babelrcPatterns = [babelrcPatterns];
      }
      babelrcPatterns = babelrcPatterns.map(pat => {
        return typeof pat === 'string' ? _path().resolve(babelrcRootsDirectory, pat) : pat;
      });
      if (babelrcPatterns.length === 1 && babelrcPatterns[0] === absoluteRoot) {
        return pkgData.directories.indexOf(absoluteRoot) !== -1;
      }
      return babelrcPatterns.some(pat => {
        if (typeof pat === 'string') {
          pat = (0, _patternToRegex.default)(pat, babelrcRootsDirectory);
        }
        return pkgData.directories.some(directory => {
          return matchPattern(pat, babelrcRootsDirectory, directory, context);
        });
      });
    }
    var validateConfigFile = (0, _caching.makeWeakCacheSync)(file => ({
      filepath: file.filepath,
      dirname: file.dirname,
      options: (0, _options.validate)('configfile', file.options, file.filepath)
    }));
    var validateBabelrcFile = (0, _caching.makeWeakCacheSync)(file => ({
      filepath: file.filepath,
      dirname: file.dirname,
      options: (0, _options.validate)('babelrcfile', file.options, file.filepath)
    }));
    var validateExtendFile = (0, _caching.makeWeakCacheSync)(file => ({
      filepath: file.filepath,
      dirname: file.dirname,
      options: (0, _options.validate)('extendsfile', file.options, file.filepath)
    }));
    var loadProgrammaticChain = makeChainWalker({
      root: input => buildRootDescriptors(input, 'base', _configDescriptors.createCachedDescriptors),
      env: (input, envName) => buildEnvDescriptors(input, 'base', _configDescriptors.createCachedDescriptors, envName),
      overrides: (input, index) =>
        buildOverrideDescriptors(input, 'base', _configDescriptors.createCachedDescriptors, index),
      overridesEnv: (input, index, envName) =>
        buildOverrideEnvDescriptors(input, 'base', _configDescriptors.createCachedDescriptors, index, envName),
      createLogger: (input, context, baseLogger) => buildProgrammaticLogger(input, context, baseLogger)
    });
    var loadFileChainWalker = makeChainWalker({
      root: file => loadFileDescriptors(file),
      env: (file, envName) => loadFileEnvDescriptors(file)(envName),
      overrides: (file, index) => loadFileOverridesDescriptors(file)(index),
      overridesEnv: (file, index, envName) => loadFileOverridesEnvDescriptors(file)(index)(envName),
      createLogger: (file, context, baseLogger) => buildFileLogger(file.filepath, context, baseLogger)
    });
    function* loadFileChain(input, context, files, baseLogger) {
      const chain = yield* loadFileChainWalker(input, context, files, baseLogger);
      if (chain) {
        chain.files.add(input.filepath);
      }
      return chain;
    }
    var loadFileDescriptors = (0, _caching.makeWeakCacheSync)(file =>
      buildRootDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors)
    );
    var loadFileEnvDescriptors = (0, _caching.makeWeakCacheSync)(file =>
      (0, _caching.makeStrongCacheSync)(envName =>
        buildEnvDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, envName)
      )
    );
    var loadFileOverridesDescriptors = (0, _caching.makeWeakCacheSync)(file =>
      (0, _caching.makeStrongCacheSync)(index =>
        buildOverrideDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, index)
      )
    );
    var loadFileOverridesEnvDescriptors = (0, _caching.makeWeakCacheSync)(file =>
      (0, _caching.makeStrongCacheSync)(index =>
        (0, _caching.makeStrongCacheSync)(envName =>
          buildOverrideEnvDescriptors(file, file.filepath, _configDescriptors.createUncachedDescriptors, index, envName)
        )
      )
    );
    function buildFileLogger(filepath, context, baseLogger) {
      if (!baseLogger) {
        return () => {};
      }
      return baseLogger.configure(context.showConfig, _printer.ChainFormatter.Config, {
        filepath
      });
    }
    function buildRootDescriptors({ dirname, options }, alias, descriptors) {
      return descriptors(dirname, options, alias);
    }
    function buildProgrammaticLogger(_, context, baseLogger) {
      var _context$caller;
      if (!baseLogger) {
        return () => {};
      }
      return baseLogger.configure(context.showConfig, _printer.ChainFormatter.Programmatic, {
        callerName: (_context$caller = context.caller) == null ? void 0 : _context$caller.name
      });
    }
    function buildEnvDescriptors({ dirname, options }, alias, descriptors, envName) {
      const opts = options.env && options.env[envName];
      return opts ? descriptors(dirname, opts, `${alias}.env["${envName}"]`) : null;
    }
    function buildOverrideDescriptors({ dirname, options }, alias, descriptors, index) {
      const opts = options.overrides && options.overrides[index];
      if (!opts) throw new Error('Assertion failure - missing override');
      return descriptors(dirname, opts, `${alias}.overrides[${index}]`);
    }
    function buildOverrideEnvDescriptors({ dirname, options }, alias, descriptors, index, envName) {
      const override = options.overrides && options.overrides[index];
      if (!override) throw new Error('Assertion failure - missing override');
      const opts = override.env && override.env[envName];
      return opts ? descriptors(dirname, opts, `${alias}.overrides[${index}].env["${envName}"]`) : null;
    }
    function makeChainWalker({ root, env, overrides, overridesEnv, createLogger }) {
      return function* chainWalker(input, context, files = /* @__PURE__ */ new Set(), baseLogger) {
        const { dirname } = input;
        const flattenedConfigs = [];
        const rootOpts = root(input);
        if (configIsApplicable(rootOpts, dirname, context, input.filepath)) {
          flattenedConfigs.push({
            config: rootOpts,
            envName: void 0,
            index: void 0
          });
          const envOpts = env(input, context.envName);
          if (envOpts && configIsApplicable(envOpts, dirname, context, input.filepath)) {
            flattenedConfigs.push({
              config: envOpts,
              envName: context.envName,
              index: void 0
            });
          }
          (rootOpts.options.overrides || []).forEach((_, index) => {
            const overrideOps = overrides(input, index);
            if (configIsApplicable(overrideOps, dirname, context, input.filepath)) {
              flattenedConfigs.push({
                config: overrideOps,
                index,
                envName: void 0
              });
              const overrideEnvOpts = overridesEnv(input, index, context.envName);
              if (overrideEnvOpts && configIsApplicable(overrideEnvOpts, dirname, context, input.filepath)) {
                flattenedConfigs.push({
                  config: overrideEnvOpts,
                  index,
                  envName: context.envName
                });
              }
            }
          });
        }
        if (
          flattenedConfigs.some(({ config: { options: { ignore, only } } }) =>
            shouldIgnore(context, ignore, only, dirname)
          )
        ) {
          return null;
        }
        const chain = emptyChain();
        const logger = createLogger(input, context, baseLogger);
        for (const { config, index, envName } of flattenedConfigs) {
          if (!(yield* mergeExtendsChain(chain, config.options, dirname, context, files, baseLogger))) {
            return null;
          }
          logger(config, index, envName);
          yield* mergeChainOpts(chain, config);
        }
        return chain;
      };
    }
    function* mergeExtendsChain(chain, opts, dirname, context, files, baseLogger) {
      if (opts.extends === void 0) return true;
      const file = yield* (0, _files.loadConfig)(opts.extends, dirname, context.envName, context.caller);
      if (files.has(file)) {
        throw new Error(
          `Configuration cycle detected loading ${file.filepath}.
File already loaded following the config chain:
` + Array.from(files, file2 => ` - ${file2.filepath}`).join('\n')
        );
      }
      files.add(file);
      const fileChain = yield* loadFileChain(validateExtendFile(file), context, files, baseLogger);
      files.delete(file);
      if (!fileChain) return false;
      mergeChain(chain, fileChain);
      return true;
    }
    function mergeChain(target, source) {
      target.options.push(...source.options);
      target.plugins.push(...source.plugins);
      target.presets.push(...source.presets);
      for (const file of source.files) {
        target.files.add(file);
      }
      return target;
    }
    function* mergeChainOpts(target, { options, plugins, presets }) {
      target.options.push(options);
      target.plugins.push(...(yield* plugins()));
      target.presets.push(...(yield* presets()));
      return target;
    }
    function emptyChain() {
      return {
        options: [],
        presets: [],
        plugins: [],
        files: /* @__PURE__ */ new Set()
      };
    }
    function normalizeOptions(opts) {
      const options = Object.assign({}, opts);
      delete options.extends;
      delete options.env;
      delete options.overrides;
      delete options.plugins;
      delete options.presets;
      delete options.passPerPreset;
      delete options.ignore;
      delete options.only;
      delete options.test;
      delete options.include;
      delete options.exclude;
      if (Object.prototype.hasOwnProperty.call(options, 'sourceMap')) {
        options.sourceMaps = options.sourceMap;
        delete options.sourceMap;
      }
      return options;
    }
    function dedupDescriptors(items) {
      const map = /* @__PURE__ */ new Map();
      const descriptors = [];
      for (const item of items) {
        if (typeof item.value === 'function') {
          const fnKey = item.value;
          let nameMap = map.get(fnKey);
          if (!nameMap) {
            nameMap = /* @__PURE__ */ new Map();
            map.set(fnKey, nameMap);
          }
          let desc = nameMap.get(item.name);
          if (!desc) {
            desc = {
              value: item
            };
            descriptors.push(desc);
            if (!item.ownPass) nameMap.set(item.name, desc);
          } else {
            desc.value = item;
          }
        } else {
          descriptors.push({
            value: item
          });
        }
      }
      return descriptors.reduce((acc, desc) => {
        acc.push(desc.value);
        return acc;
      }, []);
    }
    function configIsApplicable({ options }, dirname, context, configName) {
      return (
        (options.test === void 0 || configFieldIsApplicable(context, options.test, dirname, configName)) &&
        (options.include === void 0 || configFieldIsApplicable(context, options.include, dirname, configName)) &&
        (options.exclude === void 0 || !configFieldIsApplicable(context, options.exclude, dirname, configName))
      );
    }
    function configFieldIsApplicable(context, test, dirname, configName) {
      const patterns = Array.isArray(test) ? test : [test];
      return matchesPatterns(context, patterns, dirname, configName);
    }
    function ignoreListReplacer(_key, value) {
      if (value instanceof RegExp) {
        return String(value);
      }
      return value;
    }
    function shouldIgnore(context, ignore, only, dirname) {
      if (ignore && matchesPatterns(context, ignore, dirname)) {
        var _context$filename;
        const message = `No config is applied to "${
          (_context$filename = context.filename) != null ? _context$filename : '(unknown)'
        }" because it matches one of \`ignore: ${JSON.stringify(ignore, ignoreListReplacer)}\` from "${dirname}"`;
        debug(message);
        if (context.showConfig) {
          console.log(message);
        }
        return true;
      }
      if (only && !matchesPatterns(context, only, dirname)) {
        var _context$filename2;
        const message = `No config is applied to "${
          (_context$filename2 = context.filename) != null ? _context$filename2 : '(unknown)'
        }" because it fails to match one of \`only: ${JSON.stringify(only, ignoreListReplacer)}\` from "${dirname}"`;
        debug(message);
        if (context.showConfig) {
          console.log(message);
        }
        return true;
      }
      return false;
    }
    function matchesPatterns(context, patterns, dirname, configName) {
      return patterns.some(pattern => matchPattern(pattern, dirname, context.filename, context, configName));
    }
    function matchPattern(pattern, dirname, pathToTest, context, configName) {
      if (typeof pattern === 'function') {
        return !!(0, _rewriteStackTrace.endHiddenCallStack)(pattern)(pathToTest, {
          dirname,
          envName: context.envName,
          caller: context.caller
        });
      }
      if (typeof pathToTest !== 'string') {
        throw new _configError.default(
          `Configuration contains string/RegExp pattern, but no filename was passed to Babel`,
          configName
        );
      }
      if (typeof pattern === 'string') {
        pattern = (0, _patternToRegex.default)(pattern, dirname);
      }
      return pattern.test(pathToTest);
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/plugins.js
var require_plugins = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/validation/plugins.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.validatePluginObject = validatePluginObject;
    var _optionAssertions = require_option_assertions();
    var VALIDATORS = {
      name: _optionAssertions.assertString,
      manipulateOptions: _optionAssertions.assertFunction,
      pre: _optionAssertions.assertFunction,
      post: _optionAssertions.assertFunction,
      inherits: _optionAssertions.assertFunction,
      visitor: assertVisitorMap,
      parserOverride: _optionAssertions.assertFunction,
      generatorOverride: _optionAssertions.assertFunction
    };
    function assertVisitorMap(loc, value) {
      const obj = (0, _optionAssertions.assertObject)(loc, value);
      if (obj) {
        Object.keys(obj).forEach(prop => assertVisitorHandler(prop, obj[prop]));
        if (obj.enter || obj.exit) {
          throw new Error(
            `${(0, _optionAssertions.msg)(
              loc
            )} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`
          );
        }
      }
      return obj;
    }
    function assertVisitorHandler(key, value) {
      if (value && typeof value === 'object') {
        Object.keys(value).forEach(handler => {
          if (handler !== 'enter' && handler !== 'exit') {
            throw new Error(`.visitor["${key}"] may only have .enter and/or .exit handlers.`);
          }
        });
      } else if (typeof value !== 'function') {
        throw new Error(`.visitor["${key}"] must be a function`);
      }
      return value;
    }
    function validatePluginObject(obj) {
      const rootPath = {
        type: 'root',
        source: 'plugin'
      };
      Object.keys(obj).forEach(key => {
        const validator = VALIDATORS[key];
        if (validator) {
          const optLoc = {
            type: 'option',
            name: key,
            parent: rootPath
          };
          validator(optLoc, obj[key]);
        } else {
          const invalidPluginPropertyError = new Error(`.${key} is not a valid Plugin property`);
          invalidPluginPropertyError.code = 'BABEL_UNKNOWN_PLUGIN_PROPERTY';
          throw invalidPluginPropertyError;
        }
      });
      return obj;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/helpers/config-api.js
var require_config_api = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/helpers/config-api.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.makeConfigAPI = makeConfigAPI;
    exports.makePluginAPI = makePluginAPI;
    exports.makePresetAPI = makePresetAPI;
    function _semver() {
      const data = __semver$;
      _semver = function() {
        return data;
      };
      return data;
    }
    var _ = require_lib();
    var _caching = require_caching();
    function makeConfigAPI(cache) {
      const env = value =>
        cache.using(data => {
          if (typeof value === 'undefined') return data.envName;
          if (typeof value === 'function') {
            return (0, _caching.assertSimpleType)(value(data.envName));
          }
          return (Array.isArray(value) ? value : [value]).some(entry => {
            if (typeof entry !== 'string') {
              throw new Error('Unexpected non-string value');
            }
            return entry === data.envName;
          });
        });
      const caller = cb => cache.using(data => (0, _caching.assertSimpleType)(cb(data.caller)));
      return {
        version: _.version,
        cache: cache.simple(),
        env,
        async: () => false,
        caller,
        assertVersion
      };
    }
    function makePresetAPI(cache, externalDependencies) {
      const targets = () => JSON.parse(cache.using(data => JSON.stringify(data.targets)));
      const addExternalDependency = ref => {
        externalDependencies.push(ref);
      };
      return Object.assign({}, makeConfigAPI(cache), {
        targets,
        addExternalDependency
      });
    }
    function makePluginAPI(cache, externalDependencies) {
      const assumption = name => cache.using(data => data.assumptions[name]);
      return Object.assign({}, makePresetAPI(cache, externalDependencies), {
        assumption
      });
    }
    function assertVersion(range) {
      if (typeof range === 'number') {
        if (!Number.isInteger(range)) {
          throw new Error('Expected string or integer value.');
        }
        range = `^${range}.0.0-0`;
      }
      if (typeof range !== 'string') {
        throw new Error('Expected string or integer value.');
      }
      if (_semver().satisfies(_.version, range)) return;
      const limit = Error.stackTraceLimit;
      if (typeof limit === 'number' && limit < 25) {
        Error.stackTraceLimit = 25;
      }
      const err = new Error(
        `Requires Babel "${range}", but was loaded with "${_.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`
      );
      if (typeof limit === 'number') {
        Error.stackTraceLimit = limit;
      }
      throw Object.assign(err, {
        code: 'BABEL_VERSION_UNSUPPORTED',
        version: _.version,
        range
      });
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/partial.js
var require_partial = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/partial.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = loadPrivatePartialConfig;
    exports.loadPartialConfig = void 0;
    function _path() {
      const data = __path$;
      _path = function() {
        return data;
      };
      return data;
    }
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _plugin = require_plugin();
    var _util = require_util();
    var _item = require_item();
    var _configChain = require_config_chain();
    var _environment = require_environment();
    var _options = require_options();
    var _files = require_index_browser();
    var _resolveTargets = require_resolve_targets_browser();
    var _excluded = ['showIgnoredFiles'];
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    function resolveRootMode(rootDir, rootMode) {
      switch (rootMode) {
        case 'root':
          return rootDir;
        case 'upward-optional': {
          const upwardRootDir = (0, _files.findConfigUpwards)(rootDir);
          return upwardRootDir === null ? rootDir : upwardRootDir;
        }
        case 'upward': {
          const upwardRootDir = (0, _files.findConfigUpwards)(rootDir);
          if (upwardRootDir !== null) return upwardRootDir;
          throw Object.assign(
            new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${rootDir}".
One of the following config files must be in the directory tree: "${_files.ROOT_CONFIG_FILENAMES.join(', ')}".`),
            {
              code: 'BABEL_ROOT_NOT_FOUND',
              dirname: rootDir
            }
          );
        }
        default:
          throw new Error(`Assertion failure - unknown rootMode value.`);
      }
    }
    function* loadPrivatePartialConfig(inputOpts) {
      if (inputOpts != null && (typeof inputOpts !== 'object' || Array.isArray(inputOpts))) {
        throw new Error('Babel options must be an object, null, or undefined');
      }
      const args = inputOpts ? (0, _options.validate)('arguments', inputOpts) : {};
      const {
        envName = (0, _environment.getEnv)(),
        cwd = '.',
        root: rootDir = '.',
        rootMode = 'root',
        caller,
        cloneInputAst = true
      } = args;
      const absoluteCwd = _path().resolve(cwd);
      const absoluteRootDir = resolveRootMode(_path().resolve(absoluteCwd, rootDir), rootMode);
      const filename = typeof args.filename === 'string' ? _path().resolve(cwd, args.filename) : void 0;
      const showConfigPath = yield* (0, _files.resolveShowConfigPath)(absoluteCwd);
      const context = {
        filename,
        cwd: absoluteCwd,
        root: absoluteRootDir,
        envName,
        caller,
        showConfig: showConfigPath === filename
      };
      const configChain = yield* (0, _configChain.buildRootChain)(args, context);
      if (!configChain) return null;
      const merged = {
        assumptions: {}
      };
      configChain.options.forEach(opts => {
        (0, _util.mergeOptions)(merged, opts);
      });
      const options = Object.assign({}, merged, {
        targets: (0, _resolveTargets.resolveTargets)(merged, absoluteRootDir),
        cloneInputAst,
        babelrc: false,
        configFile: false,
        browserslistConfigFile: false,
        passPerPreset: false,
        envName: context.envName,
        cwd: context.cwd,
        root: context.root,
        rootMode: 'root',
        filename: typeof context.filename === 'string' ? context.filename : void 0,
        plugins: configChain.plugins.map(descriptor => (0, _item.createItemFromDescriptor)(descriptor)),
        presets: configChain.presets.map(descriptor => (0, _item.createItemFromDescriptor)(descriptor))
      });
      return {
        options,
        context,
        fileHandling: configChain.fileHandling,
        ignore: configChain.ignore,
        babelrc: configChain.babelrc,
        config: configChain.config,
        files: configChain.files
      };
    }
    var loadPartialConfig2 = _gensync()(function*(opts) {
      let showIgnoredFiles = false;
      if (typeof opts === 'object' && opts !== null && !Array.isArray(opts)) {
        var _opts = opts;
        ({ showIgnoredFiles } = _opts);
        opts = _objectWithoutPropertiesLoose(_opts, _excluded);
        _opts;
      }
      const result = yield* loadPrivatePartialConfig(opts);
      if (!result) return null;
      const { options, babelrc, ignore, config, fileHandling, files } = result;
      if (fileHandling === 'ignored' && !showIgnoredFiles) {
        return null;
      }
      (options.plugins || []).forEach(item => {
        if (item.value instanceof _plugin.default) {
          throw new Error('Passing cached plugin instances is not supported in babel.loadPartialConfig()');
        }
      });
      return new PartialConfig(
        options,
        babelrc ? babelrc.filepath : void 0,
        ignore ? ignore.filepath : void 0,
        config ? config.filepath : void 0,
        fileHandling,
        files
      );
    });
    exports.loadPartialConfig = loadPartialConfig2;
    var PartialConfig = class {
      constructor(options, babelrc, ignore, config, fileHandling, files) {
        this.options = void 0;
        this.babelrc = void 0;
        this.babelignore = void 0;
        this.config = void 0;
        this.fileHandling = void 0;
        this.files = void 0;
        this.options = options;
        this.babelignore = ignore;
        this.babelrc = babelrc;
        this.config = config;
        this.fileHandling = fileHandling;
        this.files = files;
        Object.freeze(this);
      }
      hasFilesystemConfig() {
        return this.babelrc !== void 0 || this.config !== void 0;
      }
    };
    Object.freeze(PartialConfig.prototype);
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/full.js
var require_full = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/full.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _async = require_async();
    var _util = require_util();
    var context = require_lib();
    var _plugin = require_plugin();
    var _item = require_item();
    var _configChain = require_config_chain();
    var _deepArray = require_deep_array();
    function _traverse() {
      const data = ___babel_traverse$;
      _traverse = function() {
        return data;
      };
      return data;
    }
    var _caching = require_caching();
    var _options = require_options();
    var _plugins = require_plugins();
    var _configApi = require_config_api();
    var _partial = require_partial();
    var _configError = require_config_error();
    var _default = _gensync()(function* loadFullConfig(inputOpts) {
      var _opts$assumptions;
      const result = yield* (0, _partial.default)(inputOpts);
      if (!result) {
        return null;
      }
      const { options, context: context2, fileHandling } = result;
      if (fileHandling === 'ignored') {
        return null;
      }
      const optionDefaults = {};
      const { plugins, presets } = options;
      if (!plugins || !presets) {
        throw new Error('Assertion failure - plugins and presets exist');
      }
      const presetContext = Object.assign({}, context2, {
        targets: options.targets
      });
      const toDescriptor = item => {
        const desc = (0, _item.getItemDescriptor)(item);
        if (!desc) {
          throw new Error('Assertion failure - must be config item');
        }
        return desc;
      };
      const presetsDescriptors = presets.map(toDescriptor);
      const initialPluginsDescriptors = plugins.map(toDescriptor);
      const pluginDescriptorsByPass = [[]];
      const passes = [];
      const externalDependencies = [];
      const ignored = yield* enhanceError(context2, function* recursePresetDescriptors(
        rawPresets,
        pluginDescriptorsPass
      ) {
        const presets2 = [];
        for (let i = 0; i < rawPresets.length; i++) {
          const descriptor = rawPresets[i];
          if (descriptor.options !== false) {
            try {
              var preset = yield* loadPresetDescriptor(descriptor, presetContext);
            } catch (e) {
              if (e.code === 'BABEL_UNKNOWN_OPTION') {
                (0, _options.checkNoUnwrappedItemOptionPairs)(rawPresets, i, 'preset', e);
              }
              throw e;
            }
            externalDependencies.push(preset.externalDependencies);
            if (descriptor.ownPass) {
              presets2.push({
                preset: preset.chain,
                pass: []
              });
            } else {
              presets2.unshift({
                preset: preset.chain,
                pass: pluginDescriptorsPass
              });
            }
          }
        }
        if (presets2.length > 0) {
          pluginDescriptorsByPass.splice(1, 0, ...presets2.map(o => o.pass).filter(p => p !== pluginDescriptorsPass));
          for (const { preset: preset2, pass } of presets2) {
            if (!preset2) return true;
            pass.push(...preset2.plugins);
            const ignored2 = yield* recursePresetDescriptors(preset2.presets, pass);
            if (ignored2) return true;
            preset2.options.forEach(opts2 => {
              (0, _util.mergeOptions)(optionDefaults, opts2);
            });
          }
        }
      })(presetsDescriptors, pluginDescriptorsByPass[0]);
      if (ignored) return null;
      const opts = optionDefaults;
      (0, _util.mergeOptions)(opts, options);
      const pluginContext = Object.assign({}, presetContext, {
        assumptions: (_opts$assumptions = opts.assumptions) != null ? _opts$assumptions : {}
      });
      yield* enhanceError(context2, function* loadPluginDescriptors() {
        pluginDescriptorsByPass[0].unshift(...initialPluginsDescriptors);
        for (const descs of pluginDescriptorsByPass) {
          const pass = [];
          passes.push(pass);
          for (let i = 0; i < descs.length; i++) {
            const descriptor = descs[i];
            if (descriptor.options !== false) {
              try {
                var plugin = yield* loadPluginDescriptor(descriptor, pluginContext);
              } catch (e) {
                if (e.code === 'BABEL_UNKNOWN_PLUGIN_PROPERTY') {
                  (0, _options.checkNoUnwrappedItemOptionPairs)(descs, i, 'plugin', e);
                }
                throw e;
              }
              pass.push(plugin);
              externalDependencies.push(plugin.externalDependencies);
            }
          }
        }
      })();
      opts.plugins = passes[0];
      opts.presets = passes
        .slice(1)
        .filter(plugins2 => plugins2.length > 0)
        .map(plugins2 => ({
          plugins: plugins2
        }));
      opts.passPerPreset = opts.presets.length > 0;
      return {
        options: opts,
        passes,
        externalDependencies: (0, _deepArray.finalize)(externalDependencies)
      };
    });
    exports.default = _default;
    function enhanceError(context2, fn) {
      return function*(arg1, arg2) {
        try {
          return yield* fn(arg1, arg2);
        } catch (e) {
          if (!/^\[BABEL\]/.test(e.message)) {
            var _context$filename;
            e.message = `[BABEL] ${
              (_context$filename = context2.filename) != null ? _context$filename : 'unknown file'
            }: ${e.message}`;
          }
          throw e;
        }
      };
    }
    var makeDescriptorLoader = apiFactory =>
      (0, _caching.makeWeakCache)(function*({ value, options, dirname, alias }, cache) {
        if (options === false) throw new Error('Assertion failure');
        options = options || {};
        const externalDependencies = [];
        let item = value;
        if (typeof value === 'function') {
          const factory = (0, _async.maybeAsync)(
            value,
            `You appear to be using an async plugin/preset, but Babel has been called synchronously`
          );
          const api = Object.assign({}, context, apiFactory(cache, externalDependencies));
          try {
            item = yield* factory(api, options, dirname);
          } catch (e) {
            if (alias) {
              e.message += ` (While processing: ${JSON.stringify(alias)})`;
            }
            throw e;
          }
        }
        if (!item || typeof item !== 'object') {
          throw new Error('Plugin/Preset did not return an object.');
        }
        if ((0, _async.isThenable)(item)) {
          yield* [];
          throw new Error(
            `You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(
              alias
            )})`
          );
        }
        if (externalDependencies.length > 0 && (!cache.configured() || cache.mode() === 'forever')) {
          let error = `A plugin/preset has external untracked dependencies (${externalDependencies[0]}), but the cache `;
          if (!cache.configured()) {
            error += `has not been configured to be invalidated when the external dependencies change. `;
          } else {
            error += ` has been configured to never be invalidated. `;
          }
          error += `Plugins/presets should configure their cache to be invalidated when the external dependencies change, for example using \`api.cache.invalidate(() => statSync(filepath).mtimeMs)\` or \`api.cache.never()\`
(While processing: ${JSON.stringify(alias)})`;
          throw new Error(error);
        }
        return {
          value: item,
          options,
          dirname,
          alias,
          externalDependencies: (0, _deepArray.finalize)(externalDependencies)
        };
      });
    var pluginDescriptorLoader = makeDescriptorLoader(_configApi.makePluginAPI);
    var presetDescriptorLoader = makeDescriptorLoader(_configApi.makePresetAPI);
    var instantiatePlugin = (0, _caching.makeWeakCache)(function*(
      { value, options, dirname, alias, externalDependencies },
      cache
    ) {
      const pluginObj = (0, _plugins.validatePluginObject)(value);
      const plugin = Object.assign({}, pluginObj);
      if (plugin.visitor) {
        plugin.visitor = _traverse().default.explode(Object.assign({}, plugin.visitor));
      }
      if (plugin.inherits) {
        const inheritsDescriptor = {
          name: void 0,
          alias: `${alias}$inherits`,
          value: plugin.inherits,
          options,
          dirname
        };
        const inherits = yield* (0, _async.forwardAsync)(loadPluginDescriptor, run => {
          return cache.invalidate(data => run(inheritsDescriptor, data));
        });
        plugin.pre = chain(inherits.pre, plugin.pre);
        plugin.post = chain(inherits.post, plugin.post);
        plugin.manipulateOptions = chain(inherits.manipulateOptions, plugin.manipulateOptions);
        plugin.visitor = _traverse().default.visitors.merge([inherits.visitor || {}, plugin.visitor || {}]);
        if (inherits.externalDependencies.length > 0) {
          if (externalDependencies.length === 0) {
            externalDependencies = inherits.externalDependencies;
          } else {
            externalDependencies = (0, _deepArray.finalize)([externalDependencies, inherits.externalDependencies]);
          }
        }
      }
      return new _plugin.default(plugin, options, alias, externalDependencies);
    });
    function* loadPluginDescriptor(descriptor, context2) {
      if (descriptor.value instanceof _plugin.default) {
        if (descriptor.options) {
          throw new Error('Passed options to an existing Plugin instance will not work.');
        }
        return descriptor.value;
      }
      return yield* instantiatePlugin(yield* pluginDescriptorLoader(descriptor, context2), context2);
    }
    var needsFilename = val => val && typeof val !== 'function';
    var validateIfOptionNeedsFilename = (options, descriptor) => {
      if (needsFilename(options.test) || needsFilename(options.include) || needsFilename(options.exclude)) {
        const formattedPresetName = descriptor.name ? `"${descriptor.name}"` : '/* your preset */';
        throw new _configError.default(
          [
            `Preset ${formattedPresetName} requires a filename to be set when babel is called directly,`,
            `\`\`\``,
            `babel.transformSync(code, { filename: 'file.ts', presets: [${formattedPresetName}] });`,
            `\`\`\``,
            `See https://babeljs.io/docs/en/options#filename for more information.`
          ].join('\n')
        );
      }
    };
    var validatePreset = (preset, context2, descriptor) => {
      if (!context2.filename) {
        const { options } = preset;
        validateIfOptionNeedsFilename(options, descriptor);
        if (options.overrides) {
          options.overrides.forEach(overrideOptions => validateIfOptionNeedsFilename(overrideOptions, descriptor));
        }
      }
    };
    var instantiatePreset = (0, _caching.makeWeakCacheSync)(({ value, dirname, alias, externalDependencies }) => {
      return {
        options: (0, _options.validate)('preset', value),
        alias,
        dirname,
        externalDependencies
      };
    });
    function* loadPresetDescriptor(descriptor, context2) {
      const preset = instantiatePreset(yield* presetDescriptorLoader(descriptor, context2));
      validatePreset(preset, context2, descriptor);
      return {
        chain: yield* (0, _configChain.buildPresetChain)(preset, context2),
        externalDependencies: preset.externalDependencies
      };
    }
    function chain(a, b) {
      const fns = [a, b].filter(Boolean);
      if (fns.length <= 1) return fns[0];
      return function(...args) {
        for (const fn of fns) {
          fn.apply(this, args);
        }
      };
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/index.js
var require_config = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/config/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.createConfigItem = createConfigItem2;
    exports.createConfigItemSync = exports.createConfigItemAsync = void 0;
    Object.defineProperty(exports, 'default', {
      enumerable: true,
      get: function() {
        return _full.default;
      }
    });
    exports.loadPartialConfigSync = exports.loadPartialConfigAsync = exports.loadPartialConfig = exports.loadOptionsSync = exports.loadOptionsAsync = exports.loadOptions = void 0;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _full = require_full();
    var _partial = require_partial();
    var _item = require_item();
    var loadOptionsRunner = _gensync()(function*(opts) {
      var _config$options;
      const config = yield* (0, _full.default)(opts);
      return (_config$options = config == null ? void 0 : config.options) != null ? _config$options : null;
    });
    var createConfigItemRunner = _gensync()(_item.createConfigItem);
    var maybeErrback = runner => (argOrCallback, maybeCallback) => {
      let arg;
      let callback;
      if (maybeCallback === void 0 && typeof argOrCallback === 'function') {
        callback = argOrCallback;
        arg = void 0;
      } else {
        callback = maybeCallback;
        arg = argOrCallback;
      }
      return callback ? runner.errback(arg, callback) : runner.sync(arg);
    };
    var loadPartialConfig2 = maybeErrback(_partial.loadPartialConfig);
    exports.loadPartialConfig = loadPartialConfig2;
    var loadPartialConfigSync2 = _partial.loadPartialConfig.sync;
    exports.loadPartialConfigSync = loadPartialConfigSync2;
    var loadPartialConfigAsync2 = _partial.loadPartialConfig.async;
    exports.loadPartialConfigAsync = loadPartialConfigAsync2;
    var loadOptions2 = maybeErrback(loadOptionsRunner);
    exports.loadOptions = loadOptions2;
    var loadOptionsSync2 = loadOptionsRunner.sync;
    exports.loadOptionsSync = loadOptionsSync2;
    var loadOptionsAsync2 = loadOptionsRunner.async;
    exports.loadOptionsAsync = loadOptionsAsync2;
    var createConfigItemSync2 = createConfigItemRunner.sync;
    exports.createConfigItemSync = createConfigItemSync2;
    var createConfigItemAsync2 = createConfigItemRunner.async;
    exports.createConfigItemAsync = createConfigItemAsync2;
    function createConfigItem2(target, options, callback) {
      if (callback !== void 0) {
        return createConfigItemRunner.errback(target, options, callback);
      } else if (typeof options === 'function') {
        return createConfigItemRunner.errback(target, void 0, callback);
      } else {
        return createConfigItemRunner.sync(target, options);
      }
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/plugin-pass.js
var require_plugin_pass = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/plugin-pass.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var PluginPass = class {
      constructor(file, key, options) {
        this._map = /* @__PURE__ */ new Map();
        this.key = void 0;
        this.file = void 0;
        this.opts = void 0;
        this.cwd = void 0;
        this.filename = void 0;
        this.key = key;
        this.file = file;
        this.opts = options || {};
        this.cwd = file.opts.cwd;
        this.filename = file.opts.filename;
      }
      set(key, val) {
        this._map.set(key, val);
      }
      get(key) {
        return this._map.get(key);
      }
      availableHelper(name, versionRange) {
        return this.file.availableHelper(name, versionRange);
      }
      addHelper(name) {
        return this.file.addHelper(name);
      }
      addImport() {
        return this.file.addImport();
      }
      buildCodeFrameError(node, msg, _Error) {
        return this.file.buildCodeFrameError(node, msg, _Error);
      }
    };
    exports.default = PluginPass;
    {
      PluginPass.prototype.getModuleName = function getModuleName() {
        return this.file.getModuleName();
      };
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/block-hoist-plugin.js
var require_block_hoist_plugin = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/block-hoist-plugin.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = loadBlockHoistPlugin;
    function _traverse() {
      const data = ___babel_traverse$;
      _traverse = function() {
        return data;
      };
      return data;
    }
    var _plugin = require_plugin();
    var LOADED_PLUGIN;
    var blockHoistPlugin = {
      name: 'internal.blockHoist',
      visitor: {
        Block: {
          exit({ node }) {
            const { body } = node;
            let max = Math.pow(2, 30) - 1;
            let hasChange = false;
            for (let i = 0; i < body.length; i++) {
              const n = body[i];
              const p = priority(n);
              if (p > max) {
                hasChange = true;
                break;
              }
              max = p;
            }
            if (!hasChange) return;
            node.body = stableSort(body.slice());
          }
        }
      }
    };
    function loadBlockHoistPlugin() {
      if (!LOADED_PLUGIN) {
        LOADED_PLUGIN = new _plugin.default(
          Object.assign({}, blockHoistPlugin, {
            visitor: _traverse().default.explode(blockHoistPlugin.visitor)
          }),
          {}
        );
      }
      return LOADED_PLUGIN;
    }
    function priority(bodyNode) {
      const priority2 = bodyNode == null ? void 0 : bodyNode._blockHoist;
      if (priority2 == null) return 1;
      if (priority2 === true) return 2;
      return priority2;
    }
    function stableSort(body) {
      const buckets = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < body.length; i++) {
        const n = body[i];
        const p = priority(n);
        const bucket = buckets[p] || (buckets[p] = []);
        bucket.push(n);
      }
      const keys = Object.keys(buckets)
        .map(k => +k)
        .sort((a, b) => b - a);
      let index = 0;
      for (const key of keys) {
        const bucket = buckets[key];
        for (const n of bucket) {
          body[index++] = n;
        }
      }
      return body;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/normalize-opts.js
var require_normalize_opts = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/normalize-opts.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = normalizeOptions;
    function _path() {
      const data = __path$;
      _path = function() {
        return data;
      };
      return data;
    }
    function normalizeOptions(config) {
      const {
        filename,
        cwd,
        filenameRelative = typeof filename === 'string' ? _path().relative(cwd, filename) : 'unknown',
        sourceType = 'module',
        inputSourceMap,
        sourceMaps = !!inputSourceMap,
        sourceRoot = config.options.moduleRoot,
        sourceFileName = _path().basename(filenameRelative),
        comments = true,
        compact = 'auto'
      } = config.options;
      const opts = config.options;
      const options = Object.assign({}, opts, {
        parserOpts: Object.assign(
          {
            sourceType: _path().extname(filenameRelative) === '.mjs' ? 'module' : sourceType,
            sourceFileName: filename,
            plugins: []
          },
          opts.parserOpts
        ),
        generatorOpts: Object.assign(
          {
            filename,
            auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
            auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
            retainLines: opts.retainLines,
            comments,
            shouldPrintComment: opts.shouldPrintComment,
            compact,
            minified: opts.minified,
            sourceMaps,
            sourceRoot,
            sourceFileName
          },
          opts.generatorOpts
        )
      });
      for (const plugins of config.passes) {
        for (const plugin of plugins) {
          if (plugin.manipulateOptions) {
            plugin.manipulateOptions(options, options.parserOpts);
          }
        }
      }
      return options;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/parser/util/missing-plugin-helper.js
var require_missing_plugin_helper = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/parser/util/missing-plugin-helper.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = generateMissingPluginMessage;
    var pluginNameMap = {
      asyncDoExpressions: {
        syntax: {
          name: '@babel/plugin-syntax-async-do-expressions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-do-expressions'
        }
      },
      decimal: {
        syntax: {
          name: '@babel/plugin-syntax-decimal',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decimal'
        }
      },
      decorators: {
        syntax: {
          name: '@babel/plugin-syntax-decorators',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-decorators'
        },
        transform: {
          name: '@babel/plugin-proposal-decorators',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-decorators'
        }
      },
      doExpressions: {
        syntax: {
          name: '@babel/plugin-syntax-do-expressions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-do-expressions'
        },
        transform: {
          name: '@babel/plugin-proposal-do-expressions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-do-expressions'
        }
      },
      exportDefaultFrom: {
        syntax: {
          name: '@babel/plugin-syntax-export-default-from',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-default-from'
        },
        transform: {
          name: '@babel/plugin-proposal-export-default-from',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-default-from'
        }
      },
      flow: {
        syntax: {
          name: '@babel/plugin-syntax-flow',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-flow'
        },
        transform: {
          name: '@babel/preset-flow',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-preset-flow'
        }
      },
      functionBind: {
        syntax: {
          name: '@babel/plugin-syntax-function-bind',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-bind'
        },
        transform: {
          name: '@babel/plugin-proposal-function-bind',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-bind'
        }
      },
      functionSent: {
        syntax: {
          name: '@babel/plugin-syntax-function-sent',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-function-sent'
        },
        transform: {
          name: '@babel/plugin-proposal-function-sent',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-function-sent'
        }
      },
      jsx: {
        syntax: {
          name: '@babel/plugin-syntax-jsx',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx'
        },
        transform: {
          name: '@babel/preset-react',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-preset-react'
        }
      },
      importAssertions: {
        syntax: {
          name: '@babel/plugin-syntax-import-assertions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions'
        }
      },
      pipelineOperator: {
        syntax: {
          name: '@babel/plugin-syntax-pipeline-operator',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-pipeline-operator'
        },
        transform: {
          name: '@babel/plugin-proposal-pipeline-operator',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-pipeline-operator'
        }
      },
      recordAndTuple: {
        syntax: {
          name: '@babel/plugin-syntax-record-and-tuple',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-record-and-tuple'
        }
      },
      regexpUnicodeSets: {
        syntax: {
          name: '@babel/plugin-syntax-unicode-sets-regex',
          url: 'https://github.com/babel/babel/blob/main/packages/babel-plugin-syntax-unicode-sets-regex/README.md'
        },
        transform: {
          name: '@babel/plugin-proposal-unicode-sets-regex',
          url: 'https://github.com/babel/babel/blob/main/packages/babel-plugin-proposalunicode-sets-regex/README.md'
        }
      },
      throwExpressions: {
        syntax: {
          name: '@babel/plugin-syntax-throw-expressions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-throw-expressions'
        },
        transform: {
          name: '@babel/plugin-proposal-throw-expressions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-throw-expressions'
        }
      },
      typescript: {
        syntax: {
          name: '@babel/plugin-syntax-typescript',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-typescript'
        },
        transform: {
          name: '@babel/preset-typescript',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-preset-typescript'
        }
      },
      asyncGenerators: {
        syntax: {
          name: '@babel/plugin-syntax-async-generators',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-async-generators'
        },
        transform: {
          name: '@babel/plugin-proposal-async-generator-functions',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-async-generator-functions'
        }
      },
      classProperties: {
        syntax: {
          name: '@babel/plugin-syntax-class-properties',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties'
        },
        transform: {
          name: '@babel/plugin-proposal-class-properties',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties'
        }
      },
      classPrivateProperties: {
        syntax: {
          name: '@babel/plugin-syntax-class-properties',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties'
        },
        transform: {
          name: '@babel/plugin-proposal-class-properties',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-class-properties'
        }
      },
      classPrivateMethods: {
        syntax: {
          name: '@babel/plugin-syntax-class-properties',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-class-properties'
        },
        transform: {
          name: '@babel/plugin-proposal-private-methods',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-methods'
        }
      },
      classStaticBlock: {
        syntax: {
          name: '@babel/plugin-syntax-class-static-block',
          url: 'https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-syntax-class-static-block'
        },
        transform: {
          name: '@babel/plugin-proposal-class-static-block',
          url: 'https://github.com/babel/babel/tree/HEAD/packages/babel-plugin-proposal-class-static-block'
        }
      },
      dynamicImport: {
        syntax: {
          name: '@babel/plugin-syntax-dynamic-import',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-dynamic-import'
        }
      },
      exportNamespaceFrom: {
        syntax: {
          name: '@babel/plugin-syntax-export-namespace-from',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-export-namespace-from'
        },
        transform: {
          name: '@babel/plugin-proposal-export-namespace-from',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-export-namespace-from'
        }
      },
      importMeta: {
        syntax: {
          name: '@babel/plugin-syntax-import-meta',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-meta'
        }
      },
      logicalAssignment: {
        syntax: {
          name: '@babel/plugin-syntax-logical-assignment-operators',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-logical-assignment-operators'
        },
        transform: {
          name: '@babel/plugin-proposal-logical-assignment-operators',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-logical-assignment-operators'
        }
      },
      moduleStringNames: {
        syntax: {
          name: '@babel/plugin-syntax-module-string-names',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-module-string-names'
        }
      },
      numericSeparator: {
        syntax: {
          name: '@babel/plugin-syntax-numeric-separator',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-numeric-separator'
        },
        transform: {
          name: '@babel/plugin-proposal-numeric-separator',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-numeric-separator'
        }
      },
      nullishCoalescingOperator: {
        syntax: {
          name: '@babel/plugin-syntax-nullish-coalescing-operator',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-nullish-coalescing-operator'
        },
        transform: {
          name: '@babel/plugin-proposal-nullish-coalescing-operator',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-transform-nullish-coalescing-opearator'
        }
      },
      objectRestSpread: {
        syntax: {
          name: '@babel/plugin-syntax-object-rest-spread',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-object-rest-spread'
        },
        transform: {
          name: '@babel/plugin-proposal-object-rest-spread',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-object-rest-spread'
        }
      },
      optionalCatchBinding: {
        syntax: {
          name: '@babel/plugin-syntax-optional-catch-binding',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-catch-binding'
        },
        transform: {
          name: '@babel/plugin-proposal-optional-catch-binding',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-catch-binding'
        }
      },
      optionalChaining: {
        syntax: {
          name: '@babel/plugin-syntax-optional-chaining',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-optional-chaining'
        },
        transform: {
          name: '@babel/plugin-proposal-optional-chaining',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-optional-chaining'
        }
      },
      privateIn: {
        syntax: {
          name: '@babel/plugin-syntax-private-property-in-object',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-private-property-in-object'
        },
        transform: {
          name: '@babel/plugin-proposal-private-property-in-object',
          url: 'https://github.com/babel/babel/tree/main/packages/babel-plugin-proposal-private-property-in-object'
        }
      }
    };
    pluginNameMap.privateIn.syntax = pluginNameMap.privateIn.transform;
    var getNameURLCombination = ({ name, url }) => `${name} (${url})`;
    function generateMissingPluginMessage(missingPluginName, loc, codeFrame) {
      let helpMessage =
        `Support for the experimental syntax '${missingPluginName}' isn't currently enabled (${loc.line}:${loc.column +
          1}):

` + codeFrame;
      const pluginInfo = pluginNameMap[missingPluginName];
      if (pluginInfo) {
        const { syntax: syntaxPlugin, transform: transformPlugin } = pluginInfo;
        if (syntaxPlugin) {
          const syntaxPluginInfo = getNameURLCombination(syntaxPlugin);
          if (transformPlugin) {
            const transformPluginInfo = getNameURLCombination(transformPlugin);
            const sectionType = transformPlugin.name.startsWith('@babel/plugin') ? 'plugins' : 'presets';
            helpMessage += `

Add ${transformPluginInfo} to the '${sectionType}' section of your Babel config to enable transformation.
If you want to leave it as-is, add ${syntaxPluginInfo} to the 'plugins' section to enable parsing.`;
          } else {
            helpMessage += `

Add ${syntaxPluginInfo} to the 'plugins' section of your Babel config to enable parsing.`;
          }
        }
      }
      return helpMessage;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/parser/index.js
var require_parser = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/parser/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = parser;
    function _parser() {
      const data = ___babel_parser$;
      _parser = function() {
        return data;
      };
      return data;
    }
    function _codeFrame() {
      const data = ___babel_code_frame$;
      _codeFrame = function() {
        return data;
      };
      return data;
    }
    var _missingPluginHelper = require_missing_plugin_helper();
    function* parser(pluginPasses, { parserOpts, highlightCode = true, filename = 'unknown' }, code) {
      try {
        const results = [];
        for (const plugins of pluginPasses) {
          for (const plugin of plugins) {
            const { parserOverride } = plugin;
            if (parserOverride) {
              const ast = parserOverride(code, parserOpts, _parser().parse);
              if (ast !== void 0) results.push(ast);
            }
          }
        }
        if (results.length === 0) {
          return (0, _parser().parse)(code, parserOpts);
        } else if (results.length === 1) {
          yield* [];
          if (typeof results[0].then === 'function') {
            throw new Error(
              `You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.`
            );
          }
          return results[0];
        }
        throw new Error('More than one plugin attempted to override parsing.');
      } catch (err) {
        if (err.code === 'BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED') {
          err.message +=
            "\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.";
        }
        const { loc, missingPlugin } = err;
        if (loc) {
          const codeFrame = (0, _codeFrame().codeFrameColumns)(
            code,
            {
              start: {
                line: loc.line,
                column: loc.column + 1
              }
            },
            {
              highlightCode
            }
          );
          if (missingPlugin) {
            err.message = `${filename}: ` + (0, _missingPluginHelper.default)(missingPlugin[0], loc, codeFrame);
          } else {
            err.message =
              `${filename}: ${err.message}

` + codeFrame;
          }
          err.code = 'BABEL_PARSE_ERROR';
        }
        throw err;
      }
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/util/clone-deep.js
var require_clone_deep = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/util/clone-deep.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = _default;
    function deepClone(value, cache) {
      if (value !== null) {
        if (cache.has(value)) return cache.get(value);
        let cloned;
        if (Array.isArray(value)) {
          cloned = new Array(value.length);
          for (let i = 0; i < value.length; i++) {
            cloned[i] = typeof value[i] !== 'object' ? value[i] : deepClone(value[i], cache);
          }
        } else {
          cloned = {};
          const keys = Object.keys(value);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            cloned[key] = typeof value[key] !== 'object' ? value[key] : deepClone(value[key], cache);
          }
        }
        cache.set(value, cloned);
        return cloned;
      }
      return value;
    }
    function _default(value) {
      if (typeof value !== 'object') return value;
      return deepClone(value, /* @__PURE__ */ new Map());
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/normalize-file.js
var require_normalize_file = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/normalize-file.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = normalizeFile;
    function _fs() {
      const data = __fs$;
      _fs = function() {
        return data;
      };
      return data;
    }
    function _path() {
      const data = __path$;
      _path = function() {
        return data;
      };
      return data;
    }
    function _debug() {
      const data = __debug$;
      _debug = function() {
        return data;
      };
      return data;
    }
    function _t() {
      const data = ___babel_types$;
      _t = function() {
        return data;
      };
      return data;
    }
    function _convertSourceMap() {
      const data = __convert_source_map$;
      _convertSourceMap = function() {
        return data;
      };
      return data;
    }
    var _file = require_file();
    var _parser = require_parser();
    var _cloneDeep = require_clone_deep();
    var { file, traverseFast } = _t();
    var debug = _debug()('babel:transform:file');
    var LARGE_INPUT_SOURCEMAP_THRESHOLD = 3e6;
    var INLINE_SOURCEMAP_REGEX = /^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/;
    var EXTERNAL_SOURCEMAP_REGEX = /^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;
    function* normalizeFile(pluginPasses, options, code, ast) {
      code = `${code || ''}`;
      if (ast) {
        if (ast.type === 'Program') {
          ast = file(ast, [], []);
        } else if (ast.type !== 'File') {
          throw new Error('AST root must be a Program or File node');
        }
        if (options.cloneInputAst) {
          ast = (0, _cloneDeep.default)(ast);
        }
      } else {
        ast = yield* (0, _parser.default)(pluginPasses, options, code);
      }
      let inputMap = null;
      if (options.inputSourceMap !== false) {
        if (typeof options.inputSourceMap === 'object') {
          inputMap = _convertSourceMap().fromObject(options.inputSourceMap);
        }
        if (!inputMap) {
          const lastComment = extractComments(INLINE_SOURCEMAP_REGEX, ast);
          if (lastComment) {
            try {
              inputMap = _convertSourceMap().fromComment(lastComment);
            } catch (err) {
              debug('discarding unknown inline input sourcemap', err);
            }
          }
        }
        if (!inputMap) {
          const lastComment = extractComments(EXTERNAL_SOURCEMAP_REGEX, ast);
          if (typeof options.filename === 'string' && lastComment) {
            try {
              const match = EXTERNAL_SOURCEMAP_REGEX.exec(lastComment);
              const inputMapContent = _fs().readFileSync(_path().resolve(_path().dirname(options.filename), match[1]));
              if (inputMapContent.length > LARGE_INPUT_SOURCEMAP_THRESHOLD) {
                debug('skip merging input map > 1 MB');
              } else {
                inputMap = _convertSourceMap().fromJSON(inputMapContent);
              }
            } catch (err) {
              debug('discarding unknown file input sourcemap', err);
            }
          } else if (lastComment) {
            debug('discarding un-loadable file input sourcemap');
          }
        }
      }
      return new _file.default(options, {
        code,
        ast,
        inputMap
      });
    }
    function extractCommentsFromList(regex, comments, lastComment) {
      if (comments) {
        comments = comments.filter(({ value }) => {
          if (regex.test(value)) {
            lastComment = value;
            return false;
          }
          return true;
        });
      }
      return [comments, lastComment];
    }
    function extractComments(regex, ast) {
      let lastComment = null;
      traverseFast(ast, node => {
        [node.leadingComments, lastComment] = extractCommentsFromList(regex, node.leadingComments, lastComment);
        [node.innerComments, lastComment] = extractCommentsFromList(regex, node.innerComments, lastComment);
        [node.trailingComments, lastComment] = extractCommentsFromList(regex, node.trailingComments, lastComment);
      });
      return lastComment;
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/file/merge-map.js
var require_merge_map = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/file/merge-map.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = mergeSourceMap;
    function _remapping() {
      const data = ___ampproject_remapping$;
      _remapping = function() {
        return data;
      };
      return data;
    }
    function mergeSourceMap(inputMap, map, sourceFileName) {
      const source = sourceFileName.replace(/\\/g, '/');
      let found = false;
      const result = _remapping()(rootless(map), (s, ctx) => {
        if (s === source && !found) {
          found = true;
          ctx.source = '';
          return rootless(inputMap);
        }
        return null;
      });
      if (typeof inputMap.sourceRoot === 'string') {
        result.sourceRoot = inputMap.sourceRoot;
      }
      return Object.assign({}, result);
    }
    function rootless(map) {
      return Object.assign({}, map, {
        sourceRoot: null
      });
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/file/generate.js
var require_generate = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/file/generate.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = generateCode;
    function _convertSourceMap() {
      const data = __convert_source_map$;
      _convertSourceMap = function() {
        return data;
      };
      return data;
    }
    function _generator() {
      const data = ___babel_generator$;
      _generator = function() {
        return data;
      };
      return data;
    }
    var _mergeMap = require_merge_map();
    function generateCode(pluginPasses, file) {
      const { opts, ast, code, inputMap } = file;
      const { generatorOpts } = opts;
      const results = [];
      for (const plugins of pluginPasses) {
        for (const plugin of plugins) {
          const { generatorOverride } = plugin;
          if (generatorOverride) {
            const result2 = generatorOverride(ast, generatorOpts, code, _generator().default);
            if (result2 !== void 0) results.push(result2);
          }
        }
      }
      let result;
      if (results.length === 0) {
        result = (0, _generator().default)(ast, generatorOpts, code);
      } else if (results.length === 1) {
        result = results[0];
        if (typeof result.then === 'function') {
          throw new Error(
            `You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.`
          );
        }
      } else {
        throw new Error('More than one plugin attempted to override codegen.');
      }
      let { code: outputCode, decodedMap: outputMap = result.map } = result;
      if (outputMap) {
        if (inputMap) {
          outputMap = (0, _mergeMap.default)(inputMap.toObject(), outputMap, generatorOpts.sourceFileName);
        } else {
          outputMap = result.map;
        }
      }
      if (opts.sourceMaps === 'inline' || opts.sourceMaps === 'both') {
        outputCode +=
          '\n' +
          _convertSourceMap()
            .fromObject(outputMap)
            .toComment();
      }
      if (opts.sourceMaps === 'inline') {
        outputMap = null;
      }
      return {
        outputCode,
        outputMap
      };
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/index.js
var require_transformation = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transformation/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.run = run;
    function _traverse() {
      const data = ___babel_traverse$;
      _traverse = function() {
        return data;
      };
      return data;
    }
    var _pluginPass = require_plugin_pass();
    var _blockHoistPlugin = require_block_hoist_plugin();
    var _normalizeOpts = require_normalize_opts();
    var _normalizeFile = require_normalize_file();
    var _generate = require_generate();
    var _deepArray = require_deep_array();
    function* run(config, code, ast) {
      const file = yield* (0, _normalizeFile.default)(config.passes, (0, _normalizeOpts.default)(config), code, ast);
      const opts = file.opts;
      try {
        yield* transformFile2(file, config.passes);
      } catch (e) {
        var _opts$filename;
        e.message = `${(_opts$filename = opts.filename) != null ? _opts$filename : 'unknown file'}: ${e.message}`;
        if (!e.code) {
          e.code = 'BABEL_TRANSFORM_ERROR';
        }
        throw e;
      }
      let outputCode, outputMap;
      try {
        if (opts.code !== false) {
          ({ outputCode, outputMap } = (0, _generate.default)(config.passes, file));
        }
      } catch (e) {
        var _opts$filename2;
        e.message = `${(_opts$filename2 = opts.filename) != null ? _opts$filename2 : 'unknown file'}: ${e.message}`;
        if (!e.code) {
          e.code = 'BABEL_GENERATE_ERROR';
        }
        throw e;
      }
      return {
        metadata: file.metadata,
        options: opts,
        ast: opts.ast === true ? file.ast : null,
        code: outputCode === void 0 ? null : outputCode,
        map: outputMap === void 0 ? null : outputMap,
        sourceType: file.ast.program.sourceType,
        externalDependencies: (0, _deepArray.flattenToSet)(config.externalDependencies)
      };
    }
    function* transformFile2(file, pluginPasses) {
      for (const pluginPairs of pluginPasses) {
        const passPairs = [];
        const passes = [];
        const visitors = [];
        for (const plugin of pluginPairs.concat([(0, _blockHoistPlugin.default)()])) {
          const pass = new _pluginPass.default(file, plugin.key, plugin.options);
          passPairs.push([plugin, pass]);
          passes.push(pass);
          visitors.push(plugin.visitor);
        }
        for (const [plugin, pass] of passPairs) {
          const fn = plugin.pre;
          if (fn) {
            const result = fn.call(pass, file);
            yield* [];
            if (isThenable(result)) {
              throw new Error(
                `You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.`
              );
            }
          }
        }
        const visitor = _traverse().default.visitors.merge(visitors, passes, file.opts.wrapPluginVisitorMethod);
        (0, _traverse().default)(file.ast, visitor, file.scope);
        for (const [plugin, pass] of passPairs) {
          const fn = plugin.post;
          if (fn) {
            const result = fn.call(pass, file);
            yield* [];
            if (isThenable(result)) {
              throw new Error(
                `You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.`
              );
            }
          }
        }
      }
    }
    function isThenable(val) {
      return (
        !!val && (typeof val === 'object' || typeof val === 'function') && !!val.then && typeof val.then === 'function'
      );
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transform.js
var require_transform = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transform.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.transform = void 0;
    exports.transformAsync = transformAsync2;
    exports.transformSync = transformSync2;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _config = require_config();
    var _transformation = require_transformation();
    var _rewriteStackTrace = require_rewrite_stack_trace();
    var transformRunner = _gensync()(function* transform3(code, opts) {
      const config = yield* (0, _config.default)(opts);
      if (config === null) return null;
      return yield* (0, _transformation.run)(config, code);
    });
    var transform2 = function transform3(code, optsOrCallback, maybeCallback) {
      let opts;
      let callback;
      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        opts = void 0;
      } else {
        opts = optsOrCallback;
        callback = maybeCallback;
      }
      if (callback === void 0) {
        {
          return (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.sync)(code, opts);
        }
      }
      (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.errback)(code, opts, callback);
    };
    exports.transform = transform2;
    function transformSync2(...args) {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.sync)(...args);
    }
    function transformAsync2(...args) {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(transformRunner.async)(...args);
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transform-file-browser.js
var require_transform_file_browser = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transform-file-browser.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.transformFile = void 0;
    exports.transformFileAsync = transformFileAsync2;
    exports.transformFileSync = transformFileSync2;
    var transformFile2 = function transformFile3(filename, opts, callback) {
      if (typeof opts === 'function') {
        callback = opts;
      }
      callback(new Error('Transforming files is not supported in browsers'), null);
    };
    exports.transformFile = transformFile2;
    function transformFileSync2() {
      throw new Error('Transforming files is not supported in browsers');
    }
    function transformFileAsync2() {
      return Promise.reject(new Error('Transforming files is not supported in browsers'));
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transform-ast.js
var require_transform_ast = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/transform-ast.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.transformFromAst = void 0;
    exports.transformFromAstAsync = transformFromAstAsync2;
    exports.transformFromAstSync = transformFromAstSync2;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _config = require_config();
    var _transformation = require_transformation();
    var _rewriteStackTrace = require_rewrite_stack_trace();
    var transformFromAstRunner = _gensync()(function*(ast, code, opts) {
      const config = yield* (0, _config.default)(opts);
      if (config === null) return null;
      if (!ast) throw new Error('No AST given');
      return yield* (0, _transformation.run)(config, code, ast);
    });
    var transformFromAst2 = function transformFromAst3(ast, code, optsOrCallback, maybeCallback) {
      let opts;
      let callback;
      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        opts = void 0;
      } else {
        opts = optsOrCallback;
        callback = maybeCallback;
      }
      if (callback === void 0) {
        {
          return (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.sync)(ast, code, opts);
        }
      }
      (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.errback)(ast, code, opts, callback);
    };
    exports.transformFromAst = transformFromAst2;
    function transformFromAstSync2(...args) {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.sync)(...args);
    }
    function transformFromAstAsync2(...args) {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(transformFromAstRunner.async)(...args);
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/parse.js
var require_parse = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/parse.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.parse = void 0;
    exports.parseAsync = parseAsync2;
    exports.parseSync = parseSync2;
    function _gensync() {
      const data = __gensync$;
      _gensync = function() {
        return data;
      };
      return data;
    }
    var _config = require_config();
    var _parser = require_parser();
    var _normalizeOpts = require_normalize_opts();
    var _rewriteStackTrace = require_rewrite_stack_trace();
    var parseRunner = _gensync()(function* parse3(code, opts) {
      const config = yield* (0, _config.default)(opts);
      if (config === null) {
        return null;
      }
      return yield* (0, _parser.default)(config.passes, (0, _normalizeOpts.default)(config), code);
    });
    var parse2 = function parse3(code, opts, callback) {
      if (typeof opts === 'function') {
        callback = opts;
        opts = void 0;
      }
      if (callback === void 0) {
        {
          return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.sync)(code, opts);
        }
      }
      (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.errback)(code, opts, callback);
    };
    exports.parse = parse2;
    function parseSync2(...args) {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.sync)(...args);
    }
    function parseAsync2(...args) {
      return (0, _rewriteStackTrace.beginHiddenCallStack)(parseRunner.async)(...args);
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/index.js
var require_lib = __commonJS({
  'esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/node_modules/@babel/core/lib/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.DEFAULT_EXTENSIONS = void 0;
    Object.defineProperty(exports, 'File', {
      enumerable: true,
      get: function() {
        return _file.default;
      }
    });
    exports.OptionManager = void 0;
    exports.Plugin = Plugin2;
    Object.defineProperty(exports, 'buildExternalHelpers', {
      enumerable: true,
      get: function() {
        return _buildExternalHelpers.default;
      }
    });
    Object.defineProperty(exports, 'createConfigItem', {
      enumerable: true,
      get: function() {
        return _config.createConfigItem;
      }
    });
    Object.defineProperty(exports, 'createConfigItemAsync', {
      enumerable: true,
      get: function() {
        return _config.createConfigItemAsync;
      }
    });
    Object.defineProperty(exports, 'createConfigItemSync', {
      enumerable: true,
      get: function() {
        return _config.createConfigItemSync;
      }
    });
    Object.defineProperty(exports, 'getEnv', {
      enumerable: true,
      get: function() {
        return _environment.getEnv;
      }
    });
    Object.defineProperty(exports, 'loadOptions', {
      enumerable: true,
      get: function() {
        return _config.loadOptions;
      }
    });
    Object.defineProperty(exports, 'loadOptionsAsync', {
      enumerable: true,
      get: function() {
        return _config.loadOptionsAsync;
      }
    });
    Object.defineProperty(exports, 'loadOptionsSync', {
      enumerable: true,
      get: function() {
        return _config.loadOptionsSync;
      }
    });
    Object.defineProperty(exports, 'loadPartialConfig', {
      enumerable: true,
      get: function() {
        return _config.loadPartialConfig;
      }
    });
    Object.defineProperty(exports, 'loadPartialConfigAsync', {
      enumerable: true,
      get: function() {
        return _config.loadPartialConfigAsync;
      }
    });
    Object.defineProperty(exports, 'loadPartialConfigSync', {
      enumerable: true,
      get: function() {
        return _config.loadPartialConfigSync;
      }
    });
    Object.defineProperty(exports, 'parse', {
      enumerable: true,
      get: function() {
        return _parse.parse;
      }
    });
    Object.defineProperty(exports, 'parseAsync', {
      enumerable: true,
      get: function() {
        return _parse.parseAsync;
      }
    });
    Object.defineProperty(exports, 'parseSync', {
      enumerable: true,
      get: function() {
        return _parse.parseSync;
      }
    });
    Object.defineProperty(exports, 'resolvePlugin', {
      enumerable: true,
      get: function() {
        return _files.resolvePlugin;
      }
    });
    Object.defineProperty(exports, 'resolvePreset', {
      enumerable: true,
      get: function() {
        return _files.resolvePreset;
      }
    });
    Object.defineProperty((0, exports), 'template', {
      enumerable: true,
      get: function() {
        return _template().default;
      }
    });
    Object.defineProperty((0, exports), 'tokTypes', {
      enumerable: true,
      get: function() {
        return _parser().tokTypes;
      }
    });
    Object.defineProperty(exports, 'transform', {
      enumerable: true,
      get: function() {
        return _transform.transform;
      }
    });
    Object.defineProperty(exports, 'transformAsync', {
      enumerable: true,
      get: function() {
        return _transform.transformAsync;
      }
    });
    Object.defineProperty(exports, 'transformFile', {
      enumerable: true,
      get: function() {
        return _transformFile.transformFile;
      }
    });
    Object.defineProperty(exports, 'transformFileAsync', {
      enumerable: true,
      get: function() {
        return _transformFile.transformFileAsync;
      }
    });
    Object.defineProperty(exports, 'transformFileSync', {
      enumerable: true,
      get: function() {
        return _transformFile.transformFileSync;
      }
    });
    Object.defineProperty(exports, 'transformFromAst', {
      enumerable: true,
      get: function() {
        return _transformAst.transformFromAst;
      }
    });
    Object.defineProperty(exports, 'transformFromAstAsync', {
      enumerable: true,
      get: function() {
        return _transformAst.transformFromAstAsync;
      }
    });
    Object.defineProperty(exports, 'transformFromAstSync', {
      enumerable: true,
      get: function() {
        return _transformAst.transformFromAstSync;
      }
    });
    Object.defineProperty(exports, 'transformSync', {
      enumerable: true,
      get: function() {
        return _transform.transformSync;
      }
    });
    Object.defineProperty((0, exports), 'traverse', {
      enumerable: true,
      get: function() {
        return _traverse().default;
      }
    });
    exports.version = exports.types = void 0;
    var _file = require_file();
    var _buildExternalHelpers = require_build_external_helpers();
    var _files = require_index_browser();
    var _environment = require_environment();
    function _types() {
      const data = ___babel_types$;
      _types = function() {
        return data;
      };
      return data;
    }
    Object.defineProperty((0, exports), 'types', {
      enumerable: true,
      get: function() {
        return _types();
      }
    });
    function _parser() {
      const data = ___babel_parser$;
      _parser = function() {
        return data;
      };
      return data;
    }
    function _traverse() {
      const data = ___babel_traverse$;
      _traverse = function() {
        return data;
      };
      return data;
    }
    function _template() {
      const data = ___babel_template$;
      _template = function() {
        return data;
      };
      return data;
    }
    var _config = require_config();
    var _transform = require_transform();
    var _transformFile = require_transform_file_browser();
    var _transformAst = require_transform_ast();
    var _parse = require_parse();
    var version2 = '7.20.2';
    exports.version = version2;
    var DEFAULT_EXTENSIONS2 = Object.freeze(['.js', '.jsx', '.es6', '.es', '.mjs', '.cjs']);
    exports.DEFAULT_EXTENSIONS = DEFAULT_EXTENSIONS2;
    var OptionManager2 = class {
      init(opts) {
        return (0, _config.loadOptionsSync)(opts);
      }
    };
    exports.OptionManager = OptionManager2;
    function Plugin2(alias) {
      throw new Error(`The (${alias}) Babel 5 plugin is being run with an unsupported Babel version.`);
    }
  }
});

// esm-build-48b79f6543081b041d4fec1b65e6db87d65041f7-566071c7/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var {
  DEFAULT_EXTENSIONS,
  File,
  OptionManager,
  Plugin,
  buildExternalHelpers,
  createConfigItem,
  createConfigItemAsync,
  createConfigItemSync,
  getEnv,
  loadOptions,
  loadOptionsAsync,
  loadOptionsSync,
  loadPartialConfig,
  loadPartialConfigAsync,
  loadPartialConfigSync,
  parse,
  parseAsync,
  parseSync,
  resolvePlugin,
  resolvePreset,
  transform,
  transformAsync,
  transformFile,
  transformFileAsync,
  transformFileSync,
  transformFromAst,
  transformFromAstAsync,
  transformFromAstSync,
  transformSync,
  version,
  types
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  DEFAULT_EXTENSIONS,
  File,
  OptionManager,
  Plugin,
  __esModule,
  buildExternalHelpers,
  createConfigItem,
  createConfigItemAsync,
  createConfigItemSync,
  mod_default as default,
  getEnv,
  loadOptions,
  loadOptionsAsync,
  loadOptionsSync,
  loadPartialConfig,
  loadPartialConfigAsync,
  loadPartialConfigSync,
  parse,
  parseAsync,
  parseSync,
  resolvePlugin,
  resolvePreset,
  transform,
  transformAsync,
  transformFile,
  transformFileAsync,
  transformFileSync,
  transformFromAst,
  transformFromAstAsync,
  transformFromAstSync,
  transformSync,
  types,
  version
};
