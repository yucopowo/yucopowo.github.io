/* esm.sh - esbuild bundle(unified@9.2.0) es2022 development */
import __is_plain_obj$ from '/cdn/v99/is-plain-obj@2.1.0/es2022/is-plain-obj.development.js';
import __extend$ from '/cdn/v99/extend@3.0.2/es2022/extend.development.js';
import __is_buffer$ from '/cdn/v99/is-buffer@2.0.5/es2022/is-buffer.development.js';
import __bail$ from '/cdn/v99/bail@1.0.5/es2022/bail.development.js';
import __vfile$ from '/cdn/v99/vfile@4.2.1/es2022/vfile.development.js';
import __trough$ from '/cdn/v99/trough@1.0.5/es2022/trough.development.js';
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

// esm-build-08a9858784e37b5bc31c2ace3bacb89250e2b14a-d378d51e/node_modules/unified/index.js
var require_unified = __commonJS({
  'esm-build-08a9858784e37b5bc31c2ace3bacb89250e2b14a-d378d51e/node_modules/unified/index.js'(exports, module) {
    'use strict';

    var bail = __bail$;
    var buffer = __is_buffer$;
    var extend = __extend$;
    var plain = __is_plain_obj$;
    var trough = __trough$;
    var vfile = __vfile$;
    module.exports = unified().freeze();
    var slice = [].slice;
    var own = {}.hasOwnProperty;
    var pipeline = trough()
      .use(pipelineParse)
      .use(pipelineRun)
      .use(pipelineStringify);
    function pipelineParse(p, ctx) {
      ctx.tree = p.parse(ctx.file);
    }
    function pipelineRun(p, ctx, next) {
      p.run(ctx.tree, ctx.file, done);
      function done(err, tree, file) {
        if (err) {
          next(err);
        } else {
          ctx.tree = tree;
          ctx.file = file;
          next();
        }
      }
    }
    function pipelineStringify(p, ctx) {
      var result = p.stringify(ctx.tree, ctx.file);
      var file = ctx.file;
      if (result === void 0 || result === null) {
      } else if (typeof result === 'string' || buffer(result)) {
        file.contents = result;
      } else {
        file.result = result;
      }
    }
    function unified() {
      var attachers = [];
      var transformers = trough();
      var namespace = {};
      var frozen = false;
      var freezeIndex = -1;
      processor.data = data;
      processor.freeze = freeze;
      processor.attachers = attachers;
      processor.use = use;
      processor.parse = parse;
      processor.stringify = stringify;
      processor.run = run;
      processor.runSync = runSync;
      processor.process = process;
      processor.processSync = processSync;
      return processor;
      function processor() {
        var destination = unified();
        var length = attachers.length;
        var index = -1;
        while (++index < length) {
          destination.use.apply(null, attachers[index]);
        }
        destination.data(extend(true, {}, namespace));
        return destination;
      }
      function freeze() {
        var values;
        var plugin;
        var options;
        var transformer;
        if (frozen) {
          return processor;
        }
        while (++freezeIndex < attachers.length) {
          values = attachers[freezeIndex];
          plugin = values[0];
          options = values[1];
          transformer = null;
          if (options === false) {
            continue;
          }
          if (options === true) {
            values[1] = void 0;
          }
          transformer = plugin.apply(processor, values.slice(1));
          if (typeof transformer === 'function') {
            transformers.use(transformer);
          }
        }
        frozen = true;
        freezeIndex = Infinity;
        return processor;
      }
      function data(key, value) {
        if (typeof key === 'string') {
          if (arguments.length === 2) {
            assertUnfrozen('data', frozen);
            namespace[key] = value;
            return processor;
          }
          return (own.call(namespace, key) && namespace[key]) || null;
        }
        if (key) {
          assertUnfrozen('data', frozen);
          namespace = key;
          return processor;
        }
        return namespace;
      }
      function use(value) {
        var settings;
        assertUnfrozen('use', frozen);
        if (value === null || value === void 0) {
        } else if (typeof value === 'function') {
          addPlugin.apply(null, arguments);
        } else if (typeof value === 'object') {
          if ('length' in value) {
            addList(value);
          } else {
            addPreset(value);
          }
        } else {
          throw new Error('Expected usable value, not `' + value + '`');
        }
        if (settings) {
          namespace.settings = extend(namespace.settings || {}, settings);
        }
        return processor;
        function addPreset(result) {
          addList(result.plugins);
          if (result.settings) {
            settings = extend(settings || {}, result.settings);
          }
        }
        function add(value2) {
          if (typeof value2 === 'function') {
            addPlugin(value2);
          } else if (typeof value2 === 'object') {
            if ('length' in value2) {
              addPlugin.apply(null, value2);
            } else {
              addPreset(value2);
            }
          } else {
            throw new Error('Expected usable value, not `' + value2 + '`');
          }
        }
        function addList(plugins) {
          var length;
          var index;
          if (plugins === null || plugins === void 0) {
          } else if (typeof plugins === 'object' && 'length' in plugins) {
            length = plugins.length;
            index = -1;
            while (++index < length) {
              add(plugins[index]);
            }
          } else {
            throw new Error('Expected a list of plugins, not `' + plugins + '`');
          }
        }
        function addPlugin(plugin, value2) {
          var entry = find(plugin);
          if (entry) {
            if (plain(entry[1]) && plain(value2)) {
              value2 = extend(entry[1], value2);
            }
            entry[1] = value2;
          } else {
            attachers.push(slice.call(arguments));
          }
        }
      }
      function find(plugin) {
        var length = attachers.length;
        var index = -1;
        var entry;
        while (++index < length) {
          entry = attachers[index];
          if (entry[0] === plugin) {
            return entry;
          }
        }
      }
      function parse(doc) {
        var file = vfile(doc);
        var Parser;
        freeze();
        Parser = processor.Parser;
        assertParser('parse', Parser);
        if (newable(Parser, 'parse')) {
          return new Parser(String(file), file).parse();
        }
        return Parser(String(file), file);
      }
      function run(node, file, cb) {
        assertNode(node);
        freeze();
        if (!cb && typeof file === 'function') {
          cb = file;
          file = null;
        }
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          transformers.run(node, vfile(file), done);
          function done(err, tree, file2) {
            tree = tree || node;
            if (err) {
              reject(err);
            } else if (resolve) {
              resolve(tree);
            } else {
              cb(null, tree, file2);
            }
          }
        }
      }
      function runSync(node, file) {
        var complete = false;
        var result;
        run(node, file, done);
        assertDone('runSync', 'run', complete);
        return result;
        function done(err, tree) {
          complete = true;
          bail(err);
          result = tree;
        }
      }
      function stringify(node, doc) {
        var file = vfile(doc);
        var Compiler;
        freeze();
        Compiler = processor.Compiler;
        assertCompiler('stringify', Compiler);
        assertNode(node);
        if (newable(Compiler, 'compile')) {
          return new Compiler(node, file).compile();
        }
        return Compiler(node, file);
      }
      function process(doc, cb) {
        freeze();
        assertParser('process', processor.Parser);
        assertCompiler('process', processor.Compiler);
        if (!cb) {
          return new Promise(executor);
        }
        executor(null, cb);
        function executor(resolve, reject) {
          var file = vfile(doc);
          pipeline.run(
            processor,
            {
              file
            },
            done
          );
          function done(err) {
            if (err) {
              reject(err);
            } else if (resolve) {
              resolve(file);
            } else {
              cb(null, file);
            }
          }
        }
      }
      function processSync(doc) {
        var complete = false;
        var file;
        freeze();
        assertParser('processSync', processor.Parser);
        assertCompiler('processSync', processor.Compiler);
        file = vfile(doc);
        process(file, done);
        assertDone('processSync', 'process', complete);
        return file;
        function done(err) {
          complete = true;
          bail(err);
        }
      }
    }
    function newable(value, name) {
      return typeof value === 'function' && value.prototype && (keys(value.prototype) || name in value.prototype);
    }
    function keys(value) {
      var key;
      for (key in value) {
        return true;
      }
      return false;
    }
    function assertParser(name, Parser) {
      if (typeof Parser !== 'function') {
        throw new Error('Cannot `' + name + '` without `Parser`');
      }
    }
    function assertCompiler(name, Compiler) {
      if (typeof Compiler !== 'function') {
        throw new Error('Cannot `' + name + '` without `Compiler`');
      }
    }
    function assertUnfrozen(name, frozen) {
      if (frozen) {
        throw new Error(
          'Cannot invoke `' +
            name +
            '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
        );
      }
    }
    function assertNode(node) {
      if (!node || typeof node.type !== 'string') {
        throw new Error('Expected node, got `' + node + '`');
      }
    }
    function assertDone(name, asyncName, complete) {
      if (!complete) {
        throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
      }
    }
  }
});

// esm-build-08a9858784e37b5bc31c2ace3bacb89250e2b14a-d378d51e/mod.js
var __module = __toESM(require_unified());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
