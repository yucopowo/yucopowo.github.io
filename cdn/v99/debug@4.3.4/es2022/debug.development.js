/* esm.sh - esbuild bundle(debug@4.3.4) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import __ms$ from '/cdn/v99/ms@2.1.2/es2022/ms.development.js';
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

// esm-build-eba5234be33ad921ed8ede5ea1e576e71d443045-776cbda0/node_modules/debug/src/common.js
var require_common = __commonJS({
  'esm-build-eba5234be33ad921ed8ede5ea1e576e71d443045-776cbda0/node_modules/debug/src/common.js'(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = __ms$;
      createDebug.destroy = destroy;
      Object.keys(env).forEach(key => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== 'string') {
            args.unshift('%O');
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === '%%') {
              return '%';
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === 'function') {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, 'enabled', {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: v => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === 'function') {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, '.*?');
          if (namespaces[0] === '-') {
            createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
          } else {
            createDebug.names.push(new RegExp('^' + namespaces + '$'));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === '*') {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp
          .toString()
          .substring(2, regexp.toString().length - 2)
          .replace(/\.\*\?$/, '*');
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn(
          'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
        );
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// esm-build-eba5234be33ad921ed8ede5ea1e576e71d443045-776cbda0/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  'esm-build-eba5234be33ad921ed8ede5ea1e576e71d443045-776cbda0/node_modules/debug/src/browser.js'(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn(
            'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
          );
        }
      };
    })();
    exports.colors = [
      '#0000CC',
      '#0000FF',
      '#0033CC',
      '#0033FF',
      '#0066CC',
      '#0066FF',
      '#0099CC',
      '#0099FF',
      '#00CC00',
      '#00CC33',
      '#00CC66',
      '#00CC99',
      '#00CCCC',
      '#00CCFF',
      '#3300CC',
      '#3300FF',
      '#3333CC',
      '#3333FF',
      '#3366CC',
      '#3366FF',
      '#3399CC',
      '#3399FF',
      '#33CC00',
      '#33CC33',
      '#33CC66',
      '#33CC99',
      '#33CCCC',
      '#33CCFF',
      '#6600CC',
      '#6600FF',
      '#6633CC',
      '#6633FF',
      '#66CC00',
      '#66CC33',
      '#9900CC',
      '#9900FF',
      '#9933CC',
      '#9933FF',
      '#99CC00',
      '#99CC33',
      '#CC0000',
      '#CC0033',
      '#CC0066',
      '#CC0099',
      '#CC00CC',
      '#CC00FF',
      '#CC3300',
      '#CC3333',
      '#CC3366',
      '#CC3399',
      '#CC33CC',
      '#CC33FF',
      '#CC6600',
      '#CC6633',
      '#CC9900',
      '#CC9933',
      '#CCCC00',
      '#CCCC33',
      '#FF0000',
      '#FF0033',
      '#FF0066',
      '#FF0099',
      '#FF00CC',
      '#FF00FF',
      '#FF3300',
      '#FF3333',
      '#FF3366',
      '#FF3399',
      '#FF33CC',
      '#FF33FF',
      '#FF6600',
      '#FF6633',
      '#FF9900',
      '#FF9933',
      '#FFCC00',
      '#FFCC33'
    ];
    function useColors() {
      if (
        typeof window !== 'undefined' &&
        window.process &&
        (window.process.type === 'renderer' || window.process.__nwjs)
      ) {
        return true;
      }
      if (
        typeof navigator !== 'undefined' &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ) {
        return false;
      }
      return (
        (typeof document !== 'undefined' &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window !== 'undefined' &&
          window.console &&
          (window.console.firebug || (window.console.exception && window.console.table))) ||
        (typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator !== 'undefined' &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      );
    }
    function formatArgs(args) {
      args[0] =
        (this.useColors ? '%c' : '') +
        this.namespace +
        (this.useColors ? ' %c' : ' ') +
        args[0] +
        (this.useColors ? '%c ' : ' ') +
        '+' +
        module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit');
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, match => {
        if (match === '%%') {
          return;
        }
        index++;
        if (match === '%c') {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {});
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem('debug', namespaces);
        } else {
          exports.storage.removeItem('debug');
        }
      } catch (error) {}
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem('debug');
      } catch (error) {}
      if (!r && typeof __Process$ !== 'undefined' && 'env' in __Process$) {
        r = __Process$.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {}
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
      }
    };
  }
});

// esm-build-eba5234be33ad921ed8ede5ea1e576e71d443045-776cbda0/mod.js
var __module = __toESM(require_browser());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };