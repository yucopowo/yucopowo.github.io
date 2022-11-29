/* esm.sh - esbuild bundle(@babel/template@7.18.10) es2022 development */
import ___babel_parser$ from '/cdn/v99/@babel/parser@7.20.3/es2022/parser.development.js';
import ___babel_types$ from '/cdn/v99/@babel/types@7.20.2/es2022/types.development.js';
import * as ___babel_code_frame$ from '/cdn/v99/@babel/code-frame@7.18.6/es2022/code-frame.development.js';
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

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/formatters.js
var require_formatters = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/formatters.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.statements = exports.statement = exports.smart = exports.program = exports.expression = void 0;
    var _t = ___babel_types$;
    var { assertExpressionStatement } = _t;
    function makeStatementFormatter(fn) {
      return {
        code: str => `/* @babel/template */;
${str}`,
        validate: () => {},
        unwrap: ast => {
          return fn(ast.program.body.slice(1));
        }
      };
    }
    var smart2 = makeStatementFormatter(body => {
      if (body.length > 1) {
        return body;
      } else {
        return body[0];
      }
    });
    exports.smart = smart2;
    var statements2 = makeStatementFormatter(body => body);
    exports.statements = statements2;
    var statement2 = makeStatementFormatter(body => {
      if (body.length === 0) {
        throw new Error('Found nothing to return.');
      }
      if (body.length > 1) {
        throw new Error('Found multiple statements but wanted one');
      }
      return body[0];
    });
    exports.statement = statement2;
    var expression2 = {
      code: str => `(
${str}
)`,
      validate: ast => {
        if (ast.program.body.length > 1) {
          throw new Error('Found multiple statements but wanted one');
        }
        if (expression2.unwrap(ast).start === 0) {
          throw new Error('Parse result included parens.');
        }
      },
      unwrap: ({ program: program3 }) => {
        const [stmt] = program3.body;
        assertExpressionStatement(stmt);
        return stmt.expression;
      }
    };
    exports.expression = expression2;
    var program2 = {
      code: str => str,
      validate: () => {},
      unwrap: ast => ast.program
    };
    exports.program = program2;
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/options.js
var require_options = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/options.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.merge = merge;
    exports.normalizeReplacements = normalizeReplacements;
    exports.validate = validate;
    var _excluded = ['placeholderWhitelist', 'placeholderPattern', 'preserveComments', 'syntacticPlaceholders'];
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
    function merge(a, b) {
      const {
        placeholderWhitelist = a.placeholderWhitelist,
        placeholderPattern = a.placeholderPattern,
        preserveComments = a.preserveComments,
        syntacticPlaceholders = a.syntacticPlaceholders
      } = b;
      return {
        parser: Object.assign({}, a.parser, b.parser),
        placeholderWhitelist,
        placeholderPattern,
        preserveComments,
        syntacticPlaceholders
      };
    }
    function validate(opts) {
      if (opts != null && typeof opts !== 'object') {
        throw new Error('Unknown template options.');
      }
      const _ref = opts || {},
        { placeholderWhitelist, placeholderPattern, preserveComments, syntacticPlaceholders } = _ref,
        parser = _objectWithoutPropertiesLoose(_ref, _excluded);
      if (placeholderWhitelist != null && !(placeholderWhitelist instanceof Set)) {
        throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
      }
      if (placeholderPattern != null && !(placeholderPattern instanceof RegExp) && placeholderPattern !== false) {
        throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
      }
      if (preserveComments != null && typeof preserveComments !== 'boolean') {
        throw new Error("'.preserveComments' must be a boolean, null, or undefined");
      }
      if (syntacticPlaceholders != null && typeof syntacticPlaceholders !== 'boolean') {
        throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
      }
      if (syntacticPlaceholders === true && (placeholderWhitelist != null || placeholderPattern != null)) {
        throw new Error(
          "'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'"
        );
      }
      return {
        parser,
        placeholderWhitelist: placeholderWhitelist || void 0,
        placeholderPattern: placeholderPattern == null ? void 0 : placeholderPattern,
        preserveComments: preserveComments == null ? void 0 : preserveComments,
        syntacticPlaceholders: syntacticPlaceholders == null ? void 0 : syntacticPlaceholders
      };
    }
    function normalizeReplacements(replacements) {
      if (Array.isArray(replacements)) {
        return replacements.reduce((acc, replacement, i) => {
          acc['$' + i] = replacement;
          return acc;
        }, {});
      } else if (typeof replacements === 'object' || replacements == null) {
        return replacements || void 0;
      }
      throw new Error('Template replacements must be an array, object, null, or undefined');
    }
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/parse.js
var require_parse = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/parse.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = parseAndBuildMetadata;
    var _t = ___babel_types$;
    var _parser = ___babel_parser$;
    var _codeFrame = ___babel_code_frame$;
    var {
      isCallExpression,
      isExpressionStatement,
      isFunction,
      isIdentifier,
      isJSXIdentifier,
      isNewExpression,
      isPlaceholder,
      isStatement,
      isStringLiteral,
      removePropertiesDeep,
      traverse
    } = _t;
    var PATTERN = /^[_$A-Z0-9]+$/;
    function parseAndBuildMetadata(formatter, code, opts) {
      const { placeholderWhitelist, placeholderPattern, preserveComments, syntacticPlaceholders } = opts;
      const ast = parseWithCodeFrame(code, opts.parser, syntacticPlaceholders);
      removePropertiesDeep(ast, {
        preserveComments
      });
      formatter.validate(ast);
      const syntactic = {
        placeholders: [],
        placeholderNames: /* @__PURE__ */ new Set()
      };
      const legacy = {
        placeholders: [],
        placeholderNames: /* @__PURE__ */ new Set()
      };
      const isLegacyRef = {
        value: void 0
      };
      traverse(ast, placeholderVisitorHandler, {
        syntactic,
        legacy,
        isLegacyRef,
        placeholderWhitelist,
        placeholderPattern,
        syntacticPlaceholders
      });
      return Object.assign(
        {
          ast
        },
        isLegacyRef.value ? legacy : syntactic
      );
    }
    function placeholderVisitorHandler(node, ancestors, state) {
      var _state$placeholderWhi;
      let name;
      if (isPlaceholder(node)) {
        if (state.syntacticPlaceholders === false) {
          throw new Error("%%foo%%-style placeholders can't be used when '.syntacticPlaceholders' is false.");
        } else {
          name = node.name.name;
          state.isLegacyRef.value = false;
        }
      } else if (state.isLegacyRef.value === false || state.syntacticPlaceholders) {
        return;
      } else if (isIdentifier(node) || isJSXIdentifier(node)) {
        name = node.name;
        state.isLegacyRef.value = true;
      } else if (isStringLiteral(node)) {
        name = node.value;
        state.isLegacyRef.value = true;
      } else {
        return;
      }
      if (!state.isLegacyRef.value && (state.placeholderPattern != null || state.placeholderWhitelist != null)) {
        throw new Error(
          "'.placeholderWhitelist' and '.placeholderPattern' aren't compatible with '.syntacticPlaceholders: true'"
        );
      }
      if (
        state.isLegacyRef.value &&
        (state.placeholderPattern === false || !(state.placeholderPattern || PATTERN).test(name)) &&
        !((_state$placeholderWhi = state.placeholderWhitelist) != null && _state$placeholderWhi.has(name))
      ) {
        return;
      }
      ancestors = ancestors.slice();
      const { node: parent, key } = ancestors[ancestors.length - 1];
      let type;
      if (
        isStringLiteral(node) ||
        isPlaceholder(node, {
          expectedNode: 'StringLiteral'
        })
      ) {
        type = 'string';
      } else if (
        (isNewExpression(parent) && key === 'arguments') ||
        (isCallExpression(parent) && key === 'arguments') ||
        (isFunction(parent) && key === 'params')
      ) {
        type = 'param';
      } else if (isExpressionStatement(parent) && !isPlaceholder(node)) {
        type = 'statement';
        ancestors = ancestors.slice(0, -1);
      } else if (isStatement(node) && isPlaceholder(node)) {
        type = 'statement';
      } else {
        type = 'other';
      }
      const { placeholders, placeholderNames } = state.isLegacyRef.value ? state.legacy : state.syntactic;
      placeholders.push({
        name,
        type,
        resolve: ast => resolveAncestors(ast, ancestors),
        isDuplicate: placeholderNames.has(name)
      });
      placeholderNames.add(name);
    }
    function resolveAncestors(ast, ancestors) {
      let parent = ast;
      for (let i = 0; i < ancestors.length - 1; i++) {
        const { key: key2, index: index2 } = ancestors[i];
        if (index2 === void 0) {
          parent = parent[key2];
        } else {
          parent = parent[key2][index2];
        }
      }
      const { key, index } = ancestors[ancestors.length - 1];
      return {
        parent,
        key,
        index
      };
    }
    function parseWithCodeFrame(code, parserOpts, syntacticPlaceholders) {
      const plugins = (parserOpts.plugins || []).slice();
      if (syntacticPlaceholders !== false) {
        plugins.push('placeholders');
      }
      parserOpts = Object.assign(
        {
          allowReturnOutsideFunction: true,
          allowSuperOutsideMethod: true,
          sourceType: 'module'
        },
        parserOpts,
        {
          plugins
        }
      );
      try {
        return (0, _parser.parse)(code, parserOpts);
      } catch (err) {
        const loc = err.loc;
        if (loc) {
          err.message +=
            '\n' +
            (0, _codeFrame.codeFrameColumns)(code, {
              start: loc
            });
          err.code = 'BABEL_TEMPLATE_PARSE_ERROR';
        }
        throw err;
      }
    }
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/populate.js
var require_populate = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/populate.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = populatePlaceholders;
    var _t = ___babel_types$;
    var {
      blockStatement,
      cloneNode,
      emptyStatement,
      expressionStatement,
      identifier,
      isStatement,
      isStringLiteral,
      stringLiteral,
      validate
    } = _t;
    function populatePlaceholders(metadata, replacements) {
      const ast = cloneNode(metadata.ast);
      if (replacements) {
        metadata.placeholders.forEach(placeholder => {
          if (!Object.prototype.hasOwnProperty.call(replacements, placeholder.name)) {
            const placeholderName = placeholder.name;
            throw new Error(`Error: No substitution given for "${placeholderName}". If this is not meant to be a
            placeholder you may want to consider passing one of the following options to @babel/template:
            - { placeholderPattern: false, placeholderWhitelist: new Set(['${placeholderName}'])}
            - { placeholderPattern: /^${placeholderName}$/ }`);
          }
        });
        Object.keys(replacements).forEach(key => {
          if (!metadata.placeholderNames.has(key)) {
            throw new Error(`Unknown substitution "${key}" given`);
          }
        });
      }
      metadata.placeholders
        .slice()
        .reverse()
        .forEach(placeholder => {
          try {
            applyReplacement(placeholder, ast, (replacements && replacements[placeholder.name]) || null);
          } catch (e) {
            e.message = `@babel/template placeholder "${placeholder.name}": ${e.message}`;
            throw e;
          }
        });
      return ast;
    }
    function applyReplacement(placeholder, ast, replacement) {
      if (placeholder.isDuplicate) {
        if (Array.isArray(replacement)) {
          replacement = replacement.map(node => cloneNode(node));
        } else if (typeof replacement === 'object') {
          replacement = cloneNode(replacement);
        }
      }
      const { parent, key, index } = placeholder.resolve(ast);
      if (placeholder.type === 'string') {
        if (typeof replacement === 'string') {
          replacement = stringLiteral(replacement);
        }
        if (!replacement || !isStringLiteral(replacement)) {
          throw new Error('Expected string substitution');
        }
      } else if (placeholder.type === 'statement') {
        if (index === void 0) {
          if (!replacement) {
            replacement = emptyStatement();
          } else if (Array.isArray(replacement)) {
            replacement = blockStatement(replacement);
          } else if (typeof replacement === 'string') {
            replacement = expressionStatement(identifier(replacement));
          } else if (!isStatement(replacement)) {
            replacement = expressionStatement(replacement);
          }
        } else {
          if (replacement && !Array.isArray(replacement)) {
            if (typeof replacement === 'string') {
              replacement = identifier(replacement);
            }
            if (!isStatement(replacement)) {
              replacement = expressionStatement(replacement);
            }
          }
        }
      } else if (placeholder.type === 'param') {
        if (typeof replacement === 'string') {
          replacement = identifier(replacement);
        }
        if (index === void 0) throw new Error('Assertion failure.');
      } else {
        if (typeof replacement === 'string') {
          replacement = identifier(replacement);
        }
        if (Array.isArray(replacement)) {
          throw new Error('Cannot replace single expression with an array.');
        }
      }
      if (index === void 0) {
        validate(parent, key, replacement);
        parent[key] = replacement;
      } else {
        const items = parent[key].slice();
        if (placeholder.type === 'statement' || placeholder.type === 'param') {
          if (replacement == null) {
            items.splice(index, 1);
          } else if (Array.isArray(replacement)) {
            items.splice(index, 1, ...replacement);
          } else {
            items[index] = replacement;
          }
        } else {
          items[index] = replacement;
        }
        validate(parent, key, items);
        parent[key] = items;
      }
    }
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/string.js
var require_string = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/string.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = stringTemplate;
    var _options = require_options();
    var _parse = require_parse();
    var _populate = require_populate();
    function stringTemplate(formatter, code, opts) {
      code = formatter.code(code);
      let metadata;
      return arg => {
        const replacements = (0, _options.normalizeReplacements)(arg);
        if (!metadata) metadata = (0, _parse.default)(formatter, code, opts);
        return formatter.unwrap((0, _populate.default)(metadata, replacements));
      };
    }
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/literal.js
var require_literal = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/literal.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = literalTemplate;
    var _options = require_options();
    var _parse = require_parse();
    var _populate = require_populate();
    function literalTemplate(formatter, tpl, opts) {
      const { metadata, names } = buildLiteralData(formatter, tpl, opts);
      return arg => {
        const defaultReplacements = {};
        arg.forEach((replacement, i) => {
          defaultReplacements[names[i]] = replacement;
        });
        return arg2 => {
          const replacements = (0, _options.normalizeReplacements)(arg2);
          if (replacements) {
            Object.keys(replacements).forEach(key => {
              if (Object.prototype.hasOwnProperty.call(defaultReplacements, key)) {
                throw new Error('Unexpected replacement overlap.');
              }
            });
          }
          return formatter.unwrap(
            (0, _populate.default)(
              metadata,
              replacements ? Object.assign(replacements, defaultReplacements) : defaultReplacements
            )
          );
        };
      };
    }
    function buildLiteralData(formatter, tpl, opts) {
      let names;
      let nameSet;
      let metadata;
      let prefix = '';
      do {
        prefix += '$';
        const result = buildTemplateCode(tpl, prefix);
        names = result.names;
        nameSet = new Set(names);
        metadata = (0, _parse.default)(formatter, formatter.code(result.code), {
          parser: opts.parser,
          placeholderWhitelist: new Set(
            result.names.concat(opts.placeholderWhitelist ? Array.from(opts.placeholderWhitelist) : [])
          ),
          placeholderPattern: opts.placeholderPattern,
          preserveComments: opts.preserveComments,
          syntacticPlaceholders: opts.syntacticPlaceholders
        });
      } while (metadata.placeholders.some(placeholder => placeholder.isDuplicate && nameSet.has(placeholder.name)));
      return {
        metadata,
        names
      };
    }
    function buildTemplateCode(tpl, prefix) {
      const names = [];
      let code = tpl[0];
      for (let i = 1; i < tpl.length; i++) {
        const value = `${prefix}${i - 1}`;
        names.push(value);
        code += value + tpl[i];
      }
      return {
        names,
        code
      };
    }
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/builder.js
var require_builder = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/builder.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = createTemplateBuilder;
    var _options = require_options();
    var _string = require_string();
    var _literal = require_literal();
    var NO_PLACEHOLDER = (0, _options.validate)({
      placeholderPattern: false
    });
    function createTemplateBuilder(formatter, defaultOpts) {
      const templateFnCache = /* @__PURE__ */ new WeakMap();
      const templateAstCache = /* @__PURE__ */ new WeakMap();
      const cachedOpts = defaultOpts || (0, _options.validate)(null);
      return Object.assign(
        (tpl, ...args) => {
          if (typeof tpl === 'string') {
            if (args.length > 1) throw new Error('Unexpected extra params.');
            return extendedTrace(
              (0, _string.default)(formatter, tpl, (0, _options.merge)(cachedOpts, (0, _options.validate)(args[0])))
            );
          } else if (Array.isArray(tpl)) {
            let builder = templateFnCache.get(tpl);
            if (!builder) {
              builder = (0, _literal.default)(formatter, tpl, cachedOpts);
              templateFnCache.set(tpl, builder);
            }
            return extendedTrace(builder(args));
          } else if (typeof tpl === 'object' && tpl) {
            if (args.length > 0) throw new Error('Unexpected extra params.');
            return createTemplateBuilder(formatter, (0, _options.merge)(cachedOpts, (0, _options.validate)(tpl)));
          }
          throw new Error(`Unexpected template param ${typeof tpl}`);
        },
        {
          ast: (tpl, ...args) => {
            if (typeof tpl === 'string') {
              if (args.length > 1) throw new Error('Unexpected extra params.');
              return (0, _string.default)(
                formatter,
                tpl,
                (0, _options.merge)((0, _options.merge)(cachedOpts, (0, _options.validate)(args[0])), NO_PLACEHOLDER)
              )();
            } else if (Array.isArray(tpl)) {
              let builder = templateAstCache.get(tpl);
              if (!builder) {
                builder = (0, _literal.default)(formatter, tpl, (0, _options.merge)(cachedOpts, NO_PLACEHOLDER));
                templateAstCache.set(tpl, builder);
              }
              return builder(args)();
            }
            throw new Error(`Unexpected template param ${typeof tpl}`);
          }
        }
      );
    }
    function extendedTrace(fn) {
      let rootStack = '';
      try {
        throw new Error();
      } catch (error) {
        if (error.stack) {
          rootStack = error.stack
            .split('\n')
            .slice(3)
            .join('\n');
        }
      }
      return arg => {
        try {
          return fn(arg);
        } catch (err) {
          err.stack += `
    =============
${rootStack}`;
          throw err;
        }
      };
    }
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/index.js
var require_lib = __commonJS({
  'esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/node_modules/@babel/template/lib/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.statements = exports.statement = exports.smart = exports.program = exports.expression = exports.default = void 0;
    var formatters = require_formatters();
    var _builder = require_builder();
    var smart2 = (0, _builder.default)(formatters.smart);
    exports.smart = smart2;
    var statement2 = (0, _builder.default)(formatters.statement);
    exports.statement = statement2;
    var statements2 = (0, _builder.default)(formatters.statements);
    exports.statements = statements2;
    var expression2 = (0, _builder.default)(formatters.expression);
    exports.expression = expression2;
    var program2 = (0, _builder.default)(formatters.program);
    exports.program = program2;
    var _default = Object.assign(smart2.bind(void 0), {
      smart: smart2,
      statement: statement2,
      statements: statements2,
      expression: expression2,
      program: program2,
      ast: smart2.ast
    });
    exports.default = _default;
  }
});

// esm-build-4ed940153b1040add9fdc3bc75c7a265d0716e23-cd8201ca/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { statements, statement, smart, program, expression } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default, expression, program, smart, statement, statements };
