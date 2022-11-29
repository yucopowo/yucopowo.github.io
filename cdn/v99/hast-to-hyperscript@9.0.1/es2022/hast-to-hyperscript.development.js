/* esm.sh - esbuild bundle(hast-to-hyperscript@9.0.1) es2022 development */
import __property_information_find$ from '/cdn/v99/property-information@5.6.0/es2022/find.development.js';
import __property_information_svg$ from '/cdn/v99/property-information@5.6.0/es2022/svg.development.js';
import __property_information_html$ from '/cdn/v99/property-information@5.6.0/es2022/html.development.js';
import __unist_util_is_convert$ from '/cdn/v99/unist-util-is@4.1.0/es2022/convert.development.js';
import __style_to_object$ from '/cdn/v99/style-to-object@0.3.0/es2022/style-to-object.development.js';
import __comma_separated_tokens$ from '/cdn/v99/comma-separated-tokens@1.0.8/es2022/comma-separated-tokens.development.js';
import __property_information_hast_to_react_json$ from '/cdn/v99/property-information@5.6.0/es2022/hast-to-react.json.development.js';
import __web_namespaces$ from '/cdn/v99/web-namespaces@1.1.4/es2022/web-namespaces.development.js';
import __space_separated_tokens$ from '/cdn/v99/space-separated-tokens@1.1.5/es2022/space-separated-tokens.development.js';
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

// esm-build-5cdc296ed3c8549c8a7b31d05dc662a8256d9d91-d2b54ff2/node_modules/hast-to-hyperscript/index.js
var require_hast_to_hyperscript = __commonJS({
  'esm-build-5cdc296ed3c8549c8a7b31d05dc662a8256d9d91-d2b54ff2/node_modules/hast-to-hyperscript/index.js'(
    exports,
    module
  ) {
    'use strict';

    var html = __property_information_html$;
    var svg = __property_information_svg$;
    var find = __property_information_find$;
    var hastToReact = __property_information_hast_to_react_json$;
    var spaces = __space_separated_tokens$;
    var commas = __comma_separated_tokens$;
    var style = __style_to_object$;
    var ns = __web_namespaces$;
    var convert = __unist_util_is_convert$;
    var root = convert('root');
    var element = convert('element');
    var text = convert('text');
    module.exports = wrapper;
    function wrapper(h, node, options) {
      var settings = options || {};
      var r = react(h);
      var v = vue(h);
      var vd = vdom(h);
      var prefix;
      if (typeof h !== 'function') {
        throw new Error('h is not a function');
      }
      if (typeof settings === 'string' || typeof settings === 'boolean') {
        prefix = settings;
        settings = {};
      } else {
        prefix = settings.prefix;
      }
      if (root(node)) {
        node =
          node.children.length === 1 && element(node.children[0])
            ? node.children[0]
            : {
                type: 'element',
                tagName: 'div',
                properties: {},
                children: node.children
              };
      } else if (!element(node)) {
        throw new Error('Expected root or element, not `' + ((node && node.type) || node) + '`');
      }
      return toH(h, node, {
        schema: settings.space === 'svg' ? svg : html,
        prefix: prefix == null ? (r || v || vd ? 'h-' : null) : prefix,
        key: 0,
        react: r,
        vue: v,
        vdom: vd,
        hyperscript: hyperscript(h)
      });
    }
    function toH(h, node, ctx) {
      var parentSchema = ctx.schema;
      var schema = parentSchema;
      var name = node.tagName;
      var attributes = {};
      var nodes = [];
      var index = -1;
      var key;
      var value;
      if (parentSchema.space === 'html' && name.toLowerCase() === 'svg') {
        schema = svg;
        ctx.schema = schema;
      }
      for (key in node.properties) {
        addAttribute(attributes, key, node.properties[key], ctx, name);
      }
      if (ctx.vdom) {
        if (schema.space === 'html') {
          name = name.toUpperCase();
        } else {
          attributes.namespace = ns[schema.space];
        }
      }
      if (ctx.prefix) {
        ctx.key++;
        attributes.key = ctx.prefix + ctx.key;
      }
      if (node.children) {
        while (++index < node.children.length) {
          value = node.children[index];
          if (element(value)) {
            nodes.push(toH(h, value, ctx));
          } else if (text(value)) {
            nodes.push(value.value);
          }
        }
      }
      ctx.schema = parentSchema;
      return nodes.length ? h.call(node, name, attributes, nodes) : h.call(node, name, attributes);
    }
    function addAttribute(props, prop, value, ctx, name) {
      var info = find(ctx.schema, prop);
      var subprop;
      if (
        value == null ||
        value !== value ||
        (value === false && (ctx.vue || ctx.vdom || ctx.hyperscript)) ||
        (!value && info.boolean && (ctx.vue || ctx.vdom || ctx.hyperscript))
      ) {
        return;
      }
      if (value && typeof value === 'object' && 'length' in value) {
        value = (info.commaSeparated ? commas : spaces).stringify(value);
      }
      if (info.boolean && ctx.hyperscript) {
        value = '';
      }
      if (info.property === 'style' && typeof value === 'string' && (ctx.react || ctx.vue || ctx.vdom)) {
        value = parseStyle(value, name);
      }
      if (ctx.vue) {
        if (info.property !== 'style') subprop = 'attrs';
      } else if (!info.mustUseProperty) {
        if (ctx.vdom) {
          if (info.property !== 'style') subprop = 'attributes';
        } else if (ctx.hyperscript) {
          subprop = 'attrs';
        }
      }
      if (subprop) {
        if (!props[subprop]) props[subprop] = {};
        props[subprop][info.attribute] = value;
      } else if (info.space && ctx.react) {
        props[hastToReact[info.property] || info.property] = value;
      } else {
        props[info.attribute] = value;
      }
    }
    function react(h) {
      var node = h && h('div');
      return Boolean(node && ('_owner' in node || '_store' in node) && node.key == null);
    }
    function hyperscript(h) {
      return Boolean(h && h.context && h.cleanup);
    }
    function vdom(h) {
      return h && h('div').type === 'VirtualNode';
    }
    function vue(h) {
      var node = h && h('div');
      return Boolean(node && node.context && node.context._isVue);
    }
    function parseStyle(value, tagName) {
      var result = {};
      try {
        style(value, iterator);
      } catch (error) {
        error.message = tagName + '[style]' + error.message.slice('undefined'.length);
        throw error;
      }
      return result;
      function iterator(name, value2) {
        if (name.slice(0, 4) === '-ms-') name = 'ms-' + name.slice(4);
        result[name.replace(/-([a-z])/g, styleReplacer)] = value2;
      }
    }
    function styleReplacer($0, $1) {
      return $1.toUpperCase();
    }
  }
});

// esm-build-5cdc296ed3c8549c8a7b31d05dc662a8256d9d91-d2b54ff2/mod.js
var __module = __toESM(require_hast_to_hyperscript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
