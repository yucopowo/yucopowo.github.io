/* esm.sh - esbuild bundle(hastscript@6.0.0) es2022 development */
import { parse as __comma_separated_tokens$parse } from '/cdn/v99/comma-separated-tokens@1.0.8/es2022/comma-separated-tokens.development.js';
import { parse as __space_separated_tokens$parse } from '/cdn/v99/space-separated-tokens@1.1.5/es2022/space-separated-tokens.development.js';
import __hast_util_parse_selector$ from '/cdn/v99/hast-util-parse-selector@2.2.5/es2022/hast-util-parse-selector.development.js';
import __property_information_normalize$ from '/cdn/v99/property-information@5.6.0/es2022/normalize.development.js';
import __property_information_find$ from '/cdn/v99/property-information@5.6.0/es2022/find.development.js';
import __property_information_html$ from '/cdn/v99/property-information@5.6.0/es2022/html.development.js';
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

// esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/node_modules/hastscript/factory.js
var require_factory = __commonJS({
  'esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/node_modules/hastscript/factory.js'(exports, module) {
    'use strict';

    var find = __property_information_find$;
    var normalize = __property_information_normalize$;
    var parseSelector = __hast_util_parse_selector$;
    var spaces = __space_separated_tokens$parse;
    var commas = __comma_separated_tokens$parse;
    module.exports = factory;
    var own = {}.hasOwnProperty;
    function factory(schema, defaultTagName, caseSensitive) {
      var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
      return h;
      function h(selector, properties) {
        var node = parseSelector(selector, defaultTagName);
        var children = Array.prototype.slice.call(arguments, 2);
        var name = node.tagName.toLowerCase();
        var property;
        node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name;
        if (properties && isChildren(properties, node)) {
          children.unshift(properties);
          properties = null;
        }
        if (properties) {
          for (property in properties) {
            addProperty(node.properties, property, properties[property]);
          }
        }
        addChild(node.children, children);
        if (node.tagName === 'template') {
          node.content = {
            type: 'root',
            children: node.children
          };
          node.children = [];
        }
        return node;
      }
      function addProperty(properties, key, value) {
        var info;
        var property;
        var result;
        if (value === null || value === void 0 || value !== value) {
          return;
        }
        info = find(schema, key);
        property = info.property;
        result = value;
        if (typeof result === 'string') {
          if (info.spaceSeparated) {
            result = spaces(result);
          } else if (info.commaSeparated) {
            result = commas(result);
          } else if (info.commaOrSpaceSeparated) {
            result = spaces(commas(result).join(' '));
          }
        }
        if (property === 'style' && typeof value !== 'string') {
          result = style(result);
        }
        if (property === 'className' && properties.className) {
          result = properties.className.concat(result);
        }
        properties[property] = parsePrimitives(info, property, result);
      }
    }
    function isChildren(value, node) {
      return typeof value === 'string' || 'length' in value || isNode(node.tagName, value);
    }
    function isNode(tagName, value) {
      var type = value.type;
      if (tagName === 'input' || !type || typeof type !== 'string') {
        return false;
      }
      if (typeof value.children === 'object' && 'length' in value.children) {
        return true;
      }
      type = type.toLowerCase();
      if (tagName === 'button') {
        return type !== 'menu' && type !== 'submit' && type !== 'reset' && type !== 'button';
      }
      return 'value' in value;
    }
    function addChild(nodes, value) {
      var index;
      var length;
      if (typeof value === 'string' || typeof value === 'number') {
        nodes.push({
          type: 'text',
          value: String(value)
        });
        return;
      }
      if (typeof value === 'object' && 'length' in value) {
        index = -1;
        length = value.length;
        while (++index < length) {
          addChild(nodes, value[index]);
        }
        return;
      }
      if (typeof value !== 'object' || !('type' in value)) {
        throw new Error('Expected node, nodes, or string, got `' + value + '`');
      }
      nodes.push(value);
    }
    function parsePrimitives(info, name, value) {
      var index;
      var length;
      var result;
      if (typeof value !== 'object' || !('length' in value)) {
        return parsePrimitive(info, name, value);
      }
      length = value.length;
      index = -1;
      result = [];
      while (++index < length) {
        result[index] = parsePrimitive(info, name, value[index]);
      }
      return result;
    }
    function parsePrimitive(info, name, value) {
      var result = value;
      if (info.number || info.positiveNumber) {
        if (!isNaN(result) && result !== '') {
          result = Number(result);
        }
      } else if (info.boolean || info.overloadedBoolean) {
        if (typeof result === 'string' && (result === '' || normalize(value) === normalize(name))) {
          result = true;
        }
      }
      return result;
    }
    function style(value) {
      var result = [];
      var key;
      for (key in value) {
        result.push([key, value[key]].join(': '));
      }
      return result.join('; ');
    }
    function createAdjustMap(values) {
      var length = values.length;
      var index = -1;
      var result = {};
      var value;
      while (++index < length) {
        value = values[index];
        result[value.toLowerCase()] = value;
      }
      return result;
    }
  }
});

// esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/node_modules/hastscript/html.js
var require_html = __commonJS({
  'esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/node_modules/hastscript/html.js'(exports, module) {
    'use strict';

    var schema = __property_information_html$;
    var factory = require_factory();
    var html = factory(schema, 'div');
    html.displayName = 'html';
    module.exports = html;
  }
});

// esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/node_modules/hastscript/index.js
var require_hastscript = __commonJS({
  'esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/node_modules/hastscript/index.js'(exports, module) {
    'use strict';

    module.exports = require_html();
  }
});

// esm-build-0eda329a3299c58c338761c2cff44902029e7ad6-d1ef29a8/mod.js
var __module = __toESM(require_hastscript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
