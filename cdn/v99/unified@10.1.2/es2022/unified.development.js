/* esm.sh - esbuild bundle(unified@10.1.2) es2022 development */
// esm-build-15ef94f108bb8bbd2790dd818e284d0031591667-53358864/node_modules/unified/lib/index.js
import { bail } from '/cdn/v99/bail@2.0.2/es2022/bail.development.js';
import isBuffer from '/cdn/v99/is-buffer@2.0.5/es2022/is-buffer.development.js';
import extend from '/cdn/v99/extend@3.0.2/es2022/extend.development.js';
import isPlainObj from '/cdn/v99/is-plain-obj@4.1.0/es2022/is-plain-obj.development.js';
import { trough } from '/cdn/v99/trough@2.1.0/es2022/trough.development.js';
import { VFile } from '/cdn/v99/vfile@5.3.6/es2022/vfile.development.js';
var unified = base().freeze();
var own = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data;
  processor.Parser = void 0;
  processor.Compiler = void 0;
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
    const destination = base();
    let index = -1;
    while (++index < attachers.length) {
      destination.use(...attachers[index]);
    }
    destination.data(extend(true, {}, namespace));
    return destination;
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
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen('use', frozen);
    if (value === null || value === void 0) {
    } else if (typeof value === 'function') {
      addPlugin(value, ...options);
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`');
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add(value2) {
      if (typeof value2 === 'function') {
        addPlugin(value2);
      } else if (typeof value2 === 'object') {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value2 + '`');
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index = -1;
      if (plugins === null || plugins === void 0) {
      } else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          const thing = plugins[index];
          add(thing);
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`');
      }
    }
    function addPlugin(plugin, value2) {
      let index = -1;
      let entry;
      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entry = attachers[index];
          break;
        }
      }
      if (entry) {
        if (isPlainObj(entry[1]) && isPlainObj(value2)) {
          value2 = extend(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser = processor.Parser;
    assertParser('parse', Parser);
    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse();
    }
    return Parser(String(file), file);
  }
  function stringify(node, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);
    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc === 'function') {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node, file) {
    let result;
    let complete;
    processor.run(node, file, done);
    assertDone('runSync', 'run', complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process(doc, callback) {
    processor.freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null) {
          } else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    const file = vfile(doc);
    processor.process(file, done);
    assertDone('processSync', 'process', complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === 'function' && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value) {
    if (own.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Parser`');
  }
}
function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Compiler`');
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot call `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    );
  }
}
function assertNode(node) {
  if (!isPlainObj(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`');
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === 'string' || isBuffer(value);
}
export { unified };
